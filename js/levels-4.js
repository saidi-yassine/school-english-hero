/* =====================================================================
   English Hero — Level B2 (Upper Intermediate)
   10 units · 5 lessons per unit
   ===================================================================== */
(function () {
  "use strict";

  const B2 = {
    id: "b2",
    code: "B2",
    name: "Upper Intermediate",
    color: "b2",
    tagline: "Speak with confidence, precision and natural expression.",
    description: "You are approaching fluency. Now you will refine advanced grammar, master idioms and collocations, debate persuasively, present confidently and write structured essays.",
    canDo: [
      "Use advanced tenses, inversion and cleft sentences naturally",
      "Understand and use idioms, collocations and phrasal verbs fluently",
      "Argue a position persuasively in a debate",
      "Deliver a structured presentation with confidence",
      "Write a well-organised essay with a clear thesis"
    ],
    units: [
      /* ---------------- UNIT 1 ---------------- */
      {
        n: 1,
        title: "Advanced Tenses & Aspect",
        theme: "Perfect continuous, future perfect, inversion, cleft sentences",
        lessons: [
          { t: "Perfect Continuous Tenses", obj: "Emphasise duration and ongoing activity.", pts: ["By June I will have been working here for ten years.", "She had been waiting for an hour when the bus finally came.", "I have been meaning to call you for weeks.", "They will have finished the project by Friday.", "He had already left when I arrived."] },
          { t: "Future Perfect and Future Continuous", obj: "Talk about completed and ongoing future actions.", pts: ["By 2030 I will have published two books.", "This time tomorrow I will be flying to Rome.", "Will you have finished by six?", "They will be presenting at nine, so call after ten.", "By the time you read this, I will have left."] },
          { t: "Inversion After Negative Adverbials", obj: "Use formal, emphatic inversion structures.", pts: ["Never have I seen such a beautiful view.", "Rarely does he make mistakes of this kind.", "Not only did she apologise, but she also paid for the damage.", "Hardly had we sat down when the lights went out.", "No sooner had I arrived than it started to rain."] },
          { t: "Cleft Sentences", obj: "Emphasise specific information.", pts: ["It was the manager who made the decision.", "What I need is a few days of rest.", "It is not the money that matters, but the principle.", "The reason I called is that I need your help.", "All I want is a quiet evening."] },
          { t: "Narrative Tenses Combined", obj: "Tell a sophisticated story with mixed tenses.", pts: ["I had been working there for two years when the company was sold.", "While I was preparing dinner, the phone rang.", "She had never flown before, so she was nervous.", "We were about to leave when he finally appeared.", "By the time we arrived, everyone had gone home."] }
        ],
        vocab: [
          { w: "inevitable", ipa: "/ɪnˈevɪtəbl/", pos: "adjective", def: "Certain to happen; unavoidable.", ar: "لا مفر منه", ex: "The delay was inevitable." },
          { w: "simultaneously", ipa: "/ˌsɪmlˈteɪniəsli/", pos: "adverb", def: "At exactly the same time.", ar: "في الوقت نفسه", ex: "Both events happened simultaneously." },
          { w: "eventually", ipa: "/ɪˈventʃuəli/", pos: "adverb", def: "In the end, after a long time.", ar: "في النهاية", ex: "He eventually agreed." },
          { w: "gradually", ipa: "/ˈɡrædʒuəli/", pos: "adverb", def: "Slowly, over a period of time.", ar: "تدريجيا", ex: "The situation gradually improved." },
          { w: "anticipate", ipa: "/ænˈtɪsɪpeɪt/", pos: "verb", def: "To expect something and prepare for it.", ar: "يتوقع", ex: "We anticipate strong demand." },
          { w: "coincide", ipa: "/ˌkəʊɪnˈsaɪd/", pos: "verb", def: "To happen at the same time.", ar: "يتزامن", ex: "The launch coincided with the holiday." },
          { w: "subsequent", ipa: "/ˈsʌbsɪkwənt/", pos: "adjective", def: "Coming after something else.", ar: "لاحق", ex: "Subsequent events proved him right." },
          { w: "preliminary", ipa: "/prɪˈlɪmɪnəri/", pos: "adjective", def: "Coming before the main part.", ar: "تمهيدي", ex: "These are preliminary results." },
          { w: "retrospective", ipa: "/ˌretrəˈspektɪv/", pos: "adjective", def: "Looking back at past events.", ar: "استرجاعي", ex: "A retrospective analysis was carried out." },
          { w: "simultaneous", ipa: "/ˌsɪmlˈteɪniəs/", pos: "adjective", def: "Happening at the same time.", ar: "متزامن", ex: "There were simultaneous protests." }
        ],
        gram: {
          title: "Inversion after negative and restrictive adverbials",
          explain: {
            en: "In formal and literary English, when a sentence begins with a negative or restrictive adverbial, the subject and auxiliary verb invert. This structure adds emphasis and is common in speeches, journalism and advanced writing.",
            ar: "في الإنجليزية الرسمية، عندما تبدأ الجملة بظرف نفي أو حصر، ينقلب ترتيب الفاعل والفعل المساعد. هذا التركيب يضيف توكيدا ويشيع في الخطابات والصحافة.",
            fr: "Quand une phrase commence par un adverbe négatif ou restrictif, on inverse le sujet et l'auxiliaire (inversion)."
          },
          formula: ['<span class="fx-k">Never / Rarely / Seldom</span> + aux + subject → Never <span class="fx-k">have I</span> seen ...', '<span class="fx-k">Hardly had</span> + subject + pp + <span class="fx-k">when</span> ... → Hardly had we arrived when ...', '<span class="fx-k">No sooner had</span> + subject + pp + <span class="fx-k">than</span> ...', '<span class="fx-k">Not only</span> + aux + subject ... <span class="fx-k">but also</span> ...'],
          examples: [
            { en: "Never have I heard such a ridiculous argument.", ar: "لم أسمع قط بحجة سخيفة كهذه." },
            { en: "Not only did he arrive late, but he also forgot the documents.", ar: "لم يتأخر فقط، بل نسي الوثائق أيضا." },
            { en: "Hardly had the meeting started when the fire alarm rang.", ar: "بالكاد بدأ الاجتماع حتى رنّ إنذار الحريق." },
            { en: "No sooner had she left than he called.", ar: "لم تكد تغادر حتى اتصل." }
          ],
          mistakes: [
            { w: "Never I have seen such a thing.", r: "Never have I seen such a thing.", why: "The auxiliary must come before the subject after a negative adverbial." },
            { w: "Hardly we had arrived when it started.", r: "Hardly had we arrived when it started.", why: "Invert \"had\" and the subject." },
            { w: "Not only he arrived late, but also forgot the file.", r: "Not only did he arrive late, but he also forgot the file.", why: "Use \"did\" to form the inversion in the past simple." }
          ]
        },
        listen: {
          title: "A podcast on decision-making",
          lines: [
            { who: "Host", text: "You argue that most big decisions are made emotionally. Isn't that a bit cynical?" },
            { who: "Guest", text: "Not at all. Never have I met a manager who decided purely on data." },
            { who: "Host", text: "So what should people do?" },
            { who: "Guest", text: "What they should do is slow down. Rarely does a good decision come from pressure." },
            { who: "Host", text: "And what happens when you delay too long?" },
            { who: "Guest", text: "No sooner have you decided to wait than the market moves without you." },
            { who: "Host", text: "So it's a balance." },
            { who: "Guest", text: "It is. By the time you feel completely certain, the opportunity has usually gone." }
          ],
          q: [
            { q: "What is the guest's main claim?", o: ["Most big decisions are emotional", "Data always wins", "Decisions should be fast"], a: 0, why: "\"most big decisions are made emotionally.\"" },
            { q: "What does the guest say people should do?", o: ["Slow down", "Decide immediately", "Collect more data"], a: 0, why: "\"What they should do is slow down.\"" },
            { q: "What happens if you delay too long?", o: ["The market moves without you", "Nothing changes", "You make a better choice"], a: 0, why: "\"No sooner have you decided to wait than the market moves without you.\"" }
          ]
        },
        read: {
          title: "The day the lights went out",
          text: "It had been raining for three days when the river finally broke its banks. Hardly had the residents received the warning when the water reached the main road. Never before had the town experienced flooding of this scale. What people remember most, however, is not the water but the response. It was the students who organised the shelters, and it was the local baker who kept feeding everyone for a week. Not only did neighbours help each other, but strangers also arrived from surrounding villages with boats and supplies. By the time the army arrived, the worst had already been managed. Only later did people realise how close they had come to a disaster — and how much they had depended on each other.",
          q: [
            { q: "How long had it been raining?", o: ["Three days", "One week", "One day"], a: 0, why: "\"It had been raining for three days.\"" },
            { q: "Who organised the shelters?", o: ["The students", "The army", "The local government"], a: 0, why: "\"It was the students who organised the shelters.\"" },
            { q: "When did the army arrive?", o: ["After the worst had been managed", "Before the flood", "On the first day"], a: 0, why: "\"By the time the army arrived, the worst had already been managed.\"" }
          ]
        },
        write: {
          prompt: "Write a dramatic narrative paragraph (8 sentences) using at least four advanced structures: inversion, a cleft sentence, the future perfect and the past perfect continuous.",
          tips: ["Start with a strong time clause: \"It had been ... when ...\"", "Use one inversion: \"Never had ...\" or \"Hardly had ...\"", "Emphasise a key detail with a cleft: \"It was ... who ...\""],
          sample: "It had been snowing for six hours when we finally decided to leave the cabin. Never had I seen the valley so silent. What worried me most was not the cold but the fact that our phones had no signal. We had been walking for about an hour when we heard an engine in the distance. It was the ranger who found us, following our tracks with a torch. Not only did he give us blankets, but he also drove us all the way to the village. By the time we reached the hotel, we will have been travelling for nine hours in total. Only then did I realise how lucky we had been."
        },
        speak: ["Tell me about a time everything went wrong, using past perfect continuous.", "What will you have achieved by 2035?", "Use inversion to emphasise something surprising.", "Describe a memorable event with a cleft sentence.", "What had you been doing before this lesson?"],
        ex: [
          { t: "mcq", q: "Never ___ I seen such a beautiful view.", o: ["have", "has", "had I"], a: 0, why: "After \"Never\" we invert the auxiliary: \"have I\"." },
          { t: "fill", q: "Hardly ___ we arrived when it started to rain.", o: ["had", "have", "did"], a: 0, why: "\"Hardly had + subject + past participle + when\"." },
          { t: "mcq", q: "___ the manager who made the decision.", o: ["It was", "There was", "He was"], a: 0, why: "This is a cleft sentence emphasising the subject." },
          { t: "fill", q: "By 2030 I will ___ finished my doctorate.", o: ["have", "be", "been"], a: 0, why: "The future perfect is \"will have + past participle\"." },
          { t: "match", pairs: [["Never have I", "inversion"], ["It was she who", "cleft"], ["will have done", "future perfect"], ["had been doing", "past perfect continuous"]] },
          { t: "order", words: ["had", "She", "been", "waiting", "an", "hour"], answer: "She had been waiting an hour" },
          { t: "correct", wrong: "Not only he arrived late, but also forgot the file.", answer: "Not only did he arrive late, but he also forgot the file.", why: "Use \"did\" to form the inversion with the past simple." },
          { t: "translate", q: "Translate into English: لم أرَ قط شيئا كهذا", a: ["never have i seen such a thing", "i have never seen such a thing"], why: "لم أرَ قط = \"Never have I seen\"." },
          { t: "listen", text: "By the time you arrive, we will have already started the presentation.", q: "What will have happened?", o: ["The presentation will have started", "The presentation will be cancelled", "Nothing"], a: 0, why: "\"we will have already started the presentation.\"" },
          { t: "write", prompt: "Write three sentences using inversion and a cleft sentence.", keywords: ["never", "hardly", "it was", "what"], minWords: 24 }
        ]
      },

      /* ---------------- UNIT 2 ---------------- */
      {
        n: 2,
        title: "Complex Sentence Structures",
        theme: "Relative clauses, participle clauses, concession, subordination",
        lessons: [
          { t: "Defining and Non-Defining Relative Clauses", obj: "Add information with precision.", pts: ["The woman who called you is my aunt.", "The book, which was published in 2020, became a bestseller.", "That is the house where I grew up.", "My brother, whose wife is a doctor, lives in Cairo.", "The reason why I left is complicated."] },
          { t: "Participle Clauses", obj: "Reduce clauses for elegant, concise writing.", pts: ["Having finished the report, she went home.", "Feeling tired, I decided to stop working.", "Written in 1920, the novel still feels modern.", "Not knowing the answer, he stayed silent.", "Walking home, I ran into an old friend."] },
          { t: "Concession and Contrast", obj: "Acknowledge opposing points elegantly.", pts: ["Although it was expensive, we bought it.", "Despite the cost, we bought it.", "Much as I admire her, I disagree on this point.", "Whereas the first plan was cheap, this one is risky.", "Even though he apologised, she was still upset."] },
          { t: "Purpose, Result and Reason", obj: "Express why and with what outcome.", pts: ["I left early in order to catch the train.", "She spoke slowly so that everyone could follow.", "It was so hot that we stayed inside.", "He resigned because of the workload.", "We took a taxi so as not to be late."] },
          { t: "Fronting and Emphasis", obj: "Move elements to the front for effect.", pts: ["This book, I could read again and again.", "Very interesting was his explanation.", "Into the room walked a tall stranger.", "That kind of behaviour, I simply cannot accept.", "Only when she left did I understand."] }
        ],
        vocab: [
          { w: "nevertheless", ipa: "/ˌnevəðəˈles/", pos: "adverb", def: "In spite of that (formal).", ar: "مع ذلك", ex: "The evidence is weak; nevertheless, we must act." },
          { w: "consequently", ipa: "/ˈkɒnsɪkwəntli/", pos: "adverb", def: "As a result.", ar: "وبالتالي", ex: "He missed the deadline; consequently, he lost the client." },
          { w: "provided that", ipa: "/prəˈvaɪdɪd ðæt/", pos: "conjunction", def: "On condition that.", ar: "بشرط أن", ex: "You may go, provided that you finish first." },
          { w: "insofar as", ipa: "/ˌɪnsəʊˈfɑːr əz/", pos: "conjunction", def: "To the extent that (formal).", ar: "من حيث", ex: "The plan is sound insofar as it is affordable." },
          { w: "whereby", ipa: "/weəˈbaɪ/", pos: "adverb", def: "By which; through which (formal).", ar: "حيث / بموجبه", ex: "A system whereby staff can work remotely." },
          { w: "albeit", ipa: "/ɔːlˈbiːɪt/", pos: "conjunction", def: "Although (introducing a phrase).", ar: "وإن كان", ex: "A useful, albeit expensive, solution." },
          { w: "thereby", ipa: "/ˌðeəˈbaɪ/", pos: "adverb", def: "By that means; as a result of that.", ar: "وبذلك", ex: "He reduced costs, thereby saving the firm." },
          { w: "subordinate", ipa: "/səˈbɔːdɪnət/", pos: "adjective / noun", def: "Less important; a person below another.", ar: "ثانوي / مرؤوس", ex: "Clarity matters more than subordinate detail." },
          { w: "concession", ipa: "/kənˈseʃn/", pos: "noun", def: "Something given up to reach agreement; acknowledging a point.", ar: "تنازل", ex: "Both sides made concessions." },
          { w: "coherence", ipa: "/kəʊˈhɪərəns/", pos: "noun", def: "The quality of being logical and consistent.", ar: "تماسك", ex: "The essay lacks coherence." }
        ],
        gram: {
          title: "Relative and participle clauses",
          explain: {
            en: "Relative clauses give information about a noun. Defining clauses are essential to the meaning (no commas); non-defining clauses add extra information (with commas, and never with \"that\"). Participle clauses replace longer relative or time clauses and give writing a more sophisticated, concise rhythm.",
            ar: "الجمل الوصلية تعطي معلومات عن اسم. الجمل المحدِّدة ضرورية للمعنى (بدون فواصل)، وغير المحدِّدة تضيف معلومة إضافية (مع فواصل). والجمل الوصفية بالمشتقات تُختصر وتُعطي الكتابة إيقاعا أكثر رقيا.",
            fr: "Les relatives déterminatives sont essentielles (sans virgules) ; les explicatives ajoutent une information (avec virgules). Les propositions participiales remplacent des relatives plus longues."
          },
          formula: ['Defining: The man <span class="fx-k">who called</span> is my uncle. (no commas)', 'Non-defining: My uncle, <span class="fx-k">who lives in Cairo</span>, is a doctor. (commas, no "that")', 'Participle: <span class="fx-k">Having finished</span> the report, she left. / <span class="fx-k">Feeling</span> tired, I stopped.', 'Concession: <span class="fx-k">Although</span> + clause · <span class="fx-k">Despite</span> + noun/-ing'],
          examples: [
            { en: "The report, which was published yesterday, caused a scandal.", ar: "التقرير، الذي نُشر أمس، أثار فضيحة." },
            { en: "Having read the file twice, she still had doubts.", ar: "بعد قراءة الملف مرتين، ما زالت لديها شكوك." },
            { en: "Despite the rain, the event went ahead.", ar: "رغم المطر، أقيم الحدث." },
            { en: "It was so late that we decided to stay.", ar: "كان الوقت متأخرا جدا حتى قررنا البقاء." }
          ],
          mistakes: [
            { w: "My uncle, that lives in Cairo, is a doctor.", r: "My uncle, who lives in Cairo, is a doctor.", why: "Never use \"that\" in a non-defining relative clause." },
            { w: "Despite it was raining, we went out.", r: "Despite the rain, we went out.", why: "\"Despite\" is followed by a noun or gerund, not a clause." },
            { w: "Having finished the work, the film was watched by her.", r: "Having finished the work, she watched the film.", why: "The participle clause subject must match the main clause subject." }
          ]
        },
        listen: {
          title: "A lecture on memory",
          lines: [
            { who: "Lecturer", text: "Today we look at memory techniques that actually work." },
            { who: "Student", text: "Do the techniques that use images work better?" },
            { who: "Lecturer", text: "They do, provided that you make the images strange and vivid." },
            { who: "Student", text: "And what about repetition?" },
            { who: "Lecturer", text: "Repetition helps, albeit far less than most people believe." },
            { who: "Student", text: "So what is the single most effective method?" },
            { who: "Lecturer", text: "Testing yourself, whereby you force your brain to retrieve the information." },
            { who: "Student", text: "Even though it feels harder?" },
            { who: "Lecturer", text: "Because it feels harder. Difficulty, paradoxically, is what makes learning stick." }
          ],
          q: [
            { q: "What condition does the lecturer give for image techniques?", o: ["The images must be strange and vivid", "You must repeat them 100 times", "They only work for numbers"], a: 0, why: "\"provided that you make the images strange and vivid.\"" },
            { q: "What does the lecturer say about repetition?", o: ["It helps but less than people believe", "It is useless", "It is the best method"], a: 0, why: "\"Repetition helps, albeit far less than most people believe.\"" },
            { q: "Why does testing yourself work better?", o: ["Because it is harder", "Because it is quicker", "Because it needs no effort"], a: 0, why: "\"Because it feels harder. Difficulty ... is what makes learning stick.\"" }
          ]
        },
        read: {
          title: "The city that reinvented itself",
          text: "Bilbao, which was once an industrial city in decline, is now one of the most visited destinations in Spain. The transformation began in 1997, when the Guggenheim Museum, designed by Frank Gehry, opened on the site of an old warehouse. Having invested heavily in culture and transport, the local government attracted businesses that had previously avoided the region. Consequently, unemployment fell and tourism grew rapidly. Nevertheless, the process was not without critics. Some residents, whose rents have doubled in a decade, argue that the city has become unaffordable for the people who built it. The lesson, insofar as there is one, is that regeneration creates winners and losers — and that the losers are rarely consulted.",
          q: [
            { q: "What was Bilbao like before 1997?", o: ["An industrial city in decline", "A tourist destination", "A cultural capital"], a: 0, why: "\"once an industrial city in decline.\"" },
            { q: "What happened as a result of investment?", o: ["Unemployment fell and tourism grew", "The population left", "The museum closed"], a: 0, why: "\"Consequently, unemployment fell and tourism grew rapidly.\"" },
            { q: "What criticism is mentioned?", o: ["Rents have doubled, making the city unaffordable", "The museum is too small", "There is not enough tourism"], a: 0, why: "\"Some residents, whose rents have doubled in a decade, argue that the city has become unaffordable.\"" }
          ]
        },
        write: {
          prompt: "Write a paragraph (8 sentences) about a place that has changed, using at least two relative clauses, one participle clause and one concession structure.",
          tips: ["Use a non-defining relative clause with commas", "Start one sentence with a participle clause", "Use \"although\", \"despite\" or \"nevertheless\" once"],
          sample: "The neighbourhood where I grew up has changed beyond recognition. The small shops, which once lined the main street, have been replaced by cafés and offices. Having lost its traditional character, the area now attracts young professionals who work in the nearby technology park. Although the investment has brought jobs and better services, it has also pushed prices up sharply. Many families, whose parents and grandparents lived here, have moved to the suburbs. Nevertheless, the district feels safer and more lively than it did twenty years ago. Sitting in one of the new cafés, I sometimes struggle to picture how it used to look. Change, it seems, is rarely straightforward."
        },
        speak: ["Describe a place that has changed using relative clauses.", "Use a participle clause to describe your morning.", "Express a concession about a topic you care about.", "Talk about a person who influenced you.", "Give a reason and a result in one complex sentence."],
        ex: [
          { t: "mcq", q: "My uncle, ___ lives in Cairo, is a doctor.", o: ["that", "who", "which"], a: 1, why: "Never use \"that\" in a non-defining relative clause about a person." },
          { t: "fill", q: "___ finished the report, she went home.", o: ["Having", "Have", "Had"], a: 0, why: "A perfect participle clause starts with \"Having\"." },
          { t: "mcq", q: "___ the rain, the event went ahead.", o: ["Despite", "Although", "However"], a: 0, why: "\"Despite\" is followed by a noun phrase." },
          { t: "fill", q: "It was ___ hot that we stayed inside.", o: ["so", "such", "too"], a: 0, why: 'The result structure is "so + adjective + that".' },
          { t: "match", pairs: [["who", "person"], ["which", "thing"], ["where", "place"], ["whose", "possession"]] },
          { t: "order", words: ["the", "book", "is", "This", "that", "I", "read"], answer: "This is the book that I read" },
          { t: "correct", wrong: "Despite it was raining, we went out.", answer: "Despite the rain, we went out.", why: "\"Despite\" takes a noun or gerund, not a full clause." },
          { t: "translate", q: "Translate into English: رغم التكلفة، اشتريناه", a: ["despite the cost we bought it", "although it was expensive we bought it"], why: "رغم = \"Despite\" + اسم." },
          { t: "listen", text: "The proposal, which was rejected last year, has now been approved.", q: "What happened to the proposal?", o: ["It was rejected then approved", "It was always approved", "It was cancelled"], a: 0, why: "\"which was rejected last year, has now been approved.\"" },
          { t: "write", prompt: "Write three complex sentences using a relative clause, a participle clause and a concession.", keywords: ["who", "which", "having", "although", "despite"], minWords: 30 }
        ]
      },

      /* ---------------- UNIT 3 ---------------- */
      {
        n: 3,
        title: "Idioms & Collocations",
        theme: "Natural word combinations, idioms, register and precision",
        lessons: [
          { t: "What Are Collocations?", obj: "Learn words that naturally go together.", pts: ["We say \"make a decision\", not \"do a decision\".", "We say \"heavy rain\", not \"strong rain\".", "Common patterns: make/do, take/have, get/give.", "Collocations are learned in chunks, not word by word.", "Using natural collocations is a mark of fluency."] },
          { t: "Everyday Idioms", obj: "Use common idioms naturally.", pts: ["Let's call it a day — I'm exhausted.", "That's a piece of cake.", "He's always on the ball.", "Don't worry, it's not the end of the world.", "She got cold feet before the presentation."] },
          { t: "Idioms About Work and Effort", obj: "Talk about effort and success idiomatically.", pts: ["We need to pull our weight.", "He's burning the candle at both ends.", "Let's get down to business.", "She went the extra mile for the client.", "They cut corners and it cost them."] },
          { t: "Idioms About Feelings", obj: "Express emotion with idiomatic language.", pts: ["I was over the moon when I heard.", "She's feeling a bit under the weather.", "He was on cloud nine after the news.", "I'm in two minds about it.", "That really got on my nerves."] },
          { t: "Register and Precision", obj: "Choose the right level of language.", pts: ["Formal: The proposal was rejected. / Informal: They turned it down.", "Academic writing avoids idioms and contractions.", "Spoken English tolerates more phrasal verbs and idioms.", "Precision matters: \"big\" is vague; \"substantial\" is specific.", "Mixing registers unintentionally sounds strange."] }
        ],
        vocab: [
          { w: "call it a day", ipa: "/kɔːl ɪt ə deɪ/", pos: "idiom", def: "To stop working for the day.", ar: "ينهي العمل لليوم", ex: "It's late — let's call it a day." },
          { w: "piece of cake", ipa: "/piːs əv keɪk/", pos: "idiom", def: "Something very easy.", ar: "أمر سهل جدا", ex: "The test was a piece of cake." },
          { w: "over the moon", ipa: "/ˈəʊvə ðə muːn/", pos: "idiom", def: "Extremely happy.", ar: "سعيد جدا", ex: "She was over the moon about the job." },
          { w: "under the weather", ipa: "/ˈʌndə ðə ˈweðə/", pos: "idiom", def: "Feeling slightly ill.", ar: "متوعك", ex: "I'm feeling a bit under the weather." },
          { w: "in two minds", ipa: "/ɪn tuː maɪndz/", pos: "idiom", def: "Unable to decide.", ar: "متردد", ex: "I'm in two minds about moving." },
          { w: "cut corners", ipa: "/kʌt ˈkɔːnəz/", pos: "idiom", def: "To do something badly to save time or money.", ar: "يتحايل لتوفير الوقت", ex: "Don't cut corners on safety." },
          { w: "pull your weight", ipa: "/pʊl jɔː weɪt/", pos: "idiom", def: "To do your fair share of work.", ar: "يؤدي نصيبه من العمل", ex: "Everyone must pull their weight." },
          { w: "get down to business", ipa: "/ɡet daʊn tə ˈbɪznəs/", pos: "idiom", def: "To start the serious work.", ar: "يشرع في العمل الجدي", ex: "Let's get down to business." },
          { w: "collocation", ipa: "/ˌkɒləˈkeɪʃn/", pos: "noun", def: "A combination of words commonly used together.", ar: "تلازم لفظي", ex: "\"Heavy rain\" is a collocation." },
          { w: "vague", ipa: "/veɪɡ/", pos: "adjective", def: "Not clear or precise.", ar: "غامض", ex: "Your answer was too vague." }
        ],
        gram: {
          title: "Collocation patterns: verb + noun, adjective + noun",
          explain: {
            en: "Collocation is the way words habitually combine. There is often no logical rule: we make a decision but do the washing-up; we take a photo but have a shower. Learning collocations in chunks makes your English sound natural rather than merely correct.",
            ar: "التلازم اللفظي هو الطريقة المعتادة لاجتماع الكلمات. لا توجد قاعدة منطقية دائما: نقول make a decision و do the washing-up. وتعلم هذه التلازمات يجعل إنجليزيتك طبيعية لا صحيحة فقط.",
            fr: "Les collocations sont des associations habituelles de mots. Les apprendre par blocs rend l'anglais plus naturel."
          },
          formula: ['<span class="fx-k">make</span>: a decision, a mistake, progress, an effort, a difference', '<span class="fx-k">do</span>: homework, business, the dishes, research, harm', '<span class="fx-k">take</span>: a photo, a break, responsibility, a risk, a shower', '<span class="fx-k">heavy</span> rain/traffic · <span class="fx-k">strong</span> coffee/opinion · <span class="fx-k">high</span> price/temperature'],
          examples: [
            { en: "We need to make a decision by Friday.", ar: "نحتاج إلى اتخاذ قرار بحلول الجمعة." },
            { en: "He made a serious mistake in the report.", ar: "ارتكب خطأ جسيما في التقرير." },
            { en: "The traffic was heavy this morning.", ar: "كانت حركة المرور كثيفة هذا الصباح." },
            { en: "She took full responsibility for the delay.", ar: "تحملت المسؤولية الكاملة عن التأخير." }
          ],
          mistakes: [
            { w: "I did a big mistake.", r: "I made a big mistake.", why: "We \"make\" a mistake, not \"do\" it." },
            { w: "The rain was very strong.", r: "The rain was very heavy.", why: "\"Heavy rain\" is the natural collocation." },
            { w: "Please do a photo of us.", r: "Please take a photo of us.", why: "We \"take\" a photo." }
          ]
        },
        listen: {
          title: "A difficult Monday",
          lines: [
            { who: "Omar", text: "You look exhausted. Rough morning?" },
            { who: "Sara", text: "You could say that. I've been burning the candle at both ends all week." },
            { who: "Omar", text: "Anything I can help with?" },
            { who: "Sara", text: "The client changed the brief again, and now I'm in two minds about the whole design." },
            { who: "Omar", text: "Honestly, don't cut corners on that one. It's their biggest campaign." },
            { who: "Sara", text: "I know. I just need to get down to business and stop overthinking." },
            { who: "Omar", text: "Exactly. And after this, let's call it a day early — you've earned it." },
            { who: "Sara", text: "That sounds like a piece of cake compared to today." }
          ],
          q: [
            { q: "What does Sara mean by 'burning the candle at both ends'?", o: ["She has been working too much", "She has been relaxing", "She has been ill"], a: 0, why: "The idiom means working very hard with little rest." },
            { q: "Why is Sara in two minds?", o: ["The client changed the brief", "She lost the file", "She wants a new job"], a: 0, why: "\"The client changed the brief again, and now I'm in two minds.\"" },
            { q: "What does Omar warn against?", o: ["Cutting corners", "Taking a break", "Working late"], a: 0, why: "\"don't cut corners on that one.\"" }
          ]
        },
        read: {
          title: "Why fluent speakers sound fluent",
          text: "Learners often assume that fluency is about vocabulary size. It is not, or at least not mainly. Research on spoken corpora suggests that natural-sounding speech depends heavily on collocation — the habitual pairing of words. A learner who says \"I did a decision\" is understood, but the listener notices something immediately. The same learner who says \"I made a decision\" sounds native. Idioms matter too, but less than people imagine. In everyday conversation, idioms like \"call it a day\" appear regularly, yet academic and professional writing avoids them almost entirely. The key is register awareness: knowing when a phrase like \"get down to business\" is appropriate and when it would be out of place. Fluency, in other words, is as much about fit as it is about range.",
          q: [
            { q: "According to the text, fluency depends mainly on what?", o: ["Collocation", "Vocabulary size", "Grammar rules"], a: 0, why: "\"natural-sounding speech depends heavily on collocation.\"" },
            { q: "Where are idioms generally avoided?", o: ["In academic and professional writing", "In conversation", "In emails to friends"], a: 0, why: "\"academic and professional writing avoids them almost entirely.\"" },
            { q: "What is the key according to the writer?", o: ["Register awareness", "Memorising long lists", "Avoiding idioms completely"], a: 0, why: "\"The key is register awareness.\"" }
          ]
        },
        write: {
          prompt: "Write a short informal email (7 sentences) to a friend about a stressful week. Use at least four idioms and six natural collocations.",
          tips: ["Idioms fit well in informal writing", "Use collocations like \"make progress\", \"heavy workload\"", "Keep the tone friendly but the language accurate"],
          sample: "Hi Karim,\n\nSorry for the silence — I've been burning the candle at both ends this month. Work has been intense: we took on a huge project and I made a couple of mistakes early on, which set us back. I was in two minds about asking for help, but eventually I did, and it made a huge difference. My manager went the extra mile and we managed to make real progress. The deadline is next Friday, so I'm keeping my fingers crossed. After that, I'm definitely taking a break — I've earned it. Anyway, let's catch up next week, I want to hear your news.\n\nTake care,\nSara"
        },
        speak: ["Describe your week using two idioms.", "What does 'call it a day' mean?", "Tell me about a time you were in two minds.", "Use three collocations with 'make' in one answer.", "When would you avoid using idioms?"],
        ex: [
          { t: "mcq", q: "We need to ___ a decision quickly.", o: ["do", "make", "take"], a: 1, why: "We \"make\" a decision." },
          { t: "fill", q: "The traffic was very ___ this morning.", o: ["strong", "heavy", "big"], a: 1, why: "\"Heavy traffic\" is the natural collocation." },
          { t: "mcq", q: "I'm feeling a bit ___ the weather today.", o: ["under", "over", "below"], a: 0, why: "\"Under the weather\" means feeling ill." },
          { t: "fill", q: "It's late — let's call it a ___.", o: ["day", "night", "time"], a: 0, why: "The idiom is \"call it a day\"." },
          { t: "match", pairs: [["over the moon", "very happy"], ["piece of cake", "very easy"], ["cut corners", "do something badly to save time"], ["pull your weight", "do your fair share"]] },
          { t: "order", words: ["get", "Let's", "down", "to", "business"], answer: "Let's get down to business" },
          { t: "correct", wrong: "I did a big mistake in the report.", answer: "I made a big mistake in the report.", why: "The collocation is \"make a mistake\"." },
          { t: "translate", q: "Translate into English: أتحمل المسؤولية", a: ["i take responsibility", "i take full responsibility"], why: "تحمل المسؤولية = \"take responsibility\"." },
          { t: "listen", text: "She was over the moon when she heard the news.", q: "How did she feel?", o: ["Extremely happy", "Disappointed", "Nervous"], a: 0, why: "\"Over the moon\" means extremely happy." },
          { t: "write", prompt: "Write three sentences using idioms about work and feelings.", keywords: ["day", "moon", "weight", "cake"], minWords: 22 }
        ]
      },

      /* ---------------- UNIT 4 ---------------- */
      {
        n: 4,
        title: "Professional & Business English",
        theme: "Meetings, negotiations, reports and corporate communication",
        lessons: [
          { t: "Running a Meeting", obj: "Chair a meeting efficiently.", pts: ["Shall we make a start? We have a lot to get through.", "Let's keep to the agenda.", "Could we park that point for now?", "Let's take that offline.", "To wrap up, we have three action points."] },
          { t: "Negotiating Effectively", obj: "Use professional negotiation language.", pts: ["We're prepared to offer X, provided that Y.", "That's outside our budget, I'm afraid.", "Let's explore a middle ground.", "If you can move on price, we can move on delivery.", "I think we have a deal."] },
          { t: "Writing Reports", obj: "Structure a professional report.", pts: ["Executive summary: the key findings in one paragraph.", "Introduction: purpose and scope.", "Findings: data and evidence.", "Recommendations: what should be done.", "Appendix: supporting detail."] },
          { t: "Presenting Data", obj: "Describe trends and figures precisely.", pts: ["Sales rose sharply in the third quarter.", "There was a slight decline in April.", "Revenue has remained stable since June.", "The figure peaked at 4.2 million.", "Costs are expected to level off."] },
          { t: "Difficult Conversations", obj: "Handle sensitive professional situations.", pts: ["I'd like to raise a concern about the timeline.", "I appreciate your position, but we need clarity.", "Let's agree on how we will communicate going forward.", "I think there has been a misunderstanding.", "Can we find a solution that works for both of us?"] }
        ],
        vocab: [
          { w: "agenda", ipa: "/əˈdʒendə/", pos: "noun", def: "A list of topics for a meeting.", ar: "جدول أعمال", ex: "Please review the agenda beforehand." },
          { w: "stakeholder", ipa: "/ˈsteɪkhəʊldə/", pos: "noun", def: "A person with an interest in a project or business.", ar: "صاحب مصلحة", ex: "We consulted all stakeholders." },
          { w: "revenue", ipa: "/ˈrevənjuː/", pos: "noun", def: "Money a company receives from business.", ar: "إيرادات", ex: "Revenue grew by nine percent." },
          { w: "forecast", ipa: "/ˈfɔːkɑːst/", pos: "noun / verb", def: "A prediction based on data.", ar: "توقعات", ex: "The forecast is optimistic." },
          { w: "feasible", ipa: "/ˈfiːzəbl/", pos: "adjective", def: "Possible to do successfully.", ar: "قابل للتنفيذ", ex: "Is the timeline feasible?" },
          { w: "leverage", ipa: "/ˈliːvərɪdʒ/", pos: "verb / noun", def: "To use something to gain an advantage.", ar: "يستفيد من / نفوذ", ex: "We can leverage our network." },
          { w: "streamline", ipa: "/ˈstriːmlaɪn/", pos: "verb", def: "To make a process simpler and more efficient.", ar: "يبسط", ex: "We streamlined the approval process." },
          { w: "benchmark", ipa: "/ˈbentʃmɑːk/", pos: "noun", def: "A standard used for comparison.", ar: "معيار مرجعي", ex: "This is the industry benchmark." },
          { w: "contingency", ipa: "/kənˈtɪndʒənsi/", pos: "noun", def: "A plan for a possible future problem.", ar: "خطة بديلة", ex: "Do we have a contingency plan?" },
          { w: "deliverable", ipa: "/dɪˈlɪvərəbl/", pos: "noun", def: "A concrete result that must be produced.", ar: "مخرج مطلوب", ex: "The first deliverable is due in June." }
        ],
        gram: {
          title: "Hedging and diplomatic language in business",
          explain: {
            en: "Business English often requires you to be firm without being confrontational. Modal verbs (could, might, would), passive structures and negative questions all soften a message. \"This is wrong\" becomes \"I think there may be an issue here.\"",
            ar: "الإنجليزية المهنية تتطلب الحزم دون المواجهة. الأفعال الناقصة والتراكيب المبنية للمجهول والأسئلة المنفية تلطف الرسالة.",
            fr: "L'anglais professionnel exige de la fermeté sans confrontation : modaux, passif et questions négatives adoucissent le message."
          },
          formula: ['Direct → <span class="fx-k">Diplomatic</span>: You are late → I think there may have been a misunderstanding about timing.', 'Softeners: <span class="fx-k">I\'m afraid / it seems / to some extent / arguably</span>', 'Negative questions: <span class="fx-k">Wouldn\'t it be better to</span> ...?', 'Tentative: <span class="fx-k">We might consider</span> ... · <span class="fx-k">Could we possibly</span> ...?'],
          examples: [
            { en: "I'm afraid that timeline may not be feasible.", ar: "أخشى أن هذا الجدول الزمني قد لا يكون قابلا للتنفيذ." },
            { en: "Wouldn't it be more efficient to combine the two reports?", ar: "ألن يكون أكثر كفاءة دمج التقريرين؟" },
            { en: "We might consider a phased approach.", ar: "قد نفكر في نهج تدريجي." },
            { en: "There seems to be some confusion about the deadline.", ar: "يبدو أن هناك بعض الالتباس بشأن الموعد النهائي." }
          ],
          mistakes: [
            { w: "Your report is wrong.", r: "I think there may be an issue with the figures in the report.", why: "Soften the criticism to protect the relationship." },
            { w: "We can't do that.", r: "That might be difficult within the current budget.", why: "Use hedged, forward-looking language." },
            { w: "You didn't send the file.", r: "I don't seem to have received the file — could you resend it?", why: "Avoid blame; focus on the action needed." }
          ]
        },
        listen: {
          title: "A project review meeting",
          lines: [
            { who: "Chair", text: "Let's make a start. First item: the delivery timeline." },
            { who: "Dev", text: "I'm afraid the timeline may not be feasible. We're waiting on two suppliers." },
            { who: "Chair", text: "Could we possibly phase the launch?" },
            { who: "Dev", text: "That would work, provided that marketing can hold the campaign." },
            { who: "Marketing", text: "We might consider a soft launch in June and the full launch in September." },
            { who: "Chair", text: "Good. What's the contingency if a supplier fails?" },
            { who: "Dev", text: "We have a secondary supplier, although the price is roughly ten percent higher." },
            { who: "Chair", text: "Noted. Let's take the budget detail offline and wrap up." }
          ],
          q: [
            { q: "Why may the timeline not be feasible?", o: ["They are waiting on two suppliers", "The budget was cut", "Staff are on holiday"], a: 0, why: "\"We're waiting on two suppliers.\"" },
            { q: "What does Marketing propose?", o: ["A soft launch in June and a full launch in September", "Cancelling the launch", "Launching in December"], a: 0, why: "\"a soft launch in June and the full launch in September.\"" },
            { q: "What is the contingency plan?", o: ["A secondary supplier at higher cost", "Hiring more staff", "Delaying a year"], a: 0, why: "\"We have a secondary supplier, although the price is roughly ten percent higher.\"" }
          ]
        },
        read: {
          title: "Executive summary: Q3 performance",
          text: "Revenue rose by nine percent in the third quarter, exceeding the forecast of six percent. Growth was driven mainly by the enterprise segment, where the number of new contracts increased from 34 to 51. Retail performance, by contrast, remained flat, and the figure has been stable since June. Operating costs increased by four percent, largely as a result of higher energy prices, although this was partially offset by the streamlining of the approval process introduced in July. Customer retention improved slightly, reaching 88 percent against an industry benchmark of 85. On the basis of these results, the board is recommended to approve additional investment in the enterprise sales team, while maintaining current spending in retail pending a fuller review in Q1.",
          q: [
            { q: "By how much did revenue rise?", o: ["Nine percent", "Six percent", "Four percent"], a: 0, why: "\"Revenue rose by nine percent in the third quarter.\"" },
            { q: "Which segment drove growth?", o: ["Enterprise", "Retail", "Support"], a: 0, why: "\"Growth was driven mainly by the enterprise segment.\"" },
            { q: "What is the main recommendation?", o: ["Invest more in enterprise sales", "Close the retail division", "Cut all costs"], a: 0, why: "\"the board is recommended to approve additional investment in the enterprise sales team.\"" }
          ]
        },
        write: {
          prompt: "Write a short business report (8–10 sentences) summarising performance and making recommendations. Include a figure, a comparison and one diplomatic criticism.",
          tips: ["Structure: summary, findings, recommendation", "Use precise data language: rose, declined, remained stable, peaked", "Soften any criticism with hedging"],
          sample: "This report summarises the performance of the customer support team in the first half of the year. Response times improved from 14 hours to 6 hours, exceeding the target of 8 hours. Customer satisfaction rose slightly, from 78 to 82 percent, although it remains below the industry benchmark of 88 percent. The main area of concern is the backlog of unresolved tickets, which increased by 22 percent in May and June. It seems likely that this was caused by the temporary loss of two team members rather than by any process failure. Nevertheless, I would suggest that we review the escalation procedure, as some cases appear to be waiting unnecessarily. I would also recommend a phased recruitment of one additional agent, subject to budget approval. A fuller review should be carried out in the fourth quarter. I would be happy to discuss these findings at your convenience."
        },
        speak: ["Chair a short meeting about a project delay.", "Negotiate a price with me diplomatically.", "Describe a trend using data language.", "Raise a concern about a deadline professionally.", "Give a diplomatic criticism of a report."],
        ex: [
          { t: "mcq", q: "Sales ___ sharply in the third quarter.", o: ["rose", "raised", "risen"], a: 0, why: "\"Rose\" is the past of \"rise\" (to go up)." },
          { t: "fill", q: "The figure ___ at 4.2 million in May.", o: ["peaked", "peeked", "picked"], a: 0, why: "\"Peaked\" means reached its highest point." },
          { t: "mcq", q: "I'm ___ the timeline may not be feasible.", o: ["afraid", "scared", "worried of"], a: 0, why: 'The diplomatic formula is "I\'m afraid".' },
          { t: "fill", q: "That's outside our ___, I'm afraid.", o: ["budget", "money", "cost"], a: 0, why: '"Outside our budget" is the standard phrase.' },
          { t: "match", pairs: [["rose", "went up"], ["declined", "went down"], ["remained stable", "did not change"], ["peaked", "reached the highest point"]] },
          { t: "order", words: ["to", "Let's", "the", "keep", "agenda"], answer: "Let's keep to the agenda" },
          { t: "correct", wrong: "Your report is completely wrong.", answer: "I think there may be an issue with the figures in the report.", why: "Soften criticism to protect the working relationship." },
          { t: "translate", q: "Translate into English: أعتقد أن هناك سوء فهم", a: ["i think there has been a misunderstanding", "i think there is a misunderstanding"], why: "سوء فهم = \"misunderstanding\"." },
          { t: "listen", text: "Revenue has remained stable since June, although costs rose by four percent.", q: "What happened to costs?", o: ["They rose by four percent", "They fell", "They stayed the same"], a: 0, why: "The speaker says \"costs rose by four percent\"." },
          { t: "write", prompt: "Write three sentences describing a business trend using precise data language.", keywords: ["rose", "declined", "remained", "percent"], minWords: 24 }
        ]
      },

      /* ---------------- UNIT 5 ---------------- */
      {
        n: 5,
        title: "Debates & Persuasion",
        theme: "Building arguments, rebuttals, rhetoric and logical fallacies",
        lessons: [
          { t: "Structuring an Argument", obj: "Build a clear, logical case.", pts: ["My argument has three parts.", "First, I will establish the problem.", "Second, I will show why current solutions fail.", "Third, I will propose an alternative.", "The evidence for this is well documented."] },
          { t: "Rebuttal and Counter-Argument", obj: "Respond to the opposing case.", pts: ["My opponent claims that X, but this overlooks Y.", "That argument rests on a false assumption.", "Even if we accept that point, it does not follow that...", "The evidence suggests the opposite.", "I concede that point, but it does not affect my conclusion."] },
          { t: "Rhetorical Techniques", obj: "Use persuasive devices responsibly.", pts: ["Rule of three: clear, credible and cost-effective.", "Rhetorical question: How long must we wait?", "Anaphora: We will not stop. We will not slow down.", "Contrast: Not because it is easy, but because it is hard.", "Concrete example: In 2023, this policy saved 4,000 lives."] },
          { t: "Logical Fallacies", obj: "Spot and avoid weak reasoning.", pts: ["Straw man: misrepresenting the opponent's view.", "False dilemma: presenting only two options.", "Ad hominem: attacking the person, not the argument.", "Appeal to authority: citing an expert outside their field.", "Slippery slope: assuming one step leads to disaster."] },
          { t: "Persuasive Delivery", obj: "Deliver your argument with impact.", pts: ["Pause before your key point.", "Slow down on the important words.", "Use repetition deliberately, not accidentally.", "Address the strongest opposing view, not the weakest.", "Finish with a memorable, short sentence."] }
        ],
        vocab: [
          { w: "premise", ipa: "/ˈpremɪs/", pos: "noun", def: "A statement on which an argument is based.", ar: "مقدمة منطقية", ex: "The premise of the argument is flawed." },
          { w: "rebuttal", ipa: "/rɪˈbʌtl/", pos: "noun", def: "A response that contradicts an argument.", ar: "دحض", ex: "She gave a strong rebuttal." },
          { w: "concede", ipa: "/kənˈsiːd/", pos: "verb", def: "To admit a point is true.", ar: "يسلّم بـ", ex: "I concede that the cost is high." },
          { w: "compelling", ipa: "/kəmˈpelɪŋ/", pos: "adjective", def: "Very convincing and interesting.", ar: "مقنع بقوة", ex: "He made a compelling case." },
          { w: "fallacy", ipa: "/ˈfæləsi/", pos: "noun", def: "A mistaken belief or faulty reasoning.", ar: "مغالطة", ex: "That is a common fallacy." },
          { w: "credible", ipa: "/ˈkredəbl/", pos: "adjective", def: "Able to be believed or trusted.", ar: "موثوق", ex: "We need credible evidence." },
          { w: "rhetoric", ipa: "/ˈretərɪk/", pos: "noun", def: "The art of persuasive speaking or writing.", ar: "بلاغة", ex: "His rhetoric was powerful." },
          { w: "undermine", ipa: "/ˌʌndəˈmaɪn/", pos: "verb", def: "To weaken something gradually.", ar: "يقوّض", ex: "This evidence undermines their case." },
          { w: "counterproductive", ipa: "/ˌkaʊntəprəˈdʌktɪv/", pos: "adjective", def: "Having the opposite effect to the one intended.", ar: "معاكس للنتيجة المرجوة", ex: "The measure was counterproductive." },
          { w: "untenable", ipa: "/ʌnˈtenəbl/", pos: "adjective", def: "Impossible to defend or maintain.", ar: "غير قابل للدفاع", ex: "Their position became untenable." }
        ],
        gram: {
          title: "Conditional and concessive structures for argumentation",
          explain: {
            en: "Debate requires hypothetical reasoning. Master \"even if\", \"were ... to\", \"should ... \", \"on the assumption that\", and inverted conditionals: \"Were the government to act now, ...\" These allow you to explore consequences without committing to a position.",
            ar: "المناظرة تتطلب تفكيرا افتراضيا. أتقن تراكيب مثل even if و were ... to و should والشرط المعكوس.",
            fr: "Le débat exige des hypothèses : « even if », « were... to », conditionnelles inversées."
          },
          formula: ['<span class="fx-k">Even if</span> + present, ... → Even if we accept that, the conclusion does not follow.', '<span class="fx-k">Were</span> + subject + to + verb → Were the government to act now, the crisis would ease.', '<span class="fx-k">Should</span> + subject + verb → Should the talks fail, we have a contingency.', '<span class="fx-k">On the assumption that</span> / <span class="fx-k">Granted that</span> ...'],
          examples: [
            { en: "Even if the figures are correct, they do not prove causation.", ar: "حتى لو كانت الأرقام صحيحة، فهي لا تثبت السببية." },
            { en: "Were the policy to be reversed, the market would react badly.", ar: "لو تم عكس السياسة، لتفاعل السوق بشكل سيئ." },
            { en: "Should the negotiations fail, we will pursue legal action.", ar: "إذا فشلت المفاوضات، سنلجأ إلى الإجراءات القانونية." },
            { en: "Granted that the cost is high, the long-term benefit is substantial.", ar: "بافتراض أن التكلفة مرتفعة، فإن الفائدة طويلة الأمد كبيرة." }
          ],
          mistakes: [
            { w: "Even if the figures will be correct, ...", r: "Even if the figures are correct, ...", why: "Do not use \"will\" after \"even if\"." },
            { w: "If the government would act now...", r: "Were the government to act now...", why: "Formal hypothetical inversion uses \"were ... to\"." },
            { w: "Should the talks will fail...", r: "Should the talks fail...", why: "After \"should\" in this structure use the base verb." }
          ]
        },
        listen: {
          title: "A formal debate on remote work",
          lines: [
            { who: "Speaker A", text: "My argument is simple: remote work increases productivity and reduces costs." },
            { who: "Speaker B", text: "My opponent claims productivity has risen, but that rests on a false premise. The studies he cites measure output, not quality." },
            { who: "Speaker A", text: "I concede that the evidence is mixed, but the trend is clear." },
            { who: "Speaker B", text: "Even if the trend is clear, it does not follow that remote work is the cause. The period coincided with a labour shortage." },
            { who: "Speaker A", text: "Were we to ignore these gains, we would lose talent to competitors." },
            { who: "Speaker B", text: "And were we to ignore the isolation reported by junior staff, we would lose them instead." },
            { who: "Moderator", text: "Both sides have made compelling points. Let's move to the audience." },
            { who: "Speaker A", text: "One last thing: this is not a binary choice. Hybrid models exist." }
          ],
          q: [
            { q: "What is Speaker B's main objection?", o: ["The studies measure output, not quality", "Remote work is illegal", "The data is too old"], a: 0, why: "\"The studies he cites measure output, not quality.\"" },
            { q: "What does Speaker B say the period coincided with?", o: ["A labour shortage", "An economic boom", "A recession"], a: 0, why: "\"The period coincided with a labour shortage.\"" },
            { q: "What point does Speaker A make at the end?", o: ["It is not a binary choice; hybrid models exist", "Remote work should be mandatory", "The debate is over"], a: 0, why: "\"this is not a binary choice. Hybrid models exist.\"" }
          ]
        },
        read: {
          title: "How to lose an argument",
          text: "Most people believe they argue badly because they lack facts. In reality, they argue badly because they use the wrong structure. The most common mistake is attacking the weakest version of the opposing view, a technique known as the straw man. It feels like a victory, but any informed listener notices immediately. A second error is the false dilemma: presenting the choice as two extremes when many positions exist between them. A third is treating correlation as causation. Cities with more universities tend to have higher incomes, but this does not prove that building a university makes a city richer. Finally, and most damagingly, people attack the speaker rather than the claim. The moment you say \"you would think that, wouldn't you\", you have stopped arguing and started performing. Strong debaters do the opposite: they state their opponent's case better than the opponent did, and then explain precisely where it fails.",
          q: [
            { q: "According to the writer, why do people argue badly?", o: ["They use the wrong structure", "They lack facts", "They speak too fast"], a: 0, why: "\"they argue badly because they use the wrong structure.\"" },
            { q: "What is the straw man technique?", o: ["Attacking the weakest version of the opposing view", "Citing false data", "Interrupting"], a: 0, why: "\"attacking the weakest version of the opposing view, a technique known as the straw man.\"" },
            { q: "What do strong debaters do?", o: ["State the opponent's case better than the opponent", "Shout louder", "Avoid all disagreement"], a: 0, why: "\"they state their opponent's case better than the opponent did.\"" }
          ]
        },
        write: {
          prompt: "Write a debate speech (9–10 sentences) arguing for or against: 'Artificial intelligence will destroy more jobs than it creates.' Include a rebuttal, a concession and a rhetorical device.",
          tips: ["State your thesis in the first sentence", "Concede one point to show balance", "Use the rule of three and one rhetorical question"],
          sample: "Artificial intelligence will not destroy more jobs than it creates, but it will destroy different ones. My argument has three parts: first, the historical pattern of automation; second, the nature of current AI limitations; and third, the policy choices available to us. Every previous wave of automation — steam, electricity, computing — eliminated specific roles while creating categories of work that nobody had imagined. Even if we accept that this wave is faster, speed is not the same as scale. My opponent claims that AI will replace entire professions, but this rests on a false assumption: that current systems understand context. They do not. They predict patterns, often impressively, but they cannot take responsibility. Should we ignore the genuine disruption to routine work? Of course not. That is why retraining policy matters more than prohibition. So the question is not whether machines will work. It is whether we will choose to prepare people for the work that remains."
        },
        speak: ["Argue for or against remote work.", "Rebut this claim: 'Exams measure intelligence'.", "Use a rhetorical question to make a point.", "Identify a logical fallacy in a common argument.", "Concede a point, then explain why your position still holds."],
        ex: [
          { t: "mcq", q: "Even if the figures ___ correct, they do not prove causation.", o: ["are", "will be", "were being"], a: 0, why: "Do not use \"will\" after \"even if\"." },
          { t: "fill", q: "___ the government to act now, the crisis would ease.", o: ["Were", "Was", "If"], a: 0, why: "Formal hypothetical inversion uses \"Were + subject + to\"." },
          { t: "mcq", q: "That argument rests on a false ___.", o: ["premise", "promise", "premises"], a: 0, why: "\"Premise\" is the basis of an argument." },
          { t: "fill", q: "I ___ that the evidence is mixed, but the trend is clear.", o: ["concede", "conceal", "conclude"], a: 0, why: "\"Concede\" means admit a point." },
          { t: "match", pairs: [["straw man", "misrepresenting the opponent"], ["false dilemma", "only two options presented"], ["ad hominem", "attacking the person"], ["slippery slope", "one step leads to disaster"]] },
          { t: "order", words: ["does", "not", "follow", "It", "that"], answer: "It does not follow that" },
          { t: "correct", wrong: "If the government would act now, the crisis would ease.", answer: "Were the government to act now, the crisis would ease.", why: "Formal hypothetical uses inversion with \"were ... to\"." },
          { t: "translate", q: "Translate into English: هذا لا يثبت السببية", a: ["this does not prove causation", "that does not prove causation"], why: "السببية = \"causation\"." },
          { t: "listen", text: "I concede that the cost is high, but the long-term benefit outweighs it.", q: "What does the speaker concede?", o: ["The cost is high", "The benefit is small", "Nothing"], a: 0, why: "\"I concede that the cost is high.\"" },
          { t: "write", prompt: "Write three sentences building a persuasive argument with one concession.", keywords: ["concede", "even if", "therefore"], minWords: 30 }
        ]
      },

      /* ---------------- UNIT 6 ---------------- */
      {
        n: 6,
        title: "Presentations & Public Speaking",
        theme: "Structure, signposting, delivery and handling questions",
        lessons: [
          { t: "Structuring a Presentation", obj: "Organise a talk that lands.", pts: ["Tell them what you will say, say it, then summarise.", "Three main points is usually the right number.", "Open with a hook: a question, a statistic or a story.", "Close with a clear call to action.", "One idea per slide."] },
          { t: "Signposting Language", obj: "Guide your audience clearly.", pts: ["I'd like to begin by looking at...", "Let's now turn to the second point.", "This brings me to my next slide.", "As you can see from this chart...", "To summarise the key points..."] },
          { t: "Describing Visuals", obj: "Talk about charts and graphs accurately.", pts: ["This chart shows the trend over five years.", "The blue bar represents 2024.", "There was a steady increase between 2020 and 2023.", "Notice the sharp drop in the final quarter.", "Overall, the pattern is consistent."] },
          { t: "Delivery and Body Language", obj: "Present with presence and control.", pts: ["Slow down — nerves make people speak faster.", "Pause after key points; silence is powerful.", "Make eye contact with three or four people.", "Use your hands to emphasise, not to fidget.", "Stand still when you make your main point."] },
          { t: "Handling Questions", obj: "Answer questions confidently.", pts: ["That's a good question. Let me address it in two parts.", "I don't have that figure to hand, but I'll follow up.", "If I understand correctly, you're asking about...", "That's outside the scope of this talk, I'm afraid.", "Does that answer your question?"] }
        ],
        vocab: [
          { w: "signpost", ipa: "/ˈsaɪnpəʊst/", pos: "verb / noun", def: "To guide the audience through a talk.", ar: "يوجّه", ex: "Signpost clearly between sections." },
          { w: "audience", ipa: "/ˈɔːdiəns/", pos: "noun", def: "The people watching or listening.", ar: "جمهور", ex: "Know your audience." },
          { w: "hook", ipa: "/hʊk/", pos: "noun", def: "An opening that grabs attention.", ar: "مقدمة جاذبة", ex: "Start with a strong hook." },
          { w: "concise", ipa: "/kənˈsaɪs/", pos: "adjective", def: "Brief and clear.", ar: "موجز", ex: "Keep your slides concise." },
          { w: "emphasis", ipa: "/ˈemfəsɪs/", pos: "noun", def: "Special importance given to something.", ar: "توكيد / إبراز", ex: "Put emphasis on the conclusion." },
          { w: "engagement", ipa: "/ɪnˈɡeɪdʒmənt/", pos: "noun", def: "The audience's attention and involvement.", ar: "تفاعل", ex: "Questions increase engagement." },
          { w: "rehearse", ipa: "/rɪˈhɜːs/", pos: "verb", def: "To practise a performance.", ar: "يتدرب", ex: "Rehearse the opening twice." },
          { w: "succinct", ipa: "/səkˈsɪŋkt/", pos: "adjective", def: "Expressed clearly in few words.", ar: "موجز وواضح", ex: "Give a succinct answer." },
          { w: "takeaway", ipa: "/ˈteɪkəweɪ/", pos: "noun", def: "The main point the audience should remember.", ar: "الخلاصة", ex: "What's the key takeaway?" },
          { w: "poise", ipa: "/pɔɪz/", pos: "noun", def: "Calm, confident control.", ar: "رزانة", ex: "She spoke with great poise." }
        ],
        gram: {
          title: "Nominalisation and impersonal structures for formal speech",
          explain: {
            en: "Formal presentations favour nominalisation — turning verbs into nouns: \"costs increased\" becomes \"there was an increase in costs\". Impersonal structures (\"it is widely accepted that\", \"the data suggests\") create distance and sound objective.",
            ar: "العروض الرسمية تفضل الاسمية بتحويل الأفعال إلى أسماء، والتراكيب غير الشخصية التي تبدو موضوعية.",
            fr: "Les présentations formelles privilégient la nominalisation et les structures impersonnelles."
          },
          formula: ['Verb → Noun: <span class="fx-k">increase</span> → <span class="fx-v">an increase in</span> · <span class="fx-k">fail</span> → <span class="fx-v">a failure of</span>', 'Impersonal: <span class="fx-k">It is widely accepted that</span> ... · <span class="fx-k">The data suggests</span> ...', 'Passive for objectivity: <span class="fx-k">It has been demonstrated that</span> ...', 'Cautious claims: <span class="fx-k">The evidence would appear to indicate</span> ...'],
          examples: [
            { en: "There was a significant increase in demand.", ar: "حدثت زيادة كبيرة في الطلب." },
            { en: "It is widely accepted that early education matters.", ar: "من المقبول على نطاق واسع أن التعليم المبكر مهم." },
            { en: "The data suggests a correlation, not a cause.", ar: "تشير البيانات إلى ارتباط لا سببية." },
            { en: "The evidence would appear to indicate a change in behaviour.", ar: "يبدو أن الأدلة تشير إلى تغير في السلوك." }
          ],
          mistakes: [
            { w: "The costs increased happened last year.", r: "The increase in costs happened last year.", why: "Nominalise consistently; do not mix verb and noun forms." },
            { w: "I think that maybe the data is possibly wrong.", r: "The data may be unreliable.", why: "Stacked hedges weaken the statement; choose one." },
            { w: "It is known by everyone that...", r: "It is widely accepted that...", why: "Use standard impersonal formulations." }
          ]
        },
        listen: {
          title: "Opening of a conference talk",
          lines: [
            { who: "Speaker", text: "Good morning. I'd like to begin with a number: 1.3 billion people are currently learning a language." },
            { who: "Speaker", text: "Only one in five of them will reach an advanced level. That is the problem I want to talk about today." },
            { who: "Speaker", text: "My talk has three parts. First, why most learners plateau. Second, what the research says about practice. And third, what you can do differently tomorrow." },
            { who: "Speaker", text: "Let's start with the plateau. As you can see from this chart, progress is not linear." },
            { who: "Speaker", text: "Notice the flat section between month eight and month fourteen. This is where most people quit." },
            { who: "Speaker", text: "This brings me to my second point: the type of practice matters more than the amount." },
            { who: "Speaker", text: "To summarise, progress depends on difficulty, feedback and consistency." },
            { who: "Speaker", text: "I'll leave you with one question: what is the hardest thing you could practise this week?" }
          ],
          q: [
            { q: "How many people are learning a language?", o: ["1.3 billion", "130 million", "13 million"], a: 0, why: "\"1.3 billion people are currently learning a language.\"" },
            { q: "How many reach an advanced level?", o: ["One in five", "One in ten", "Half"], a: 0, why: "\"Only one in five of them will reach an advanced level.\"" },
            { q: "What does the speaker say progress depends on?", o: ["Difficulty, feedback and consistency", "Talent and age", "Money and time"], a: 0, why: "\"progress depends on difficulty, feedback and consistency.\"" }
          ]
        },
        read: {
          title: "The science of speaking in public",
          text: "Public speaking is not primarily a talent; it is a set of learnable behaviours. Research on audience attention suggests three findings that are consistently replicated. First, attention declines sharply after roughly ten minutes, which is why successful speakers change pace, use visuals or ask questions at regular intervals. Second, audiences remember the beginning and the end far better than the middle, a pattern known as the primacy-recency effect. This is why a strong opening and a clear closing matter more than any individual slide. Third, and perhaps most surprisingly, perceived confidence correlates more strongly with pace and pauses than with content. Speakers who slow down and pause before key points are rated as significantly more credible, even when the content is identical. In other words, how you deliver the message can matter as much as what the message contains.",
          q: [
            { q: "When does attention decline sharply?", o: ["After roughly ten minutes", "After one minute", "After an hour"], a: 0, why: "\"attention declines sharply after roughly ten minutes.\"" },
            { q: "Which parts do audiences remember best?", o: ["The beginning and the end", "The middle", "The slides"], a: 0, why: "\"audiences remember the beginning and the end far better than the middle.\"" },
            { q: "What correlates with perceived confidence?", o: ["Pace and pauses", "Content length", "Slide design"], a: 0, why: "\"perceived confidence correlates more strongly with pace and pauses than with content.\"" }
          ]
        },
        write: {
          prompt: "Write the script for the opening 60 seconds of a presentation (8–10 sentences) on a topic of your choice. Include a hook, signposting and a clear structure.",
          tips: ["Open with a statistic, question or short story", "Signpost your three points explicitly", "End with a memorable line"],
          sample: "Good morning. Let me start with a question: how much of what you learned last year do you still remember? For most of us, the honest answer is very little. Today I want to explain why that happens, and what we can do about it. My talk has three parts. First, I will show why forgetting is not a failure but a design feature of the brain. Second, I will explain the two techniques that research consistently supports. And third, I will suggest a simple weekly routine that takes fifteen minutes. Let's begin with the first point. As you can see from this chart, memory decays predictably: we lose about seventy percent of new information within a week. Notice, however, the difference between the two lines. The second group did not study more; they simply reviewed at the right moments. This brings me to my central argument: the timing of practice matters more than its quantity. I will leave you with one idea. If you change only one habit this month, make it this one: review tomorrow, not tonight."
        },
        speak: ["Open a presentation with a strong hook.", "Describe a trend from an imaginary chart.", "Signpost three points in a talk.", "Answer a difficult question confidently.", "Give a 30-second summary of a talk you heard."],
        ex: [
          { t: "mcq", q: "There was a significant ___ in demand last year.", o: ["increase", "increased", "increasing"], a: 0, why: "Nominalisation turns the verb \"increase\" into a noun." },
          { t: "fill", q: "___ is widely accepted that early education matters.", o: ["It", "There", "That"], a: 0, why: 'The impersonal structure is "It is widely accepted that".' },
          { t: "mcq", q: "The blue bar ___ 2024.", o: ["represents", "repeats", "reflects on"], a: 0, why: "\"Represents\" is the correct verb for a chart element." },
          { t: "fill", q: "Let's now ___ to the second point.", o: ["turn", "turning", "turned"], a: 0, why: "After \"Let's\" use the base verb." },
          { t: "match", pairs: [["hook", "attention-grabbing opening"], ["signpost", "guide through the talk"], ["takeaway", "main point to remember"], ["rehearse", "practise beforehand"]] },
          { t: "order", words: ["summarise", "To", "key", "the", "points"], answer: "To summarise the key points" },
          { t: "correct", wrong: "I think that maybe the data is possibly wrong.", answer: "The data may be unreliable.", why: "Stacked hedges weaken your claim; use one clear hedge." },
          { t: "translate", q: "Translate into English: كما ترون من هذا الرسم البياني", a: ["as you can see from this chart", "as you can see from this graph"], why: "كما ترون = \"As you can see\"." },
          { t: "listen", text: "To summarise, the key takeaway is that consistency beats intensity.", q: "What is the key takeaway?", o: ["Consistency beats intensity", "Intensity matters most", "Practice is unnecessary"], a: 0, why: "\"consistency beats intensity.\"" },
          { t: "write", prompt: "Write three sentences opening a presentation with a hook and signposting.", keywords: ["today", "first", "second", "finally"], minWords: 26 }
        ]
      },

      /* ---------------- UNIT 7 ---------------- */
      {
        n: 7,
        title: "Advanced Listening & Accents",
        theme: "Rapid speech, accents, inference, lectures and note-taking",
        lessons: [
          { t: "Understanding Rapid Speech", obj: "Follow fast, unscripted conversation.", pts: ["Native conversation averages 150 words per minute.", "Speakers overlap, restart and self-correct constantly.", "Filler words (well, I mean, sort of) carry little meaning.", "Listen for the argument, not the words.", "Comprehension improves dramatically with topic familiarity."] },
          { t: "Major Accent Groups", obj: "Recognise differences across accents.", pts: ["British: non-rhotic — 'car' loses the final /r/.", "American: rhotic and often flatter vowels.", "Australian: raised vowels, 'day' sounds like 'die'.", "Indian English: syllable-timed rhythm, retroflex consonants.", "All are correct English; none is 'better'."] },
          { t: "Inference and Implication", obj: "Hear what is not said directly.", pts: ["'That's an interesting idea' can signal doubt.", "Understatement: 'not bad' often means 'very good'.", "Tone carries the real message, not the words.", "Listen for hesitation, which often signals disagreement.", "Speakers rarely say 'I disagree' directly."] },
          { t: "Lectures and Podcasts", obj: "Follow extended spoken discourse.", pts: ["Lectures follow predictable structures: intro, body, conclusion.", "Signposts: 'the first thing to note', 'having said that'.", "Examples are usually introduced with 'for instance'.", "Repetition signals importance, not forgetfulness.", "Take notes in the pauses, not continuously."] },
          { t: "Note-Taking Systems", obj: "Capture spoken content efficiently.", pts: ["Cornell method: notes, cues, summary.", "Use abbreviations and symbols consistently.", "Write in the language you will use later.", "Leave space to add detail after the talk.", "Review notes within 24 hours."] }
        ],
        vocab: [
          { w: "rhotic", ipa: "/ˈrəʊtɪk/", pos: "adjective", def: "Pronouncing the /r/ after a vowel.", ar: "ملفوظ بالراء", ex: "American English is rhotic." },
          { w: "understatement", ipa: "/ˌʌndəˈsteɪtmənt/", pos: "noun", def: "Saying less than the truth for effect.", ar: "تقليل من الشأن", ex: "\"Not bad\" is an understatement." },
          { w: "implication", ipa: "/ˌɪmplɪˈkeɪʃn/", pos: "noun", def: "Something suggested but not stated.", ar: "تضمين / إيحاء", ex: "The implication was clear." },
          { w: "discourse", ipa: "/ˈdɪskɔːs/", pos: "noun", def: "Spoken or written communication in context.", ar: "خطاب", ex: "Academic discourse has its own style." },
          { w: "coherence", ipa: "/kəʊˈhɪərəns/", pos: "noun", def: "Logical connection between parts.", ar: "تماسك", ex: "The lecture lacked coherence." },
          { w: "paraphrase", ipa: "/ˈpærəfreɪz/", pos: "verb", def: "To express the same meaning in different words.", ar: "يعيد الصياغة", ex: "Paraphrase the main idea." },
          { w: "gist", ipa: "/dʒɪst/", pos: "noun", def: "The main point or general meaning.", ar: "المعنى الأساسي", ex: "Give me the gist of the talk." },
          { w: "infer", ipa: "/ɪnˈfɜː/", pos: "verb", def: "To conclude from evidence rather than direct statement.", ar: "يستنتج", ex: "We can infer his position." },
          { w: "spontaneous", ipa: "/spɒnˈteɪniəs/", pos: "adjective", def: "Happening naturally without planning.", ar: "عفوي", ex: "Spontaneous speech is harder to follow." },
          { w: "accommodation", ipa: "/əˌkɒməˈdeɪʃn/", pos: "noun", def: "Adjusting your speech to your listener.", ar: "تكييف الكلام", ex: "Speakers use accommodation with foreigners." }
        ],
        gram: {
          title: "Discourse markers in spoken English",
          explain: {
            en: "Spoken English is held together by discourse markers rather than by grammar alone: \"well\", \"you know\", \"I mean\", \"actually\", \"anyway\", \"right\". They signal turns, soften statements, and buy thinking time. Understanding them is essential for following natural speech, even though they carry little propositional meaning.",
            ar: "الإنجليزية المنطوقة تتماسك بأدوات الخطاب مثل well و you know و I mean. تُظهر تغيير المتحدث وتلطف الكلام وتمنح وقتا للتفكير.",
            fr: "L'oral s'organise grâce aux marqueurs de discours : « well », « you know », « I mean », « anyway »."
          },
          formula: ['Buying time: <span class="fx-k">Well, ... / I mean, ... / Let me think ...</span>', 'Softening: <span class="fx-k">sort of / kind of / a bit / actually</span>', 'Changing direction: <span class="fx-k">Anyway, ... / By the way, ... / Moving on, ...</span>', 'Confirming: <span class="fx-k">Right. / OK. / Fair enough. / I see.</span>'],
          examples: [
            { en: "Well, I mean, it's not that simple, is it?", ar: "حسنا، أعني، الأمر ليس بهذه البساطة، أليس كذلك؟" },
            { en: "Anyway, we'll talk about that later.", ar: "على أي حال، سنتحدث عن ذلك لاحقا." },
            { en: "It's sort of difficult to explain.", ar: "من الصعب نوعا ما شرح ذلك." },
            { en: "Fair enough — I hadn't thought of it that way.", ar: "كلام معقول — لم أفكر في الأمر بهذه الطريقة." }
          ],
          mistakes: [
            { w: "Trying to translate every discourse marker.", r: "Treating them as signals, not content.", why: "They carry interactional meaning, not propositional meaning." },
            { w: "Assuming 'not bad' means poor quality.", r: "Understanding understatement as praise.", why: "British understatement often means the opposite." },
            { w: "Stopping when a speaker self-corrects.", r: "Following the final version of the sentence.", why: "Self-correction is normal in spontaneous speech." }
          ]
        },
        listen: {
          title: "An unscripted podcast extract",
          lines: [
            { who: "Host", text: "So, um, do you think, like, the whole idea of talent is a bit of a myth?" },
            { who: "Guest", text: "Well, I mean, sort of. I'd say it's more complicated than that." },
            { who: "Host", text: "Right, go on." },
            { who: "Guest", text: "OK, so, obviously some people start with advantages, you know, physical ones. But that's not really the point." },
            { who: "Guest", text: "The point is, and this is what the research keeps showing, deliberate practice explains far more than we'd like to admit." },
            { who: "Host", text: "Mm, that's an interesting way of putting it." },
            { who: "Guest", text: "Ha — I'll take that as a compliment. Anyway, the practical upshot is that most people quit too early." },
            { who: "Host", text: "Fair enough. So what would you tell a beginner?" },
            { who: "Guest", text: "Not bad question, actually. I'd say: pick one thing and be boringly consistent about it." }
          ],
          q: [
            { q: "What is the guest's view on talent?", o: ["It is more complicated than a simple myth", "Talent does not exist at all", "Talent is everything"], a: 0, why: "\"I'd say it's more complicated than that.\"" },
            { q: "What does the research keep showing?", o: ["Deliberate practice explains a lot", "Talent explains everything", "Practice does not matter"], a: 0, why: "\"deliberate practice explains far more than we'd like to admit.\"" },
            { q: "What does the guest advise a beginner?", o: ["Pick one thing and be consistently boring", "Try many things at once", "Wait for talent to appear"], a: 0, why: "\"pick one thing and be boringly consistent about it.\"" }
          ]
        },
        read: {
          title: "Why you understand your teacher but not the TV",
          text: "Many learners report a strange experience: they understand their teacher perfectly but struggle with television. There are several reasons, and none of them indicate a lack of ability. First, teachers accommodate their speech. They slow down, articulate clearly, use familiar vocabulary and repeat key points. This is a genuine skill, but it creates a comfortable bubble. Second, scripted drama is harder than conversation in some ways, because characters speak over one another and use cultural references that a learner may not share. Third, and most importantly, television provides no feedback. In a classroom, if you look confused, the teacher adjusts. A screen does not. The practical solution is graded exposure: start with content made for learners, then move to documentaries, then to drama. Each stage should feel slightly too difficult. If it feels comfortable, you are not yet learning.",
          q: [
            { q: "Why do learners understand their teacher better?", o: ["Teachers accommodate their speech", "Teachers use simpler grammar only", "Teachers speak their language"], a: 0, why: "\"teachers accommodate their speech. They slow down, articulate clearly...\"" },
            { q: "Why is scripted drama difficult?", o: ["Characters speak over one another", "It is too short", "It has no plot"], a: 0, why: "\"characters speak over one another and use cultural references.\"" },
            { q: "What is the practical solution?", o: ["Graded exposure", "Only watching news", "Reading subtitles in your language"], a: 0, why: "\"The practical solution is graded exposure.\"" }
          ]
        },
        write: {
          prompt: "Write a paragraph (7 sentences) summarising an English podcast or talk you have listened to. Include the gist, two key points and your inference.",
          tips: ["Give the gist in one sentence", "Paraphrase rather than quote", "Add what the speaker implied but did not say"],
          sample: "Last week I listened to a podcast episode about how cities make decisions. The gist was that most urban planning fails not because of bad intentions but because of poor feedback loops. The guest made two points that stayed with me. First, cities tend to measure what is easy to count rather than what residents actually experience. Second, the most effective improvements often come from small, reversible experiments rather than from large master plans. Interestingly, the host did not challenge any of this directly, but his repeated question about cost implied some scepticism. My own inference is that the guest's approach works better in wealthy cities that can afford to experiment. Overall, the episode convinced me that feedback, not vision, is the scarce resource.",
        },
        speak: ["Summarise the gist of the last English video you watched.", "Infer the speaker's real opinion from their tone.", "What is the hardest accent for you and why?", "Give me the main point of a lecture you attended.", "Explain how you take notes while listening."],
        ex: [
          { t: "mcq", q: "In natural speech, 'not bad' often means ___.", o: ["very good", "poor quality", "average"], a: 0, why: "This is British understatement." },
            { t: "fill", q: "Discourse markers like 'well' and 'I mean' are used to buy ___ time.", o: ["thinking", "extra", "free"], a: 0, why: "They give the speaker time to think." },
            { t: "mcq", q: "American English is generally ___, pronouncing the /r/ after vowels.", o: ["rhotic", "non-rhotic", "tonal"], a: 0, why: "American English is rhotic." },
            { t: "fill", q: "Teachers ___ their speech to help learners understand.", o: ["accommodate", "accelerate", "accumulate"], a: 0, why: "\"Accommodate\" means adjust to the listener." },
            { t: "match", pairs: [["gist", "general meaning"], ["infer", "conclude indirectly"], ["understatement", "saying less than the truth"], ["paraphrase", "express differently"]] },
          { t: "order", words: ["the", "What", "gist", "is"], answer: "What is the gist" },
          { t: "correct", wrong: "You must understand every discourse marker to follow the conversation.", answer: "Discourse markers signal interaction rather than content, so you can follow without translating them.", why: "They carry interactional, not propositional, meaning." },
          { t: "translate", q: "Translate into English: فهمت الفكرة العامة", a: ["i got the gist", "i understood the gist"], why: "الفكرة العامة = \"the gist\"." },
          { t: "listen", text: "Fair enough, but the practical upshot is that most people quit too early.", q: "What is the practical upshot?", o: ["Most people quit too early", "Everyone succeeds", "Practice is useless"], a: 0, why: "\"the practical upshot is that most people quit too early.\"" },
          { t: "write", prompt: "Write three sentences summarising something you listened to, including an inference.", keywords: ["gist", "implied", "infer"], minWords: 26 }
        ]
      },

      /* ---------------- UNIT 8 ---------------- */
      {
        n: 8,
        title: "Essay Writing",
        theme: "Thesis statements, structure, evidence and academic style",
        lessons: [
          { t: "The Thesis Statement", obj: "Write a clear, arguable thesis.", pts: ["A thesis states your position in one sentence.", "It should be arguable, not obvious.", "Weak: Pollution is bad. Strong: Urban congestion pricing reduces pollution more effectively than bans.", "Place it at the end of the introduction.", "Every paragraph should support it."] },
          { t: "Essay Structure", obj: "Organise a five-paragraph essay.", pts: ["Introduction: context, problem, thesis.", "Body 1: strongest argument with evidence.", "Body 2: second argument with evidence.", "Body 3: counter-argument and rebuttal.", "Conclusion: restate thesis, no new information."] },
          { t: "Using Evidence", obj: "Support claims with credible sources.", pts: ["Integrate evidence: According to a 2024 study, ...", "Never let a quotation stand alone.", "Comment on the evidence after citing it.", "Prefer primary sources to summaries.", "Distinguish correlation from causation."] },
          { t: "Academic Style", obj: "Write in a formal, objective register.", pts: ["Avoid contractions and slang.", "Use the passive where the agent is irrelevant.", "Prefer precise verbs: 'demonstrates' not 'shows a lot'.", "Avoid absolute claims: use 'tends to', 'appears to'.", "Never use the second person 'you' in academic writing."] },
          { t: "Editing an Essay", obj: "Revise at the level of structure, then language.", pts: ["First edit for argument: does each paragraph support the thesis?", "Then edit for cohesion: do sentences connect?", "Then edit for accuracy: grammar and vocabulary.", "Then proofread for typos and punctuation.", "Read the introduction and conclusion last, together."] }
        ],
        vocab: [
          { w: "thesis", ipa: "/ˈθiːsɪs/", pos: "noun", def: "The central argument of an essay.", ar: "أطروحة", ex: "State your thesis clearly." },
          { w: "evidence", ipa: "/ˈevɪdəns/", pos: "noun", def: "Facts or information supporting a claim.", ar: "دليل", ex: "The evidence is inconclusive." },
          { w: "cite", ipa: "/saɪt/", pos: "verb", def: "To refer to a source in support of a point.", ar: "يستشهد بـ", ex: "Cite the original study." },
          { w: "coherent", ipa: "/kəʊˈhɪərənt/", pos: "adjective", def: "Logical and well organised.", ar: "متماسك", ex: "A coherent argument needs structure." },
          { w: "substantiate", ipa: "/səbˈstænʃieɪt/", pos: "verb", def: "To support a claim with evidence.", ar: "يدعم بالأدلة", ex: "He could not substantiate the claim." },
          { w: "nuance", ipa: "/ˈnjuːɑːns/", pos: "noun", def: "A small but important difference.", ar: "فارق دقيق", ex: "The nuance is easily missed." },
          { w: "counter-argument", ipa: "/ˈkaʊntə ɑːɡjumənt/", pos: "noun", def: "An argument opposing your thesis.", ar: "حجة مضادة", ex: "Address the counter-argument directly." },
          { w: "objectivity", ipa: "/ˌɒbdʒekˈtɪvəti/", pos: "noun", def: "The quality of being unbiased.", ar: "موضوعية", ex: "Academic writing values objectivity." },
          { w: "plagiarism", ipa: "/ˈpleɪdʒərɪzəm/", pos: "noun", def: "Using someone's work without credit.", ar: "انتحال", ex: "Plagiarism leads to failure." },
          { w: "concede", ipa: "/kənˈsiːd/", pos: "verb", def: "To admit a point in an argument.", ar: "يسلّم بـ", ex: "The essay concedes one weakness." }
        ],
        gram: {
          title: "Cohesion devices in academic writing",
          explain: {
            en: "Academic writing relies on explicit cohesion: linking adverbials, referencing (this, such, the former), and lexical chains (repeating key terms or using synonyms). Without these, even well-argued essays feel like disconnected observations.",
            ar: "الكتابة الأكاديمية تعتمد على التماسك الصريح: أدوات الربط، والإحالة، والسلاسل المعجمية. وبدونها تبدو المقالات الجيدة مجرد ملاحظات منفصلة.",
            fr: "L'écriture académique repose sur la cohésion explicite : connecteurs, reprises, chaînes lexicales."
          },
          formula: ['Linking: <span class="fx-k">furthermore / consequently / by contrast / nonetheless</span>', 'Reference: <span class="fx-k">this trend / such measures / the former / the latter</span>', 'Lexical chains: <span class="fx-k">congestion → traffic density → road usage</span>', 'Hedged claims: <span class="fx-k">tends to / appears to / is likely to / may well</span>'],
          examples: [
            { en: "Congestion has worsened; consequently, air quality has declined.", ar: "تفاقم الازدحام؛ وبالتالي تدهورت جودة الهواء." },
            { en: "Such measures are controversial. Nevertheless, the evidence supports them.", ar: "هذه الإجراءات مثيرة للجدل. ومع ذلك تدعمها الأدلة." },
            { en: "This trend appears to be accelerating.", ar: "يبدو أن هذا الاتجاه يتسارع." },
            { en: "The former is cheaper; the latter is more effective.", ar: "الأول أرخص والثاني أكثر فعالية." }
          ],
          mistakes: [
            { w: "You can see that pollution is bad.", r: "The evidence indicates that pollution imposes substantial costs.", why: "Academic writing avoids \"you\" and vague evaluative words." },
            { w: "It is 100% certain that this will happen.", r: "It is highly likely that this will occur.", why: "Avoid absolute certainty; hedge claims." },
            { w: "Studies show this. It is true.", r: "Studies consistently demonstrate this pattern.", why: "Integrate evidence and avoid flat assertions." }
          ]
        },
        listen: {
          title: "Feedback on a draft essay",
          lines: [
            { who: "Tutor", text: "Your thesis is clear, which is a good start. But the second paragraph doesn't support it." },
            { who: "Student", text: "I thought it did — I was explaining the historical context." },
            { who: "Tutor", text: "Context belongs in the introduction. A body paragraph should advance the argument." },
            { who: "Student", text: "So should I cut it entirely?" },
            { who: "Tutor", text: "Not entirely — condense it to two sentences and move it. And you need to substantiate your third claim." },
            { who: "Student", text: "I cited a study there." },
            { who: "Tutor", text: "You cited it, but you didn't comment on it. Never let a quotation stand alone." },
            { who: "Student", text: "Understood. I'll revise the structure first, then the language." }
          ],
          q: [
            { q: "What is the problem with the second paragraph?", o: ["It does not support the thesis", "It is too short", "It has no evidence"], a: 0, why: "\"the second paragraph doesn't support it.\"" },
            { q: "Where does the tutor say context belongs?", o: ["In the introduction", "In the conclusion", "In a footnote"], a: 0, why: "\"Context belongs in the introduction.\"" },
            { q: "What mistake did the student make with the citation?", o: ["They did not comment on it", "They used the wrong source", "They cited too many"], a: 0, why: "\"You cited it, but you didn't comment on it.\"" }
          ]
        },
        read: {
          title: "The argument against homework in primary school",
          text: "Homework in primary education is widely assumed to improve academic outcomes, yet the evidence is considerably weaker than most parents believe. A meta-analysis of over 180 studies found that, for children under eleven, the correlation between homework and achievement is close to zero. Furthermore, the practice appears to widen the gap between advantaged and disadvantaged pupils, because it assumes a quiet space and adult support that not every household can provide. This is not to say that all independent work is worthless. Short, well-designed tasks that consolidate classroom learning — such as ten minutes of reading — show modest benefits. The problem is the volume and the purpose. Consequently, a more defensible position is not that homework should be abolished, but that it should be radically reduced and clearly justified. Any task that cannot explain its own learning objective should not be set at all.",
          q: [
            { q: "What did the meta-analysis find?", o: ["The correlation between homework and achievement is close to zero for under-11s", "Homework strongly improves results", "Homework is harmful in all cases"], a: 0, why: "\"the correlation between homework and achievement is close to zero.\"" },
            { q: "Why might homework widen inequality?", o: ["It assumes a quiet space and adult support", "It is too easy", "Teachers mark it unfairly"], a: 0, why: "\"it assumes a quiet space and adult support that not every household can provide.\"" },
            { q: "What is the writer's position?", o: ["Homework should be radically reduced, not abolished", "Homework should be abolished", "Homework should be doubled"], a: 0, why: "\"homework should be abolished, but that it should be radically reduced and clearly justified.\"" }
          ]
        },
        write: {
          prompt: "Write a full essay (10–12 sentences) answering: 'Should governments invest more in public transport than in roads?' Include a thesis, two supporting arguments, one counter-argument and a conclusion.",
          tips: ["Put the thesis at the end of your introduction", "Integrate and comment on evidence", "Address the counter-argument before concluding"],
          sample: "Urban transport policy has become one of the defining political questions of the decade. As cities grow, the choice between expanding road capacity and investing in public transport has consequences that last for generations. This essay argues that public transport should receive the larger share of investment, for two reasons: it moves more people per unit of cost, and it reduces the long-term externalities that roads create.\n\nThe first argument concerns efficiency. A single metro line can carry more passengers per hour than a six-lane motorway, and it requires far less land. According to data from several European cities, this capacity advantage tends to increase as density rises, which is precisely where congestion is worst. Consequently, investment in rail produces a higher return in the places that need it most.\n\nThe second argument concerns externalities. Road expansion tends to generate additional traffic, a phenomenon known as induced demand. Furthermore, air quality and road safety both deteriorate as vehicle numbers rise. Such effects impose costs on the whole population, including those who do not drive.\n\nOpponents argue that public transport is inflexible and serves only dense corridors. This is a valid concern, and it explains why rural investment requires a different model. Nevertheless, it does not justify prioritising roads in cities, where the majority of journeys are short and predictable.\n\nIn conclusion, the evidence suggests that public transport offers greater returns in dense areas, while roads remain necessary elsewhere. A balanced policy would allocate funding according to density rather than ideology."
        },
        speak: ["State a thesis on a topic you care about.", "Give two arguments supporting your thesis.", "Address a counter-argument to your position.", "Summarise an essay you have written.", "Explain the difference between correlation and causation."],
        ex: [
          { t: "mcq", q: "A strong thesis statement should be ___.", o: ["arguable", "obvious", "a question"], a: 0, why: "A thesis must be something that can be argued." },
          { t: "fill", q: "Congestion has worsened; ___, air quality has declined.", o: ["consequently", "nevertheless", "similarly"], a: 0, why: "\"Consequently\" expresses result." },
          { t: "mcq", q: "Academic writing should avoid ___.", o: ["contractions", "passive voice", "hedging"], a: 0, why: "Contractions are too informal for academic writing." },
          { t: "fill", q: "The evidence ___ to support the claim.", o: ["appears", "appear", "appearing"], a: 0, why: "\"Evidence\" is singular, so it takes \"appears\"." },
          { t: "match", pairs: [["thesis", "central argument"], ["cite", "refer to a source"], ["substantiate", "support with evidence"], ["concede", "admit a point"]] },
          { t: "order", words: ["conclusion", "In", "the", "evidence", "suggests"], answer: "In conclusion the evidence suggests" },
          { t: "correct", wrong: "You can see that pollution is bad.", answer: "The evidence indicates that pollution imposes substantial costs.", why: "Avoid \"you\" and vague evaluative adjectives in academic writing." },
          { t: "translate", q: "Translate into English: تشير الأدلة إلى أن", a: ["the evidence suggests that", "the evidence indicates that"], why: "تشير الأدلة إلى = \"the evidence suggests\"." },
          { t: "listen", text: "You cited it, but you did not comment on it, so the evidence stands alone.", q: "What is the problem?", o: ["The evidence is not commented on", "The citation is missing", "The evidence is wrong"], a: 0, why: "\"you did not comment on it.\"" },
          { t: "write", prompt: "Write a thesis statement and one supporting paragraph (4 sentences) on a topic of your choice.", keywords: ["this essay argues", "consequently", "evidence"], minWords: 45 }
        ]
      },

      /* ---------------- UNIT 9 ---------------- */
      {
        n: 9,
        title: "Fluency Training",
        theme: "Automaticity, chunking, thinking in English, shadowing",
        lessons: [
          { t: "Why Fluency Is Not Speed", obj: "Understand what fluency really is.", pts: ["Fluency is the ability to produce language without conscious effort.", "It depends on automaticity, not on knowing more words.", "Chunks are stored whole: 'as far as I know' is one unit.", "Fluency grows through repetition, not through new input alone.", "Being slow is normal; being stuck is the real problem."] },
          { t: "Chunking and Formulaic Language", obj: "Learn language in ready-made blocks.", pts: ["Formulaic sequences cover much of everyday speech.", "'To be honest', 'I'd rather not', 'it depends on'.", "Learning chunks reduces processing time dramatically.", "Collect chunks by situation, not by grammar rule.", "Say them aloud until they need no thought."] },
          { t: "Thinking in English", obj: "Reduce translation in your head.", pts: ["Translation slows speech and creates errors.", "Start with simple internal narration: 'I'm opening the door'.", "Describe what you are doing for five minutes a day.", "Accept imperfect sentences; keep the flow going.", "Over time, the inner voice switches language."] },
          { t: "Shadowing and Repetition", obj: "Train rhythm and automaticity together.", pts: ["Shadowing: speak along with a recording, matching rhythm.", "Do not read the transcript while shadowing.", "Repeat the same clip for a week, not a new one daily.", "Focus on stress and linking, not on accent.", "Record yourself and compare."] },
          { t: "Handling Breakdowns", obj: "Keep talking when you get stuck.", pts: ["Use fillers: 'that's a good question', 'how can I put this'.", "Paraphrase instead of stopping: 'the thing you use to...'.", "Ask for help: 'what's the word for...?'", "Never abandon a sentence halfway; finish it simply.", "Repair strategies are a fluency skill, not a failure."] }
        ],
        vocab: [
          { w: "automaticity", ipa: "/ˌɔːtəməˈtɪsəti/", pos: "noun", def: "The ability to do something without conscious effort.", ar: "تلقائية", ex: "Fluency depends on automaticity." },
          { w: "chunk", ipa: "/tʃʌŋk/", pos: "noun", def: "A group of words learned and used as one unit.", ar: "وحدة لفظية", ex: "Learn chunks, not single words." },
          { w: "retrieve", ipa: "/rɪˈtriːv/", pos: "verb", def: "To bring information back from memory.", ar: "يستدعي من الذاكرة", ex: "Fast retrieval is the goal." },
          { w: "hesitation", ipa: "/ˌhezɪˈteɪʃn/", pos: "noun", def: "A pause before speaking.", ar: "تردد", ex: "Reduce hesitation with practice." },
          { w: "paraphrase", ipa: "/ˈpærəfreɪz/", pos: "verb", def: "To say the same thing in different words.", ar: "يعيد الصياغة", ex: "Paraphrase when you lack a word." },
          { w: "spontaneously", ipa: "/spɒnˈteɪniəsli/", pos: "adverb", def: "Without preparation or planning.", ar: "بشكل عفوي", ex: "She answered spontaneously." },
          { w: "consistent", ipa: "/kənˈsɪstənt/", pos: "adjective", def: "Happening regularly in the same way.", ar: "منتظم / ثابت", ex: "Be consistent with practice." },
          { w: "plateau", ipa: "/ˈplætəʊ/", pos: "noun", def: "A period of no progress.", ar: "مرحلة ثبات", ex: "Most learners hit a plateau." },
          { w: "immersion", ipa: "/ɪˈmɜːʃn/", pos: "noun", def: "Surrounding yourself completely with a language.", ar: "انغماس", ex: "Immersion accelerates fluency." },
          { w: "retention", ipa: "/rɪˈtenʃn/", pos: "noun", def: "The ability to keep information in memory.", ar: "استبقاء", ex: "Spaced repetition improves retention." }
        ],
        gram: {
          title: "Formulaic sequences and collocational frames",
          explain: {
            en: "Fluent speech is built from pre-assembled sequences rather than generated word by word. Frames such as \"the thing is...\", \"as far as I'm concerned...\", \"I was just about to...\" allow you to plan the next clause while speaking. Learning these frames is more efficient than learning grammar rules in isolation.",
            ar: "الكلام الطليق يُبنى من وحدات جاهزة لا كلمة بكلمة. إطارات مثل the thing is و as far as I'm concerned تتيح لك التخطيط للجملة التالية أثناء الكلام.",
            fr: "La parole fluide s'appuie sur des séquences préfabriquées : « the thing is... », « as far as I'm concerned... »."
          },
          formula: ['Frames: <span class="fx-k">The thing is</span> ... · <span class="fx-k">What I mean is</span> ... · <span class="fx-k">I was just about to</span> ...', 'Hedged frames: <span class="fx-k">As far as I know</span> ... · <span class="fx-k">I could be wrong, but</span> ...', 'Stalling: <span class="fx-k">How can I put this?</span> · <span class="fx-k">Let me think for a second.</span>', 'Repair: <span class="fx-k">What I meant to say was</span> ... · <span class="fx-k">Sorry, I lost my thread.</span>'],
          examples: [
            { en: "The thing is, I've never done this before.", ar: "المسألة هي أنني لم أفعل هذا من قبل." },
            { en: "As far as I know, the office is closed today.", ar: "بحسب علمي، المكتب مغلق اليوم." },
            { en: "I was just about to call you.", ar: "كنت على وشك الاتصال بك." },
            { en: "What I meant to say was that we need more time.", ar: "ما كنت أعنيه هو أننا نحتاج مزيدا من الوقت." }
          ],
          mistakes: [
            { w: "Constructing every sentence from grammar rules.", r: "Using stored chunks you can retrieve instantly.", why: "Rule-based generation is too slow for real conversation." },
            { w: "Stopping completely when you lack a word.", r: "Paraphrasing: \"the thing you use to open it\".", why: "Repair strategies keep the conversation alive." },
            { w: "Translating from your first language word by word.", r: "Thinking in English with simple internal narration.", why: "Translation creates delay and unnatural phrasing." }
          ]
        },
        listen: {
          title: "An interview about reaching fluency",
          lines: [
            { who: "Host", text: "People say they study for years and still can't speak. Why?" },
            { who: "Guest", text: "The thing is, most of them are collecting knowledge instead of building automaticity." },
            { who: "Host", text: "What's the difference in practice?" },
            { who: "Guest", text: "As far as I can see, they read and listen a lot, which is fine, but they almost never retrieve." },
            { who: "Host", text: "Retrieve meaning what exactly?" },
            { who: "Guest", text: "Pulling language out of your head under time pressure. That's the skill nobody practises." },
            { who: "Host", text: "So what should a learner do tomorrow?" },
            { who: "Guest", text: "Honestly? Talk to yourself for five minutes. Narrate your morning. It feels ridiculous and it works." }
          ],
          q: [
            { q: "What is the guest's main point?", o: ["Learners collect knowledge instead of building automaticity", "Learners study too little", "Learners need better books"], a: 0, why: "\"most of them are collecting knowledge instead of building automaticity.\"" },
            { q: "What do learners almost never do?", o: ["Retrieve language under pressure", "Read books", "Listen to podcasts"], a: 0, why: "\"they almost never retrieve.\"" },
            { q: "What practical advice is given?", o: ["Talk to yourself for five minutes", "Study grammar daily", "Move abroad"], a: 0, why: "\"Talk to yourself for five minutes. Narrate your morning.\"" }
          ]
        },
        read: {
          title: "The plateau is not a wall",
          text: "Almost every learner reaches a stage where progress seems to stop. Vocabulary stops growing, mistakes persist, and the effort feels pointless. This plateau is well documented, and it has a specific cause: the strategies that produced rapid early progress stop working at intermediate level. Beginners improve by accumulating words and rules, because almost everything is new. Intermediate learners, by contrast, already know the majority of the frequent words in a text, so additional input produces diminishing returns. What changes the curve is not more input but more retrieval. Speaking, writing and self-testing force the brain to reconstruct language, which strengthens the pathways that fluency depends on. Put simply, at the plateau you stop learning about English and start using it — even when it feels uncomfortable and your sentences are imperfect. Discomfort, at this stage, is the signal that the strategy is finally correct.",
          q: [
            { q: "Why does the plateau happen?", o: ["Early strategies stop working at intermediate level", "Learners become lazy", "The language becomes harder"], a: 0, why: "\"the strategies that produced rapid early progress stop working at intermediate level.\"" },
            { q: "What changes the curve?", o: ["More retrieval", "More input", "More grammar rules"], a: 0, why: "\"What changes the curve is not more input but more retrieval.\"" },
            { q: "What does the writer say discomfort signals?", o: ["That the strategy is finally correct", "That you should stop", "That you need a new teacher"], a: 0, why: "\"Discomfort, at this stage, is the signal that the strategy is finally correct.\"" }
          ]
        },
        write: {
          prompt: "Write a personal fluency plan (7–8 sentences) describing your current level, your main obstacle, and the specific daily routine you will follow for the next thirty days.",
          tips: ["Be specific about times and activities", "Use formulaic frames where natural", "Include one way you will measure progress"],
          sample: "My reading and listening are reasonably strong, but my speaking is still hesitant, especially when the topic is unexpected. The thing is, I have been collecting vocabulary for years without ever forcing myself to retrieve it under pressure. From tomorrow I will follow a simple thirty-day routine. In the morning I will narrate my routine aloud for five minutes while making breakfast. At lunch I will shadow one minute of a podcast, repeating the same clip for a whole week. In the evening I will record a two-minute answer to one question and listen back once. As far as I can tell, the recording is the part that will hurt most, which is probably why it will help. I will measure progress by counting how many times I say \"um\" in each recording. If that number falls, the plan is working."
        },
        speak: ["Talk for one minute about your day without stopping.", "Paraphrase a word you don't know.", "Use three formulaic frames in one answer.", "Describe your biggest fluency obstacle.", "Explain how you plan to improve this month."],
        ex: [
          { t: "mcq", q: "Fluency depends mainly on ___.", o: ["automaticity", "vocabulary size", "grammar accuracy"], a: 0, why: "Fluency is about retrieving language automatically." },
          { t: "fill", q: "The ___ is, I've never done this before.", o: ["thing", "stuff", "matter"], a: 0, why: 'The frame is "The thing is...".' },
          { t: "mcq", q: "When you lack a word, you should ___.", o: ["paraphrase", "stop speaking", "switch language"], a: 0, why: "Paraphrasing keeps the conversation going." },
          { t: "fill", q: "___ far as I know, the office is closed.", o: ["As", "So", "In"], a: 0, why: 'The frame is "As far as I know".' },
          { t: "match", pairs: [["chunk", "words learned as one unit"], ["retrieve", "bring back from memory"], ["plateau", "period of no progress"], ["immersion", "surrounding yourself with the language"]] },
          { t: "order", words: ["about", "was", "I", "just", "to", "call", "you"], answer: "I was just about to call you" },
          { t: "correct", wrong: "When I don't know a word I stop and translate it in my head.", answer: "When I don't know a word, I paraphrase and keep talking.", why: "Repair strategies preserve fluency; translation breaks it." },
          { t: "translate", q: "Translate into English: بحسب علمي", a: ["as far as i know", "as far as i'm aware"], why: "بحسب علمي = \"As far as I know\"." },
          { t: "listen", text: "The thing is, most learners collect knowledge instead of retrieving it.", q: "What do most learners do?", o: ["Collect knowledge instead of retrieving", "Practise speaking daily", "Shadow podcasts"], a: 0, why: "\"most learners collect knowledge instead of retrieving it.\"" },
          { t: "write", prompt: "Write three sentences about your fluency plan using formulaic frames.", keywords: ["the thing is", "as far as", "i will"], minWords: 26 }
        ]
      },

      /* ---------------- UNIT 10 ---------------- */
      {
        n: 10,
        title: "Nuance, Register & Style",
        theme: "Connotation, euphemism, irony, tone and stylistic choice",
        lessons: [
          { t: "Denotation and Connotation", obj: "Understand the feeling a word carries.", pts: ["'Cheap' and 'affordable' denote similar things but feel different.", "'Slim' is positive; 'skinny' can be negative.", "'Childlike' is warm; 'childish' is critical.", "Connotation decides whether a sentence sounds rude.", "Choose words for feeling, not just meaning."] },
          { t: "Register Shifting", obj: "Move between formal and informal appropriately.", pts: ["Same idea, three registers: 'I require assistance' / 'I need help' / 'Give us a hand'.", "Mixing registers creates an odd effect.", "Academic, professional, neutral, casual, intimate.", "Register depends on relationship, not on topic.", "Native speakers shift constantly and unconsciously."] },
          { t: "Euphemism and Understatement", obj: "Soften difficult or sensitive topics.", pts: ["'Passed away' instead of 'died'.", "'Let go' instead of 'fired'.", "'Between jobs' instead of 'unemployed'.", "Understatement: 'a bit of a problem' for a disaster.", "Euphemism can also obscure responsibility."] },
          { t: "Irony and Sarcasm", obj: "Recognise and use non-literal language.", pts: ["'Great, another delay.' — said with a flat tone.", "Irony depends on shared context and tone.", "Sarcasm is irony intended to criticise.", "In writing, irony is signalled by context, not punctuation.", "Misjudged irony reads as sincerity."] },
          { t: "Style and Voice", obj: "Develop control over your written voice.", pts: ["Short sentences create pace and impact.", "Long sentences build nuance and qualification.", "Vary sentence length deliberately.", "Active voice is direct; passive is detached.", "Style is choice under control, not accident."] }
        ],
        vocab: [
          { w: "connotation", ipa: "/ˌkɒnəˈteɪʃn/", pos: "noun", def: "An idea or feeling a word suggests beyond its literal meaning.", ar: "دلالة ضمنية", ex: "\"Cheap\" has negative connotations." },
          { w: "denotation", ipa: "/ˌdiːnəʊˈteɪʃn/", pos: "noun", def: "The literal meaning of a word.", ar: "المعنى الحرفي", ex: "The denotation is neutral." },
          { w: "euphemism", ipa: "/ˈjuːfəmɪzəm/", pos: "noun", def: "A mild word used instead of a harsh one.", ar: "تعبير ملطّف", ex: "\"Let go\" is a euphemism for \"fired\"." },
          { w: "sarcasm", ipa: "/ˈsɑːkæzəm/", pos: "noun", def: "Irony used to mock or criticise.", ar: "سخرية", ex: "His sarcasm was obvious." },
          { w: "subtle", ipa: "/ˈsʌtl/", pos: "adjective", def: "Not obvious; delicate and precise.", ar: "دقيق / خفي", ex: "There is a subtle difference." },
          { w: "blunt", ipa: "/blʌnt/", pos: "adjective", def: "Saying things directly, without politeness.", ar: "صريح بلا مجاملة", ex: "He is blunt but honest." },
          { w: "tone", ipa: "/təʊn/", pos: "noun", def: "The general attitude of a piece of language.", ar: "نبرة", ex: "The tone was hostile." },
          { w: "implication", ipa: "/ˌɪmplɪˈkeɪʃn/", pos: "noun", def: "Something suggested without being said.", ar: "تضمين", ex: "The implication was that we failed." },
          { w: "precise", ipa: "/prɪˈsaɪs/", pos: "adjective", def: "Exact and accurate.", ar: "دقيق", ex: "Use more precise vocabulary." },
          { w: "ambiguous", ipa: "/æmˈbɪɡjuəs/", pos: "adjective", def: "Having more than one possible meaning.", ar: "غامض / ملتبس", ex: "The statement was deliberately ambiguous." }
        ],
        gram: {
          title: "Modality and stance: expressing degrees of certainty and attitude",
          explain: {
            en: "Modal verbs and stance adverbials express how committed you are to a statement and how you feel about it. \"He might be right\" (possibility), \"He may well be right\" (likely), \"He is undoubtedly right\" (certain). Choosing correctly is a matter of nuance, and it is one of the clearest markers of advanced control.",
            ar: "الأفعال الناقصة والظروف الدالة على الموقف تعبر عن درجة يقينك وموقفك. الاختيار الصحيح مسألة دقة، وهو من أوضح مؤشرات التحكم المتقدم.",
            fr: "Les modaux et les adverbes de positionnement expriment le degré de certitude et l'attitude — marqueur d'une maîtrise avancée."
          },
          formula: ['Certainty scale: <span class="fx-k">must be</span> → <span class="fx-k">will be</span> → <span class="fx-k">may well be</span> → <span class="fx-k">might be</span> → <span class="fx-k">could be</span> → <span class="fx-k">can\'t be</span>', 'Stance adverbials: <span class="fx-k">arguably / admittedly / regrettably / curiously / unsurprisingly</span>', 'Hedged attribution: <span class="fx-k">It is said that</span> ... · <span class="fx-k">There is a perception that</span> ...', 'Evaluative distance: <span class="fx-k">The claim that ... is questionable.</span>'],
          examples: [
            { en: "He must be exhausted after that flight.", ar: "لا بد أنه منهك بعد تلك الرحلة." },
            { en: "The policy may well backfire.", ar: "من المرجح أن ترتد السياسة على أصحابها." },
            { en: "Admittedly, the data is limited.", ar: "من المسلم به أن البيانات محدودة." },
            { en: "Unsurprisingly, the proposal was rejected.", ar: "كما كان متوقعا، رُفض الاقتراح." }
          ],
          mistakes: [
            { w: "He must be tired — I am sure.", r: "He must be tired.", why: "\"Must\" already expresses strong certainty; adding \"I am sure\" is redundant." },
            { w: "I regret that the decision was made badly.", r: "Regrettably, the decision was poorly made.", why: "Stance adverbials integrate more elegantly." },
            { w: "This is 100% true.", r: "This appears to be well supported.", why: "Advanced writing prefers hedged, defensible claims." }
          ]
        },
        listen: {
          title: "A literary discussion",
          lines: [
            { who: "Host", text: "The ending felt deliberately ambiguous to me." },
            { who: "Critic", text: "Admittedly, it is. Though I would argue the ambiguity is not a trick." },
            { who: "Host", text: "How so?" },
            { who: "Critic", text: "Curiously, the narrator never tells us what she feels — only what she does. The omission is the point." },
            { who: "Host", text: "So the silence carries the meaning." },
            { who: "Critic", text: "Exactly. And there is a subtle irony in the last line, which some readers miss entirely." },
            { who: "Host", text: "Unsurprisingly, given how blunt modern fiction tends to be." },
            { who: "Critic", text: "Ha — regrettably so. Nuance is unfashionable, which is precisely why it is worth defending." }
          ],
          q: [
            { q: "What does the critic say about the ambiguity?", o: ["It is not a trick", "It is a mistake", "It was accidental"], a: 0, why: "\"I would argue the ambiguity is not a trick.\"" },
            { q: "What is unusual about the narrator?", o: ["She never tells us what she feels", "She never speaks", "She lies constantly"], a: 0, why: "\"the narrator never tells us what she feels — only what she does.\"" },
            { q: "What does the critic say about nuance?", o: ["It is unfashionable but worth defending", "It is overrated", "It is easy to achieve"], a: 0, why: "\"Nuance is unfashionable, which is precisely why it is worth defending.\"" }
          ]
        },
        read: {
          title: "The words we choose not to say",
          text: "Language is often studied for what it communicates, but it is equally revealing in what it avoids. Every culture develops euphemisms for its discomforts. In English, people are not fired but let go; they do not die but pass away; they are not poor but disadvantaged. These substitutions are not simply politeness. They distribute responsibility, and sometimes they conceal it: when a company announces that it is \"restructuring\", the passive construction removes the agent entirely, and no one has to say who decided. The same mechanism operates in politics, where \"collateral damage\" replaces civilian deaths. This is why critical reading is a skill, not a luxury. To understand a text, it is not enough to ask what it says; one must also ask what it has been carefully arranged not to say.",
          q: [
            { q: "What does the writer say euphemisms do besides being polite?", o: ["They distribute and sometimes conceal responsibility", "They make language shorter", "They are always dishonest"], a: 0, why: "\"They distribute responsibility, and sometimes they conceal it.\"" },
            { q: "Why is the passive construction significant?", o: ["It removes the agent", "It is more formal", "It is shorter"], a: 0, why: "\"the passive construction removes the agent entirely.\"" },
            { q: "What is the writer's conclusion about critical reading?", o: ["It is a skill, not a luxury", "It is unnecessary", "It is only for academics"], a: 0, why: "\"critical reading is a skill, not a luxury.\"" }
          ]
        },
        write: {
          prompt: "Write two versions of the same short news item (4 sentences each): one in a formal, detached register and one in a blunt, informal register. Then write one sentence explaining what changes.",
          tips: ["Use passive and euphemism in the formal version", "Use active voice and direct vocabulary in the informal one", "Comment on the effect of the change"],
          sample: "FORMAL: Following a review of operational requirements, a number of positions have been made redundant. The restructuring is expected to affect approximately eighty employees across two sites. Support measures, including retraining, will be offered to those affected. The company remains committed to its long-term strategy in the region.\n\nINFORMAL: The company is cutting eighty jobs at two sites. Management decided to close two departments and has not explained why. Staff will be offered retraining, but no one knows if it will lead to a real job. People are angry and nobody is saying much.\n\nWhat changes is agency: the formal version uses the passive to hide who made the decision, while the informal version names management and lets the reader judge."
        },
        speak: ["Explain the difference between 'slim' and 'skinny'.", "Rewrite a blunt sentence in a formal register.", "Give an example of a euphemism and what it hides.", "Describe the tone of a book you have read.", "Use three stance adverbials in one answer."],
        ex: [
          { t: "mcq", q: "'Let go' is a euphemism for ___.", o: ["fired", "promoted", "retired"], a: 0, why: "\"Let go\" softens \"fired\"." },
          { t: "fill", q: "There is a ___ difference between the two words.", o: ["subtle", "blunt", "vague"], a: 0, why: "\"Subtle\" means delicate and not obvious." },
          { t: "mcq", q: "The formal register often uses the passive to ___.", o: ["remove the agent", "sound friendlier", "shorten the text"], a: 0, why: "The passive can conceal who performed the action." },
          { t: "fill", q: "He ___ be exhausted after that flight.", o: ["must", "can", "should to"], a: 0, why: "\"Must\" expresses strong deduction." },
          { t: "match", pairs: [["denotation", "literal meaning"], ["connotation", "suggested feeling"], ["euphemism", "mild substitute"], ["sarcasm", "irony to criticise"]] },
          { t: "order", words: ["so", "Unsurprisingly", "was", "the", "proposal", "rejected"], answer: "Unsurprisingly the proposal was rejected" },
          { t: "correct", wrong: "This is 100% true and everyone knows it.", answer: "This appears to be well supported by the evidence.", why: "Advanced writing prefers hedged, defensible claims over absolute assertions." },
          { t: "translate", q: "Translate into English: من المسلم به أن البيانات محدودة", a: ["admittedly the data is limited", "admittedly the data are limited"], why: "من المسلم به = \"Admittedly\"." },
          { t: "listen", text: "Curiously, the narrator never tells us what she feels; the omission is the point.", q: "What is significant about the omission?", o: ["It carries the meaning", "It is an error", "It shortens the book"], a: 0, why: "\"the omission is the point.\"" },
          { t: "write", prompt: "Rewrite this sentence in a formal, detached register: 'The boss fired ten people.'", keywords: ["restructuring", "redundant", "positions"], minWords: 12 }
        ]
      }
    ]
  };

  window.EH.levels.push(B2);
})();
