/* =====================================================================
   English Hero — Level C1 (Advanced)
   10 units · 5 lessons per unit
   ===================================================================== */
(function () {
  "use strict";

  const C1 = {
    id: "c1",
    code: "C1",
    name: "Advanced",
    color: "c1",
    tagline: "Operate in English with precision, nuance and ease.",
    description: "You are working at a professional and academic level. Now you will refine precision, master idiom and nuance, handle complex listening, write at length with control, and communicate near-fluently in any register.",
    canDo: [
      "Read and write academic texts with appropriate style",
      "Communicate professionally in any business context",
      "Choose words with precision and awareness of connotation",
      "Understand lectures, podcasts and rapid unscripted speech",
      "Argue, present and negotiate with near-native control"
    ],
    units: [
      /* ---------------- UNIT 1 ---------------- */
      {
        n: 1,
        title: "Academic English",
        theme: "Academic style, hedging, citation, abstract writing",
        lessons: [
          { t: "Academic Register", obj: "Write in a formal, objective academic style.", pts: ["Avoid contractions, slang and personal anecdotes.", "Prefer nominalisation: 'the implementation of the policy'.", "Use impersonal constructions: 'it has been demonstrated'.", "Hedge claims: 'the evidence suggests', 'this would appear to'.", "Never use rhetorical questions in academic prose."] },
          { t: "Writing an Abstract", obj: "Summarise research in a structured way.", pts: ["An abstract has five moves: background, gap, method, findings, implication.", "It is written last and read first.", "Keep it to 150–250 words.", "Use past tense for method and findings.", "Avoid citations in the abstract."] },
          { t: "Citation and Attribution", obj: "Integrate sources ethically and clearly.", pts: ["Report: 'As Hall (2021) notes, ...'", "Paraphrase and cite: 'This pattern has been widely observed (Chen, 2019).'", "Never cite a source you have not read.", "Distinguish your voice from your sources'.", "Plagiarism includes uncited paraphrase, not just copying."] },
          { t: "Hedging and Academic Caution", obj: "Make claims you can defend.", pts: ["Strong: This proves... → Hedged: This suggests...", "Use modals: may, might, would appear to.", "Use quantifiers: in most cases, generally, predominantly.", "Acknowledge limitations explicitly.", "Overclaiming is the most common academic error."] },
          { t: "Academic Collocations", obj: "Use the fixed phrases of academic writing.", pts: ["Conduct research, draw a conclusion, address a gap.", "Play a significant role, raise concerns, pose a challenge.", "Substantial evidence, considerable debate, growing consensus.", "The findings indicate, the data reveal, the literature suggests.", "Learn these as whole units."] }
        ],
        vocab: [
          { w: "hypothesis", ipa: "/haɪˈpɒθəsɪs/", pos: "noun", def: "A proposed explanation to be tested.", ar: "فرضية", ex: "The hypothesis was not supported." },
          { w: "methodology", ipa: "/ˌmeθəˈdɒlədʒi/", pos: "noun", def: "The system of methods used in research.", ar: "منهجية", ex: "The methodology is described in section two." },
          { w: "empirical", ipa: "/ɪmˈpɪrɪkl/", pos: "adjective", def: "Based on observation rather than theory.", ar: "تجريبي", ex: "There is little empirical support." },
          { w: "paradigm", ipa: "/ˈpærədaɪm/", pos: "noun", def: "A typical model or framework of thought.", ar: "نموذج فكري", ex: "This represents a paradigm shift." },
          { w: "correlation", ipa: "/ˌkɒrəˈleɪʃn/", pos: "noun", def: "A relationship between two variables.", ar: "ارتباط", ex: "The correlation is weak." },
          { w: "robust", ipa: "/rəʊˈbʌst/", pos: "adjective", def: "Strong and reliable.", ar: "متين / موثوق", ex: "The findings are robust across samples." },
          { w: "limitation", ipa: "/ˌlɪmɪˈteɪʃn/", pos: "noun", def: "A weakness or restriction.", ar: "قيد / تحديد", ex: "The study has several limitations." },
          { w: "implication", ipa: "/ˌɪmplɪˈkeɪʃn/", pos: "noun", def: "A possible consequence or inference.", ar: "تبعات", ex: "The implications for policy are significant." },
          { w: "consensus", ipa: "/kənˈsensəs/", pos: "noun", def: "General agreement among a group.", ar: "إجماع", ex: "There is a growing consensus." },
          { w: "substantiate", ipa: "/səbˈstænʃieɪt/", pos: "verb", def: "To provide evidence for a claim.", ar: "يثبت بالأدلة", ex: "The claim is difficult to substantiate." }
        ],
        gram: {
          title: "Nominalisation and impersonal academic structures",
          explain: {
            en: "Academic English converts processes into abstract nouns and removes the human agent. \"Researchers analysed the data and found that\" becomes \"Analysis of the data revealed that\". This creates objectivity and density, but overuse produces unreadable prose, so balance is essential.",
            ar: "الإنجليزية الأكاديمية تحول العمليات إلى أسماء مجردة وتُخفي الفاعل البشري، مما يخلق موضوعية وكثافة. لكن الإفراط ينتج نصا صعب القراءة، لذا التوازن ضروري.",
            fr: "L'anglais académique nominalise les procès et efface l'agent humain, créant objectivité et densité."
          },
          formula: ['Verb → Noun: <span class="fx-k">analyse</span> → <span class="fx-v">analysis of</span> · <span class="fx-k">fail</span> → <span class="fx-v">failure to</span>', 'Impersonal: <span class="fx-k">It has been established that</span> ... · <span class="fx-k">There is evidence to suggest</span> ...', 'Attribution: <span class="fx-k">As Smith (2020) demonstrates</span>, ...', 'Hedged: <span class="fx-k">The findings would appear to indicate</span> ...'],
          examples: [
            { en: "Analysis of the data revealed a significant pattern.", ar: "كشف تحليل البيانات نمطا مهما." },
            { en: "It has been established that early intervention is effective.", ar: "ثبت أن التدخل المبكر فعال." },
            { en: "The failure to account for inflation weakens the argument.", ar: "الإخفاق في احتساب التضخم يضعف الحجة." },
            { en: "These findings would appear to contradict the earlier model.", ar: "يبدو أن هذه النتائج تتناقض مع النموذج السابق." }
          ],
          mistakes: [
            { w: "I think that the results show a lot of things.", r: "The results suggest a number of patterns.", why: "Avoid first-person opinion and vague quantifiers." },
            { w: "This proves beyond doubt that...", r: "This provides strong evidence that...", why: "Academic writing avoids absolute proof claims." },
            { w: "The researchers did an analysis and they found...", r: "Analysis revealed that...", why: "Nominalisation removes redundant human agents." }
          ]
        },
        listen: {
          title: "A research seminar",
          lines: [
            { who: "Presenter", text: "Our hypothesis was that sleep quality predicts academic performance more strongly than study hours." },
            { who: "Attendee", text: "And what did the data show?" },
            { who: "Presenter", text: "The correlation was moderate but robust across three cohorts. However, I should stress that it is correlational." },
            { who: "Attendee", text: "So you are not claiming causation." },
            { who: "Presenter", text: "Correct. There is also a plausible confound: students with better sleep may simply have more stable housing." },
            { who: "Attendee", text: "How did you address that?" },
            { who: "Presenter", text: "We controlled for income, and the effect weakened but did not disappear." },
            { who: "Attendee", text: "Interesting. What are the implications?" },
            { who: "Presenter", text: "That universities may be investing in the wrong intervention." }
          ],
          q: [
            { q: "What was the hypothesis?", o: ["Sleep quality predicts performance more than study hours", "Study hours are the only factor", "Sleep is irrelevant"], a: 0, why: "\"sleep quality predicts academic performance more strongly than study hours.\"" },
            { q: "What confound is mentioned?", o: ["Stable housing", "Diet", "Age"], a: 0, why: "\"students with better sleep may simply have more stable housing.\"" },
            { q: "What happened after controlling for income?", o: ["The effect weakened but did not disappear", "The effect vanished", "The effect doubled"], a: 0, why: "\"the effect weakened but did not disappear.\"" }
          ]
        },
        read: {
          title: "Abstract: Remote work and productivity",
          text: "BACKGROUND: The rapid shift to remote work has prompted considerable debate about its effect on productivity. GAP: Existing studies rely heavily on self-reported measures and rarely distinguish between job types. METHOD: This study analyses administrative output data from 4,200 employees across three sectors over 26 months, controlling for role, tenure and task interdependence. FINDINGS: Output increased modestly in independent roles but declined in highly interdependent teams. The effect was robust across specifications, although the sample is limited to one national context. IMPLICATIONS: The findings suggest that productivity effects are contingent on task structure rather than on remote work itself, and that uniform organisational policies are therefore likely to be counterproductive.",
          q: [
            { q: "What gap do the authors identify?", o: ["Studies rarely distinguish between job types", "There is no research on remote work", "Data is unavailable"], a: 0, why: "\"rarely distinguish between job types.\"" },
            { q: "What did the findings show?", o: ["Output rose in independent roles but fell in interdependent teams", "Output always rose", "Output always fell"], a: 0, why: "\"Output increased modestly in independent roles but declined in highly interdependent teams.\"" },
            { q: "What is the main implication?", o: ["Effects depend on task structure, so uniform policies may fail", "Remote work should be banned", "Remote work always helps"], a: 0, why: "\"productivity effects are contingent on task structure ... uniform organisational policies are therefore likely to be counterproductive.\"" }
          ]
        },
        write: {
          prompt: "Write an abstract (150–200 words) for a fictional study on the effect of social media on concentration among university students. Use the five moves: background, gap, method, findings, implication.",
          tips: ["Use past tense for method and findings", "Hedge your findings", "End with a clear implication"],
          sample: "BACKGROUND: Sustained attention is widely regarded as a prerequisite for academic success, yet the proliferation of mobile social media has transformed how students allocate their attention. GAP: While numerous studies have examined screen time and well-being, comparatively few have measured task-specific concentration in natural study settings, and existing work rarely accounts for notification frequency as distinct from total usage. METHOD: This study tracked 380 undergraduates over twelve weeks, combining device logs with standardised concentration tasks administered at three intervals. Usage was disaggregated into active use, passive scrolling and notification exposure. FINDINGS: Passive scrolling showed no significant association with concentration scores. Notification exposure, by contrast, was negatively associated with performance, even after controlling for total screen time and prior attainment. The association was robust across all three intervals, although the design cannot establish direction of causation. IMPLICATIONS: The findings suggest that interventions targeting total screen time may be misdirected, and that attention should instead focus on notification architecture."
        },
        speak: ["Explain your research interests in academic English.", "Hedge a claim you believe strongly.", "Describe a study's methodology in three sentences.", "Summarise an abstract you have read.", "Identify the limitations of an argument."],
        ex: [
          { t: "mcq", q: "Academic writing generally avoids ___.", o: ["contractions", "the passive", "hedging"], a: 0, why: "Contractions are too informal for academic prose." },
          { t: "fill", q: "Analysis of the data ___ a significant pattern.", o: ["revealed", "reveal", "revealing"], a: 0, why: "\"Analysis\" is singular, so the verb takes -ed." },
          { t: "mcq", q: "Which is the most appropriately hedged claim?", o: ["The findings suggest a link.", "This proves a link.", "Everyone knows there is a link."], a: 0, why: "Hedged claims are defensible and academic." },
          { t: "fill", q: "The results ___ appear to contradict the earlier model.", o: ["would", "will", "must to"], a: 0, why: "\"Would appear to\" is a cautious academic formula." },
          { t: "match", pairs: [["hypothesis", "proposed explanation"], ["empirical", "based on observation"], ["robust", "reliable across conditions"], ["consensus", "general agreement"]] },
          { t: "order", words: ["has", "It", "established", "been", "that"], answer: "It has been established that" },
          { t: "correct", wrong: "This proves beyond doubt that the policy works.", answer: "This provides strong evidence that the policy is effective.", why: "Academic writing avoids absolute proof claims." },
          { t: "translate", q: "Translate into English: تشير النتائج إلى وجود ارتباط", a: ["the findings suggest a correlation", "the results suggest a correlation"], why: "تشير النتائج = \"The findings suggest\"." },
          { t: "listen", text: "The correlation was moderate but robust across three cohorts, though it is correlational.", q: "What is the key caution?", o: ["It is correlational, not causal", "The sample is too small", "The data is old"], a: 0, why: "\"it is correlational.\"" },
          { t: "write", prompt: "Write three sentences of an academic abstract: background, method and implication.", keywords: ["this study", "findings", "implications"], minWords: 40 }
        ]
      },

      /* ---------------- UNIT 2 ---------------- */
      {
        n: 2,
        title: "Professional Communication",
        theme: "Executive writing, crisis communication, cross-cultural business",
        lessons: [
          { t: "Executive Summary Writing", obj: "Communicate at senior level in minimal space.", pts: ["Lead with the conclusion, not the process.", "Assume the reader has ninety seconds.", "Quantify wherever possible.", "One recommendation per paragraph.", "Cut every sentence that does not change a decision."] },
          { t: "Crisis Communication", obj: "Communicate under pressure and scrutiny.", pts: ["Acknowledge first, explain second, act third.", "Never say 'no comment' — it reads as guilt.", "Use plain language; jargon in a crisis destroys trust.", "State what you know, what you don't, and when you will know.", "Commit to a specific follow-up time."] },
          { t: "Cross-Cultural Business", obj: "Adapt to different business cultures.", pts: ["Directness varies: Dutch and German norms differ from Japanese and Gulf norms.", "Silence may signal respect, not disagreement.", "Hierarchy affects who may speak and when.", "Written contracts carry different weight in different contexts.", "Adapt your style without abandoning your substance."] },
          { t: "Influencing Without Authority", obj: "Persuade people you do not manage.", pts: ["Frame your proposal in terms of their objectives.", "Use evidence, not enthusiasm.", "Reduce the perceived risk of agreeing.", "Offer a small, reversible first step.", "Follow up in writing to consolidate agreement."] },
          { t: "High-Stakes Negotiation", obj: "Negotiate complex agreements.", pts: ["Identify your BATNA before you enter the room.", "Separate positions from interests.", "Trade, do not concede: 'if I move on X, you move on Y'.", "Silence is a tool; let the other side fill it.", "Never negotiate the final number in the first meeting."] }
        ],
        vocab: [
          { w: "mitigate", ipa: "/ˈmɪtɪɡeɪt/", pos: "verb", def: "To make something less severe.", ar: "يخفف", ex: "We must mitigate the risk." },
          { w: "transparency", ipa: "/trænsˈpærənsi/", pos: "noun", def: "The quality of being open and honest.", ar: "شفافية", ex: "Transparency builds trust." },
          { w: "accountability", ipa: "/əˌkaʊntəˈbɪləti/", pos: "noun", def: "Responsibility for decisions and results.", ar: "مساءلة", ex: "Accountability must be clear." },
          { w: "leverage", ipa: "/ˈliːvərɪdʒ/", pos: "noun / verb", def: "Power to influence; to use for advantage.", ar: "نفوذ / يستفيد من", ex: "We have little leverage here." },
          { w: "due diligence", ipa: "/djuː ˈdɪlɪdʒəns/", pos: "noun", def: "Careful investigation before a decision.", ar: "العناية الواجبة", ex: "We completed due diligence in April." },
          { w: "stakeholder", ipa: "/ˈsteɪkhəʊldə/", pos: "noun", def: "Anyone affected by or interested in a decision.", ar: "صاحب مصلحة", ex: "All stakeholders were consulted." },
          { w: "escalate", ipa: "/ˈeskəleɪt/", pos: "verb", def: "To increase in intensity, or refer to a higher level.", ar: "يتصاعد / يُحيل", ex: "Please escalate this to the board." },
          { w: "contingent", ipa: "/kənˈtɪndʒənt/", pos: "adjective", def: "Depending on something else.", ar: "مشروط بـ", ex: "Approval is contingent on funding." },
          { w: "articulate", ipa: "/ɑːˈtɪkjuleɪt/", pos: "verb", def: "To express clearly and effectively.", ar: "يصوغ بوضوح", ex: "She articulated the strategy well." },
          { w: "unprecedented", ipa: "/ʌnˈpresɪdentɪd/", pos: "adjective", def: "Never having happened before.", ar: "غير مسبوق", ex: "The demand was unprecedented." }
        ],
        gram: {
          title: "Diplomatic modality and strategic ambiguity",
          explain: {
            en: "Executive communication often requires you to commit without over-committing. Structures such as \"we are minded to\", \"subject to\", \"in principle\" and \"we would not rule out\" allow flexibility. The skill is knowing when clarity is required and when ambiguity is a deliberate strategy.",
            ar: "التواصل التنفيذي يتطلب الالتزام دون مبالغة. تراكيب مثل we are minded to و subject to و in principle تتيح مرونة. والمهارة في معرفة متى يجب الوضوح ومتى يكون الغموض استراتيجية مقصودة.",
            fr: "La communication exécutive exige de s'engager sans se sur-engager : « we are minded to », « subject to », « in principle »."
          },
          formula: ['Conditional commitment: <span class="fx-k">subject to</span> board approval · <span class="fx-k">contingent on</span> funding', 'Tentative intent: <span class="fx-k">We are minded to</span> ... · <span class="fx-k">We would not rule out</span> ...', 'Non-committal: <span class="fx-k">at this stage</span> · <span class="fx-k">as things stand</span> · <span class="fx-k">for the time being</span>', 'Firm: <span class="fx-k">We will</span> + action + date'],
          examples: [
            { en: "We are minded to proceed, subject to legal review.", ar: "نحن نميل إلى المضي قدما، رهنا بالمراجعة القانونية." },
            { en: "We would not rule out a second phase.", ar: "لا نستبعد مرحلة ثانية." },
            { en: "As things stand, the deadline remains achievable.", ar: "بحسب الوضع الحالي، يبقى الموعد النهائي قابلا للتحقيق." },
            { en: "We will publish the findings by 30 June.", ar: "سننشر النتائج بحلول 30 يونيو." }
          ],
          mistakes: [
            { w: "No comment.", r: "We are not in a position to share details at this stage, but we will update you by Friday.", why: "\"No comment\" signals concealment; provide a timeframe instead." },
            { w: "We will definitely deliver by Monday.", r: "Subject to supplier confirmation, we expect to deliver by Monday.", why: "Over-commitment creates avoidable exposure." },
            { w: "It's all under control.", r: "Three of four workstreams are on track; the fourth requires a decision.", why: "Vague reassurance erodes credibility." }
          ]
        },
        listen: {
          title: "A crisis briefing",
          lines: [
            { who: "Journalist", text: "Can you confirm that customer data was exposed?" },
            { who: "CEO", text: "What I can confirm is that we identified unauthorised access on Tuesday and closed it within four hours." },
            { who: "Journalist", text: "How many customers are affected?" },
            { who: "CEO", text: "We are not in a position to give a figure at this stage. What I can say is that we will publish a full breakdown by Friday." },
            { who: "Journalist", text: "Why should customers trust you?" },
            { who: "CEO", text: "That is a fair question. We have engaged an independent firm, and their findings will be published in full, including anything unflattering." },
            { who: "Journalist", text: "Will you compensate affected users?" },
            { who: "CEO", text: "We are minded to do so, subject to the audit. I would rather under-promise today than mislead you." }
          ],
          q: [
            { q: "What does the CEO confirm?", o: ["Unauthorised access was identified and closed within four hours", "No data was accessed", "The company will close"], a: 0, why: "\"we identified unauthorised access on Tuesday and closed it within four hours.\"" },
            { q: "What does the CEO promise by Friday?", o: ["A full breakdown of affected customers", "Compensation", "A new CEO"], a: 0, why: "\"we will publish a full breakdown by Friday.\"" },
            { q: "What is the CEO's position on compensation?", o: ["Minded to do so, subject to the audit", "Definitely yes", "Definitely no"], a: 0, why: "\"We are minded to do so, subject to the audit.\"" }
          ]
        },
        read: {
          title: "Executive summary: market entry recommendation",
          text: "We recommend entering the Portuguese market through a distribution partnership rather than a wholly owned subsidiary. The market is attractive: broadband penetration reached 87 percent in 2025, and the enterprise software segment has grown at 14 percent annually for three years. A subsidiary would require an estimated 4.2 million euros and twenty-two months before break-even. A partnership, by contrast, requires 900,000 euros and can be operational within five months, contingent on identifying a partner with existing enterprise relationships. The principal risk is reduced margin control, which we assess as manageable provided that the agreement includes a defined migration path to direct sales after twenty-four months. Two partners have been shortlisted and due diligence is under way. Subject to board approval in June, we would expect to sign by September and generate first revenue in the fourth quarter.",
          q: [
            { q: "What is the recommendation?", o: ["Enter via a distribution partnership", "Build a subsidiary", "Do not enter"], a: 0, why: "\"We recommend entering the Portuguese market through a distribution partnership.\"" },
            { q: "How long would a subsidiary take to break even?", o: ["Twenty-two months", "Five months", "Twenty-four months"], a: 0, why: "\"twenty-two months before break-even.\"" },
            { q: "What is the principal risk?", o: ["Reduced margin control", "Language barrier", "Regulation"], a: 0, why: "\"The principal risk is reduced margin control.\"" }
          ]
        },
        write: {
          prompt: "Write an executive summary (8–10 sentences) recommending a course of action on a decision you invent. Lead with the conclusion and include one risk with mitigation.",
          tips: ["First sentence = recommendation", "Quantify at least twice", "End with next steps and a date"],
          sample: "We recommend consolidating the two customer support centres into a single hub in the northern region. The current split duplicates management and tooling costs, which we estimate at 780,000 euros annually. A single hub would reduce this by approximately 60 percent within eighteen months, based on the outcome of a comparable consolidation completed in 2023. Service levels should be protected, as the northern site already handles 54 percent of contacts and has the stronger retention record. The principal risk is short-term attrition during relocation. We assess this as manageable, provided that retention bonuses are offered to the 40 most experienced agents and that the transition is phased over two quarters rather than one. Consultation with staff representatives should begin immediately. Subject to board approval in May, we would expect the transition to be complete by the end of the third quarter, with a full benefits review in the fourth."
        },
        speak: ["Give a 60-second executive recommendation.", "Respond to a hostile question without saying 'no comment'.", "Negotiate a deadline diplomatically.", "Explain a risk and its mitigation.", "Adapt a direct message for a more indirect culture."],
        ex: [
          { t: "mcq", q: "In a crisis, you should never say ___.", o: ["\"no comment\"", "\"we will update you\"", "\"we are investigating\""], a: 0, why: "\"No comment\" reads as concealment." },
          { t: "fill", q: "We are minded to proceed, ___ to legal review.", o: ["subject", "according", "due"], a: 0, why: 'The phrase is "subject to".' },
          { t: "mcq", q: "An executive summary should lead with ___.", o: ["the conclusion", "the background", "the methodology"], a: 0, why: "Senior readers need the conclusion first." },
          { t: "fill", q: "Approval is ___ on funding.", o: ["contingent", "consistent", "content"], a: 0, why: "\"Contingent on\" means depending on." },
          { t: "match", pairs: [["mitigate", "make less severe"], ["escalate", "refer to a higher level"], ["leverage", "power to influence"], ["articulate", "express clearly"]] },
          { t: "order", words: ["not", "We", "rule", "would", "out", "a", "second", "phase"], answer: "We would not rule out a second phase" },
          { t: "correct", wrong: "No comment.", answer: "We are not in a position to share details at this stage, but we will update you by Friday.", why: "Provide a timeframe instead of refusing to engage." },
          { t: "translate", q: "Translate into English: رهنا بموافقة المجلس", a: ["subject to board approval"], why: "رهنا بـ = \"subject to\"." },
          { t: "listen", text: "We will publish a full breakdown by Friday, including anything unflattering.", q: "What will be published?", o: ["A full breakdown by Friday", "Only positive findings", "Nothing"], a: 0, why: "\"We will publish a full breakdown by Friday.\"" },
          { t: "write", prompt: "Write three sentences of an executive summary: recommendation, rationale and next step.", keywords: ["we recommend", "because", "next step"], minWords: 34 }
        ]
      },

      /* ---------------- UNIT 3 ---------------- */
      {
        n: 3,
        title: "Advanced Vocabulary & Precision",
        theme: "Word formation, collocation, precision and lexical resource",
        lessons: [
          { t: "Word Formation and Families", obj: "Build and use word families accurately.", pts: ["analyse, analysis, analytical, analyst, analytically.", "sustain, sustainable, sustainability, unsustainable.", "Precision means choosing the right member of the family.", "'Economical' and 'economic' are different words.", "Learn the family, not the single form."] },
          { t: "Precision and Vagueness", obj: "Replace vague words with exact ones.", pts: ["Vague: a big problem → Precise: a systemic constraint.", "Vague: do → Precise: implement, conduct, undertake, perform.", "Vague: good → Precise: effective, robust, credible, viable.", "Vague: change → Precise: amend, revise, overhaul, refine.", "Precision is the fastest route to sounding advanced."] },
          { t: "Register-Specific Vocabulary", obj: "Choose words that fit the context.", pts: ["Formal: commence, terminate, sufficient, obtain.", "Neutral: start, end, enough, get.", "Informal: kick off, wrap up, plenty, grab.", "Mixing registers unintentionally is a common error.", "Advanced speakers control this deliberately."] },
          { t: "Advanced Collocation", obj: "Pair words the way native speakers do.", pts: ["Draw a distinction, reach a consensus, meet a deadline.", "Heavy criticism, sharp decline, marked improvement.", "Grave concerns, mounting pressure, widespread support.", "Collocations cannot be guessed reliably from meaning.", "Record them in context, not in isolation."] },
          { t: "Lexical Cohesion", obj: "Avoid repetition without losing clarity.", pts: ["Use synonyms: 'the policy ... the measure ... the reform'.", "Use superordinates: 'the vehicle ... the car'.", "Use pronouns carefully; ambiguity destroys clarity.", "Repeat key terms when precision matters more than variety.", "Cohesion is a balance, not a rule."] }
        ],
        vocab: [
          { w: "viable", ipa: "/ˈvaɪəbl/", pos: "adjective", def: "Capable of working successfully.", ar: "قابل للنجاح", ex: "It is not a viable option." },
          { w: "detrimental", ipa: "/ˌdetrɪˈmentl/", pos: "adjective", def: "Causing harm or damage.", ar: "ضار", ex: "The delay was detrimental to the project." },
          { w: "ambiguous", ipa: "/æmˈbɪɡjuəs/", pos: "adjective", def: "Open to more than one interpretation.", ar: "ملتبس", ex: "The wording is ambiguous." },
          { w: "exacerbate", ipa: "/ɪɡˈzæsəbeɪt/", pos: "verb", def: "To make a bad situation worse.", ar: "يفاقم", ex: "The policy exacerbated inequality." },
          { w: "proliferation", ipa: "/prəˌlɪfəˈreɪʃn/", pos: "noun", def: "A rapid increase in number.", ar: "انتشار واسع", ex: "The proliferation of platforms complicates regulation." },
          { w: "disparity", ipa: "/dɪˈspærəti/", pos: "noun", def: "A great difference, especially an unfair one.", ar: "تفاوت", ex: "The regional disparity is striking." },
          { w: "inherent", ipa: "/ɪnˈhɪərənt/", pos: "adjective", def: "Existing as a natural part of something.", ar: "متأصل", ex: "There are inherent risks in the approach." },
          { w: "tenuous", ipa: "/ˈtenjuəs/", pos: "adjective", def: "Weak or slight.", ar: "واهٍ", ex: "The connection is tenuous." },
          { w: "nuanced", ipa: "/ˈnjuːɑːnst/", pos: "adjective", def: "Showing subtle distinctions.", ar: "دقيق التمييز", ex: "She gave a nuanced answer." },
          { w: "unwarranted", ipa: "/ʌnˈwɒrəntɪd/", pos: "adjective", def: "Not justified or deserved.", ar: "غير مبرر", ex: "The criticism was unwarranted." }
        ],
        gram: {
          title: "Word families and derivational morphology",
          explain: {
            en: "Advanced English requires control of word families: knowing not only \"economy\" but \"economic\", \"economical\", \"economically\" and \"economist\", and knowing which fits which slot. Suffixes determine grammatical class; prefixes often change meaning. Errors at this level are usually derivational rather than grammatical.",
            ar: "الإنجليزية المتقدمة تتطلب التحكم في عائلات الكلمات ومعرفة الصيغة المناسبة لكل موضع. الأخطاء في هذا المستوى غالبا اشتقاقية لا نحوية.",
            fr: "L'anglais avancé exige la maîtrise des familles de mots ; les erreurs sont souvent dérivationnelles plutôt que grammaticales."
          },
          formula: ['Noun suffixes: <span class="fx-k">-tion, -ment, -ity, -ness, -ance</span> → sustainability, government', 'Adjective suffixes: <span class="fx-k">-ive, -ous, -able, -al, -ic</span> → viable, ambiguous, inherent', 'Verb prefixes: <span class="fx-k">re-, dis-, over-, under-, mis-</span> → revise, disregard, underestimate', 'Adverb: adjective + <span class="fx-k">-ly</span> · Careful: <span class="fx-n">hard/hardly, late/lately</span>'],
          examples: [
            { en: "The economical solution is not always the economic one.", ar: "الحل الاقتصادي في التكلفة ليس دائما الحل الاقتصادي العام." },
            { en: "His analysis was analytical rather than descriptive.", ar: "كان تحليله تحليليا لا وصفيا." },
            { en: "The policy is unsustainable in its current form.", ar: "السياسة غير مستدامة بشكلها الحالي." },
            { en: "She presented the argument analytically.", ar: "عرضت الحجة بأسلوب تحليلي." }
          ],
          mistakes: [
            { w: "This is an economical problem for the country.", r: "This is an economic problem for the country.", why: "\"Economic\" relates to the economy; \"economical\" means saving money." },
            { w: "He is very analytic.", r: "He is very analytical.", why: "The adjective is normally \"analytical\"." },
            { w: "The sustain of the system is in doubt.", r: "The sustainability of the system is in doubt.", why: "The noun is \"sustainability\"." }
          ]
        },
        listen: {
          title: "A panel on technology regulation",
          lines: [
            { who: "Panelist A", text: "The proliferation of platforms has made the existing framework untenable." },
            { who: "Panelist B", text: "I would draw a distinction between proliferation and concentration. The problem is the latter." },
            { who: "Panelist A", text: "That's a fair nuance. But the disparity in enforcement is the real issue." },
            { who: "Panelist B", text: "I'd argue the constraint is inherent to the model, not to the regulation." },
            { who: "Moderator", text: "Are you saying the harm is unwarranted?" },
            { who: "Panelist B", text: "Not unwarranted — exaggerated. And exaggeration is detrimental because it discredits legitimate concerns." },
            { who: "Panelist A", text: "That connection is tenuous at best." },
            { who: "Panelist B", text: "Perhaps. But a nuanced position is more likely to survive scrutiny than a maximalist one." }
          ],
          q: [
            { q: "What distinction does Panelist B draw?", o: ["Between proliferation and concentration", "Between regulation and law", "Between platforms and users"], a: 0, why: "\"I would draw a distinction between proliferation and concentration.\"" },
            { q: "What does Panelist B say about the harm?", o: ["It is exaggerated, not unwarranted", "It does not exist", "It is underestimated"], a: 0, why: "\"Not unwarranted — exaggerated.\"" },
            { q: "What does Panelist A say about the connection?", o: ["It is tenuous at best", "It is obvious", "It is proven"], a: 0, why: "\"That connection is tenuous at best.\"" }
          ]
        },
        read: {
          title: "The cost of imprecision",
          text: "Imprecision in language is rarely random. When a report describes a decline as \"significant\" without a figure, or a risk as \"manageable\" without criteria, the vagueness is often functional: it protects the author from being held to a claim. This is not always dishonest. In genuinely uncertain conditions, hedged language is appropriate and even necessary. The difficulty arises when vague vocabulary substitutes for analysis altogether. A term like \"challenges\" can absorb anything from a minor delay to a systemic failure, and readers cannot tell which is intended. The remedy is not to eliminate hedging but to make it explicit: state the figure, name the criterion, and say what would change your assessment. Precision of this kind does not weaken a claim; it makes the claim defensible, which is a different and more useful quality.",
          q: [
            { q: "Why is vagueness often functional?", o: ["It protects the author from being held to a claim", "It saves space", "It sounds more professional"], a: 0, why: "\"the vagueness is often functional: it protects the author from being held to a claim.\"" },
            { q: "When does the problem arise?", o: ["When vague vocabulary substitutes for analysis", "Whenever hedging is used", "In short documents"], a: 0, why: "\"The difficulty arises when vague vocabulary substitutes for analysis altogether.\"" },
            { q: "What is the recommended remedy?", o: ["Make hedging explicit with figures and criteria", "Remove all hedging", "Use longer words"], a: 0, why: "\"The remedy is not to eliminate hedging but to make it explicit.\"" }
          ]
        },
        write: {
          prompt: "Rewrite the following vague paragraph precisely (7–8 sentences): 'There are some issues with the project. Things are not going well and there may be problems later. We need to do something about it soon.'",
          tips: ["Replace every vague term with a precise one", "Add figures or criteria", "State clearly what would change your assessment"],
          sample: "Three issues currently affect the project. First, the supplier has delivered two of five components, a shortfall that will delay integration by an estimated eleven days. Second, testing has revealed a defect in the payment module, which affects approximately 4 percent of transactions. Third, the budget has been consumed 62 percent against 48 percent of planned work, indicating a cost overrun of roughly 90,000 euros if the current rate continues. None of these issues is individually fatal, but together they place the March launch at risk. I would recommend reducing scope in two low-priority areas rather than extending the timeline, since the launch window is commercially important. My assessment would change if the supplier confirms delivery of the remaining components by 20 February. A decision is needed by the end of next week."
        },
        speak: ["Replace three vague words with precise alternatives.", "Explain the difference between 'economic' and 'economical'.", "Describe a trend using precise collocations.", "Give a nuanced answer to a simple question.", "Summarise a report using precise vocabulary."],
        ex: [
          { t: "mcq", q: "This is an ___ problem for the whole country.", o: ["economic", "economical", "economically"], a: 0, why: "\"Economic\" relates to the economy as a whole." },
          { t: "fill", q: "The policy is ___ in its current form.", o: ["unsustainable", "unsustained", "insustainable"], a: 0, why: "The correct form is \"unsustainable\"." },
          { t: "mcq", q: "The delay was ___ to the project.", o: ["detrimental", "detriment", "detrimentally"], a: 0, why: "An adjective is needed before \"to\"." },
          { t: "fill", q: "We must ___ a distinction between the two issues.", o: ["draw", "do", "make up"], a: 0, why: 'The collocation is "draw a distinction".' },
          { t: "match", pairs: [["exacerbate", "make worse"], ["viable", "able to succeed"], ["inherent", "naturally part of"], ["tenuous", "weak or slight"]] },
          { t: "order", words: ["a", "reach", "We", "need", "to", "consensus"], answer: "We need to reach a consensus" },
          { t: "correct", wrong: "This is an economical problem for the country.", answer: "This is an economic problem for the country.", why: "\"Economic\" concerns the economy; \"economical\" means saving money." },
          { t: "translate", q: "Translate into English: تفاقم الوضع", a: ["the situation was exacerbated", "the situation worsened"], why: "تفاقم = \"was exacerbated\"." },
          { t: "listen", text: "The proliferation of platforms has made the framework untenable.", q: "What has happened to the framework?", o: ["It has become untenable", "It has improved", "It has been removed"], a: 0, why: "\"has made the framework untenable.\"" },
          { t: "write", prompt: "Rewrite this precisely: 'There are some issues with the plan and things may get worse.'", keywords: ["specifically", "risk", "if"], minWords: 20 }
        ]
      },

      /* ---------------- UNIT 4 ---------------- */
      {
        n: 4,
        title: "Nuance, Subtext & Implication",
        theme: "Reading between the lines, implicature, ambiguity, rhetoric",
        lessons: [
          { t: "Implicature and Subtext", obj: "Understand meaning beyond the literal words.", pts: ["'It's cold in here' may mean 'close the window'.", "Politeness often disguises a request as an observation.", "Grice's maxims explain why we infer meaning.", "Breaking a maxim signals something deliberate.", "Advanced listeners respond to the intention, not the words."] },
          { t: "Ambiguity and Deliberate Vagueness", obj: "Recognise when ambiguity is strategic.", pts: ["Political language is often intentionally ambiguous.", "'We are reviewing the situation' commits to nothing.", "Vagueness protects against accountability.", "Ambiguity can also be creative and productive.", "Ask: who benefits from this not being clear?"] },
          { t: "Rhetorical Analysis", obj: "Analyse how language persuades.", pts: ["Ethos: credibility of the speaker.", "Pathos: emotional appeal.", "Logos: logical argument.", "Identify which is doing the work in a text.", "Strong texts usually balance all three."] },
          { t: "Irony, Satire and Tone", obj: "Detect layered meaning in texts.", pts: ["Satire exaggerates to expose.", "Irony says the opposite of what is meant.", "Tone is built from word choice, not content.", "Deadpan delivery makes irony harder to detect.", "Context determines whether irony is present."] },
          { t: "Interpreting Literature", obj: "Read literary texts with attention to craft.", pts: ["Narrative voice shapes everything the reader accepts.", "Unreliable narrators reveal themselves through inconsistency.", "Repetition and imagery carry thematic weight.", "What is omitted is often as significant as what is stated.", "Interpretation must be supported by textual evidence."] }
        ],
        vocab: [
          { w: "implicature", ipa: "/ˈɪmplɪkətʃə/", pos: "noun", def: "Meaning suggested rather than stated.", ar: "معنى ضمني", ex: "The implicature was unmistakable." },
          { w: "subtext", ipa: "/ˈsʌbtekst/", pos: "noun", def: "An underlying meaning beneath the surface.", ar: "المعنى الخفي", ex: "The subtext of the scene is power." },
          { w: "satire", ipa: "/ˈsætaɪə/", pos: "noun", def: "Humour used to expose foolishness or vice.", ar: "سخرية نقدية", ex: "The novel is a satire on bureaucracy." },
          { w: "unreliable narrator", ipa: "/ˌʌnrɪˈlaɪəbl nəˈreɪtə/", pos: "noun", def: "A storyteller whose account cannot be trusted.", ar: "راوٍ غير موثوق", ex: "The unreliable narrator hides the truth." },
          { w: "evasive", ipa: "/ɪˈveɪsɪv/", pos: "adjective", def: "Avoiding a direct answer.", ar: "مُراوغ", ex: "His answer was evasive." },
          { w: "conspicuous", ipa: "/kənˈspɪkjuəs/", pos: "adjective", def: "Easily seen; attracting attention.", ar: "بارز", ex: "The omission was conspicuous." },
          { w: "rhetoric", ipa: "/ˈretərɪk/", pos: "noun", def: "The art of persuasive language.", ar: "بلاغة", ex: "The speech was pure rhetoric." },
          { w: "plausible", ipa: "/ˈplɔːzəbl/", pos: "adjective", def: "Seeming reasonable or probable.", ar: "معقول الظاهر", ex: "It is a plausible but unproven theory." },
          { w: "oblique", ipa: "/əˈbliːk/", pos: "adjective", def: "Indirect; not expressed directly.", ar: "غير مباشر", ex: "He made an oblique reference to the incident." },
          { w: "equivocal", ipa: "/ɪˈkwɪvəkl/", pos: "adjective", def: "Deliberately unclear or ambiguous.", ar: "مُلتبس", ex: "The statement was equivocal." }
        ],
        gram: {
          title: "Modality, evidentiality and stance in interpretation",
          explain: {
            en: "How a speaker marks the source and reliability of information reveals their stance. Compare: \"The report claims...\" (distancing), \"The report shows...\" (endorsing), \"The report alleges...\" (implying doubt). At C1, you choose reporting verbs for their evaluative force, not just their meaning.",
            ar: "طريقة المتحدث في تحديد مصدر المعلومة ومدى موثوقيتها تكشف موقفه. قارن بين claims و shows و alleges. في مستوى C1 تختار أفعال النقل بحسب قوتها التقييمية.",
            fr: "Le choix du verbe de reportage (claims / shows / alleges) révèle la position du locuteur."
          },
          formula: ['Distancing: <span class="fx-k">claims / purports / is said to</span>', 'Endorsing: <span class="fx-k">demonstrates / establishes / confirms</span>', 'Implying doubt: <span class="fx-k">alleges / asserts without evidence / would have us believe</span>', 'Stance adverbials: <span class="fx-k">allegedly / purportedly / ostensibly / supposedly</span>'],
          examples: [
            { en: "The company claims the delay was unavoidable.", ar: "تدّعي الشركة أن التأخير كان لا مفر منه." },
            { en: "The data demonstrate a clear pattern.", ar: "تُظهر البيانات نمطا واضحا." },
            { en: "He alleges misconduct without providing evidence.", ar: "يزعم سوء سلوك دون تقديم أدلة." },
            { en: "The measure was ostensibly designed to help consumers.", ar: "صُمم الإجراء ظاهريا لمساعدة المستهلكين." }
          ],
          mistakes: [
            { w: "Using \"claims\" and \"proves\" interchangeably.", r: "Choosing the reporting verb to match your stance.", why: "Each reporting verb carries evaluative weight." },
            { w: "Assuming literal meaning in all contexts.", r: "Considering implicature and tone.", why: "Much meaning is indirect, especially in professional and literary texts." },
            { w: "Treating vagueness as always dishonest.", r: "Asking who benefits from the ambiguity.", why: "Ambiguity can be legitimate or strategic." }
          ]
        },
        listen: {
          title: "A literary podcast on unreliable narration",
          lines: [
            { who: "Host", text: "Why do so many contemporary novels use an unreliable narrator?" },
            { who: "Critic", text: "Ostensibly, it is a technical device. But I think the real reason is philosophical." },
            { who: "Host", text: "Go on." },
            { who: "Critic", text: "If you cannot trust the person telling the story, you have to construct the truth yourself. That's the experience the novel is imitating." },
            { who: "Host", text: "Some critics claim it is just a gimmick." },
            { who: "Critic", text: "They do claim that. But notice what is conspicuous in those reviews — they never quote the text." },
            { who: "Host", text: "So the omission is telling." },
            { who: "Critic", text: "Very. And that, incidentally, is exactly how you read an unreliable narrator." }
          ],
          q: [
            { q: "What does the critic say is the real reason for unreliable narrators?", o: ["A philosophical one", "A commercial one", "An accidental one"], a: 0, why: "\"I think the real reason is philosophical.\"" },
            { q: "What do some critics claim?", o: ["It is just a gimmick", "It is too difficult", "It is outdated"], a: 0, why: "\"Some critics claim it is just a gimmick.\"" },
            { q: "What is conspicuous in those reviews?", o: ["They never quote the text", "They are too long", "They praise everything"], a: 0, why: "\"they never quote the text.\"" }
          ]
        },
        read: {
          title: "What is not said",
          text: "The most revealing sentence in a corporate report is often the one that is missing. Consider a statement that a company is \"exploring strategic options\". Literally, this commits to nothing. Pragmatically, it signals that something significant is under way — most likely a sale — while preserving deniability if it does not happen. Readers who understand the implicature respond immediately; readers who do not hear only vagueness. This is why critical reading cannot stop at denotation. It must ask why this formulation was chosen over a plainer one, and what the choice protects. The same analysis applies to literature. When a narrator describes a room in elaborate detail but says nothing about the person sitting in it, the omission is not carelessness; it is characterisation. In both cases, the meaning is carried by the gap between what is stated and what the reader is invited to infer.",
          q: [
            { q: "What does 'exploring strategic options' usually signal?", o: ["Something significant, likely a sale", "Nothing at all", "A new product"], a: 0, why: "\"it signals that something significant is under way — most likely a sale.\"" },
            { q: "Why does the writer say critical reading must go beyond denotation?", o: ["To ask why a formulation was chosen", "To check grammar", "To count words"], a: 0, why: "\"It must ask why this formulation was chosen over a plainer one.\"" },
            { q: "What does an omission in a novel represent?", o: ["Characterisation", "Carelessness", "Editing error"], a: 0, why: "\"the omission is not carelessness; it is characterisation.\"" }
          ]
        },
        write: {
          prompt: "Write an analytical paragraph (8 sentences) interpreting a text, film or speech of your choice. Identify the subtext and support your reading with specific evidence.",
          tips: ["State your interpretation in the first sentence", "Support every claim with a specific detail", "Distinguish what is stated from what is implied"],
          sample: "In the final scene of the film, the director uses silence rather than dialogue to convey the collapse of the relationship. On the surface, the two characters simply share a meal. The subtext, however, is unmistakable: neither looks at the other, and the camera holds on the empty third chair for several seconds. The repetition of the chair is not incidental. It recalls an earlier scene in which the same chair was occupied, and the contrast does the emotional work that the script deliberately withholds. Some critics have claimed the ending is ambiguous. It is arguably equivocal rather than ambiguous: the characters' words are vague, but the visual grammar is entirely clear. What is conspicuous in those reviews is that they discuss dialogue almost exclusively, as though the film were a radio play. My reading is that the silence is the argument — the relationship ends not with a confrontation, but with an omission that both characters have quietly agreed to maintain."
        },
        speak: ["Explain what is implied by 'It's cold in here'.", "Identify the subtext of a message you received recently.", "Analyse the rhetoric of a speech you admire.", "Explain the difference between ambiguity and vagueness.", "Interpret the ending of a film you know."],
        ex: [
          { t: "mcq", q: "'The company claims the delay was unavoidable' — 'claims' suggests ___.", o: ["the speaker doubts it", "the speaker agrees", "the speaker wrote it"], a: 0, why: "\"Claims\" distances the speaker and implies doubt." },
          { t: "fill", q: "The measure was ___ designed to help consumers, though it did not.", o: ["ostensibly", "obviously", "originally"], a: 0, why: "\"Ostensibly\" means apparently but not really." },
          { t: "mcq", q: "'It's cold in here' most often functions as ___.", o: ["an indirect request", "a factual statement", "a complaint about heating"], a: 0, why: "It is a polite indirect request to close a window or door." },
          { t: "fill", q: "The statement was ___, committing to nothing.", o: ["equivocal", "explicit", "conspicuous"], a: 0, why: "\"Equivocal\" means deliberately unclear." },
          { t: "match", pairs: [["ethos", "credibility"], ["pathos", "emotion"], ["logos", "logic"], ["satire", "exposing through humour"]] },
          { t: "order", words: ["is", "What", "not", "said", "matters"], answer: "What is not said matters" },
          { t: "correct", wrong: "The report proves the policy failed.", answer: "The report suggests the policy may have failed.", why: "Reports rarely \"prove\"; use a hedged reporting verb." },
          { t: "translate", q: "Translate into English: ما لم يُقل هو الأهم", a: ["what is not said matters most", "the omission is the point"], why: "ما لم يُقل = \"what is not said\"." },
          { t: "listen", text: "They claim it is a gimmick, but notice what is conspicuous in those reviews.", q: "What does the speaker imply?", o: ["The reviews are unreliable", "The reviews are correct", "The reviews are too long"], a: 0, why: "The speaker uses \"conspicuous\" to cast doubt on the reviews." },
          { t: "write", prompt: "Write three sentences analysing the subtext of a message or scene.", keywords: ["subtext", "implies", "suggests"], minWords: 30 }
        ]
      },

      /* ---------------- UNIT 5 ---------------- */
      {
        n: 5,
        title: "Idiomatic Mastery",
        theme: "Advanced idioms, metaphors, binomials, proverbs and idiom variation",
        lessons: [
          { t: "Metaphorical Idioms", obj: "Use idioms built on metaphor naturally.", pts: ["We need to level the playing field.", "That opened a can of worms.", "He is skating on thin ice.", "Let's not put all our eggs in one basket.", "The ball is in their court now."] },
          { t: "Binomials and Trinomials", obj: "Learn fixed pairs and triples.", pts: ["Sick and tired, short and sweet, safe and sound.", "By and large, more or less, sooner or later.", "Time and again, part and parcel, touch and go.", "Fixed order cannot be reversed: 'black and white', not 'white and black'.", "These make speech sound natural and rhythmic."] },
          { t: "Proverbs and Sayings", obj: "Use proverbs appropriately.", pts: ["Actions speak louder than words.", "Don't count your chickens before they hatch.", "The early bird catches the worm.", "Too many cooks spoil the broth.", "Use sparingly — proverbs can sound preachy."] },
          { t: "Adapting and Varying Idioms", obj: "Play with idioms like a native speaker.", pts: ["'He's not the sharpest tool in the box.'", "Twisting an idiom signals fluency and humour.", "Journalists do this constantly in headlines.", "Only adapt idioms your listener will recognise.", "Misadaptation creates confusion, not wit."] },
          { t: "Idioms in Professional Context", obj: "Know which idioms are safe at work.", pts: ["Safe: on the same page, circle back, low-hanging fruit.", "Avoid: slang and regional idioms in international meetings.", "Idioms can exclude non-native colleagues.", "Explain or rephrase if you see confusion.", "Inclusive communication beats colourful communication."] }
        ],
        vocab: [
          { w: "level the playing field", ipa: "/ˈlevl ðə ˈpleɪɪŋ fiːld/", pos: "idiom", def: "To create fair conditions for everyone.", ar: "يحقق تكافؤ الفرص", ex: "The reform aims to level the playing field." },
          { w: "open a can of worms", ipa: "/ˈəʊpən ə kæn əv wɜːmz/", pos: "idiom", def: "To create a complicated problem.", ar: "يفتح بابا لمشاكل", ex: "That question opens a can of worms." },
          { w: "skate on thin ice", ipa: "/skeɪt ɒn θɪn aɪs/", pos: "idiom", def: "To be in a risky position.", ar: "يسير على حبل رفيع", ex: "He is skating on thin ice with that client." },
          { w: "the ball is in their court", ipa: "/ðə bɔːl ɪz ɪn ðeə kɔːt/", pos: "idiom", def: "It is their turn to act.", ar: "القرار الآن بيدهم", ex: "We've made the offer — the ball is in their court." },
          { w: "by and large", ipa: "/baɪ ənd lɑːdʒ/", pos: "phrase", def: "Generally, on the whole.", ar: "بشكل عام", ex: "By and large, the policy has worked." },
          { w: "part and parcel", ipa: "/pɑːt ənd ˈpɑːsl/", pos: "phrase", def: "An essential part of something.", ar: "جزء لا يتجزأ", ex: "Stress is part and parcel of the job." },
          { w: "touch and go", ipa: "/tʌtʃ ənd ɡəʊ/", pos: "phrase", def: "Very uncertain, especially about a result.", ar: "على حد السيف", ex: "It was touch and go for a while." },
          { w: "on the same page", ipa: "/ɒn ðə seɪm peɪdʒ/", pos: "idiom", def: "In agreement, sharing the same understanding.", ar: "متفقون", ex: "Let's make sure we're on the same page." },
          { w: "low-hanging fruit", ipa: "/ləʊ ˈhæŋɪŋ fruːt/", pos: "idiom", def: "An easy first achievement.", ar: "أسهل الإنجازات", ex: "Let's start with the low-hanging fruit." },
          { w: "bite the bullet", ipa: "/baɪt ðə ˈbʊlɪt/", pos: "idiom", def: "To accept something difficult and get it over with.", ar: "يتحمل الأمر الصعب", ex: "We'll have to bite the bullet and raise prices." }
        ],
        gram: {
          title: "Fixed expressions: frozen forms and variation",
          explain: {
            en: "Many idiomatic expressions are frozen: their word order, articles and prepositions cannot be changed. \"By and large\" is never \"large and by\". Yet some idioms tolerate deliberate variation for effect — a marker of advanced fluency. Learn the frozen form first, then vary it knowingly.",
            ar: "كثير من التعابير الاصطلاحية جامدة: لا يمكن تغيير ترتيبها أو أدواتها. لكن بعضها يقبل التغيير المقصود لغرض بلاغي، وهذا مؤشر على الطلاقة المتقدمة.",
            fr: "Beaucoup d'expressions idiomatiques sont figées ; certaines tolèrent une variation délibérée, marque d'une maîtrise avancée."
          },
          formula: ['Frozen: <span class="fx-k">by and large</span> · <span class="fx-k">part and parcel</span> · <span class="fx-k">touch and go</span>', 'Frozen with articles: <span class="fx-k">on the same page</span> · <span class="fx-k">the ball is in their court</span>', 'Deliberate variation: <span class="fx-k">not the sharpest tool in the box</span>', 'Register check: <span class="fx-n">safe at work vs. too colloquial for international meetings</span>'],
          examples: [
            { en: "By and large, the reforms have achieved their aims.", ar: "بشكل عام، حققت الإصلاحات أهدافها." },
            { en: "Uncertainty is part and parcel of investment.", ar: "عدم اليقين جزء لا يتجزأ من الاستثمار." },
            { en: "We're on the same page about the priorities.", ar: "نحن متفقون على الأولويات." },
            { en: "It was touch and go whether the deal would survive.", ar: "كان الأمر على حد السيف فيما إذا كانت الصفقة ستنجو." }
          ],
          mistakes: [
            { w: "Large and by, the policy worked.", r: "By and large, the policy worked.", why: "Binomials have a fixed order." },
            { w: "We are on same page.", r: "We are on the same page.", why: "The definite article is part of the fixed expression." },
            { w: "He kicked the bucket at work today.", r: "He was let go today.", why: "\"Kick the bucket\" is far too informal and means \"die\"." }
          ]
        },
        listen: {
          title: "An informal strategy chat",
          lines: [
            { who: "Sara", text: "So where are we with the expansion plan?" },
            { who: "Omar", text: "By and large, it's on track. But honestly, it's been touch and go for a couple of weeks." },
            { who: "Sara", text: "What's the sticking point?" },
            { who: "Omar", text: "Funding. And if we push too hard, we open a can of worms with the regulator." },
            { who: "Sara", text: "Right. Should we start with the low-hanging fruit instead?" },
            { who: "Omar", text: "I'd rather bite the bullet now. If we delay, we're skating on thin ice." },
            { who: "Sara", text: "Fair. Let's make sure the board is on the same page before we commit." },
            { who: "Omar", text: "Agreed. I'll draft a one-pager tonight and the ball will be in their court by Thursday." }
          ],
          q: [
            { q: "How is the expansion plan progressing?", o: ["On track but touch and go", "Failing badly", "Already complete"], a: 0, why: "\"By and large, it's on track. But ... it's been touch and go.\"" },
            { q: "What is the sticking point?", o: ["Funding", "Staffing", "Marketing"], a: 0, why: "\"Funding.\"" },
            { q: "What does Omar prefer to do?", o: ["Bite the bullet now", "Start with low-hanging fruit", "Delay the plan"], a: 0, why: "\"I'd rather bite the bullet now.\"" }
          ]
        },
        read: {
          title: "When idioms exclude",
          text: "Idioms are often presented as the ultimate proof of fluency, but in international workplaces they can do the opposite. A phrase like \"we need to circle back on the low-hanging fruit\" is instantly clear to a native speaker and almost opaque to a competent non-native colleague. The result is a subtle form of exclusion: the native speaker sounds confident, and the non-native speaker, who may have stronger technical expertise, is quietly positioned as less competent. This is not a trivial matter. Research on multinational teams suggests that communication breakdowns are more often caused by idiomatic density than by grammatical error. The practical implication is not that idioms should be avoided altogether, but that they should be used with awareness. By and large, the most effective international communicators are those who can move between registers at will — plain where clarity matters, idiomatic where the audience shares the reference.",
          q: [
            { q: "What effect can idioms have in international workplaces?", o: ["They can exclude competent non-native colleagues", "They always help understanding", "They have no effect"], a: 0, why: "\"The result is a subtle form of exclusion.\"" },
            { q: "What does research on multinational teams suggest?", o: ["Idiomatic density causes more breakdowns than grammar errors", "Grammar is the main problem", "Idioms help teams bond"], a: 0, why: "\"communication breakdowns are more often caused by idiomatic density than by grammatical error.\"" },
            { q: "What is the writer's recommendation?", o: ["Use idioms with awareness and move between registers", "Avoid idioms completely", "Use as many idioms as possible"], a: 0, why: "\"they should be used with awareness ... move between registers at will.\"" }
          ]
        },
        write: {
          prompt: "Write a short opinion piece (8 sentences) on whether idioms should be taught to learners. Use at least five idioms or binomials yourself.",
          tips: ["Take a clear position", "Use idioms naturally, not decoratively", "Acknowledge the opposing view"],
          sample: "Idioms are part and parcel of any language, and by and large, learners are right to want them. A speaker who can say that something is touch and go, or that the ball is in someone else's court, sounds natural in a way that grammar alone cannot achieve. However, there is a can of worms here that most textbooks ignore. Idioms are culturally specific, and using them in the wrong context can be worse than avoiding them entirely. I have seen competent colleagues skate on thin ice simply because they misunderstood a casual metaphor in a meeting. My position is that idioms should be taught, but taught alongside a clear sense of register and audience. Learners should know which expressions are safe in international professional settings and which are best kept for informal conversation. In short: learn them, but do not lean on them.",
        },
        speak: ["Use three idioms about risk and decisions.", "Explain the meaning of 'by and large'.", "Adapt an idiom for humorous effect.", "Discuss when idioms are inappropriate.", "Use two binomials in one answer."],
        ex: [
          { t: "mcq", q: "We need to make sure everyone is on the ___ page.", o: ["same", "equal", "one"], a: 0, why: 'The fixed expression is "on the same page".' },
            { t: "fill", q: "___ and large, the project has been a success.", o: ["By", "In", "On"], a: 0, why: 'The binomial is "by and large".' },
            { t: "mcq", q: "It was ___ and go for a while, but we survived.", o: ["touch", "touching", "touched"], a: 0, why: 'The fixed phrase is "touch and go".' },
            { t: "fill", q: "Stress is part and ___ of the job.", o: ["parcel", "package", "part"], a: 0, why: 'The binomial is "part and parcel".' },
            { t: "match", pairs: [["level the playing field", "create fair conditions"], ["bite the bullet", "accept something difficult"], ["low-hanging fruit", "an easy first win"], ["open a can of worms", "create a complicated problem"]] },
          { t: "order", words: ["the", "is", "ball", "The", "in", "their", "court"], answer: "The ball is in their court" },
          { t: "correct", wrong: "Large and by, the policy worked.", answer: "By and large, the policy worked.", why: "Binomials have a fixed order that cannot be reversed." },
          { t: "translate", q: "Translate into English: القرار الآن بيدهم", a: ["the ball is in their court"], why: "القرار بيدهم = \"The ball is in their court\"." },
          { t: "listen", text: "By and large it is on track, but it has been touch and go for two weeks.", q: "How has the situation been?", o: ["Uncertain but generally on track", "A complete failure", "Ahead of schedule"], a: 0, why: "\"By and large it is on track, but it has been touch and go.\"" },
          { t: "write", prompt: "Write three sentences using idioms about decisions and risk.", keywords: ["bullet", "court", "ice", "fruit"], minWords: 26 }
        ]
      },

      /* ---------------- UNIT 6 ---------------- */
      {
        n: 6,
        title: "Natural Expressions & Colloquial English",
        theme: "Slang, colloquialism, regional variation, spoken grammar",
        lessons: [
          { t: "Colloquial Vocabulary", obj: "Understand and use informal vocabulary.", pts: ["'I'm knackered' = I'm very tired.", "'That's a bit dodgy' = that seems unreliable.", "'He's loaded' = he's very rich.", "'I can't be bothered' = I don't want to make the effort.", "Recognise these before producing them."] },
          { t: "Spoken Grammar", obj: "Understand structures used only in speech.", pts: ["Heads: 'That film — I didn't like it.'", "Tails: 'It's a nice place, this.'", "Ellipsis: 'Want a coffee?' / 'Seen him lately?'", "Vague language: 'sort of', 'and that', 'or something'.", "Spoken grammar is not incorrect; it is a different system."] },
          { t: "Regional Variation", obj: "Recognise differences across English-speaking regions.", pts: ["UK: 'rubbish', 'mate', 'cheers'.", "US: 'trash', 'buddy', 'you're welcome'.", "Australia: 'arvo' (afternoon), 'heaps'.", "Ireland: 'craic', 'grand'.", "Understanding beats imitating."] },
          { t: "Fillers, Hedges and Softeners", obj: "Use the small words that make speech natural.", pts: ["Fillers: 'you know', 'like', 'I mean', 'well'.", "Hedges: 'sort of', 'a bit', 'kind of', 'more or less'.", "Softeners: 'just', 'a little', 'if that's okay'.", "These signal fluency, not weakness.", "Overuse in writing is a serious error."] },
          { t: "Formality Clines", obj: "Move along the formality scale deliberately.", pts: ["Request: 'I was wondering if you might...' → 'Could you...' → 'Can you...' → 'Give us a hand?'", "Apology: 'I sincerely apologise' → 'I'm really sorry' → 'My bad'.", "Choose based on relationship and stakes.", "Native speakers shift constantly without noticing.", "Deliberate control is what distinguishes advanced users."] }
        ],
        vocab: [
          { w: "knackered", ipa: "/ˈnækəd/", pos: "adjective", def: "Extremely tired (informal, UK).", ar: "منهك جدا (عامية)", ex: "I'm absolutely knackered." },
          { w: "dodgy", ipa: "/ˈdɒdʒi/", pos: "adjective", def: "Unreliable or suspicious (informal, UK).", ar: "مشبوه", ex: "That website looks a bit dodgy." },
          { w: "bothered", ipa: "/ˈbɒðəd/", pos: "adjective", def: "Willing to make an effort (informal).", ar: "مهتم/مستعد للجهد", ex: "I can't be bothered to cook." },
          { w: "crack on", ipa: "/kræk ɒn/", pos: "phrasal verb", def: "To continue working quickly (informal, UK).", ar: "يواصل العمل", ex: "Let's crack on with it." },
          { w: "chuffed", ipa: "/tʃʌft/", pos: "adjective", def: "Very pleased (informal, UK).", ar: "مسرور جدا", ex: "She was chuffed with the result." },
          { w: "hang on", ipa: "/hæŋ ɒn/", pos: "phrasal verb", def: "To wait (informal).", ar: "ينتظر", ex: "Hang on a second." },
          { w: "no worries", ipa: "/nəʊ ˈwʌriz/", pos: "phrase", def: "It's fine; no problem (informal).", ar: "لا مشكلة", ex: "No worries at all." },
          { w: "fair enough", ipa: "/feə ɪˈnʌf/", pos: "phrase", def: "That is reasonable (informal).", ar: "كلام معقول", ex: "Fair enough, I'll do it." },
          { w: "heaps", ipa: "/hiːps/", pos: "adverb", def: "A lot (informal, Australian).", ar: "كثيرا", ex: "Thanks heaps!" },
          { w: "grand", ipa: "/ɡrænd/", pos: "adjective", def: "Fine, good (informal, Irish).", ar: "جيد تماما", ex: "That's grand, thanks." }
        ],
        gram: {
          title: "Spoken grammar: heads, tails and ellipsis",
          explain: {
            en: "Spoken English uses structures that never appear in writing: fronted heads (\"That manager, she's brilliant\"), tails (\"It's a great city, London\"), and heavy ellipsis (\"Want one?\"). These are systematic, not sloppy, and they make speech easier to process in real time.",
            ar: "الإنجليزية المنطوقة تستخدم تراكيب لا تظهر في الكتابة: المقدمات (That manager, she's brilliant) والذيل (It's a great city, London) والحذف (Want one?). وهي منهجية لا عشوائية.",
            fr: "L'oral utilise des structures absentes de l'écrit : heads, tails, ellipse."
          },
          formula: ['Head: <span class="fx-k">That film —</span> I didn\'t like it.', 'Tail: It\'s a nice place, <span class="fx-k">this</span>.', 'Ellipsis: <span class="fx-k">(Do you)</span> want a coffee? · <span class="fx-k">(Have you)</span> seen him?', 'Vague category: <span class="fx-k">and that / or something / and stuff</span>'],
          examples: [
            { en: "My brother, he's moved to Berlin.", ar: "أخي، انتقل إلى برلين." },
            { en: "It's a great city, London.", ar: "إنها مدينة رائعة، لندن." },
            { en: "Fancy a bite or something?", ar: "هل ترغب في شيء نأكله؟" },
            { en: "Seen the news today?", ar: "هل رأيت الأخبار اليوم؟" }
          ],
          mistakes: [
            { w: "Using spoken grammar in formal writing.", r: "Keeping heads, tails and ellipsis out of academic prose.", why: "These structures are specific to speech." },
            { w: "Assuming slang from one region works everywhere.", r: "Recognising regional slang without necessarily using it.", why: "Regional expressions confuse other audiences." },
            { w: "Overusing fillers in prepared speech.", r: "Using fillers only when genuinely planning.", why: "Excessive fillers undermine perceived competence." }
          ]
        },
        listen: {
          title: "Two friends catching up",
          lines: [
            { who: "Dan", text: "Alright? You look knackered." },
            { who: "Meera", text: "I am. I've been cracking on with that report all night. Absolutely shattered." },
            { who: "Dan", text: "Fancy a coffee or something?" },
            { who: "Meera", text: "Go on then. Hang on, I'll grab my coat." },
            { who: "Dan", text: "So how's the new flat?" },
            { who: "Meera", text: "It's nice, this place. Bit pricey though. The landlord's a bit dodgy, to be honest." },
            { who: "Dan", text: "Fair enough. Want me to have a look at the contract?" },
            { who: "Meera", text: "Would you? That'd be grand. Thanks heaps." }
          ],
          q: [
            { q: "Why does Meera look tired?", o: ["She worked on a report all night", "She was at a party", "She travelled"], a: 0, why: "\"I've been cracking on with that report all night.\"" },
            { q: "What does Meera say about the landlord?", o: ["He seems a bit dodgy", "He is very kind", "He is abroad"], a: 0, why: "\"The landlord's a bit dodgy, to be honest.\"" },
            { q: "What does Dan offer to do?", o: ["Look at the contract", "Lend her money", "Move her furniture"], a: 0, why: "\"Want me to have a look at the contract?\"" }
          ]
        },
        read: {
          title: "In defence of 'like'",
          text: "Few words attract as much criticism as the filler \"like\". Purists describe it as evidence of declining standards, and schools have campaigned against it for decades. The linguistic evidence, however, tells a more interesting story. In spontaneous speech, \"like\" performs several distinct functions: it signals approximation (\"it was like twenty minutes\"), introduces reported speech (\"and she was like, no way\"), and marks a speaker's stance towards what follows. Far from being random, its use follows consistent patterns that linguists can predict. What critics are really objecting to is not incoherence but informality — and informality, in the right context, is a communicative resource rather than a defect. The genuine error is using such markers in writing, where they serve no purpose and disrupt the reader's flow. Speech and writing are different systems, and judging one by the standards of the other is a category mistake.",
          q: [
            { q: "What functions does 'like' perform in speech?", o: ["Approximation, reported speech and stance marking", "Only filler", "Only comparison"], a: 0, why: "The text lists approximation, reported speech and stance marking." },
            { q: "What are critics actually objecting to?", o: ["Informality", "Incoherence", "Grammar errors"], a: 0, why: "\"What critics are really objecting to is not incoherence but informality.\"" },
            { q: "What is the genuine error according to the writer?", o: ["Using these markers in writing", "Using them in speech", "Never using them"], a: 0, why: "\"The genuine error is using such markers in writing.\"" }
          ]
        },
        write: {
          prompt: "Write the same message twice (3–4 sentences each): once to a close friend (very informal, with colloquial expressions) and once to a senior colleague (formal). Then write one sentence explaining your choices.",
          tips: ["Use colloquial vocabulary in the informal version", "Use hedging and formal structures in the formal version", "Explain what changed and why"],
          sample: "TO A FRIEND: Hey, quick one — I'm absolutely knackered and can't be bothered with the pub tonight. Mind if we do it Saturday instead? Sorry to bail last minute. TO A SENIOR COLLEAGUE: Dear Ms Farouk, I hope you don't mind me writing at short notice. I would like to propose moving our meeting from this evening to Saturday, as I am not currently at my best after a demanding week. I apologise for any inconvenience this causes and am happy to work around your availability.\n\nWhat changed is register, not content: the informal version uses colloquial lexis and ellipsis, while the formal version uses hedged modality, a polite opener and an explicit apology."
        },
        speak: ["Explain what 'I can't be bothered' means.", "Say the same thing formally and informally.", "Discuss whether slang should be taught.", "Use two fillers naturally in an answer.", "Explain the difference between spoken and written grammar."],
        ex: [
          { t: "mcq", q: "'I'm knackered' means ___.", o: ["I'm very tired", "I'm hungry", "I'm late"], a: 0, why: "\"Knackered\" is informal UK English for extremely tired." },
          { t: "fill", q: "I can't be ___ to cook tonight.", o: ["bothered", "bothering", "bother"], a: 0, why: 'The phrase is "can\'t be bothered".' },
          { t: "mcq", q: "In spoken grammar, 'It's a nice place, this' is an example of ___.", o: ["a tail", "a head", "ellipsis"], a: 0, why: "The noun is repeated at the end, which is a tail." },
          { t: "fill", q: "___ on, I'll be with you in a second.", o: ["Hang", "Hold on to", "Stand"], a: 0, why: 'The informal phrase is "hang on" (wait).' },
          { t: "match", pairs: [["chuffed", "very pleased"], ["dodgy", "unreliable"], ["heaps", "a lot"], ["grand", "fine, good"]] },
          { t: "order", words: ["a", "Fancy", "bite", "or", "something"], answer: "Fancy a bite or something" },
          { t: "correct", wrong: "The report was, like, totally dodgy and stuff, so I was like no way.", answer: "The report contained several inconsistencies, so I rejected it.", why: "Spoken markers have no place in formal writing." },
          { t: "translate", q: "Translate into English (informal): لا مشكلة", a: ["no worries", "no problem"], why: "لا مشكلة = \"No worries\" (informal)." },
          { t: "listen", text: "Fair enough. I'll crack on with it and give you a shout later.", q: "What will the speaker do?", o: ["Continue working and contact later", "Stop working entirely", "Cancel the task"], a: 0, why: "\"I'll crack on with it and give you a shout later.\"" },
          { t: "write", prompt: "Write the same request informally and formally in two sentences.", keywords: ["could you", "any chance", "would you mind"], minWords: 20 }
        ]
      },

      /* ---------------- UNIT 7 ---------------- */
      {
        n: 7,
        title: "Complex Listening: Lectures & Podcasts",
        theme: "Extended discourse, academic lectures, rapid debate, synthesis",
        lessons: [
          { t: "Following a Lecture", obj: "Track structure across a long talk.", pts: ["Lectures usually announce their structure early.", "Listen for the roadmap: 'I will address three questions'.", "Signposts mark transitions: 'having said that', 'turning now to'.", "Examples follow abstract claims; note both.", "The conclusion often restates the thesis in one sentence."] },
          { t: "Following Rapid Debate", obj: "Keep up with overlapping speech.", pts: ["Speakers interrupt to disagree, not to be rude.", "Track who holds the floor and who is being rebutted.", "Notice concession markers: 'I take your point, but'.", "Rapid turn-taking hides the structure; listen for stance.", "Summarise each speaker's position in one line."] },
          { t: "Synthesis and Note-Making", obj: "Combine multiple sources while listening.", pts: ["Note the claim, the evidence and the source separately.", "Mark agreement and disagreement between sources.", "Use symbols: + for supporting, − for contradicting, ? for unclear.", "Write the citation as you go; you will not remember it.", "Synthesise after listening, not during."] },
          { t: "Detecting Bias and Framing", obj: "Hear how speakers frame issues.", pts: ["Word choice reveals framing: 'tax burden' vs 'public investment'.", "What is foregrounded matters as much as what is said.", "Notice which voices are quoted and which are absent.", "Numbers can be framed: 'up 300%' vs 'up from 1 to 4'.", "Ask what the speaker would have to say to change their own conclusion."] },
          { t: "Listening for Evaluation", obj: "Hear how evidence is assessed.", pts: ["'That's compelling' endorses; 'that's suggestive' hedges.", "'Correlation' vs 'causation' distinctions are made explicitly.", "Speakers signal confidence through modality.", "Notice when a speaker concedes a limitation.", "Evaluating evidence as you listen is the core academic skill."] }
        ],
        vocab: [
          { w: "synthesis", ipa: "/ˈsɪnθəsɪs/", pos: "noun", def: "Combining ideas from different sources.", ar: "تركيب / تجميع", ex: "The essay offers a synthesis of both views." },
          { w: "framing", ipa: "/ˈfreɪmɪŋ/", pos: "noun", def: "The way an issue is presented to shape perception.", ar: "تأطير", ex: "The framing of the debate mattered." },
          { w: "rhetorical", ipa: "/rɪˈtɒrɪkl/", pos: "adjective", def: "Relating to persuasive language.", ar: "بلاغي", ex: "It was a rhetorical question." },
          { w: "concede", ipa: "/kənˈsiːd/", pos: "verb", def: "To admit a point during an argument.", ar: "يسلّم بـ", ex: "She conceded the point gracefully." },
          { w: "foreground", ipa: "/ˈfɔːɡraʊnd/", pos: "verb", def: "To make something the most prominent element.", ar: "يبرز", ex: "The report foregrounds cost over quality." },
          { w: "caveat", ipa: "/ˈkæviæt/", pos: "noun", def: "A warning or condition attached to a claim.", ar: "تحفظ", ex: "He added an important caveat." },
          { w: "suggestive", ipa: "/səˈdʒestɪv/", pos: "adjective", def: "Hinting at something without proving it.", ar: "مُلمّح", ex: "The evidence is suggestive but not conclusive." },
          { w: "salient", ipa: "/ˈseɪliənt/", pos: "adjective", def: "Most noticeable or important.", ar: "بارز", ex: "The salient point is the cost." },
          { w: "inconclusive", ipa: "/ˌɪnkənˈkluːsɪv/", pos: "adjective", def: "Not leading to a clear conclusion.", ar: "غير حاسم", ex: "The results were inconclusive." },
          { w: "dissonance", ipa: "/ˈdɪsənəns/", pos: "noun", def: "Lack of agreement or harmony.", ar: "تنافر", ex: "There is a dissonance between the two accounts." }
        ],
        gram: {
          title: "Reporting and evaluating sources in speech",
          explain: {
            en: "In lectures and seminars, you constantly attribute and evaluate: \"Smith argues X, whereas Jones contends Y, though the evidence is suggestive rather than conclusive.\" Mastering this evaluative layer is what turns listening from comprehension into participation.",
            ar: "في المحاضرات تُسند الآراء وتقيّمها باستمرار: Smith argues X, whereas Jones contends Y. إتقان هذه الطبقة التقييمية هو ما يحول الاستماع إلى مشاركة.",
            fr: "En cours, on attribue et on évalue constamment : « Smith argues X, whereas Jones contends Y »."
          },
          formula: ['Attribution: <span class="fx-k">argues / contends / maintains / posits / observes</span>', 'Evaluation: <span class="fx-k">compelling / suggestive / inconclusive / salient / questionable</span>', 'Contrast: <span class="fx-k">whereas / conversely / by contrast / while</span>', 'Caveat: <span class="fx-k">though / albeit / with the caveat that</span>'],
          examples: [
            { en: "Smith argues that the effect is causal, whereas Jones contends it is correlational.", ar: "يرى سميث أن الأثر سببي، بينما يرى جونز أنه ارتباطي." },
            { en: "The evidence is suggestive rather than conclusive.", ar: "الأدلة موحية لا حاسمة." },
            { en: "He posits a mechanism, though the evidence is thin.", ar: "يطرح آلية، وإن كانت الأدلة ضعيفة." },
            { en: "Conversely, the second study found no effect.", ar: "وعلى العكس، لم تجد الدراسة الثانية أي أثر." }
          ],
          mistakes: [
            { w: "Treating every speaker as equally credible.", r: "Evaluating the strength of the evidence presented.", why: "Advanced listening includes judging reliability." },
            { w: "Writing full sentences while listening.", r: "Noting claims, evidence and sources separately.", why: "You cannot write and listen simultaneously." },
            { w: "Assuming a confident tone means strong evidence.", r: "Attending to the hedging and the caveats.", why: "Confidence and evidence are independent." }
          ]
        },
        listen: {
          title: "A lecture on attention",
          lines: [
            { who: "Lecturer", text: "Today I want to address one question: why does sustained attention feel harder than it did twenty years ago?" },
            { who: "Lecturer", text: "I will consider three explanations: technological, social and physiological. Let me take the technological one first." },
            { who: "Lecturer", text: "The most cited study, by Ophir and colleagues, found that heavy media multitaskers performed worse on task-switching. That finding is compelling, though it has been criticised for its sample size." },
            { who: "Lecturer", text: "Turning now to the social explanation. Here the evidence is more suggestive than conclusive." },
            { who: "Lecturer", text: "Some researchers contend that norms of availability have shifted. I find this plausible, but I would add a caveat: self-report data is notoriously unreliable." },
            { who: "Lecturer", text: "The physiological account, conversely, is the most controversial. It posits changes in reward circuitry, though the evidence remains thin." },
            { who: "Lecturer", text: "So, having said that, where does this leave us? Not with a single cause, I think." },
            { who: "Lecturer", text: "The salient point is that all three mechanisms may interact, and that is precisely what most studies fail to model." }
          ],
          q: [
            { q: "What three explanations does the lecturer consider?", o: ["Technological, social and physiological", "Economic, political and legal", "Historical and cultural only"], a: 0, why: "\"three explanations: technological, social and physiological.\"" },
            { q: "What criticism does the lecturer mention of the Ophir study?", o: ["Its sample size", "Its methods were fraudulent", "It was never published"], a: 0, why: "\"it has been criticised for its sample size.\"" },
            { q: "What is the lecturer's concluding point?", o: ["The three mechanisms may interact and studies fail to model this", "Technology is the only cause", "The question is unanswerable"], a: 0, why: "\"all three mechanisms may interact, and that is precisely what most studies fail to model.\"" }
          ]
        },
        read: {
          title: "Transcript: a debate on universal basic income",
          text: "SPEAKER A: The evidence from the Finnish pilot is compelling. Recipients reported better well-being and no reduction in employment. SPEAKER B: I take your point, but the Finnish trial was small and time-limited. It cannot tell us about long-term effects on labour supply. SPEAKER A: That is a fair caveat. But notice what the critics never mention: the trial also reduced stress-related health visits by a measurable margin. SPEAKER B: I would want to see that replicated. And I would add that a national scheme is a different question from a local pilot. SPEAKER A: Conceded. My position is not that the evidence is conclusive; it is that it is suggestive enough to justify further trials. SPEAKER B: On that we agree. Where we differ is on whether the burden of proof lies with the proponents or the sceptics.",
          q: [
            { q: "What did the Finnish trial find?", o: ["Better well-being with no fall in employment", "Employment collapsed", "No effect at all"], a: 0, why: "\"Recipients reported better well-being and no reduction in employment.\"" },
            { q: "What is Speaker B's objection?", o: ["The trial was small and time-limited", "The trial was too expensive", "The trial was never run"], a: 0, why: "\"the Finnish trial was small and time-limited.\"" },
            { q: "Where do the speakers agree?", o: ["That the evidence justifies further trials", "That UBI should be introduced now", "That the evidence is conclusive"], a: 0, why: "\"it is suggestive enough to justify further trials\" and Speaker B says \"On that we agree.\"" }
          ]
        },
        write: {
          prompt: "Write a synthesis paragraph (8 sentences) comparing two positions from a lecture or debate you have heard. Include attribution, evaluation and one caveat.",
          tips: ["Attribute clearly with reporting verbs", "Evaluate the strength of each piece of evidence", "End with your own position"],
          sample: "The lecture presented three explanations for declining attention, and they differ considerably in the strength of their evidence. The technological account rests on the Ophir study, which found that heavy media multitaskers performed worse on task-switching. That finding is compelling, although the sample was criticised as unrepresentative. The social explanation, by contrast, is more suggestive than conclusive: researchers contend that norms of availability have shifted, but the supporting data is largely self-reported. The physiological account is the most controversial of the three, positing changes in reward circuitry on evidence that remains thin. What is salient, however, is the lecturer's final caveat: all three mechanisms may interact, and most studies model only one at a time. My own position is that the interaction hypothesis is the most plausible and the least tested. Consequently, the most useful research would not ask which explanation is correct, but how the three reinforce one another."
        },
        speak: ["Summarise a lecture's three main points.", "Compare two speakers' positions in one minute.", "Evaluate the strength of a piece of evidence you heard.", "Identify the framing of a news report.", "Give a caveat to a claim you made."],
        ex: [
          { t: "mcq", q: "'The evidence is suggestive' means ___.", o: ["it hints at something but does not prove it", "it proves it conclusively", "it is worthless"], a: 0, why: "\"Suggestive\" means hinting without proving." },
          { t: "fill", q: "The most ___ point is that the mechanisms interact.", o: ["salient", "silent", "saliently"], a: 0, why: "An adjective is needed: \"salient\" means most noticeable." },
          { t: "mcq", q: "A 'caveat' is ___.", o: ["a warning or condition attached to a claim", "a conclusion", "an example"], a: 0, why: "A caveat qualifies a claim." },
          { t: "fill", q: "She ___ the point gracefully during the discussion.", o: ["conceded", "concealed", "conceived"], a: 0, why: "\"Conceded\" means admitted the point." },
          { t: "match", pairs: [["compelling", "very convincing"], ["inconclusive", "no clear result"], ["suggestive", "hinting, not proving"], ["salient", "most noticeable"]] },
          { t: "order", words: ["argues", "Smith", "that", "effect", "the", "is", "causal"], answer: "Smith argues that the effect is causal" },
          { t: "correct", wrong: "The study proves that multitasking damages the brain permanently.", answer: "The study suggests an association between heavy multitasking and task-switching performance.", why: "Studies rarely prove; report the measured association accurately." },
          { t: "translate", q: "Translate into English: الأدلة موحية لا حاسمة", a: ["the evidence is suggestive rather than conclusive"], why: "موحية = \"suggestive\"." },
          { t: "listen", text: "I take your point, but the trial was small and time-limited, so it cannot tell us about long-term effects.", q: "What is the objection?", o: ["The trial was small and time-limited", "The trial was fraudulent", "The trial was too long"], a: 0, why: "\"the trial was small and time-limited.\"" },
          { t: "write", prompt: "Write three sentences synthesising two contrasting sources with attribution and evaluation.", keywords: ["argues", "whereas", "evidence"], minWords: 34 }
        ]
      },

      /* ---------------- UNIT 8 ---------------- */
      {
        n: 8,
        title: "Advanced Writing: Reports & Essays",
        theme: "Long-form structure, argumentation, cohesion, revision",
        lessons: [
          { t: "Long-Form Structure", obj: "Plan a sustained piece of writing.", pts: ["Plan before writing: outline the argument, not the topic.", "Each section must advance the thesis, not repeat it.", "Use signposting paragraphs to orient the reader.", "Vary paragraph length deliberately.", "The conclusion must add synthesis, not summary alone."] },
          { t: "Building an Argument Across Sections", obj: "Develop an argument at scale.", pts: ["Introduce the strongest objection early, not late.", "Each section should build on the previous one.", "Use transitions that state the logical relationship.", "Anticipate the reader's next question.", "Return to your thesis in each section, reframed."] },
          { t: "Cohesion at Scale", obj: "Keep long texts readable.", pts: ["Lexical chains maintain topic continuity across paragraphs.", "Thematic progression: given information first, new information last.", "Vary sentence length to control pace.", "Avoid excessive nominalisation; it drains energy.", "Read aloud to test flow."] },
          { t: "Report Writing", obj: "Produce structured professional reports.", pts: ["Standard structure: summary, introduction, findings, analysis, recommendations, appendix.", "Findings are neutral; analysis interprets them.", "Recommendations must be actionable and specific.", "Number sections for reference.", "The summary is the only part most readers will read."] },
          { t: "Revision as Craft", obj: "Revise systematically at three levels.", pts: ["Structural revision: is the argument sound and ordered?", "Paragraph revision: does each paragraph do one job?", "Sentence revision: is every sentence necessary?", "Edit for precision last, never first.", "Good writing is rewritten, not written."] }
        ],
        vocab: [
          { w: "premise", ipa: "/ˈpremɪs/", pos: "noun", def: "A proposition on which an argument rests.", ar: "مقدمة منطقية", ex: "The premise is questionable." },
          { w: "treatise", ipa: "/ˈtriːtɪs/", pos: "noun", def: "A long, formal written work on a subject.", ar: "رسالة / مؤلَّف", ex: "He wrote a treatise on taxation." },
          { w: "discursive", ipa: "/dɪsˈkɜːsɪv/", pos: "adjective", def: "Moving from topic to topic rather than staying focused.", ar: "استطرادي", ex: "The chapter is too discursive." },
          { w: "succinct", ipa: "/səkˈsɪŋkt/", pos: "adjective", def: "Expressed briefly and clearly.", ar: "موجز", ex: "Keep the summary succinct." },
          { w: "paradigm", ipa: "/ˈpærədaɪm/", pos: "noun", def: "A model or framework.", ar: "نموذج", ex: "A new paradigm emerged." },
          { w: "synthesis", ipa: "/ˈsɪnθəsɪs/", pos: "noun", def: "The combination of ideas into a coherent whole.", ar: "تركيب", ex: "The conclusion offers a synthesis." },
          { w: "articulate", ipa: "/ɑːˈtɪkjuleɪt/", pos: "verb", def: "To express clearly.", ar: "يصوغ بوضوح", ex: "She articulated the argument precisely." },
          { w: "incisive", ipa: "/ɪnˈsaɪsɪv/", pos: "adjective", def: "Clear, sharp and direct.", ar: "ثاقب", ex: "An incisive analysis." },
          { w: "peripheral", ipa: "/pəˈrɪfərəl/", pos: "adjective", def: "Of secondary importance.", ar: "ثانوي / هامشي", ex: "That point is peripheral." },
          { w: "substantive", ipa: "/səbˈstæntɪv/", pos: "adjective", def: "Important and meaningful.", ar: "جوهري", ex: "There were no substantive objections." }
        ],
        gram: {
          title: "Thematic progression and information structure",
          explain: {
            en: "Advanced writing controls information flow. The general pattern is given-to-new: begin with what the reader already knows, end with the new information that carries the weight. Cleft sentences, passive structures and fronting all exist partly to manage this ordering.",
            ar: "الكتابة المتقدمة تتحكم في تدفق المعلومات: ابدأ بالمعلومة المعروفة وانتهِ بالمعلومة الجديدة. والجمل الشقّية والمبني للمجهول والتقديم تُستخدم جزئيا لإدارة هذا الترتيب.",
            fr: "L'écriture avancée gère le flux d'information : connu d'abord, nouveau ensuite."
          },
          formula: ['Given → New: <span class="fx-k">The policy failed.</span> <span class="fx-v">What caused that failure</span> was the timeline.', 'End-weight: place long, complex elements at the end of the sentence.', 'Cleft for focus: <span class="fx-k">It was the timeline that</span> caused the failure.', 'Passive to keep the topic: <span class="fx-k">The report was criticised</span> for its tone.'],
          examples: [
            { en: "The policy failed. What caused that failure was an unrealistic timeline.", ar: "فشلت السياسة. وما تسبب في ذلك الفشل كان جدولا زمنيا غير واقعي." },
            { en: "It was the timeline, not the budget, that undermined the plan.", ar: "كان الجدول الزمني لا الميزانية هو ما قوّض الخطة." },
            { en: "The report was criticised for its tone rather than its findings.", ar: "انتُقد التقرير بسبب نبرته لا نتائجه." },
            { en: "Only later did the scale of the problem become apparent.", ar: "لم يتضح حجم المشكلة إلا لاحقا." }
          ],
          mistakes: [
            { w: "Repeating the thesis word-for-word in the conclusion.", r: "Reframing the thesis with the synthesis you have built.", why: "The conclusion should add value, not restate." },
            { w: "Using nominalisation everywhere to sound academic.", r: "Balancing nominal and verbal styles.", why: "Excessive nominalisation makes prose dense and lifeless." },
            { w: "Editing sentences before fixing the structure.", r: "Revising structure first, then paragraphs, then sentences.", why: "Polishing sentences in a flawed structure wastes effort." }
          ]
        },
        listen: {
          title: "An editorial meeting",
          lines: [
            { who: "Editor", text: "The draft is strong, but the argument is front-loaded. The strongest objection arrives in the last section." },
            { who: "Writer", text: "I thought saving it for the end would be more persuasive." },
            { who: "Editor", text: "It reads as though you were avoiding it. Bring it forward and answer it properly." },
            { who: "Writer", text: "And the middle section?" },
            { who: "Editor", text: "It is discursive. It covers four points and advances none of them. Cut two." },
            { who: "Writer", text: "Which two?" },
            { who: "Editor", text: "The historical background and the methodological note. They are peripheral to your thesis." },
            { who: "Writer", text: "Fair. And the conclusion?" },
            { who: "Editor", text: "It summarises. I want it to synthesise — tell me what the argument now makes visible that was not visible before." }
          ],
          q: [
            { q: "What is the main structural criticism?", o: ["The argument is front-loaded and the objection arrives late", "It is too short", "It has no conclusion"], a: 0, why: "\"the argument is front-loaded. The strongest objection arrives in the last section.\"" },
            { q: "What is wrong with the middle section?", o: ["It is discursive and advances nothing", "It is too long", "It lacks evidence"], a: 0, why: "\"It is discursive. It covers four points and advances none of them.\"" },
            { q: "What does the editor want from the conclusion?", o: ["Synthesis, not summary", "A longer summary", "More quotations"], a: 0, why: "\"It summarises. I want it to synthesise.\"" }
          ]
        },
        read: {
          title: "Against the five-paragraph essay",
          text: "The five-paragraph essay is the most widely taught structure in secondary education, and it may also be the most damaging. Its logic is administrative rather than intellectual: three body paragraphs, one point each, tidy conclusion. The difficulty is that most interesting questions do not have three symmetrical parts. A serious argument typically involves a dominant claim, a subordinate qualification, and an unresolved tension that the writer must either resolve or acknowledge. Forcing this into three equal compartments produces a characteristic defect: the paragraphs are balanced in length and unequal in weight. Worse, the structure rewards the appearance of completeness over genuine enquiry, teaching students to close questions rather than to open them. None of this means that structure is unimportant. It means that the structure should follow the argument, not precede it. The most incisive essays I have read have an irregular shape, because the thinking was irregular.",
          q: [
            { q: "Why is the five-paragraph essay criticised?", o: ["Its logic is administrative rather than intellectual", "It is too long", "It lacks a conclusion"], a: 0, why: "\"Its logic is administrative rather than intellectual.\"" },
            { q: "What defect does the structure produce?", o: ["Paragraphs balanced in length but unequal in weight", "Too much evidence", "Too many quotations"], a: 0, why: "\"the paragraphs are balanced in length and unequal in weight.\"" },
            { q: "What is the writer's conclusion about structure?", o: ["Structure should follow the argument", "Structure does not matter", "The five-paragraph essay is ideal"], a: 0, why: "\"the structure should follow the argument, not precede it.\"" }
          ]
        },
        write: {
          prompt: "Write an extended essay plan and opening section (10–12 sentences) on this question: 'Is remote work compatible with long-term innovation?' Include a thesis, a roadmap and the first developed argument.",
          tips: ["State the thesis and roadmap in the introduction", "Develop one argument fully rather than listing three", "Use thematic progression: given information first"],
          sample: "Remote work is compatible with innovation, but only under conditions that most organisations have not yet built. The conventional objection — that innovation requires spontaneous collision — is partly true and largely overstated. This essay argues that the relevant variable is not physical proximity but the structure of interaction, and it develops that claim in three stages: first, by distinguishing between incremental and discontinuous innovation; second, by examining what proximity actually provides; and third, by outlining the practices that replicate it.\n\nConsider what proximity provides. It does not, as is often assumed, supply creativity. It supplies two things: unplanned encounters and rapid feedback. The first is genuinely difficult to replicate remotely, though the difficulty is often exaggerated; asynchronous channels produce more cross-team contact than corridor conversations ever did. The second, by contrast, is easier to reproduce than most managers believe. What proximity supplies is not presence but latency — the ability to test an idea against another person within seconds. Once the variable is named correctly, the design problem changes. The question is no longer whether people share a building, but whether the organisation has deliberately built low-latency channels for half-formed ideas. That is a solvable problem, and it is rarely the problem that organisations actually address."
        },
        speak: ["Summarise the thesis of your last essay.", "Present a roadmap for a longer piece of writing.", "Explain how you revise a draft.", "Give a synthesis rather than a summary.", "Argue for or against a familiar structure."],
        ex: [
          { t: "mcq", q: "In advanced writing, information usually moves from ___ to ___.", o: ["given, new", "new, given", "complex, simple"], a: 0, why: "Given information first, new information last." },
          { t: "fill", q: "Only later ___ the scale of the problem become apparent.", o: ["did", "does", "has"], a: 0, why: "After \"only later\" we invert: \"did ... become\"." },
          { t: "mcq", q: "A conclusion should ___.", o: ["synthesise rather than summarise", "repeat the introduction", "introduce new evidence"], a: 0, why: "A conclusion adds synthesis, not repetition." },
          { t: "fill", q: "That point is ___ to the main argument, so I will cut it.", o: ["peripheral", "substantive", "incisive"], a: 0, why: "\"Peripheral\" means of secondary importance." },
          { t: "match", pairs: [["discursive", "wandering off topic"], ["succinct", "brief and clear"], ["incisive", "sharp and direct"], ["substantive", "important and meaningful"]] },
          { t: "order", words: ["was", "It", "the", "timeline", "that", "mattered"], answer: "It was the timeline that mattered" },
          { t: "correct", wrong: "In conclusion, as I said in the introduction, remote work is complex.", answer: "In conclusion, the argument reframes the problem as one of latency rather than proximity.", why: "A conclusion should synthesise, not restate the introduction." },
          { t: "translate", q: "Translate into English: الخلاصة أن المشكلة في التوقيت لا في الميزانية", a: ["in conclusion the problem is timing rather than budget"], why: "الخلاصة = \"In conclusion\"." },
          { t: "listen", text: "It is discursive; it covers four points and advances none of them.", q: "What is the criticism?", o: ["It covers four points without advancing any", "It is too short", "It lacks evidence"], a: 0, why: "\"It covers four points and advances none of them.\"" },
          { t: "write", prompt: "Write a thesis statement plus a roadmap sentence for an essay of your choice.", keywords: ["this essay argues", "first", "second"], minWords: 30 }
        ]
      },

      /* ---------------- UNIT 9 ---------------- */
      {
        n: 9,
        title: "Debate & Argumentation",
        theme: "Competitive debate, advanced rebuttal, fallacy detection, rhetoric",
        lessons: [
          { t: "Advanced Case Construction", obj: "Build a case that survives attack.", pts: ["Define your terms before arguing.", "State the burden of proof explicitly.", "Pre-empt the strongest objection in your first speech.", "Offer a mechanism, not just a claim.", "Quantify wherever possible."] },
          { t: "Layered Rebuttal", obj: "Dismantle an argument systematically.", pts: ["Attack the premise, the inference, or the significance.", "Level 1: the claim is false.", "Level 2: the claim is true but irrelevant.", "Level 3: the claim is true and relevant but outweighed.", "Choose the level that wins, not the level that feels satisfying."] },
          { t: "Point of Information and Cross-Examination", obj: "Intervene and respond under pressure.", pts: ["'On that point, would you accept that...?'", "Concede small points to gain credibility.", "Never repeat a rebuttal that has already been answered.", "Answer the question asked, then reframe.", "'That is precisely my point' can turn an attack into support."] },
          { t: "Detecting Fallacies in Real Time", obj: "Identify flawed reasoning as you hear it.", pts: ["Circular reasoning: the conclusion is the premise.", "Appeal to popularity: everyone believes it, so it is true.", "False equivalence: treating unlike cases as alike.", "Post hoc: after this, therefore because of this.", "Name the fallacy only if it helps; usually, just answer it."] },
          { t: "Closing and Framing", obj: "Win the framing, not just the points.", pts: ["The team that defines the debate usually wins it.", "Frame the choice as between your world and theirs.", "Weigh: whose harm is greater, and to whom?", "End with the clearest sentence you have said all debate.", "Judges remember the last thirty seconds."] }
        ],
        vocab: [
          { w: "burden of proof", ipa: "/ˈbɜːdn əv pruːf/", pos: "noun", def: "The obligation to prove a claim.", ar: "عبء الإثبات", ex: "The burden of proof lies with the proposer." },
          { w: "rebut", ipa: "/rɪˈbʌt/", pos: "verb", def: "To argue that a claim is false.", ar: "يدحض", ex: "She rebutted the argument in thirty seconds." },
          { w: "fallacy", ipa: "/ˈfæləsi/", pos: "noun", def: "Faulty reasoning.", ar: "مغالطة", ex: "That is a circular fallacy." },
          { w: "equivalence", ipa: "/ɪˈkwɪvələns/", pos: "noun", def: "The state of being equal in value or meaning.", ar: "تكافؤ", ex: "This is a false equivalence." },
          { w: "outweigh", ipa: "/ˌaʊtˈweɪ/", pos: "verb", def: "To be more important than.", ar: "يفوق في الأهمية", ex: "The benefits outweigh the costs." },
          { w: "premise", ipa: "/ˈpremɪs/", pos: "noun", def: "A statement an argument depends on.", ar: "مقدمة منطقية", ex: "Reject the premise and the argument collapses." },
          { w: "reframe", ipa: "/ˌriːˈfreɪm/", pos: "verb", def: "To present something from a different angle.", ar: "يعيد التأطير", ex: "He reframed the question entirely." },
          { w: "concede", ipa: "/kənˈsiːd/", pos: "verb", def: "To admit a point.", ar: "يسلّم بـ", ex: "I concede the minor point." },
          { w: "substantiate", ipa: "/səbˈstænʃieɪt/", pos: "verb", def: "To support with evidence.", ar: "يدعم بالأدلة", ex: "The claim was never substantiated." },
          { w: "weigh", ipa: "/weɪ/", pos: "verb", def: "To compare the importance of competing factors.", ar: "يوازن", ex: "We must weigh the two harms." }
        ],
        gram: {
          title: "Advanced counterfactual and concessive argumentation",
          explain: {
            en: "Top-level debate uses counterfactual reasoning: \"Had the policy been implemented earlier, the outcome would have differed.\" Combined with layered concession (\"even granting X, Y still follows\"), this allows you to absorb an attack and continue the argument rather than merely defend it.",
            ar: "المناظرة المتقدمة تستخدم التفكير المضاد للواقع: Had the policy been implemented earlier... ومع التنازل المتدرج يمكنك استيعاب الهجوم ومواصلة الحجة.",
            fr: "Le débat de haut niveau recourt au raisonnement contrefactuel et à la concession graduée."
          },
          formula: ['Counterfactual: <span class="fx-k">Had</span> + subject + pp, <span class="fx-k">would have</span> + pp', 'Layered concession: <span class="fx-k">Even granting that X</span>, it does not follow that Y.', 'Weighing: <span class="fx-k">Even if true, the harm is outweighed by</span> ...', 'Reframing: <span class="fx-k">The real question is not A but B.</span>'],
          examples: [
            { en: "Had the regulation been introduced in 2015, thousands of jobs would have been protected.", ar: "لو أُدخل التنظيم في 2015، لحُفظت آلاف الوظائف." },
            { en: "Even granting that the cost is high, the alternative is worse.", ar: "حتى لو سلّمنا بارتفاع التكلفة، فالبديل أسوأ." },
            { en: "Even if the claim is true, the harm is outweighed by the benefit.", ar: "حتى لو كانت الدعوى صحيحة، فإن الضرر يفوقه النفع." },
            { en: "The real question is not whether to regulate, but who regulates.", ar: "السؤال الحقيقي ليس هل ننظم، بل من ينظم." }
          ],
          mistakes: [
            { w: "Answering a strong point by repeating your original claim.", r: "Conceding the point and showing it does not affect your conclusion.", why: "Repetition loses debates; absorption wins them." },
            { w: "Naming every fallacy you detect.", r: "Simply answering the flawed argument.", why: "Naming fallacies often looks like point-scoring." },
            { w: "Defending every claim equally.", r: "Choosing which claims to defend and which to concede.", why: "Strategic concession increases credibility." }
          ]
        },
        listen: {
          title: "A competitive debate: closing speeches",
          lines: [
            { who: "Proposition", text: "The opposition has conceded that the harm exists. They dispute only its scale." },
            { who: "Proposition", text: "Even granting that the scale is uncertain, the burden of proof was theirs, and they have not met it." },
            { who: "Opposition", text: "On that point, would the proposition accept that an unproven harm is a weak basis for restricting liberty?" },
            { who: "Proposition", text: "I accept the principle, and I reframe it: the liberty at stake here is not the industry's but the public's." },
            { who: "Opposition", text: "That is precisely my point — you have shifted the subject." },
            { who: "Proposition", text: "I have clarified it. Had the industry self-regulated, we would not be having this debate." },
            { who: "Opposition", text: "Counterfactuals prove nothing. The question is what the evidence supports today." },
            { who: "Proposition", text: "Then let me weigh it plainly: the worst case for us is over-regulation; the worst case for them is unregulated harm." }
          ],
          q: [
            { q: "What has the opposition conceded?", o: ["That the harm exists", "That the harm is large", "Nothing"], a: 0, why: "\"The opposition has conceded that the harm exists. They dispute only its scale.\"" },
            { q: "What question does the opposition ask?", o: ["Whether unproven harm justifies restricting liberty", "Whether the harm is large", "Whether the debate should continue"], a: 0, why: "\"would the proposition accept that an unproven harm is a weak basis for restricting liberty?\"" },
            { q: "How does the proposition close?", o: ["By weighing the worst cases", "By repeating the first claim", "By conceding"], a: 0, why: "\"let me weigh it plainly: the worst case for us is over-regulation; the worst case for them is unregulated harm.\"" }
          ]
        },
        read: {
          title: "Why the best debaters concede",
          text: "Novice debaters treat every point as territory to be defended. The result is a performance of invulnerability that convinces nobody, because audiences can see when a weak claim is being protected. Experienced debaters do something counter-intuitive: they concede. Not indiscriminately, but strategically, and usually on the points that do not affect their conclusion. The concession buys three things. It establishes credibility, since a speaker who admits a weakness appears to be reasoning rather than performing. It narrows the debate to the ground that matters, forcing the opponent to argue where the case is strongest. And it converts the exchange from a contest of assertions into a comparison of consequences, which is where most debates are actually decided. The technique has a cost: it requires knowing which points are load-bearing and which are decorative. Debaters who concede the wrong claim lose immediately. But those who can identify the structure of their own case — what holds it up and what merely ornaments it — are almost impossible to defeat, because every attack they absorb makes the remaining argument stronger.",
          q: [
            { q: "What do novice debaters do?", o: ["Defend every point", "Concede everything", "Avoid arguing"], a: 0, why: "\"Novice debaters treat every point as territory to be defended.\"" },
            { q: "What three things does strategic concession buy?", o: ["Credibility, narrowed ground, comparison of consequences", "Time, sympathy, applause", "Nothing"], a: 0, why: "The text lists credibility, narrowing the debate, and converting to a comparison of consequences." },
            { q: "What does the writer say about debaters who concede the wrong claim?", o: ["They lose immediately", "They still win", "It does not matter"], a: 0, why: "\"Debaters who concede the wrong claim lose immediately.\"" }
          ]
        },
        write: {
          prompt: "Write a full closing speech (10 sentences) for a debate on: 'This house would ban targeted political advertising online.' Include a layered rebuttal, a strategic concession and a clear weighing.",
          tips: ["Concede one point explicitly and explain why it does not decide the debate", "Weigh harms explicitly", "End with your clearest sentence"],
          sample: "This debate turns on one question: who bears the burden of proof when the harm is uncertain but potentially severe? I want to begin by conceding something, because it is true and because it does not decide this debate. The opposition is right that a ban restricts expression, and that restriction is a real cost. I accept it. What I do not accept is the conclusion they draw from it. Even granting that the cost is real, the question is whether it is outweighed, and here the opposition's case collapses. They argue that the evidence on persuasion is contested. But note what that argument requires: it requires us to keep a system whose worst case is the systematic manipulation of electoral outcomes, in exchange for a benefit they have never quantified. Had platforms self-regulated, we would not be here; they had a decade and chose otherwise. So let me weigh this plainly. The worst case for the proposition is that we restrict some legitimate speech and lose a marginal amount of political engagement. The worst case for the opposition is that we continue to allow unaccountable, opaque targeting to shape democratic outcomes. One of those is recoverable. The other is not. I urge you to vote for the motion."
        },
        speak: ["Rebut a claim at three levels.", "Concede a point and explain why it does not matter.", "Weigh two harms against each other.", "Name and answer a common fallacy.", "Deliver a 60-second closing statement."],
        ex: [
          { t: "mcq", q: "The 'burden of proof' means ___.", o: ["the obligation to prove a claim", "the difficulty of an argument", "the length of a speech"], a: 0, why: "It is the duty to substantiate a claim." },
          { t: "fill", q: "___ the regulation been introduced earlier, jobs would have been protected.", o: ["Had", "Have", "Has"], a: 0, why: "Counterfactual inversion: \"Had + subject + past participle\"." },
          { t: "mcq", q: "Treating two unlike cases as alike is called ___.", o: ["false equivalence", "post hoc", "circular reasoning"], a: 0, why: "That is false equivalence." },
          { t: "fill", q: "Even ___ that the cost is high, the alternative is worse.", o: ["granting", "granted", "grants"], a: 0, why: 'The concessive frame is "Even granting that...".' },
          { t: "match", pairs: [["rebut", "argue against"], ["concede", "admit a point"], ["reframe", "present differently"], ["outweigh", "be more important than"]] },
          { t: "order", words: ["real", "The", "question", "is", "not", "A", "but", "B"], answer: "The real question is not A but B" },
          { t: "correct", wrong: "You are wrong because you are a lobbyist.", answer: "That argument relies on the source rather than the evidence.", why: "Attacking the person is ad hominem; address the argument." },
          { t: "translate", q: "Translate into English: عبء الإثبات يقع على عاتقهم", a: ["the burden of proof lies with them"], why: "عبء الإثبات = \"the burden of proof\"." },
          { t: "listen", text: "Even granting that the scale is uncertain, the burden of proof was theirs and they have not met it.", q: "What is the argument?", o: ["The burden of proof was not met", "The harm is proven", "The debate is over"], a: 0, why: "\"the burden of proof was theirs, and they have not met it.\"" },
          { t: "write", prompt: "Write three sentences: a strategic concession, a rebuttal and a weighing.", keywords: ["even granting", "however", "outweighed"], minWords: 34 }
        ]
      },

      /* ---------------- UNIT 10 ---------------- */
      {
        n: 10,
        title: "Presentation & Near-Fluent Communication",
        theme: "Keynotes, storytelling, Q&A under pressure, executive presence",
        lessons: [
          { t: "Keynote Structure", obj: "Design a talk that changes minds.", pts: ["Open with tension, not with thanks.", "One central idea, repeated in three forms.", "Evidence in the middle, story at the edges.", "Anticipate the objection and address it openly.", "Close with a single, concrete action."] },
          { t: "Storytelling in Professional Context", obj: "Use narrative to make ideas stick.", pts: ["Structure: situation, complication, resolution.", "Specific detail beats general claim.", "One story per idea, never two.", "Keep it under ninety seconds.", "The story must serve the argument, not decorate it."] },
          { t: "Executive Presence", obj: "Project calm authority.", pts: ["Speak more slowly than feels natural.", "Pause before answering, not while answering.", "Use silence to signal confidence.", "Answer the question you were asked, then reframe.", "Never apologise for the question you were given."] },
          { t: "Q&A Under Pressure", obj: "Handle hostile questions with control.", pts: ["'That's the right question to ask.'", "Separate the question from the assumption inside it.", "If you don't know: say so, and commit to a date.", "Never argue with a hostile questioner; redirect.", "'Let me answer the version of that I can answer.'"] },
          { t: "Sustaining Near-Fluent Communication", obj: "Operate comfortably across all contexts.", pts: ["Fluency means flexibility, not perfection.", "Switch register without effort: formal, professional, casual.", "Recover from errors invisibly.", "Use silence and repair strategies as native speakers do.", "At this level, clarity beats complexity every time."] }
        ],
        vocab: [
          { w: "presence", ipa: "/ˈprezns/", pos: "noun", def: "The quality of commanding attention calmly.", ar: "حضور", ex: "She has real executive presence." },
          { w: "keynote", ipa: "/ˈkiːnəʊt/", pos: "noun", def: "The main speech at an event.", ar: "الكلمة الرئيسية", ex: "He delivered the keynote." },
          { w: "anecdote", ipa: "/ˈænɪkdəʊt/", pos: "noun", def: "A short, interesting story.", ar: "طرفة / قصة قصيرة", ex: "She opened with an anecdote." },
          { w: "poise", ipa: "/pɔɪz/", pos: "noun", def: "Calm, confident composure.", ar: "رزانة", ex: "He answered with poise." },
          { w: "rapport", ipa: "/ræˈpɔː/", pos: "noun", def: "A friendly, understanding relationship.", ar: "وئام", ex: "She built rapport with the audience." },
          { w: "compelling", ipa: "/kəmˈpelɪŋ/", pos: "adjective", def: "Very convincing.", ar: "مقنع بقوة", ex: "A compelling narrative." },
          { w: "digress", ipa: "/daɪˈɡres/", pos: "verb", def: "To move away from the main subject.", ar: "يستطرد", ex: "Let me not digress." },
          { w: "articulate", ipa: "/ɑːˈtɪkjuleɪt/", pos: "verb", def: "To express clearly.", ar: "يصوغ بوضوح", ex: "He articulated the vision simply." },
          { w: "gravitas", ipa: "/ˈɡrævɪtæs/", pos: "noun", def: "Dignity and seriousness of manner.", ar: "وقار", ex: "She spoke with gravitas." },
          { w: "land", ipa: "/lænd/", pos: "verb", def: "To be understood or accepted (informal, of an idea).", ar: "يصل ويُقبل", ex: "The message landed well." }
        ],
        gram: {
          title: "Rhetorical grammar: parallelism, anaphora and tricolon",
          explain: {
            en: "Spoken rhetoric uses grammatical repetition. Parallelism makes ideas memorable; anaphora (repeating the opening of successive clauses) builds momentum; the tricolon (rule of three) gives a sense of completeness. These are grammar choices with persuasive force.",
            ar: "البلاغة المنطوقة تستخدم التكرار النحوي: التوازي يجعل الأفكار راسخة، والتكرار في مطلع الجمل يبني الزخم، والثلاثية تعطي إحساسا بالاكتمال.",
            fr: "La rhétorique orale repose sur le parallélisme, l'anaphore et le tricolon."
          },
          formula: ['Parallelism: <span class="fx-k">clear, credible and cost-effective</span>', 'Anaphora: <span class="fx-k">We will not stop. We will not slow down. We will not compromise.</span>', 'Tricolon: three items, increasing in weight: <span class="fx-k">a plan, a process and a promise kept</span>', 'Antithesis: <span class="fx-k">Not because it is easy, but because it is hard.</span>'],
          examples: [
            { en: "The proposal is simple, defensible and affordable.", ar: "الاقتراح بسيط وقابل للدفاع وميسور التكلفة." },
            { en: "We measured it. We tested it. We shipped it.", ar: "قسناه. اختبرناه. أطلقناه." },
            { en: "Not because it is easy, but because it is hard.", ar: "ليس لأنه سهل، بل لأنه صعب." },
            { en: "This is a question of judgement, of priorities and of courage.", ar: "هذا سؤال يتعلق بالحكم والأولويات والشجاعة." }
          ],
          mistakes: [
            { w: "Breaking parallelism within a list.", r: "Keeping every item in the same grammatical form.", why: "Parallel items are easier to process and remember." },
            { w: "Overusing tricolons until they feel mechanical.", r: "Varying rhetorical structures deliberately.", why: "Repetition of the device becomes noticeable and hollow." },
            { w: "Apologising for a hostile question.", r: "Thanking the questioner and answering the substance.", why: "Apology signals weakness and wastes time." }
          ]
        },
        listen: {
          title: "A keynote closing and Q&A",
          lines: [
            { who: "Speaker", text: "Let me finish with one story. In 2019 a team of four people had an idea nobody wanted." },
            { who: "Speaker", text: "They had no budget, no mandate and no permission. They had a prototype and a Tuesday." },
            { who: "Speaker", text: "Two years later that prototype is used by four million people. Not because they were brilliant — because they were persistent." },
            { who: "Speaker", text: "So here is my ask. Not a strategy. Not a budget. Just this: give one person in your team a Tuesday." },
            { who: "Questioner", text: "That is a nice story, but isn't it survivorship bias? For every success there are a thousand failures." },
            { who: "Speaker", text: "That is the right question, and it is a fair challenge. Let me answer the version I can answer." },
            { who: "Speaker", text: "I am not claiming everyone should be funded. I am claiming that the cost of giving someone a Tuesday is so low that the expected value is positive even at a very low success rate." },
            { who: "Speaker", text: "That is the argument. The story is just how I remember it." }
          ],
          q: [
            { q: "What did the team have?", o: ["A prototype and a Tuesday", "A large budget", "Board approval"], a: 0, why: "\"They had a prototype and a Tuesday.\"" },
            { q: "Why does the speaker say the prototype succeeded?", o: ["Because they were persistent", "Because they were brilliant", "Because they had funding"], a: 0, why: "\"Not because they were brilliant — because they were persistent.\"" },
            { q: "How does the speaker handle the survivorship bias challenge?", o: ["By answering the version they can answer", "By ignoring it", "By attacking the questioner"], a: 0, why: "\"Let me answer the version I can answer.\"" }
          ]
        },
        read: {
          title: "What makes a keynote land",
          text: "The most common mistake in keynote speaking is treating the talk as a report. Reports convey information; keynotes change what an audience believes is possible. The distinction has structural consequences. A report can contain twelve findings; a keynote must contain one idea, expressed three times in different registers — once as a claim, once as evidence, once as a story. The evidence belongs in the middle, because audiences are most receptive to data when they already understand why it matters, and most resistant when it arrives before the stakes are established. The story belongs at the edges: at the start to create tension, at the end to make the idea portable. Perhaps counter-intuitively, the most memorable keynotes are also the most restrained. Speakers who try to land seven points land none. Those who land one point so clearly that the audience can repeat it in a sentence have done the harder thing, and it is the harder thing that audiences remember.",
          q: [
            { q: "What is the most common mistake in keynote speaking?", o: ["Treating the talk as a report", "Speaking too briefly", "Using too many stories"], a: 0, why: "\"The most common mistake ... is treating the talk as a report.\"" },
            { q: "Where should the evidence go?", o: ["In the middle", "At the start", "At the end"], a: 0, why: "\"The evidence belongs in the middle.\"" },
            { q: "What do memorable keynotes do?", o: ["Land one point clearly", "Land seven points", "Avoid stories"], a: 0, why: "\"Those who land one point so clearly that the audience can repeat it in a sentence.\"" }
          ]
        },
        write: {
          prompt: "Write a full keynote closing (10 sentences) with a story, a rhetorical device, an anticipated objection and a single concrete ask.",
          tips: ["One central idea, expressed three ways", "Include a short story with specific detail", "End with one concrete action, not a summary"],
          sample: "Let me close with a single idea: the constraint on progress is almost never resources; it is permission. In 2021, a nurse in a regional hospital noticed that patients waited four hours for a blood test result that took twenty minutes to process. She had no authority to change the system. She had a spreadsheet and a stubborn streak. She mapped every step of the process, found three avoidable delays, and presented it to a manager who happened to be in a good mood. Six months later, waiting times in that department had fallen by seventy percent. Not because she was exceptional — because she was permitted to try. Now, I know what you are thinking. One story proves nothing, and you are right. But notice what I am not claiming. I am not claiming that every idea will work. I am claiming that the cost of permission is so low, and the cost of denial so high, that the arithmetic is not close. So here is my ask, and it is deliberately small. Not a strategy. Not a budget. This week, give one person on your team the authority to fix one thing without asking. That is all. If we do that, we will not need a better plan. We will have one."
        },
        speak: ["Deliver a 60-second story that supports an idea.", "Answer a hostile question with control.", "Use a tricolon and anaphora in one answer.", "Close a talk with a single concrete ask.", "Switch register from formal to casual mid-answer."],
        ex: [
          { t: "mcq", q: "A keynote should contain ___.", o: ["one central idea", "twelve findings", "no stories"], a: 0, why: "A keynote must contain one idea, expressed three ways." },
          { t: "fill", q: "We will not stop. We will not slow down. This is an example of ___.", o: ["anaphora", "tricolon", "antithesis"], a: 0, why: "Repeating the opening of successive clauses is anaphora." },
          { t: "mcq", q: "Where does the story belong in a keynote?", o: ["At the edges", "In the middle", "Nowhere"], a: 0, why: "\"The story belongs at the edges: at the start ... at the end.\"" },
          { t: "fill", q: "The proposal is simple, defensible and ___ — an example of parallelism.", o: ["affordable", "afford", "affording"], a: 0, why: "All items must share the same grammatical form." },
          { t: "match", pairs: [["gravitas", "dignity of manner"], ["poise", "calm composure"], ["rapport", "friendly relationship"], ["anecdote", "short story"]] },
          { t: "order", words: ["a", "give", "person", "one", "Tuesday"], answer: "give one person a Tuesday" },
          { t: "correct", wrong: "Sorry, that is a very difficult question and I don't know.", answer: "That is the right question to ask. I don't have the figure to hand, and I will send it by Friday.", why: "Do not apologise for the question; commit to a date instead." },
          { t: "translate", q: "Translate into English: أعطني شخصا واحدا في فريقك", a: ["give me one person on your team"], why: "شخصا واحدا = \"one person\"." },
          { t: "listen", text: "Not because they were brilliant, but because they were persistent.", q: "Why did they succeed?", o: ["Because they were persistent", "Because they were brilliant", "Because they had money"], a: 0, why: "\"Not because they were brilliant, but because they were persistent.\"" },
          { t: "write", prompt: "Write a closing paragraph with a tricolon and one concrete ask.", keywords: ["not because", "but because", "this week"], minWords: 30 }
        ]
      }
    ]
  };

  window.EH.levels.push(C1);
})();
