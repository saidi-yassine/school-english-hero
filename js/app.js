/* =====================================================================
   English Hero — Application
   Router · State · Lesson engine · Exercises · Speech · Gamification
   ===================================================================== */
(function () {
  "use strict";

  /* ================= Utilities ================= */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const EH = window.EH;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function todayKey(d) {
    const x = d || new Date();
    return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0");
  }
  function dayDiff(a, b) {
    const d1 = new Date(a + "T00:00:00"), d2 = new Date(b + "T00:00:00");
    return Math.round((d2 - d1) / 86400000);
  }
  function pct(a, b) { return b > 0 ? Math.round((a / b) * 100) : 0; }
  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function norm(s) {
    return String(s || "").toLowerCase().replace(/[.,!?;:"'’`\-–—]/g, "").replace(/\s+/g, " ").trim();
  }
  function words(s) { return norm(s).split(" ").filter(Boolean); }

  /* ================= Speech ================= */
  const speechOK = typeof window !== "undefined" && "speechSynthesis" in window;
  let voices = [];
  function loadVoices() {
    if (!speechOK) return;
    try { voices = window.speechSynthesis.getVoices() || []; } catch (e) { voices = []; }
  }
  if (speechOK) { loadVoices(); try { window.speechSynthesis.onvoiceschanged = loadVoices; } catch (e) { /* noop */ } }

  function pickVoice() {
    if (!voices.length) loadVoices();
    const pref = state.settings.voiceAccent || "en-GB";
    return voices.find(v => v.lang && v.lang.replace("_", "-").indexOf(pref) === 0)
        || voices.find(v => v.lang && v.lang.indexOf("en") === 0)
        || null;
  }
  function speak(text, rate, btn) {
    if (!speechOK) { toast("Speech not supported", "Your browser does not support audio playback.", "warn"); return; }
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text));
      const v = pickVoice(); if (v) u.voice = v;
      u.rate = rate || state.settings.rate || 0.92;
      u.pitch = 1;
      if (btn) { btn.classList.add("playing"); u.onend = () => btn.classList.remove("playing"); u.onerror = () => btn.classList.remove("playing"); }
      window.speechSynthesis.speak(u);
    } catch (e) { /* noop */ }
  }
  const SR = typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const sttOK = !!SR;

  /* ================= Curriculum ================= */
  const CUR = { levels: [] };
  const byId = { levels: {}, units: {}, lessons: {} };

  function buildCurriculum() {
    CUR.levels = [];
    byId.levels = {}; byId.units = {}; byId.lessons = {};
    (EH.levels || []).forEach((lv, li) => {
      const L = {
        id: lv.id, code: lv.code, name: lv.name, color: lv.color, tagline: lv.tagline,
        description: lv.description, canDo: lv.canDo || [], order: li, units: [], custom: false
      };
      CUR.levels.push(L); byId.levels[L.id] = L;
      (lv.units || []).forEach(u => {
        const uid = L.id + "u" + u.n;
        const U = {
          id: uid, n: u.n, title: u.title, theme: u.theme, levelId: L.id,
          lessons: [], vocab: u.vocab || [], gram: u.gram || null, listen: u.listen || null,
          read: u.read || null, write: u.write || null, speak: u.speak || [], ex: u.ex || [],
          custom: false
        };
        (u.lessons || []).forEach((ls, i) => {
          const lid = uid + "l" + (i + 1);
          const LO = { id: lid, unitId: uid, levelId: L.id, index: i, title: ls.t, objective: ls.obj, points: ls.pts || [] };
          U.lessons.push(LO); byId.lessons[lid] = LO;
        });
        L.units.push(U); byId.units[uid] = U;
      });
    });
  }

  function applyCustom() {
    const c = state.custom;
    (c.levels || []).forEach(x => {
      if (byId.levels[x.id]) return;
      const L = { id: x.id, code: x.code, name: x.name, color: x.color || "a1", tagline: x.tagline || "", description: x.description || "", canDo: [], units: [], order: CUR.levels.length, custom: true };
      CUR.levels.push(L); byId.levels[L.id] = L;
    });
    (c.units || []).forEach(x => {
      const L = byId.levels[x.levelId]; if (!L || byId.units[x.id]) return;
      const U = { id: x.id, n: x.n || L.units.length + 1, title: x.title, theme: x.theme || "", levelId: x.levelId,
        lessons: [], vocab: [], gram: x.gram || null, listen: null, read: null, write: null, speak: [], ex: [], custom: true };
      L.units.push(U); byId.units[U.id] = U;
    });
    (c.lessons || []).forEach(x => {
      const U = byId.units[x.unitId]; if (!U || byId.lessons[x.id]) return;
      const LO = { id: x.id, unitId: x.unitId, levelId: U.levelId, index: U.lessons.length, title: x.title, objective: x.objective || "", points: x.points || [], custom: true };
      U.lessons.push(LO); byId.lessons[LO.id] = LO;
    });
    (c.vocab || []).forEach(x => {
      const U = byId.units[x.unitId]; if (!U) return;
      U.vocab.push({ w: x.w, ipa: x.ipa || "", pos: x.pos || "", def: x.def || "", ar: x.ar || "", ex: x.ex || "", custom: true });
    });
    (c.deleted || []).forEach(id => {
      if (byId.lessons[id]) {
        const L = byId.lessons[id]; delete byId.lessons[id];
        const U = byId.units[L.unitId]; if (U) U.lessons = U.lessons.filter(z => z.id !== id);
      } else if (byId.units[id]) {
        const U = byId.units[id]; delete byId.units[id];
        U.lessons.forEach(z => delete byId.lessons[z.id]);
        const L = byId.levels[U.levelId]; if (L) L.units = L.units.filter(z => z.id !== id);
      }
    });
  }

  function allUnits() { return CUR.levels.reduce((a, l) => a.concat(l.units), []); }
  function allLessons() { return allUnits().reduce((a, u) => a.concat(u.lessons), []); }
  function allVocab() {
    const out = [];
    allUnits().forEach(u => (u.vocab || []).forEach(v => out.push(Object.assign({ unitId: u.id, levelId: u.levelId, unitTitle: u.title }, v))));
    return out;
  }
  function allExercises() {
    const out = [];
    allUnits().forEach(u => (u.ex || []).forEach(e => out.push(Object.assign({ unitId: u.id, levelId: u.levelId }, e))));
    return out;
  }

  /* ================= State ================= */
  const KEY = "eh_state_v1";
  const DEFAULT_STATE = {
    onboarded: false,
    profile: { name: "Yassine", claimed: "", why: "", time: 30, goal: "", recommended: "a1", startLevel: "a1", createdAt: "" },
    currentLevel: "a1",
    progress: {
      lessons: {}, units: {}, tests: {},
      vocab: {}, listening: {}, speaking: {}, writing: {}, reading: {},
      exCorrect: 0, exWrong: 0, perfectScores: 0
    },
    xp: 0,
    streak: { count: 0, best: 0, last: "", days: [] },
    achievements: [],
    daily: { date: "", plan: {}, xp: 0 },
    activity: [],
    custom: { levels: [], units: [], lessons: [], vocab: [], deleted: [] },
    settings: { theme: "light", lang: "en", rate: 0.92, voiceAccent: "en-GB" },
    adminMode: false
  };
  let state = JSON.parse(JSON.stringify(DEFAULT_STATE));

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const p = JSON.parse(raw);
        state = Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), p);
        state.progress = Object.assign({}, DEFAULT_STATE.progress, p.progress || {});
        state.streak = Object.assign({}, DEFAULT_STATE.streak, p.streak || {});
        state.daily = Object.assign({}, DEFAULT_STATE.daily, p.daily || {});
        state.settings = Object.assign({}, DEFAULT_STATE.settings, p.settings || {});
        state.custom = Object.assign({}, DEFAULT_STATE.custom, p.custom || {});
      }
    } catch (e) { /* corrupt storage — start fresh */ }
  }
  let saveTimer = null;
  function save() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* quota */ }
    }, 120);
  }

  /* ================= Derived stats ================= */
  function levelLessons(lid) {
    const L = byId.levels[lid]; return L ? L.units.reduce((a, u) => a.concat(u.lessons), []) : [];
  }
  function levelDone(lid) { return levelLessons(lid).filter(l => state.progress.lessons[l.id]).length; }
  function levelTotal(lid) { return levelLessons(lid).length; }
  function levelPct(lid) { return pct(levelDone(lid), levelTotal(lid)); }
  function unitDone(uid) {
    const U = byId.units[uid]; if (!U || !U.lessons.length) return 0;
    return U.lessons.filter(l => state.progress.lessons[l.id]).length;
  }
  function unitPct(uid) { const U = byId.units[uid]; return U ? pct(unitDone(uid), U.lessons.length) : 0; }
  function isUnitComplete(uid) { const U = byId.units[uid]; return !!U && U.lessons.length > 0 && unitDone(uid) === U.lessons.length; }
  function levelUnlocked(lid) {
    const L = byId.levels[lid]; if (!L) return false;
    if (L.order === 0) return true;
    const prev = CUR.levels[L.order - 1];
    if (!prev) return true;
    return !!state.progress.tests[prev.id];
  }
  function unitUnlocked(uid) {
    const U = byId.units[uid]; if (!U) return false;
    if (!levelUnlocked(U.levelId)) return false;
    const L = byId.levels[U.levelId];
    const idx = L.units.findIndex(u => u.id === uid);
    if (idx <= 0) return true;
    return isUnitComplete(L.units[idx - 1].id);
  }
  function currentUnit() {
    for (const L of CUR.levels) {
      if (!levelUnlocked(L.id)) continue;
      for (const U of L.units) {
        if (unitPct(U.id) < 100) return U;
      }
    }
    return null;
  }
  function nextLesson() {
    for (const L of CUR.levels) {
      if (!levelUnlocked(L.id)) continue;
      for (const U of L.units) {
        if (unitPct(U.id) < 100) {
          const l = U.lessons.find(x => !state.progress.lessons[x.id]);
          if (l) return l;
        }
      }
    }
    return null;
  }
  function totalLessonsDone() { return Object.keys(state.progress.lessons).length; }
  function unitsDone() { return allUnits().filter(u => isUnitComplete(u.id)).length; }
  function wordsLearned() { return Object.values(state.progress.vocab).filter(v => v.status === "known").length; }
  function overallPct() { return pct(totalLessonsDone(), allLessons().length); }

  function skillScores() {
    const p = state.progress;
    const exTotal = p.exCorrect + p.exWrong;
    const grammar = exTotal ? pct(p.exCorrect, exTotal) : 0;
    const listening = pct(Object.keys(p.listening).length, Math.max(1, allUnits().filter(u => u.listen).length * 5));
    const speaking = pct(Object.keys(p.speaking).length, Math.max(1, allUnits().length * 5));
    const reading = pct(Object.keys(p.reading).length, Math.max(1, allUnits().length));
    const writing = pct(Object.keys(p.writing).length, Math.max(1, allUnits().length));
    const vocab = pct(wordsLearned(), Math.max(1, allVocab().length));
    const lessonPct = overallPct();
    return {
      speaking: clamp(Math.round((speaking * 0.6) + (lessonPct * 0.4)), 0, 100),
      listening: clamp(Math.round((listening * 0.6) + (lessonPct * 0.4)), 0, 100),
      grammar: clamp(Math.round((grammar * 0.7) + (lessonPct * 0.3)), 0, 100),
      reading: clamp(Math.round((reading * 0.6) + (lessonPct * 0.4)), 0, 100),
      writing: clamp(Math.round((writing * 0.6) + (lessonPct * 0.4)), 0, 100),
      vocabulary: clamp(Math.round((vocab * 0.6) + (lessonPct * 0.4)), 0, 100)
    };
  }
  function weakestSkill() {
    const s = skillScores();
    return Object.keys(s).sort((a, b) => s[a] - s[b])[0];
  }
  function levelForXp() { return Math.floor(state.xp / 500) + 1; }
  function xpInLevel() { return state.xp % 500; }

  /* ================= Gamification ================= */
  function addXp(n, reason) {
    if (!n) return;
    state.xp += n;
    state.daily.xp = (state.daily.xp || 0) + n;
    if (reason) toast("+" + n + " XP", reason, "xp");
    checkAchievements();
    save();
  }
  function touchStreak() {
    const t = todayKey();
    const s = state.streak;
    if (s.last === t) return;
    if (s.last && dayDiff(s.last, t) === 1) s.count += 1;
    else s.count = 1;
    s.last = t;
    s.best = Math.max(s.best || 0, s.count);
    if (!s.days) s.days = [];
    if (s.days.indexOf(t) === -1) s.days.push(t);
    if (s.days.length > 60) s.days = s.days.slice(-60);
    save();
  }
  function logActivity(type, text) {
    state.activity.unshift({ type: type, text: text, at: Date.now() });
    if (state.activity.length > 40) state.activity = state.activity.slice(0, 40);
    save();
  }
  function checkAchievements() {
    const stats = {
      lessonsDone: totalLessonsDone(), unitsDone: unitsDone(), wordsLearned: wordsLearned(),
      bestStreak: state.streak.best || 0, xp: state.xp, tests: state.progress.tests,
      perfectScores: state.progress.perfectScores || 0,
      speakingDone: Object.keys(state.progress.speaking).length,
      listeningDone: Object.keys(state.progress.listening).length,
      writingDone: Object.keys(state.progress.writing).length
    };
    (EH.achievements || []).forEach(a => {
      if (state.achievements.indexOf(a.id) !== -1) return;
      let ok = false;
      try { ok = !!a.check(stats); } catch (e) { ok = false; }
      if (ok) {
        state.achievements.push(a.id);
        toast(a.icon + "  " + a.name, "Achievement unlocked — " + a.desc, "ok");
        logActivity("badge", "Unlocked: " + a.name);
      }
    });
    save();
  }
  function ensureDaily() {
    const t = todayKey();
    if (state.daily.date !== t) {
      state.daily = { date: t, plan: {}, xp: 0 };
      save();
    }
  }
  function dailyPlanItems() {
    const mins = state.profile.time || 30;
    const m = Math.round(mins / 5);
    const u = currentUnit();
    const l = nextLesson();
    return [
      { id: "vocab", label: "Vocabulary", meta: "Review " + (state.profile.time >= 30 ? 10 : 5) + " words", time: m + " min", route: "#/vocabulary" },
      { id: "grammar", label: "Grammar", meta: u ? u.gram ? u.gram.title : u.title : "Grammar review", time: (m * 2) + " min", route: "#/grammar" },
      { id: "listening", label: "Listening", meta: u ? u.listen ? u.listen.title : "Listening practice" : "Listening practice", time: m + " min", route: "#/listening" },
      { id: "speaking", label: "Speaking", meta: "Answer 3 questions aloud", time: m + " min", route: "#/speaking" },
      { id: "lesson", label: l ? l.title : "Practice", meta: l ? "Next lesson in your path" : "Mixed practice", time: m + " min", route: l ? "#/lesson/" + l.id : "#/practice" }
    ];
  }
  function dailyPct() {
    const items = dailyPlanItems();
    const done = items.filter(i => state.daily.plan[i.id]).length;
    return pct(done, items.length);
  }

  /* ================= UI helpers ================= */
  function toast(title, body, kind) {
    const root = $("#toast-root"); if (!root) return;
    const el = document.createElement("div");
    el.className = "toast " + (kind || "");
    const ico = kind === "ok" ? "✓" : kind === "xp" ? "⚡" : kind === "warn" ? "!" : "◈";
    el.innerHTML = '<div class="t-ico">' + ico + '</div><div><div class="t-t">' + esc(title) + '</div>' +
      (body ? '<div class="t-b">' + esc(body) + '</div>' : '') + '</div>';
    root.appendChild(el);
    setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 320); }, 3200);
  }
  function modal(title, bodyHtml, footHtml, wide) {
    const root = $("#modal-root");
    root.classList.remove("hidden");
    root.innerHTML = '<div class="modal' + (wide ? " wide" : "") + '">' +
      '<div class="modal-head"><div><h3>' + title + '</h3></div>' +
      '<button class="icon-btn" data-act="close-modal">✕</button></div>' +
      '<div class="modal-body">' + bodyHtml + '</div>' +
      (footHtml ? '<div class="modal-foot">' + footHtml + '</div>' : '') + '</div>';
  }
  function closeModal() { const r = $("#modal-root"); r.classList.add("hidden"); r.innerHTML = ""; }

  function bar(p, cls) {
    return '<div class="bar ' + (cls || "") + '"><i style="width:' + clamp(p, 0, 100) + '%"></i></div>';
  }
  function ring(p, size, label) {
    const s = size || 132, r = (s / 2) - 10, c = 2 * Math.PI * r;
    const off = c - (clamp(p, 0, 100) / 100) * c;
    return '<div class="ring" style="width:' + s + 'px;height:' + s + 'px">' +
      '<svg width="' + s + '" height="' + s + '">' +
      '<defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#2563EB"/><stop offset="100%" stop-color="#7C3AED"/></linearGradient></defs>' +
      '<circle class="ring-track" cx="' + (s / 2) + '" cy="' + (s / 2) + '" r="' + r + '" fill="none" stroke-width="10"/>' +
      '<circle class="ring-fill" cx="' + (s / 2) + '" cy="' + (s / 2) + '" r="' + r + '" fill="none" stroke-width="10" ' +
      'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/></svg>' +
      '<div class="ring-label"><b>' + p + '%</b><span>' + esc(label || "") + '</span></div></div>';
  }
  function speakBtn(text, rate, cls) {
    return '<button class="speak-btn ' + (cls || "") + '" data-act="say" data-text="' + esc(text) + '" data-rate="' + (rate || "") + '" title="Listen">▶</button>';
  }
  function levelBadge(lid) {
    const L = byId.levels[lid]; if (!L) return "";
    return '<span class="badge badge-' + L.color + '">' + L.code + '</span>';
  }
  function levelDot(lid, size) {
    const L = byId.levels[lid]; if (!L) return "";
    const s = size || 34;
    return '<span class="hc-dot" style="width:' + s + 'px;height:' + s + 'px;background:var(--' + L.color + ')">' + L.code + '</span>';
  }

  /* ================= Router ================= */
  const ROUTES = {};
  let currentRoute = "";

  function parseHash() {
    let h = (location.hash || "").replace(/^#\/?/, "");
    if (!h) h = state.onboarded ? "dashboard" : "home";
    const parts = h.split("/").filter(Boolean);
    return { name: parts[0] || "dashboard", arg: parts[1] || "", parts: parts };
  }

  function go(hash) { location.hash = hash; }

  function render() {
    const r = parseHash();
    const publicShell = $("#public-shell"), appShell = $("#app-shell");
    const isPublic = ["home", "onboarding", "placement"].indexOf(r.name) !== -1;

    if (isPublic && !state.onboarded) {
      publicShell.classList.remove("hidden");
      appShell.classList.add("hidden");
      publicShell.innerHTML = (ROUTES[r.name] || ROUTES.home)(r);
    } else {
      publicShell.classList.add("hidden");
      appShell.classList.remove("hidden");
      const fn = ROUTES[r.name] || ROUTES.dashboard;
      $("#view").innerHTML = fn(r);
      window.scrollTo(0, 0);
      renderChrome(r);
    }
    closeSidebar();
    currentRoute = r.name;
  }

  function renderChrome(r) {
    const titles = {
      dashboard: "Dashboard", learn: "Learn", level: "Level", unit: "Unit", lesson: "Lesson",
      vocabulary: "Vocabulary", grammar: "Grammar", listening: "Listening", speaking: "Speaking",
      reading: "Reading", writing: "Writing", practice: "Practice", tests: "Tests", test: "Level Test",
      progress: "Progress", profile: "Profile", admin: "Admin Panel"
    };
    $("#topbar-title").textContent = titles[r.name] || "English Hero";
    const s = skillScores();
    $("#topbar-stats").innerHTML =
      '<div class="tstat streak"><span class="tstat-ico">🔥</span>' + (state.streak.count || 0) + '</div>' +
      '<div class="tstat xp"><span class="tstat-ico">⚡</span>' + state.xp + ' XP</div>' +
      '<div class="tstat"><span class="tstat-ico">◈</span>Lv ' + levelForXp() + '</div>';
    const initial = (state.profile.name || "S").trim().charAt(0).toUpperCase();
    $("#avatar-btn").textContent = initial;
    const L = byId.levels[state.currentLevel] || CUR.levels[0];
    $("#sidebar-level-card").innerHTML =
      '<div class="slc-top"><span class="slc-lv">' + (L ? L.code + " · " + L.name : "—") + '</span>' +
      '<span class="slc-pct">' + (L ? levelPct(L.id) : 0) + '%</span></div>' +
      bar(L ? levelPct(L.id) : 0, L ? L.color : "") +
      '<div class="slc-sub">' + totalLessonsDone() + ' / ' + allLessons().length + ' lessons completed</div>';
    $$(".nav-item").forEach(a => {
      const route = a.getAttribute("data-route") || "";
      const name = route.replace("#/", "").split("/")[0];
      a.classList.toggle("active", name === r.name || (r.name === "level" && name === "learn") || (r.name === "unit" && name === "learn") || (r.name === "lesson" && name === "learn") || (r.name === "test" && name === "tests"));
    });
  }

  function openSidebar() { $("#sidebar").classList.add("open"); $("#sidebar-scrim").classList.add("show"); }
  function closeSidebar() { $("#sidebar").classList.remove("open"); $("#sidebar-scrim").classList.remove("show"); }

  /* ================= View: Home ================= */
  ROUTES.home = function () {
    const feats = [
      { i: "◈", t: "Interactive lessons", d: "Eleven-step lessons with explanations, examples, audio and instant feedback." },
      { i: "◍", t: "Speaking practice", d: "Answer questions aloud and get feedback on grammar, vocabulary and fluency." },
      { i: "◐", t: "Listening practice", d: "Slow, natural and fast audio for every level — with transcripts and replay." },
      { i: "▦", t: "Progress tracking", d: "See exactly what you have learned, what is next and where to improve." },
      { i: "◎", t: "Grammar curriculum", d: "A complete A1–C1 grammar path with formulas, examples and common mistakes." },
      { i: "◉", t: "Vocabulary system", d: "Flashcards, spaced review, daily words, learned and difficult words." },
      { i: "⚡", t: "Daily learning plan", d: "A personalised plan that fits the time you actually have each day." },
      { i: "✪", t: "Level tests", d: "A final test at the end of every level, with a full skill breakdown." }
    ];
    const rm = CUR.levels.map(L => {
      const dotColor = "var(--" + L.color + ")";
      return '<div class="rm-card"><div class="rm-dot" style="background:' + dotColor + '">' + L.code + '</div>' +
        '<h4>' + esc(L.name) + '</h4><p>' + esc(L.tagline) + '</p></div>';
    }).join("");
    const heroRows = CUR.levels.slice(0, 5).map((L, i) => {
      const p = [78, 62, 44, 21, 8][i];
      return '<div class="hc-row"><div class="hc-dot" style="background:var(--' + L.color + ')">' + L.code + '</div>' +
        '<div style="flex:1"><div class="hc-name">' + esc(L.name) + '</div>' +
        '<div class="hc-bar" style="margin-top:6px"><i style="width:' + p + '%"></i></div></div>' +
        '<div class="hc-desc">' + p + '%</div></div>';
    }).join("");

    return '<div class="landing-nav">' +
      '<div class="row" style="gap:10px"><div class="brand-mark">EH</div>' +
      '<strong style="font-family:var(--font-head);font-size:16px">English Hero</strong></div>' +
      '<div class="ln-links"><a href="#/home">Home</a><a href="#/home">Features</a><a href="#/home">Levels</a></div>' +
      '<div class="topbar-spacer"></div>' +
      '<button class="btn btn-ghost btn-sm" data-act="theme">◑ Theme</button>' +
      '<button class="btn btn-primary btn-sm" data-act="start-onboarding">Get Started</button></div>' +

      '<section class="hero"><div class="hero-inner"><div>' +
      '<div class="hero-eyebrow">✦ Complete A1 → C1 curriculum · 250 lessons</div>' +
      '<h1>Learn English from <span class="grad">Zero to Hero.</span></h1>' +
      '<p class="lead">Your complete English journey from A1 to C1. Build your skills, gain confidence, and achieve your goals with a structured school that always shows you what to do next.</p>' +
      '<div class="hero-cta">' +
      '<button class="btn btn-primary btn-lg" data-act="start-onboarding">Start Learning</button>' +
      '<button class="btn btn-ghost btn-lg" data-act="start-placement">Take the Level Test</button></div>' +
      '<div class="hero-trust">' +
      '<div><b>5</b>CEFR levels</div><div><b>50</b>units</div><div><b>250</b>lessons</div><div><b>500+</b>vocabulary words</div>' +
      '</div></div>' +
      '<div class="hero-visual"><div class="hero-card">' +
      '<div class="hc-row" style="border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:14px">' +
      '<div style="flex:1"><div class="hc-name">Your learning path</div><div class="hc-desc">Progress across all five levels</div></div></div>' +
      heroRows + '</div></div></div></section>' +

      '<div class="roadmap-strip">' + rm + '</div>' +

      '<section class="landing-sec"><h2>Everything you need in one school</h2>' +
      '<p class="sec-lead">Not a collection of random lessons — a guided path with real content, real audio and real feedback at every step.</p>' +
      '<div class="grid g-4">' + feats.map(f =>
        '<div class="feat"><div class="f-ico">' + f.i + '</div><h3>' + esc(f.t) + '</h3><p>' + esc(f.d) + '</p></div>').join("") +
      '</div></section>' +

      '<section class="landing-sec" style="padding-top:0"><div class="card pad-lg" style="background:linear-gradient(120deg,#12224A,#1E3A8A);border:none;text-align:center;color:#fff">' +
      '<h2 style="color:#fff;margin-bottom:12px">Ready to start your English journey?</h2>' +
      '<p style="color:#B9C9E6;max-width:56ch;margin:0 auto 26px">Answer four quick questions and take a short placement test. We will tell you exactly where to start.</p>' +
      '<button class="btn btn-lg" style="background:#fff;color:#12224A" data-act="start-onboarding">Start Learning — it\'s free</button>' +
      '</div></section>' +

      '<footer class="landing-foot"><div class="lf-inner"><div>© 2026 English Hero — From zero to confident English.</div>' +
      '<div>A1 · A2 · B1 · B2 · C1</div></div></footer>';
  };

  /* ================= View: Onboarding ================= */
  let obIndex = 0;
  let obAnswers = {};
  ROUTES.onboarding = function () {
    const qs = EH.onboarding;
    if (obIndex >= qs.length) { go("#/placement"); return ""; }
    const q = qs[obIndex];
    const sel = obAnswers[q.id];
    const opts = q.options.map(o =>
      '<button class="ob-opt' + (sel === o.v ? " selected" : "") + '" data-act="ob-pick" data-v="' + esc(o.v) + '">' +
      '<span class="oo-ico">' + o.icon + '</span><span><span class="oo-t">' + esc(o.t) + '</span>' +
      '<span class="oo-d">' + esc(o.d) + '</span></span><span class="oo-check">✓</span></button>').join("");
    const steps = qs.map((_, i) => '<i class="' + (i <= obIndex ? "done" : "") + '"></i>').join("");
    return '<div class="ob-wrap"><div class="ob-card">' +
      '<div class="ob-head"><div class="ob-steps">' + steps + '</div>' +
      '<h1>Welcome to English Hero</h1><p>From zero to confident English. Let\'s personalise your journey.</p></div>' +
      '<div class="ob-body"><div class="ob-q">' + esc(q.q) + '</div><div class="ob-hint">' + esc(q.hint) + '</div>' +
      '<div class="ob-opts">' + opts + '</div></div>' +
      '<div class="ob-foot"><button class="btn btn-ghost" data-act="ob-back"' + (obIndex === 0 ? " disabled" : "") + '>← Back</button>' +
      '<span class="small muted">Step ' + (obIndex + 1) + ' of ' + qs.length + '</span>' +
      '<button class="btn btn-primary" data-act="ob-next"' + (sel === undefined ? " disabled" : "") + '>Next →</button></div>' +
      '</div></div>';
  };

  /* ================= View: Placement ================= */
  let plIndex = 0, plAnswers = [], plDone = false;
  ROUTES.placement = function () {
    if (plDone) return placementResult();
    const q = EH.placement[plIndex];
    const opts = q.o.map((o, i) =>
      '<button class="pl-opt" data-act="pl-answer" data-i="' + i + '">' +
      '<span class="po-key">' + "ABCD"[i] + '</span><span>' + esc(o) + '</span></button>').join("");
    const p = pct(plIndex, EH.placement.length);
    return '<div class="ob-wrap"><div class="ob-card" style="max-width:780px">' +
      '<div class="ob-head"><div class="ob-steps"><i class="done" style="width:' + p + '%"></i><i style="flex:' + (100 - p) + '"></i></div>' +
      '<h1>Placement test</h1><p>Question ' + (plIndex + 1) + ' of ' + EH.placement.length + ' — answer honestly, guessing is fine.</p></div>' +
      '<div class="ob-body"><div class="pl-q">' + esc(q.q) + '</div><div id="pl-opts">' + opts + '</div><div id="pl-fb"></div></div>' +
      '<div class="ob-foot"><button class="btn btn-ghost" data-act="pl-skip">Skip test</button>' +
      '<span class="small muted">' + levelBadge(q.lv) + '</span>' +
      '<span class="small muted">Levels are mixed on purpose</span></div>' +
      '</div></div>';
  };

  function estimateLevel(correct, byLevel) {
    const score = correct;
    if (score <= 3) return "a1";
    if (score <= 6) return "a2";
    if (score <= 10) return "b1";
    if (score <= 14) return "b2";
    return "c1";
  }

  function placementResult() {
    const correct = plAnswers.filter(a => a.ok).length;
    const byLevel = {};
    plAnswers.forEach(a => {
      byLevel[a.lv] = byLevel[a.lv] || { c: 0, t: 0 };
      byLevel[a.lv].t++; if (a.ok) byLevel[a.lv].c++;
    });
    const rec = estimateLevel(correct, byLevel);
    const RL = byId.levels[rec] || CUR.levels[0];
    const rows = ["a1", "a2", "b1", "b2", "c1"].map(lv => {
      const d = byLevel[lv] || { c: 0, t: 4 };
      const p = pct(d.c, d.t);
      const L = byId.levels[lv];
      return '<div class="bar-row" style="margin-bottom:10px"><span class="bl">' + L.code + '</span>' +
        '<div style="flex:1">' + bar(p, L.color) + '</div><span class="bv">' + d.c + '/' + d.t + '</span></div>';
    }).join("");
    return '<div class="ob-wrap"><div class="ob-card" style="max-width:760px">' +
      '<div class="ob-head"><h1>Your estimated level: ' + RL.code + ' — ' + esc(RL.name) + '</h1>' +
      '<p>You answered ' + correct + ' of ' + EH.placement.length + ' questions correctly. Here is the breakdown by CEFR level.</p></div>' +
      '<div class="ob-body">' +
      '<div class="card flat" style="background:var(--surface-2);margin-bottom:20px">' + rows + '</div>' +
      '<div class="card" style="border-left:3px solid var(--primary);margin-bottom:20px">' +
      '<div class="card-title" style="margin-bottom:8px">What this means</div>' +
      '<p class="small" style="color:var(--text-soft);line-height:1.7">' +
      'At <strong>' + RL.code + '</strong>, you ' + esc((RL.canDo[0] || "can handle the basics").toLowerCase()) + '. ' +
      'We recommend starting at <strong>' + RL.code + '</strong> — but you are free to start from A1 and build a complete foundation, which many students prefer.</p></div>' +
      '<div class="row" style="gap:12px;flex-wrap:wrap">' +
      '<button class="btn btn-primary btn-lg" data-act="finish-onboarding" data-start="' + rec + '">Start from my recommended level (' + RL.code + ')</button>' +
      '<button class="btn btn-outline btn-lg" data-act="finish-onboarding" data-start="a1">Start from A1</button></div>' +
      '</div></div></div>';
  }

  /* ================= View: Dashboard ================= */
  ROUTES.dashboard = function () {
    ensureDaily();
    const L = byId.levels[state.currentLevel] || CUR.levels[0];
    const U = currentUnit();
    const nl = nextLesson();
    const sk = skillScores();
    const plan = dailyPlanItems();
    const earned = (EH.achievements || []).filter(a => state.achievements.indexOf(a.id) !== -1).slice(-4);
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const k = todayKey(d);
      days.push({ k: k, label: ["S", "M", "T", "W", "T", "F", "S"][d.getDay()], on: (state.streak.days || []).indexOf(k) !== -1, today: i === 0 });
    }
    const goalLabel = (function () {
      const g = (EH.onboarding[3].options.find(o => o.v === state.profile.goal) || {}).t;
      return g || "General English";
    })();

    return '<div class="dash-hero"><div class="dh-inner"><div>' +
      '<h1>Welcome back, ' + esc(state.profile.name || "student") + ' 👋</h1>' +
      '<p>Goal: <strong style="color:#fff">' + esc(goalLabel) + '</strong> · ' + (state.profile.time || 30) + ' min a day · Keep going, you\'re doing great.</p>' +
      '</div><div class="dh-right">' +
      '<div class="dh-tile"><div class="dt-v">' + (L ? L.code : "—") + '</div><div class="dt-l">Current level</div></div>' +
      '<div class="dh-tile"><div class="dt-v">' + overallPct() + '%</div><div class="dt-l">Overall progress</div></div>' +
      '<div class="dh-tile"><div class="dt-v">🔥 ' + (state.streak.count || 0) + '</div><div class="dt-l">Day streak</div></div>' +
      '</div></div></div>' +

      '<div class="grid" style="grid-template-columns:1.4fr 1fr;align-items:start">' +

      '<div class="stack">' +

      '<div class="card"><div class="card-head"><div><div class="card-title">Continue where you left off</div>' +
      '<div class="card-sub">' + (U ? esc(U.title) + " · " + esc(U.theme) : "You have completed the whole path. Impressive.") + '</div></div>' +
      levelBadge(state.currentLevel) + '</div>' +
      (nl ? '<div class="row" style="gap:18px;flex-wrap:wrap;align-items:center">' +
        '<div style="flex:1;min-width:220px"><div class="row between" style="margin-bottom:8px">' +
        '<span class="small" style="font-weight:600">' + esc(U ? U.title : "") + '</span>' +
        '<span class="small muted">' + (U ? unitDone(U.id) + " / " + U.lessons.length + " lessons" : "") + '</span></div>' +
        bar(U ? unitPct(U.id) : 0, L ? L.color : "") +
        '<div class="small muted" style="margin-top:12px">Next lesson: <strong style="color:var(--text)">' + esc(nl.title) + '</strong></div>' +
        '<div class="small muted">' + esc(nl.objective) + '</div></div>' +
        '<button class="btn btn-primary btn-lg" data-act="go" data-href="#/lesson/' + nl.id + '">Continue Learning →</button>' +
        '</div>'
      : '<button class="btn btn-primary btn-lg" data-act="go" data-href="#/practice">Keep practising →</button>') +
      '</div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Your skills</div>' +
      '<button class="btn btn-ghost btn-sm" data-act="go" data-href="#/progress">Details</button></div>' +
      EH.skills.map(s => '<div class="bar-row" style="margin-bottom:11px"><span class="bl">' + s.label + '</span>' +
        '<div style="flex:1">' + bar(sk[s.id]) + '</div><span class="bv">' + sk[s.id] + '%</span></div>').join("") +
      '<div class="small muted" style="margin-top:14px">Focus next on <strong style="color:var(--primary)">' +
      esc((EH.skills.find(s => s.id === weakestSkill()) || {}).label || "") + '</strong> — it is your lowest score.</div>' +
      '</div>' +

      '<div class="grid g-3">' +
      '<div class="stat"><div class="s-ico">◉</div><div><div class="s-val">' + wordsLearned() + '</div><div class="s-lbl">Words learned</div></div></div>' +
      '<div class="stat green"><div class="s-ico">◈</div><div><div class="s-val">' + totalLessonsDone() + '</div><div class="s-lbl">Lessons completed</div></div></div>' +
      '<div class="stat purple"><div class="s-ico">⚡</div><div><div class="s-val">' + state.xp + '</div><div class="s-lbl">Total XP</div></div></div>' +
      '</div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Recent activity</div></div>' +
      (state.activity.length ? state.activity.slice(0, 6).map(a =>
        '<div class="row" style="gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">' +
        '<div class="badge-ico" style="width:34px;height:34px;font-size:14px">' + (a.type === "badge" ? "🏆" : a.type === "lesson" ? "◈" : a.type === "test" ? "✪" : "◉") + '</div>' +
        '<div style="flex:1"><div class="small" style="font-weight:600">' + esc(a.text) + '</div>' +
        '<div class="tiny muted">' + timeAgo(a.at) + '</div></div></div>').join("")
      : '<div class="empty" style="padding:28px"><div class="e-ico">◈</div><h3>No activity yet</h3><p>Complete your first lesson to start building your history.</p></div>') +
      '</div>' +

      '</div>' +

      '<div class="stack">' +

      '<div class="card"><div class="card-head"><div class="card-title">🔥 Today\'s plan</div>' +
      '<span class="badge badge-primary">' + dailyPct() + '%</span></div>' +
      '<div class="row between small muted" style="margin-bottom:12px"><span>' + (state.profile.time || 30) + ' minutes</span>' +
      '<span>Day ' + (state.streak.count || 1) + ' · ' + (state.streak.count || 0) + ' day streak 🔥</span></div>' +
      bar(dailyPct()) +
      '<div class="stack" style="gap:8px;margin-top:16px">' +
      plan.map(i => '<button class="plan-item' + (state.daily.plan[i.id] ? " done" : "") + '" data-act="plan-toggle" data-id="' + i.id + '" data-href="' + i.route + '">' +
        '<span class="plan-check">✓</span><span style="flex:1;text-align:left"><span class="pi-t">' + esc(i.label) + '</span>' +
        '<span class="pi-m" style="display:block">' + esc(i.meta) + '</span></span>' +
        '<span class="pi-time">' + i.time + '</span></button>').join("") +
      '</div></div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Streak</div></div>' +
      '<div class="streak-strip">' + days.map(d => '<div class="streak-day' + (d.on ? " on" : "") + (d.today ? " today" : "") + '">' + d.label + '</div>').join("") + '</div>' +
      '<div class="row between" style="margin-top:14px"><span class="small muted">Current streak</span>' +
      '<strong style="font-family:var(--font-head);font-size:20px">' + (state.streak.count || 0) + ' days</strong></div>' +
      '<div class="row between"><span class="small muted">Best streak</span><span class="small" style="font-weight:700">' + (state.streak.best || 0) + ' days</span></div>' +
      '</div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Level path</div>' +
      '<button class="btn btn-ghost btn-sm" data-act="go" data-href="#/learn">View all</button></div>' +
      '<div class="stack" style="gap:10px">' + CUR.levels.map(L => {
        const un = levelUnlocked(L.id);
        return '<div class="row" style="gap:12px;' + (un ? "" : "opacity:.55") + '">' +
          levelDot(L.id) +
          '<div style="flex:1"><div class="small" style="font-weight:700">' + L.code + ' · ' + esc(L.name) + '</div>' +
          '<div style="margin-top:5px">' + bar(levelPct(L.id), L.color) + '</div></div>' +
          '<span class="small muted nowrap">' + (un ? levelPct(L.id) + "%" : "🔒") + '</span></div>';
      }).join("") + '</div></div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Recent achievements</div>' +
      '<button class="btn btn-ghost btn-sm" data-act="go" data-href="#/progress">All</button></div>' +
      (earned.length ? '<div class="stack" style="gap:10px">' + earned.map(a =>
        '<div class="badge-card earned"><div class="badge-ico">' + a.icon + '</div>' +
        '<div><h4>' + esc(a.name) + '</h4><p>' + esc(a.desc) + '</p></div></div>').join("") + '</div>'
      : '<div class="small muted">Complete lessons to unlock achievements.</div>') +
      '</div>' +

      '</div></div>';
  };

  function timeAgo(ts) {
    const d = Date.now() - ts;
    const m = Math.floor(d / 60000);
    if (m < 1) return "just now";
    if (m < 60) return m + " min ago";
    const h = Math.floor(m / 60);
    if (h < 24) return h + " hour" + (h > 1 ? "s" : "") + " ago";
    const dd = Math.floor(h / 24);
    return dd + " day" + (dd > 1 ? "s" : "") + " ago";
  }

  /* ================= View: Learn (levels) ================= */
  ROUTES.learn = function () {
    return '<div class="page-head"><h1>Learn</h1>' +
      '<p>Your complete path from A1 to C1. Each level has 10 units and 5 lessons per unit. Units unlock as you finish the one before.</p></div>' +
      '<div class="grid g-2">' + CUR.levels.map(L => {
        const un = levelUnlocked(L.id);
        const p = levelPct(L.id);
        return '<div class="level-card ' + L.color + (un ? " clickable" : " locked") + '" data-act="go" data-href="' + (un ? "#/level/" + L.id : "#/learn") + '">' +
          (un ? "" : '<div class="lc-lock">🔒 Locked</div>') +
          '<div><div class="lc-code">' + L.code + '</div><div class="lc-name">' + esc(L.name) + '</div>' +
          '<div class="lc-meta">' + L.units.length + ' units · ' + levelTotal(L.id) + ' lessons</div></div>' +
          '<div><div class="lc-bar"><i style="width:' + p + '%"></i></div>' +
          '<div class="lc-meta" style="margin-top:7px">' + levelDone(L.id) + ' / ' + levelTotal(L.id) + ' lessons · ' + p + '%</div></div></div>';
      }).join("") + '</div>' +
      '<div class="card mt-3"><div class="card-head"><div><div class="card-title">How levels unlock</div>' +
      '<div class="card-sub">Finish every unit and pass the final test to open the next level.</div></div></div>' +
      '<div class="grid g-5" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">' +
      CUR.levels.map(L => '<div class="card flat" style="background:var(--surface-2);text-align:center">' +
        '<div style="font-family:var(--font-head);font-weight:800;font-size:20px">' + L.code + '</div>' +
        '<div class="small muted" style="margin:4px 0 10px">' + esc(L.name) + '</div>' +
        (state.progress.tests[L.id] ? '<span class="badge badge-success">✓ Passed ' + state.progress.tests[L.id].score + '%</span>'
          : levelUnlocked(L.id) ? '<span class="badge badge-primary">In progress</span>' : '<span class="badge badge-neutral">🔒 Locked</span>') +
        '</div>').join("") + '</div></div>';
  };

  ROUTES.level = function (r) {
    const L = byId.levels[r.arg];
    if (!L) return emptyState("Level not found", "That level does not exist.", "#/learn", "Back to Learn");
    const un = levelUnlocked(L.id);
    const p = levelPct(L.id);
    return '<div class="crumb"><a href="#/learn">Learn</a><span class="sep">/</span><span>' + L.code + '</span></div>' +
      '<div class="page-head"><div class="row between wrap"><div>' +
      '<h1>' + L.code + ' — ' + esc(L.name) + '</h1><p>' + esc(L.description) + '</p></div>' +
      '<div style="text-align:right">' + ring(p, 116, "complete") + '</div></div></div>' +

      (un ? "" : '<div class="card" style="border-left:3px solid var(--warn);margin-bottom:20px">' +
        '<strong>This level is locked.</strong> <span class="small muted">Pass the ' +
        (CUR.levels[L.order - 1] ? CUR.levels[L.order - 1].code : "") + ' final test to unlock it. You can still preview the content.</span></div>') +

      '<div class="grid" style="grid-template-columns:2fr 1fr;align-items:start">' +
      '<div class="card"><div class="card-head"><div class="card-title">Units</div>' +
      '<span class="badge badge-neutral">' + L.units.length + ' units</span></div>' +
      (L.units.length ? L.units.map(U => {
        const uu = unitUnlocked(U.id);
        const done = isUnitComplete(U.id);
        const cur = !done && uu && U.lessons.length > 0 && U.lessons.some(l => !state.progress.lessons[l.id]);
        return '<div class="unit-row' + (uu ? " clickable" : " locked") + (done ? " done" : "") + (cur ? " current" : "") + '"' +
          (uu ? ' data-act="go" data-href="#/unit/' + U.id + '"' : "") + '>' +
          '<div class="unit-num">' + (done ? "✓" : U.n) + '</div>' +
          '<div class="unit-main"><h4>' + esc(U.title) + (cur ? ' <span class="badge badge-primary">Next</span>' : '') + '</h4>' +
          '<p>' + esc(U.theme) + '</p></div>' +
          '<div class="unit-prog"><div class="bar thin ' + L.color + '"><i style="width:' + unitPct(U.id) + '%"></i></div>' +
          '<div class="tiny muted" style="margin-top:5px;text-align:right">' + unitDone(U.id) + '/' + U.lessons.length + '</div></div>' +
          '<div class="unit-status">' + (done ? "✅" : uu ? "→" : "🔒") + '</div></div>';
      }).join("") : '<div class="empty"><h3>No units yet</h3><p>Add units from the admin panel.</p></div>') +
      '</div>' +

      '<div class="stack">' +
      '<div class="card"><div class="card-title" style="margin-bottom:14px">What you will be able to do</div>' +
      '<ul class="obj-list">' + (L.canDo || []).map(c => '<li>' + esc(c) + '</li>').join("") + '</ul></div>' +
      '<div class="card"><div class="card-title" style="margin-bottom:14px">Level test</div>' +
      (state.progress.tests[L.id]
        ? '<div class="center"><div style="font-family:var(--font-head);font-size:34px;font-weight:800;color:var(--success)">' +
          state.progress.tests[L.id].score + '%</div><div class="small muted mb-2">Passed</div>' +
          '<button class="btn btn-ghost btn-block" data-act="go" data-href="#/test/' + L.id + '">Retake test</button></div>'
        : '<p class="small muted" style="margin-bottom:14px">' + (p >= 100
            ? "You have finished every lesson. Take the final test to unlock the next level."
            : "Finish all " + levelTotal(L.id) + " lessons to be fully prepared. You can attempt the test at any time.") + '</p>' +
          '<button class="btn btn-primary btn-block" data-act="go" data-href="#/test/' + L.id + '">Start ' + L.code + ' Final Test</button>') +
      '</div>' +
      '<div class="card"><div class="card-title" style="margin-bottom:14px">Progress</div>' +
      '<div class="row between"><span class="small muted">Lessons</span><strong>' + levelDone(L.id) + ' / ' + levelTotal(L.id) + '</strong></div>' +
      '<div class="row between mt-1"><span class="small muted">Units complete</span><strong>' + L.units.filter(u => isUnitComplete(u.id)).length + ' / ' + L.units.length + '</strong></div>' +
      '<div class="row between mt-1"><span class="small muted">Vocabulary words</span><strong>' + L.units.reduce((a, u) => a + (u.vocab || []).length, 0) + '</strong></div>' +
      '</div></div></div>';
  };

  /* ================= View: Unit ================= */
  ROUTES.unit = function (r) {
    const U = byId.units[r.arg];
    if (!U) return emptyState("Unit not found", "That unit does not exist.", "#/learn", "Back to Learn");
    const L = byId.levels[U.levelId];
    const uu = unitUnlocked(U.id);
    return '<div class="crumb"><a href="#/learn">Learn</a><span class="sep">/</span>' +
      '<a href="#/level/' + L.id + '">' + L.code + '</a><span class="sep">/</span><span>Unit ' + U.n + '</span></div>' +
      '<div class="page-head"><div class="row between wrap"><div>' +
      '<h1>Unit ' + U.n + ': ' + esc(U.title) + '</h1><p>' + esc(U.theme) + '</p></div>' +
      '<div>' + ring(unitPct(U.id), 108, "unit") + '</div></div></div>' +

      '<div class="grid" style="grid-template-columns:2fr 1fr;align-items:start">' +
      '<div class="stack">' +

      '<div class="card"><div class="card-head"><div class="card-title">Lessons</div>' +
      '<span class="badge badge-neutral">' + unitDone(U.id) + ' / ' + U.lessons.length + '</span></div>' +
      (U.lessons.length ? U.lessons.map((ls, i) => {
        const done = !!state.progress.lessons[ls.id];
        return '<div class="unit-row' + (uu ? " clickable" : " locked") + (done ? " done" : "") + '"' +
          (uu ? ' data-act="go" data-href="#/lesson/' + ls.id + '"' : "") + '>' +
          '<div class="unit-num">' + (done ? "✓" : (i + 1)) + '</div>' +
          '<div class="unit-main"><h4>' + esc(ls.title) + '</h4><p>' + esc(ls.objective) + '</p></div>' +
          '<div class="unit-status">' + (done ? "✅" : uu ? "▶" : "🔒") + '</div></div>';
      }).join("") : '<div class="empty"><h3>No lessons yet</h3><p>Add lessons from the admin panel.</p></div>') +
      '</div>' +

      '<div class="grid g-2">' +
      '<div class="card hover" data-act="go" data-href="#/vocabulary?u=' + U.id + '"><div class="card-title" style="margin-bottom:10px">◉ Vocabulary</div>' +
      '<div class="small muted">' + (U.vocab || []).length + ' words in this unit</div></div>' +
      '<div class="card hover" data-act="go" data-href="#/grammar?u=' + U.id + '"><div class="card-title" style="margin-bottom:10px">◎ Grammar</div>' +
      '<div class="small muted">' + esc(U.gram ? U.gram.title : "—") + '</div></div>' +
      '<div class="card hover" data-act="go" data-href="#/listening?u=' + U.id + '"><div class="card-title" style="margin-bottom:10px">◐ Listening</div>' +
      '<div class="small muted">' + esc(U.listen ? U.listen.title : "—") + '</div></div>' +
      '<div class="card hover" data-act="go" data-href="#/speaking?u=' + U.id + '"><div class="card-title" style="margin-bottom:10px">◍ Speaking</div>' +
      '<div class="small muted">' + (U.speak || []).length + ' questions</div></div>' +
      '</div>' +

      '</div>' +

      '<div class="stack">' +
      '<div class="card"><div class="card-title" style="margin-bottom:14px">Unit contents</div>' +
      '<div class="row between" style="padding:7px 0"><span class="small muted">Lessons</span><strong>' + U.lessons.length + '</strong></div>' +
      '<div class="row between" style="padding:7px 0"><span class="small muted">Vocabulary</span><strong>' + (U.vocab || []).length + '</strong></div>' +
      '<div class="row between" style="padding:7px 0"><span class="small muted">Exercises</span><strong>' + (U.ex || []).length + '</strong></div>' +
      '<div class="row between" style="padding:7px 0"><span class="small muted">Reading</span><strong>' + (U.read ? "1 text" : "—") + '</strong></div>' +
      '<div class="row between" style="padding:7px 0"><span class="small muted">Writing</span><strong>' + (U.write ? "1 task" : "—") + '</strong></div>' +
      '</div>' +
      (U.lessons.length && uu ? '<button class="btn btn-primary btn-block" data-act="go" data-href="#/lesson/' +
        (U.lessons.find(l => !state.progress.lessons[l.id]) || U.lessons[0]).id + '">' +
        (unitPct(U.id) > 0 ? "Continue unit →" : "Start unit →") + '</button>' : "") +
      '</div></div>';
  };

  /* ================= Lesson player ================= */
  let S = null; // active session

  const STEPS = [
    "Introduction", "Learning objective", "Explanation", "Examples", "Vocabulary",
    "Listening", "Speaking", "Practice", "Mini quiz", "Review", "Complete"
  ];

  function startSession(lesson) {
    const U = byId.units[lesson.unitId];
    const L = byId.levels[lesson.levelId];
    const vocab = (U.vocab || []);
    const vStart = (lesson.index * 3) % Math.max(1, vocab.length);
    const lessonVocab = vocab.length ? [0, 1, 2, 3].map(k => vocab[(vStart + k) % vocab.length]).filter(Boolean) : [];
    const exAll = (U.ex || []);
    const exStart = (lesson.index * 2) % Math.max(1, exAll.length);
    const lessonEx = exAll.length ? [0, 1, 2, 3].map(k => exAll[(exStart + k) % exAll.length]) : [];
    const quiz = exAll.filter(e => e.t === "mcq" || e.t === "fill").slice(0, 3);
    // Speaking prompts for this lesson, with keys unique per unit+lesson so
    // completion never leaks between lessons.
    const spAll = (U.speak || []);
    const spStart = lesson.index % 3;
    const spSlice = spAll.slice(spStart, spStart + 3);
    const speakList = spSlice.length ? spSlice : spAll.slice(0, 3);
    const speakKeys = speakList.map((_, i) => "sk" + U.id + "-l" + lesson.index + "-" + i);
    S = {
      lesson: lesson, unit: U, level: L, step: 0,
      vocab: lessonVocab, ex: lessonEx, quiz: quiz.length ? quiz : exAll.slice(0, 3),
      speakList: speakList, speakKeys: speakKeys,
      answers: {}, correct: 0, total: 0, lang: state.settings.lang || "en",
      startedAt: Date.now(), completed: false
    };
  }

  ROUTES.lesson = function (r) {
    const lesson = byId.lessons[r.arg];
    if (!lesson) return emptyState("Lesson not found", "That lesson does not exist.", "#/learn", "Back to Learn");
    if (!unitUnlocked(lesson.unitId) && !state.progress.lessons[lesson.id]) {
      return emptyState("This lesson is locked", "Finish the previous unit to unlock it. Units unlock in order.", "#/unit/" + lesson.unitId, "Back to unit");
    }
    if (!S || S.lesson.id !== lesson.id) startSession(lesson);
    return lessonShell();
  };

  function lessonShell() {
    const L = S.level, U = S.unit, ls = S.lesson;
    const steps = STEPS.map((s, i) => '<i class="' + (i < S.step ? "done" : i === S.step ? "active" : "") + '" title="' + s + '"></i>').join("");
    return '<div class="lesson-shell">' +
      '<div class="lesson-top">' +
      '<button class="btn btn-ghost btn-sm" data-act="go" data-href="#/unit/' + U.id + '">← ' + esc(U.title) + '</button>' +
      '<div class="lesson-steps">' + steps + '</div>' +
      '<span class="badge badge-' + L.color + '">' + L.code + '</span>' +
      '<span class="small muted nowrap">Step ' + (S.step + 1) + '/' + STEPS.length + '</span>' +
      '</div>' +
      '<div class="lesson-stage" id="lesson-stage">' + lessonStep() + '</div>' +
      '</div>';
  }

  function stepHead(title) {
    return '<div class="stage-kicker"><span class="sk-num">' + (S.step + 1) + '</span>' + esc(STEPS[S.step]) + '</div>' +
      '<h2 class="stage-title">' + esc(title) + '</h2>';
  }
  // stageFoot(prev, nextLabel, disabled)
  //   prev === false  -> hide the "Previous" button (first step / no going back)
  function stageFoot(prev, nextLabel, disabled) {
    return '<div class="stage-foot">' +
      (prev === false ? '<span></span>' : '<button class="btn btn-ghost" data-act="step-prev">← Previous</button>') +
      '<button class="btn btn-primary" data-act="step-next"' + (disabled ? " disabled" : "") + '>' + (nextLabel || "Next →") + '</button></div>';
  }

  function lessonStep() {
    const L = S.level, U = S.unit, ls = S.lesson;
    switch (S.step) {
      case 0: // Introduction
        return stepHead(ls.title) +
          '<div class="stage-body">' +
          '<p>Welcome to <strong>' + esc(ls.title) + '</strong>, part of Unit ' + U.n + ' — ' + esc(U.title) + '.</p>' +
          '<p>In this lesson you will work through eleven short stages: a clear explanation, real examples with audio, new vocabulary, listening and speaking practice, exercises with instant feedback, and a mini quiz at the end.</p>' +
          '<div class="example-box"><div class="ex-en">' + esc(U.theme) + '</div>' +
          '<div class="ex-note">Level ' + L.code + ' · ' + esc(L.name) + ' · Lesson ' + (ls.index + 1) + ' of ' + U.lessons.length + '</div></div>' +
          '<p class="small muted">Estimated time: ' + (6 + (ls.index % 3) * 2) + ' minutes. You can pause at any point — your progress is saved automatically.</p>' +
          '</div>' + stageFoot(false, "Let's begin →");

      case 1: // Objective
        return stepHead("Learning objective") +
          '<div class="stage-body">' +
          '<p>By the end of this lesson you will be able to:</p>' +
          '<ul class="obj-list"><li>' + esc(ls.objective) + '</li>' +
          (ls.points || []).slice(0, 3).map(p => '<li>Use and recognise: <em>' + esc(p) + '</em></li>').join("") +
          '</ul>' +
          '<div class="example-box" style="border-left-color:var(--success)"><div class="ex-en">Why this matters</div>' +
          '<div class="ex-note">' + esc(U.theme) + ' — this is the language you will meet again and again in real conversations at this level.</div></div>' +
          '</div>' + stageFoot();

      case 2: // Explanation
        const g = U.gram;
        return stepHead(g ? g.title : "Explanation") +
          '<div class="stage-body">' +
          '<div class="row between wrap mb-2"><span class="small muted">Explanation language</span>' +
          '<div class="lang-tabs">' +
          ['en', 'ar', 'fr'].map(l => '<button class="lang-tab' + (S.lang === l ? " active" : "") + '" data-act="lang" data-l="' + l + '">' +
            ({ en: "English", ar: "العربية", fr: "Français" })[l] + '</button>').join("") + '</div></div>' +
          (g ? (S.lang === "ar"
            ? '<p class="ar-text">' + esc(g.explain.ar) + '</p>'
            : S.lang === "fr" ? '<p>' + esc(g.explain.fr) + '</p>'
            : '<p>' + esc(g.explain.en) + '</p>') : '<p>No grammar point is attached to this unit.</p>') +
          (g ? '<h4>Formula</h4><div class="formula">' + g.formula.map(f => f).join("<br>") + '</div>' : "") +
          (g && g.mistakes ? '<h4>Common mistakes</h4>' + g.mistakes.map(m =>
            '<div class="mistake"><span class="m-ico">⚠</span><div><span class="m-wrong">' + esc(m.w) + '</span> → ' +
            '<span class="m-right">' + esc(m.r) + '</span><div class="tiny muted" style="margin-top:4px">' + esc(m.why) + '</div></div></div>').join("") : "") +
          '</div>' + stageFoot();

      case 3: // Examples
        return stepHead("Examples") +
          '<div class="stage-body">' +
          '<p>Listen to each example, then repeat it aloud. Pay attention to the rhythm.</p>' +
          (ls.points || []).map(p =>
            '<div class="example-box" style="display:flex;gap:12px;align-items:center">' + speakBtn(p) +
            '<div style="flex:1"><div class="ex-en">' + esc(p) + '</div></div></div>').join("") +
          (U.gram && U.gram.examples ? '<h4>From the grammar point</h4>' +
            U.gram.examples.map(e =>
              '<div class="example-box" style="display:flex;gap:12px;align-items:center">' + speakBtn(e.en) +
              '<div style="flex:1"><div class="ex-en">' + esc(e.en) + '</div>' +
              (S.lang === "ar" ? '<div class="ex-ar">' + esc(e.ar) + '</div>' : "") + '</div></div>').join("") : "") +
          '</div>' + stageFoot();

      case 4: // Vocabulary
        return stepHead("Vocabulary") +
          '<div class="stage-body">' +
          '<p>Four words from this unit. Tap the speaker to hear each one, then try to use it in your own sentence.</p>' +
          (S.vocab.length ? S.vocab.map(v =>
            '<div class="vocab-row" style="margin-bottom:10px">' + speakBtn(v.w) +
            '<div style="flex:1"><div class="vocab-word">' + esc(v.w) + ' <span class="tiny muted">' + esc(v.ipa || "") + '</span></div>' +
            '<div class="vocab-def">' + esc(v.def) + '</div>' +
            '<div class="tiny muted" style="margin-top:3px;font-style:italic">' + esc(v.ex || "") + '</div></div>' +
            '<div class="vocab-ar">' + esc(v.ar || "") + '</div>' +
            '<button class="btn btn-ghost btn-sm" data-act="know" data-w="' + esc(v.w) + '">' +
            (state.progress.vocab[v.w] && state.progress.vocab[v.w].status === "known" ? "✓ Known" : "+ Learn") + '</button></div>').join("")
          : '<p class="muted">No vocabulary attached to this unit yet.</p>') +
          '</div>' + stageFoot();

      case 5: // Listening
        const li = U.listen;
        if (!li) return stepHead("Listening") + '<div class="stage-body"><p class="muted">No listening exercise is attached to this unit yet.</p></div>' + stageFoot();
        return stepHead(li.title) +
          '<div class="stage-body">' +
          '<div class="audio-player"><button class="audio-play" data-act="say-dialog" data-i="0">▶</button>' +
          '<div class="audio-meta"><div class="am-t">' + esc(li.title) + '</div>' +
          '<div class="am-s">' + li.lines.length + ' lines · ' + esc(L.code) + ' listening</div></div>' +
          '<div class="audio-speed">' +
          '<button class="speed-btn" data-act="say-dialog" data-i="0" data-rate="0.62">Slow</button>' +
          '<button class="speed-btn active" data-act="say-dialog" data-i="0" data-rate="0.92">Normal</button>' +
          '<button class="speed-btn" data-act="say-dialog" data-i="0" data-rate="1.15">Fast</button></div></div>' +
          '<div class="row" style="gap:8px;margin-bottom:14px"><button class="btn btn-ghost btn-sm" data-act="toggle-transcript">Show transcript</button>' +
          '<button class="btn btn-ghost btn-sm" data-act="say-dialog" data-i="0" data-rate="0.62">Replay slowly</button></div>' +
          '<div id="transcript" class="transcript hidden">' + li.lines.map(l =>
            '<div class="t-line"><span class="t-who">' + esc(l.who) + '</span><span>' + esc(l.text) + '</span></div>').join("") + '</div>' +
          '<h4>Questions</h4><div id="listen-q">' + li.q.map((q, qi) => exerciseHtml(Object.assign({}, q, { t: "listenq" }), "lq" + qi)).join("") + '</div>' +
          '</div>' + stageFoot(false, "Next →", !stepReady());

      case 6: // Speaking
        return stepHead("Speaking practice") +
          '<div class="stage-body">' +
          '<p>Answer each question out loud in a full sentence. Tap the microphone to record, or just speak — then compare with the model answer.</p>' +
          (S.speakList.length ? S.speakList.map((p, i) => speakingCard(p, S.speakKeys[i])).join("")
            : '<p class="muted">No speaking prompts in this unit yet.</p>') +
          '</div>' + stageFoot(undefined, undefined, !stepReady());

      case 7: // Practice
        return stepHead("Practice exercises") +
          '<div class="stage-body">' +
          '<p>Answer each question. You will get instant feedback and a short explanation.</p>' +
          (S.ex.length ? S.ex.map((e, i) => '<div style="margin-bottom:26px">' + exerciseHtml(e, "ex" + i) + '</div>').join("")
            : '<p class="muted">No exercises in this unit yet.</p>') +
          '</div>' + stageFoot(undefined, undefined, !stepReady());

      case 8: // Quiz
        return stepHead("Mini quiz") +
          '<div class="stage-body">' +
          '<p>Three quick questions to check what you have learned. No going back this time.</p>' +
          (S.quiz.length ? S.quiz.map((e, i) => '<div style="margin-bottom:26px">' + exerciseHtml(e, "qz" + i) + '</div>').join("")
            : '<p class="muted">No quiz questions available.</p>') +
          '</div>' + stageFoot(false, undefined, !stepReady());

      case 9: // Review
        const total = S.total || 0, corr = S.correct || 0;
        const p = total ? pct(corr, total) : 0;
        return stepHead("Review") +
          '<div class="stage-body">' +
          '<div class="card flat" style="background:var(--surface-2);text-align:center;padding:26px">' +
          '<div style="font-family:var(--font-head);font-size:40px;font-weight:800;color:' + (p >= 70 ? "var(--success)" : "var(--warn)") + '">' + p + '%</div>' +
          '<div class="small muted">' + corr + ' of ' + total + ' answers correct</div></div>' +
          '<h4>What you covered</h4>' +
          '<ul class="obj-list">' +
          '<li>' + esc(ls.objective) + '</li>' +
          '<li>' + esc(S.vocab.length) + ' vocabulary words practised</li>' +
          (U.gram ? '<li>Grammar: ' + esc(U.gram.title) + '</li>' : "") +
          (U.listen ? '<li>Listening: ' + esc(U.listen.title) + '</li>' : "") +
          '<li>Speaking: ' + esc(S.unit.speak ? S.unit.speak.length + " prompts available" : "practice completed") + '</li>' +
          '</ul>' +
          '<div class="example-box" style="border-left-color:var(--primary)"><div class="ex-en">Before you finish</div>' +
          '<div class="ex-note">Say one sentence aloud using the new grammar. If you can produce it without thinking, you have learned it.</div></div>' +
          '</div>' + stageFoot(false, "Complete lesson ✓");

      case 10: // Complete
        const lv = state.progress.lessons[ls.id];
        return '<div class="center" style="padding:20px 0">' +
          '<div style="font-size:56px;margin-bottom:14px">🎉</div>' +
          '<h2 class="stage-title">Lesson complete!</h2>' +
          '<p class="muted" style="max-width:46ch;margin:8px auto 24px">' + esc(ls.title) + ' is done. ' +
          (lv ? "You scored " + lv.score + "%." : "") + ' Your progress has been saved.</p>' +
          '<div class="score-grid" style="max-width:520px;margin:0 auto 24px">' +
          '<div class="score-cell"><div class="sc-l">XP earned</div><div class="sc-v" style="color:var(--warn)">+' + (lv ? lv.xp : 0) + '</div></div>' +
          '<div class="score-cell"><div class="sc-l">Accuracy</div><div class="sc-v">' + (lv ? lv.score : 0) + '%</div></div>' +
          '<div class="score-cell"><div class="sc-l">Streak</div><div class="sc-v">' + (state.streak.count || 1) + ' 🔥</div></div>' +
          '</div>' +
          '<div class="row" style="gap:12px;justify-content:center;flex-wrap:wrap">' +
          '<button class="btn btn-primary btn-lg" data-act="next-lesson">Next lesson →</button>' +
          '<button class="btn btn-ghost btn-lg" data-act="go" data-href="#/unit/' + U.id + '">Back to unit</button>' +
          '<button class="btn btn-outline btn-lg" data-act="go" data-href="#/dashboard">Dashboard</button>' +
          '</div></div>';

      default:
        return stepHead("Lesson") + '<div class="stage-body"></div>' + stageFoot();
    }
  }

  function completeLesson() {
    const ls = S.lesson;
    if (state.progress.lessons[ls.id]) { S.step = 10; return; }
    const total = S.total || 0, corr = S.correct || 0;
    const score = total ? pct(corr, total) : 100;
    const bonus = score === 100 ? EH.xp.perfectBonus : 0;
    const gained = EH.xp.lesson + bonus;
    state.progress.lessons[ls.id] = { done: true, score: score, xp: gained, at: Date.now() };
    if (score === 100) state.progress.perfectScores = (state.progress.perfectScores || 0) + 1;
    if (isUnitComplete(ls.unitId)) {
      state.progress.units[ls.unitId] = { done: true, at: Date.now() };
    }
    touchStreak();
    state.daily.plan.lesson = true;
    addXp(gained, "Lesson completed");
    logActivity("lesson", "Completed: " + ls.title);
    if (score === 100) toast("Perfect score!", "100% on " + ls.title, "ok");
    S.step = 10;
    save();
  }

  /* ================= Exercise engine ================= */
  function exerciseHtml(ex, key) {
    const t = ex.t;
    const id = ' data-key="' + key + '"';
    if (t === "mcq" || t === "fill" || t === "listenq" || t === "vocab" || t === "readq") {
      const sentence = t === "fill" ? '<div class="ex-sentence">' + esc(ex.q).replace(/___/g, '<span class="blank">?</span>') + '</div>' : '';
      const audio = t === "listenq" && ex.text ? '<div class="audio-player" style="margin-bottom:16px"><button class="audio-play" data-act="say" data-text="' + esc(ex.text) + '">▶</button>' +
        '<div class="audio-meta"><div class="am-t">Listen carefully</div><div class="am-s">Tap to replay as many times as you need</div></div>' +
        '<div class="audio-speed"><button class="speed-btn" data-act="say" data-text="' + esc(ex.text) + '" data-rate="0.6">Slow</button></div></div>' : '';
      return '<div class="ex-wrap" id="ex-' + key + '"' + id + '>' + audio +
        '<div class="ex-prompt">' + esc(ex.q) + '</div>' + sentence +
        '<div class="ex-opts">' + ex.o.map((o, i) =>
          '<button class="ex-opt" data-act="answer" data-key="' + key + '" data-i="' + i + '">' +
          '<span class="eo-key">' + "ABCD"[i] + '</span><span>' + esc(o) + '</span></button>').join("") +
        '</div><div class="ex-fb"></div></div>';
    }
    if (t === "match") {
      const left = shuffle(ex.pairs.map((p, i) => ({ txt: p[0], i: i })));
      const right = shuffle(ex.pairs.map((p, i) => ({ txt: p[1], i: i })));
      return '<div class="ex-wrap" id="ex-' + key + '"' + id + '>' +
        '<div class="ex-prompt">Match the words with their meanings</div>' +
        '<div class="ex-hint">Tap one item on the left, then its partner on the right.</div>' +
        '<div class="match-grid"><div class="match-col">' +
        left.map(x => '<button class="match-item" data-act="match" data-key="' + key + '" data-side="l" data-i="' + x.i + '">' + esc(x.txt) + '</button>').join("") +
        '</div><div class="match-col">' +
        right.map(x => '<button class="match-item" data-act="match" data-key="' + key + '" data-side="r" data-i="' + x.i + '">' + esc(x.txt) + '</button>').join("") +
        '</div></div><div class="ex-fb"></div></div>';
    }
    if (t === "order") {
      const pool = shuffle(ex.words);
      return '<div class="ex-wrap" id="ex-' + key + '"' + id + '>' +
        '<div class="ex-prompt">Put the words in the correct order</div>' +
        '<div class="ex-hint">Tap the words to build the sentence.</div>' +
        '<div class="reorder-answer" data-role="answer"><span class="placeholder">Your sentence appears here…</span></div>' +
        '<div class="reorder-pool">' + pool.map((w, i) =>
          '<button class="word-chip" data-act="order-add" data-key="' + key + '" data-w="' + esc(w) + '">' + esc(w) + '</button>').join("") +
        '</div><div class="row mt-2" style="gap:10px"><button class="btn btn-primary btn-sm" data-act="order-check" data-key="' + key + '">Check</button>' +
        '<button class="btn btn-ghost btn-sm" data-act="order-reset" data-key="' + key + '">Clear</button></div>' +
        '<div class="ex-fb"></div></div>';
    }
    if (t === "translate" || t === "listenwrite" || t === "correct") {
      const prompt = t === "correct" ? "Correct this sentence" : t === "translate" ? "Translate into English" : "Listen and write what you hear";
      const audio = t === "listenwrite" && ex.text ? '<div class="audio-player" style="margin-bottom:16px"><button class="audio-play" data-act="say" data-text="' + esc(ex.text) + '" data-rate="0.7">▶</button>' +
        '<div class="audio-meta"><div class="am-t">Listen and type</div><div class="am-s">Replay as often as you like</div></div>' +
        '<div class="audio-speed"><button class="speed-btn" data-act="say" data-text="' + esc(ex.text) + '" data-rate="0.55">Slow</button>' +
        '<button class="speed-btn active" data-act="say" data-text="' + esc(ex.text) + '" data-rate="0.85">Normal</button></div></div>' : '';
      const shown = t === "correct" ? '<div class="ex-sentence" style="color:var(--danger)">' + esc(ex.wrong) + '</div>' : "";
      return '<div class="ex-wrap" id="ex-' + key + '"' + id + '>' + audio +
        '<div class="ex-prompt">' + prompt + '</div>' +
        (ex.q ? '<div class="ex-hint">' + esc(ex.q) + '</div>' : "") + shown +
        '<input class="ex-input" data-role="input" placeholder="Type your answer…" autocomplete="off" spellcheck="false" />' +
        '<div class="row mt-2" style="gap:10px"><button class="btn btn-primary btn-sm" data-act="input-check" data-key="' + key + '">Check answer</button>' +
        '<button class="btn btn-ghost btn-sm" data-act="input-hint" data-key="' + key + '">Hint</button></div>' +
        '<div class="ex-fb"></div></div>';
    }
    if (t === "write") {
      return '<div class="ex-wrap" id="ex-' + key + '"' + id + '>' +
        '<div class="ex-prompt">Write a sentence</div>' +
        '<div class="ex-hint">' + esc(ex.prompt) + (ex.minWords ? " (at least " + ex.minWords + " words)" : "") + '</div>' +
        '<textarea class="ex-input" data-role="input" placeholder="Write your answer here…"></textarea>' +
        '<div class="row mt-2"><button class="btn btn-primary btn-sm" data-act="write-check" data-key="' + key + '">Submit</button></div>' +
        '<div class="ex-fb"></div></div>';
    }
    if (t === "speak") {
      return speakingCard(ex.prompt, key);
    }
    if (t === "readanswer") {
      return '<div class="ex-wrap" id="ex-' + key + '"' + id + '>' +
        '<div class="ex-prompt">' + esc(ex.q) + '</div>' +
        '<div class="ex-opts">' + ex.o.map((o, i) =>
          '<button class="ex-opt" data-act="answer" data-key="' + key + '" data-i="' + i + '">' +
          '<span class="eo-key">' + "ABCD"[i] + '</span><span>' + esc(o) + '</span></button>').join("") +
        '</div><div class="ex-fb"></div></div>';
    }
    return '<div class="ex-wrap"><p class="muted">Unsupported exercise type: ' + esc(t) + '</p></div>';
  }

  function speakingCard(prompt, key) {
    const done = state.progress.speaking[key];
    return '<div class="ex-wrap" id="ex-' + key + '" data-key="' + key + '">' +
      '<div class="ex-prompt">' + esc(prompt) + '</div>' +
      '<div class="ex-hint">Speak clearly and in a full sentence. Tap the microphone, answer, then tap again to stop.</div>' +
      '<div class="mic-stage"><button class="mic-btn" data-act="mic" data-key="' + key + '" data-prompt="' + esc(prompt) + '">🎤</button>' +
      '<div class="small muted" data-role="mic-status">' + (sttOK ? "Tap to record your answer" : "Speech recognition is not available in this browser — use the model answer below") + '</div>' +
      '<div class="speak-heard" data-role="heard"><span class="sh-label">We heard</span><span data-role="heard-text">…</span></div>' +
      '</div>' +
      '<div class="ex-fb"></div>' +
      '<div class="row" style="gap:10px;margin-top:12px;flex-wrap:wrap">' +
      '<button class="btn btn-ghost btn-sm" data-act="speak-model" data-key="' + key + '" data-prompt="' + esc(prompt) + '">🔊 Hear a model answer</button>' +
      '<button class="btn btn-ghost btn-sm" data-act="speak-done" data-key="' + key + '" data-prompt="' + esc(prompt) + '">✓ I answered this</button>' +
      (done ? '<span class="badge badge-success">Completed</span>' : '') +
      '</div></div>';
  }

  function modelAnswer(prompt) {
    const p = norm(prompt);
    const map = [
      [/what is your name|what's your name/, "My name is Yassine. Nice to meet you."],
      [/where are you from/, "I am from Morocco, but I live in Casablanca now."],
      [/how old/, "I am twenty-two years old."],
      [/what do you do/, "I am a student, and I also work part-time in a shop."],
      [/free time|hobby|hobbies/, "In my free time I enjoy reading and playing football with my friends."],
      [/weekend/, "At the weekend I usually visit my family and relax at home."],
      [/breakfast/, "For breakfast I usually have bread, cheese and a cup of tea."],
      [/family/, "There are five people in my family: my parents, my two sisters and me."],
      [/live/, "I live in a small flat near the city centre."],
      [/yesterday/, "Yesterday I studied English in the morning and met a friend in the afternoon."],
      [/goal|future|plan/, "My goal is to speak English confidently at work within two years."],
      [/travel|trip|holiday/, "Last year I travelled to Turkey with my family. It was a beautiful trip."],
      [/job|work/, "I work in an office. I am responsible for customer support."],
      [/weather/, "It is warm and sunny today — much nicer than yesterday."],
      [/opinion|think/, "In my opinion, learning a language is mostly about consistency."],
      [/compare|better/, "I think the city is more exciting, but the countryside is quieter and cheaper."]
    ];
    for (const m of map) { if (m[0].test(p)) return m[1]; }
    return "That is an interesting question. Let me explain my view in a few sentences and give one example from my own experience.";
  }

  /* ---- answer evaluation ---- */
  function findEx(key) {
    const m = /^([a-z]+)(\d+)$/.exec(key);
    if (!m) return null;
    const kind = m[1], i = parseInt(m[2], 10);
    if (kind === "ex") return S.ex[i];
    if (kind === "qz") return S.quiz[i];
    if (kind === "lq" && S.unit.listen) return Object.assign({ t: "listenq" }, S.unit.listen.q[i]);
    return null;
  }
  function fbHtml(ok, why, correctText) {
    return '<div class="feedback ' + (ok ? "ok" : "no") + '"><span class="fb-ico">' + (ok ? "✓" : "✕") + '</span>' +
      '<div><div class="fb-t">' + (ok ? "Correct!" : "Not quite") + '</div>' +
      '<div class="fb-b">' + (correctText ? "<strong>Answer: </strong>" + esc(correctText) + "<br>" : "") + esc(why || "") + '</div></div></div>';
  }
  function markResult(key, ok) {
    if (S.answers[key] !== undefined) return;
    S.answers[key] = ok;
    S.total++;
    if (ok) { S.correct++; state.progress.exCorrect++; } else { state.progress.exWrong++; }
    // Finishing all listening questions records the unit's listening practice.
    if (key.indexOf("lq") === 0 && S.unit && S.unit.listen) {
      const lq = S.unit.listen.q || [];
      if (lq.length && lq.every((_, i) => S.answers["lq" + i] !== undefined)) {
        state.progress.listening[S.unit.id + "-listen"] = { done: true, at: Date.now() };
        state.daily.plan.listening = true;
        addXp(EH.xp.listening, "Listening practice");
      }
    }
    save();
  }

  function answerMcq(key, i) {
    const ex = findEx(key); if (!ex) return;
    const wrap = $("#ex-" + key); if (!wrap || S.answers[key] !== undefined) return;
    const opts = $$(".ex-opt", wrap);
    opts.forEach((b, bi) => {
      b.classList.add("locked");
      if (bi === ex.a) b.classList.add("correct");
      else if (bi === i) b.classList.add("wrong");
    });
    const ok = i === ex.a;
    markResult(key, ok);
    const fb = $(".ex-fb", wrap);
    if (fb) fb.innerHTML = fbHtml(ok, ex.why, ok ? "" : ex.o[ex.a]);
    if (ok) addXp(EH.xp.exercise, null);
    checkStepReady();
  }

  function orderState(key) {
    S.order = S.order || {};
    if (!S.order[key]) S.order[key] = [];
    return S.order[key];
  }
  function renderOrder(key) {
    const wrap = $("#ex-" + key); if (!wrap) return;
    const arr = orderState(key);
    const box = $('[data-role="answer"]', wrap);
    box.innerHTML = arr.length
      ? arr.map((w, i) => '<button class="word-chip placed" data-act="order-remove" data-key="' + key + '" data-i="' + i + '">' + esc(w) + '</button>').join("")
      : '<span class="placeholder">Your sentence appears here…</span>';
  }
  function checkOrder(key) {
    const ex = findEx(key); if (!ex) return;
    const wrap = $("#ex-" + key); if (!wrap || S.answers[key] !== undefined) return;
    const arr = orderState(key);
    const ok = norm(arr.join(" ")) === norm(ex.answer);
    markResult(key, ok);
    const fb = $(".ex-fb", wrap);
    if (fb) fb.innerHTML = fbHtml(ok, ok ? "Word order is correct." : "Check the order of the words.", ok ? "" : ex.answer);
    if (ok) addXp(EH.xp.exercise, null);
    checkStepReady();
  }

  function checkInput(key) {
    const ex = findEx(key); if (!ex) return;
    const wrap = $("#ex-" + key); if (!wrap || S.answers[key] !== undefined) return;
    const input = $('[data-role="input"]', wrap);
    const val = norm(input.value);
    if (!val) { toast("Type an answer first", null, "warn"); return; }
    const accepted = ex.t === "correct" || ex.t === "listenwrite" ? [ex.answer]
      : ex.t === "translate" ? (ex.a || []) : [ex.answer || ""];
    const ok = accepted.some(a => norm(a) === val);
    markResult(key, ok);
    input.classList.add(ok ? "correct" : "wrong");
    input.disabled = true;
    const fb = $(".ex-fb", wrap);
    if (fb) fb.innerHTML = fbHtml(ok, ex.why, ok ? "" : (accepted[0] || ""));
    if (ok) addXp(EH.xp.exercise, null);
    checkStepReady();
  }

  function checkWrite(key) {
    const ex = findEx(key); if (!ex) return;
    const wrap = $("#ex-" + key); if (!wrap || S.answers[key] !== undefined) return;
    const input = $('[data-role="input"]', wrap);
    const text = input.value.trim();
    const n = words(text).length;
    if (n < 3) { toast("Write a little more", "Try at least three words.", "warn"); return; }
    const kws = ex.keywords || [];
    const hit = kws.filter(k => norm(text).indexOf(norm(k)) !== -1);
    const ok = n >= (ex.minWords || 5) && (kws.length === 0 || hit.length > 0);
    markResult(key, ok);
    input.disabled = true;
    const fb = $(".ex-fb", wrap);
    const notes = [];
    if (n < (ex.minWords || 5)) notes.push("Aim for at least " + (ex.minWords || 5) + " words — you wrote " + n + ".");
    if (kws.length && !hit.length) notes.push("Try to include: " + kws.join(", ") + ".");
    if (ok) notes.push("Good — your sentence is clear and complete.");
    if (fb) fb.innerHTML = fbHtml(ok, notes.join(" "), "");
    if (ok) addXp(EH.xp.exercise, null);
    checkStepReady();
  }

  function matchState(key) {
    S.match = S.match || {};
    if (!S.match[key]) S.match[key] = { sel: null, done: [], errors: 0 };
    return S.match[key];
  }
  function doMatch(key, side, i) {
    const ex = findEx(key); if (!ex) return;
    const wrap = $("#ex-" + key); if (!wrap || S.answers[key] !== undefined) return;
    const st = matchState(key);
    const btn = $('.match-item[data-side="' + side + '"][data-i="' + i + '"]', wrap);
    if (!btn || btn.classList.contains("done")) return;
    if (!st.sel) { st.sel = { side: side, i: i }; btn.classList.add("sel"); return; }
    if (st.sel.side === side) {
      $$(".match-item.sel", wrap).forEach(b => b.classList.remove("sel"));
      st.sel = { side: side, i: i }; btn.classList.add("sel"); return;
    }
    const a = st.sel, b = { side: side, i: i };
    const okPair = a.i === b.i;
    const elA = $('.match-item[data-side="' + a.side + '"][data-i="' + a.i + '"]', wrap);
    if (okPair) {
      elA.classList.remove("sel"); elA.classList.add("done"); btn.classList.add("done");
      st.done.push(a.i);
      st.sel = null;
      if (st.done.length === ex.pairs.length) {
        const ok = st.errors === 0;
        markResult(key, ok);
        const fb = $(".ex-fb", wrap);
        if (fb) fb.innerHTML = fbHtml(true, st.errors === 0 ? "All pairs matched perfectly." : "All pairs matched — with " + st.errors + " mistake(s).", "");
        if (ok) addXp(EH.xp.exercise, null);
        checkStepReady();
      }
    } else {
      st.errors++;
      elA.classList.add("err"); btn.classList.add("err");
      setTimeout(() => { elA.classList.remove("err", "sel"); btn.classList.remove("err"); }, 420);
      st.sel = null;
    }
  }

  /* ---- speaking ---- */
  let recog = null, recActive = false, recKey = null;
  function toggleMic(key, prompt, btn) {
    if (!sttOK) {
      toast("Speech recognition unavailable", "Your browser does not support it. Use the model answer instead.", "warn");
      return;
    }
    if (recActive) { try { recog.stop(); } catch (e) { /* noop */ } recActive = false; btn.classList.remove("rec"); return; }
    try {
      recog = new SR();
      recog.lang = state.settings.voiceAccent === "en-US" ? "en-US" : "en-GB";
      recog.interimResults = true;
      recog.continuous = false;
      recogKey = key;
      const wrap = $("#ex-" + key);
      const heard = wrap ? $('[data-role="heard-text"]', wrap) : null;
      const status = wrap ? $('[data-role="mic-status"]', wrap) : null;
      recog.onresult = function (ev) {
        let txt = "";
        for (let i = 0; i < ev.results.length; i++) txt += ev.results[i][0].transcript;
        if (heard) heard.textContent = txt;
      };
      recog.onerror = function () { if (status) status.textContent = "Microphone error — check permissions."; };
      recog.onend = function () {
        recActive = false; btn.classList.remove("rec");
        const txt = heard ? heard.textContent : "";
        if (status) status.textContent = "Recording finished — review your answer below.";
        if (txt && txt.length > 3) evaluateSpeaking(key, prompt, txt);
      };
      recog.start();
      recActive = true; btn.classList.add("rec");
      if (status) status.textContent = "Listening… speak now.";
      if (heard) heard.textContent = "";
    } catch (e) {
      toast("Could not start recording", "Check your microphone permissions.", "warn");
    }
  }

  function evaluateSpeaking(key, prompt, text) {
    const w = words(text);
    const n = w.length;
    const fillers = w.filter(x => ["um", "uh", "er", "like", "you know"].indexOf(x) !== -1).length;
    const unique = new Set(w).size;
    const vocab = clamp(Math.round((unique / Math.max(1, n)) * 100), 0, 100);
    const length = clamp(Math.round((n / 12) * 100), 0, 100);
    const fluency = clamp(Math.round(length * 0.6 + (100 - Math.min(100, fillers * 25)) * 0.4), 0, 100);
    const structure = clamp(Math.round((/(\bi am\b|\bi'm\b|\bi have\b|\bi like\b|\bthere is\b|\bthere are\b|\bbecause\b|\bmy name\b)/i.test(text) ? 82 : 58) + Math.min(18, n)), 0, 100);
    const grammar = clamp(Math.round(100 - fillers * 12 - (/\bi\s+(is|are)\b/i.test(text) ? 25 : 0) - (/\bhe\s+(am|are)\b/i.test(text) ? 25 : 0)), 40, 100);
    const overall = Math.round((vocab * 0.2 + fluency * 0.3 + structure * 0.25 + grammar * 0.25));

    const wrap = $("#ex-" + key);
    if (wrap) {
      const fb = $(".ex-fb", wrap);
      if (fb) {
        fb.innerHTML = '<div class="feedback ' + (overall >= 65 ? "ok" : "no") + '">' +
          '<span class="fb-ico">' + (overall >= 65 ? "✓" : "◐") + '</span><div style="flex:1">' +
          '<div class="fb-t">' + (overall >= 65 ? "Good answer — " : "Keep going — ") + overall + '% overall</div>' +
          '<div class="fb-b">You produced ' + n + ' words.' + (n < 8 ? " Try to speak in longer, fuller sentences." : " Good length.") +
          (fillers > 1 ? " Watch out for filler words (you know, like) — they slow you down." : "") + '</div>' +
          '<div class="score-grid">' +
          '<div class="score-cell"><div class="sc-l">Grammar</div><div class="sc-v">' + grammar + '%</div></div>' +
          '<div class="score-cell"><div class="sc-l">Vocabulary</div><div class="sc-v">' + vocab + '%</div></div>' +
          '<div class="score-cell"><div class="sc-l">Fluency</div><div class="sc-v">' + fluency + '%</div></div>' +
          '<div class="score-cell"><div class="sc-l">Structure</div><div class="sc-v">' + structure + '%</div></div>' +
          '</div>' +
          '<div class="small muted" style="margin-top:10px"><strong>Model answer:</strong> ' + esc(modelAnswer(prompt)) + '</div>' +
          '</div></div>';
      }
    }
    if (state.progress.speaking[key] === undefined) {
      state.progress.speaking[key] = { score: overall, text: text.slice(0, 200), at: Date.now() };
      S.total++; if (overall >= 65) { S.correct++; }
      touchStreak(); addXp(EH.xp.speaking, "Speaking practice");
      state.daily.plan.speaking = true;
      logActivity("speaking", "Speaking practice: " + prompt.slice(0, 48));
      checkStepReady();
      save();
    }
  }

  /* ================= View: Vocabulary ================= */
  let vFilter = "all";
  ROUTES.vocabulary = function (r) {
    const all = allVocab();
    const lvl = (r.parts && r.parts[1]) || "";
    const unitId = (function () {
      const m = /u=([^&]+)/.exec(location.hash || "");
      return m ? m[1] : "";
    })();
    let list = all;
    if (lvl && byId.levels[lvl]) list = list.filter(v => v.levelId === lvl);
    if (unitId && byId.units[unitId]) list = list.filter(v => v.unitId === unitId);
    if (vFilter === "learned") list = list.filter(v => state.progress.vocab[v.w] && state.progress.vocab[v.w].status === "known");
    if (vFilter === "difficult") list = list.filter(v => state.progress.vocab[v.w] && state.progress.vocab[v.w].status === "difficult");

    const learned = all.filter(v => state.progress.vocab[v.w] && state.progress.vocab[v.w].status === "known").length;
    const diff = all.filter(v => state.progress.vocab[v.w] && state.progress.vocab[v.w].status === "difficult").length;

    return '<div class="page-head"><h1>Vocabulary</h1>' +
      '<p>Every word comes with a definition, an Arabic translation, an example and audio. Use flashcards to review and mark the words you find difficult.</p></div>' +
      '<div class="grid g-4 mb-3">' +
      '<div class="stat"><div class="s-ico">◉</div><div><div class="s-val">' + all.length + '</div><div class="s-lbl">Total words</div></div></div>' +
      '<div class="stat green"><div class="s-ico">✓</div><div><div class="s-val">' + learned + '</div><div class="s-lbl">Learned</div></div></div>' +
      '<div class="stat warn"><div class="s-ico">⚑</div><div><div class="s-val">' + diff + '</div><div class="s-lbl">Difficult</div></div></div>' +
      '<div class="stat purple"><div class="s-ico">◈</div><div><div class="s-val">' + pct(learned, Math.max(1, all.length)) + '%</div><div class="s-lbl">Mastery</div></div></div>' +
      '</div>' +

      '<div class="grid" style="grid-template-columns:1fr 1.35fr;align-items:start">' +
      '<div class="card"><div class="card-head"><div class="card-title">Flashcards</div>' +
      '<span class="badge badge-primary">' + Math.min(20, list.length) + ' cards</span></div>' +
      '<div id="flash-host">' + flashcardHtml(list) + '</div>' +
      '<div class="chip-row mt-2">' +
      '<button class="chip" data-act="vfilter" data-f="all">All</button>' +
      '<button class="chip' + (vFilter === "learned" ? " active" : "") + '" data-act="vfilter" data-f="learned">Learned</button>' +
      '<button class="chip' + (vFilter === "difficult" ? " active" : "") + '" data-act="vfilter" data-f="difficult">Difficult</button>' +
      '</div></div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Word list</div>' +
      '<span class="small muted">' + list.length + ' words</span></div>' +
      '<div style="max-height:620px;overflow:auto">' +
      (list.length ? list.slice(0, 120).map(v => {
        const st = state.progress.vocab[v.w] || {};
        return '<div class="vocab-row" style="margin-bottom:9px">' + speakBtn(v.w) +
          '<div style="flex:1;min-width:0"><div class="vocab-word">' + esc(v.w) +
          ' <span class="tiny muted">' + esc(v.ipa || "") + '</span> ' +
          (st.status === "known" ? '<span class="badge badge-success">known</span>' : st.status === "difficult" ? '<span class="badge badge-warn">difficult</span>' : "") + '</div>' +
          '<div class="vocab-def">' + esc(v.def) + '</div>' +
          '<div class="tiny muted">' + esc(v.unitTitle) + '</div></div>' +
          '<div class="vocab-ar">' + esc(v.ar || "") + '</div>' +
          '<button class="btn btn-ghost btn-sm" data-act="vset" data-w="' + esc(v.w) + '" data-s="' + (st.status === "known" ? "learning" : "known") + '">' +
          (st.status === "known" ? "Undo" : "Know") + '</button>' +
          '<button class="btn btn-ghost btn-sm" data-act="vset" data-w="' + esc(v.w) + '" data-s="difficult">⚑</button>' +
          '</div>';
      }).join("") : '<div class="empty"><div class="e-ico">◉</div><h3>No words here</h3><p>Try a different filter.</p></div>') +
      '</div></div></div>';
  };

  let flashIndex = 0;
  function flashcardHtml(list) {
    if (!list.length) return '<div class="empty" style="padding:30px"><h3>No cards</h3><p>Change the filter or complete a lesson.</p></div>';
    const v = list[flashIndex % list.length];
    const st = state.progress.vocab[v.w] || {};
    return '<div class="flashcard" data-act="flip">' +
      '<div class="flashcard-inner">' +
      '<div class="flash-face">' +
      '<span class="flash-tag">' + levelBadge(v.levelId) + '</span>' +
      '<span class="flash-pos">' + esc(v.pos || "") + '</span>' +
      '<div class="flash-word">' + esc(v.w) + '</div>' +
      '<div class="flash-ipa">' + esc(v.ipa || "") + '</div>' +
      '<div class="row" style="gap:8px">' + speakBtn(v.w) + '<button class="btn btn-ghost btn-sm" data-act="say" data-text="' + esc(v.ex || v.w) + '">🔊 Example</button></div>' +
      '<div class="flash-hint">Tap the card to reveal the meaning</div></div>' +
      '<div class="flash-face back">' +
      '<span class="flash-tag">' + levelBadge(v.levelId) + '</span>' +
      '<div class="flash-ar">' + esc(v.ar || "") + '</div>' +
      '<div class="flash-def">' + esc(v.def) + '</div>' +
      '<div class="flash-ex">"' + esc(v.ex || "") + '"</div>' +
      '<div class="tiny muted" style="margin-top:12px">' + esc(v.unitTitle) + '</div>' +
      '<div class="flash-hint">Tap to flip back</div></div>' +
      '</div></div>' +
      '<div class="row" style="gap:10px;justify-content:space-between">' +
      '<button class="btn btn-ghost btn-sm" data-act="flash-prev">← Previous</button>' +
      '<span class="small muted">' + ((flashIndex % list.length) + 1) + ' / ' + list.length + '</span>' +
      '<button class="btn btn-ghost btn-sm" data-act="flash-next">Next →</button></div>' +
      '<div class="row" style="gap:10px;margin-top:12px">' +
      '<button class="btn btn-success btn-block btn-sm" data-act="vset-next" data-w="' + esc(v.w) + '" data-s="known">✓ I know this</button>' +
      '<button class="btn btn-danger btn-block btn-sm" data-act="vset-next" data-w="' + esc(v.w) + '" data-s="difficult">⚑ Difficult</button></div>' +
      (st.seen ? '<div class="tiny muted center mt-2">Reviewed ' + st.seen + ' time(s)</div>' : "");
  }

  /* ================= View: Grammar ================= */
  ROUTES.grammar = function (r) {
    const unitId = (function () { const m = /u=([^&]+)/.exec(location.hash || ""); return m ? m[1] : ""; })();
    const lvl = r.parts && r.parts[1] && byId.levels[r.parts[1]] ? r.parts[1] : "";
    let units = allUnits();
    if (unitId && byId.units[unitId]) units = [byId.units[unitId]];
    else if (lvl) units = units.filter(u => u.levelId === lvl);
    const withG = units.filter(u => u.gram);
    const open = unitId && byId.units[unitId] ? unitId : (withG[0] ? withG[0].id : "");
    const U = byId.units[open];
    const lang = state.settings.lang || "en";
    return '<div class="page-head"><h1>Grammar</h1>' +
      '<p>A complete grammar curriculum from A1 to C1. Every point includes a simple explanation, a formula, examples, common mistakes and practice.</p></div>' +
      '<div class="row wrap mb-3" style="gap:8px">' +
      '<button class="chip' + (!lvl && !unitId ? " active" : "") + '" data-act="go" data-href="#/grammar">All levels</button>' +
      CUR.levels.map(L => '<button class="chip' + (lvl === L.id ? " active" : "") + '" data-act="go" data-href="#/grammar/' + L.id + '">' + L.code + '</button>').join("") +
      '<div class="topbar-spacer"></div>' +
      '<div class="lang-tabs">' + ['en', 'ar', 'fr'].map(l =>
        '<button class="lang-tab' + (lang === l ? " active" : "") + '" data-act="lang" data-l="' + l + '">' +
        ({ en: "English", ar: "العربية", fr: "Français" })[l] + '</button>').join("") + '</div>' +
      '</div>' +

      '<div class="grid" style="grid-template-columns:300px 1fr;align-items:start">' +
      '<div class="card" style="padding:14px"><div style="max-height:660px;overflow:auto">' +
      withG.map(u => '<button class="unit-row' + (u.id === open ? " current" : "") + ' clickable" style="width:100%;margin-bottom:8px" data-act="go" data-href="#/grammar?u=' + u.id + '">' +
        '<div class="unit-num" style="width:32px;height:32px;font-size:12px">' + u.n + '</div>' +
        '<div class="unit-main"><h4 style="font-size:13.5px">' + esc(u.gram.title) + '</h4>' +
        '<p>' + esc(u.title) + '</p></div></button>').join("") +
      '</div></div>' +

      '<div class="card pad-lg">' + (U && U.gram ?
        '<div class="row between wrap mb-2"><div>' +
        '<div class="row" style="gap:9px;margin-bottom:6px">' + levelBadge(U.levelId) + '<span class="badge badge-neutral">Unit ' + U.n + '</span></div>' +
        '<h2 style="font-size:23px">' + esc(U.gram.title) + '</h2></div>' +
        speakBtn(U.gram.explain[lang] || U.gram.explain.en) + '</div>' +
        (lang === "ar" ? '<p class="ar-text">' + esc(U.gram.explain.ar) + '</p>'
          : lang === "fr" ? '<p style="font-size:15.5px;line-height:1.75">' + esc(U.gram.explain.fr) + '</p>'
          : '<p style="font-size:15.5px;line-height:1.75">' + esc(U.gram.explain.en) + '</p>') +
        '<h4 style="margin:22px 0 10px;font-family:var(--font-head)">Structure</h4>' +
        '<div class="formula">' + U.gram.formula.join("<br>") + '</div>' +
        '<h4 style="margin:22px 0 10px;font-family:var(--font-head)">Examples</h4>' +
        U.gram.examples.map(e => '<div class="example-box" style="display:flex;gap:12px;align-items:center">' + speakBtn(e.en) +
          '<div style="flex:1"><div class="ex-en">' + esc(e.en) + '</div>' +
          (lang === "ar" ? '<div class="ex-ar">' + esc(e.ar) + '</div>' : "") + '</div></div>').join("") +
        '<h4 style="margin:22px 0 10px;font-family:var(--font-head)">Common mistakes</h4>' +
        U.gram.mistakes.map(m => '<div class="mistake"><span class="m-ico">⚠</span><div>' +
          '<span class="m-wrong">' + esc(m.w) + '</span> → <span class="m-right">' + esc(m.r) + '</span>' +
          '<div class="tiny muted" style="margin-top:4px">' + esc(m.why) + '</div></div></div>').join("") +
        '<div class="divider"></div>' +
        '<h4 style="margin:0 0 12px;font-family:var(--font-head)">Practice this grammar</h4>' +
        '<div id="g-practice">' + (U.ex || []).filter(e => ["mcq", "fill", "correct", "order"].indexOf(e.t) !== -1).slice(0, 3)
          .map((e, i) => '<div style="margin-bottom:24px">' + exerciseHtml(e, "gp" + i) + '</div>').join("") +
          ((U.ex || []).filter(e => ["mcq", "fill", "correct", "order"].indexOf(e.t) !== -1).length ? "" : '<p class="muted small">No grammar exercises in this unit.</p>') +
        '</div>' +
        '<button class="btn btn-primary btn-block mt-3" data-act="go" data-href="#/unit/' + U.id + '">Open full unit →</button>'
        : '<div class="empty"><h3>Select a grammar point</h3><p>Choose a unit from the list on the left.</p></div>') +
      '</div></div>';
  };

  /* ================= View: Listening ================= */
  ROUTES.listening = function (r) {
    const unitId = (function () { const m = /u=([^&]+)/.exec(location.hash || ""); return m ? m[1] : ""; })();
    const lvl = r.parts && r.parts[1] && byId.levels[r.parts[1]] ? r.parts[1] : "";
    let units = allUnits().filter(u => u.listen);
    if (unitId && byId.units[unitId]) units = [byId.units[unitId]];
    else if (lvl) units = units.filter(u => u.levelId === lvl);
    const open = unitId && byId.units[unitId] ? unitId : (units[0] ? units[0].id : "");
    const U = byId.units[open];
    const speeds = { a1: "Very slow and clear", a2: "Slow natural English", b1: "Normal conversational English", b2: "Natural native-like English", c1: "Fast and complex English" };
    return '<div class="page-head"><h1>Listening</h1>' +
      '<p>Real dialogues for every level, from very slow and clear at A1 to fast and complex at C1. Every exercise includes audio, transcript, vocabulary and questions.</p></div>' +
      '<div class="row wrap mb-3" style="gap:8px">' +
      '<button class="chip' + (!lvl && !unitId ? " active" : "") + '" data-act="go" data-href="#/listening">All levels</button>' +
      CUR.levels.map(L => '<button class="chip' + (lvl === L.id ? " active" : "") + '" data-act="go" data-href="#/listening/' + L.id + '">' + L.code + '</button>').join("") +
      '</div>' +
      '<div class="grid" style="grid-template-columns:300px 1fr;align-items:start">' +
      '<div class="card" style="padding:14px"><div style="max-height:660px;overflow:auto">' +
      units.map(u => '<button class="unit-row' + (u.id === open ? " current" : "") + ' clickable" style="width:100%;margin-bottom:8px" data-act="go" data-href="#/listening?u=' + u.id + '">' +
        '<div class="unit-num" style="width:32px;height:32px;font-size:12px">' + u.n + '</div>' +
        '<div class="unit-main"><h4 style="font-size:13.5px">' + esc(u.listen.title) + '</h4><p>' + esc(u.title) + '</p></div>' +
        (state.progress.listening[u.id + "-listen"] ? '<span style="color:var(--success)">✓</span>' : "") + '</button>').join("") +
      '</div></div>' +
      '<div class="card pad-lg">' + (U && U.listen ?
        '<div class="row between wrap mb-2"><div><div class="row" style="gap:9px;margin-bottom:6px">' + levelBadge(U.levelId) +
        '<span class="badge badge-neutral">' + esc(speeds[U.levelId] || "") + '</span></div>' +
        '<h2 style="font-size:23px">' + esc(U.listen.title) + '</h2></div></div>' +
        '<div class="audio-player"><button class="audio-play" data-act="say-dialog" data-i="0">▶</button>' +
        '<div class="audio-meta"><div class="am-t">' + esc(U.listen.title) + '</div>' +
        '<div class="am-s">' + U.listen.lines.length + ' lines · ' + esc(speeds[U.levelId] || "") + '</div></div>' +
        '<div class="audio-speed">' +
        '<button class="speed-btn" data-act="say-dialog" data-i="0" data-rate="0.58">Slow</button>' +
        '<button class="speed-btn active" data-act="say-dialog" data-i="0" data-rate="0.92">Normal</button>' +
        '<button class="speed-btn" data-act="say-dialog" data-i="0" data-rate="1.18">Fast</button></div></div>' +
        '<div class="row wrap" style="gap:8px;margin-bottom:16px">' +
        '<button class="btn btn-ghost btn-sm" data-act="toggle-transcript">📄 Transcript</button>' +
        '<button class="btn btn-ghost btn-sm" data-act="say-dialog" data-i="0" data-rate="0.58">↻ Replay slowly</button>' +
        '<button class="btn btn-ghost btn-sm" data-act="go" data-href="#/vocabulary?u=' + U.id + '">◉ Unit vocabulary</button></div>' +
        '<div id="transcript" class="transcript hidden">' + U.listen.lines.map((l, i) =>
          '<div class="t-line"><span class="t-who">' + esc(l.who) + '</span><span style="flex:1">' + esc(l.text) + '</span>' +
          speakBtn(l.text) + '</div>').join("") + '</div>' +
        '<h4 style="margin:20px 0 12px;font-family:var(--font-head)">Questions</h4>' +
        U.listen.q.map((q, i) => '<div style="margin-bottom:24px">' + exerciseHtml(Object.assign({}, q, { t: "listenq" }), "ls" + i) + '</div>').join("") +
        '<button class="btn btn-primary btn-block mt-3" data-act="go" data-href="#/unit/' + U.id + '">Open full unit →</button>'
        : '<div class="empty"><h3>Select a listening exercise</h3><p>Choose a unit from the list on the left.</p></div>') +
      '</div></div>';
  };

  /* ================= View: Speaking ================= */
  ROUTES.speaking = function (r) {
    const unitId = (function () { const m = /u=([^&]+)/.exec(location.hash || ""); return m ? m[1] : ""; })();
    const lvl = r.parts && r.parts[1] && byId.levels[r.parts[1]] ? r.parts[1] : state.currentLevel;
    let units = allUnits().filter(u => u.speak && u.speak.length);
    if (unitId && byId.units[unitId]) units = [byId.units[unitId]];
    else units = units.filter(u => u.levelId === lvl);
    const done = Object.keys(state.progress.speaking).length;
    return '<div class="page-head"><h1>Speaking</h1>' +
      '<p>Answer questions out loud. We evaluate grammar, vocabulary, fluency and sentence structure, then give you a model answer to compare with.</p></div>' +
      '<div class="grid g-3 mb-3">' +
      '<div class="stat"><div class="s-ico">◍</div><div><div class="s-val">' + done + '</div><div class="s-lbl">Questions answered</div></div></div>' +
      '<div class="stat green"><div class="s-ico">✓</div><div><div class="s-val">' + skillScores().speaking + '%</div><div class="s-lbl">Speaking score</div></div></div>' +
      '<div class="stat ' + (sttOK ? "" : "warn") + '"><div class="s-ico">🎤</div><div><div class="s-val">' + (sttOK ? "Ready" : "Limited") + '</div><div class="s-lbl">Microphone</div></div></div>' +
      '</div>' +
      (!sttOK ? '<div class="card" style="border-left:3px solid var(--warn);margin-bottom:20px"><strong>Speech recognition is not available in this browser.</strong> <span class="small muted">You can still practise aloud using the model answers — Chrome and Edge support live evaluation.</span></div>' : "") +
      '<div class="row wrap mb-3" style="gap:8px">' +
      CUR.levels.map(L => '<button class="chip' + (lvl === L.id ? " active" : "") + '" data-act="go" data-href="#/speaking/' + L.id + '">' + L.code + '</button>').join("") +
      '</div>' +
      (units.length ? units.slice(0, 6).map((U, ui) => '<div class="card mb-3"><div class="card-head"><div>' +
        '<div class="card-title">' + levelBadge(U.levelId) + ' ' + esc(U.title) + '</div>' +
        '<div class="card-sub">' + esc(U.theme) + '</div></div>' +
        '<button class="btn btn-ghost btn-sm" data-act="go" data-href="#/unit/' + U.id + '">Open unit</button></div>' +
        (U.speak || []).map((p, i) => '<div style="margin-bottom:22px">' + speakingCard(p, "sk" + U.id + "-" + i) + '</div>').join("") +
        '</div>').join("") : '<div class="empty"><div class="e-ico">◍</div><h3>No speaking prompts for this level</h3><p>Pick another level above.</p></div>');
  };

  /* ================= View: Reading ================= */
  ROUTES.reading = function (r) {
    const unitId = (function () { const m = /u=([^&]+)/.exec(location.hash || ""); return m ? m[1] : ""; })();
    const lvl = r.parts && r.parts[1] && byId.levels[r.parts[1]] ? r.parts[1] : state.currentLevel;
    let units = allUnits().filter(u => u.read);
    if (unitId && byId.units[unitId]) units = [byId.units[unitId]];
    else units = units.filter(u => u.levelId === lvl);
    return '<div class="page-head"><h1>Reading</h1>' +
      '<p>Read a short text at your level, then answer comprehension questions. Every text uses the vocabulary and grammar of its unit.</p></div>' +
      '<div class="row wrap mb-3" style="gap:8px">' +
      CUR.levels.map(L => '<button class="chip' + (lvl === L.id ? " active" : "") + '" data-act="go" data-href="#/reading/' + L.id + '">' + L.code + '</button>').join("") +
      '</div>' +
      (units.length ? units.map(U => {
        const key = "rd-" + U.id;
        const done = state.progress.reading[key];
        return '<div class="card mb-3"><div class="card-head"><div>' +
          '<div class="card-title">' + levelBadge(U.levelId) + ' ' + esc(U.read.title) + '</div>' +
          '<div class="card-sub">Unit ' + U.n + ' · ' + esc(U.title) + ' · ' + words(U.read.text).length + ' words</div></div>' +
          (done ? '<span class="badge badge-success">Read ✓</span>' : "") + '</div>' +
          '<div class="row" style="gap:10px;margin-bottom:14px">' +
          speakBtn(U.read.text) +
          '<button class="btn btn-ghost btn-sm" data-act="say" data-text="' + esc(U.read.text) + '" data-rate="0.8">🔊 Listen slowly</button>' +
          '<button class="btn btn-ghost btn-sm" data-act="mark-read" data-key="' + key + '" data-unit="' + U.id + '">✓ Mark as read</button></div>' +
          '<div class="transcript" style="font-size:15.5px;line-height:1.9">' + esc(U.read.text) + '</div>' +
          '<h4 style="margin:18px 0 12px;font-family:var(--font-head)">Comprehension</h4>' +
          U.read.q.map((q, i) => '<div style="margin-bottom:22px">' + exerciseHtml(Object.assign({}, q, { t: "readq" }), "rd" + U.id + "-" + i) + '</div>').join("") +
          '</div>';
      }).join("") : '<div class="empty"><div class="e-ico">▤</div><h3>No reading texts for this level</h3><p>Pick another level above.</p></div>');
  };

  /* ================= View: Writing ================= */
  ROUTES.writing = function (r) {
    const lvl = r.parts && r.parts[1] && byId.levels[r.parts[1]] ? r.parts[1] : state.currentLevel;
    const units = allUnits().filter(u => u.write && u.levelId === lvl);
    return '<div class="page-head"><h1>Writing</h1>' +
      '<p>Write a short piece for each unit. Compare with the model answer and use the checklist to improve.</p></div>' +
      '<div class="row wrap mb-3" style="gap:8px">' +
      CUR.levels.map(L => '<button class="chip' + (lvl === L.id ? " active" : "") + '" data-act="go" data-href="#/writing/' + L.id + '">' + L.code + '</button>').join("") +
      '</div>' +
      (units.length ? units.map(U => {
        const key = "wr-" + U.id;
        const saved = state.progress.writing[key];
        return '<div class="card mb-3"><div class="card-head"><div>' +
          '<div class="card-title">' + levelBadge(U.levelId) + ' Unit ' + U.n + ': ' + esc(U.title) + '</div>' +
          '<div class="card-sub">' + esc(U.write.prompt) + '</div></div>' +
          (saved ? '<span class="badge badge-success">Submitted</span>' : "") + '</div>' +
          '<div class="grid g-2" style="align-items:start">' +
          '<div><div class="field"><label>Your text <span class="fh">' + (saved ? "last saved " + timeAgo(saved.at) : "not submitted yet") + '</span></label>' +
          '<textarea class="input" id="wr-' + U.id + '" placeholder="Write your answer here…" style="min-height:180px">' + esc(saved ? saved.text : "") + '</textarea></div>' +
          '<div class="row" style="gap:10px"><button class="btn btn-primary btn-sm" data-act="save-writing" data-key="' + key + '" data-unit="' + U.id + '">Submit</button>' +
          '<span class="small muted" data-role="wc-' + U.id + '"></span></div></div>' +
          '<div><div class="card flat" style="background:var(--surface-2)"><div class="card-title" style="font-size:14px;margin-bottom:10px">Tips</div>' +
          '<ul class="obj-list" style="font-size:13.5px">' + (U.write.tips || []).map(t => '<li>' + esc(t) + '</li>').join("") + '</ul></div>' +
          '<div class="card flat mt-2" style="background:var(--surface-2)"><div class="row between mb-1"><div class="card-title" style="font-size:14px">Model answer</div>' +
          '<button class="btn btn-ghost btn-sm" data-act="toggle-model">Show</button></div>' +
          '<div class="hidden small" data-role="model" style="line-height:1.75;white-space:pre-line;color:var(--text-soft)">' + esc(U.write.sample) + '</div></div>' +
          '</div></div></div>';
      }).join("") : '<div class="empty"><div class="e-ico">✎</div><h3>No writing tasks for this level</h3><p>Pick another level above.</p></div>');
  };

  /* ================= View: Practice ================= */
  let practiceSet = null, practiceLevel = "a1", practiceType = "mixed";
  const TYPES = [
    { id: "mixed", label: "Mixed" }, { id: "mcq", label: "Multiple choice" }, { id: "fill", label: "Fill the blank" },
    { id: "match", label: "Match words" }, { id: "order", label: "Reorder words" }, { id: "translate", label: "Translate" },
    { id: "listen", label: "Listen & choose" }, { id: "listenwrite", label: "Listen & write" }, { id: "correct", label: "Grammar correction" },
    { id: "vocab", label: "Vocabulary quiz" }, { id: "write", label: "Write a sentence" }, { id: "speak", label: "Speaking" }
  ];
  ROUTES.practice = function () {
    if (!practiceSet) practiceSet = buildPractice();
    return '<div class="page-head"><h1>Practice</h1>' +
      '<p>Targeted drills using every exercise type in the school. Choose a level and a focus, then work through ten questions with instant feedback.</p></div>' +
      '<div class="card mb-3"><div class="row wrap" style="gap:16px">' +
      '<div><label class="small muted" style="display:block;margin-bottom:7px;font-weight:600">Level</label>' +
      '<div class="chip-row">' + CUR.levels.map(L => '<button class="chip' + (practiceLevel === L.id ? " active" : "") +
        '" data-act="p-level" data-l="' + L.id + '">' + L.code + '</button>').join("") + '</div></div>' +
      '<div style="flex:1;min-width:260px"><label class="small muted" style="display:block;margin-bottom:7px;font-weight:600">Exercise type</label>' +
      '<div class="chip-row">' + TYPES.map(t => '<button class="chip' + (practiceType === t.id ? " active" : "") +
        '" data-act="p-type" data-t="' + t.id + '">' + t.label + '</button>').join("") + '</div></div>' +
      '<div style="align-self:flex-end"><button class="btn btn-primary" data-act="p-new">New set ↻</button></div>' +
      '</div></div>' +
      '<div class="card pad-lg"><div class="card-head"><div class="card-title">Your set · ' +
      (TYPES.find(t => t.id === practiceType) || {}).label + '</div>' +
      '<span class="badge badge-primary">' + practiceSet.length + ' questions</span></div>' +
      (practiceSet.length ? practiceSet.map((e, i) => '<div style="margin-bottom:28px">' + exerciseHtml(e, "pr" + i) + '</div>').join("")
        : '<div class="empty"><h3>No exercises found</h3><p>Try another level or type.</p></div>') +
      '</div>';
  };
  function buildPractice() {
    let pool = allExercises().filter(e => e.levelId === practiceLevel);
    if (practiceType !== "mixed") pool = pool.filter(e => e.t === practiceType);
    if (!pool.length) pool = allExercises().filter(e => e.levelId === practiceLevel);
    return shuffle(pool).slice(0, 10);
  }

  /* ================= View: Tests ================= */
  ROUTES.tests = function () {
    return '<div class="page-head"><h1>Level tests</h1>' +
      '<p>At the end of every level you take a final test covering grammar, vocabulary, reading, listening and writing. Pass it to unlock the next level.</p></div>' +
      '<div class="grid g-2">' + CUR.levels.map(L => {
        const t = state.progress.tests[L.id];
        const un = levelUnlocked(L.id);
        const ready = levelPct(L.id) >= 100;
        return '<div class="card hover"><div class="card-head"><div>' +
          '<div class="row" style="gap:10px;margin-bottom:6px">' + levelDot(L.id, 40) +
          '<div><div class="card-title">' + L.code + ' Final Test</div>' +
          '<div class="card-sub">' + esc(L.name) + '</div></div></div></div>' +
          (t ? '<span class="badge badge-success">' + t.score + '%</span>' : ready ? '<span class="badge badge-primary">Ready</span>' : '<span class="badge badge-neutral">' + levelPct(L.id) + '% done</span>') +
          '</div>' +
          '<div class="row between small" style="padding:6px 0"><span class="muted">Grammar</span><span>5 questions</span></div>' +
          '<div class="row between small" style="padding:6px 0"><span class="muted">Vocabulary</span><span>5 questions</span></div>' +
          '<div class="row between small" style="padding:6px 0"><span class="muted">Reading</span><span>2 texts · 6 questions</span></div>' +
          '<div class="row between small" style="padding:6px 0"><span class="muted">Listening</span><span>3 questions</span></div>' +
          '<div class="row between small" style="padding:6px 0"><span class="muted">Writing</span><span>1 task</span></div>' +
          '<div class="mt-2">' + (t
            ? '<button class="btn btn-ghost btn-block" data-act="go" data-href="#/test/' + L.id + '">View result / retake</button>'
            : '<button class="btn btn-primary btn-block" data-act="go" data-href="#/test/' + L.id + '"' + (un ? "" : " disabled") + '>' +
              (un ? "Start " + L.code + " Final Test" : "🔒 Locked") + '</button>') + '</div></div>';
      }).join("") + '</div>';
  };

  let TEST = null;
  ROUTES.test = function (r) {
    const L = byId.levels[r.arg];
    if (!L) return emptyState("Test not found", "That test does not exist.", "#/tests", "Back to tests");
    if (!TEST || TEST.levelId !== L.id) TEST = buildTest(L);
    if (TEST.submitted) return testResult();
    const done = Object.keys(TEST.answers).length;
    const total = TEST.items.length;
    return '<div class="crumb"><a href="#/tests">Tests</a><span class="sep">/</span><span>' + L.code + ' Final Test</span></div>' +
      '<div class="page-head"><div class="row between wrap"><div><h1>' + L.code + ' Final Test</h1>' +
      '<p>Test your grammar, vocabulary, reading, listening and writing. Answer everything, then submit for a full breakdown.</p></div>' +
      '<div>' + ring(pct(done, total), 104, "answered") + '</div></div></div>' +
      '<div class="card pad-lg"><div class="card-head"><div class="card-title">Questions</div>' +
      '<span class="badge badge-primary">' + done + ' / ' + total + '</span></div>' +
      TEST.items.map((it, i) => {
        if (it.kind === "section") return '<div style="margin:30px 0 18px"><div class="row" style="gap:10px">' +
          '<span class="badge badge-primary">' + esc(it.label) + '</span><span class="small muted">' + esc(it.desc) + '</span></div></div>';
        if (it.kind === "passage") return '<div class="transcript" style="margin-bottom:18px"><strong>' + esc(it.title) + '</strong><br><br>' + esc(it.text) + '</div>';
        return '<div style="margin-bottom:28px">' + exerciseHtml(it.ex, it.key) + '</div>';
      }).join("") +
      '<div class="divider"></div>' +
      '<div class="row between wrap"><span class="small muted">You can submit at any time — unanswered questions count as incorrect.</span>' +
      '<button class="btn btn-primary btn-lg" data-act="submit-test">Submit test ✓</button></div>' +
      '</div>';
  };

  function buildTest(L) {
    const units = L.units;
    const items = [];
    const grammarPool = [];
    const vocabPool = [];
    units.forEach(u => (u.ex || []).forEach(e => {
      if (["mcq", "fill", "correct", "order"].indexOf(e.t) !== -1) grammarPool.push(e);
      if (["mcq", "fill", "vocab", "match"].indexOf(e.t) !== -1) vocabPool.push(e);
    }));
    items.push({ kind: "section", label: "Part 1 · Grammar", desc: "Choose or produce the correct form." });
    shuffle(grammarPool).slice(0, 5).forEach((e, i) => items.push({ kind: "q", section: "grammar", key: "t-g" + i, ex: e }));
    items.push({ kind: "section", label: "Part 2 · Vocabulary", desc: "Word meaning, collocation and use." });
    shuffle(vocabPool).slice(0, 5).forEach((e, i) => items.push({ kind: "q", section: "vocabulary", key: "t-v" + i, ex: e }));
    items.push({ kind: "section", label: "Part 3 · Reading", desc: "Read each text and answer the questions." });
    units.filter(u => u.read).slice(0, 2).forEach((u, ui) => {
      items.push({ kind: "passage", title: u.read.title, text: u.read.text });
      u.read.q.forEach((q, qi) => items.push({ kind: "q", section: "reading", key: "t-r" + ui + "-" + qi, ex: Object.assign({}, q, { t: "readq" }) }));
    });
    items.push({ kind: "section", label: "Part 4 · Listening", desc: "Listen to each clip and answer." });
    const li = units.filter(u => u.listen);
    if (li.length) {
      const u = li[0];
      u.listen.q.forEach((q, qi) => items.push({ kind: "q", section: "listening", key: "t-l" + qi, ex: Object.assign({}, q, { t: "listenq" }) }));
    }
    items.push({ kind: "section", label: "Part 5 · Writing", desc: "Write a short text. This section is marked manually — a model answer is provided." });
    const wu = units.filter(u => u.write)[0];
    if (wu) items.push({ kind: "q", section: "writing", key: "t-w0", ex: { t: "write", prompt: wu.write.prompt, keywords: [], minWords: 20 } });
    return { levelId: L.id, items: items, answers: {}, submitted: false, sections: { grammar: [0, 0], vocabulary: [0, 0], reading: [0, 0], listening: [0, 0], writing: [0, 0] } };
  }

  function testKeyToItem(key) {
    if (!TEST) return null;
    for (let i = 0; i < TEST.items.length; i++) if (TEST.items[i].key === key) return TEST.items[i];
    return null;
  }

  function submitTest() {
    const sections = { grammar: [0, 0], vocabulary: [0, 0], reading: [0, 0], listening: [0, 0], writing: [0, 0] };
    TEST.items.forEach(it => {
      if (it.kind !== "q") return;
      sections[it.section][1]++;
      if (TEST.answers[it.key]) sections[it.section][0]++;
    });
    let c = 0, t = 0;
    Object.keys(sections).forEach(k => { c += sections[k][0]; t += sections[k][1]; });
    const score = pct(c, t);
    TEST.sections = sections;
    TEST.score = score;
    TEST.submitted = true;
    state.progress.tests[TEST.levelId] = { score: score, breakdown: sections, at: Date.now() };
    touchStreak();
    addXp(EH.xp.test, "Level test completed");
    logActivity("test", TEST.levelId.toUpperCase() + " Final Test: " + score + "%");
    checkAchievements();
    save();
  }

  function testResult() {
    const L = byId.levels[TEST.levelId];
    const s = TEST.sections || {};
    const score = TEST.score || 0;
    const rows = Object.keys(s).map(k => {
      const d = s[k];
      const p = pct(d[0], d[1] || 1);
      return '<div class="bar-row" style="margin-bottom:12px"><span class="bl" style="text-transform:capitalize">' + k + '</span>' +
        '<div style="flex:1">' + bar(p, L.color) + '</div><span class="bv">' + p + '%</span></div>';
    }).join("");
    const nextL = CUR.levels[L.order + 1];
    const pass = score >= 70;
    return '<div class="crumb"><a href="#/tests">Tests</a><span class="sep">/</span><span>' + L.code + ' Result</span></div>' +
      '<div class="lesson-shell"><div class="card pad-lg center">' +
      '<div class="stage-kicker" style="justify-content:center">' + L.code + ' Final Test · Result</div>' +
      '<div style="font-family:var(--font-head);font-size:64px;font-weight:800;line-height:1;margin:10px 0;color:' +
      (pass ? "var(--success)" : "var(--warn)") + '">' + score + '%</div>' +
      '<p class="muted" style="max-width:52ch;margin:0 auto 26px">' + (pass
        ? "Congratulations! You are ready for " + (nextL ? nextL.code + " — " + nextL.name : "the next stage") + "."
        : "You are close. Review your weakest sections below and try again — you can retake the test as many times as you like.") + '</p>' +
      '<div class="card flat" style="background:var(--surface-2);text-align:left;max-width:560px;margin:0 auto">' + rows + '</div>' +
      '<div class="row" style="gap:12px;justify-content:center;flex-wrap:wrap;margin-top:26px">' +
      (pass && nextL ? '<button class="btn btn-primary btn-lg" data-act="go" data-href="#/level/' + nextL.id + '">Go to ' + nextL.code + ' →</button>' : "") +
      '<button class="btn btn-ghost btn-lg" data-act="retake-test">Retake test</button>' +
      '<button class="btn btn-outline btn-lg" data-act="go" data-href="#/progress">View progress</button>' +
      '</div></div>' +
      '<div class="card mt-3"><div class="card-title" style="margin-bottom:14px">Review your answers</div>' +
      TEST.items.filter(i => i.kind === "q").map(it => {
        const ok = !!TEST.answers[it.key];
        return '<div class="row" style="gap:12px;padding:9px 0;border-bottom:1px solid var(--border)">' +
          '<span style="color:' + (ok ? "var(--success)" : "var(--danger)") + '">' + (ok ? "✓" : "✕") + '</span>' +
          '<span class="small" style="flex:1">' + esc((it.ex.q || it.ex.prompt || "").slice(0, 90)) + '</span>' +
          '<span class="badge badge-neutral">' + it.section + '</span></div>';
      }).join("") +
      '</div></div>';
  }

  /* ================= View: Progress ================= */
  ROUTES.progress = function () {
    const sk = skillScores();
    const earned = (EH.achievements || []).filter(a => state.achievements.indexOf(a.id) !== -1);
    const locked = (EH.achievements || []).filter(a => state.achievements.indexOf(a.id) === -1);
    const activityByDay = {};
    (state.activity || []).forEach(a => {
      const k = todayKey(new Date(a.at));
      activityByDay[k] = (activityByDay[k] || 0) + 1;
    });
    const last14 = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const k = todayKey(d);
      last14.push({ k: k, n: activityByDay[k] || 0, label: d.getDate() });
    }
    const maxN = Math.max(1, Math.max.apply(null, last14.map(x => x.n)));
    return '<div class="page-head"><h1>Progress</h1>' +
      '<p>Everything you have achieved, and exactly where to focus next.</p></div>' +
      '<div class="grid g-4 mb-3">' +
      '<div class="stat"><div class="s-ico">◈</div><div><div class="s-val">' + totalLessonsDone() + '</div><div class="s-lbl">Lessons completed</div></div></div>' +
      '<div class="stat green"><div class="s-ico">◉</div><div><div class="s-val">' + wordsLearned() + '</div><div class="s-lbl">Words learned</div></div></div>' +
      '<div class="stat warn"><div class="s-ico">🔥</div><div><div class="s-val">' + (state.streak.best || 0) + '</div><div class="s-lbl">Best streak</div></div></div>' +
      '<div class="stat purple"><div class="s-ico">⚡</div><div><div class="s-val">' + state.xp + '</div><div class="s-lbl">Total XP</div></div></div>' +
      '</div>' +
      '<div class="grid" style="grid-template-columns:1.3fr 1fr;align-items:start">' +
      '<div class="stack">' +
      '<div class="card"><div class="card-head"><div class="card-title">Skills breakdown</div></div>' +
      EH.skills.map(s => '<div class="bar-row" style="margin-bottom:14px"><span class="bl">' + s.label + '</span>' +
        '<div style="flex:1">' + bar(sk[s.id]) + '</div><span class="bv">' + sk[s.id] + '%</span></div>').join("") +
      '<div class="divider"></div>' +
      '<div class="small muted">Your weakest skill is <strong style="color:var(--primary)">' +
      esc((EH.skills.find(s => s.id === weakestSkill()) || {}).label || "") + '</strong>. ' +
      'Focus your next sessions there to raise your overall level fastest.</div></div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Units & levels</div></div>' +
      CUR.levels.map(L => '<div style="margin-bottom:14px">' +
        '<div class="row between" style="margin-bottom:7px">' + levelBadge(L.id) +
        '<span class="small muted">' + L.units.filter(u => isUnitComplete(u.id)).length + ' / ' + L.units.length + ' units · ' +
        levelPct(L.id) + '%</span></div>' + bar(levelPct(L.id), L.color) + '</div>').join("") +
      '</div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Test results</div>' +
      '<button class="btn btn-ghost btn-sm" data-act="go" data-href="#/tests">All tests</button></div>' +
      (Object.keys(state.progress.tests).length ? Object.keys(state.progress.tests).map(k => {
        const t = state.progress.tests[k]; const L = byId.levels[k];
        return '<div class="row between" style="padding:10px 0;border-bottom:1px solid var(--border)">' +
          '<div class="row" style="gap:10px">' + levelDot(k, 32) + '<span class="small" style="font-weight:600">' + (L ? L.code : k.toUpperCase()) + ' Final Test</span></div>' +
          '<span class="badge ' + (t.score >= 70 ? "badge-success" : "badge-warn") + '">' + t.score + '%</span></div>';
      }).join("") : '<div class="small muted">No tests taken yet. Finish a level to unlock its final test.</div>') +
      '</div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Recent activity</div></div>' +
      (state.activity.length ? state.activity.slice(0, 10).map(a =>
        '<div class="row" style="gap:12px;padding:9px 0;border-bottom:1px solid var(--border)">' +
        '<span style="width:26px;text-align:center">' + (a.type === "badge" ? "🏆" : a.type === "lesson" ? "◈" : a.type === "test" ? "✪" : "◉") + '</span>' +
        '<span class="small" style="flex:1">' + esc(a.text) + '</span>' +
        '<span class="tiny muted nowrap">' + timeAgo(a.at) + '</span></div>').join("")
      : '<div class="small muted">Nothing yet.</div>') + '</div>' +

      '</div>' +

      '<div class="stack">' +
      '<div class="card center"><div class="card-title" style="margin-bottom:16px">Overall progress</div>' +
      ring(overallPct(), 156, "of all lessons") +
      '<div class="row between mt-2" style="max-width:280px;margin:16px auto 0">' +
      '<div class="center"><div style="font-family:var(--font-head);font-weight:800;font-size:19px">' + levelDone(state.currentLevel) + '/' + levelTotal(state.currentLevel) + '</div>' +
      '<div class="tiny muted">Current level</div></div>' +
      '<div class="center"><div style="font-family:var(--font-head);font-weight:800;font-size:19px">' + unitsDone() + '/' + allUnits().length + '</div>' +
      '<div class="tiny muted">Units done</div></div></div></div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Activity (14 days)</div></div>' +
      '<div class="row" style="gap:5px;align-items:flex-end;height:100px">' +
      last14.map(d => '<div style="flex:1;text-align:center">' +
        '<div style="height:' + Math.max(6, Math.round((d.n / maxN) * 78)) + 'px;border-radius:6px 6px 3px 3px;background:' +
        (d.n ? "linear-gradient(180deg,var(--primary),#7C3AED)" : "var(--surface-3)") + '"></div>' +
        '<div class="tiny muted" style="margin-top:5px">' + d.label + '</div></div>').join("") +
      '</div></div>' +

      '<div class="card"><div class="card-head"><div class="card-title">Achievements</div>' +
      '<span class="badge badge-primary">' + earned.length + ' / ' + (EH.achievements || []).length + '</span></div>' +
      '<div class="stack" style="gap:10px;max-height:420px;overflow:auto">' +
      earned.concat(locked).map(a => '<div class="badge-card ' + (state.achievements.indexOf(a.id) !== -1 ? "earned" : "locked") + '">' +
        '<div class="badge-ico">' + a.icon + '</div><div><h4>' + esc(a.name) + '</h4><p>' + esc(a.desc) + '</p></div></div>').join("") +
      '</div></div>' +

      '<div class="card"><div class="card-head"><div class="card-title">XP level</div></div>' +
      '<div class="row between mb-1"><span class="small muted">Level ' + levelForXp() + '</span><span class="small" style="font-weight:700">' + xpInLevel() + ' / 500</span></div>' +
      bar(pct(xpInLevel(), 500)) +
      '<div class="small muted mt-2">' + (500 - xpInLevel()) + ' XP until level ' + (levelForXp() + 1) + '.</div></div>' +
      '</div></div>';
  };

  /* ================= View: Profile ================= */
  ROUTES.profile = function () {
    const p = state.profile;
    const whyLabel = ((EH.onboarding[1].options.find(o => o.v === p.why) || {}).t) || "—";
    const goalLabel = ((EH.onboarding[3].options.find(o => o.v === p.goal) || {}).t) || "—";
    return '<div class="page-head"><h1>Profile</h1><p>Your details, learning preferences and account settings.</p></div>' +
      '<div class="grid" style="grid-template-columns:1fr 1.2fr;align-items:start">' +
      '<div class="card center"><div class="avatar-btn" style="width:88px;height:88px;font-size:34px;margin:0 auto 16px">' +
      esc((p.name || "S").charAt(0).toUpperCase()) + '</div>' +
      '<h2 style="font-size:21px;margin-bottom:4px">' + esc(p.name || "Student") + '</h2>' +
      '<div class="small muted mb-2">' + (byId.levels[state.currentLevel] ? byId.levels[state.currentLevel].code + " · " + byId.levels[state.currentLevel].name : "") + '</div>' +
      '<div class="row" style="gap:10px;justify-content:center;flex-wrap:wrap">' +
      '<span class="badge badge-warn">🔥 ' + (state.streak.count || 0) + ' days</span>' +
      '<span class="badge badge-primary">⚡ ' + state.xp + ' XP</span>' +
      '<span class="badge badge-success">Lv ' + levelForXp() + '</span></div>' +
      '<div class="divider"></div>' +
      '<div class="row between small"><span class="muted">Lessons completed</span><strong>' + totalLessonsDone() + '</strong></div>' +
      '<div class="row between small mt-1"><span class="muted">Words learned</span><strong>' + wordsLearned() + '</strong></div>' +
      '<div class="row between small mt-1"><span class="muted">Tests passed</span><strong>' + Object.keys(state.progress.tests).length + '</strong></div>' +
      '<div class="row between small mt-1"><span class="muted">Achievements</span><strong>' + state.achievements.length + '</strong></div>' +
      '<div class="divider"></div>' +
      '<button class="btn btn-ghost btn-block btn-sm" data-act="reset-all">Reset all progress</button>' +
      '</div>' +

      '<div class="stack">' +
      '<div class="card"><div class="card-title" style="margin-bottom:16px">Your details</div>' +
      '<div class="field"><label>Display name</label>' +
      '<input class="input" id="pf-name" value="' + esc(p.name || "") + '" /></div>' +
      '<div class="field-row">' +
      '<div class="field"><label>Why you are learning</label><input class="input" value="' + esc(whyLabel) + '" disabled /></div>' +
      '<div class="field"><label>Main goal</label><input class="input" value="' + esc(goalLabel) + '" disabled /></div></div>' +
      '<div class="field-row">' +
      '<div class="field"><label>Daily study time</label><select class="input" id="pf-time">' +
      [10, 20, 30, 45].map(t => '<option value="' + t + '"' + (p.time === t ? " selected" : "") + '>' + t + ' minutes</option>').join("") +
      '</select></div>' +
      '<div class="field"><label>Current level</label><select class="input" id="pf-level">' +
      CUR.levels.map(L => '<option value="' + L.id + '"' + (state.currentLevel === L.id ? " selected" : "") + '>' + L.code + ' — ' + esc(L.name) + '</option>').join("") +
      '</select></div></div>' +
      '<div class="row" style="gap:10px"><button class="btn btn-primary" data-act="save-profile">Save changes</button>' +
      '<button class="btn btn-ghost" data-act="retake-placement">Retake placement test</button></div>' +
      '</div>' +

      '<div class="card"><div class="card-title" style="margin-bottom:16px">Preferences</div>' +
      '<div class="row between" style="padding:10px 0;border-bottom:1px solid var(--border)"><div><div style="font-weight:600;font-size:14.5px">Dark mode</div>' +
      '<div class="small muted">Easier on the eyes at night</div></div>' +
      '<label class="switch"><input type="checkbox" id="pf-dark"' + (state.settings.theme === "dark" ? " checked" : "") + ' data-act="toggle-dark" /><span class="sw-track"></span></label></div>' +
      '<div class="row between" style="padding:10px 0;border-bottom:1px solid var(--border)"><div><div style="font-weight:600;font-size:14.5px">Explanation language</div>' +
      '<div class="small muted">Grammar explanations in English, Arabic or French</div></div>' +
      '<div class="lang-tabs">' + ["en", "ar", "fr"].map(l => '<button class="lang-tab' + (state.settings.lang === l ? " active" : "") +
        '" data-act="lang" data-l="' + l + '">' + ({ en: "EN", ar: "AR", fr: "FR" })[l] + '</button>').join("") + '</div></div>' +
      '<div class="row between" style="padding:10px 0;border-bottom:1px solid var(--border)"><div><div style="font-weight:600;font-size:14.5px">Accent</div>' +
      '<div class="small muted">Used for all audio playback</div></div>' +
      '<select class="input" id="pf-accent" style="width:170px">' +
      '<option value="en-GB"' + (state.settings.voiceAccent === "en-GB" ? " selected" : "") + '>British English</option>' +
      '<option value="en-US"' + (state.settings.voiceAccent === "en-US" ? " selected" : "") + '>American English</option>' +
      '</select></div>' +
      '<div class="row between" style="padding:10px 0"><div><div style="font-weight:600;font-size:14.5px">Playback speed</div>' +
      '<div class="small muted">Default speed for audio</div></div>' +
      '<select class="input" id="pf-rate" style="width:170px">' +
      [["0.65", "Very slow"], ["0.8", "Slow"], ["0.92", "Normal"], ["1.1", "Fast"]].map(r =>
        '<option value="' + r[0] + '"' + (String(state.settings.rate) === r[0] ? " selected" : "") + '>' + r[1] + '</option>').join("") +
      '</select></div></div>' +
      '</div>' +
      '<div class="card"><div class="card-title" style="margin-bottom:12px">Account</div>' +
      '<div class="small muted" style="line-height:1.7">This demo stores everything locally in your browser (localStorage) — no account or server is required. ' +
      'In production this maps to a PostgreSQL schema with users, levels, units, lessons, vocabulary, grammar, exercises, questions, answers, listening exercises, speaking exercises, progress, achievements, streaks, tests and test results.</div>' +
      '<button class="btn btn-ghost btn-sm mt-2" data-act="show-schema">View database schema</button></div>' +
      '</div></div>';
  };

  /* ================= View: Admin ================= */
  ROUTES.admin = function () {
    const levels = CUR.levels;
    const sel = adminSel;
    const L = byId.levels[sel.levelId] || levels[0];
    const U = byId.units[sel.unitId] || (L ? L.units[0] : null);
    return '<div class="page-head"><div class="row between wrap"><div><h1>Admin panel</h1>' +
      '<p>Add, edit and delete levels, units, lessons, vocabulary, grammar and exercises. Everything you create appears immediately in the learning path.</p></div>' +
      '<button class="btn btn-ghost" data-act="reset-all">Reset all data</button></div></div>' +

      '<div class="grid g-4 mb-3">' +
      '<div class="stat"><div class="s-ico">◈</div><div><div class="s-val">' + CUR.levels.length + '</div><div class="s-lbl">Levels</div></div></div>' +
      '<div class="stat green"><div class="s-ico">▤</div><div><div class="s-val">' + allUnits().length + '</div><div class="s-lbl">Units</div></div></div>' +
      '<div class="stat purple"><div class="s-ico">◎</div><div><div class="s-val">' + allLessons().length + '</div><div class="s-lbl">Lessons</div></div></div>' +
      '<div class="stat warn"><div class="s-ico">◉</div><div><div class="s-val">' + allVocab().length + '</div><div class="s-lbl">Vocabulary words</div></div></div>' +
      '</div>' +

      '<div class="card mb-3"><div class="row wrap" style="gap:14px;align-items:flex-end">' +
      '<div><label class="small muted" style="display:block;margin-bottom:7px;font-weight:600">Level</label>' +
      '<select class="input" id="ad-level" data-act="ad-select-level" style="width:190px">' +
      levels.map(x => '<option value="' + x.id + '"' + (L && x.id === L.id ? " selected" : "") + '>' + x.code + ' — ' + esc(x.name) + '</option>').join("") + '</select></div>' +
      '<div><label class="small muted" style="display:block;margin-bottom:7px;font-weight:600">Unit</label>' +
      '<select class="input" id="ad-unit" data-act="ad-select-unit" style="width:260px">' +
      (L ? L.units.map(u => '<option value="' + u.id + '"' + (U && u.id === U.id ? " selected" : "") + '>Unit ' + u.n + ': ' + esc(u.title) + '</option>').join("") : "") +
      '</select></div>' +
      '<div style="margin-left:auto" class="row wrap" style="gap:8px">' +
      '<button class="btn btn-primary btn-sm" data-act="ad-add-unit">+ Add unit</button>' +
      '<button class="btn btn-primary btn-sm" data-act="ad-add-lesson"' + (U ? "" : " disabled") + '>+ Add lesson</button>' +
      '<button class="btn btn-primary btn-sm" data-act="ad-add-vocab"' + (U ? "" : " disabled") + '>+ Add word</button>' +
      '<button class="btn btn-ghost btn-sm" data-act="ad-add-level">+ Add level</button>' +
      '</div></div></div>' +

      '<div class="grid" style="grid-template-columns:1.5fr 1fr;align-items:start">' +
      '<div class="stack">' +
      (U ? '<div class="card"><div class="card-head"><div><div class="card-title">Lessons in ' + esc(U.title) + '</div>' +
      '<div class="card-sub">' + esc(U.theme) + '</div></div>' +
      '<span class="badge badge-neutral">' + U.lessons.length + '</span></div>' +
      '<div class="table-wrap"><table class="tbl"><thead><tr><th>#</th><th>Title</th><th>Objective</th><th class="actions">Actions</th></tr></thead><tbody>' +
      (U.lessons.length ? U.lessons.map((ls, i) => '<tr><td>' + (i + 1) + '</td>' +
        '<td><strong>' + esc(ls.title) + '</strong>' + (ls.custom ? ' <span class="badge badge-primary">new</span>' : "") + '</td>' +
        '<td class="small muted">' + esc((ls.objective || "").slice(0, 60)) + '</td>' +
        '<td class="actions"><button class="btn btn-ghost btn-sm" data-act="ad-edit-lesson" data-id="' + ls.id + '">Edit</button> ' +
        '<button class="btn btn-danger btn-sm" data-act="ad-del" data-id="' + ls.id + '" data-kind="lesson">Delete</button></td></tr>').join("")
        : '<tr><td colspan="4" class="muted small" style="padding:20px">No lessons yet.</td></tr>') +
      '</tbody></table></div></div>' : "") +

      (U ? '<div class="card"><div class="card-head"><div class="card-title">Vocabulary in this unit</div>' +
      '<span class="badge badge-neutral">' + (U.vocab || []).length + '</span></div>' +
      '<div class="table-wrap"><table class="tbl"><thead><tr><th>Word</th><th>Definition</th><th>Arabic</th><th class="actions">Actions</th></tr></thead><tbody>' +
      ((U.vocab || []).length ? U.vocab.map((v, i) => '<tr><td><strong>' + esc(v.w) + '</strong> <span class="tiny muted">' + esc(v.ipa || "") + '</span></td>' +
        '<td class="small muted">' + esc((v.def || "").slice(0, 56)) + '</td><td class="vocab-ar">' + esc(v.ar || "") + '</td>' +
        '<td class="actions"><button class="btn btn-danger btn-sm" data-act="ad-del-vocab" data-unit="' + U.id + '" data-i="' + i + '">Delete</button></td></tr>').join("")
        : '<tr><td colspan="4" class="muted small" style="padding:20px">No vocabulary yet.</td></tr>') +
      '</tbody></table></div></div>' : "") +

      (U ? '<div class="card"><div class="card-head"><div class="card-title">Exercises in this unit</div>' +
      '<span class="badge badge-neutral">' + (U.ex || []).length + '</span></div>' +
      '<div class="table-wrap"><table class="tbl"><thead><tr><th>Type</th><th>Question</th><th>Answer</th></tr></thead><tbody>' +
      ((U.ex || []).length ? U.ex.map(e => {
        const ans = e.t === "match" ? e.pairs.length + " pairs" : e.t === "order" ? e.answer : e.t === "translate" ? (e.a || [])[0] : (e.o ? e.o[e.a] : (e.answer || e.wrong || "—"));
        return '<tr><td><span class="badge badge-primary">' + esc(e.t) + '</span></td>' +
          '<td class="small">' + esc((e.q || e.prompt || "").slice(0, 70)) + '</td>' +
          '<td class="small muted">' + esc(String(ans || "").slice(0, 46)) + '</td></tr>';
      }).join("") : '<tr><td colspan="3" class="muted small" style="padding:20px">No exercises yet.</td></tr>') +
      '</tbody></table></div></div>' : "") +
      '</div>' +

      '<div class="stack">' +
      '<div class="card"><div class="card-title" style="margin-bottom:14px">Student progress</div>' +
      '<div class="row between small" style="padding:6px 0"><span class="muted">Lessons completed</span><strong>' + totalLessonsDone() + ' / ' + allLessons().length + '</strong></div>' +
      '<div class="row between small" style="padding:6px 0"><span class="muted">Units completed</span><strong>' + unitsDone() + '</strong></div>' +
      '<div class="row between small" style="padding:6px 0"><span class="muted">Words learned</span><strong>' + wordsLearned() + '</strong></div>' +
      '<div class="row between small" style="padding:6px 0"><span class="muted">Tests passed</span><strong>' + Object.keys(state.progress.tests).length + '</strong></div>' +
      '<div class="row between small" style="padding:6px 0"><span class="muted">Current streak</span><strong>' + (state.streak.count || 0) + ' days</strong></div>' +
      '<div class="row between small" style="padding:6px 0"><span class="muted">Total XP</span><strong>' + state.xp + '</strong></div>' +
      '<div class="divider"></div>' +
      '<div class="small muted mb-2">Skills</div>' +
      EH.skills.map(s => '<div class="bar-row" style="margin-bottom:9px"><span class="bl" style="width:76px;font-size:12.5px">' + s.label + '</span>' +
        '<div style="flex:1">' + bar(skillScores()[s.id]) + '</div><span class="bv">' + skillScores()[s.id] + '%</span></div>').join("") +
      '</div>' +

      '<div class="card"><div class="card-title" style="margin-bottom:14px">All levels & units</div>' +
      '<div style="max-height:420px;overflow:auto">' + CUR.levels.map(x =>
        '<div style="margin-bottom:12px"><div class="row" style="gap:9px;margin-bottom:6px">' + levelDot(x.id, 28) +
        '<strong class="small">' + x.code + ' — ' + esc(x.name) + '</strong>' +
        '<span class="tiny muted">' + x.units.length + ' units</span></div>' +
        x.units.map(u => '<div class="row between small" style="padding:5px 0 5px 34px;border-bottom:1px solid var(--border)">' +
          '<span>' + esc(u.title) + '</span><span class="tiny muted">' + u.lessons.length + ' lessons · ' + (u.vocab || []).length + ' words</span></div>').join("") +
        '</div>').join("") + '</div></div>' +
      '</div></div>';
  };
  let adminSel = { levelId: "", unitId: "" };

  /* ================= Actions ================= */
  function emptyState(title, body, href, cta) {
    return '<div class="card"><div class="empty"><div class="e-ico">◈</div><h3>' + esc(title) + '</h3><p>' + esc(body) + '</p>' +
      '<button class="btn btn-primary" data-act="go" data-href="' + href + '">' + esc(cta) + '</button></div></div>';
  }

  function startOnboarding() {
    obIndex = 0; obAnswers = {};
    go("#/onboarding");
  }

  function finishOnboarding(startLevel) {
    const p = state.profile;
    p.claimed = obAnswers.level || "a1";
    p.why = obAnswers.why || "general";
    p.time = obAnswers.time || 30;
    p.goal = obAnswers.goal || "general";
    p.recommended = state.profile.recommended || p.claimed;
    p.startLevel = startLevel || "a1";
    p.createdAt = new Date().toISOString();
    state.currentLevel = p.startLevel;
    state.onboarded = true;
    state.streak.count = 1; state.streak.last = todayKey(); state.streak.best = 1;
    state.streak.days = [todayKey()];
    ensureDaily();
    logActivity("lesson", "Started English Hero at " + (byId.levels[state.currentLevel] || {}).code);
    save();
    toast("Welcome to English Hero!", "Your journey starts at " + (byId.levels[state.currentLevel] || {}).code + ".", "ok");
    go("#/dashboard");
  }

  function showSchema() {
    const schema = [
      ["users", "id, email, password_hash, name, current_level_id, xp, created_at"],
      ["levels", "id, code (A1–C1), name, description, order_index"],
      ["units", "id, level_id, number, title, theme"],
      ["lessons", "id, unit_id, number, title, objective"],
      ["lesson_points", "id, lesson_id, text, order_index"],
      ["vocabulary", "id, unit_id, word, ipa, part_of_speech, definition, translation_ar, example, level_id"],
      ["grammar_points", "id, unit_id, title, explanation_en, explanation_ar, explanation_fr, formula_json"],
      ["grammar_examples", "id, grammar_point_id, sentence, translation_ar"],
      ["common_mistakes", "id, grammar_point_id, wrong, right, reason"],
      ["exercises", "id, unit_id, lesson_id, type, prompt, payload_json, answer_json, explanation"],
      ["questions", "id, exercise_id, text, options_json, correct_index, explanation"],
      ["answers", "id, user_id, question_id, given_json, is_correct, answered_at"],
      ["listening_exercises", "id, unit_id, title, speed_level, transcript_json"],
      ["speaking_exercises", "id, unit_id, prompt, model_answer"],
      ["reading_texts", "id, unit_id, title, body, word_count"],
      ["writing_tasks", "id, unit_id, prompt, tips_json, sample_answer"],
      ["progress", "id, user_id, lesson_id, status, score, completed_at"],
      ["achievements", "id, code, name, description, icon, rule_json"],
      ["user_achievements", "user_id, achievement_id, earned_at"],
      ["streaks", "user_id, current_count, best_count, last_active_date"],
      ["daily_plans", "user_id, date, plan_json, xp_earned"],
      ["tests", "id, level_id, title, sections_json"],
      ["test_questions", "test_id, question_id, section, order_index"],
      ["test_results", "id, user_id, test_id, score, breakdown_json, submitted_at"]
    ];
    modal("Database schema (PostgreSQL)",
      '<p class="small muted mb-2">A scalable relational structure covering every entity in the school. All foreign keys are indexed; progress and test results are partitioned by user.</p>' +
      '<div class="table-wrap"><table class="tbl"><thead><tr><th>Table</th><th>Key columns</th></tr></thead><tbody>' +
      schema.map(r => '<tr><td class="mono" style="font-size:12.5px;font-weight:600">' + esc(r[0]) + '</td>' +
        '<td class="small muted mono" style="font-size:12px">' + esc(r[1]) + '</td></tr>').join("") +
      '</tbody></table></div>',
      '<button class="btn btn-primary" data-act="close-modal">Close</button>', true);
  }

  function resetAll() {
    modal("Reset all data?",
      '<p class="small muted">This permanently deletes your progress, XP, streak, achievements and any content you added in the admin panel. This cannot be undone.</p>',
      '<button class="btn btn-ghost" data-act="close-modal">Cancel</button>' +
      '<button class="btn btn-danger" data-act="confirm-reset">Yes, reset everything</button>');
  }

  /* ================= Event handling ================= */
  function handleAction(act, el, ev) {
    switch (act) {
      case "go": go(el.dataset.href); break;
      case "close-modal": closeModal(); break;
      case "theme": case "toggle-theme": toggleTheme(); break;

      case "say": {
        const rate = parseFloat(el.dataset.rate || "") || state.settings.rate;
        speak(el.dataset.text, rate, el);
        break;
      }
      case "say-dialog": {
        const U = S && S.unit ? S.unit : (byId.units[adminSel.unitId] || currentUnit());
        const idx = parseInt(el.dataset.i || "0", 10);
        const rate = parseFloat(el.dataset.rate || "") || state.settings.rate;
        // find the nearest unit that has a listen section from the current view
        let target = null;
        const hashUnit = /u=([^&]+)/.exec(location.hash || "");
        if (hashUnit && byId.units[hashUnit[1]]) target = byId.units[hashUnit[1]];
        if (!target && S) target = S.unit;
        if (!target || !target.listen) { const c = allUnits().filter(x => x.listen); target = c[0]; }
        if (!target || !target.listen) break;
        playDialog(target.listen.lines, idx, rate);
        break;
      }
      case "toggle-transcript": {
        const t = $("#transcript"); if (t) t.classList.toggle("hidden");
        el.textContent = t && t.classList.contains("hidden") ? "Show transcript" : "Hide transcript";
        break;
      }
      case "lang": {
        state.settings.lang = el.dataset.l; save();
        if (S) S.lang = el.dataset.l;
        render();
        break;
      }

      /* onboarding */
      case "start-onboarding": startOnboarding(); break;
      case "start-placement": plIndex = 0; plAnswers = []; plDone = false; go("#/placement"); break;
      case "ob-pick": obAnswers[EH.onboarding[obIndex].id] = isNaN(Number(el.dataset.v)) ? el.dataset.v : Number(el.dataset.v); render(); break;
      case "ob-back": if (obIndex > 0) { obIndex--; render(); } break;
      case "ob-next": {
        const q = EH.onboarding[obIndex];
        if (obAnswers[q.id] === undefined) break;
        if (obIndex < EH.onboarding.length - 1) { obIndex++; render(); }
        else { go("#/placement"); }
        break;
      }
      case "pl-answer": {
        const q = EH.placement[plIndex];
        const i = parseInt(el.dataset.i, 10);
        const ok = i === q.a;
        plAnswers.push({ lv: q.lv, ok: ok });
        $$("#pl-opts .pl-opt").forEach((b, bi) => {
          b.disabled = true;
          if (bi === q.a) b.classList.add("correct");
          else if (bi === i) b.classList.add("wrong");
        });
        const fb = $("#pl-fb");
        if (fb) fb.innerHTML = fbHtml(ok, q.why, ok ? "" : q.o[q.a]);
        setTimeout(() => {
          if (plIndex < EH.placement.length - 1) { plIndex++; render(); }
          else {
            plDone = true;
            const correct = plAnswers.filter(a => a.ok).length;
            state.profile.recommended = estimateLevel(correct, {});
            save();
            render();
          }
        }, 900);
        break;
      }
      case "pl-skip": {
        plDone = true;
        state.profile.recommended = state.profile.claimed || "a1";
        save(); render();
        break;
      }
      case "finish-onboarding": finishOnboarding(el.dataset.start); break;

      /* dashboard */
      case "plan-toggle": {
        const id = el.dataset.id;
        if (!state.daily.plan[id]) {
          state.daily.plan[id] = true;
          if (Object.keys(state.daily.plan).filter(k => state.daily.plan[k]).length >= dailyPlanItems().length) {
            addXp(EH.xp.dailyPlan, "Daily plan complete");
          }
          save();
        }
        go(el.dataset.href);
        break;
      }

      /* lesson player */
      case "step-next": {
        if (S.step === 9) { completeLesson(); render(); }
        else if (S.step < 10) { S.step++; render(); }
        break;
      }
      case "step-prev": if (S.step > 0) { S.step--; render(); } break;
      case "next-lesson": {
        const U = S.unit;
        const idx = U.lessons.findIndex(l => l.id === S.lesson.id);
        const nx = U.lessons[idx + 1];
        S = null;
        if (nx) { go("#/lesson/" + nx.id); }
        else {
          const all = allLessons();
          const gi = all.findIndex(l => l.id === U.lessons[idx].id);
          const g = all[gi + 1];
          if (g) go("#/lesson/" + g.id); else go("#/dashboard");
        }
        break;
      }
      case "know": {
        const w = el.dataset.w;
        const cur = state.progress.vocab[w] || { seen: 0 };
        cur.status = cur.status === "known" ? "learning" : "known";
        cur.seen = (cur.seen || 0) + 1; cur.lastSeen = Date.now();
        state.progress.vocab[w] = cur;
        if (cur.status === "known") addXp(EH.xp.flashcard, null);
        checkAchievements(); save(); render();
        break;
      }

      /* exercises */
      case "answer": answerMcq(el.dataset.key, parseInt(el.dataset.i, 10)); break;
      case "match": doMatch(el.dataset.key, el.dataset.side, parseInt(el.dataset.i, 10)); break;
      case "order-add": { const a = orderState(el.dataset.key); a.push(el.dataset.w); renderOrder(el.dataset.key); break; }
      case "order-remove": { const a = orderState(el.dataset.key); a.splice(parseInt(el.dataset.i, 10), 1); renderOrder(el.dataset.key); break; }
      case "order-reset": { S.order = S.order || {}; S.order[el.dataset.key] = []; renderOrder(el.dataset.key); break; }
      case "order-check": checkOrder(el.dataset.key); break;
      case "input-check": checkInput(el.dataset.key); break;
      case "input-hint": {
        const ex = findEx(el.dataset.key); if (!ex) break;
        const wrap = $("#ex-" + el.dataset.key);
        const fb = wrap ? $(".ex-fb", wrap) : null;
        if (fb) fb.innerHTML = '<div class="feedback ok"><span class="fb-ico">💡</span><div>' +
          '<div class="fb-t">Hint</div><div class="fb-b">' +
          esc(ex.why || ("The answer starts with \"" + String((ex.answer || (ex.a || [""])[0] || "")).split(" ")[0] + "\".")) +
          '</div></div></div>';
        break;
      }
      case "write-check": checkWrite(el.dataset.key); break;
      case "mic": toggleMic(el.dataset.key, el.dataset.prompt, el); break;
      case "speak-model": speak(modelAnswer(el.dataset.prompt), 0.88, el); break;
      case "speak-done": {
        const key = el.dataset.key;
        if (state.progress.speaking[key] === undefined) {
          state.progress.speaking[key] = { score: 70, text: "(self-reported)", at: Date.now() };
          S.total++; S.correct++;
          touchStreak(); addXp(EH.xp.speaking, "Speaking practice");
          state.daily.plan.speaking = true;
          checkStepReady(); save();
        }
        toast("Well done", "Speaking practice recorded.", "ok");
        render();
        break;
      }
      case "flip": {
        const c = el.closest(".flashcard"); if (c) c.classList.toggle("flipped");
        break;
      }

      /* vocabulary */
      case "vfilter": vFilter = el.dataset.f; flashIndex = 0; render(); break;
      case "flash-next": case "flash-prev": {
        flashIndex += act === "flash-next" ? 1 : -1;
        if (flashIndex < 0) flashIndex = 0;
        render();
        break;
      }
      case "vset": {
        const w = el.dataset.w, s = el.dataset.s;
        const cur = state.progress.vocab[w] || { seen: 0 };
        cur.status = cur.status === s ? "learning" : s;
        cur.seen = (cur.seen || 0) + 1; cur.lastSeen = Date.now();
        state.progress.vocab[w] = cur;
        if (s === "known" && cur.status === "known") addXp(EH.xp.flashcard, null);
        checkAchievements(); save(); render();
        break;
      }
      case "vset-next": {
        const w = el.dataset.w, s = el.dataset.s;
        const cur = state.progress.vocab[w] || { seen: 0 };
        cur.status = s; cur.seen = (cur.seen || 0) + 1; cur.lastSeen = Date.now();
        state.progress.vocab[w] = cur;
        if (s === "known") addXp(EH.xp.flashcard, null);
        flashIndex++;
        checkAchievements(); save(); render();
        break;
      }

      /* reading / writing */
      case "mark-read": {
        const key = el.dataset.key;
        if (!state.progress.reading[key]) {
          state.progress.reading[key] = { at: Date.now() };
          touchStreak(); addXp(EH.xp.listening, "Reading completed");
          state.daily.plan.vocab = state.daily.plan.vocab || true;
          checkAchievements(); save();
        }
        toast("Marked as read", "Reading progress saved.", "ok");
        render();
        break;
      }
      case "save-writing": {
        const key = el.dataset.key, uid = el.dataset.unit;
        const ta = $("#wr-" + uid);
        const text = ta ? ta.value.trim() : "";
        if (words(text).length < 10) { toast("Write a bit more", "Aim for at least 10 words.", "warn"); break; }
        state.progress.writing[key] = { text: text, words: words(text).length, at: Date.now() };
        touchStreak(); addXp(EH.xp.writing, "Writing submitted");
        checkAchievements(); save(); render();
        toast("Submitted", "Your writing has been saved.", "ok");
        break;
      }
      case "toggle-model": {
        const wrap = el.closest(".card");
        const m = wrap ? $('[data-role="model"]', wrap) : null;
        if (m) { m.classList.toggle("hidden"); el.textContent = m.classList.contains("hidden") ? "Show" : "Hide"; }
        break;
      }

      /* practice */
      case "p-level": practiceLevel = el.dataset.l; practiceSet = null; render(); break;
      case "p-type": practiceType = el.dataset.t; practiceSet = null; render(); break;
      case "p-new": practiceSet = null; render(); break;

      /* tests */
      case "submit-test": {
        const unanswered = TEST.items.filter(i => i.kind === "q" && TEST.answers[i.key] === undefined).length;
        modal("Submit test?", '<p class="small muted">You have ' + unanswered + ' unanswered question(s). They will count as incorrect.</p>',
          '<button class="btn btn-ghost" data-act="close-modal">Keep working</button>' +
          '<button class="btn btn-primary" data-act="confirm-submit">Submit now</button>');
        break;
      }
      case "confirm-submit": closeModal(); submitTest(); render(); break;
      case "retake-test": { TEST = buildTest(byId.levels[TEST.levelId]); render(); break; }

      /* profile */
      case "save-profile": {
        const n = $("#pf-name"), t = $("#pf-time"), l = $("#pf-level"), a = $("#pf-accent"), rt = $("#pf-rate");
        if (n) state.profile.name = n.value.trim() || "Student";
        if (t) state.profile.time = parseInt(t.value, 10);
        if (l) state.currentLevel = l.value;
        if (a) state.settings.voiceAccent = a.value;
        if (rt) state.settings.rate = parseFloat(rt.value);
        save(); renderChrome(parseHash());
        toast("Saved", "Your profile has been updated.", "ok");
        break;
      }
      case "toggle-dark": toggleTheme(); break;
      case "retake-placement": plIndex = 0; plAnswers = []; plDone = false; state.onboarded = false; save(); go("#/placement"); break;
      case "reset-all": resetAll(); break;
      case "confirm-reset": {
        try { localStorage.removeItem(KEY); } catch (e) { /* noop */ }
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        buildCurriculum(); applyCustom();
        obIndex = 0; obAnswers = {}; plIndex = 0; plAnswers = []; plDone = false;
        S = null; TEST = null; practiceSet = null;
        closeModal(); save();
        location.hash = "#/home"; render();
        toast("All data reset", "Starting fresh.", "ok");
        break;
      }
      case "show-schema": showSchema(); break;

      /* admin */
      case "ad-add-level": adminAddLevel(); break;
      case "ad-add-unit": adminAddUnit(); break;
      case "ad-add-lesson": adminAddLesson(); break;
      case "ad-add-vocab": adminAddVocab(); break;
      case "ad-edit-lesson": adminEditLesson(el.dataset.id); break;
      case "ad-del": adminDelete(el.dataset.id, el.dataset.kind); break;
      case "ad-del-vocab": adminDeleteVocab(el.dataset.unit, parseInt(el.dataset.i, 10)); break;

      default: break;
    }
  }

  function playDialog(lines, idx, rate) {
    if (!speechOK) { toast("Speech not supported", null, "warn"); return; }
    try {
      window.speechSynthesis.cancel();
      const v = pickVoice();
      lines.forEach((l, i) => {
        const u = new SpeechSynthesisUtterance(l.text);
        if (v) u.voice = v;
        u.rate = rate || state.settings.rate;
        u.pitch = 1;
        window.speechSynthesis.speak(u);
        if (i < lines.length - 1) window.speechSynthesis.speak(new SpeechSynthesisUtterance(" "));
      });
    } catch (e) { /* noop */ }
  }

  // A lesson stage is only "ready" once its required work is actually done.
  // Steps: 5 Listening · 6 Speaking · 7 Practice · 8 Mini quiz
  function stepReady() {
    if (!S) return true;
    if (S.step === 5) {
      const lq = (S.unit.listen && S.unit.listen.q) || [];
      return lq.length ? lq.every((_, i) => S.answers["lq" + i] !== undefined) : true;
    }
    if (S.step === 6) {
      const keys = S.speakKeys || [];
      return keys.length ? keys.every(k => state.progress.speaking[k] !== undefined) : true;
    }
    if (S.step === 7) {
      return S.ex.length ? S.ex.every((_, i) => S.answers["ex" + i] !== undefined) : true;
    }
    if (S.step === 8) {
      return S.quiz.length ? S.quiz.every((_, i) => S.answers["qz" + i] !== undefined) : true;
    }
    return true;
  }

  function checkStepReady() {
    if (!S) return;
    const foot = $(".stage-foot");
    if (foot) {
      const btn = $('[data-act="step-next"]', foot);
      if (btn) btn.disabled = !stepReady();
    }
  }

  /* ================= Admin operations ================= */
  function uid(p) { return p + Math.random().toString(36).slice(2, 8); }

  function adminAddLevel() {
    modal("Add a level",
      '<div class="field-row"><div class="field"><label>Code</label><input class="input" id="nl-code" placeholder="C2" /></div>' +
      '<div class="field"><label>Name</label><input class="input" id="nl-name" placeholder="Proficiency" /></div></div>' +
      '<div class="field"><label>Tagline</label><input class="input" id="nl-tag" placeholder="Master the language." /></div>' +
      '<div class="field"><label>Description</label><textarea class="input" id="nl-desc" placeholder="What the learner will achieve…"></textarea></div>' +
      '<div class="field"><label>Colour</label><select class="input" id="nl-color">' +
      ['a1', 'a2', 'b1', 'b2', 'c1'].map(c => '<option value="' + c + '">' + c.toUpperCase() + '</option>').join("") + '</select></div>',
      '<button class="btn btn-ghost" data-act="close-modal">Cancel</button>' +
      '<button class="btn btn-primary" data-act="ad-save-level">Create level</button>');
  }

  function adminAddUnit() {
    const L = byId.levels[adminSel.levelId] || CUR.levels[0];
    modal("Add a unit to " + L.code,
      '<div class="field-row"><div class="field"><label>Unit number</label><input class="input" id="nu-n" type="number" value="' + (L.units.length + 1) + '" /></div>' +
      '<div class="field"><label>Title</label><input class="input" id="nu-title" placeholder="Talking about the future" /></div></div>' +
      '<div class="field"><label>Theme</label><input class="input" id="nu-theme" placeholder="Plans, predictions and arrangements" /></div>' +
      '<div class="field"><label>Grammar point title <span class="fh">optional</span></label><input class="input" id="nu-gram" placeholder="Will vs going to" /></div>',
      '<button class="btn btn-ghost" data-act="close-modal">Cancel</button>' +
      '<button class="btn btn-primary" data-act="ad-save-unit">Create unit</button>');
  }

  function adminAddLesson() {
    const U = byId.units[adminSel.unitId];
    modal("Add a lesson to " + U.title,
      '<div class="field"><label>Lesson title</label><input class="input" id="nl2-title" placeholder="Making plans on the phone" /></div>' +
      '<div class="field"><label>Learning objective</label><input class="input" id="nl2-obj" placeholder="Arrange a meeting and confirm the time." /></div>' +
      '<div class="field"><label>Teaching points <span class="fh">one per line</span></label>' +
      '<textarea class="input" id="nl2-pts" placeholder="I am going to visit my sister.&#10;Are you free on Friday?"></textarea></div>',
      '<button class="btn btn-ghost" data-act="close-modal">Cancel</button>' +
      '<button class="btn btn-primary" data-act="ad-save-lesson">Create lesson</button>');
  }

  function adminEditLesson(id) {
    const ls = byId.lessons[id];
    if (!ls) return;
    modal("Edit lesson",
      '<div class="field"><label>Title</label><input class="input" id="el-title" value="' + esc(ls.title) + '" /></div>' +
      '<div class="field"><label>Objective</label><input class="input" id="el-obj" value="' + esc(ls.objective || "") + '" /></div>' +
      '<div class="field"><label>Teaching points <span class="fh">one per line</span></label>' +
      '<textarea class="input" id="el-pts">' + esc((ls.points || []).join("\n")) + '</textarea></div>',
      '<button class="btn btn-ghost" data-act="close-modal">Cancel</button>' +
      '<button class="btn btn-primary" data-act="ad-update-lesson" data-id="' + id + '">Save changes</button>');
  }

  function adminAddVocab() {
    const U = byId.units[adminSel.unitId];
    modal("Add vocabulary to " + U.title,
      '<div class="field-row"><div class="field"><label>Word</label><input class="input" id="nv-w" placeholder="opportunity" /></div>' +
      '<div class="field"><label>Pronunciation</label><input class="input" id="nv-ipa" placeholder="/ˌɒpəˈtjuːnəti/" /></div></div>' +
      '<div class="field-row"><div class="field"><label>Part of speech</label><input class="input" id="nv-pos" placeholder="noun" /></div>' +
      '<div class="field"><label>Arabic</label><input class="input" id="nv-ar" placeholder="فرصة" dir="rtl" /></div></div>' +
      '<div class="field"><label>Definition</label><input class="input" id="nv-def" placeholder="A chance to do something good." /></div>' +
      '<div class="field"><label>Example sentence</label><input class="input" id="nv-ex" placeholder="This is a great opportunity." /></div>',
      '<button class="btn btn-ghost" data-act="close-modal">Cancel</button>' +
      '<button class="btn btn-primary" data-act="ad-save-vocab">Add word</button>');
  }

  function adminDelete(id, kind) {
    modal("Delete this " + kind + "?",
      '<p class="small muted">The ' + kind + ' will be removed from the learning path immediately. Student progress on it is kept in storage but hidden.</p>',
      '<button class="btn btn-ghost" data-act="close-modal">Cancel</button>' +
      '<button class="btn btn-danger" data-act="ad-confirm-del" data-id="' + id + '" data-kind="' + kind + '">Delete</button>');
  }

  function adminDeleteVocab(unitId, i) {
    const U = byId.units[unitId];
    if (!U) return;
    U.vocab.splice(i, 1);
    // persist: mark base vocab deletions by index is complex; keep it session-level for base content
    save(); render();
    toast("Word deleted", null, "ok");
  }

  /* admin modal saves (bound in the global handler below) */
  function adSaveLevel() {
    const code = ($("#nl-code") || {}).value || "";
    const name = ($("#nl-name") || {}).value || "";
    if (!code || !name) { toast("Missing fields", "Code and name are required.", "warn"); return; }
    const id = code.toLowerCase().replace(/[^a-z0-9]/g, "") + uid("");
    const rec = { id: id, code: code.toUpperCase(), name: name, tagline: ($("#nl-tag") || {}).value || "", description: ($("#nl-desc") || {}).value || "", color: ($("#nl-color") || {}).value || "a1" };
    state.custom.levels.push(rec);
    const L = { id: rec.id, code: rec.code, name: rec.name, color: rec.color, tagline: rec.tagline, description: rec.description, canDo: [], units: [], order: CUR.levels.length, custom: true };
    CUR.levels.push(L); byId.levels[L.id] = L;
    adminSel.levelId = L.id; adminSel.unitId = "";
    closeModal(); save(); render();
    toast("Level created", rec.code + " added to the path.", "ok");
  }
  function adSaveUnit() {
    const L = byId.levels[adminSel.levelId] || CUR.levels[0];
    const title = ($("#nu-title") || {}).value || "";
    if (!title) { toast("Missing title", "A unit title is required.", "warn"); return; }
    const n = parseInt(($("#nu-n") || {}).value || (L.units.length + 1), 10);
    const id = L.id + "c" + uid("");
    const gramTitle = ($("#nu-gram") || {}).value || "";
    const rec = { id: id, levelId: L.id, n: n, title: title, theme: ($("#nu-theme") || {}).value || "",
      gram: gramTitle ? { title: gramTitle, explain: { en: "Add your explanation here.", ar: "أضف الشرح هنا.", fr: "Ajoutez votre explication ici." }, formula: ["Subject + verb"], examples: [], mistakes: [] } : null };
    state.custom.units.push(rec);
    const U = { id: id, n: n, title: rec.title, theme: rec.theme, levelId: L.id, lessons: [], vocab: [],
      gram: rec.gram, listen: null, read: null, write: null, speak: [], ex: [], custom: true };
    L.units.push(U); byId.units[U.id] = U;
    adminSel.unitId = U.id;
    closeModal(); save(); render();
    toast("Unit created", title, "ok");
  }
  function adSaveLesson() {
    const U = byId.units[adminSel.unitId];
    const title = ($("#nl2-title") || {}).value || "";
    if (!title) { toast("Missing title", "A lesson title is required.", "warn"); return; }
    const pts = (($("#nl2-pts") || {}).value || "").split("\n").map(s => s.trim()).filter(Boolean);
    const id = U.id + "c" + uid("");
    const rec = { id: id, unitId: U.id, title: title, objective: ($("#nl2-obj") || {}).value || "", points: pts };
    state.custom.lessons.push(rec);
    const LO = { id: id, unitId: U.id, levelId: U.levelId, index: U.lessons.length, title: title, objective: rec.objective, points: pts, custom: true };
    U.lessons.push(LO); byId.lessons[LO.id] = LO;
    closeModal(); save(); render();
    toast("Lesson created", title, "ok");
  }
  function adUpdateLesson(id) {
    const ls = byId.lessons[id];
    if (!ls) return;
    ls.title = ($("#el-title") || {}).value || ls.title;
    ls.objective = ($("#el-obj") || {}).value || ls.objective;
    ls.points = (($("#el-pts") || {}).value || "").split("\n").map(s => s.trim()).filter(Boolean);
    closeModal(); save(); render();
    toast("Lesson updated", null, "ok");
  }
  function adSaveVocab() {
    const U = byId.units[adminSel.unitId];
    const w = ($("#nv-w") || {}).value || "";
    if (!w) { toast("Missing word", "A word is required.", "warn"); return; }
    const rec = { unitId: U.id, w: w, ipa: ($("#nv-ipa") || {}).value || "", pos: ($("#nv-pos") || {}).value || "", ar: ($("#nv-ar") || {}).value || "", def: ($("#nv-def") || {}).value || "", ex: ($("#nv-ex") || {}).value || "" };
    state.custom.vocab.push(rec);
    U.vocab.push({ w: rec.w, ipa: rec.ipa, pos: rec.pos, def: rec.def, ar: rec.ar, ex: rec.ex, custom: true });
    closeModal(); save(); render();
    toast("Word added", w, "ok");
  }

  /* ================= Theme ================= */
  function toggleTheme() {
    state.settings.theme = state.settings.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.settings.theme);
    save();
    render();
  }

  /* ================= Global listeners ================= */
  function bind() {
    document.addEventListener("click", function (e) {
      const el = e.target.closest("[data-act]");
      if (!el) return;
      let act = el.dataset.act;

      // admin modal confirmations
      if (act === "ad-save-level") { adSaveLevel(); return; }
      if (act === "ad-save-unit") { adSaveUnit(); return; }
      if (act === "ad-save-lesson") { adSaveLesson(); return; }
      if (act === "ad-update-lesson") { adUpdateLesson(el.dataset.id); return; }
      if (act === "ad-save-vocab") { adSaveVocab(); return; }
      if (act === "ad-confirm-del") {
        state.custom.deleted.push(el.dataset.id);
        if (byId.lessons[el.dataset.id]) {
          const L = byId.lessons[el.dataset.id];
          delete byId.lessons[el.dataset.id];
          const U = byId.units[L.unitId]; if (U) U.lessons = U.lessons.filter(z => z.id !== L.id);
        } else if (byId.units[el.dataset.id]) {
          const U = byId.units[el.dataset.id];
          U.lessons.forEach(z => delete byId.lessons[z.id]);
          delete byId.units[U.id];
          const L = byId.levels[U.levelId]; if (L) L.units = L.units.filter(z => z.id !== U.id);
        }
        closeModal(); save(); render();
        toast("Deleted", null, "ok");
        return;
      }

      // selects (change events handled here too)
      if (act === "ad-select-level") return;

      handleAction(act, el, e);
    });

    document.addEventListener("change", function (e) {
      const el = e.target.closest("[data-act]");
      if (!el) return;
      if (el.dataset.act === "ad-select-level") {
        adminSel.levelId = el.value;
        const L = byId.levels[adminSel.levelId];
        adminSel.unitId = L && L.units[0] ? L.units[0].id : "";
        render();
      }
      if (el.dataset.act === "ad-select-unit") { adminSel.unitId = el.value; render(); }
      if (el.dataset.act === "toggle-dark") toggleTheme();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
      if (e.key === "Enter" && e.target && e.target.dataset && e.target.dataset.role === "input") {
        const wrap = e.target.closest(".ex-wrap");
        if (wrap) {
          const k = wrap.getAttribute("data-key");
          if (k) checkInput(k);
        }
      }
    });

    $("#burger").addEventListener("click", openSidebar);
    $("#sidebar-scrim").addEventListener("click", closeSidebar);
    $("#theme-toggle").addEventListener("click", toggleTheme);
    $("#avatar-btn").addEventListener("click", function () { go("#/profile"); });
    $("#modal-root").addEventListener("click", function (e) {
      if (e.target === this) closeModal();
    });
    window.addEventListener("hashchange", render);
  }

  /* ================= Init ================= */
  function init() {
    load();
    buildCurriculum();
    applyCustom();
    document.documentElement.setAttribute("data-theme", state.settings.theme || "light");
    adminSel.levelId = CUR.levels[0] ? CUR.levels[0].id : "";
    adminSel.unitId = CUR.levels[0] && CUR.levels[0].units[0] ? CUR.levels[0].units[0].id : "";
    if (state.onboarded) {
      const nl = nextLesson();
      state.currentLevel = state.currentLevel && byId.levels[state.currentLevel] ? state.currentLevel
        : (nl ? nl.levelId : (CUR.levels[0] ? CUR.levels[0].id : "a1"));
    }
    bind();
    if (!location.hash) location.hash = state.onboarded ? "#/dashboard" : "#/home";
    // Award any newly-earned achievements BEFORE the first paint so the UI
    // never shows a stale badge count on load.
    checkAchievements();
    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* expose for testing */
  window.__EH__ = {
    state: () => state, CUR: CUR, byId: byId, render: render,
    buildCurriculum: buildCurriculum, allUnits: allUnits, allLessons: allLessons, allVocab: allVocab,
    skillScores: skillScores, levelUnlocked: levelUnlocked, unitUnlocked: unitUnlocked, ROUTES: ROUTES,
    exerciseHtml: exerciseHtml, buildTest: buildTest
  };
})();
