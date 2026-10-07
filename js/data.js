/* =====================================================================
   English Hero — Core data: curriculum container, placement test,
   onboarding questions, achievements, skill metadata.
   Curriculum levels are registered by js/levels-*.js
   ===================================================================== */
(function () {
  "use strict";

  const EH = {
    levels: [],
    skills: [
      { id: "speaking", label: "Speaking", icon: "◍" },
      { id: "listening", label: "Listening", icon: "◐" },
      { id: "grammar", label: "Grammar", icon: "◎" },
      { id: "reading", label: "Reading", icon: "▤" },
      { id: "writing", label: "Writing", icon: "✎" },
      { id: "vocabulary", label: "Vocabulary", icon: "◉" }
    ],

    /* ---------- Onboarding ---------- */
    onboarding: [
      {
        id: "level",
        q: "What is your current English level?",
        hint: "Be honest — this only helps us place you correctly. You will take a short test next.",
        icon: "◈",
        options: [
          { v: "a1", t: "I am a complete beginner", d: "I know almost nothing yet", icon: "A1" },
          { v: "a2", t: "I know some basics", d: "I can say simple things", icon: "A2" },
          { v: "b1", t: "I can have simple conversations", d: "I manage everyday situations", icon: "B1" },
          { v: "b2", t: "I am fairly comfortable", d: "I can discuss most topics", icon: "B2" },
          { v: "c1", t: "I am advanced", d: "I want polish and precision", icon: "C1" }
        ]
      },
      {
        id: "why",
        q: "Why do you want to learn English?",
        hint: "This shapes the examples and vocabulary we show you.",
        icon: "♥",
        options: [
          { v: "speaking", t: "To speak confidently", d: "I freeze when I open my mouth", icon: "◍" },
          { v: "work", t: "For my career", d: "Meetings, emails, interviews", icon: "▣" },
          { v: "travel", t: "To travel", d: "Airports, hotels, new friends", icon: "✈" },
          { v: "school", t: "For school or exams", d: "Courses, IELTS, TOEFL", icon: "✎" },
          { v: "movies", t: "To understand movies & series", d: "No subtitles, finally", icon: "▶" },
          { v: "general", t: "General English", d: "Just to get better overall", icon: "◈" }
        ]
      },
      {
        id: "time",
        q: "How much time can you study every day?",
        hint: "Small daily habits beat long rare sessions. Pick what you can truly keep.",
        icon: "◐",
        options: [
          { v: 10, t: "10 minutes a day", d: "A light, gentle habit", icon: "🌱" },
          { v: 20, t: "20 minutes a day", d: "Steady and sustainable", icon: "🌿" },
          { v: 30, t: "30 minutes a day", d: "Serious progress", icon: "🌳" },
          { v: 45, t: "45+ minutes a day", d: "Fast-track mode", icon: "🚀" }
        ]
      },
      {
        id: "goal",
        q: "What is your main goal?",
        hint: "We will put this on your dashboard so you never lose sight of it.",
        icon: "✦",
        options: [
          { v: "speaking", t: "Speaking", d: "Talk without translating in my head", icon: "◍" },
          { v: "work", t: "Work", d: "Sound professional in English", icon: "▣" },
          { v: "travel", t: "Travel", d: "Handle any trip with confidence", icon: "✈" },
          { v: "school", t: "School", d: "Pass my exams with a good score", icon: "✎" },
          { v: "movies", t: "Understanding movies", d: "Follow fast natural speech", icon: "▶" },
          { v: "general", t: "General English", d: "Build a complete foundation", icon: "◈" }
        ]
      }
    ],

    /* ---------- Placement test (20 items, A1 → C1) ---------- */
    placement: [
      { lv: "a1", q: "___ your name?", o: ["What is", "What are", "How is", "Who is"], a: 0, why: '"Name" is singular, so we use "What is".' },
      { lv: "a1", q: "I ___ from Egypt.", o: ["am", "is", "are", "be"], a: 0, why: 'With "I" we always use "am".' },
      { lv: "a1", q: "This is my sister. ___ name is Layla.", o: ["Her", "His", "She", "Hers"], a: 0, why: "Sister is female, so the possessive adjective is \"Her\"." },
      { lv: "a1", q: "There ___ three books on the table.", o: ["is", "are", "be", "has"], a: 1, why: '"Three books" is plural, so we use "are".' },
      { lv: "a2", q: "She ___ to work every day.", o: ["go", "goes", "going", "gone"], a: 1, why: 'Present simple with he/she/it adds -es: "goes".' },
      { lv: "a2", q: "I ___ TV when you called me.", o: ["watched", "was watching", "watch", "have watched"], a: 1, why: "An action in progress interrupted by another past action uses past continuous." },
      { lv: "a2", q: "This bag is ___ than that one.", o: ["cheap", "cheaper", "cheapest", "more cheap"], a: 1, why: 'Short adjectives form the comparative with -er: "cheaper than".' },
      { lv: "a2", q: "You ___ smoke here. It is forbidden.", o: ["mustn't", "don't have to", "shouldn't", "needn't"], a: 0, why: '"Mustn\'t" expresses prohibition.' },
      { lv: "b1", q: "I ___ in this city since 2019.", o: ["live", "lived", "have lived", "am living"], a: 2, why: '"Since" with a state continuing to now requires the present perfect.' },
      { lv: "b1", q: "If it ___ tomorrow, we will stay at home.", o: ["will rain", "rains", "rained", "is raining"], a: 1, why: "First conditional: if + present simple, will + infinitive." },
      { lv: "b1", q: "The letter ___ yesterday.", o: ["sent", "was sent", "is sent", "has sent"], a: 1, why: "Passive voice in the past: was/were + past participle." },
      { lv: "b1", q: "She asked me where I ___.", o: ["live", "lived", "do live", "am living"], a: 1, why: "In reported speech the tense moves back one step: live → lived." },
      { lv: "b2", q: "Hardly ___ the meeting started when the power went out.", o: ["had", "has", "did", "was"], a: 0, why: '"Hardly had ... when" is a fixed inversion pattern for the past perfect.' },
      { lv: "b2", q: "I would rather you ___ tell anyone about this.", o: ["don't", "didn't", "won't", "haven't"], a: 1, why: '"Would rather + subject + past simple" expresses a present preference.' },
      { lv: "b2", q: "The proposal is ___ to be approved by the board.", o: ["likely", "probable", "possible", "maybe"], a: 0, why: 'Only "likely" works with the pattern "be ___ to + infinitive".' },
      { lv: "b2", q: "___ having studied for months, he failed the exam.", o: ["Despite", "Although", "However", "Even"], a: 0, why: '"Despite" is followed by a noun or gerund; "although" needs a clause.' },
      { lv: "c1", q: "Not until the results were published ___ the scale of the problem.", o: ["we realised", "did we realise", "we did realise", "realised we"], a: 1, why: "A negative adverbial at the start of a sentence triggers inversion." },
      { lv: "c1", q: "His argument was compelling, ___ it rested on a shaky premise.", o: ["albeit", "although", "whereas", "moreover"], a: 0, why: '"Albeit" introduces a concessive phrase rather than a full clause.' },
      { lv: "c1", q: "The committee recommended that the policy ___ revised immediately.", o: ["is", "was", "be", "will be"], a: 2, why: 'Verbs like "recommend" trigger the subjunctive: "that + subject + base verb".' },
      { lv: "c1", q: "She has an ___ grasp of the subject — she could teach it.", o: ["exhausted", "exhaustive", "exhausting", "exhaustion"], a: 1, why: '"Exhaustive" means thorough and complete; "exhausted" means tired.' }
    ],

    /* ---------- Achievements ---------- */
    achievements: [
      { id: "first_step", name: "First Step", desc: "Complete your very first lesson", icon: "👟", check: s => s.lessonsDone >= 1 },
      { id: "streak3", name: "Warming Up", desc: "Study 3 days in a row", icon: "🔥", check: s => s.bestStreak >= 3 },
      { id: "streak7", name: "7 Day Streak", desc: "Study 7 days in a row", icon: "🔥", check: s => s.bestStreak >= 7 },
      { id: "streak30", name: "Unstoppable", desc: "Study 30 days in a row", icon: "🌋", check: s => s.bestStreak >= 30 },
      { id: "words50", name: "50 Words Learned", desc: "Learn 50 vocabulary words", icon: "📖", check: s => s.wordsLearned >= 50 },
      { id: "words100", name: "100 Words Learned", desc: "Learn 100 vocabulary words", icon: "📚", check: s => s.wordsLearned >= 100 },
      { id: "words300", name: "Walking Dictionary", desc: "Learn 300 vocabulary words", icon: "🧠", check: s => s.wordsLearned >= 300 },
      { id: "lessons10", name: "First 10 Lessons", desc: "Complete 10 lessons", icon: "🎯", check: s => s.lessonsDone >= 10 },
      { id: "lessons50", name: "Half Century", desc: "Complete 50 lessons", icon: "🏅", check: s => s.lessonsDone >= 50 },
      { id: "unit5", name: "Unit Master", desc: "Finish 5 full units", icon: "🧩", check: s => s.unitsDone >= 5 },
      { id: "a1done", name: "A1 Completed", desc: "Pass the A1 Final Test", icon: "🏆", check: s => !!s.tests.a1 },
      { id: "a2done", name: "A2 Completed", desc: "Pass the A2 Final Test", icon: "🏆", check: s => !!s.tests.a2 },
      { id: "b1done", name: "B1 Unlocked", desc: "Pass the B1 Final Test", icon: "🚀", check: s => !!s.tests.b1 },
      { id: "b2done", name: "B2 Completed", desc: "Pass the B2 Final Test", icon: "🚀", check: s => !!s.tests.b2 },
      { id: "c1done", name: "English Hero", desc: "Pass the C1 Final Test", icon: "👑", check: s => !!s.tests.c1 },
      { id: "perfect", name: "Flawless", desc: "Score 100% on any quiz", icon: "💎", check: s => s.perfectScores >= 1 },
      { id: "speaker", name: "Brave Speaker", desc: "Complete 10 speaking practices", icon: "🎙️", check: s => s.speakingDone >= 10 },
      { id: "listener", name: "Good Ear", desc: "Complete 10 listening exercises", icon: "🎧", check: s => s.listeningDone >= 10 },
      { id: "writer", name: "Storyteller", desc: "Submit 5 writing tasks", icon: "✍️", check: s => s.writingDone >= 5 },
      { id: "xp1000", name: "1000 XP", desc: "Earn 1,000 XP", icon: "⚡", check: s => s.xp >= 1000 },
      { id: "xp5000", name: "5000 XP", desc: "Earn 5,000 XP", icon: "🌟", check: s => s.xp >= 5000 }
    ],

    /* ---------- XP economy ---------- */
    xp: { lesson: 30, perfectBonus: 20, exercise: 3, quiz: 5, speaking: 15, listening: 15, writing: 20, test: 120, flashcard: 2, dailyPlan: 25 }
  };

  window.EH = EH;
})();
