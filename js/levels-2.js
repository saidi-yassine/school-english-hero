/* =====================================================================
   English Hero — Level A2 (Elementary)
   10 units · 5 lessons per unit
   ===================================================================== */
(function () {
  "use strict";

  const A2 = {
    id: "a2",
    code: "A2",
    name: "Elementary",
    color: "a2",
    tagline: "Talk about the past, the future and everyday life.",
    description: "You already know the basics. Now you will learn the past simple, future forms, comparatives, modal verbs and travel English — and start holding longer, more natural conversations.",
    canDo: [
      "Tell a simple story about the past",
      "Talk about plans, promises and predictions",
      "Compare people, places and things",
      "Use must, should, can and have to for rules and advice",
      "Handle travel, shopping, work and health situations in English"
    ],
    units: [
      /* ---------------- UNIT 1 ---------------- */
      {
        n: 1,
        title: "Telling Stories About the Past",
        theme: "Past simple, regular and irregular verbs",
        lessons: [
          { t: "Past Simple: Regular Verbs", obj: "Form the past simple with -ed.", pts: ["Yesterday I worked from home.", "We visited my aunt last Sunday.", "She studied all night for the exam.", "They played football in the rain.", "I didn't finish my homework."] },
          { t: "Irregular Verbs", obj: "Learn the most common irregular past forms.", pts: ["I went to the market yesterday.", "She bought a new phone last week.", "We saw a great film on Friday.", "He took the bus to work.", "They didn't come to the party."] },
          { t: "Past Simple Questions", obj: "Ask about the past with did.", pts: ["Did you watch the match?", "Where did you go on holiday?", "What did she say?", "When did they arrive?", "Did he like the food?"] },
          { t: "Time Expressions", obj: "Use yesterday, last week, ago and in 2019.", pts: ["I met her three years ago.", "We moved here in 2019.", "Last night I slept very well.", "She called me two hours ago.", "The day before yesterday it rained."] },
          { t: "Telling a Story", obj: "Link events in order using time words.", pts: ["First, we took a taxi to the airport.", "Then we checked in and waited.", "After that, the plane took off.", "Finally, we arrived in Rome.", "It was an unforgettable day."] }
        ],
        vocab: [
          { w: "yesterday", ipa: "/ˈjestədeɪ/", pos: "adverb", def: "The day before today.", ar: "أمس", ex: "I saw him yesterday." },
          { w: "ago", ipa: "/əˈɡəʊ/", pos: "adverb", def: "Before now, used with a period of time.", ar: "منذ", ex: "She left two hours ago." },
          { w: "arrive", ipa: "/əˈraɪv/", pos: "verb", def: "To reach a place.", ar: "يصل", ex: "We arrived at nine." },
          { w: "borrow", ipa: "/ˈbɒrəʊ/", pos: "verb", def: "To take something from someone and return it later.", ar: "يستعير", ex: "Can I borrow your pen?" },
          { w: "lend", ipa: "/lend/", pos: "verb", def: "To give something to someone for a short time.", ar: "يعير", ex: "He lent me his car." },
          { w: "happen", ipa: "/ˈhæpən/", pos: "verb", def: "To take place, especially without planning.", ar: "يحدث", ex: "What happened yesterday?" },
          { w: "suddenly", ipa: "/ˈsʌdənli/", pos: "adverb", def: "Quickly and unexpectedly.", ar: "فجأة", ex: "Suddenly, the lights went out." },
          { w: "remember", ipa: "/rɪˈmembə/", pos: "verb", def: "To keep something in your mind or bring it back.", ar: "يتذكر", ex: "I remember that day clearly." },
          { w: "forget", ipa: "/fəˈɡet/", pos: "verb", def: "To be unable to remember something.", ar: "ينسى", ex: "I forgot my keys at home." },
          { w: "unforgettable", ipa: "/ˌʌnfəˈɡetəbl/", pos: "adjective", def: "Impossible to forget.", ar: "لا يُنسى", ex: "It was an unforgettable trip." }
        ],
        gram: {
          title: "Past simple — regular and irregular verbs",
          explain: {
            en: "The past simple describes finished actions at a known time in the past. Regular verbs add -ed; irregular verbs change form. In negatives and questions we use did + base verb, so the main verb does not change.",
            ar: "الماضي البسيط يصف أفعالا منتهية في زمن محدد في الماضي. الأفعال المنتظمة تأخذ ed، وغير المنتظمة تتغير. وفي النفي والسؤال نستخدم did مع الفعل الأساسي.",
            fr: "Le passé simple décrit des actions terminées. Les verbes réguliers prennent -ed ; les irréguliers changent de forme."
          },
          formula: ['Regular: work → <span class="fx-k">worked</span> · study → <span class="fx-k">studied</span>', 'Irregular: go → <span class="fx-k">went</span> · buy → <span class="fx-k">bought</span> · see → <span class="fx-k">saw</span>', 'Negative: <span class="fx-k">didn\'t</span> + <span class="fx-v">base verb</span> → I didn\'t <span class="fx-v">go</span>.', 'Question: <span class="fx-k">Did</span> + subject + <span class="fx-v">base verb</span>? → Did you <span class="fx-v">see</span> him?'],
          examples: [
            { en: "I visited my grandmother last weekend.", ar: "زرت جدتي في عطلة نهاية الأسبوع الماضية." },
            { en: "She bought a new laptop yesterday.", ar: "اشترت حاسوبا محمولا جديدا أمس." },
            { en: "We didn't watch the film.", ar: "لم نشاهد الفيلم." },
            { en: "Did they enjoy the concert?", ar: "هل استمتعوا بالحفل؟" }
          ],
          mistakes: [
            { w: "I didn't went to school.", r: "I didn't go to school.", why: "After \"didn't\" the verb stays in the base form." },
            { w: "Did you saw him?", r: "Did you see him?", why: "After \"Did\" use the base form, not the past form." },
            { w: "She buyed a car.", r: "She bought a car.", why: "\"Buy\" is irregular: buy → bought." }
          ]
        },
        listen: {
          title: "What happened last night",
          lines: [
            { who: "Rania", text: "You look tired. What happened last night?" },
            { who: "Hassan", text: "I didn't sleep well. I studied until two in the morning." },
            { who: "Rania", text: "Why? The exam is next week, not today!" },
            { who: "Hassan", text: "I know, but I forgot everything. So I read the whole book again." },
            { who: "Rania", text: "Did you finish it?" },
            { who: "Hassan", text: "No. I fell asleep at the desk. I woke up at six with a book on my face." },
            { who: "Rania", text: "That's terrible! Drink a coffee and take a short nap later." }
          ],
          q: [
            { q: "Why is Hassan tired?", o: ["He studied until 2 a.m.", "He was at a party", "He watched a film"], a: 0, why: "\"I studied until two in the morning.\"" },
            { q: "Why did he study so late?", o: ["The exam was the next day", "He forgot everything", "He lost his notes"], a: 1, why: "\"I know, but I forgot everything.\"" },
            { q: "What happened at the desk?", o: ["He fell asleep", "He broke a lamp", "He finished the book"], a: 0, why: "\"I fell asleep at the desk.\"" }
          ]
        },
        read: {
          title: "The day I lost my phone",
          text: "Last Tuesday something funny happened. I woke up late because my alarm didn't ring. I ran to the bus stop, but the bus left two minutes before I arrived. So I took a taxi, and when I got out I realised I didn't have my phone. I looked in my bag, my pockets and the taxi seat — nothing. I went back home, and guess where it was? On my bed, next to the pillow. I laughed, called my boss and said I was going to be late. It was not my best morning.",
          q: [
            { q: "Why did the writer wake up late?", o: ["The alarm didn't ring", "He stayed up late", "He was ill"], a: 0, why: "\"I woke up late because my alarm didn't ring.\"" },
            { q: "Why did he take a taxi?", o: ["The bus was full", "He missed the bus", "He was late for work"], a: 1, why: "\"the bus left two minutes before I arrived. So I took a taxi.\"" },
            { q: "Where was the phone?", o: ["In the taxi", "On the bed", "In his pocket"], a: 1, why: "\"On my bed, next to the pillow.\"" }
          ]
        },
        write: {
          prompt: "Write 6–7 sentences telling the story of a memorable day. Use at least five past simple verbs and three time expressions.",
          tips: ["Order your story with first, then, after that, finally", "Mix regular and irregular verbs", "Add one sentence about how you felt"],
          sample: "Two years ago I had a very special day. In the morning I took an exam that I was very worried about. I didn't sleep well the night before, so I was nervous. When the results arrived, I couldn't believe my eyes — I got the highest mark in the class. I called my parents immediately and they were so happy. In the evening we went to a restaurant to celebrate. It was one of the best days of my life."
        },
        speak: ["What did you do yesterday?", "Tell me about your last holiday.", "What was the best day of your life?", "Did you study English last week?", "Describe something funny that happened to you."],
        ex: [
          { t: "mcq", q: "I ___ to the market yesterday.", o: ["go", "went", "gone"], a: 1, why: "\"Go\" is irregular: go → went." },
          { t: "fill", q: "She ___ a new phone last week.", o: ["buy", "buyed", "bought"], a: 2, why: "\"Buy\" is irregular: buy → bought." },
          { t: "mcq", q: "Did you ___ the film?", o: ["saw", "see", "seen"], a: 1, why: "After \"Did\" we use the base form." },
          { t: "fill", q: "We ___ go to the party last night.", o: ["didn't", "don't", "wasn't"], a: 0, why: "Negative past simple uses \"didn't\"." },
          { t: "match", pairs: [["go", "went"], ["see", "saw"], ["take", "took"], ["write", "wrote"]] },
          { t: "order", words: ["visited", "I", "my", "grandmother", "yesterday"], answer: "I visited my grandmother yesterday" },
          { t: "correct", wrong: "I didn't went to school.", answer: "I didn't go to school.", why: "After \"didn't\" use the base verb." },
          { t: "translate", q: "Translate into English: ذهبت إلى السوق أمس", a: ["i went to the market yesterday"], why: "ذهبت = \"I went\"." },
          { t: "listen", text: "She arrived two hours ago and left immediately.", q: "When did she arrive?", o: ["Two hours ago", "Two days ago", "Yesterday"], a: 0, why: "The speaker says \"two hours ago\"." },
          { t: "write", prompt: "Write three sentences about what you did last weekend.", keywords: ["went", "was", "yesterday", "last"], minWords: 18 }
        ]
      },

      /* ---------------- UNIT 2 ---------------- */
      {
        n: 2,
        title: "Plans & The Future",
        theme: "Going to, will, present continuous for arrangements",
        lessons: [
          { t: "Going To for Plans", obj: "Talk about decided plans and intentions.", pts: ["I am going to start a new course.", "We are going to move house in May.", "She is going to visit her sister.", "They are not going to come.", "What are you going to do this summer?"] },
          { t: "Will for Predictions", obj: "Make predictions and simple offers.", pts: ["I think it will rain tomorrow.", "You will love this city.", "I will help you with that.", "She won't be late again.", "Will you be at home tonight?"] },
          { t: "Will vs Going To", obj: "Choose the right future form.", pts: ["Look at those clouds — it is going to rain.", "I will get the phone!", "I am going to study law next year.", "I think he will pass the exam.", "We are going to have a meeting on Monday."] },
          { t: "Present Continuous for Arrangements", obj: "Talk about fixed arrangements.", pts: ["I am meeting Sarah at six.", "We are flying to Cairo on Friday.", "They are having dinner with us tonight.", "She is seeing the doctor tomorrow.", "Are you doing anything this evening?"] },
          { t: "Predictions About the Future", obj: "Talk about how life will change.", pts: ["Cars will drive themselves.", "People will live longer.", "English will become even more important.", "I will have my own business one day.", "Technology won't replace teachers."] }
        ],
        vocab: [
          { w: "plan", ipa: "/plæn/", pos: "noun / verb", def: "Something you decide to do; to decide in advance.", ar: "خطة / يخطط", ex: "What are your plans for the weekend?" },
          { w: "probably", ipa: "/ˈprɒbəbli/", pos: "adverb", def: "Very likely, but not certain.", ar: "ربما / على الأرجح", ex: "I will probably be late." },
          { w: "perhaps", ipa: "/pəˈhæps/", pos: "adverb", def: "Maybe, possibly.", ar: "ربما", ex: "Perhaps we should wait." },
          { w: "soon", ipa: "/suːn/", pos: "adverb", def: "In a short time from now.", ar: "قريبا", ex: "She will arrive soon." },
          { w: "decide", ipa: "/dɪˈsaɪd/", pos: "verb", def: "To choose something after thinking.", ar: "يقرر", ex: "We decided to stay at home." },
          { w: "promise", ipa: "/ˈprɒmɪs/", pos: "verb / noun", def: "To say you will definitely do something.", ar: "يوعد / وعد", ex: "I promise I will call you." },
          { w: "arrangement", ipa: "/əˈreɪndʒmənt/", pos: "noun", def: "A plan made with other people.", ar: "ترتيب / اتفاق", ex: "We have an arrangement for Friday." },
          { w: "hope", ipa: "/həʊp/", pos: "verb", def: "To want something to happen.", ar: "يأمل", ex: "I hope you will come." },
          { w: "future", ipa: "/ˈfjuːtʃə/", pos: "noun", def: "The time that will come.", ar: "المستقبل", ex: "Nobody knows the future." },
          { w: "cancel", ipa: "/ˈkænsl/", pos: "verb", def: "To say that a planned event will not happen.", ar: "يلغي", ex: "They cancelled the meeting." }
        ],
        gram: {
          title: "Future forms: will, going to and the present continuous",
          explain: {
            en: "Use \"going to\" for plans you already decided and for predictions based on evidence you can see. Use \"will\" for spontaneous decisions, offers, promises and general predictions. Use the present continuous for fixed arrangements with a time and place.",
            ar: "نستخدم going to للخطط المقررة والتنبؤات المبنية على دليل، و will للقرارات الفورية والعروض والوعود، والمضارع المستمر للمواعيد المحددة.",
            fr: "« going to » pour les projets décidés, « will » pour les décisions spontanées et les prédictions, le présent continu pour les rendez-vous fixés."
          },
          formula: ['<span class="fx-k">going to</span> + verb → I am going to <span class="fx-v">study</span> tonight.', '<span class="fx-k">will</span> + base verb → I think it <span class="fx-k">will</span> <span class="fx-v">rain</span>.', 'Present continuous → I <span class="fx-k">am meeting</span> <span class="fx-v">Ali</span> at six.', 'Negative: <span class="fx-k">won\'t</span> / <span class="fx-k">isn\'t going to</span>'],
          examples: [
            { en: "We are going to have a party next month.", ar: "سنقيم حفلة الشهر القادم." },
            { en: "I'll carry that bag for you.", ar: "سأحمل هذه الحقيبة عنك." },
            { en: "She is flying to Dubai on Sunday.", ar: "ستسافر إلى دبي يوم الأحد." },
            { en: "I don't think he will agree.", ar: "لا أعتقد أنه سيوافق." }
          ],
          mistakes: [
            { w: "I will go to study medicine.", r: "I am going to study medicine.", why: "A decided plan takes \"going to\"." },
            { w: "She will to call you.", r: "She will call you.", why: "After \"will\" use the base verb without \"to\"." },
            { w: "I am going to am happy.", r: "I am going to be happy.", why: "Use the base verb \"be\", not \"am\", after \"going to\"." }
          ]
        },
        listen: {
          title: "Summer plans",
          lines: [
            { who: "Leila", text: "What are you going to do this summer, Karim?" },
            { who: "Karim", text: "I'm going to visit my uncle in Turkey. I've already booked the tickets." },
            { who: "Leila", text: "Lucky you! How long are you staying?" },
            { who: "Karim", text: "Three weeks. Then I'll come back and look for a job." },
            { who: "Leila", text: "Any plans for the weekend before that?" },
            { who: "Karim", text: "Yes, I'm meeting my friends on Saturday evening. Do you want to join?" },
            { who: "Leila", text: "I'd love to. I'll bring some snacks." }
          ],
          q: [
            { q: "Where is Karim going this summer?", o: ["To Turkey", "To Spain", "To Egypt"], a: 0, why: "\"I'm going to visit my uncle in Turkey.\"" },
            { q: "How long is he staying?", o: ["Two weeks", "Three weeks", "One month"], a: 1, why: "\"Three weeks.\"" },
            { q: "What is he doing on Saturday evening?", o: ["Meeting friends", "Flying abroad", "Working late"], a: 0, why: "\"I'm meeting my friends on Saturday evening.\"" }
          ]
        },
        read: {
          title: "My five-year plan",
          text: "People often ask me about my future. Next year I am going to finish university. After that, I am going to work for a big company for two or three years to get experience. I hope I will learn a lot there. In 2030 I am going to start my own design studio with my best friend. We are meeting a bank manager next month to talk about a loan. Of course, nothing is certain. Perhaps everything will change. But I think it is important to have a plan.",
          q: [
            { q: "What is the writer going to do next year?", o: ["Finish university", "Start a company", "Move abroad"], a: 0, why: "\"Next year I am going to finish university.\"" },
            { q: "Why will he work for a big company?", o: ["To get experience", "To earn a lot", "Because he likes it"], a: 0, why: "\"... to get experience.\"" },
            { q: "What are they doing next month?", o: ["Meeting a bank manager", "Opening a studio", "Hiring staff"], a: 0, why: "\"We are meeting a bank manager next month to talk about a loan.\"" }
          ]
        },
        write: {
          prompt: "Write 6–7 sentences about your plans for the next year. Use going to, will and one present continuous arrangement.",
          tips: ["Use \"going to\" for your main plans", "Use \"will\" for predictions and hopes", "Use the present continuous for a fixed date or appointment"],
          sample: "Next year I am going to finish my studies and look for a job. I am going to work hard because I want to save money for a car. I hope I will find a position in a good company near my city. I think the first months will be difficult, but I will learn quickly. I am also going to improve my English, and I am starting a course in September. In the summer I am going to travel with my brother to the coast. I will send you photos!"
        },
        speak: ["What are you going to do next weekend?", "What will you do after this lesson?", "Do you have any fixed arrangements this week?", "How do you think life will change in twenty years?", "What is your biggest plan for next year?"],
        ex: [
          { t: "mcq", q: "I ___ going to study law next year.", o: ["am", "will", "do"], a: 0, why: "\"Going to\" needs the verb \"am / is / are\"." },
          { t: "fill", q: "Look at the clouds! It ___ rain.", o: ["will", "is going to", "would"], a: 1, why: "Evidence we can see takes \"going to\"." },
          { t: "mcq", q: "I think she ___ pass the exam.", o: ["will", "is going", "goes"], a: 0, why: "General predictions take \"will\"." },
          { t: "fill", q: "I ___ meeting Sarah at six tomorrow.", o: ["am", "will", "go"], a: 0, why: "Fixed arrangements take the present continuous." },
          { t: "match", pairs: [["I've decided →", "going to"], ["I predict →", "will"], ["fixed appointment →", "present continuous"], ["spontaneous offer →", "will"]] },
          { t: "order", words: ["going", "I", "am", "to", "travel"], answer: "I am going to travel" },
          { t: "correct", wrong: "She will to call you tonight.", answer: "She will call you tonight.", why: "After \"will\" we never use \"to\"." },
          { t: "translate", q: "Translate into English: سأساعدك", a: ["i will help you", "i'll help you"], why: "سأساعدك = \"I will help you\"." },
          { t: "listen", text: "We are flying to Istanbul on Friday morning.", q: "When are they flying?", o: ["Friday morning", "Sunday evening", "Next month"], a: 0, why: "The speaker says \"on Friday morning\"." },
          { t: "write", prompt: "Write three sentences about your plans for next year using 'going to'.", keywords: ["going to"], minWords: 18 }
        ]
      },

      /* ---------------- UNIT 3 ---------------- */
      {
        n: 3,
        title: "Comparing Things",
        theme: "Comparatives, superlatives and as ... as",
        lessons: [
          { t: "Comparatives", obj: "Compare two people or things.", pts: ["This book is cheaper than that one.", "My brother is taller than me.", "English is easier than Chinese.", "The city is more expensive than the village.", "Today is better than yesterday."] },
          { t: "Superlatives", obj: "Say what is the best or the worst.", pts: ["She is the best student in the class.", "It is the most beautiful city in the country.", "This is the cheapest restaurant in town.", "He is the tallest player in the team.", "That was the worst film I have ever seen."] },
          { t: "Irregular Comparatives", obj: "Use good, bad, far and little correctly.", pts: ["My English is better than last year.", "This is worse than I expected.", "The station is further than I thought.", "I have less free time now.", "She has more experience than me."] },
          { t: "(Not) As ... As", obj: "Say two things are equal or different.", pts: ["This phone is as good as that one.", "He is not as tall as his father.", "The bus is not as fast as the train.", "It is as cold as yesterday.", "My new job is not as easy as the old one."] },
          { t: "Comparing Places and People", obj: "Describe differences in a natural way.", pts: ["The north is greener than the south.", "People here are friendlier than in the capital.", "My city is quieter than yours.", "Life is slower in a small town.", "Which city is more interesting, Cairo or Alexandria?"] }
        ],
        vocab: [
          { w: "expensive", ipa: "/ɪkˈspensɪv/", pos: "adjective", def: "Costing a lot of money.", ar: "غالي", ex: "This hotel is more expensive than the other one." },
          { w: "crowded", ipa: "/ˈkraʊdɪd/", pos: "adjective", def: "Full of people.", ar: "مزدحم", ex: "The metro is crowded in the morning." },
          { w: "comfortable", ipa: "/ˈkʌmftəbl/", pos: "adjective", def: "Pleasant and relaxing to be in.", ar: "مريح", ex: "This chair is very comfortable." },
          { w: "similar", ipa: "/ˈsɪmələ/", pos: "adjective", def: "Almost the same.", ar: "مشابه", ex: "Our opinions are similar." },
          { w: "different", ipa: "/ˈdɪfrənt/", pos: "adjective", def: "Not the same.", ar: "مختلف", ex: "Their cultures are very different." },
          { w: "difference", ipa: "/ˈdɪfrəns/", pos: "noun", def: "The way in which things are not the same.", ar: "فرق", ex: "What is the difference between them?" },
          { w: "advantage", ipa: "/ədˈvɑːntɪdʒ/", pos: "noun", def: "Something that helps you or is good.", ar: "ميزة", ex: "One advantage is the low price." },
          { w: "disadvantage", ipa: "/ˌdɪsədˈvɑːntɪdʒ/", pos: "noun", def: "Something that is not good about a situation.", ar: "عيب / مساوئ", ex: "The main disadvantage is the distance." },
          { w: "compare", ipa: "/kəmˈpeə/", pos: "verb", def: "To look at how things are similar or different.", ar: "يقارن", ex: "Compare the two prices." },
          { w: "prefer", ipa: "/prɪˈfɜː/", pos: "verb", def: "To like one thing more than another.", ar: "يفضل", ex: "I prefer tea to coffee." }
        ],
        gram: {
          title: "Comparatives and superlatives",
          explain: {
            en: "Short adjectives add -er / -est. Longer adjectives use more / the most. Always use \"than\" after a comparative, and \"the\" before a superlative.",
            ar: "الصفات القصيرة تأخذ er / est، والطويلة تستخدم more / the most. ونستخدم than بعد صيغة المقارنة و the قبل صيغة التفضيل.",
            fr: "Les adjectifs courts prennent -er/-est ; les longs utilisent more/the most. On emploie « than » après un comparatif."
          },
          formula: ['Short: cheap → <span class="fx-k">cheaper</span> → the <span class="fx-k">cheapest</span>', 'Long: expensive → <span class="fx-k">more expensive</span> → the <span class="fx-k">most expensive</span>', 'Irregular: good → <span class="fx-k">better</span> → the <span class="fx-k">best</span> · bad → <span class="fx-k">worse</span> → the <span class="fx-k">worst</span>', 'Equality: <span class="fx-k">as</span> + adjective + <span class="fx-k">as</span> → as tall as'],
          examples: [
            { en: "The train is faster than the bus.", ar: "القطار أسرع من الباص." },
            { en: "This is the most interesting book I have read.", ar: "هذا أكثر كتاب مثير للاهتمام قرأته." },
            { en: "My English is better than last year.", ar: "إنجليزيتي أفضل من العام الماضي." },
            { en: "She is not as tall as her sister.", ar: "هي ليست بطول أختها." }
          ],
          mistakes: [
            { w: "She is more taller than me.", r: "She is taller than me.", why: "Never use \"more\" with an -er form." },
            { w: "This is the most cheap hotel.", r: "This is the cheapest hotel.", why: "Short adjectives take -est, not \"the most\"." },
            { w: "He is taller that me.", r: "He is taller than me.", why: "The word is \"than\", not \"that\"." }
          ]
        },
        listen: {
          title: "Two cities",
          lines: [
            { who: "Maya", text: "So, which city did you like more — Marrakesh or Tangier?" },
            { who: "Youssef", text: "Marrakesh, definitely. It's more colourful and the food is better." },
            { who: "Maya", text: "Really? I found Tangier more relaxing." },
            { who: "Youssef", text: "That's true, it's quieter. But it's also more expensive." },
            { who: "Maya", text: "Hmm, the hotels were cheaper in Marrakesh, I agree." },
            { who: "Youssef", text: "And the market there is the biggest in the country." },
            { who: "Maya", text: "OK, you've convinced me. Let's go back together next year." }
          ],
          q: [
            { q: "Which city did Youssef prefer?", o: ["Marrakesh", "Tangier", "Neither"], a: 0, why: "\"Marrakesh, definitely.\"" },
            { q: "What does Maya say about Tangier?", o: ["It is more relaxing", "It is more crowded", "It is cheaper"], a: 0, why: "\"I found Tangier more relaxing.\"" },
            { q: "Where were the hotels cheaper?", o: ["In Marrakesh", "In Tangier", "They were the same"], a: 0, why: "\"the hotels were cheaper in Marrakesh.\"" }
          ]
        },
        read: {
          title: "City life or country life?",
          text: "Many people ask which is better: the city or the country. City life is definitely more exciting. There are more jobs, more shops and more things to do at night. However, the city is noisier, more crowded and much more expensive. Life in the country is quieter and healthier. The air is cleaner and the houses are bigger for the same price. The biggest disadvantage is that there are fewer jobs and the transport is not as good. In my opinion, the best choice depends on your age and your work.",
          q: [
            { q: "What is the main advantage of the city?", o: ["It is quieter", "There are more jobs and things to do", "The air is cleaner"], a: 1, why: "\"There are more jobs, more shops and more things to do at night.\"" },
            { q: "What is the biggest disadvantage of the country?", o: ["Fewer jobs and worse transport", "Too many people", "The houses are small"], a: 0, why: "\"The biggest disadvantage is that there are fewer jobs and the transport is not as good.\"" },
            { q: "What does the writer think is the best choice?", o: ["Always the city", "Always the country", "It depends on your age and work"], a: 2, why: "\"the best choice depends on your age and your work.\"" }
          ]
        },
        write: {
          prompt: "Compare two places you know well (two cities, two shops, two schools) in 6 sentences. Use comparatives, one superlative and one \"as ... as\".",
          tips: ["Use \"than\" after every comparative", "Use \"the\" before a superlative", "Give a clear opinion at the end"],
          sample: "My city and the capital are very different. The capital is bigger and much busier than my city. It has the best universities in the country, but the rents are also the highest. My city is quieter and the air is cleaner. However, it is not as exciting as the capital, and there are fewer job opportunities. Public transport in the capital is better than here. In my opinion, the capital is better for work, but my city is a nicer place to live."
        },
        speak: ["Compare your city with the capital.", "Who is taller, you or your best friend?", "What is the best restaurant you know?", "Is English easier or harder than your language?", "Which do you prefer: summer or winter? Why?"],
        ex: [
          { t: "mcq", q: "This bag is ___ than that one.", o: ["cheap", "cheaper", "cheapest"], a: 1, why: "Short adjectives add -er for the comparative." },
          { t: "fill", q: "It is the ___ beautiful city in the country.", o: ["more", "most", "much"], a: 1, why: "Long adjectives use \"the most\"." },
          { t: "mcq", q: "My English is ___ than last year.", o: ["gooder", "better", "best"], a: 1, why: "\"Good\" is irregular: better." },
          { t: "fill", q: "She is not as tall ___ her sister.", o: ["than", "as", "like"], a: 1, why: 'The structure is "as ... as".' },
          { t: "match", pairs: [["good", "better"], ["bad", "worse"], ["far", "further"], ["many", "more"]] },
          { t: "order", words: ["is", "He", "taller", "than", "me"], answer: "He is taller than me" },
          { t: "correct", wrong: "She is more taller than me.", answer: "She is taller than me.", why: "Never combine \"more\" with an -er adjective." },
          { t: "translate", q: "Translate into English: هذا أفضل من ذلك", a: ["this is better than that"], why: "أفضل = \"better\"." },
          { t: "vocab", q: "The opposite of 'advantage' is ___.", o: ["difference", "disadvantage", "similarity"], a: 1, why: "\"Disadvantage\" is the opposite of \"advantage\"." },
          { t: "write", prompt: "Write two sentences comparing your city with another place.", keywords: ["than", "more", "better", "quieter"], minWords: 14 }
        ]
      },

      /* ---------------- UNIT 4 ---------------- */
      {
        n: 4,
        title: "Rules, Advice & Obligation",
        theme: "Modal verbs: must, have to, should, can, may",
        lessons: [
          { t: "Obligation: Must & Have To", obj: "Say what is necessary or required.", pts: ["You must wear a seatbelt in a car.", "I have to get up early tomorrow.", "Students must not use phones in class.", "She has to finish the report today.", "Do you have to work on Saturday?"] },
          { t: "Prohibition & No Obligation", obj: "Distinguish mustn't from don't have to.", pts: ["You mustn't smoke here. It's forbidden.", "You don't have to come if you're busy.", "Passengers mustn't open the door.", "We don't have to pay — it's free.", "You mustn't park on this street."] },
          { t: "Advice: Should & Ought To", obj: "Give and ask for advice.", pts: ["You should drink more water.", "You shouldn't work so late.", "You ought to see a doctor.", "Should I call her?", "He should apologise to his friend."] },
          { t: "Ability & Permission", obj: "Use can, could and may.", pts: ["I can speak three languages.", "Can I borrow your charger?", "You may leave when you finish.", "Could you help me, please?", "I couldn't sleep last night."] },
          { t: "Possibility & Deduction", obj: "Express how sure you are.", pts: ["He may be at home — I'm not sure.", "It might rain later.", "She must be tired after that trip.", "That can't be true!", "They could arrive tonight."] }
        ],
        vocab: [
          { w: "must", ipa: "/mʌst/", pos: "modal verb", def: "Used to say something is necessary or required.", ar: "يجب", ex: "You must wear a helmet." },
          { w: "forbidden", ipa: "/fəˈbɪdn/", pos: "adjective", def: "Not allowed by a rule or law.", ar: "ممنوع", ex: "Smoking is forbidden here." },
          { w: "allowed", ipa: "/əˈlaʊd/", pos: "adjective", def: "Permitted, not forbidden.", ar: "مسموح", ex: "Photos are not allowed in the museum." },
          { w: "advice", ipa: "/ədˈvaɪs/", pos: "noun", def: "An opinion about what someone should do.", ar: "نصيحة", ex: "Can you give me some advice?" },
          { w: "permission", ipa: "/pəˈmɪʃn/", pos: "noun", def: "Being allowed to do something.", ar: "إذن", ex: "You need permission to enter." },
          { w: "necessary", ipa: "/ˈnesəsəri/", pos: "adjective", def: "Needed; that must be done.", ar: "ضروري", ex: "It is not necessary to book." },
          { w: "rule", ipa: "/ruːl/", pos: "noun", def: "An instruction about what you can or cannot do.", ar: "قاعدة", ex: "The first rule is to be on time." },
          { w: "polite", ipa: "/pəˈlaɪt/", pos: "adjective", def: "Behaving in a kind and respectful way.", ar: "مؤدب", ex: "It is polite to say thank you." },
          { w: "apologise", ipa: "/əˈpɒlədʒaɪz/", pos: "verb", def: "To say sorry for something.", ar: "يعتذر", ex: "He apologised for being late." },
          { w: "duty", ipa: "/ˈdjuːti/", pos: "noun", def: "Something you must do because it is right.", ar: "واجب", ex: "It is my duty to help." }
        ],
        gram: {
          title: "Modal verbs: must, have to, should, can, may",
          explain: {
            en: "Modal verbs never change form and are always followed by the base verb. They express obligation, advice, ability, permission and possibility. \"Mustn't\" means it is forbidden; \"don't have to\" means it is not necessary.",
            ar: "الأفعال الناقصة لا تتغير صيغتها ويأتي بعدها الفعل الأساسي. تعبر عن الإلزام والنصيحة والقدرة والإذن والاحتمال. لاحظ الفرق بين mustn't (ممنوع) و don't have to (غير ضروري).",
            fr: "Les modaux ne changent jamais de forme et sont suivis de la base verbale. « mustn't » = interdit ; « don't have to » = pas nécessaire."
          },
          formula: ['<span class="fx-k">must</span> / <span class="fx-k">have to</span> + base verb → obligation', '<span class="fx-k">mustn\'t</span> = forbidden · <span class="fx-k">don\'t have to</span> = not necessary', '<span class="fx-k">should</span> + base verb → advice', '<span class="fx-k">can / could / may</span> + base verb → ability, permission, possibility'],
          examples: [
            { en: "You must show your passport at the airport.", ar: "يجب أن تظهر جواز سفرك في المطار." },
            { en: "You mustn't use your phone during the exam.", ar: "يُمنع استخدام هاتفك أثناء الامتحان." },
            { en: "You should get more sleep.", ar: "يجب أن تنام أكثر." },
            { en: "May I ask a question?", ar: "هل يمكنني طرح سؤال؟" }
          ],
          mistakes: [
            { w: "You must to study.", r: "You must study.", why: "Modal verbs are followed by the base verb without \"to\"." },
            { w: "She musts go.", r: "She must go.", why: "Modal verbs never take -s." },
            { w: "You don't must smoke here.", r: "You mustn't smoke here.", why: "For prohibition use \"mustn't\", not \"don't must\"." }
          ]
        },
        listen: {
          title: "At the airport",
          lines: [
            { who: "Staff", text: "Good morning. May I see your passport, please?" },
            { who: "Traveller", text: "Of course. Here you are." },
            { who: "Staff", text: "Thank you. You have to put your liquids in this small bag." },
            { who: "Traveller", text: "Do I have to take my laptop out of the case?" },
            { who: "Staff", text: "Yes, you do. And you mustn't carry any sharp objects." },
            { who: "Traveller", text: "I understand. Should I take off my jacket too?" },
            { who: "Staff", text: "That's fine, you can keep it. Have a good flight." }
          ],
          q: [
            { q: "What must the traveller do with liquids?", o: ["Put them in a small bag", "Throw them away", "Drink them"], a: 0, why: "\"You have to put your liquids in this small bag.\"" },
            { q: "Does the traveller have to remove the laptop?", o: ["Yes", "No", "Only on long flights"], a: 0, why: "The staff says \"Yes, you do.\"" },
            { q: "Can the traveller keep the jacket on?", o: ["Yes", "No", "Only if it is winter"], a: 0, why: "\"That's fine, you can keep it.\"" }
          ]
        },
        read: {
          title: "House rules",
          text: "When I moved into my new flat, my landlord gave me a list of rules. I must pay the rent before the fifth of every month. I mustn't make loud noise after ten o'clock at night. I don't have to clean the stairs because a company does it, but I should keep the entrance tidy. Guests may stay for two nights, but I have to tell the landlord first. I also shouldn't keep a pet without permission. The rules are strict, but they are fair. The building is quiet and everyone respects them.",
          q: [
            { q: "When must the rent be paid?", o: ["Before the fifth", "After the tenth", "On the last day"], a: 0, why: "\"I must pay the rent before the fifth of every month.\"" },
            { q: "Does the writer have to clean the stairs?", o: ["Yes, every week", "No, a company does it", "Only in summer"], a: 1, why: "\"I don't have to clean the stairs because a company does it.\"" },
            { q: "What must the writer do before having a guest stay?", o: ["Pay extra", "Tell the landlord", "Clean the flat"], a: 1, why: "\"Guests may stay for two nights, but I have to tell the landlord first.\"" }
          ]
        },
        write: {
          prompt: "Write 6 sentences about the rules in your school, workplace or home. Use must, mustn't, have to, don't have to and should.",
          tips: ["Use one modal verb per sentence where possible", "Explain the reason for at least two rules", "Say which rule you think is unnecessary"],
          sample: "In my workplace there are several rules. We must arrive before nine o'clock, and we mustn't use our phones during meetings. We have to wear a uniform in the shop area, but we don't have to wear it in the office. We should keep our desks tidy. We don't have to work at the weekend unless there is an emergency. In my opinion, the phone rule is a little too strict, because we sometimes need to check important messages."
        },
        speak: ["What are three rules in your school or job?", "What should someone do to learn English faster?", "What mustn't you do in a library?", "Give me advice for a healthy life.", "What do you have to do tomorrow?"],
        ex: [
          { t: "mcq", q: "You ___ wear a seatbelt in a car.", o: ["must", "should", "may"], a: 0, why: "This is a legal obligation, so \"must\"." },
          { t: "fill", q: "You ___ smoke here — it is forbidden.", o: ["mustn't", "don't have to", "shouldn't"], a: 0, why: "\"Mustn't\" expresses prohibition." },
          { t: "mcq", q: "You don't ___ to come if you are busy.", o: ["must", "have", "should"], a: 1, why: 'The negative of "have to" is "don\'t have to".' },
          { t: "fill", q: "You ___ drink more water. It's good for you.", o: ["should", "mustn't", "have"], a: 0, why: "\"Should\" gives advice." },
          { t: "match", pairs: [["must", "obligation"], ["mustn't", "prohibition"], ["don't have to", "not necessary"], ["should", "advice"]] },
          { t: "order", words: ["have", "I", "to", "work", "tomorrow"], answer: "I have to work tomorrow" },
          { t: "correct", wrong: "You must to study more.", answer: "You must study more.", why: "Modal verbs take the base verb without \"to\"." },
          { t: "translate", q: "Translate into English: يجب أن تدرس", a: ["you must study", "you have to study"], why: "يجب = \"must\" / \"have to\"." },
          { t: "listen", text: "You should take the medicine twice a day after meals.", q: "When should you take the medicine?", o: ["Twice a day after meals", "Once a week", "Before sleeping only"], a: 0, why: "The speaker says \"twice a day after meals\"." },
          { t: "write", prompt: "Write two sentences giving advice to a friend who is always tired.", keywords: ["should", "shouldn't"], minWords: 14 }
        ]
      },

      /* ---------------- UNIT 5 ---------------- */
      {
        n: 5,
        title: "Travel English",
        theme: "Airports, hotels, tickets, problems and complaints",
        lessons: [
          { t: "Booking and Checking In", obj: "Book a trip and check in smoothly.", pts: ["I'd like to book a room for two nights.", "I have a reservation under the name Ali.", "Could I have your ID, please?", "Is breakfast included?", "I'd prefer a room with a view."] },
          { t: "At the Airport", obj: "Deal with flights and delays.", pts: ["Which gate does flight TK401 leave from?", "Is the flight delayed?", "I'd like a window seat, please.", "Where can I collect my luggage?", "My suitcase hasn't arrived."] },
          { t: "Problems at the Hotel", obj: "Report a problem and ask for help.", pts: ["The air conditioning isn't working.", "Could you send someone to fix it?", "There are no towels in my room.", "I'm sorry for the inconvenience.", "Would you like to change rooms?"] },
          { t: "Asking for Information", obj: "Get the information you need politely.", pts: ["Excuse me, could you tell me where the lift is?", "Do you know if the museum is open today?", "How much does a day pass cost?", "Is there a bus to the centre?", "What time does the last train leave?"] },
          { t: "Making a Complaint", obj: "Complain politely and ask for a solution.", pts: ["I'm afraid there is a mistake with my bill.", "I ordered a vegetarian dish, not this one.", "I'd like to speak to the manager, please.", "Could you refund the difference?", "Thank you for sorting it out so quickly."] }
        ],
        vocab: [
          { w: "reservation", ipa: "/ˌrezəˈveɪʃn/", pos: "noun", def: "An arrangement to keep a room, table or seat for you.", ar: "حجز", ex: "I have a reservation for tonight." },
          { w: "boarding pass", ipa: "/ˈbɔːdɪŋ pɑːs/", pos: "noun", def: "A card that lets you get on a plane.", ar: "بطاقة الصعود", ex: "Please show your boarding pass." },
          { w: "delayed", ipa: "/dɪˈleɪd/", pos: "adjective", def: "Later than planned.", ar: "متأخر", ex: "The flight is delayed by two hours." },
          { w: "luggage", ipa: "/ˈlʌɡɪdʒ/", pos: "noun", def: "Bags and suitcases you take when travelling.", ar: "أمتعة", ex: "My luggage is still at the airport." },
          { w: "gate", ipa: "/ɡeɪt/", pos: "noun", def: "The door you use to get on a plane.", ar: "بوابة", ex: "The gate closes in ten minutes." },
          { w: "refund", ipa: "/ˈriːfʌnd/", pos: "noun / verb", def: "Money returned to you; to give money back.", ar: "استرداد", ex: "I asked for a refund." },
          { w: "inconvenience", ipa: "/ˌɪnkənˈviːniəns/", pos: "noun", def: "Trouble or difficulty caused to someone.", ar: "إزعاج", ex: "We apologise for the inconvenience." },
          { w: "available", ipa: "/əˈveɪləbl/", pos: "adjective", def: "Ready to be used or obtained.", ar: "متاح", ex: "No rooms are available tonight." },
          { w: "departure", ipa: "/dɪˈpɑːtʃə/", pos: "noun", def: "The act of leaving, especially on a journey.", ar: "مغادرة", ex: "Departure is at 6 a.m." },
          { w: "arrival", ipa: "/əˈraɪvl/", pos: "noun", def: "The act of reaching a place.", ar: "وصول", ex: "The arrival time is 9:40." }
        ],
        gram: {
          title: "Polite requests with could, would and I'd like",
          explain: {
            en: "In travel and service situations, politeness matters. Use \"Could you ...?\", \"Would you mind ...?\" or \"I'd like ...\" instead of direct orders. Adding \"please\" and \"I'm afraid\" makes a complaint sound respectful.",
            ar: "في مواقف السفر والخدمات، الأدب مهم. استخدم \"Could you\" أو \"Would you mind\" أو \"I'd like\" بدلا من الأوامر المباشرة.",
            fr: "En voyage, la politesse est essentielle : « Could you...? », « Would you mind...? », « I'd like... »."
          },
          formula: ['<span class="fx-k">Could you</span> + base verb + please? → Could you <span class="fx-v">help</span> me?', '<span class="fx-k">Would you mind</span> + <span class="fx-v">verb-ing</span>? → Would you mind <span class="fx-v">waiting</span>?', '<span class="fx-k">I\'d like</span> + noun / to + verb → I\'d like <span class="fx-v">a refund</span>.', 'Softening: <span class="fx-n">I\'m afraid ... / I think there may be ...</span>'],
          examples: [
            { en: "Could you tell me where the lift is?", ar: "هل يمكنك إخباري أين المصعد؟" },
            { en: "Would you mind speaking more slowly?", ar: "هل تمانع التحدث بشكل أبطأ؟" },
            { en: "I'd like to change my reservation.", ar: "أود تغيير حجزي." },
            { en: "I'm afraid there is a mistake on my bill.", ar: "أخشى أن هناك خطأ في فاتورتي." }
          ],
          mistakes: [
            { w: "Give me a refund.", r: "Could you give me a refund, please?", why: "Direct imperatives sound rude in service situations." },
            { w: "Would you mind to wait?", r: "Would you mind waiting?", why: "After \"would you mind\" use the -ing form." },
            { w: "I want a room with a view.", r: "I'd like a room with a view.", why: "\"I'd like\" is much more polite than \"I want\"." }
          ]
        },
        listen: {
          title: "A problem at reception",
          lines: [
            { who: "Guest", text: "Hello, I'm in room 412. I'm afraid the shower isn't working." },
            { who: "Receptionist", text: "I'm very sorry about that, sir. Would you like us to send a technician?" },
            { who: "Guest", text: "Yes, please. And could we get some extra towels?" },
            { who: "Receptionist", text: "Of course. Is there anything else?" },
            { who: "Guest", text: "Actually, would it be possible to change rooms? We have a baby with us." },
            { who: "Receptionist", text: "Let me check. Yes, room 508 is available from four o'clock." },
            { who: "Guest", text: "That would be wonderful. Thank you very much." }
          ],
          q: [
            { q: "What is the problem in room 412?", o: ["The shower isn't working", "There is no Wi-Fi", "The bed is broken"], a: 0, why: "\"I'm afraid the shower isn't working.\"" },
            { q: "What extra item does the guest ask for?", o: ["Towels", "Pillows", "A kettle"], a: 0, why: "\"could we get some extra towels?\"" },
            { q: "Why does the guest want to change rooms?", o: ["The room is too small", "They have a baby with them", "The view is bad"], a: 1, why: "\"We have a baby with us.\"" }
          ]
        },
        read: {
          title: "A trip that went wrong",
          text: "Our trip to Athens started badly. When we arrived at the airport, the flight was delayed by four hours because of a storm. We finally landed at midnight, but my suitcase didn't arrive. I reported it at the desk and they promised to send it to the hotel. When we reached the hotel, the receptionist told us our reservation had been cancelled by mistake. It took an hour to solve, but in the end they gave us a better room and a free dinner. The next morning my suitcase arrived, and the rest of the holiday was perfect.",
          q: [
            { q: "Why was the flight delayed?", o: ["A storm", "A technical problem", "Too many passengers"], a: 0, why: "\"the flight was delayed by four hours because of a storm.\"" },
            { q: "What happened to the suitcase?", o: ["It was lost at first", "It was stolen", "It was left at home"], a: 0, why: "\"my suitcase didn't arrive.\"" },
            { q: "How did the hotel solve the problem?", o: ["They cancelled the booking", "They gave a better room and free dinner", "They called the police"], a: 1, why: "\"they gave us a better room and a free dinner.\"" }
          ]
        },
        write: {
          prompt: "Write an email of complaint to a hotel (6–7 sentences). Explain the problem, what you want, and stay polite.",
          tips: ["Start with \"Dear Sir or Madam\" and end with \"Yours faithfully\"", "Use \"I'm afraid\", \"Could you\" and \"I would like\"", "State clearly what solution you expect"],
          sample: "Dear Sir or Madam, I stayed at your hotel from 3 to 6 May in room 214. I am afraid there were two problems during my stay. The air conditioning was not working, and the Wi-Fi was very slow. I reported both issues at reception, but nobody came to fix them. I would like to request a partial refund for these nights. I would also appreciate a written reply within five working days. Thank you for your attention. Yours faithfully, Omar Benali"
        },
        speak: ["Book a hotel room in two sentences.", "Report a problem in a hotel room politely.", "Ask for information about a train timetable.", "Complain about a wrong order in a restaurant.", "Describe the worst trip you have ever taken."],
        ex: [
          { t: "mcq", q: "___ you tell me where the station is?", o: ["Could", "Must", "Should"], a: 0, why: "\"Could you\" is the polite way to ask." },
          { t: "fill", q: "I ___ like a room with a view, please.", o: ["would", "will", "am"], a: 0, why: "\"I'd like\" = \"I would like\"." },
          { t: "mcq", q: "Would you mind ___ a moment?", o: ["to wait", "waiting", "wait"], a: 1, why: "After \"would you mind\" we use the -ing form." },
          { t: "match", pairs: [["reservation", "an arrangement to keep a room"], ["delayed", "later than planned"], ["refund", "money returned to you"], ["luggage", "the bags you travel with"]] },
          { t: "order", words: ["have", "I", "a", "reservation"], answer: "I have a reservation" },
          { t: "translate", q: "Translate into English: هل يمكنك مساعدتي؟", a: ["could you help me", "can you help me"], why: "هل يمكنك = \"Could you\"." },
          { t: "correct", wrong: "Give me a refund now.", answer: "Could you give me a refund, please?", why: "Direct orders sound rude; use a polite request." },
          { t: "vocab", q: "The opposite of 'departure' is ___.", o: ["arrival", "delay", "gate"], a: 0, why: "\"Arrival\" is the opposite of \"departure\"." },
          { t: "listen", text: "The flight is delayed and will leave from gate twelve.", q: "Which gate will the flight use?", o: ["Gate twelve", "Gate twenty", "Gate two"], a: 0, why: "The speaker says \"gate twelve\"." },
          { t: "write", prompt: "Write a polite request to change your hotel room.", keywords: ["could", "would", "i'd like", "please"], minWords: 14 }
        ]
      },

      /* ---------------- UNIT 6 ---------------- */
      {
        n: 6,
        title: "Shopping & Money",
        theme: "Prices, payment, bargaining and personal finance",
        lessons: [
          { t: "Money and Prices", obj: "Talk about cost, value and payment.", pts: ["It costs about twenty dollars.", "That is quite reasonable.", "It is on sale this week.", "I paid by card.", "The total comes to forty-two euros."] },
          { t: "Paying and Receipts", obj: "Handle payment and ask for proof of purchase.", pts: ["Can I pay by card?", "Do you take cash?", "Could I have a receipt, please?", "Keep the receipt in case you return it.", "Is there a discount for students?"] },
          { t: "Bargaining", obj: "Negotiate a price politely.", pts: ["That's a bit too much for me.", "Can you give me a better price?", "I'll take it if you make it thirty.", "How about twenty-five?", "OK, we have a deal."] },
          { t: "Online Shopping", obj: "Buy and return items online.", pts: ["I ordered it on Monday and it arrived on Thursday.", "The size is wrong. How do I return it?", "Is delivery free?", "The product did not match the description.", "I would like to exchange it for a larger size."] },
          { t: "Budgeting", obj: "Talk about saving and spending money.", pts: ["I try to save a little every month.", "I spend too much on coffee.", "We need to cut our expenses.", "My rent takes half of my salary.", "It is important to have an emergency fund."] }
        ],
        vocab: [
          { w: "cash", ipa: "/kæʃ/", pos: "noun", def: "Money in coins and notes.", ar: "نقدا", ex: "I paid in cash." },
          { w: "receipt", ipa: "/rɪˈsiːt/", pos: "noun", def: "A paper showing you have paid.", ar: "إيصال", ex: "Keep the receipt, please." },
          { w: "discount", ipa: "/ˈdɪskaʊnt/", pos: "noun", def: "A reduction in the usual price.", ar: "خصم", ex: "Students get a ten percent discount." },
          { w: "expensive", ipa: "/ɪkˈspensɪv/", pos: "adjective", def: "Costing a lot of money.", ar: "غالي", ex: "That is too expensive for me." },
          { w: "afford", ipa: "/əˈfɔːd/", pos: "verb", def: "To have enough money for something.", ar: "يستطيع تحمل التكلفة", ex: "I can't afford a new car." },
          { w: "save", ipa: "/seɪv/", pos: "verb", def: "To keep money for the future.", ar: "يوفر", ex: "I save twenty euros a week." },
          { w: "spend", ipa: "/spend/", pos: "verb", def: "To use money to buy things.", ar: "ينفق", ex: "She spends a lot on books." },
          { w: "bill", ipa: "/bɪl/", pos: "noun", def: "A document showing how much you must pay.", ar: "فاتورة", ex: "Could we have the bill, please?" },
          { w: "refund", ipa: "/ˈriːfʌnd/", pos: "noun", def: "Money given back to you.", ar: "استرداد", ex: "I got a full refund." },
          { w: "budget", ipa: "/ˈbʌdʒɪt/", pos: "noun", def: "A plan for how to spend your money.", ar: "ميزانية", ex: "We have a tight budget this month." }
        ],
        gram: {
          title: "Quantifiers: too much, too many, enough, a few, a little",
          explain: {
            en: "Quantifiers tell us how much or how many. Use \"too much\" with uncountable nouns and \"too many\" with countable ones. \"Enough\" means the right amount. \"A few\" goes with countable nouns and \"a little\" with uncountable ones.",
            ar: "أدوات الكمية تخبرنا عن المقدار. نستخدم too much مع غير المعدود و too many مع المعدود، و enough تعني القدر الكافي.",
            fr: "« too much » + non comptable, « too many » + comptable, « enough » = la quantité suffisante."
          },
          formula: ['<span class="fx-k">too much</span> + uncountable → too much <span class="fx-v">money</span>', '<span class="fx-k">too many</span> + countable → too many <span class="fx-v">shops</span>', '<span class="fx-k">a few</span> + countable · <span class="fx-k">a little</span> + uncountable', '<span class="fx-k">enough</span> + noun · adjective + <span class="fx-k">enough</span>'],
          examples: [
            { en: "I spent too much money this month.", ar: "أنفقت الكثير من المال هذا الشهر." },
            { en: "There are too many shops here.", ar: "هناك متاجر كثيرة جدا هنا." },
            { en: "We have a little time before the train.", ar: "لدينا وقت قليل قبل القطار." },
            { en: "I don't have enough cash.", ar: "ليس لدي ما يكفي من النقود." }
          ],
          mistakes: [
            { w: "I have too many money.", r: "I have too much money.", why: "\"Money\" is uncountable, so use \"much\"." },
            { w: "There are too much people.", r: "There are too many people.", why: "\"People\" is countable, so use \"many\"." },
            { w: "I don't have money enough.", r: "I don't have enough money.", why: "\"Enough\" comes before a noun." }
          ]
        },
        listen: {
          title: "At the electronics shop",
          lines: [
            { who: "Seller", text: "Can I help you find anything?" },
            { who: "Buyer", text: "Yes, I'm looking for a laptop for university. My budget is about five hundred." },
            { who: "Seller", text: "This model is four hundred and eighty. It has a good battery." },
            { who: "Buyer", text: "That's a little too expensive. Is there a discount?" },
            { who: "Seller", text: "We have a student discount — ten percent off." },
            { who: "Buyer", text: "Great. Does it come with a receipt and a guarantee?" },
            { who: "Seller", text: "Yes, two years of guarantee. You can pay by card or in cash." },
            { who: "Buyer", text: "I'll pay by card. Thank you for your help." }
          ],
          q: [
            { q: "What is the buyer's budget?", o: ["About five hundred", "About three hundred", "About eight hundred"], a: 0, why: "\"My budget is about five hundred.\"" },
            { q: "What discount is available?", o: ["A student discount of 10%", "A 20% discount", "No discount"], a: 0, why: "\"We have a student discount — ten percent off.\"" },
            { q: "How will the buyer pay?", o: ["By card", "In cash", "By bank transfer"], a: 0, why: "\"I'll pay by card.\"" }
          ]
        },
        read: {
          title: "Learning to save",
          text: "Two years ago I had a serious problem with money. I earned a good salary, but at the end of every month my account was empty. I spent too much on restaurants and clothes, and I bought too many things I never used. Then a friend gave me some advice. First, I wrote down everything I bought for a month. Second, I made a simple budget: fifty percent for rent and bills, thirty percent for daily life, and twenty percent to save. It was hard at first, but now I save a little every month. Last year I used that money for a trip to Italy.",
          q: [
            { q: "What was the writer's problem?", o: ["He spent all his money every month", "He had no job", "He owed the bank"], a: 0, why: "\"at the end of every month my account was empty.\"" },
            { q: "What percentage did he decide to save?", o: ["Twenty percent", "Fifty percent", "Ten percent"], a: 0, why: "\"twenty percent to save.\"" },
            { q: "What did he do with the saved money?", o: ["He travelled to Italy", "He bought a car", "He moved house"], a: 0, why: "\"Last year I used that money for a trip to Italy.\"" }
          ]
        },
        write: {
          prompt: "Write 6 sentences about how you manage money. Mention what you spend too much on, what you save for, and one piece of advice.",
          tips: ["Use too much / too many / enough / a few / a little", "Use the present simple for habits", "Finish with advice using \"should\""],
          sample: "I try to control my money, but it is not always easy. I spend too much on coffee and snacks during the week. I also buy too many books, although I don't have enough time to read them all. I save a little every month for a new laptop. A few of my friends use a budget app, and I think it helps. I should write down my expenses more carefully. My advice is simple: pay yourself first and save before you spend."
        },
        speak: ["How do you usually pay, cash or card?", "What do you spend too much money on?", "Do you save money? What for?", "Ask for a discount in a shop.", "Is it better to buy online or in a shop? Why?"],
        ex: [
          { t: "mcq", q: "I spent ___ money this month.", o: ["too many", "too much", "enough"], a: 1, why: "\"Money\" is uncountable, so \"too much\"." },
          { t: "fill", q: "There are ___ people in this shop.", o: ["too much", "too many", "a little"], a: 1, why: "\"People\" is countable, so \"too many\"." },
          { t: "mcq", q: "I don't have ___ cash for the taxi.", o: ["enough", "too many", "a few"], a: 0, why: "\"Enough\" comes before a noun." },
          { t: "fill", q: "Can I pay ___ card?", o: ["by", "with", "in"], a: 0, why: "We say \"pay by card\"." },
          { t: "match", pairs: [["cash", "coins and notes"], ["receipt", "proof of payment"], ["discount", "a reduction in price"], ["budget", "a plan for spending"]] },
          { t: "order", words: ["have", "Could", "the", "bill", "we"], answer: "Could we have the bill" },
          { t: "correct", wrong: "I have too many money.", answer: "I have too much money.", why: "\"Money\" is uncountable, so it takes \"much\"." },
          { t: "translate", q: "Translate into English: لا أستطيع تحمل التكلفة", a: ["i can't afford it", "i cannot afford it"], why: "لا أستطيع تحمل التكلفة = \"I can't afford it\"." },
          { t: "vocab", q: "If something costs more than you want to pay, it is ___.", o: ["expensive", "cheap", "free"], a: 0, why: "\"Expensive\" means costing a lot." },
          { t: "write", prompt: "Write two sentences about your spending habits using 'too much' and 'enough'.", keywords: ["too much", "enough"], minWords: 14 }
        ]
      },

      /* ---------------- UNIT 7 ---------------- */
      {
        n: 7,
        title: "Work & Office English",
        theme: "Emails, phone calls, meetings and job applications",
        lessons: [
          { t: "Writing a Simple Email", obj: "Write clear, professional short emails.", pts: ["Dear Mr Hassan, I hope you are well.", "I am writing to ask about the meeting.", "Please find the report attached.", "Could you let me know by Friday?", "Best regards, Sara."] },
          { t: "Phone Calls at Work", obj: "Make and take simple business calls.", pts: ["Good morning, this is Amina from Sales.", "Could I speak to Mr Ali, please?", "Hold on a moment, please.", "I'm afraid he is in a meeting.", "Can I take a message?"] },
          { t: "Meetings", obj: "Take part in a meeting in English.", pts: ["Shall we start?", "I'd like to add something here.", "Could you repeat that, please?", "Let's move on to the next point.", "To sum up, we agreed on three actions."] },
          { t: "Applying for a Job", obj: "Talk about your skills and experience.", pts: ["I have three years of experience in sales.", "I am good at working in a team.", "I would like to apply for the position.", "I can start immediately.", "Thank you for considering my application."] },
          { t: "Job Interviews", obj: "Answer common interview questions.", pts: ["Tell me about yourself.", "What are your strengths?", "Why do you want this job?", "Where do you see yourself in five years?", "Do you have any questions for us?"] }
        ],
        vocab: [
          { w: "attach", ipa: "/əˈtætʃ/", pos: "verb", def: "To add a file to an email.", ar: "يرفق", ex: "I have attached the document." },
          { w: "colleague", ipa: "/ˈkɒliːɡ/", pos: "noun", def: "A person you work with.", ar: "زميل عمل", ex: "My colleagues are very helpful." },
          { w: "deadline", ipa: "/ˈdedlaɪn/", pos: "noun", def: "The time by which work must be finished.", ar: "موعد نهائي", ex: "The deadline is Friday at noon." },
          { w: "schedule", ipa: "/ˈʃedjuːl/", pos: "noun", def: "A plan of times and activities.", ar: "جدول زمني", ex: "The schedule is very tight." },
          { w: "report", ipa: "/rɪˈpɔːt/", pos: "noun / verb", def: "A written document giving information.", ar: "تقرير", ex: "Please send me the report." },
          { w: "client", ipa: "/ˈklaɪənt/", pos: "noun", def: "A person or company that pays for a service.", ar: "عميل", ex: "The client is waiting in the office." },
          { w: "responsible", ipa: "/rɪˈspɒnsəbl/", pos: "adjective", def: "Having the duty to deal with something.", ar: "مسؤول", ex: "I am responsible for the budget." },
          { w: "skill", ipa: "/skɪl/", pos: "noun", def: "The ability to do something well.", ar: "مهارة", ex: "Communication is an important skill." },
          { w: "application", ipa: "/ˌæplɪˈkeɪʃn/", pos: "noun", def: "A formal request for a job or place.", ar: "طلب", ex: "I sent my application yesterday." },
          { w: "promotion", ipa: "/prəˈməʊʃn/", pos: "noun", def: "A move to a higher position at work.", ar: "ترقية", ex: "She got a promotion last month." }
        ],
        gram: {
          title: "Formal and informal register + present perfect for experience",
          explain: {
            en: "Business English needs a more formal register: \"I would like\" instead of \"I want\", \"Could you\" instead of \"Can you\". We also use the present perfect to talk about experience without saying exactly when: \"I have worked in sales for three years.\"",
            ar: "الإنجليزية المهنية تحتاج أسلوبا أكثر رسمية، ونستخدم المضارع التام للتحدث عن الخبرة دون تحديد الزمن.",
            fr: "L'anglais professionnel exige un registre plus formel, et le present perfect sert à parler d'expérience."
          },
          formula: ['<span class="fx-k">I have / has</span> + <span class="fx-v">past participle</span> → I have <span class="fx-v">worked</span> here for 3 years.', '<span class="fx-k">for</span> + period · <span class="fx-k">since</span> + starting point', 'Formal: <span class="fx-k">I would like to</span> · <span class="fx-k">Could you please</span>', 'Closing: <span class="fx-k">Best regards</span> / <span class="fx-k">Kind regards</span>'],
          examples: [
            { en: "I have worked in this company for five years.", ar: "عملت في هذه الشركة لمدة خمس سنوات." },
            { en: "She has managed three teams since 2021.", ar: "أدارت ثلاثة فرق منذ 2021." },
            { en: "I would like to apply for the position.", ar: "أود التقدم لهذه الوظيفة." },
            { en: "Could you please send me the report?", ar: "هل يمكنك إرسال التقرير لي؟" }
          ],
          mistakes: [
            { w: "I am working here since 2020.", r: "I have worked here since 2020.", why: "\"Since\" with a continuing situation takes the present perfect." },
            { w: "I want you send me the file.", r: "Could you please send me the file?", why: "Business requests need polite modal forms." },
            { w: "I have worked here since five years.", r: "I have worked here for five years.", why: "Use \"for\" with a period of time and \"since\" with a starting point." }
          ]
        },
        listen: {
          title: "A short business call",
          lines: [
            { who: "Receptionist", text: "Good morning, Delta Systems. How can I help you?" },
            { who: "Caller", text: "Hello, this is Nadia from Bright Media. Could I speak to Mr Saleh, please?" },
            { who: "Receptionist", text: "I'm afraid he is in a meeting at the moment. Can I take a message?" },
            { who: "Caller", text: "Yes, please. Could you tell him the report is ready and the deadline is Friday?" },
            { who: "Receptionist", text: "Of course. Does he have your number?" },
            { who: "Caller", text: "Yes, he does. Thank you very much for your help." },
            { who: "Receptionist", text: "You're welcome. Have a good day." }
          ],
          q: [
            { q: "Who is calling?", o: ["Nadia from Bright Media", "Mr Saleh", "A client from Delta"], a: 0, why: "\"this is Nadia from Bright Media.\"" },
            { q: "Why can't the receptionist connect the call?", o: ["Mr Saleh is in a meeting", "He is on holiday", "The line is broken"], a: 0, why: "\"I'm afraid he is in a meeting at the moment.\"" },
            { q: "What is the message about?", o: ["The report is ready and the deadline is Friday", "A cancelled meeting", "A new client"], a: 0, why: "\"the report is ready and the deadline is Friday.\"" }
          ]
        },
        read: {
          title: "How I got my job",
          text: "When I finished university, I sent about forty applications and I received only three answers. The first interview was a disaster: I was so nervous that I forgot the name of the company. After that, I prepared much better. I learned everything about the company, I practised my answers in front of a mirror, and I prepared three questions to ask at the end. In the second interview I felt calm and confident. Two days later they called me and offered me the position. I have worked there for four years now, and last year I got a promotion. My advice is simple: preparation changes everything.",
          q: [
            { q: "How many applications did the writer send?", o: ["About forty", "About three", "About ten"], a: 0, why: "\"I sent about forty applications.\"" },
            { q: "What went wrong in the first interview?", o: ["He forgot the company's name", "He arrived late", "He lost his CV"], a: 0, why: "\"I was so nervous that I forgot the name of the company.\"" },
            { q: "What happened after four years?", o: ["He got a promotion", "He changed companies", "He lost the job"], a: 0, why: "\"I have worked there for four years now, and last year I got a promotion.\"" }
          ]
        },
        write: {
          prompt: "Write a short job application email (6–7 sentences). Say which job you want, what experience you have and why you are suitable.",
          tips: ["Use a formal greeting and closing", "Use the present perfect for experience", "Ask politely for a reply"],
          sample: "Dear Ms Farah, I am writing to apply for the position of marketing assistant advertised on your website. I have worked in social media management for two years, and I have completed several online courses in digital marketing. In my current role I am responsible for three client accounts and a monthly newsletter. I am organised, I enjoy working in a team, and I am comfortable using data to improve results. I would be grateful for the opportunity to discuss my application. Please find my CV attached. Kind regards, Yasmine Amrani"
        },
        speak: ["Tell me about yourself in three sentences.", "What are your strengths?", "Why do you want this job?", "Describe your experience in English.", "Ask a question at the end of an interview."],
        ex: [
          { t: "mcq", q: "I have ___ in this company for five years.", o: ["work", "worked", "working"], a: 1, why: "The present perfect uses the past participle." },
          { t: "fill", q: "She has been a manager ___ 2021.", o: ["for", "since", "from"], a: 1, why: "\"Since\" is used with a starting point." },
          { t: "mcq", q: "___ you please send me the report?", o: ["Could", "Must", "Do"], a: 0, why: "Polite business requests use \"Could you\"." },
          { t: "match", pairs: [["deadline", "time work must be finished"], ["colleague", "person you work with"], ["client", "person who pays for a service"], ["promotion", "a move to a higher position"]] },
          { t: "order", words: ["like", "would", "I", "to", "apply"], answer: "I would like to apply" },
          { t: "translate", q: "Translate into English: أرفقت التقرير", a: ["i have attached the report", "i attached the report"], why: "أرفقت = \"I have attached\"." },
          { t: "correct", wrong: "I am working here since 2020.", answer: "I have worked here since 2020.", why: "Use the present perfect with \"since\"." },
          { t: "vocab", q: "The time by which work must be finished is the ___.", o: ["deadline", "schedule", "salary"], a: 0, why: "A deadline is a final time limit." },
          { t: "listen", text: "Could you send me the report before Friday, please?", q: "When is the report needed?", o: ["Before Friday", "After Monday", "Next month"], a: 0, why: "The speaker says \"before Friday\"." },
          { t: "write", prompt: "Write three sentences about your work experience using the present perfect.", keywords: ["i have", "for", "since"], minWords: 18 }
        ]
      },

      /* ---------------- UNIT 8 ---------------- */
      {
        n: 8,
        title: "Health & The Body",
        theme: "Symptoms, the doctor, healthy habits and emergencies",
        lessons: [
          { t: "Parts of the Body", obj: "Name the main parts of the body.", pts: ["I have a pain in my back.", "She hurt her knee playing football.", "He broke his arm last winter.", "My eyes are tired from the screen.", "Wash your hands before you eat."] },
          { t: "At the Doctor's", obj: "Describe symptoms clearly.", pts: ["I have a headache and a sore throat.", "I have had a fever since yesterday.", "It hurts when I move my shoulder.", "I feel dizzy and very tired.", "I am allergic to penicillin."] },
          { t: "Giving Advice About Health", obj: "Recommend healthy habits.", pts: ["You should rest and drink plenty of water.", "You shouldn't eat so much sugar.", "Try to sleep eight hours a night.", "Exercise three times a week.", "If the pain continues, see a specialist."] },
          { t: "Healthy Lifestyle", obj: "Talk about habits that keep you well.", pts: ["I try to walk 10,000 steps a day.", "Eating vegetables keeps you healthy.", "Stress is bad for your heart.", "I have stopped drinking fizzy drinks.", "Sleep is as important as food."] },
          { t: "Emergencies", obj: "React to an accident or emergency.", pts: ["Call an ambulance immediately!", "Are you all right?", "He has fainted — lie him down.", "Is there a doctor here?", "Stay calm and don't move him."] }
        ],
        vocab: [
          { w: "headache", ipa: "/ˈhedeɪk/", pos: "noun", def: "A pain in your head.", ar: "صداع", ex: "I have a terrible headache." },
          { w: "fever", ipa: "/ˈfiːvə/", pos: "noun", def: "A body temperature higher than normal.", ar: "حمى", ex: "The child has a high fever." },
          { w: "sore throat", ipa: "/sɔː θrəʊt/", pos: "noun", def: "A painful throat, often when you swallow.", ar: "التهاب الحلق", ex: "I have a sore throat and a cough." },
          { w: "injury", ipa: "/ˈɪndʒəri/", pos: "noun", def: "Physical damage to the body.", ar: "إصابة", ex: "It is a common football injury." },
          { w: "treatment", ipa: "/ˈtriːtmənt/", pos: "noun", def: "Medical care given to cure an illness.", ar: "علاج", ex: "The treatment lasted two weeks." },
          { w: "prescription", ipa: "/prɪˈskrɪpʃn/", pos: "noun", def: "A doctor's written order for medicine.", ar: "وصفة طبية", ex: "Here is your prescription." },
          { w: "healthy", ipa: "/ˈhelθi/", pos: "adjective", def: "In good physical condition.", ar: "صحي", ex: "She lives a very healthy life." },
          { w: "pain", ipa: "/peɪn/", pos: "noun", def: "An unpleasant physical feeling.", ar: "ألم", ex: "I have a pain in my chest." },
          { w: "recover", ipa: "/rɪˈkʌvə/", pos: "verb", def: "To become well again after illness.", ar: "يتعافى", ex: "He recovered quickly." },
          { w: "allergic", ipa: "/əˈlɜːdʒɪk/", pos: "adjective", def: "Having a bad reaction to something.", ar: "مصاب بحساسية", ex: "I am allergic to nuts." }
        ],
        gram: {
          title: "Present perfect with for and since + should for advice",
          explain: {
            en: "Use the present perfect to say how long an illness or situation has lasted: \"I have had a cough for three days.\" Use \"should\" to give health advice.",
            ar: "نستخدم المضارع التام لبيان مدة استمرار المرض، و should لتقديم النصيحة الصحية.",
            fr: "Le present perfect indique la durée d'un état ; « should » sert à donner des conseils."
          },
          formula: ['<span class="fx-k">have / has had</span> + symptom + <span class="fx-k">for</span> + period', 'I have had a cough <span class="fx-k">for</span> three days.', 'I have felt ill <span class="fx-k">since</span> Monday.', 'Advice: subject + <span class="fx-k">should / shouldn\'t</span> + base verb'],
          examples: [
            { en: "I have had a headache since this morning.", ar: "لدي صداع منذ هذا الصباح." },
            { en: "She has been in hospital for a week.", ar: "كانت في المستشفى لمدة أسبوع." },
            { en: "You should take this medicine after meals.", ar: "يجب أن تأخذ هذا الدواء بعد الوجبات." },
            { en: "You shouldn't drink coffee at night.", ar: "لا يجب أن تشرب القهوة ليلا." }
          ],
          mistakes: [
            { w: "I have a cough since Monday.", r: "I have had a cough since Monday.", why: "A situation continuing from the past needs the present perfect." },
            { w: "You should to rest.", r: "You should rest.", why: "\"Should\" is followed by the base verb." },
            { w: "I am ill for three days.", r: "I have been ill for three days.", why: "Use the present perfect with \"for\" for a duration up to now." }
          ]
        },
        listen: {
          title: "At the doctor's surgery",
          lines: [
            { who: "Doctor", text: "Good morning. What seems to be the problem?" },
            { who: "Patient", text: "I have a sore throat and a bad headache." },
            { who: "Doctor", text: "How long have you had these symptoms?" },
            { who: "Patient", text: "For about four days. And I have had a fever since Tuesday." },
            { who: "Doctor", text: "Let me check your temperature. It is a little high. Are you allergic to anything?" },
            { who: "Patient", text: "Only aspirin." },
            { who: "Doctor", text: "Fine. I will give you a prescription. You should rest and drink plenty of water." }
          ],
          q: [
            { q: "How long has the patient had the symptoms?", o: ["About four days", "Two weeks", "One day"], a: 0, why: "\"For about four days.\"" },
            { q: "What is the patient allergic to?", o: ["Aspirin", "Penicillin", "Nuts"], a: 0, why: "\"Only aspirin.\"" },
            { q: "What does the doctor recommend?", o: ["Rest and drink water", "Go to hospital", "Stop eating"], a: 0, why: "\"You should rest and drink plenty of water.\"" }
          ]
        },
        read: {
          title: "A healthier life",
          text: "Three years ago my father had a serious health problem. He worked twelve hours a day, never exercised and ate fast food almost every evening. One night he felt a strong pain in his chest and we called an ambulance. Luckily, it was not a heart attack, but the doctor said he had to change his life completely. Since then, things have been very different. He walks for forty minutes every morning, he has stopped smoking, and my mother cooks fresh food every day. He has lost twelve kilos and he says he has never felt better.",
          q: [
            { q: "Why was the ambulance called?", o: ["He felt a strong pain in his chest", "He broke his leg", "He had a high fever"], a: 0, why: "\"he felt a strong pain in his chest and we called an ambulance.\"" },
            { q: "What did the doctor say?", o: ["He had to change his life completely", "He needed surgery", "He should work less only"], a: 0, why: "\"the doctor said he had to change his life completely.\"" },
            { q: "What has changed since then?", o: ["He exercises, stopped smoking and eats fresh food", "He moved abroad", "He changed his job"], a: 0, why: "The text lists walking, stopping smoking and fresh food." }
          ]
        },
        write: {
          prompt: "Write 6 sentences: describe a time you were ill, what the symptoms were, and what advice you would give someone with the same problem.",
          tips: ["Use the past simple for the events", "Use \"have had ... for / since\" for duration", "Give advice with \"should\" and \"shouldn't\""],
          sample: "Last winter I had a bad flu and I stayed at home for a week. I had a high fever, a sore throat and a terrible headache. I could not eat anything for two days, so I only drank tea and water. My mother took me to the doctor, and he gave me a prescription for antibiotics. I slept a lot and after five days I started to feel better. If you have the same symptoms, you should rest, drink plenty of water and see a doctor quickly."
        },
        speak: ["What do you do to stay healthy?", "Describe your last visit to a doctor.", "What should someone do if they have a headache?", "How much sleep do you get?", "Have you ever had a sports injury?"],
        ex: [
          { t: "mcq", q: "I have ___ a headache since this morning.", o: ["have", "had", "having"], a: 1, why: "The present perfect uses the past participle \"had\"." },
          { t: "fill", q: "She has been ill ___ three days.", o: ["since", "for", "from"], a: 1, why: "\"For\" is used with a period of time." },
          { t: "mcq", q: "You ___ rest and drink water.", o: ["should", "mustn't", "shouldn't"], a: 0, why: "\"Should\" gives advice." },
          { t: "match", pairs: [["headache", "pain in your head"], ["fever", "high body temperature"], ["prescription", "a doctor's order for medicine"], ["recover", "become well again"]] },
          { t: "order", words: ["have", "I", "a", "sore", "throat"], answer: "I have a sore throat" },
          { t: "translate", q: "Translate into English: أشعر بألم في رأسي", a: ["i have a headache", "my head hurts"], why: "ألم في الرأس = \"headache\"." },
          { t: "correct", wrong: "You should to rest.", answer: "You should rest.", why: "\"Should\" takes the base verb without \"to\"." },
          { t: "vocab", q: "A doctor writes this so you can get medicine:", o: ["a prescription", "a receipt", "a ticket"], a: 0, why: "A prescription authorises medicine." },
          { t: "listen", text: "You should take one tablet twice a day after meals.", q: "How often should you take the tablet?", o: ["Twice a day", "Once a week", "Three times a day"], a: 0, why: "The speaker says \"twice a day\"." },
          { t: "write", prompt: "Write two sentences of health advice using 'should' and 'shouldn't'.", keywords: ["should", "shouldn't"], minWords: 14 }
        ]
      },

      /* ---------------- UNIT 9 ---------------- */
      {
        n: 9,
        title: "Describing People & Places",
        theme: "Adjectives, appearance, personality and detailed descriptions",
        lessons: [
          { t: "Describing Appearance", obj: "Describe how someone looks in detail.", pts: ["He is tall with short dark hair.", "She has long curly hair and green eyes.", "My uncle is bald and wears a beard.", "She is slim and very elegant.", "He always wears casual clothes."] },
          { t: "Describing Personality", obj: "Talk about character and behaviour.", pts: ["My sister is very generous.", "He is shy, but he is very kind.", "She is hard-working and reliable.", "My friend is funny and easy-going.", "He can be a little impatient."] },
          { t: "Describing Places", obj: "Paint a picture of a place with words.", pts: ["It is a quiet town near the sea.", "The old town has narrow streets.", "The market is colourful and lively.", "The area is safe and well connected.", "It is a modern building with glass walls."] },
          { t: "Order of Adjectives", obj: "Put adjectives in the correct order.", pts: ["A beautiful old wooden door.", "She bought a small black leather bag.", "It is a lovely sunny day.", "They live in a big modern house.", "I met a friendly young Italian teacher."] },
          { t: "Feelings and Moods", obj: "Express how people feel.", pts: ["I am excited about the trip.", "She looked worried this morning.", "He was disappointed with the result.", "I feel relaxed after a long walk.", "They were surprised by the news."] }
        ],
        vocab: [
          { w: "generous", ipa: "/ˈdʒenərəs/", pos: "adjective", def: "Willing to give money or help to others.", ar: "كريم", ex: "He is very generous with his time." },
          { w: "reliable", ipa: "/rɪˈlaɪəbl/", pos: "adjective", def: "Able to be trusted to do what is expected.", ar: "موثوق", ex: "She is a reliable colleague." },
          { w: "shy", ipa: "/ʃaɪ/", pos: "adjective", def: "Nervous about meeting or talking to people.", ar: "خجول", ex: "He is too shy to speak in public." },
          { w: "curly", ipa: "/ˈkɜːli/", pos: "adjective", def: "Having hair that forms curves.", ar: "مجعد", ex: "She has beautiful curly hair." },
          { w: "bald", ipa: "/bɔːld/", pos: "adjective", def: "Having no hair on the head.", ar: "أصلع", ex: "My grandfather is bald." },
          { w: "lively", ipa: "/ˈlaɪvli/", pos: "adjective", def: "Full of energy and activity.", ar: "نابض بالحياة", ex: "It is a lively neighbourhood." },
          { w: "narrow", ipa: "/ˈnærəʊ/", pos: "adjective", def: "Small in width; not wide.", ar: "ضيق", ex: "We walked through narrow streets." },
          { w: "disappointed", ipa: "/ˌdɪsəˈpɔɪntɪd/", pos: "adjective", def: "Sad because something was not as good as hoped.", ar: "محبط", ex: "I was disappointed with the film." },
          { w: "easy-going", ipa: "/ˌiːzi ˈɡəʊɪŋ/", pos: "adjective", def: "Relaxed and not easily worried.", ar: "هادئ الطبع", ex: "My boss is very easy-going." },
          { w: "atmosphere", ipa: "/ˈætməsfɪə/", pos: "noun", def: "The feeling a place or situation gives you.", ar: "جو عام", ex: "The café has a warm atmosphere." }
        ],
        gram: {
          title: "Order of adjectives",
          explain: {
            en: "When we use several adjectives before a noun, they follow a fixed order: opinion, size, age, shape, colour, origin, material, purpose. Native speakers do this automatically, so it is worth learning the pattern.",
            ar: "عند استخدام عدة صفات قبل الاسم تتبع ترتيبا ثابتا: الرأي، الحجم، العمر، الشكل، اللون، الأصل، المادة، الغرض.",
            fr: "L'ordre des adjectifs est fixe : opinion, taille, âge, forme, couleur, origine, matière."
          },
          formula: ['<span class="fx-k">Opinion</span> → <span class="fx-k">Size</span> → <span class="fx-k">Age</span> → <span class="fx-k">Colour</span> → <span class="fx-k">Origin</span> → <span class="fx-k">Material</span>', 'a <span class="fx-v">beautiful</span> <span class="fx-v">small</span> <span class="fx-v">old</span> <span class="fx-v">brown</span> <span class="fx-v">wooden</span> table', 'a <span class="fx-v">friendly</span> <span class="fx-v">young</span> <span class="fx-v">Italian</span> teacher', 'After "be" the order is freer: The table <span class="fx-k">is</span> old and beautiful.'],
          examples: [
            { en: "She bought a lovely little black leather bag.", ar: "اشترت حقيبة جلدية سوداء صغيرة جميلة." },
            { en: "They live in a big modern white house.", ar: "يعيشون في منزل أبيض حديث كبير." },
            { en: "I met a friendly young Spanish doctor.", ar: "قابلت طبيبا إسبانيا شابا ودودا." },
            { en: "It was a delicious hot Moroccan dish.", ar: "كان طبقا مغربيا ساخنا لذيذا." }
          ],
          mistakes: [
            { w: "A wooden beautiful table.", r: "A beautiful wooden table.", why: "Opinion comes before material." },
            { w: "A black small bag.", r: "A small black bag.", why: "Size comes before colour." },
            { w: "An Italian young man.", r: "A young Italian man.", why: "Age comes before origin." }
          ]
        },
        listen: {
          title: "Describing a new colleague",
          lines: [
            { who: "Sara", text: "Have you met the new designer yet?" },
            { who: "Omar", text: "Yes, briefly. Tall guy, short beard, glasses?" },
            { who: "Sara", text: "That's him. What did you think?" },
            { who: "Omar", text: "He seems very calm and easy-going. And he is funny too." },
            { who: "Sara", text: "I agree. He is also extremely organised — his desk is perfect." },
            { who: "Omar", text: "Where is he from?" },
            { who: "Sara", text: "Spain, I think. He has worked in three countries." }
          ],
          q: [
            { q: "How does Omar describe the new colleague's appearance?", o: ["Tall with a short beard and glasses", "Short with long hair", "Bald and very thin"], a: 0, why: "\"Tall guy, short beard, glasses?\"" },
            { q: "What is the new colleague like?", o: ["Calm, easy-going and funny", "Shy and quiet", "Impatient and strict"], a: 0, why: "\"He seems very calm and easy-going. And he is funny too.\"" },
            { q: "Where is he from?", o: ["Spain", "Italy", "France"], a: 0, why: "\"Spain, I think.\"" }
          ]
        },
        read: {
          title: "The village of my grandmother",
          text: "My grandmother lives in a small mountain village. It is a quiet, beautiful place with narrow stone streets and old white houses. In the centre there is a little square with a fountain, and a small café where the men play cards in the afternoon. The air is clean and you can hear birds all day. The people are warm and generous; when a visitor arrives, everyone invites them for tea. There is no supermarket and only one bus a day, but nobody complains. It is, quite simply, the most peaceful place I know.",
          q: [
            { q: "What are the streets like?", o: ["Narrow and made of stone", "Wide and modern", "Busy and noisy"], a: 0, why: "\"narrow stone streets and old white houses.\"" },
            { q: "What happens in the small café?", o: ["Men play cards", "People dance", "There is a market"], a: 0, why: "\"a small café where the men play cards in the afternoon.\"" },
            { q: "How do the people treat visitors?", o: ["They invite them for tea", "They ignore them", "They ask for money"], a: 0, why: "\"when a visitor arrives, everyone invites them for tea.\"" }
          ]
        },
        write: {
          prompt: "Describe a person you admire in 6 sentences: appearance, personality, and why you admire them.",
          tips: ["Use at least two adjectives together in the correct order", "Use personality adjectives, not just physical ones", "Explain the reason for your admiration"],
          sample: "The person I admire most is my aunt Nadia. She is a short, slim woman with long curly black hair and warm brown eyes. She is a doctor and she works in a small village, where she helps people who cannot pay much. She is incredibly generous and patient, even when she is tired. She is also very funny — she tells wonderful stories at family dinners. I admire her because she never complains and she always puts other people first. When I have a difficult decision, she is the first person I call."
        },
        speak: ["Describe your best friend's appearance and personality.", "Describe your hometown in three sentences.", "Who do you admire and why?", "Describe a place where you feel relaxed.", "How are you feeling today?"],
        ex: [
          { t: "mcq", q: "She bought a ___ bag.", o: ["black small leather", "small black leather", "leather small black"], a: 1, why: "The order is size → colour → material." },
          { t: "fill", q: "He is a ___ young Italian teacher.", o: ["friendly", "friend", "friendliness"], a: 0, why: "We need the adjective \"friendly\"." },
          { t: "mcq", q: "My grandfather has no hair. He is ___.", o: ["curly", "bald", "slim"], a: 1, why: "\"Bald\" means having no hair." },
          { t: "match", pairs: [["generous", "willing to give"], ["reliable", "able to be trusted"], ["shy", "nervous with people"], ["easy-going", "relaxed and calm"]] },
          { t: "order", words: ["a", "He", "is", "kind", "man"], answer: "He is a kind man" },
          { t: "translate", q: "Translate into English: إنه شخص موثوق", a: ["he is a reliable person", "he is reliable"], why: "موثوق = \"reliable\"." },
          { t: "correct", wrong: "A wooden beautiful table.", answer: "A beautiful wooden table.", why: "Opinion adjectives come before material adjectives." },
          { t: "vocab", q: "A place full of energy and activity is ___.", o: ["lively", "narrow", "bald"], a: 0, why: "\"Lively\" means full of life and activity." },
          { t: "listen", text: "She is tall with long curly hair and a very friendly smile.", q: "What kind of hair does she have?", o: ["Long and curly", "Short and straight", "Bald"], a: 0, why: "The speaker says \"long curly hair\"." },
          { t: "write", prompt: "Describe a family member in three sentences using at least three adjectives.", keywords: ["is", "has"], minWords: 18 }
        ]
      },

      /* ---------------- UNIT 10 ---------------- */
      {
        n: 10,
        title: "Everyday Conversations & Small Talk",
        theme: "Weather, news, opinions and keeping a conversation alive",
        lessons: [
          { t: "Talking About the Weather", obj: "Make small talk about the weather.", pts: ["Lovely day, isn't it?", "It's freezing today!", "It looks like it's going to rain.", "We're expecting snow tomorrow.", "It's much warmer than yesterday."] },
          { t: "Keeping a Conversation Going", obj: "Use reactions and follow-up questions.", pts: ["Really? That's interesting.", "Oh no, that's terrible!", "Tell me more about that.", "What happened next?", "I know exactly what you mean."] },
          { t: "Giving Opinions", obj: "Say what you think and agree or disagree.", pts: ["In my opinion, it's a great idea.", "I think you are right.", "I'm not sure about that.", "I see your point, but I disagree.", "That's a good point."] },
          { t: "Making Small Talk", obj: "Start and manage casual conversation.", pts: ["How was your weekend?", "Have you seen the new café on Main Street?", "How long have you worked here?", "Do you come here often?", "It was great talking to you."] },
          { t: "Ending a Conversation Politely", obj: "Leave a conversation gracefully.", pts: ["Anyway, I'd better get going.", "It was lovely to see you again.", "Let's catch up soon!", "Say hello to your family for me.", "Take care — see you around!"] }
        ],
        vocab: [
          { w: "weather", ipa: "/ˈweðə/", pos: "noun", def: "The condition of the sky and air outside.", ar: "الطقس", ex: "The weather is beautiful today." },
          { w: "freezing", ipa: "/ˈfriːzɪŋ/", pos: "adjective", def: "Extremely cold.", ar: "متجمد البرودة", ex: "It's freezing outside!" },
          { w: "opinion", ipa: "/əˈpɪnjən/", pos: "noun", def: "What you think about something.", ar: "رأي", ex: "In my opinion, he is right." },
          { w: "agree", ipa: "/əˈɡriː/", pos: "verb", def: "To have the same opinion as someone.", ar: "يوافق", ex: "I agree with you completely." },
          { w: "disagree", ipa: "/ˌdɪsəˈɡriː/", pos: "verb", def: "To have a different opinion.", ar: "يعترض", ex: "I'm afraid I disagree." },
          { w: "anyway", ipa: "/ˈeniweɪ/", pos: "adverb", def: "Used to change topic or end a conversation.", ar: "على أي حال", ex: "Anyway, I have to go now." },
          { w: "catch up", ipa: "/kætʃ ʌp/", pos: "phrasal verb", def: "To meet and share news after time apart.", ar: "يتابع الأخبار مع", ex: "Let's catch up next week." },
          { w: "mention", ipa: "/ˈmenʃn/", pos: "verb", def: "To speak about something briefly.", ar: "يذكر", ex: "She mentioned your name." },
          { w: "obviously", ipa: "/ˈɒbviəsli/", pos: "adverb", def: "Clearly, in a way everyone can see.", ar: "بوضوح", ex: "Obviously, we need more time." },
          { w: "conversation", ipa: "/ˌkɒnvəˈseɪʃn/", pos: "noun", def: "A talk between people.", ar: "محادثة", ex: "We had a long conversation." }
        ],
        gram: {
          title: "Question tags and reacting naturally",
          explain: {
            en: "Question tags turn a statement into a small question and invite the other person to respond: \"It's cold, isn't it?\" If the statement is positive, the tag is negative, and vice versa. They are extremely common in small talk.",
            ar: "أسئلة الذيل تحول الجملة الخبرية إلى سؤال صغير يدعو الطرف الآخر للرد. إذا كانت الجملة مثبتة يكون الذيل منفيا والعكس.",
            fr: "Les question tags transforment une affirmation en petite question : « It's cold, isn't it? »"
          },
          formula: ['Positive statement + <span class="fx-k">negative tag</span> → It\'s cold, <span class="fx-k">isn\'t it</span>?', 'Negative statement + <span class="fx-k">positive tag</span> → You don\'t smoke, <span class="fx-k">do you</span>?', 'With "I am" → <span class="fx-k">aren\'t I</span>? · With "Let\'s" → <span class="fx-k">shall we</span>?', 'Reacting: <span class="fx-n">Really? / That\'s interesting / Oh no!</span>'],
          examples: [
            { en: "Lovely weather, isn't it?", ar: "طقس جميل، أليس كذلك؟" },
            { en: "You are new here, aren't you?", ar: "أنت جديد هنا، أليس كذلك؟" },
            { en: "She doesn't like coffee, does she?", ar: "هي لا تحب القهوة، أليس كذلك؟" },
            { en: "Let's start, shall we?", ar: "لنبدأ، ما رأيك؟" }
          ],
          mistakes: [
            { w: "It's cold, isn't it is?", r: "It's cold, isn't it?", why: "The tag is just auxiliary + pronoun." },
            { w: "You like tea, don't you like?", r: "You like tea, don't you?", why: "Do not repeat the main verb in the tag." },
            { w: "She is here, isn't she is?", r: "She is here, isn't she?", why: "The tag never repeats the whole clause." }
          ]
        },
        listen: {
          title: "Small talk in the lift",
          lines: [
            { who: "Mr Reed", text: "Morning, Sara. Lovely day, isn't it?" },
            { who: "Sara", text: "It really is. Much warmer than yesterday." },
            { who: "Mr Reed", text: "How was your weekend?" },
            { who: "Sara", text: "Busy but nice. I went hiking with some friends." },
            { who: "Mr Reed", text: "Really? Where did you go?" },
            { who: "Sara", text: "To the hills north of the city. The views were amazing." },
            { who: "Mr Reed", text: "I'll have to try that. Anyway, this is my floor. See you later!" },
            { who: "Sara", text: "See you, Mr Reed. Have a good one!" }
          ],
          q: [
            { q: "What does Mr Reed say about the weather?", o: ["It's lovely and warmer than yesterday", "It's going to rain", "It's very cold"], a: 0, why: "\"Lovely day, isn't it?\" and \"Much warmer than yesterday.\"" },
            { q: "What did Sara do at the weekend?", o: ["She went hiking", "She stayed at home", "She visited her parents"], a: 0, why: "\"I went hiking with some friends.\"" },
            { q: "How does Mr Reed end the conversation?", o: ["He says it is his floor and says see you later", "He invites her for coffee", "He asks more questions"], a: 0, why: "\"Anyway, this is my floor. See you later!\"" }
          ]
        },
        read: {
          title: "The art of small talk",
          text: "Small talk is the short, friendly conversation we have with colleagues, neighbours and strangers. Many learners find it difficult because it seems to have no purpose. In fact, it has a very important purpose: it builds trust. Good small talk follows a simple pattern. Start with something you both share — the weather, the place, the moment. Then react with interest: \"Really?\", \"That sounds nice.\" Ask an open question, not a yes/no question. Finally, end politely: \"Anyway, I'd better get going. It was lovely talking to you.\" If you can do these four things, you can talk to anyone.",
          q: [
            { q: "What is the real purpose of small talk?", o: ["To build trust", "To share information", "To waste time"], a: 0, why: "\"it has a very important purpose: it builds trust.\"" },
            { q: "What kind of questions are recommended?", o: ["Open questions", "Yes/no questions", "Personal questions"], a: 0, why: "\"Ask an open question, not a yes/no question.\"" },
            { q: "How should you end a conversation?", o: ["Politely, with a friendly closing", "Suddenly, without a word", "By asking for a favour"], a: 0, why: "\"Finally, end politely.\"" }
          ]
        },
        write: {
          prompt: "Write a short dialogue (8 lines) of small talk between two colleagues meeting on Monday morning. Include a question tag and at least two reactions.",
          tips: ["Start with a greeting and a comment about the weather or the weekend", "Use question tags: isn't it, didn't you, have you", "End politely"],
          sample: "A: Morning, Ali! How was your weekend?\nB: Really good, thanks. I finally painted my flat. And you?\nA: Not bad at all. We had a family lunch on Sunday.\nB: Nice! Was it a special occasion?\nA: Yes, my sister's birthday. She turned thirty.\nB: Oh, thirty — that's a big one, isn't it?\nA: It is! She didn't want to celebrate, but we insisted.\nB: Ha! Well, anyway, I'd better get to my desk. Lovely catching up.\nA: You too. Have a good one!"
        },
        speak: ["Make small talk about the weather with me.", "How was your weekend?", "What is your opinion about social media?", "Agree and disagree with this idea: 'English is easy'.", "End a conversation politely."],
        ex: [
          { t: "mcq", q: "Lovely weather, ___?", o: ["isn't it", "is it", "doesn't it"], a: 0, why: "A positive statement takes a negative question tag." },
          { t: "fill", q: "You don't smoke, ___ you?", o: ["do", "don't", "are"], a: 0, why: "A negative statement takes a positive tag." },
          { t: "mcq", q: "Let's start the meeting, ___?", o: ["shall we", "will we", "do we"], a: 0, why: "With \"Let's\" the tag is \"shall we\"." },
          { t: "match", pairs: [["Really?", "showing interest"], ["Oh no!", "showing sympathy"], ["I see your point", "partly agreeing"], ["Anyway...", "changing topic"]] },
          { t: "order", words: ["you", "Do", "come", "here", "often"], answer: "Do you come here often" },
          { t: "translate", q: "Translate into English: برأيي، هذه فكرة جيدة", a: ["in my opinion this is a good idea", "i think this is a good idea"], why: "برأيي = \"In my opinion\"." },
          { t: "correct", wrong: "It's cold, isn't it is?", answer: "It's cold, isn't it?", why: "A question tag is only auxiliary + pronoun." },
          { t: "vocab", q: "To meet someone and share news after time apart is to ___.", o: ["catch up", "mention", "disagree"], a: 0, why: "\"Catch up\" means to share news after time apart." },
          { t: "listen", text: "It looks like it is going to rain this afternoon.", q: "What is the weather forecast?", o: ["Rain in the afternoon", "Snow in the morning", "Sunny all day"], a: 0, why: "The speaker says \"going to rain this afternoon\"." },
          { t: "write", prompt: "Write three lines of small talk with a colleague, including one question tag.", keywords: ["isn't it", "?", "how"], minWords: 16 }
        ]
      }
    ]
  };

  window.EH.levels.push(A2);
})();
