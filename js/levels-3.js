/* =====================================================================
   English Hero — Level B1 (Intermediate)
   10 units · 5 lessons per unit
   ===================================================================== */
(function () {
  "use strict";

  const B1 = {
    id: "b1",
    code: "B1",
    name: "Intermediate",
    color: "b1",
    tagline: "Hold real conversations and express your ideas clearly.",
    description: "You can already manage everyday English. Now you will master the present perfect, conditionals, the passive and reported speech, and learn to speak, write and listen with real fluency.",
    canDo: [
      "Talk about experiences and life events with the present perfect",
      "Use all three conditionals to discuss real and imaginary situations",
      "Describe processes and news using the passive voice",
      "Report what other people said accurately",
      "Write clear paragraphs and understand natural spoken English"
    ],
    units: [
      /* ---------------- UNIT 1 ---------------- */
      {
        n: 1,
        title: "Present Perfect & Life Experience",
        theme: "Present perfect simple, ever/never, for/since, just/already/yet",
        lessons: [
          { t: "Life Experience with Ever and Never", obj: "Ask and talk about experiences in your life.", pts: ["Have you ever been to London?", "I have never eaten sushi.", "She has travelled to twelve countries.", "Have you ever seen a lion in the wild?", "I have never tried bungee jumping."] },
          { t: "For and Since", obj: "Say how long something has continued.", pts: ["I have lived here for six years.", "She has worked there since 2020.", "We have known each other for a long time.", "He has had that car since 2018.", "How long have you studied English?"] },
          { t: "Just, Already and Yet", obj: "Talk about very recent events and expectations.", pts: ["I have just finished my homework.", "She has already left the office.", "Have you eaten yet?", "They haven't arrived yet.", "We have just heard the news."] },
          { t: "Present Perfect vs Past Simple", obj: "Choose the right tense for the situation.", pts: ["I have been to Paris three times.", "I went to Paris in 2019.", "Have you seen this film? — Yes, I saw it last week.", "She has written five books.", "Shakespeare wrote Hamlet."] },
          { t: "Present Perfect Continuous", obj: "Talk about activities continuing up to now.", pts: ["I have been studying English for two hours.", "It has been raining since morning.", "She has been working here for a year.", "Why are you tired? — I have been running.", "How long have you been waiting?"] }
        ],
        vocab: [
          { w: "experience", ipa: "/ɪkˈspɪəriəns/", pos: "noun", def: "Something that happens to you, or knowledge from doing things.", ar: "خبرة / تجربة", ex: "It was an amazing experience." },
          { w: "achieve", ipa: "/əˈtʃiːv/", pos: "verb", def: "To succeed in doing something after effort.", ar: "يحقق", ex: "She achieved her goal." },
          { w: "recently", ipa: "/ˈriːsntli/", pos: "adverb", def: "Not long ago.", ar: "مؤخرا", ex: "I have recently changed jobs." },
          { w: "so far", ipa: "/səʊ fɑː/", pos: "phrase", def: "Until now.", ar: "حتى الآن", ex: "So far, so good." },
          { w: "abroad", ipa: "/əˈbrɔːd/", pos: "adverb", def: "In or to a foreign country.", ar: "في الخارج", ex: "Have you ever worked abroad?" },
          { w: "opportunity", ipa: "/ˌɒpəˈtjuːnəti/", pos: "noun", def: "A chance to do something good.", ar: "فرصة", ex: "This is a great opportunity." },
          { w: "progress", ipa: "/ˈprəʊɡres/", pos: "noun", def: "Movement forward or improvement.", ar: "تقدم", ex: "You have made great progress." },
          { w: "impressive", ipa: "/ɪmˈpresɪv/", pos: "adjective", def: "Causing admiration.", ar: "مثير للإعجاب", ex: "Her results are impressive." },
          { w: "ambition", ipa: "/æmˈbɪʃn/", pos: "noun", def: "A strong wish to achieve something.", ar: "طموح", ex: "His ambition is to run a company." },
          { w: "milestone", ipa: "/ˈmaɪlstəʊn/", pos: "noun", def: "An important event in a process.", ar: "محطة مهمة", ex: "Graduation was a real milestone." }
        ],
        gram: {
          title: "Present perfect vs past simple",
          explain: {
            en: "The present perfect connects the past to now — we do not say exactly when. The past simple describes a finished action at a specific time in the past. If you mention a finished time (yesterday, in 2019, last week), you must use the past simple.",
            ar: "المضارع التام يربط الماضي بالحاضر دون تحديد زمن. أما الماضي البسيط فيصف فعلا منتهيا في زمن محدد. إذا ذكرت زمنا منتهيا فيجب استخدام الماضي البسيط.",
            fr: "Le present perfect relie le passé au présent sans préciser quand. Le passé simple situe l'action à un moment terminé."
          },
          formula: ['<span class="fx-k">have / has</span> + <span class="fx-v">past participle</span> → I have <span class="fx-v">seen</span> it. (no exact time)', '<span class="fx-k">ever / never / already / just / yet</span> + present perfect', 'Past simple + <span class="fx-v">finished time</span> → I <span class="fx-k">saw</span> it <span class="fx-v">yesterday</span>.', 'Duration: <span class="fx-k">for</span> + period · <span class="fx-k">since</span> + point in time'],
          examples: [
            { en: "I have visited Rome three times.", ar: "زرت روما ثلاث مرات." },
            { en: "I visited Rome in 2018.", ar: "زرت روما في 2018." },
            { en: "She has just finished the report.", ar: "أنهت التقرير للتو." },
            { en: "We haven't decided yet.", ar: "لم نقرر بعد." }
          ],
          mistakes: [
            { w: "I have seen him yesterday.", r: "I saw him yesterday.", why: "\"Yesterday\" is a finished time, so use the past simple." },
            { w: "I live here since 2015.", r: "I have lived here since 2015.", why: "A situation continuing to now needs the present perfect." },
            { w: "She has wrote three books.", r: "She has written three books.", why: "The past participle of \"write\" is \"written\"." }
          ]
        },
        listen: {
          title: "An interview about travel",
          lines: [
            { who: "Host", text: "So, Nadia, you have visited more than forty countries. When did it all start?" },
            { who: "Nadia", text: "I went on my first trip alone when I was nineteen. I travelled to India." },
            { who: "Host", text: "Have you ever been afraid on a trip?" },
            { who: "Nadia", text: "Once. I got lost in a forest in Nepal for two days. It was terrifying." },
            { who: "Host", text: "Two days! How did you survive?" },
            { who: "Nadia", text: "A farmer found me. Since then I have always carried a paper map." },
            { who: "Host", text: "And what is the most beautiful place you have ever seen?" },
            { who: "Nadia", text: "The mountains in Patagonia. I have never seen anything like it." }
          ],
          q: [
            { q: "When did Nadia start travelling?", o: ["When she was nineteen", "When she was thirty", "Last year"], a: 0, why: "\"I went on my first trip alone when I was nineteen.\"" },
            { q: "What happened in Nepal?", o: ["She got lost in a forest", "She lost her passport", "She broke her leg"], a: 0, why: "\"I got lost in a forest in Nepal for two days.\"" },
            { q: "What has she carried since then?", o: ["A paper map", "A satellite phone", "A guide"], a: 0, why: "\"Since then I have always carried a paper map.\"" }
          ]
        },
        read: {
          title: "My career so far",
          text: "I have worked in journalism for eleven years. I started as a junior reporter at a local newspaper in 2015, and I have never regretted that choice. Since then I have covered three elections, I have interviewed more than two hundred people, and I have written two books. I have also lived abroad twice: I spent a year in Berlin and eighteen months in Buenos Aires. That experience changed the way I see the world. I have not yet achieved everything I want — I would still like to report from a war zone — but I have made steady progress. My advice to young journalists is simple: never stop asking questions.",
          q: [
            { q: "How long has the writer worked in journalism?", o: ["Eleven years", "Five years", "Twenty years"], a: 0, why: "\"I have worked in journalism for eleven years.\"" },
            { q: "Where has the writer lived abroad?", o: ["Berlin and Buenos Aires", "London and Rome", "Cairo and Paris"], a: 0, why: "\"I spent a year in Berlin and eighteen months in Buenos Aires.\"" },
            { q: "What has the writer not done yet?", o: ["Report from a war zone", "Write a book", "Interview anyone"], a: 0, why: "\"I have not yet achieved everything I want — I would still like to report from a war zone.\"" }
          ]
        },
        write: {
          prompt: "Write a paragraph (7–8 sentences) about your life so far: what you have achieved, where you have been, and what you haven't done yet.",
          tips: ["Use the present perfect for experience without a time", "Use for/since to describe duration", "Finish with something you haven't done yet"],
          sample: "I have studied English for about seven years, but I have only started speaking regularly in the last two. I have visited four countries so far, and the most interesting one was Turkey. I have worked in three different jobs, and I have learned something useful from each of them. I have never lived abroad, although I would love to try. Since I started using English at work, my confidence has grown a lot. I have recently begun reading short stories in English, which is still difficult but enjoyable. I have not yet passed a formal English exam, and that is my next goal."
        },
        speak: ["Have you ever been abroad?", "How long have you studied English?", "What is the best thing you have ever done?", "Have you finished your homework yet?", "What have you achieved this year?"],
        ex: [
          { t: "mcq", q: "I ___ in this city since 2019.", o: ["live", "lived", "have lived"], a: 2, why: "\"Since\" with a situation continuing to now takes the present perfect." },
          { t: "fill", q: "She has ___ finished the report.", o: ["just", "yet", "ever"], a: 0, why: "\"Just\" describes a very recent action." },
          { t: "mcq", q: "We haven't decided ___.", o: ["already", "yet", "just"], a: 1, why: "\"Yet\" is used in negatives and questions." },
          { t: "fill", q: "I ___ him yesterday.", o: ["have seen", "saw", "have saw"], a: 1, why: "\"Yesterday\" is a finished time, so the past simple." },
          { t: "match", pairs: [["have been", "present perfect"], ["went", "past simple"], ["since 2020", "point in time"], ["for three years", "period of time"]] },
          { t: "order", words: ["ever", "Have", "been", "you", "abroad"], answer: "Have you ever been abroad" },
          { t: "correct", wrong: "I have seen him yesterday.", answer: "I saw him yesterday.", why: "Do not use the present perfect with a finished time expression." },
          { t: "translate", q: "Translate into English: أسكن هنا منذ خمس سنوات", a: ["i have lived here for five years", "i have been living here for five years"], why: "منذ = \"for\" with the present perfect." },
          { t: "listen", text: "I have just finished my third year at university.", q: "What has the speaker just finished?", o: ["Third year at university", "A job interview", "A long trip"], a: 0, why: "The speaker says \"my third year at university\"." },
          { t: "write", prompt: "Write three sentences about your experiences using 'have been', 'have never' and 'have just'.", keywords: ["have been", "have never", "have just"], minWords: 20 }
        ]
      },

      /* ---------------- UNIT 2 ---------------- */
      {
        n: 2,
        title: "Conditionals",
        theme: "Zero, first, second and third conditionals plus wish",
        lessons: [
          { t: "Zero Conditional", obj: "Talk about facts and general truths.", pts: ["If you heat water, it boils.", "If I don't sleep, I feel terrible.", "Plants die if you don't water them.", "If you press this button, the machine starts.", "When it rains, the streets get busy."] },
          { t: "First Conditional", obj: "Talk about real possibilities in the future.", pts: ["If it rains tomorrow, we will stay home.", "If you study hard, you will pass.", "I will call you if I am late.", "She won't come unless you invite her.", "If we leave now, we will catch the train."] },
          { t: "Second Conditional", obj: "Talk about imaginary or unlikely situations.", pts: ["If I had more money, I would travel the world.", "If I were you, I would apologise.", "What would you do if you won the lottery?", "If she spoke English, she would get the job.", "I would buy a house if I could afford it."] },
          { t: "Third Conditional", obj: "Talk about regrets and impossible past situations.", pts: ["If I had studied, I would have passed.", "She would have come if you had told her.", "If we had left earlier, we wouldn't have missed the flight.", "I wouldn't have said that if I had known.", "If he had listened, everything would have been different."] },
          { t: "Wish and Regret", obj: "Express wishes about the present and past.", pts: ["I wish I spoke better English.", "I wish I had more free time.", "She wishes she hadn't quit her job.", "I wish it would stop raining.", "If only I had known earlier!"] }
        ],
        vocab: [
          { w: "unless", ipa: "/ənˈles/", pos: "conjunction", def: "Except if; if not.", ar: "إلا إذا", ex: "I won't go unless you come." },
          { w: "otherwise", ipa: "/ˈʌðəwaɪz/", pos: "adverb", def: "If not, then a different result follows.", ar: "وإلا", ex: "Leave now, otherwise you'll be late." },
          { w: "imagine", ipa: "/ɪˈmædʒɪn/", pos: "verb", def: "To form a picture in your mind.", ar: "يتخيل", ex: "Imagine you won a million euros." },
          { w: "regret", ipa: "/rɪˈɡret/", pos: "verb / noun", def: "To feel sorry about something you did or didn't do.", ar: "يأسف / ندم", ex: "I regret leaving that job." },
          { w: "consequence", ipa: "/ˈkɒnsɪkwəns/", pos: "noun", def: "A result of an action.", ar: "نتيجة", ex: "Every choice has consequences." },
          { w: "risk", ipa: "/rɪsk/", pos: "noun / verb", def: "The possibility that something bad will happen.", ar: "خطر / مخاطرة", ex: "It is a risk worth taking." },
          { w: "provided that", ipa: "/prəˈvaɪdɪd ðæt/", pos: "conjunction", def: "Only if; on condition that.", ar: "بشرط أن", ex: "You can go provided that you finish first." },
          { w: "realistic", ipa: "/ˌriːəˈlɪstɪk/", pos: "adjective", def: "Based on what is really possible.", ar: "واقعي", ex: "Be realistic about your goals." },
          { w: "hypothetical", ipa: "/ˌhaɪpəˈθetɪkl/", pos: "adjective", def: "Imagined, not real.", ar: "افتراضي", ex: "It is only a hypothetical situation." },
          { w: "in hindsight", ipa: "/ɪn ˈhaɪndsaɪt/", pos: "phrase", def: "Looking back at a past situation.", ar: "بالنظر إلى الماضي", ex: "In hindsight, I should have waited." }
        ],
        gram: {
          title: "The four conditionals",
          explain: {
            en: "Zero conditional = general truth (if + present, present). First = real future possibility (if + present, will). Second = imaginary present (if + past, would). Third = impossible past (if + had + participle, would have + participle).",
            ar: "الشرط الصفري = حقيقة عامة. الأول = احتمال حقيقي في المستقبل. الثاني = موقف متخيل في الحاضر. الثالث = موقف مستحيل في الماضي.",
            fr: "Conditionnel zéro = vérité générale ; premier = possibilité réelle ; deuxième = hypothèse imaginaire ; troisième = passé impossible."
          },
          formula: ['<span class="fx-k">Zero:</span> If + present, present → If you <span class="fx-v">heat</span> ice, it <span class="fx-v">melts</span>.', '<span class="fx-k">First:</span> If + present, <span class="fx-v">will</span> → If it <span class="fx-v">rains</span>, we <span class="fx-v">will stay</span>.', '<span class="fx-k">Second:</span> If + past, <span class="fx-v">would</span> → If I <span class="fx-v">had</span> time, I <span class="fx-v">would help</span>.', '<span class="fx-k">Third:</span> If + had + pp, <span class="fx-v">would have</span> + pp → If I <span class="fx-v">had known</span>, I <span class="fx-v">would have come</span>.'],
          examples: [
            { en: "If you don't water plants, they die.", ar: "إذا لم تسقِ النباتات فإنها تموت." },
            { en: "If I see him, I will tell him.", ar: "إذا رأيته سأخبره." },
            { en: "If I were rich, I would buy an island.", ar: "لو كنت غنيا لاشتريت جزيرة." },
            { en: "If she had called, I would have answered.", ar: "لو أنها اتصلت لكنت أجبت." }
          ],
          mistakes: [
            { w: "If it will rain, we will stay home.", r: "If it rains, we will stay home.", why: "Never use \"will\" in the if-clause of a first conditional." },
            { w: "If I would have money, I would travel.", r: "If I had money, I would travel.", why: "The second conditional uses the past simple in the if-clause." },
            { w: "If I had studied, I would pass.", r: "If I had studied, I would have passed.", why: "The third conditional needs \"would have + past participle\"." }
          ]
        },
        listen: {
          title: "A difficult decision",
          lines: [
            { who: "Mona", text: "I can't decide whether to accept the job in Dubai." },
            { who: "Yassin", text: "What would you do if you were me?" },
            { who: "Mona", text: "If I were you, I would take it. The salary is much better." },
            { who: "Yassin", text: "But if I move, my children will have to change schools." },
            { who: "Mona", text: "That's true. If you stayed here, would you be happy?" },
            { who: "Yassin", text: "Probably not. In hindsight, I should have applied earlier." },
            { who: "Mona", text: "Look, if you don't try it, you will always wonder." },
            { who: "Yassin", text: "You're right. If I had known it was this hard, I would have asked for advice sooner." }
          ],
          q: [
            { q: "What decision is Yassin facing?", o: ["A job offer in Dubai", "Buying a house", "Moving to another school"], a: 0, why: "\"the job in Dubai.\"" },
            { q: "What would Mona do?", o: ["Take the job", "Stay where she is", "Ask for less money"], a: 0, why: "\"If I were you, I would take it.\"" },
            { q: "What does Yassin regret?", o: ["Not applying earlier", "Leaving his job", "Moving house"], a: 0, why: "\"In hindsight, I should have applied earlier.\"" }
          ]
        },
        read: {
          title: "What if?",
          text: "Most of us spend a lot of time thinking about \"what if\". What if I had chosen a different university? What if I had said yes to that offer? Psychologists say this kind of thinking is normal, but it becomes harmful when it stops us from acting. A better approach is to use conditionals in a practical way. If you are facing a decision, ask yourself: if I do nothing, what will happen? If I take this risk and it works, where will I be in three years? If I had made this choice five years ago, would I be happier now? The last question is interesting, but it is also useless, because the past cannot be changed. The first two questions, on the other hand, can genuinely help you decide.",
          q: [
            { q: "When does \"what if\" thinking become harmful?", o: ["When it stops us from acting", "When it is done at night", "When it involves money"], a: 0, why: "\"it becomes harmful when it stops us from acting.\"" },
            { q: "Which question does the writer call useless?", o: ["The one about the past", "The one about doing nothing", "The one about the risk"], a: 0, why: "\"The last question is interesting, but it is also useless, because the past cannot be changed.\"" },
            { q: "Which questions can help you decide?", o: ["The first two questions", "Only the third", "None of them"], a: 0, why: "\"The first two questions, on the other hand, can genuinely help you decide.\"" }
          ]
        },
        write: {
          prompt: "Write 7 sentences using all four conditionals. Include one regret and one piece of advice.",
          tips: ["Label each conditional type mentally as you write", "Use \"unless\", \"otherwise\" and \"if I were you\"", "Finish with a third conditional about a past decision"],
          sample: "If I don't sleep well, I feel terrible the next day, so I try to go to bed before eleven. If I finish my work early tomorrow, I will go for a long walk by the river. If I had more free time, I would learn to play the piano. If I were you, I would start saving money now, because prices are rising quickly. I would also take the exam this year, otherwise you may lose your motivation. If I had started learning English earlier, I would have found a better job by now. That is my biggest regret, and it is exactly why I study every day."
        },
        speak: ["What would you do if you won a million euros?", "If you could live anywhere, where would you live?", "What will you do if it rains tomorrow?", "Tell me about a regret using the third conditional.", "Give me advice using 'If I were you'."],
        ex: [
          { t: "mcq", q: "If it ___ tomorrow, we will stay at home.", o: ["will rain", "rains", "rained"], a: 1, why: "The first conditional uses the present simple in the if-clause." },
          { t: "fill", q: "If I ___ more money, I would travel the world.", o: ["have", "had", "would have"], a: 1, why: "The second conditional uses the past simple in the if-clause." },
          { t: "mcq", q: "If I had studied, I ___ the exam.", o: ["would pass", "would have passed", "passed"], a: 1, why: "The third conditional needs \"would have + past participle\"." },
          { t: "fill", q: "I won't go ___ you come with me.", o: ["unless", "otherwise", "if"], a: 0, why: "\"Unless\" means \"if not\"." },
          { t: "match", pairs: [["If you heat ice", "it melts"], ["If it rains", "we will stay home"], ["If I were rich", "I would travel"], ["If I had known", "I would have come"]] },
          { t: "order", words: ["were", "If", "I", "you", "I", "would", "apologise"], answer: "If I were you I would apologise" },
          { t: "correct", wrong: "If it will rain, we will stay home.", answer: "If it rains, we will stay home.", why: "Do not use \"will\" in the if-clause." },
          { t: "translate", q: "Translate into English: لو كنت مكانك لما فعلت ذلك", a: ["if i were you i wouldn't do that", "if i were you i would not do that"], why: "لو كنت مكانك = \"If I were you\"." },
          { t: "listen", text: "If you leave now, you will catch the last train.", q: "What will happen if you leave now?", o: ["You will catch the last train", "You will miss the train", "Nothing will change"], a: 0, why: "The speaker says \"you will catch the last train\"." },
          { t: "write", prompt: "Write two sentences using the second conditional about your dreams.", keywords: ["if i", "would"], minWords: 16 }
        ]
      },

      /* ---------------- UNIT 3 ---------------- */
      {
        n: 3,
        title: "The Passive Voice",
        theme: "Passive in all tenses, by + agent, reporting processes",
        lessons: [
          { t: "Passive in the Present and Past", obj: "Describe actions without saying who did them.", pts: ["This bridge was built in 1890.", "English is spoken all over the world.", "The letters are delivered every morning.", "The window was broken last night.", "Rice is grown in many Asian countries."] },
          { t: "The Agent with 'by'", obj: "Say who performed the action when it matters.", pts: ["The novel was written by Naguib Mahfouz.", "The song was performed by a young singer.", "The decision was made by the committee.", "The building was designed by a French architect.", "The email was sent by mistake."] },
          { t: "Passive with Modal Verbs", obj: "Combine modals with the passive.", pts: ["The form must be signed by both parents.", "This medicine should be taken twice a day.", "The report can be submitted online.", "The rules have to be followed.", "Nothing could be done."] },
          { t: "Passive in the Present Perfect", obj: "Describe completed actions in the passive.", pts: ["The road has been repaired.", "The results have been published online.", "My car has been stolen.", "The project has been finished.", "Three new hospitals have been opened this year."] },
          { t: "Describing Processes", obj: "Explain how something is made or done.", pts: ["First, the coffee beans are collected by hand.", "Then they are dried in the sun.", "Next, the beans are roasted at a high temperature.", "After that, they are packed and shipped.", "Finally, the coffee is sold in shops."] }
        ],
        vocab: [
          { w: "manufacture", ipa: "/ˌmænjuˈfæktʃə/", pos: "verb", def: "To make goods in large quantities.", ar: "يصنع", ex: "These phones are manufactured in Asia." },
          { w: "produce", ipa: "/prəˈdjuːs/", pos: "verb", def: "To make or grow something.", ar: "ينتج", ex: "Oil is produced in this region." },
          { w: "deliver", ipa: "/dɪˈlɪvə/", pos: "verb", def: "To take goods to a place.", ar: "يوصل", ex: "The parcel was delivered yesterday." },
          { w: "publish", ipa: "/ˈpʌblɪʃ/", pos: "verb", def: "To print and make available a book or article.", ar: "ينشر", ex: "The study was published in May." },
          { w: "discover", ipa: "/dɪˈskʌvə/", pos: "verb", def: "To find something for the first time.", ar: "يكتشف", ex: "Penicillin was discovered by accident." },
          { w: "damage", ipa: "/ˈdæmɪdʒ/", pos: "verb / noun", def: "To harm something.", ar: "يتلف / تلف", ex: "The roof was damaged in the storm." },
          { w: "process", ipa: "/ˈprəʊses/", pos: "noun / verb", def: "A series of steps; to treat something through steps.", ar: "عملية / يعالج", ex: "The data is processed automatically." },
          { w: "employee", ipa: "/ɪmˈplɔɪiː/", pos: "noun", def: "A person who works for a company.", ar: "موظف", ex: "Employees are paid monthly." },
          { w: "require", ipa: "/rɪˈkwaɪə/", pos: "verb", def: "To need something officially.", ar: "يتطلب", ex: "A visa is required for this country." },
          { w: "regulation", ipa: "/ˌreɡjuˈleɪʃn/", pos: "noun", def: "An official rule.", ar: "لائحة / نظام", ex: "New regulations were introduced." }
        ],
        gram: {
          title: "The passive voice",
          explain: {
            en: "We use the passive when the action is more important than the person doing it, when we don't know who did it, or when we want to sound formal and objective. The object of the active sentence becomes the subject: \"They built the bridge\" → \"The bridge was built\". The tense is carried by the verb \"be\".",
            ar: "نستخدم المبني للمجهول عندما يكون الحدث أهم من الفاعل، أو عندما لا نعرفه، أو عندما نريد أسلوبا رسميا وموضوعيا. يصبح المفعول فاعلا، ويحمل الفعل be الزمن.",
            fr: "On utilise le passif quand l'action importe plus que l'agent, ou pour un style formel. Le temps est porté par le verbe « be »."
          },
          formula: ['<span class="fx-k">be</span> + <span class="fx-v">past participle</span> (+ by + agent)', 'Present: English <span class="fx-k">is spoken</span> here.', 'Past: The bridge <span class="fx-k">was built</span> in 1890.', 'Present perfect: The road <span class="fx-k">has been repaired</span>. · Modal: It <span class="fx-k">must be signed</span>.'],
          examples: [
            { en: "The letter was sent yesterday.", ar: "أُرسلت الرسالة أمس." },
            { en: "Coffee is grown in Brazil.", ar: "يُزرع البن في البرازيل." },
            { en: "The results have been published.", ar: "تم نشر النتائج." },
            { en: "The form must be completed in blue ink.", ar: "يجب تعبئة النموذج بالحبر الأزرق." }
          ],
          mistakes: [
            { w: "The bridge was build in 1890.", r: "The bridge was built in 1890.", why: "Use the past participle \"built\", not the base form." },
            { w: "The letter was sent by I.", r: "The letter was sent by me.", why: "After a preposition we use the object pronoun." },
            { w: "English is speak all over the world.", r: "English is spoken all over the world.", why: "The passive needs the past participle." }
          ]
        },
        listen: {
          title: "How chocolate is made",
          lines: [
            { who: "Guide", text: "Welcome to the factory. Today you will see how chocolate is made." },
            { who: "Visitor", text: "Where do the cocoa beans come from?" },
            { who: "Guide", text: "They are grown in West Africa and South America, then shipped here." },
            { who: "Visitor", text: "And what happens first?" },
            { who: "Guide", text: "First the beans are cleaned and roasted. Then they are ground into a thick liquid." },
            { who: "Visitor", text: "Is sugar added at this stage?" },
            { who: "Guide", text: "Yes, sugar and milk are added, and the mixture is stirred for hours." },
            { who: "Visitor", text: "And finally?" },
            { who: "Guide", text: "It is poured into moulds, cooled, and wrapped. Then it is sent to the shops." }
          ],
          q: [
            { q: "Where are cocoa beans grown?", o: ["West Africa and South America", "Europe", "Asia only"], a: 0, why: "\"They are grown in West Africa and South America.\"" },
            { q: "What is done to the beans first?", o: ["They are cleaned and roasted", "They are wrapped", "Sugar is added"], a: 0, why: "\"First the beans are cleaned and roasted.\"" },
            { q: "What happens at the end of the process?", o: ["It is wrapped and sent to shops", "It is grown", "It is frozen"], a: 0, why: "\"It is poured into moulds, cooled, and wrapped. Then it is sent to the shops.\"" }
          ]
        },
        read: {
          title: "Who built the pyramids?",
          text: "The Great Pyramid of Giza was built more than 4,500 years ago, and it is still one of the most impressive structures in the world. For centuries people believed it had been built by slaves, but modern research has shown a different story. The workers were paid, well fed and carefully organised. Huge blocks of stone were cut, moved and lifted using ramps and simple machines. Nobody knows exactly how some of the heaviest blocks were positioned, and many theories have been proposed. What is certain is that the pyramid was designed with extraordinary precision: the four sides are almost perfectly aligned with the compass points. It was built to last forever, and so far it has.",
          q: [
            { q: "How long ago was the pyramid built?", o: ["More than 4,500 years ago", "About 500 years ago", "1,000 years ago"], a: 0, why: "\"built more than 4,500 years ago.\"" },
            { q: "What has modern research shown?", o: ["The workers were paid and well fed", "The pyramid is a fake", "It was built in one year"], a: 0, why: "\"The workers were paid, well fed and carefully organised.\"" },
            { q: "What is certain about the pyramid?", o: ["It was designed with extraordinary precision", "It was built by slaves", "It was built by one person"], a: 0, why: "\"What is certain is that the pyramid was designed with extraordinary precision.\"" }
          ]
        },
        write: {
          prompt: "Write a paragraph (7 sentences) explaining how a product is made or how a process works. Use the passive voice throughout.",
          tips: ["Use sequencing words: first, then, next, after that, finally", "Keep the focus on the process, not the person", "Add one sentence about where the product is sold or used"],
          sample: "Olive oil is produced in many countries around the Mediterranean. First, the olives are collected by hand or with special machines. Then they are washed and the leaves are removed. Next, the olives are crushed to separate the oil from the fruit. After that, the oil is filtered and stored in large steel containers. The best oil is bottled quickly to keep its flavour. The bottles are then labelled and shipped to shops and restaurants around the world. Finally, the leftover material is used as animal food or fertiliser."
        },
        speak: ["Describe how something is made using the passive.", "Who was your favourite book written by?", "Tell me about a building you admire.", "What rules must be followed in your workplace?", "How is your national dish prepared?"],
        ex: [
          { t: "mcq", q: "The bridge ___ in 1890.", o: ["built", "was built", "is building"], a: 1, why: "Passive past = was/were + past participle." },
          { t: "fill", q: "English ___ spoken all over the world.", o: ["is", "was", "has"], a: 0, why: "Passive present = is/are + past participle." },
          { t: "mcq", q: "The novel was written ___ Naguib Mahfouz.", o: ["from", "by", "with"], a: 1, why: "The agent in a passive sentence is introduced by \"by\"." },
          { t: "fill", q: "The form must ___ signed by both parents.", o: ["be", "been", "being"], a: 0, why: "Modal passive = modal + be + past participle." },
          { t: "match", pairs: [["is spoken", "present passive"], ["was built", "past passive"], ["has been repaired", "present perfect passive"], ["must be signed", "modal passive"]] },
          { t: "order", words: ["was", "The", "stolen", "car"], answer: "The car was stolen" },
          { t: "correct", wrong: "The bridge was build in 1890.", answer: "The bridge was built in 1890.", why: "The passive needs the past participle \"built\"." },
          { t: "translate", q: "Translate into English: تم بناء المنزل في 1990", a: ["the house was built in 1990"], why: "تم بناء = \"was built\"." },
          { t: "listen", text: "The results have been published on the university website.", q: "Where have the results been published?", o: ["On the university website", "In a newspaper", "In a magazine"], a: 0, why: "The speaker says \"on the university website\"." },
          { t: "write", prompt: "Write three passive sentences describing a process.", keywords: ["is", "are", "was", "were"], minWords: 18 }
        ]
      },

      /* ---------------- UNIT 4 ---------------- */
      {
        n: 4,
        title: "Reported Speech",
        theme: "Backshifting, reporting verbs, questions and commands",
        lessons: [
          { t: "Reporting Statements", obj: "Report what someone said using backshift.", pts: ['"I am tired," she said. → She said she was tired.', '"We will come," they said. → They said they would come.', '"I have finished," he said. → He said he had finished.', '"I can help," she said. → She said she could help.', "He told me he was busy."] },
          { t: "Reporting Questions", obj: "Turn direct questions into reported ones.", pts: ['"Where do you live?" → He asked where I lived.', '"Are you coming?" → She asked if I was coming.', '"What time is it?" → He asked what time it was.', '"Why did you leave?" → She asked why I had left.', "No question mark in reported speech."] },
          { t: "Reporting Commands and Requests", obj: "Report orders, advice and requests.", pts: ['"Close the door." → He told me to close the door.', '"Don\'t be late." → She told us not to be late.', '"Could you help me?" → He asked me to help him.', '"You should rest." → She advised me to rest.', '"Please wait." → She asked me to wait.'] },
          { t: "Reporting Verbs", obj: "Use a variety of reporting verbs.", pts: ["He admitted making a mistake.", "She offered to drive me home.", "They refused to sign the contract.", "He promised to call me.", "She suggested going to the cinema."] },
          { t: "Time and Place Changes", obj: "Adjust time and place words correctly.", pts: ["now → then · today → that day", "tomorrow → the next day · yesterday → the day before", "here → there · this → that", "last week → the week before", "next month → the following month"] }
        ],
        vocab: [
          { w: "claim", ipa: "/kleɪm/", pos: "verb", def: "To say something is true without proof.", ar: "يدّعي", ex: "He claimed he had never seen the file." },
          { w: "admit", ipa: "/ədˈmɪt/", pos: "verb", def: "To agree that something is true, often unwillingly.", ar: "يعترف", ex: "She admitted she was wrong." },
          { w: "deny", ipa: "/dɪˈnaɪ/", pos: "verb", def: "To say that something is not true.", ar: "ينفي", ex: "He denied taking the money." },
          { w: "refuse", ipa: "/rɪˈfjuːz/", pos: "verb", def: "To say you will not do something.", ar: "يرفض", ex: "They refused to answer." },
          { w: "suggest", ipa: "/səˈdʒest/", pos: "verb", def: "To give an idea for people to consider.", ar: "يقترح", ex: "She suggested postponing the meeting." },
          { w: "warn", ipa: "/wɔːn/", pos: "verb", def: "To tell someone about a possible danger.", ar: "يحذر", ex: "He warned us not to go there." },
          { w: "announce", ipa: "/əˈnaʊns/", pos: "verb", def: "To tell people officially about something.", ar: "يعلن", ex: "They announced the results." },
          { w: "according to", ipa: "/əˈkɔːdɪŋ tuː/", pos: "phrase", def: "As stated by someone or something.", ar: "وفقا لـ", ex: "According to the report, sales increased." },
          { w: "rumour", ipa: "/ˈruːmə/", pos: "noun", def: "Information people talk about that may not be true.", ar: "شائعة", ex: "There is a rumour about a merger." },
          { w: "source", ipa: "/sɔːs/", pos: "noun", def: "The person or place information comes from.", ar: "مصدر", ex: "The journalist protected her source." }
        ],
        gram: {
          title: "Reported speech — backshifting",
          explain: {
            en: "When we report speech, the tense usually moves one step back: present → past, past → past perfect, will → would, can → could. Pronouns and time expressions also change. If the reporting verb is in the past (said, told), backshift is necessary.",
            ar: "عند نقل الكلام يرجع الزمن خطوة إلى الوراء: المضارع يصبح ماضيا، والماضي يصبح ماضيا تاما، و will تصبح would. وتتغير الضمائر وظروف الزمان.",
            fr: "Au discours indirect, le temps recule d'un cran : présent → passé, will → would, can → could."
          },
          formula: ['present → <span class="fx-k">past</span> · past → <span class="fx-k">past perfect</span>', '<span class="fx-k">will</span> → <span class="fx-k">would</span> · <span class="fx-k">can</span> → <span class="fx-k">could</span> · <span class="fx-k">must</span> → <span class="fx-k">had to</span>', 'Questions: <span class="fx-k">ask</span> + if / wh-word + statement order (no question mark)', 'Commands: <span class="fx-k">tell / ask</span> + object + <span class="fx-v">to</span> + verb'],
          examples: [
            { en: '"I am busy." → He said he was busy.', ar: '«أنا مشغول» → قال إنه كان مشغولا.' },
            { en: '"Where do you work?" → She asked where I worked.', ar: '«أين تعمل؟» → سألت أين أعمل.' },
            { en: '"Call me later." → He told me to call him later.', ar: '«اتصل بي لاحقا» → طلب مني أن أتصل به لاحقا.' },
            { en: '"I will help you." → She promised to help me.', ar: '«سأساعدك» → وعدت بمساعدتي.' }
          ],
          mistakes: [
            { w: 'He said me that he was tired.', r: "He told me that he was tired.", why: '"Say" takes no indirect object; "tell" needs one: tell someone.' },
            { w: 'She asked where did I live.', r: "She asked where I lived.", why: "Reported questions use statement word order." },
            { w: 'He said he will come.', r: "He said he would come.", why: '"Will" backshifts to "would".' }
          ]
        },
        listen: {
          title: "Passing on a message",
          lines: [
            { who: "Reception", text: "Mr Ali called while you were out." },
            { who: "Manager", text: "What did he say?" },
            { who: "Reception", text: "He said the contract had been signed and he would send it today." },
            { who: "Manager", text: "Good. Did he mention the deadline?" },
            { who: "Reception", text: "Yes, he asked if we could deliver by the fifteenth." },
            { who: "Manager", text: "That should be fine. Anything else?" },
            { who: "Reception", text: "He also told us not to contact the client directly." },
            { who: "Manager", text: "Understood. Thanks for passing that on." }
          ],
          q: [
            { q: "What did Mr Ali say about the contract?", o: ["It had been signed", "It was cancelled", "It needed changes"], a: 0, why: "\"He said the contract had been signed.\"" },
            { q: "What did Mr Ali ask?", o: ["If they could deliver by the fifteenth", "For a lower price", "To meet tomorrow"], a: 0, why: "\"he asked if we could deliver by the fifteenth.\"" },
            { q: "What did he tell them not to do?", o: ["Contact the client directly", "Send the contract", "Call him again"], a: 0, why: "\"He also told us not to contact the client directly.\"" }
          ]
        },
        read: {
          title: "The press conference",
          text: "At yesterday's press conference, the minister denied that the budget had been cut. She claimed that spending on education had actually increased by four percent. When a journalist asked why three schools had closed, she replied that those decisions had been taken by local councils, not by the government. She also announced that a new training programme would start in September. Afterwards, several journalists said they were not convinced. According to one reporter, the figures she quoted did not match the official documents. Another suggested that the real reason for the closures was a shortage of teachers, a problem the minister had not mentioned at all.",
          q: [
            { q: "What did the minister deny?", o: ["That the budget had been cut", "That schools had closed", "That she was present"], a: 0, why: "\"the minister denied that the budget had been cut.\"" },
            { q: "What did she announce?", o: ["A new training programme", "A new tax", "A new school"], a: 0, why: "\"She also announced that a new training programme would start in September.\"" },
            { q: "Why were journalists not convinced?", o: ["The figures did not match official documents", "She refused to speak", "She arrived late"], a: 0, why: "\"the figures she quoted did not match the official documents.\"" }
          ]
        },
        write: {
          prompt: "Write a short news report (7 sentences) using reported speech. Include at least one reported question, one reported command and three different reporting verbs.",
          tips: ["Use reporting verbs: said, claimed, denied, announced, warned, admitted", "Backshift all tenses", "Use \"according to\" to attribute information"],
          sample: "At a meeting yesterday, the company director announced that profits had risen by twelve percent. He claimed that the new strategy was working better than expected. However, when a shareholder asked why two factories had closed, he admitted that the decision had been difficult. He also warned that energy costs would probably increase next year. According to an internal report, staff numbers have fallen by eight percent since January. The union representative denied that employees had agreed to the changes. She told journalists that negotiations would continue next week."
        },
        speak: ["Report something a friend told you yesterday.", "Report a question someone asked you.", "What did your teacher tell you to do?", "Report a piece of news you heard this week.", "Tell me what someone promised you."],
        ex: [
          { t: "mcq", q: '"I am tired," she said. → She said she ___ tired.', o: ["is", "was", "has been"], a: 1, why: "Present backshifts to past." },
          { t: "fill", q: '"I will help you." → He said he ___ help me.', o: ["will", "would", "can"], a: 1, why: "\"Will\" backshifts to \"would\"." },
          { t: "mcq", q: '"Where do you live?" → He asked where I ___.', o: ["live", "did live", "lived"], a: 2, why: "Reported questions use statement order and backshift." },
          { t: "fill", q: '"Close the door." → He told me ___ close the door.', o: ["to", "that", "for"], a: 0, why: "Reported commands use \"tell + object + to + verb\"." },
          { t: "match", pairs: [["can", "could"], ["will", "would"], ["must", "had to"], ["today", "that day"]] },
          { t: "order", words: ["said", "He", "was", "he", "busy"], answer: "He said he was busy" },
          { t: "correct", wrong: "She asked where did I live.", answer: "She asked where I lived.", why: "Reported questions use statement word order." },
          { t: "translate", q: "Translate into English: قال إنه سيتصل بي", a: ["he said he would call me"], why: "سيتصل = \"would call\" after backshift." },
          { t: "listen", text: "She told me she had already sent the email and asked me to check it.", q: "What did she ask?", o: ["To check the email", "To send the email", "To delete the email"], a: 0, why: "She \"asked me to check it\"." },
          { t: "write", prompt: "Report three things someone told you this week.", keywords: ["said", "told", "asked"], minWords: 20 }
        ]
      },

      /* ---------------- UNIT 5 ---------------- */
      {
        n: 5,
        title: "Phrasal Verbs in Daily Life",
        theme: "Common phrasal verbs, separable and inseparable, idioms of routine",
        lessons: [
          { t: "Phrasal Verbs About People", obj: "Use phrasal verbs for relationships and behaviour.", pts: ["I get on well with my colleagues.", "She fell out with her brother last year.", "We grew up in the same neighbourhood.", "He takes after his father.", "They broke up after two years."] },
          { t: "Phrasal Verbs About Plans", obj: "Talk about arranging and changing plans.", pts: ["Let's put off the meeting until Friday.", "I had to call off the trip.", "We are looking forward to the holiday.", "She turned down the offer.", "The event was called off because of the rain."] },
          { t: "Phrasal Verbs About Problems", obj: "Describe solving and facing difficulties.", pts: ["We need to sort out this problem.", "He gave up smoking last year.", "I can't figure out how it works.", "She put up with the noise for years.", "Let's deal with it tomorrow."] },
          { t: "Separable and Inseparable", obj: "Know where to put the object.", pts: ["Turn off the light. / Turn the light off. / Turn it off.", "Look after the children. (not: look the children after)", "I picked up the phone. / I picked it up.", "She ran into an old friend.", "We need to look into the matter."] },
          { t: "Phrasal Verbs in Context", obj: "Use phrasal verbs naturally in speech.", pts: ["Can you fill in this form, please?", "I'll get back to you tomorrow.", "Let's go over the plan once more.", "The meeting has been put back to Tuesday.", "Don't worry, we'll work it out."] }
        ],
        vocab: [
          { w: "get on with", ipa: "/ɡet ɒn wɪð/", pos: "phrasal verb", def: "To have a good relationship with someone.", ar: "يتفاهم مع", ex: "I get on well with my boss." },
          { w: "put off", ipa: "/pʊt ɒf/", pos: "phrasal verb", def: "To postpone; to delay something.", ar: "يؤجل", ex: "They put off the wedding." },
          { w: "give up", ipa: "/ɡɪv ʌp/", pos: "phrasal verb", def: "To stop doing something.", ar: "يتخلى عن / يتوقف", ex: "He gave up fast food." },
          { w: "figure out", ipa: "/ˈfɪɡə aʊt/", pos: "phrasal verb", def: "To understand or solve something.", ar: "يفهم / يحل", ex: "I can't figure out this app." },
          { w: "look forward to", ipa: "/lʊk ˈfɔːwəd tuː/", pos: "phrasal verb", def: "To feel excited about something in the future.", ar: "يتطلع إلى", ex: "I'm looking forward to seeing you." },
          { w: "sort out", ipa: "/sɔːt aʊt/", pos: "phrasal verb", def: "To solve or organise something.", ar: "يرتب / يحل", ex: "We sorted out the misunderstanding." },
          { w: "turn down", ipa: "/tɜːn daʊn/", pos: "phrasal verb", def: "To refuse an offer.", ar: "يرفض", ex: "She turned down the job." },
          { w: "come up with", ipa: "/kʌm ʌp wɪð/", pos: "phrasal verb", def: "To think of an idea or solution.", ar: "يبتكر / يقترح", ex: "He came up with a brilliant plan." },
          { w: "run into", ipa: "/rʌn ˈɪntuː/", pos: "phrasal verb", def: "To meet someone by chance.", ar: "يصادف", ex: "I ran into an old classmate." },
          { w: "get back to", ipa: "/ɡet bæk tuː/", pos: "phrasal verb", def: "To reply to someone later.", ar: "يعاود الاتصال بـ", ex: "I'll get back to you soon." }
        ],
        gram: {
          title: "Phrasal verbs: separable vs inseparable",
          explain: {
            en: "A phrasal verb is a verb plus a particle that creates a new meaning. With separable phrasal verbs, a pronoun object must go in the middle (turn it off, not turn off it). With inseparable phrasal verbs, the object always comes after the particle (look after the children).",
            ar: "الفعل المركب هو فعل مع أداة ينتج عنهما معنى جديد. في الأفعال القابلة للفصل يوضع ضمير المفعول في الوسط، وفي غير القابلة للفصل يأتي المفعول بعد الأداة دائما.",
            fr: "Un phrasal verb = verbe + particule. Avec les verbes séparables, le pronom objet se place au milieu."
          },
          formula: ['Separable: <span class="fx-k">turn off</span> the light → turn the light off → turn <span class="fx-v">it</span> off', 'Inseparable: <span class="fx-k">look after</span> the children (NOT look the children after)', 'Three-part: <span class="fx-k">look forward to</span> + <span class="fx-v">noun / -ing</span>', 'Always learn the particle together with the verb.'],
          examples: [
            { en: "Please turn off the computer. / Please turn it off.", ar: "أطفئ الحاسوب من فضلك." },
            { en: "She looks after her little brother.", ar: "تعتني بأخيها الصغير." },
            { en: "I'm looking forward to the weekend.", ar: "أتطلع إلى نهاية الأسبوع." },
            { en: "They put off the decision until Monday.", ar: "أجّلوا القرار إلى الاثنين." }
          ],
          mistakes: [
            { w: "Turn off it, please.", r: "Turn it off, please.", why: "With separable phrasal verbs, a pronoun goes between the verb and the particle." },
            { w: "She looks her brother after.", r: "She looks after her brother.", why: "\"Look after\" is inseparable." },
            { w: "I'm looking forward to see you.", r: "I'm looking forward to seeing you.", why: '"Look forward to" is followed by a noun or -ing form.' }
          ]
        },
        listen: {
          title: "Catching up after work",
          lines: [
            { who: "Tariq", text: "Hey, I ran into your sister at the market yesterday." },
            { who: "Nadia", text: "Really? How is she? We fell out last month and I haven't called her." },
            { who: "Tariq", text: "She seemed fine. You should sort it out — it's not worth it." },
            { who: "Nadia", text: "I know. I'll call her tonight and try to work it out." },
            { who: "Tariq", text: "Good. By the way, did you figure out the schedule for next week?" },
            { who: "Nadia", text: "Not yet, but I'll get back to you tomorrow morning." },
            { who: "Tariq", text: "Fine. And don't forget they put the training back to Thursday." },
            { who: "Nadia", text: "Thanks for the reminder. I'm looking forward to it, actually." }
          ],
          q: [
            { q: "Who did Tariq run into?", o: ["Nadia's sister", "Nadia's boss", "An old teacher"], a: 0, why: "\"I ran into your sister at the market yesterday.\"" },
            { q: "What problem does Nadia have?", o: ["She fell out with her sister", "She lost her job", "She missed a train"], a: 0, why: "\"We fell out last month.\"" },
            { q: "When was the training moved to?", o: ["Thursday", "Tuesday", "Monday"], a: 0, why: "\"they put the training back to Thursday.\"" }
          ]
        },
        read: {
          title: "How I stopped procrastinating",
          text: "For years I put off everything. I would sit down to work, then come up with a hundred reasons to do something else. I fell behind on projects, I let people down, and eventually I nearly gave up on my degree. Then a friend suggested something simple: write down the three most important tasks the night before, and start with the hardest one. It sounds too easy, but it worked. I stopped checking my phone first thing in the morning, and I turned off all notifications. Now I get things done before lunch, and I actually look forward to the quiet hours. I still have bad days, but I no longer run away from difficult work.",
          q: [
            { q: "What was the writer's problem?", o: ["He put off everything", "He worked too much", "He lost his notes"], a: 0, why: "\"For years I put off everything.\"" },
            { q: "What did his friend suggest?", o: ["Writing down three tasks the night before", "Working at night", "Hiring an assistant"], a: 0, why: "\"write down the three most important tasks the night before.\"" },
            { q: "What does he do now before lunch?", o: ["He gets things done", "He checks his phone", "He goes for a walk"], a: 0, why: "\"Now I get things done before lunch.\"" }
          ]
        },
        write: {
          prompt: "Write a paragraph (7 sentences) about a habit you changed or a problem you solved. Use at least five phrasal verbs.",
          tips: ["Choose phrasal verbs that fit naturally", "Show the situation before and after", "Include one separable phrasal verb with a pronoun"],
          sample: "Two years ago I decided to sort out my unhealthy routine. I used to put off going to bed, and I would stay up watching series until two in the morning. Then I came up with a simple plan: I set an alarm to stop screens at eleven. At first it was hard, and I nearly gave up after a week. But I kept it up, and after a month I was getting up early without complaining. I also took up swimming, which helped me switch off completely. Now I look forward to mornings instead of dreading them. If you want to change something, don't wait for the perfect moment — just start small and stick with it."
        },
        speak: ["Who do you get on well with and why?", "Have you ever given up a bad habit?", "Tell me about a plan you had to put off.", "What are you looking forward to?", "Describe a problem you sorted out recently."],
        ex: [
          { t: "mcq", q: "Please turn ___ the light before you leave.", o: ["off", "down", "up"], a: 0, why: "\"Turn off\" means to switch something off." },
          { t: "fill", q: "She looks ___ her little brother every afternoon.", o: ["after", "for", "up"], a: 0, why: "\"Look after\" means to take care of someone." },
          { t: "mcq", q: "They ___ the meeting until Friday.", o: ["put off", "put up", "put on"], a: 0, why: "\"Put off\" means to postpone." },
          { t: "fill", q: "I'm looking forward ___ hearing from you.", o: ["to", "for", "at"], a: 0, why: "\"Look forward to\" takes a noun or -ing form." },
          { t: "match", pairs: [["give up", "stop doing something"], ["turn down", "refuse an offer"], ["run into", "meet by chance"], ["come up with", "think of an idea"]] },
          { t: "order", words: ["up", "gave", "He", "smoking"], answer: "He gave up smoking" },
          { t: "correct", wrong: "Turn off it, please.", answer: "Turn it off, please.", why: "Pronouns go between the verb and particle in separable phrasal verbs." },
          { t: "translate", q: "Translate into English: أتطلع إلى رؤيتك", a: ["i am looking forward to seeing you", "i'm looking forward to seeing you"], why: "أتطلع إلى = \"looking forward to\" + -ing." },
          { t: "listen", text: "I ran into an old friend and we sorted out our differences.", q: "What did they do?", o: ["Sorted out their differences", "Cancelled a trip", "Started a business"], a: 0, why: "The speaker says \"we sorted out our differences\"." },
          { t: "write", prompt: "Write two sentences using phrasal verbs about your daily routine.", keywords: ["up", "on", "off", "out"], minWords: 16 }
        ]
      },

      /* ---------------- UNIT 6 ---------------- */
      {
        n: 6,
        title: "Speaking Naturally: Opinions & Discussion",
        theme: "Opinions, agreeing, disagreeing, hedging and discussion language",
        lessons: [
          { t: "Expressing Opinions", obj: "State your view clearly and confidently.", pts: ["In my opinion, this is the best solution.", "As far as I'm concerned, the price is too high.", "I strongly believe that education should be free.", "From my point of view, the plan is realistic.", "If you ask me, the film was disappointing."] },
          { t: "Agreeing and Disagreeing", obj: "Respond to other people's views politely.", pts: ["I completely agree with you.", "That's exactly how I feel.", "I see your point, but I have a different view.", "I'm afraid I can't agree with that.", "We'll have to agree to disagree."] },
          { t: "Hedging and Softening", obj: "Sound less direct when you disagree.", pts: ["It could be argued that the opposite is true.", "I might be wrong, but I think...", "There is some truth in that, although...", "To be fair, the situation is complicated.", "It depends on how you look at it."] },
          { t: "Interrupting and Taking Turns", obj: "Manage a group discussion.", pts: ["Sorry to interrupt, but I'd like to add something.", "Could I just finish my point?", "May I say something here?", "Let's hear what Sara thinks.", "Going back to what you said earlier..."] },
          { t: "Summarising a Discussion", obj: "Wrap up and conclude a conversation.", pts: ["To sum up, we agree on the main point.", "So, if I understand correctly, you're saying...", "Let's come back to that later.", "I think we've covered everything.", "We seem to have reached a decision."] }
        ],
        vocab: [
          { w: "argument", ipa: "/ˈɑːɡjumənt/", pos: "noun", def: "A reason given to support an opinion, or a disagreement.", ar: "حجة / جدال", ex: "That is a strong argument." },
          { w: "point of view", ipa: "/pɔɪnt əv vjuː/", pos: "noun", def: "A particular way of considering something.", ar: "وجهة نظر", ex: "From my point of view, it is fair." },
          { w: "convincing", ipa: "/kənˈvɪnsɪŋ/", pos: "adjective", def: "Able to make you believe something.", ar: "مقنع", ex: "Her explanation was convincing." },
          { w: "persuade", ipa: "/pəˈsweɪd/", pos: "verb", def: "To make someone agree to do or believe something.", ar: "يقنع", ex: "He persuaded me to try again." },
          { w: "relevance", ipa: "/ˈreləvəns/", pos: "noun", def: "Connection to the subject being discussed.", ar: "صلة بالموضوع", ex: "That has no relevance here." },
          { w: "assumption", ipa: "/əˈsʌmpʃn/", pos: "noun", def: "Something you accept as true without proof.", ar: "افتراض", ex: "That is a dangerous assumption." },
          { w: "controversial", ipa: "/ˌkɒntrəˈvɜːʃl/", pos: "adjective", def: "Causing strong disagreement.", ar: "مثير للجدل", ex: "It is a controversial topic." },
          { w: "neutral", ipa: "/ˈnjuːtrəl/", pos: "adjective", def: "Not supporting either side.", ar: "محايد", ex: "I prefer to stay neutral." },
          { w: "compromise", ipa: "/ˈkɒmprəmaɪz/", pos: "noun / verb", def: "An agreement where both sides give up something.", ar: "تسوية", ex: "We reached a compromise." },
          { w: "valid", ipa: "/ˈvælɪd/", pos: "adjective", def: "Based on good reasoning; acceptable.", ar: "صحيح / مقبول", ex: "That is a valid concern." }
        ],
        gram: {
          title: "Hedging and softening language",
          explain: {
            en: "Strong statements can sound aggressive. Skilled speakers use hedging: \"might\", \"could\", \"tend to\", \"it seems that\", \"to some extent\". These make your opinion sound thoughtful rather than absolute, which is essential in discussion and debate.",
            ar: "الجمل القوية قد تبدو عدوانية. المتحدث الماهر يستخدم صيغ التلطيف مثل might و could و it seems that لتجعل رأيه يبدو مدروسا لا مطلقا.",
            fr: "Pour adoucir une opinion, on utilise des formules comme « might », « could », « it seems that », « to some extent »."
          },
          formula: ['Absolute → <span class="fx-k">Hedged</span>: It is wrong → It <span class="fx-k">might</span> not be entirely right.', 'Verbs: <span class="fx-k">seem, appear, tend to, suggest</span> → This <span class="fx-v">seems</span> to be the case.', 'Adverbs: <span class="fx-k">arguably, apparently, generally, to some extent</span>', 'Framing: <span class="fx-n">There is some truth in that, although ...</span>'],
          examples: [
            { en: "I might be wrong, but I think the data is incomplete.", ar: "قد أكون مخطئا، لكنني أعتقد أن البيانات غير كاملة." },
            { en: "It could be argued that the policy has failed.", ar: "يمكن القول إن السياسة فشلت." },
            { en: "People tend to overestimate their own abilities.", ar: "يميل الناس إلى المبالغة في تقدير قدراتهم." },
            { en: "There is some truth in that, although it is not the whole story.", ar: "في ذلك بعض الصحة، وإن لم يكن القصة كاملة." }
          ],
          mistakes: [
            { w: "You are completely wrong.", r: "I'm not sure I see it that way.", why: "Direct contradiction damages a discussion; hedge instead." },
            { w: "Everyone knows that this is true.", r: "It is generally accepted that this is true.", why: "Avoid overgeneralisations; use hedging adverbs." },
            { w: "That is a stupid idea.", r: "I have some concerns about that idea.", why: "Criticise the idea, not the person." }
          ]
        },
        listen: {
          title: "A team discussion",
          lines: [
            { who: "Chair", text: "So, should we launch the product in September or wait until January?" },
            { who: "Leila", text: "In my opinion, we should wait. The testing isn't finished." },
            { who: "Omar", text: "I see your point, but waiting could cost us the Christmas market." },
            { who: "Leila", text: "That's true. It might be worth launching a limited version first." },
            { who: "Omar", text: "I'd go along with that, provided we're clear about the risks." },
            { who: "Chair", text: "Sorry to interrupt — could you both summarise your position in one sentence?" },
            { who: "Leila", text: "Small launch in September, full launch in January." },
            { who: "Omar", text: "Agreed. That sounds like a sensible compromise." }
          ],
          q: [
            { q: "What is the team discussing?", o: ["When to launch a product", "Who to hire", "How to reduce costs"], a: 0, why: "\"should we launch the product in September or wait until January?\"" },
            { q: "What does Leila suggest in the end?", o: ["A limited launch first", "Cancelling the product", "Waiting two years"], a: 0, why: "\"It might be worth launching a limited version first.\"" },
            { q: "What do they agree on?", o: ["A compromise", "Nothing", "To delay everything"], a: 0, why: "\"That sounds like a sensible compromise.\"" }
          ]
        },
        read: {
          title: "How to disagree well",
          text: "Disagreeing is a skill. Most people either avoid it completely or do it badly. Bad disagreement attacks the person: \"You don't know what you're talking about.\" Good disagreement attacks the argument: \"I'm not sure that follows from the evidence.\" There are three simple techniques. First, acknowledge something valid in the other view before you challenge it. Second, hedge your language — \"it seems to me\", \"I might be wrong\". Third, ask a question instead of making a statement, because a question invites a reply rather than a defence. People rarely change their minds when they feel attacked, but they often do when they feel heard.",
          q: [
            { q: "What is the difference between bad and good disagreement?", o: ["One attacks the person, the other the argument", "One is louder", "One is in writing"], a: 0, why: "\"Bad disagreement attacks the person ... Good disagreement attacks the argument.\"" },
            { q: "Why does the writer recommend asking questions?", o: ["They invite a reply instead of a defence", "They are shorter", "They are more polite in writing"], a: 0, why: "\"a question invites a reply rather than a defence.\"" },
            { q: "When do people change their minds?", o: ["When they feel heard", "When they are shouted at", "When they are alone"], a: 0, why: "\"they often do when they feel heard.\"" }
          ]
        },
        write: {
          prompt: "Write a short discussion (8–10 sentences) about this statement: 'Social media does more harm than good.' Give your opinion, hedge it, and respond to the opposite view.",
          tips: ["Use opinion phrases: In my opinion, As far as I'm concerned", "Hedge with might, tend to, to some extent", "Acknowledge the other side before disagreeing"],
          sample: "In my opinion, social media does more harm than good, although the picture is not simple. It seems to me that the benefits are real but limited, while the costs tend to be underestimated. On the positive side, it connects people who would otherwise lose touch, and it gives small businesses a voice. However, it could be argued that these advantages are outweighed by the effect on attention and mental health. I might be wrong, but I think the design of these platforms encourages comparison rather than conversation. There is some truth in the view that users are responsible for their own habits. Even so, I would say the incentives are stacked against them. To sum up, I am not against the technology itself — I am against the business model behind it."
        },
        speak: ["Do you think exams are a good way to measure ability?", "Give your opinion on remote work and defend it.", "Disagree politely with this statement: 'Money buys happiness'.", "Summarise a discussion you had recently.", "What is your view on learning languages as a child?"],
        ex: [
          { t: "mcq", q: "___ my opinion, the plan is too risky.", o: ["In", "On", "At"], a: 0, why: 'The fixed phrase is "In my opinion".' },
          { t: "fill", q: "I might ___ wrong, but I think we should wait.", o: ["be", "am", "being"], a: 0, why: "After \"might\" we use the base verb." },
          { t: "mcq", q: "I see your ___, but I have a different view.", o: ["point", "view", "part"], a: 0, why: 'The fixed expression is "I see your point".' },
          { t: "fill", q: "There is some truth ___ that argument.", o: ["in", "on", "at"], a: 0, why: 'We say "there is some truth in ...".' },
          { t: "match", pairs: [["I completely agree", "strong agreement"], ["I'm afraid I can't agree", "polite disagreement"], ["It could be argued that", "hedging"], ["To sum up", "concluding"]] },
          { t: "order", words: ["far", "As", "I'm", "concerned", "as"], answer: "As far as I'm concerned" },
          { t: "correct", wrong: "You are completely wrong about this.", answer: "I'm not sure I see it that way.", why: "Attack the argument, not the person, and hedge your disagreement." },
          { t: "translate", q: "Translate into English: من وجهة نظري، هذا صحيح", a: ["from my point of view this is correct", "in my opinion this is correct"], why: "من وجهة نظري = \"From my point of view\"." },
          { t: "listen", text: "I see your point, but I think the cost is too high at this stage.", q: "What is the speaker's position?", o: ["They partly agree but worry about cost", "They fully agree", "They refuse to discuss"], a: 0, why: "\"I see your point, but I think the cost is too high.\"" },
          { t: "write", prompt: "Write three sentences giving and hedging your opinion on one topic.", keywords: ["in my opinion", "might", "seems"], minWords: 22 }
        ]
      },

      /* ---------------- UNIT 7 ---------------- */
      {
        n: 7,
        title: "Writing Paragraphs & Emails",
        theme: "Topic sentences, linking words, formal and informal writing",
        lessons: [
          { t: "The Topic Sentence", obj: "Start a paragraph with a clear main idea.", pts: ["Every paragraph needs one clear main idea.", "The topic sentence comes first and states that idea.", "The following sentences give reasons or examples.", "A conclusion sentence can summarise or link forward.", "Avoid putting two main ideas in one paragraph."] },
          { t: "Linking Words", obj: "Connect ideas smoothly.", pts: ["Adding: moreover, in addition, furthermore.", "Contrast: however, although, nevertheless.", "Cause: because, since, as a result.", "Example: for instance, such as, namely.", "Conclusion: in short, to conclude, overall."] },
          { t: "Formal vs Informal Writing", obj: "Choose the right register for your reader.", pts: ["Formal: I would like to request further information.", "Informal: Can you send me more info?", "Formal: I am writing to enquire about...", "Informal: Just a quick note to ask...", "Avoid contractions and slang in formal writing."] },
          { t: "Writing Emails", obj: "Structure a professional email correctly.", pts: ["Subject: Request for information about the course.", "Dear Ms Ahmed, I hope this email finds you well.", "I am writing with regard to your advertisement.", "I would appreciate a reply at your earliest convenience.", "Kind regards, Karim."] },
          { t: "Editing and Improving", obj: "Check and improve your own writing.", pts: ["Read your text aloud to find awkward sentences.", "Cut unnecessary words.", "Check subject–verb agreement and articles.", "Replace repeated words with synonyms.", "Ask: is my main point clear in the first line?"] }
        ],
        vocab: [
          { w: "paragraph", ipa: "/ˈpærəɡrɑːf/", pos: "noun", def: "A group of sentences about one idea.", ar: "فقرة", ex: "Start a new paragraph here." },
          { w: "moreover", ipa: "/mɔːrˈəʊvə/", pos: "adverb", def: "In addition; also (formal).", ar: "علاوة على ذلك", ex: "Moreover, the cost is lower." },
          { w: "however", ipa: "/haʊˈevə/", pos: "adverb", def: "Used to introduce a contrasting idea.", ar: "لكن / ومع ذلك", ex: "However, the results were poor." },
          { w: "furthermore", ipa: "/ˌfɜːðəˈmɔː/", pos: "adverb", def: "In addition (formal).", ar: "إضافة إلى ذلك", ex: "Furthermore, the study was too small." },
          { w: "enquire", ipa: "/ɪnˈkwaɪə/", pos: "verb", def: "To ask for information (formal).", ar: "يستفسر", ex: "I am writing to enquire about the price." },
          { w: "regarding", ipa: "/rɪˈɡɑːdɪŋ/", pos: "preposition", def: "About; concerning (formal).", ar: "بخصوص", ex: "I am writing regarding your invoice." },
          { w: "concise", ipa: "/kənˈsaɪs/", pos: "adjective", def: "Short and clear, using few words.", ar: "موجز", ex: "Please keep your answer concise." },
          { w: "coherent", ipa: "/kəʊˈhɪərənt/", pos: "adjective", def: "Logical and well organised.", ar: "متماسك", ex: "Your essay needs a more coherent structure." },
          { w: "draft", ipa: "/drɑːft/", pos: "noun / verb", def: "A first version of a piece of writing.", ar: "مسودة", ex: "Write a first draft, then edit." },
          { w: "proofread", ipa: "/ˈpruːfriːd/", pos: "verb", def: "To check writing for mistakes.", ar: "يدقق", ex: "Always proofread before sending." }
        ],
        gram: {
          title: "Cohesion: linking words and reference",
          explain: {
            en: "Good writing is not just correct grammar — it flows. Linking words show the relationship between ideas (addition, contrast, cause, result). Reference words (this, these, such, the former, the latter) connect sentences without repetition. Together they create cohesion.",
            ar: "الكتابة الجيدة ليست قواعد صحيحة فقط بل ترابط. أدوات الربط تُظهر العلاقة بين الأفكار، وكلمات الإحالة تربط الجمل دون تكرار.",
            fr: "Bien écrire, c'est enchaîner les idées : connecteurs logiques et mots de reprise assurent la cohésion."
          },
          formula: ['Addition: <span class="fx-k">moreover / in addition / furthermore</span>', 'Contrast: <span class="fx-k">however / nevertheless / although</span>', 'Cause & result: <span class="fx-k">because / since / therefore / as a result</span>', 'Reference: <span class="fx-k">this / such / the former / the latter</span>'],
          examples: [
            { en: "The plan is cheap. However, it has serious weaknesses.", ar: "الخطة رخيصة. ومع ذلك، بها نقاط ضعف خطيرة." },
            { en: "The city is crowded; moreover, rents are rising fast.", ar: "المدينة مزدحمة، علاوة على ذلك ترتفع الإيجارات بسرعة." },
            { en: "Sales fell sharply. As a result, the company cut costs.", ar: "انخفضت المبيعات بحدة. ونتيجة لذلك خفضت الشركة التكاليف." },
            { en: "Two options exist: the former is cheaper, the latter is faster.", ar: "يوجد خياران: الأول أرخص والثاني أسرع." }
          ],
          mistakes: [
            { w: "However the price is high. Moreover it is good.", r: "However, the price is high. Moreover, it is good.", why: "Formal linking adverbs take a comma." },
            { w: "Although it is expensive, but it works well.", r: "Although it is expensive, it works well.", why: "Do not use \"although\" and \"but\" in the same sentence." },
            { w: "It was raining. Because we stayed home.", r: "It was raining, so we stayed home.", why: "\"Because\" introduces a reason, not a result; use \"so\" or \"therefore\"." }
          ]
        },
        listen: {
          title: "Feedback on an essay",
          lines: [
            { who: "Teacher", text: "I've read your essay, Sami. The ideas are good, but the structure needs work." },
            { who: "Sami", text: "What do you mean exactly?" },
            { who: "Teacher", text: "Your first paragraph has three different main ideas. A paragraph should have one." },
            { who: "Sami", text: "I see. And the linking words?" },
            { who: "Teacher", text: "You repeat \"and\" and \"but\" a lot. Try \"moreover\" and \"however\" instead." },
            { who: "Sami", text: "Should I rewrite the whole thing?" },
            { who: "Teacher", text: "Not the whole thing — just reorganise the first two paragraphs and proofread the last one." },
            { who: "Sami", text: "Understood. I'll send a second draft on Thursday." }
          ],
          q: [
            { q: "What is the main problem with Sami's essay?", o: ["The structure", "The vocabulary", "The topic"], a: 0, why: "\"the structure needs work.\"" },
            { q: "What does the teacher say about the first paragraph?", o: ["It has three main ideas", "It is too short", "It is well written"], a: 0, why: "\"Your first paragraph has three different main ideas.\"" },
            { q: "What should Sami do?", o: ["Reorganise two paragraphs and proofread the last one", "Rewrite everything", "Change the topic"], a: 0, why: "\"just reorganise the first two paragraphs and proofread the last one.\"" }
          ]
        },
        read: {
          title: "Why writing is harder than speaking",
          text: "Speaking and writing are very different skills. When we speak, we can repeat ourselves, use gestures and check that the listener understands. Writing has none of these advantages. The reader is not present, so the text must be clear on its own. This is why structure matters so much. A well-written paragraph usually begins with a topic sentence that states the main idea. The following sentences develop that idea with reasons and examples. Finally, a concluding sentence may summarise the point or link to the next paragraph. Moreover, good writers use linking words to show how ideas connect. Without them, even correct sentences can feel like a list rather than an argument.",
          q: [
            { q: "Why is writing harder than speaking?", o: ["The reader is not present to ask questions", "It takes more time", "It needs better vocabulary"], a: 0, why: "\"The reader is not present, so the text must be clear on its own.\"" },
            { q: "What usually begins a well-written paragraph?", o: ["A topic sentence", "An example", "A question"], a: 0, why: "\"A well-written paragraph usually begins with a topic sentence.\"" },
            { q: "What happens without linking words?", o: ["Text feels like a list rather than an argument", "Grammar becomes wrong", "The text becomes shorter"], a: 0, why: "\"even correct sentences can feel like a list rather than an argument.\"" }
          ]
        },
        write: {
          prompt: "Write a formal email (8–10 sentences) to a language school asking about a course. Include a subject line, a polite opening, three questions and a formal closing.",
          tips: ["Use \"I am writing to enquire about...\"", "Use \"I would appreciate...\" for requests", "Close with \"Kind regards\" and your name"],
          sample: "Subject: Enquiry about the Intensive English Course\n\nDear Sir or Madam,\n\nI am writing to enquire about the intensive English course advertised on your website. I am particularly interested in the B2 level programme starting in October. Could you please confirm the total cost of the course, including materials? I would also like to know whether the classes are held in the morning or in the evening. Furthermore, I would appreciate some information about the accommodation options available to students. Finally, is there an entrance test, and if so, when does it take place?\n\nI would be grateful for a reply at your earliest convenience.\n\nKind regards,\nKarim Belhaj"
        },
        speak: ["What is the topic sentence of your favourite paragraph you wrote?", "Give me three linking words for contrast.", "Describe the difference between formal and informal writing.", "Read your last email aloud and improve it.", "Why do you think writing is important?"],
        ex: [
          { t: "mcq", q: "The plan is cheap. ___, it has serious weaknesses.", o: ["However", "Moreover", "Therefore"], a: 0, why: "We need a contrast linker here." },
          { t: "fill", q: "Sales fell sharply. ___ a result, the company cut costs.", o: ["As", "For", "In"], a: 0, why: 'The fixed phrase is "as a result".' },
          { t: "mcq", q: "___ it is expensive, it works very well.", o: ["Although", "However", "Moreover"], a: 0, why: '"Although" introduces a concessive clause.' },
          { t: "fill", q: "I am writing ___ enquire about the course.", o: ["to", "for", "about"], a: 0, why: '"To enquire" expresses purpose.' },
          { t: "match", pairs: [["moreover", "addition"], ["however", "contrast"], ["as a result", "result"], ["for instance", "example"]] },
          { t: "order", words: ["regards", "Kind", "Karim"], answer: "Kind regards Karim" },
          { t: "correct", wrong: "Although it is expensive, but it works well.", answer: "Although it is expensive, it works well.", why: "Never use \"although\" and \"but\" together." },
          { t: "translate", q: "Translate into English: أكتب لأستفسر عن الدورة", a: ["i am writing to enquire about the course", "i am writing to ask about the course"], why: "أستفسر عن = \"enquire about\"." },
          { t: "listen", text: "Please keep your answer concise and proofread it before sending.", q: "What two things should you do?", o: ["Be concise and proofread", "Write more and send quickly", "Add examples only"], a: 0, why: "The speaker says \"concise\" and \"proofread\"." },
          { t: "write", prompt: "Write one formal paragraph (4–5 sentences) about the advantages of learning a language, using at least two linking words.", keywords: ["moreover", "however", "furthermore", "as a result"], minWords: 40 }
        ]
      },

      /* ---------------- UNIT 8 ---------------- */
      {
        n: 8,
        title: "Listening to Natural English",
        theme: "Connected speech, weak forms, intonation and note-taking",
        lessons: [
          { t: "Why Fast Speech Is Hard", obj: "Understand why you miss words in natural speech.", pts: ["Native speakers link words together: 'an apple' sounds like 'anapple'.", "Weak forms reduce 'and' to /ən/ and 'to' to /tə/.", "Contractions hide auxiliary verbs: 'I'd', 'they're', 'we've'.", "Content words are stressed; grammar words are not.", "You do not need to hear every word to understand."] },
          { t: "Stress and Rhythm", obj: "Hear the beat of English sentences.", pts: ["English is stress-timed: stressed syllables come at regular intervals.", "Content words carry the stress: nouns, verbs, adjectives.", "Function words are compressed: prepositions, articles, pronouns.", "Listen for the stressed words and infer the rest.", "I WANT to GO to the SHOP."] },
          { t: "Intonation and Meaning", obj: "Use melody to understand the speaker's intent.", pts: ["Falling intonation = finished statement.", "Rising intonation = question or uncertainty.", "A rising tone in the middle signals 'more to come'.", "Stress changes meaning: 'I didn't say that' has five possible meanings.", "Sarcasm and irony are carried by tone, not words."] },
          { t: "Note-Taking While Listening", obj: "Capture key information efficiently.", pts: ["Write keywords, not full sentences.", "Use symbols and abbreviations: →, ↑, w/, e.g.", "Leave space between ideas to add details later.", "Listen for signpost words: first, however, in conclusion.", "Never stop listening to finish writing."] },
          { t: "Listening Strategies", obj: "Deal with unknown words calmly.", pts: ["Predict the topic from the title or picture.", "Listen for the general meaning first, details second.", "Use context to guess unknown vocabulary.", "Do not panic when you miss a word — keep listening.", "Practise with both transcripts and without."] }
        ],
        vocab: [
          { w: "intonation", ipa: "/ˌɪntəˈneɪʃn/", pos: "noun", def: "The rise and fall of the voice in speech.", ar: "نغمة الصوت", ex: "Her intonation sounds friendly." },
          { w: "stress", ipa: "/stres/", pos: "noun / verb", def: "The emphasis given to a syllable or word.", ar: "نبر / تشديد", ex: "Stress the first syllable." },
          { w: "accent", ipa: "/ˈæksənt/", pos: "noun", def: "The way people from a place pronounce words.", ar: "لكنة", ex: "He speaks with a Scottish accent." },
          { w: "fluency", ipa: "/ˈfluːənsi/", pos: "noun", def: "The ability to speak easily and smoothly.", ar: "طلاقة", ex: "Fluency comes with practice." },
          { w: "infer", ipa: "/ɪnˈfɜː/", pos: "verb", def: "To understand something from indirect clues.", ar: "يستنتج", ex: "You can infer the meaning from context." },
          { w: "context", ipa: "/ˈkɒntekst/", pos: "noun", def: "The situation around a word that helps explain it.", ar: "سياق", ex: "Guess the word from context." },
          { w: "gist", ipa: "/dʒɪst/", pos: "noun", def: "The general meaning of something.", ar: "المعنى العام", ex: "First, get the gist." },
          { w: "abbreviation", ipa: "/əˌbriːviˈeɪʃn/", pos: "noun", def: "A short form of a word or phrase.", ar: "اختصار", ex: "\"e.g.\" is an abbreviation." },
          { w: "signpost", ipa: "/ˈsaɪnpəʊst/", pos: "noun", def: "A word or phrase that shows where a talk is going.", ar: "كلمة إرشادية", ex: "\"However\" is a signpost word." },
          { w: "distraction", ipa: "/dɪˈstrækʃn/", pos: "noun", def: "Something that takes your attention away.", ar: "إلهاء", ex: "Turn off distractions while listening." }
        ],
        gram: {
          title: "Connected speech: linking, elision and weak forms",
          explain: {
            en: "Natural English does not sound like a sequence of separate words. Consonants link to vowels (an_apple), sounds disappear in clusters (next day → nex'day), and unstressed grammar words reduce to weak forms (/tə/, /ən/, /əv/). Training your ear for these patterns is the single fastest way to improve listening.",
            ar: "الإنجليزية الطبيعية لا تُسمع ككلمات منفصلة. الحروف الساكنة تتصل بالحروف المتحركة، وتختفي بعض الأصوات، وتُختصر الكلمات الوظيفية غير المشددة. تدريب الأذن على هذه الأنماط هو أسرع طريق لتحسين الاستماع.",
            fr: "L'anglais naturel enchaîne les mots : liaison consonne-voyelle, élision, formes faibles. C'est la clé de la compréhension orale."
          },
          formula: ['Linking: <span class="fx-k">an apple</span> → /əˈnæpl/ · <span class="fx-k">turn it off</span> → /tɜːnɪˈtɒf/', 'Weak forms: <span class="fx-k">and</span> → /ən/ · <span class="fx-k">to</span> → /tə/ · <span class="fx-k">of</span> → /əv/', 'Elision: <span class="fx-k">next day</span> → /neks deɪ/ · <span class="fx-k">friends</span> → /frenz/', 'Contractions: <span class="fx-k">I\'d, they\'re, we\'ve, won\'t</span>'],
          examples: [
            { en: "What do you want to do? → /ˈwɒdʒə ˈwɒnə ˈduː/", ar: "ماذا تريد أن تفعل؟" },
            { en: "I'd like a cup of tea. → /aɪd ˈlaɪk ə ˈkʌp ə ˈtiː/", ar: "أريد كوب شاي." },
            { en: "Did you eat yet? → /ˈdɪdʒə ˈiːt jet/", ar: "هل أكلت بعد؟" },
            { en: "Fish and chips → /ˈfɪʃ ən ˈtʃɪps/", ar: "سمك وبطاطس مقلية." }
          ],
          mistakes: [
            { w: "Listening for every single word.", r: "Listening for stressed content words.", why: "You will never catch every word; focus on meaning-bearing words." },
            { w: "Translating word by word as you listen.", r: "Following the overall meaning.", why: "Translation slows you down and you lose the thread." },
            { w: "Stopping when you miss a word.", r: "Keeping listening and using context.", why: "One missed word rarely destroys the meaning." }
          ]
        },
        listen: {
          title: "A radio interview about learning languages",
          lines: [
            { who: "Host", text: "So what's the biggest mistake people make when they learn a language?" },
            { who: "Guest", text: "Honestly? They try to understand every single word." },
            { who: "Host", text: "And what should they do instead?" },
            { who: "Guest", text: "Focus on the stressed words. In English, the important information is stressed." },
            { who: "Host", text: "Give us an example." },
            { who: "Guest", text: "If I say 'I didn't say that', the meaning changes depending on the stress." },
            { who: "Host", text: "That's fascinating. So listening is really about patterns, not words." },
            { who: "Guest", text: "Exactly. And the more you listen, the more those patterns become automatic." }
          ],
          q: [
            { q: "What is the biggest mistake according to the guest?", o: ["Trying to understand every word", "Listening too slowly", "Reading transcripts"], a: 0, why: "\"They try to understand every single word.\"" },
            { q: "What should learners focus on?", o: ["The stressed words", "Grammar rules", "Spelling"], a: 0, why: "\"Focus on the stressed words.\"" },
            { q: "What happens with more listening practice?", o: ["Patterns become automatic", "Accents disappear", "You learn faster by reading"], a: 0, why: "\"the more you listen, the more those patterns become automatic.\"" }
          ]
        },
        read: {
          title: "The myth of the magic accent",
          text: "Many learners believe that the goal of listening practice is to understand a perfect, neutral accent. In reality, English has dozens of major accents and hundreds of regional ones. A Scottish taxi driver, a Nigerian professor and an Australian teenager can all speak English, and they will sound completely different. Trying to prepare for one accent is therefore a waste of time. What actually helps is exposure to variety. Listen to podcasts from different countries, watch films with subtitles, and accept that you will not understand everything on the first listen. Interestingly, research suggests that learners who hear many accents develop stronger overall comprehension than those who practise with only one. Variety is not a distraction; it is the training itself.",
          q: [
            { q: "What do many learners wrongly believe?", o: ["That they should understand one neutral accent", "That listening is easy", "That accents do not matter at all"], a: 0, why: "\"Many learners believe that the goal ... is to understand a perfect, neutral accent.\"" },
            { q: "What does the writer recommend?", o: ["Exposure to variety", "Only British English", "Reading instead of listening"], a: 0, why: "\"What actually helps is exposure to variety.\"" },
            { q: "What does research suggest?", o: ["Learners who hear many accents comprehend better", "Accents should be avoided", "Subtitles slow learning"], a: 0, why: "\"learners who hear many accents develop stronger overall comprehension.\"" }
          ]
        },
        write: {
          prompt: "Write a paragraph (6–7 sentences) explaining your experience of listening to English and what strategies you will use from now on.",
          tips: ["Describe a specific difficulty you have had", "Mention at least two strategies from this unit", "End with a concrete plan"],
          sample: "Listening has always been the hardest skill for me. When I watch a series without subtitles, I understand the general idea, but I lose many small details. I have realised that I was trying to catch every word, which made me panic and miss the next sentence. From now on I will focus on stressed words and accept that some words will pass by. I am also going to listen to the same short clip three times: first for the gist, then with the transcript, and finally without it. I will start with podcasts from different countries, because variety seems to train the ear better than a single accent. It will take time, but I am no longer waiting for a magic accent to appear."
        },
        speak: ["Describe a time you misunderstood something in English.", "What is the hardest accent for you to understand?", "Repeat this sentence with correct stress: 'I didn't say that.'", "What do you listen to in English?", "How do you handle unknown words while listening?"],
        ex: [
          { t: "mcq", q: "In natural speech, 'and' is usually reduced to ___.", o: ["/ən/", "/ænd/", "/aɪ/"], a: 0, why: "Unstressed function words take weak forms." },
          { t: "fill", q: "In English, ___ words carry the main information.", o: ["stressed", "grammar", "short"], a: 0, why: "Content words are stressed; function words are reduced." },
          { t: "mcq", q: "A rising intonation at the end of a sentence often signals ___.", o: ["a question", "a finished statement", "anger"], a: 0, why: "Rising intonation typically signals a question or uncertainty." },
          { t: "fill", q: "'What do you want to do?' in fast speech sounds like ___.", o: ["/ˈwɒdʒə ˈwɒnə ˈduː/", "/wɒt duː juː wɒnt/", "/wɒt ə duː/"], a: 0, why: "Linking and weak forms compress the phrase." },
          { t: "match", pairs: [["gist", "general meaning"], ["accent", "way of pronouncing"], ["context", "surrounding situation"], ["signpost", "word showing direction"]] },
          { t: "order", words: ["the", "Get", "gist", "first"], answer: "Get the gist first" },
          { t: "correct", wrong: "You must understand every word to understand the text.", answer: "You only need the stressed words to get the meaning.", why: "You do not need every word; content words carry meaning." },
          { t: "translate", q: "Translate into English: أستمع للفكرة العامة أولا", a: ["i listen for the gist first", "i listen to the general idea first"], why: "الفكرة العامة = \"the gist\"." },
          { t: "listen", text: "I didn't say that — I said I would think about it.", q: "What did the speaker actually say?", o: ["They would think about it", "They refused completely", "They said no"], a: 0, why: "\"I said I would think about it.\"" },
          { t: "write", prompt: "Write three sentences describing your listening strategy in English.", keywords: ["listen", "gist", "stress", "transcript"], minWords: 22 }
        ]
      },

      /* ---------------- UNIT 9 ---------------- */
      {
        n: 9,
        title: "Work, Careers & Professional Life",
        theme: "CVs, interviews, negotiations and workplace communication",
        lessons: [
          { t: "Talking About Your Career", obj: "Describe your professional path clearly.", pts: ["I started my career in retail, then moved into marketing.", "I have been responsible for a team of eight.", "My main strengths are analysis and communication.", "I am currently looking for a more challenging role.", "I have a background in finance."] },
          { t: "Job Interviews in Depth", obj: "Answer competency-based questions.", pts: ["Tell me about a time you solved a difficult problem.", "What would you do if a project fell behind schedule?", "Where do you see yourself in five years?", "Why are you leaving your current position?", "What are your salary expectations?"] },
          { t: "Negotiating", obj: "Reach an agreement at work.", pts: ["Would you be able to offer a higher salary?", "I am willing to be flexible on the start date.", "Let's find a solution that works for both sides.", "If we agree on that, I can commit today.", "That is a fair compromise."] },
          { t: "Workplace Communication", obj: "Handle common professional situations.", pts: ["Could you give me an update on the project?", "I'd like to flag a potential issue.", "Let me follow up with the client.", "I will keep you in the loop.", "Just to confirm, the deadline is Friday."] },
          { t: "Performance and Feedback", obj: "Give and receive feedback professionally.", pts: ["You have made excellent progress this quarter.", "One area for development is time management.", "I appreciate the feedback — I will work on it.", "Could you be more specific about what needs improving?", "Let's set some objectives for next quarter."] }
        ],
        vocab: [
          { w: "competency", ipa: "/ˈkɒmpɪtənsi/", pos: "noun", def: "A skill or ability needed for a job.", ar: "كفاءة", ex: "Leadership is a core competency here." },
          { w: "objective", ipa: "/əbˈdʒektɪv/", pos: "noun", def: "A specific goal you aim to achieve.", ar: "هدف", ex: "We set three objectives this quarter." },
          { w: "negotiate", ipa: "/nɪˈɡəʊʃieɪt/", pos: "verb", def: "To discuss in order to reach an agreement.", ar: "يتفاوض", ex: "We negotiated a better price." },
          { w: "promotion", ipa: "/prəˈməʊʃn/", pos: "noun", def: "A move to a more important job.", ar: "ترقية", ex: "She earned a promotion." },
          { w: "resign", ipa: "/rɪˈzaɪn/", pos: "verb", def: "To officially leave your job.", ar: "يستقيل", ex: "He resigned after two years." },
          { w: "supervise", ipa: "/ˈsuːpəvaɪz/", pos: "verb", def: "To watch over work and make sure it is done.", ar: "يشرف على", ex: "She supervises five employees." },
          { w: "efficient", ipa: "/ɪˈfɪʃnt/", pos: "adjective", def: "Working well without wasting time or money.", ar: "فعّال", ex: "The new system is more efficient." },
          { w: "initiative", ipa: "/ɪˈnɪʃətɪv/", pos: "noun", def: "The ability to act without being told.", ar: "مبادرة", ex: "He showed great initiative." },
          { w: "workload", ipa: "/ˈwɜːkləʊd/", pos: "noun", def: "The amount of work someone must do.", ar: "عبء العمل", ex: "My workload has increased." },
          { w: "redundant", ipa: "/rɪˈdʌndənt/", pos: "adjective", def: "No longer needed for a job.", ar: "فائض عن الحاجة", ex: "Twenty staff were made redundant." }
        ],
        gram: {
          title: "Present perfect continuous and past habits (used to)",
          explain: {
            en: "Use the present perfect continuous to emphasise the duration of an activity that is still relevant: \"I have been managing the team since March.\" Use \"used to + base verb\" for habits and states that have changed.",
            ar: "نستخدم المضارع التام المستمر لإبراز مدة نشاط ما زال مستمرا، و used to للعادات والحالات التي تغيرت.",
            fr: "Le present perfect continuous insiste sur la durée ; « used to » exprime une habitude passée révolue."
          },
          formula: ['<span class="fx-k">have / has been</span> + <span class="fx-v">verb-ing</span> → I have been <span class="fx-v">working</span> here since March.', '<span class="fx-k">used to</span> + base verb → I <span class="fx-k">used to</span> <span class="fx-v">work</span> in retail.', 'Negative: I <span class="fx-k">didn\'t use to</span> have a car.', 'Question: <span class="fx-k">Did</span> you <span class="fx-k">use to</span> live abroad?'],
          examples: [
            { en: "I have been managing this team since March.", ar: "أدير هذا الفريق منذ مارس." },
            { en: "She has been negotiating the contract for two weeks.", ar: "تتفاوض على العقد منذ أسبوعين." },
            { en: "I used to work in a call centre.", ar: "كنت أعمل في مركز اتصال." },
            { en: "We didn't use to have these problems.", ar: "لم تكن لدينا هذه المشاكل." }
          ],
          mistakes: [
            { w: "I am working here since March.", r: "I have been working here since March.", why: "Duration up to now requires the present perfect continuous." },
            { w: "I use to work in retail.", r: "I used to work in retail.", why: "The past habit form is \"used to\", with -d." },
            { w: "Did you used to live there?", r: "Did you use to live there?", why: "After \"did\" the form is \"use to\"." }
          ]
        },
        listen: {
          title: "A salary negotiation",
          lines: [
            { who: "Manager", text: "We'd like to offer you the position. The starting salary is 3,200 a month." },
            { who: "Candidate", text: "Thank you. I'm very interested. However, based on my experience, I was hoping for something closer to 3,800." },
            { who: "Manager", text: "That is above our range for this level, I'm afraid." },
            { who: "Candidate", text: "I understand. Would you be able to offer 3,600 plus a review after six months?" },
            { who: "Manager", text: "Let me see what I can do. Would you be flexible on the start date?" },
            { who: "Candidate", text: "Yes, I can start two weeks later if that helps." },
            { who: "Manager", text: "In that case, I think we can agree on 3,600." },
            { who: "Candidate", text: "That works for me. Thank you very much." }
          ],
          q: [
            { q: "What salary was offered first?", o: ["3,200", "3,600", "3,800"], a: 0, why: "\"The starting salary is 3,200 a month.\"" },
            { q: "What did the candidate propose?", o: ["3,600 plus a review after six months", "3,800 immediately", "The same salary"], a: 0, why: "\"Would you be able to offer 3,600 plus a review after six months?\"" },
            { q: "What did the candidate concede?", o: ["The start date", "The salary", "The job title"], a: 0, why: "\"I can start two weeks later if that helps.\"" }
          ]
        },
        read: {
          title: "The quiet promotion",
          text: "When I joined the company six years ago, I was the most junior person in the department. I had been working in a different industry, so I had a lot to learn. For the first two years I simply tried to be useful. I used to arrive early and stay late, not to impress anyone, but because I needed the time. Gradually I started noticing problems nobody was solving: reports that took three days, meetings without agendas, clients who were never called back. Instead of complaining, I fixed small things and told my manager what I had done. By the fourth year I was supervising a small team. Last month I was promoted to head of department. Nobody was surprised except me.",
          q: [
            { q: "What was the writer's position six years ago?", o: ["The most junior person in the department", "Head of department", "A manager"], a: 0, why: "\"I was the most junior person in the department.\"" },
            { q: "Why did the writer arrive early and stay late?", o: ["Because he needed the time to learn", "To impress the boss", "Because he was paid overtime"], a: 0, why: "\"not to impress anyone, but because I needed the time.\"" },
            { q: "How did the writer get promoted?", o: ["By fixing small problems and reporting them", "By asking for it", "By changing companies"], a: 0, why: "\"Instead of complaining, I fixed small things and told my manager what I had done.\"" }
          ]
        },
        write: {
          prompt: "Write a short professional profile (7 sentences) for your CV: your experience, key skills and what you are looking for.",
          tips: ["Use the present perfect for experience", "Use \"used to\" for an earlier role if relevant", "Keep it positive and specific"],
          sample: "I am a marketing professional with six years of experience in digital campaigns and brand strategy. I have managed budgets of up to 200,000 euros and I have led a team of five people since 2022. My main strengths are data analysis, content strategy and clear communication with clients. I used to work in retail, which gave me a strong understanding of customer behaviour. I am comfortable working in English and I have collaborated with partners in four countries. I am currently looking for a role where I can combine strategy with hands-on campaign work. I am particularly interested in companies with a strong sustainability focus."
        },
        speak: ["Tell me about your career so far.", "What would you do if a project fell behind schedule?", "Negotiate a higher salary with me.", "What are your main strengths at work?", "Describe a problem you solved at work."],
        ex: [
          { t: "mcq", q: "I ___ managing this team since March.", o: ["am", "have been", "was"], a: 1, why: "Duration continuing to now takes the present perfect continuous." },
          { t: "fill", q: "I ___ work in a call centre, but I changed jobs.", o: ["use to", "used to", "am used to"], a: 1, why: "\"Used to\" describes a past habit." },
          { t: "mcq", q: "Did you ___ live abroad?", o: ["used to", "use to", "using to"], a: 1, why: "After \"did\" we write \"use to\"." },
          { t: "fill", q: "I am willing to be ___ on the start date.", o: ["flexible", "efficient", "redundant"], a: 0, why: "\"Flexible\" means willing to change." },
          { t: "match", pairs: [["objective", "a goal"], ["negotiate", "discuss to reach agreement"], ["resign", "officially leave a job"], ["initiative", "acting without being told"]] },
          { t: "order", words: ["for", "responsible", "I", "am", "the", "budget"], answer: "I am responsible for the budget" },
          { t: "correct", wrong: "I am working here since 2021.", answer: "I have been working here since 2021.", why: "\"Since\" with an ongoing action needs the present perfect continuous." },
          { t: "translate", q: "Translate into English: أبحث عن وظيفة أكثر تحديا", a: ["i am looking for a more challenging job", "i am looking for a more challenging role"], why: "أكثر تحديا = \"more challenging\"." },
          { t: "listen", text: "I have been responsible for three client accounts since last year.", q: "What is the speaker responsible for?", o: ["Three client accounts", "The whole department", "Two projects"], a: 0, why: "The speaker says \"three client accounts\"." },
          { t: "write", prompt: "Write three sentences describing your professional experience using 'have been' and 'used to'.", keywords: ["have been", "used to"], minWords: 22 }
        ]
      },

      /* ---------------- UNIT 10 ---------------- */
      {
        n: 10,
        title: "Culture, Media & Society",
        theme: "Discussing culture, news, technology and social issues",
        lessons: [
          { t: "Talking About Culture", obj: "Discuss traditions, customs and differences.", pts: ["In my culture, it is polite to bring a gift.", "Customs vary a lot from region to region.", "We celebrate the end of Ramadan with family.", "Some gestures mean different things in different countries.", "Traditions change slowly over time."] },
          { t: "Discussing the News", obj: "Talk about current events with balance.", pts: ["Did you see the news about the election?", "The report claims that unemployment has fallen.", "According to the article, the situation is improving.", "It is difficult to know which sources to trust.", "The story was covered by every major outlet."] },
          { t: "Technology and Society", obj: "Discuss how technology changes life.", pts: ["Smartphones have changed the way we communicate.", "Artificial intelligence is transforming many industries.", "Social media can spread false information quickly.", "On the one hand it connects us; on the other, it isolates us.", "We need clear rules about data privacy."] },
          { t: "Social Issues", obj: "Express views on complex social questions.", pts: ["Education should be accessible to everyone.", "Poverty remains a serious problem in many regions.", "The gap between rich and poor is widening.", "Governments should invest more in public health.", "Change usually starts at a local level."] },
          { t: "Debating Cultural Differences", obj: "Compare cultures without stereotyping.", pts: ["In some countries people are more direct than in others.", "It would be a mistake to generalise about a whole nation.", "What is considered rude here may be normal elsewhere.", "Understanding the reason behind a custom helps a lot.", "Respect matters more than perfect pronunciation."] }
        ],
        vocab: [
          { w: "custom", ipa: "/ˈkʌstəm/", pos: "noun", def: "A traditional way of behaving in a society.", ar: "عُرف", ex: "It is a local custom." },
          { w: "tradition", ipa: "/trəˈdɪʃn/", pos: "noun", def: "A belief or practice passed down over time.", ar: "تقليد", ex: "We keep this tradition alive." },
          { w: "stereotype", ipa: "/ˈsteriətaɪp/", pos: "noun", def: "A fixed, oversimplified idea about a group.", ar: "صورة نمطية", ex: "Avoid stereotypes in your writing." },
          { w: "inequality", ipa: "/ˌɪnɪˈkwɒləti/", pos: "noun", def: "An unfair difference between groups.", ar: "عدم المساواة", ex: "Inequality has grown in recent years." },
          { w: "media", ipa: "/ˈmiːdiə/", pos: "noun", def: "Television, newspapers and online news.", ar: "وسائل الإعلام", ex: "The media covered the story widely." },
          { w: "biased", ipa: "/ˈbaɪəst/", pos: "adjective", def: "Unfairly supporting one side.", ar: "متحيز", ex: "The report was clearly biased." },
          { w: "sustainable", ipa: "/səˈsteɪnəbl/", pos: "adjective", def: "Able to continue without damaging the environment.", ar: "مستدام", ex: "We need sustainable solutions." },
          { w: "awareness", ipa: "/əˈweənəs/", pos: "noun", def: "Knowledge of a situation or issue.", ar: "وعي", ex: "They raised awareness of the problem." },
          { w: "debate", ipa: "/dɪˈbeɪt/", pos: "noun / verb", def: "A formal discussion of opposing views.", ar: "مناظرة / نقاش", ex: "The debate lasted two hours." },
          { w: "diverse", ipa: "/daɪˈvɜːs/", pos: "adjective", def: "Including many different types of people or things.", ar: "متنوع", ex: "It is a very diverse city." }
        ],
        gram: {
          title: "Balanced argument: on the one hand ... on the other hand",
          explain: {
            en: "When discussing complex issues, avoid absolute statements. Use balanced structures: \"on the one hand ... on the other hand\", \"while\", \"whereas\", \"although\", \"it could be argued that\". These show you have considered both sides, which makes your argument stronger.",
            ar: "عند مناقشة القضايا المعقدة تجنب الأحكام المطلقة واستخدم تراكيب متوازنة مثل on the one hand / on the other hand و while و whereas.",
            fr: "Pour un argument équilibré, utilisez « on the one hand... on the other hand », « while », « whereas »."
          },
          formula: ['<span class="fx-k">On the one hand</span> ..., <span class="fx-k">on the other hand</span> ...', '<span class="fx-k">While / Whereas</span> + clause, + clause', '<span class="fx-k">Although</span> + clause, + main clause', '<span class="fx-k">It could be argued that</span> ... · <span class="fx-k">To a certain extent</span> ...'],
          examples: [
            { en: "On the one hand, technology saves time; on the other hand, it can distract us.", ar: "من ناحية توفر التقنية الوقت، ومن ناحية أخرى قد تشتت انتباهنا." },
            { en: "While the policy helped some people, it harmed others.", ar: "بينما ساعدت السياسة بعض الناس، أضرت بآخرين." },
            { en: "Whereas the north is industrial, the south is agricultural.", ar: "في حين أن الشمال صناعي فإن الجنوب زراعي." },
            { en: "It could be argued that the benefits outweigh the risks.", ar: "يمكن القول إن الفوائد تفوق المخاطر." }
          ],
          mistakes: [
            { w: "While the policy helped, but it harmed others.", r: "While the policy helped some, it harmed others.", why: "Do not use \"while\" and \"but\" together." },
            { w: "On the one hand... on the one hand...", r: "On the one hand... on the other hand...", why: "The second phrase must be \"on the other hand\"." },
            { w: "Although the economy grew, however unemployment rose.", r: "Although the economy grew, unemployment rose.", why: "\"Although\" already contains the contrast; \"however\" is redundant." }
          ]
        },
        listen: {
          title: "A panel discussion on social media",
          lines: [
            { who: "Moderator", text: "Let's turn to social media. Is it a force for good?" },
            { who: "Panelist A", text: "On the one hand, it has given a voice to people who had none. That is a real achievement." },
            { who: "Panelist B", text: "I'd agree with that, but on the other hand, it has also made misinformation profitable." },
            { who: "Panelist A", text: "That's fair. Although I would say the problem is the business model, not the technology." },
            { who: "Moderator", text: "So you're both saying regulation matters?" },
            { who: "Panelist B", text: "To a certain extent. But regulation is slow and technology moves fast." },
            { who: "Panelist A", text: "Which is exactly why education is more important than rules." },
            { who: "Moderator", text: "On that note, let's hear from the audience." }
          ],
          q: [
            { q: "What does Panelist A say is the achievement of social media?", o: ["It gave a voice to people who had none", "It increased profits", "It replaced newspapers"], a: 0, why: "\"it has given a voice to people who had none.\"" },
            { q: "What is Panelist B's concern?", o: ["Misinformation has become profitable", "Social media is too slow", "People use it too little"], a: 0, why: "\"it has also made misinformation profitable.\"" },
            { q: "What does Panelist A think is more important?", o: ["Education", "Regulation", "Technology"], a: 0, why: "\"education is more important than rules.\"" }
          ]
        },
        read: {
          title: "The two sides of globalisation",
          text: "Globalisation is one of the most debated topics of our time. On the one hand, it has lifted hundreds of millions of people out of poverty and given consumers access to cheaper goods. While goods and ideas now cross borders faster than ever, cultural exchange has also enriched food, music and cinema around the world. On the other hand, globalisation has increased inequality within many countries. Whereas large companies benefit from open markets, small local producers often cannot compete. Moreover, when production moves abroad, whole communities can lose their main source of employment. It could be argued that the problem is not globalisation itself, but the absence of policies that share its benefits more fairly. In that sense, the debate is less about whether to globalise and more about how.",
          q: [
            { q: "What benefit of globalisation does the writer mention?", o: ["It lifted millions out of poverty", "It reduced all inequality", "It stopped migration"], a: 0, why: "\"it has lifted hundreds of millions of people out of poverty.\"" },
            { q: "What negative effect is mentioned?", o: ["Small local producers cannot compete", "Prices rose everywhere", "Travel became harder"], a: 0, why: "\"small local producers often cannot compete.\"" },
            { q: "What is the writer's conclusion?", o: ["The debate is about how to globalise, not whether", "Globalisation should stop", "Globalisation has no problems"], a: 0, why: "\"the debate is less about whether to globalise and more about how.\"" }
          ]
        },
        write: {
          prompt: "Write a balanced argument (9–10 sentences) on this question: 'Should university education be free for everyone?' Present both sides and reach a conclusion.",
          tips: ["Use \"on the one hand / on the other hand\"", "Use \"while\", \"whereas\", \"although\"", "End with a clear, reasoned conclusion"],
          sample: "The question of free university education divides opinion, and both sides have strong arguments. On the one hand, education is one of the most effective ways to reduce inequality. When tuition is free, talented students from poor families can study, and the whole society benefits from their skills. While this requires higher taxes, the long-term economic return is usually positive. On the other hand, free education for everyone can be expensive and sometimes inefficient. Whereas wealthier families would benefit most, public money might be better spent on primary and vocational training. It could be argued that a fair system is one based on need rather than on a blanket rule. In my view, tuition should be free for students from low-income households and subsidised for others. Although this is more complicated to administer, it targets the money where it matters most. To sum up, the goal should be equal opportunity, not free education for its own sake."
        },
        speak: ["What is a custom from your culture that visitors find surprising?", "Do you think social media does more harm than good?", "Should education be free? Give both sides.", "How has technology changed your daily life?", "What is the biggest problem facing your country today?"],
        ex: [
          { t: "mcq", q: "___ the one hand, it saves time; on the other, it distracts us.", o: ["On", "In", "At"], a: 0, why: 'The fixed phrase is "on the one hand".' },
          { t: "fill", q: "___ the north is industrial, the south is agricultural.", o: ["Whereas", "However", "Moreover"], a: 0, why: '"Whereas" contrasts two clauses.' },
          { t: "mcq", q: "___ the policy helped some people, it harmed others.", o: ["Although", "However", "Because"], a: 0, why: '"Although" introduces a concessive clause.' },
          { t: "fill", q: "The report was clearly ___ — it only showed one side.", o: ["biased", "diverse", "sustainable"], a: 0, why: "\"Biased\" means unfairly supporting one side." },
          { t: "match", pairs: [["custom", "traditional behaviour"], ["stereotype", "oversimplified fixed idea"], ["awareness", "knowledge of an issue"], ["diverse", "including many different types"]] },
          { t: "order", words: ["could", "It", "argued", "be", "that"], answer: "It could be argued that" },
          { t: "correct", wrong: "While the policy helped, but it harmed others.", answer: "While the policy helped some, it harmed others.", why: "Do not use \"while\" together with \"but\"." },
          { t: "translate", q: "Translate into English: من ناحية، الفوائد واضحة", a: ["on the one hand the benefits are clear"], why: "من ناحية = \"On the one hand\"." },
          { t: "listen", text: "It could be argued that the benefits outweigh the risks in the long term.", q: "What is the speaker's view?", o: ["Benefits outweigh the risks long-term", "Risks are greater", "There is no difference"], a: 0, why: "\"the benefits outweigh the risks in the long term.\"" },
          { t: "write", prompt: "Write three sentences presenting a balanced argument on one social issue.", keywords: ["on the one hand", "on the other hand", "although"], minWords: 26 }
        ]
      }
    ]
  };

  window.EH.levels.push(B1);
})();
