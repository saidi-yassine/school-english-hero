/* =====================================================================
   English Hero — Level A1 (Beginner)
   10 units · 5 lessons per unit
   ===================================================================== */
(function () {
  "use strict";

  const A1 = {
    id: "a1",
    code: "A1",
    name: "Beginner",
    color: "a1",
    tagline: "Build your very first English words and sentences.",
    description: "Start from zero. You will learn the alphabet, greetings, numbers, family, food, daily routines and the present simple — everything you need for your first real conversation.",
    canDo: [
      "Introduce yourself and greet people correctly",
      "Talk about your family, home, work and daily routine",
      "Ask and answer simple questions about everyday things",
      "Order food, go shopping and give basic directions",
      "Understand slow, clear English and reply with short sentences"
    ],
    units: [
      /* ---------------- UNIT 1 ---------------- */
      {
        n: 1,
        title: "Hello & Goodbye",
        theme: "Greetings, introductions and polite first words",
        lessons: [
          { t: "Introducing Yourself", obj: "Say who you are and where you are from.", pts: ["My name is Omar.", "I am from Morocco.", "I live in Casablanca.", "I am twenty-two years old.", "Nice to meet you."] },
          { t: "Greetings Around the Clock", obj: "Choose the right greeting for the right time of day.", pts: ["Good morning, everyone!", "Good afternoon, Mrs Brown.", "Good evening. How are you?", "How are you? — I'm fine, thanks. And you?", "Not bad, thank you."] },
          { t: "Saying Goodbye", obj: "Close a conversation politely and warmly.", pts: ["Goodbye! See you tomorrow.", "Have a nice day!", "Take care!", "It was nice talking to you.", "See you later — bye for now!"] },
          { t: "The Alphabet & Spelling", obj: "Spell your name and ask people to repeat.", pts: ["How do you spell your name?", "S-A-R-A. Sara.", "Sorry, could you repeat that, please?", "Is that with a double L?", "Let me write it down for you."] },
          { t: "Classroom English", obj: "Ask for help and follow simple instructions.", pts: ["Open your book at page ten.", "Can you repeat that, please?", "I don't understand. Can you explain?", "What does 'hello' mean?", "How do you say 'شكرا' in English?"] }
        ],
        vocab: [
          { w: "hello", ipa: "/həˈləʊ/", pos: "exclamation", def: "A word you say when you meet someone.", ar: "مرحبا", ex: "Hello! My name is Sara." },
          { w: "goodbye", ipa: "/ˌɡʊdˈbaɪ/", pos: "exclamation", def: "A word you say when you leave someone.", ar: "وداعا", ex: "Goodbye! See you tomorrow." },
          { w: "name", ipa: "/neɪm/", pos: "noun", def: "The word people use to call you.", ar: "اسم", ex: "My name is Omar." },
          { w: "friend", ipa: "/frend/", pos: "noun", def: "A person you like and know well.", ar: "صديق", ex: "Ali is my best friend." },
          { w: "please", ipa: "/pliːz/", pos: "adverb", def: "A polite word you add to a request.", ar: "من فضلك", ex: "Please sit down." },
          { w: "thank you", ipa: "/ˈθæŋk juː/", pos: "phrase", def: "Words you say to show you are grateful.", ar: "شكرا لك", ex: "Thank you very much!" },
          { w: "sorry", ipa: "/ˈsɒri/", pos: "adjective", def: "Feeling bad about something you did.", ar: "آسف", ex: "Sorry, I am late." },
          { w: "meet", ipa: "/miːt/", pos: "verb", def: "To see and get to know someone for the first time.", ar: "يقابل / يلتقي", ex: "Nice to meet you." },
          { w: "spell", ipa: "/spel/", pos: "verb", def: "To say or write the letters of a word in order.", ar: "يتهجى", ex: "How do you spell your surname?" },
          { w: "welcome", ipa: "/ˈwelkəm/", pos: "adjective", def: "Used to greet someone arriving somewhere.", ar: "مرحبا بك", ex: "Welcome to our school!" }
        ],
        gram: {
          title: 'The verb "to be" — am / is / are',
          explain: {
            en: 'The verb "to be" is the most important verb in English. We use it to say who we are, how we feel, and where things are. It has three forms in the present: am, is, are.',
            ar: 'فعل "to be" هو أهم فعل في الإنجليزية. نستخدمه لنقول من نحن وكيف نشعر وأين توجد الأشياء. له ثلاث صيغ في المضارع: am و is و are.',
            fr: 'Le verbe « to be » est le verbe le plus important en anglais. Il a trois formes au présent : am, is, are.'
          },
          formula: ['I <span class="fx-k">am</span> <span class="fx-n">(I\'m)</span> a student.', 'He / She / It <span class="fx-k">is</span> <span class="fx-n">(He\'s)</span> happy.', 'You / We / They <span class="fx-k">are</span> <span class="fx-n">(They\'re)</span> here.', 'Negative: I <span class="fx-k">am not</span> · He <span class="fx-k">is not</span> (isn\'t) · They <span class="fx-k">are not</span> (aren\'t)'],
          examples: [
            { en: "I am from Egypt.", ar: "أنا من مصر." },
            { en: "She is my teacher.", ar: "هي معلمتي." },
            { en: "We are ready.", ar: "نحن مستعدون." },
            { en: "They are not at home.", ar: "هم ليسوا في المنزل." }
          ],
          mistakes: [
            { w: "I are a student.", r: "I am a student.", why: "The form for \"I\" is always \"am\"." },
            { w: "She am happy.", r: "She is happy.", why: "He / She / It always take \"is\"." },
            { w: "I am teacher.", r: "I am a teacher.", why: "Jobs need the article \"a\" or \"an\" before them." }
          ]
        },
        listen: {
          title: "First day at school",
          lines: [
            { who: "Anna", text: "Hello! My name is Anna. What is your name?" },
            { who: "Omar", text: "Hi Anna. I am Omar. Nice to meet you." },
            { who: "Anna", text: "Nice to meet you too. Where are you from, Omar?" },
            { who: "Omar", text: "I am from Morocco. I live in Rabat now." },
            { who: "Anna", text: "Welcome to the class! I am from Canada." },
            { who: "Omar", text: "Thank you, Anna. See you later!" }
          ],
          q: [
            { q: "What is the woman's name?", o: ["Anna", "Sara", "Layla"], a: 0, why: "She says \"My name is Anna\"." },
            { q: "Where is Omar from?", o: ["Canada", "Morocco", "Egypt"], a: 1, why: "Omar says \"I am from Morocco\"." },
            { q: "Where does Anna come from?", o: ["Canada", "Morocco", "Spain"], a: 0, why: "Anna says \"I am from Canada\"." }
          ]
        },
        read: {
          title: "My new friend",
          text: "Hello. My name is Layla. I am nineteen years old. I am a student. I live in Cairo with my family. I have one brother and two sisters. My brother's name is Ali. He is a teacher. I like music and books. My best friend is Sara. She is from Tunisia. We are in the same class. Nice to meet you!",
          q: [
            { q: "How old is Layla?", o: ["Nineteen", "Nine", "Ninety"], a: 0, why: "The text says \"I am nineteen years old\"." },
            { q: "What is her brother's job?", o: ["He is a student", "He is a teacher", "He is a doctor"], a: 1, why: "\"My brother's name is Ali. He is a teacher.\"" },
            { q: "Where is Sara from?", o: ["Egypt", "Morocco", "Tunisia"], a: 2, why: "\"She is from Tunisia.\"" }
          ]
        },
        write: {
          prompt: "Write 4–5 sentences introducing yourself. Include your name, your age, where you are from and one thing you like.",
          tips: ["Start with \"My name is ...\"", "Use \"I am\" for age and origin", "Finish with \"Nice to meet you.\""],
          sample: "My name is Karim. I am twenty years old. I am from Algeria and I live in Algiers. I am a student and I like football. Nice to meet you!"
        },
        speak: ["What is your name?", "Where are you from?", "How old are you?", "What do you do?", "Say hello and introduce yourself in one sentence."],
        ex: [
          { t: "mcq", q: "___ your name?", o: ["What is", "What are", "How is"], a: 0, why: "We ask about a name with \"What is\"." },
          { t: "mcq", q: "I ___ from Egypt.", o: ["am", "is", "are"], a: 0, why: "With \"I\" we use \"am\"." },
          { t: "fill", q: "She ___ my sister.", o: ["am", "is", "are"], a: 1, why: "With he / she / it we use \"is\"." },
          { t: "match", pairs: [["Hello", "A greeting when you meet someone"], ["Goodbye", "A word when you leave"], ["Sorry", "Said when you make a mistake"], ["Thank you", "Said to show gratitude"]] },
          { t: "order", words: ["name", "My", "is", "Omar"], answer: "My name is Omar" },
          { t: "translate", q: "Translate into English: اسمي سارة", a: ["my name is sara", "my name is sarah", "i am sara"], why: "اسمي = \"My name is\"." },
          { t: "listen", text: "Hello, my name is Anna and I am from Canada.", q: "Where is Anna from?", o: ["Canada", "Morocco", "Egypt"], a: 0, why: "She says \"I am from Canada\"." },
          { t: "correct", wrong: "I are a student.", answer: "I am a student.", why: "The verb \"to be\" with \"I\" is always \"am\"." },
          { t: "mcq", q: "Nice to ___ you.", o: ["meet", "meets", "meeting"], a: 0, why: 'After "to" we use the base verb: "meet".' },
          { t: "write", prompt: "Write one sentence: introduce yourself with your name and your country.", keywords: ["my name is", "i am from"], minWords: 6 }
        ]
      },

      /* ---------------- UNIT 2 ---------------- */
      {
        n: 2,
        title: "People & Family",
        theme: "Family members, describing people and possessive forms",
        lessons: [
          { t: "My Family Tree", obj: "Name the people in your family.", pts: ["This is my father and my mother.", "I have two brothers and one sister.", "My grandparents live in the countryside.", "My uncle is my mother's brother.", "We are a family of five."] },
          { t: "Describing People", obj: "Use simple adjectives to describe appearance.", pts: ["My sister is tall and thin.", "He has short black hair.", "She has brown eyes.", "My grandfather is old but very strong.", "He wears glasses."] },
          { t: "Possessive Adjectives", obj: "Use my, your, his, her, our, their correctly.", pts: ["This is my bag.", "Is this your pen?", "His name is Sami.", "Her hair is long.", "Their house is big."] },
          { t: "'Have' and 'Has'", obj: "Talk about what you and other people have.", pts: ["I have one sister.", "She has a dog.", "We have a small garden.", "He doesn't have a car.", "Do you have any brothers?"] },
          { t: "Talking About Age", obj: "Ask and give ages for yourself and others.", pts: ["How old are you? — I am twenty.", "How old is your brother?", "My mother is fifty years old.", "He is the youngest in the family.", "She is older than me."] }
        ],
        vocab: [
          { w: "mother", ipa: "/ˈmʌðə/", pos: "noun", def: "The woman who is your parent.", ar: "أم", ex: "My mother is a nurse." },
          { w: "father", ipa: "/ˈfɑːðə/", pos: "noun", def: "The man who is your parent.", ar: "أب", ex: "My father works in a bank." },
          { w: "brother", ipa: "/ˈbrʌðə/", pos: "noun", def: "A boy or man with the same parents as you.", ar: "أخ", ex: "I have two brothers." },
          { w: "sister", ipa: "/ˈsɪstə/", pos: "noun", def: "A girl or woman with the same parents as you.", ar: "أخت", ex: "My sister is a student." },
          { w: "grandfather", ipa: "/ˈɡrænfɑːðə/", pos: "noun", def: "The father of your mother or father.", ar: "جد", ex: "My grandfather tells great stories." },
          { w: "tall", ipa: "/tɔːl/", pos: "adjective", def: "Having a greater height than average.", ar: "طويل", ex: "My brother is very tall." },
          { w: "short", ipa: "/ʃɔːt/", pos: "adjective", def: "Having a small height, or not long.", ar: "قصير", ex: "She has short hair." },
          { w: "old", ipa: "/əʊld/", pos: "adjective", def: "Having lived for many years.", ar: "عجوز / قديم", ex: "My grandmother is eighty years old." },
          { w: "young", ipa: "/jʌŋ/", pos: "adjective", def: "Having lived for only a short time.", ar: "صغير السن", ex: "He is too young to drive." },
          { w: "family", ipa: "/ˈfæməli/", pos: "noun", def: "A group of people related to each other.", ar: "عائلة", ex: "I love my family very much." }
        ],
        gram: {
          title: "Possessive adjectives: my, your, his, her, our, their",
          explain: {
            en: "Possessive adjectives show who something belongs to. They always come before a noun and they never change with the noun's number.",
            ar: "صفات الملكية تُظهر لمن يعود الشيء. تأتي دائما قبل الاسم ولا تتغير مع المفرد أو الجمع.",
            fr: "Les adjectifs possessifs indiquent à qui appartient quelque chose. Ils se placent toujours devant un nom."
          },
          formula: ['I → <span class="fx-k">my</span> · You → <span class="fx-k">your</span>', 'He → <span class="fx-k">his</span> · She → <span class="fx-k">her</span> · It → <span class="fx-k">its</span>', 'We → <span class="fx-k">our</span> · They → <span class="fx-k">their</span>', 'Pattern: <span class="fx-k">possessive</span> + <span class="fx-v">noun</span> → my car, their children'],
          examples: [
            { en: "This is my father. His name is Ahmed.", ar: "هذا أبي. اسمه أحمد." },
            { en: "Her sister is a doctor.", ar: "أختها طبيبة." },
            { en: "Our house is near the school.", ar: "منزلنا قريب من المدرسة." },
            { en: "Their children are twins.", ar: "أطفالهم توأم." }
          ],
          mistakes: [
            { w: "She name is Sara.", r: "Her name is Sara.", why: "Use the possessive adjective \"her\", not the subject pronoun \"she\"." },
            { w: "His is my brother.", r: "He is my brother.", why: "\"His\" replaces a noun; before a verb use \"he\"." },
            { w: "This is the my book.", r: "This is my book.", why: "Do not use \"the\" with a possessive adjective." }
          ]
        },
        listen: {
          title: "My family photo",
          lines: [
            { who: "Sami", text: "Look at this photo. This is my family." },
            { who: "Nora", text: "Who is the tall man with glasses?" },
            { who: "Sami", text: "That is my father. He is a teacher." },
            { who: "Nora", text: "And the woman next to him?" },
            { who: "Sami", text: "That is my mother. She has long black hair." },
            { who: "Nora", text: "Is that your sister in the middle?" },
            { who: "Sami", text: "Yes, that is Lina. She is only six years old." }
          ],
          q: [
            { q: "What is the father's job?", o: ["A doctor", "A teacher", "A driver"], a: 1, why: "Sami says \"He is a teacher\"." },
            { q: "What does the mother look like?", o: ["She has short hair", "She has long black hair", "She wears glasses"], a: 1, why: "\"She has long black hair.\"" },
            { q: "How old is Lina?", o: ["Sixteen", "Six", "Sixty"], a: 1, why: "Sami says \"She is only six years old\"." }
          ]
        },
        read: {
          title: "Two brothers",
          text: "I have two brothers. My older brother is called Youssef. He is twenty-five years old and he is an engineer. He is tall and he has short black hair. My younger brother is called Adam. He is twelve. He is short and he loves football. My father is a farmer and my mother is a nurse. We live in a small village near Fez. Our house is old but very comfortable.",
          q: [
            { q: "What is Youssef's job?", o: ["An engineer", "A farmer", "A nurse"], a: 0, why: "\"He is an engineer.\"" },
            { q: "How old is Adam?", o: ["Twenty-five", "Twelve", "Twenty"], a: 1, why: "\"He is twelve.\"" },
            { q: "Where does the family live?", o: ["In a city centre", "In a small village near Fez", "In another country"], a: 1, why: "\"We live in a small village near Fez.\"" }
          ]
        },
        write: {
          prompt: "Write 5 sentences about your family. Say how many people there are, who they are, and describe one person.",
          tips: ["Use \"I have ...\" and \"There are ...\"", "Use possessive adjectives: my, his, her", "Add one adjective of appearance for each person"],
          sample: "There are five people in my family. I have one brother and two sisters. My father is tall and he has short grey hair. My mother is a teacher and she is very kind. My little sister is eight years old and she loves cats."
        },
        speak: ["How many people are in your family?", "Do you have any brothers or sisters?", "Describe your mother in two sentences.", "How old is your father?", "Who is your favourite person in your family and why?"],
        ex: [
          { t: "mcq", q: "This is my sister. ___ name is Layla.", o: ["Her", "His", "She"], a: 0, why: "For a female person we use \"Her\"." },
          { t: "fill", q: "My brother ___ a new bicycle.", o: ["have", "has", "having"], a: 1, why: "He / She / It take \"has\"." },
          { t: "match", pairs: [["mother", "أم"], ["brother", "أخ"], ["grandfather", "جد"], ["family", "عائلة"]] },
          { t: "order", words: ["have", "I", "two", "sisters"], answer: "I have two sisters" },
          { t: "mcq", q: "My sister is short, but my brother is ___.", o: ["tall", "young", "old"], a: 0, why: "\"Short\" contrasts with \"tall\"." },
          { t: "translate", q: "Translate into English: عندي أخ واحد", a: ["i have one brother", "i have a brother"], why: "عندي = \"I have\"." },
          { t: "correct", wrong: "She have two children.", answer: "She has two children.", why: "Third person singular takes \"has\"." },
          { t: "vocab", q: "Which word means 'the father of your father'?", o: ["grandfather", "brother", "uncle"], a: 0, why: "Your father's father is your grandfather." },
          { t: "listen", text: "My mother is a nurse and my father is a farmer.", q: "What is the mother's job?", o: ["A farmer", "A nurse", "A teacher"], a: 1, why: "The speaker says \"My mother is a nurse\"." },
          { t: "write", prompt: "Describe your best friend in three sentences: age, appearance, personality.", keywords: ["he is", "she is", "years old"], minWords: 15 }
        ]
      },

      /* ---------------- UNIT 3 ---------------- */
      {
        n: 3,
        title: "Numbers, Days & Time",
        theme: "Counting, dates, telling the time and making appointments",
        lessons: [
          { t: "Numbers 1–100", obj: "Count, read and write numbers up to one hundred.", pts: ["One, two, three ... twenty.", "Thirty, forty, fifty, sixty.", "Seventy, eighty, ninety, one hundred.", "My phone number is 0-6-1-2-3-4.", "There are thirty-one days in January."] },
          { t: "Days, Months & Dates", obj: "Say days, months and dates correctly.", pts: ["Today is Monday.", "My birthday is on the fifth of March.", "The weekend is Saturday and Sunday.", "We have English on Tuesday and Thursday.", "December is the last month of the year."] },
          { t: "Telling the Time", obj: "Ask for and tell the time.", pts: ["What time is it? — It's half past three.", "It's quarter to nine.", "The class starts at eight o'clock.", "It's twenty past seven.", "I get up at six thirty."] },
          { t: "Prepositions of Time", obj: "Use at, on and in with times and dates.", pts: ["I wake up at 7 a.m.", "We have a test on Monday.", "My birthday is in July.", "The shop closes at nine o'clock.", "In the morning I study English."] },
          { t: "Making Appointments", obj: "Arrange a meeting with someone.", pts: ["Are you free on Friday?", "Let's meet at six o'clock.", "Can we meet in the afternoon?", "Sorry, I am busy then. How about Saturday?", "That works for me. See you then!"] }
        ],
        vocab: [
          { w: "Monday", ipa: "/ˈmʌndeɪ/", pos: "noun", def: "The first working day of the week.", ar: "الاثنين", ex: "I have a class on Monday." },
          { w: "weekend", ipa: "/ˌwiːkˈend/", pos: "noun", def: "Saturday and Sunday.", ar: "عطلة نهاية الأسبوع", ex: "What do you do at the weekend?" },
          { w: "hour", ipa: "/ˈaʊə/", pos: "noun", def: "A period of sixty minutes.", ar: "ساعة", ex: "The lesson lasts one hour." },
          { w: "minute", ipa: "/ˈmɪnɪt/", pos: "noun", def: "A period of sixty seconds.", ar: "دقيقة", ex: "Wait five minutes, please." },
          { w: "birthday", ipa: "/ˈbɜːθdeɪ/", pos: "noun", def: "The day you were born, celebrated each year.", ar: "عيد ميلاد", ex: "My birthday is in June." },
          { w: "morning", ipa: "/ˈmɔːnɪŋ/", pos: "noun", def: "The time from sunrise until noon.", ar: "صباح", ex: "I study in the morning." },
          { w: "evening", ipa: "/ˈiːvnɪŋ/", pos: "noun", def: "The time at the end of the day.", ar: "مساء", ex: "We eat dinner in the evening." },
          { w: "early", ipa: "/ˈɜːli/", pos: "adverb", def: "Before the usual or expected time.", ar: "مبكرا", ex: "I wake up early every day." },
          { w: "late", ipa: "/leɪt/", pos: "adjective", def: "After the expected time.", ar: "متأخر", ex: "Sorry, I am late." },
          { w: "calendar", ipa: "/ˈkælɪndə/", pos: "noun", def: "A chart showing days, weeks and months.", ar: "تقويم", ex: "Write it in your calendar." }
        ],
        gram: {
          title: "Prepositions of time: at, on, in",
          explain: {
            en: "Use at for clock times, on for days and dates, and in for months, years and long periods of the day. These three little words appear in almost every conversation about plans.",
            ar: "نستخدم at للساعة، و on للأيام والتواريخ، و in للأشهر والسنوات وفترات اليوم الطويلة.",
            fr: "On utilise « at » pour l'heure, « on » pour les jours et les dates, et « in » pour les mois et les années."
          },
          formula: ['<span class="fx-k">at</span> + <span class="fx-v">clock time</span> → at 7 o\'clock, at noon', '<span class="fx-k">on</span> + <span class="fx-v">day / date</span> → on Monday, on 5 May', '<span class="fx-k">in</span> + <span class="fx-v">month / year / part of day</span> → in July, in 2026, in the morning', 'Careful: <span class="fx-n">at night</span> (not "in night")'],
          examples: [
            { en: "The film starts at eight o'clock.", ar: "يبدأ الفيلم في الثامنة." },
            { en: "I have English on Tuesday.", ar: "لدي إنجليزية يوم الثلاثاء." },
            { en: "My birthday is in September.", ar: "عيد ميلادي في سبتمبر." },
            { en: "She studies in the evening.", ar: "تدرس في المساء." }
          ],
          mistakes: [
            { w: "I wake up in 6 o'clock.", r: "I wake up at 6 o'clock.", why: "Clock times always take \"at\"." },
            { w: "My birthday is on July.", r: "My birthday is in July.", why: "Months take \"in\", not \"on\"." },
            { w: "See you in Monday.", r: "See you on Monday.", why: "Days of the week take \"on\"." }
          ]
        },
        listen: {
          title: "Planning the week",
          lines: [
            { who: "Dad", text: "What time is your English class, Lina?" },
            { who: "Lina", text: "It's at half past five on Mondays and Wednesdays." },
            { who: "Dad", text: "And the football training?" },
            { who: "Lina", text: "That's on Saturday morning at ten." },
            { who: "Dad", text: "Good. Don't forget Grandma's birthday on the twelfth of March." },
            { who: "Lina", text: "Of course not! I have it in my calendar." }
          ],
          q: [
            { q: "When is the English class?", o: ["At 5:30 on Monday and Wednesday", "At 5:00 on Tuesday", "At 6:30 on Saturday"], a: 0, why: "\"Half past five on Mondays and Wednesdays\" = 5:30." },
            { q: "When is football training?", o: ["Friday evening", "Saturday morning at ten", "Sunday afternoon"], a: 1, why: "\"That's on Saturday morning at ten.\"" },
            { q: "Whose birthday is in March?", o: ["Lina's", "Grandma's", "Dad's"], a: 1, why: "\"Grandma's birthday on the twelfth of March\"." }
          ]
        },
        read: {
          title: "My busy week",
          text: "My name is Hana and I am very busy. On Sunday I visit my grandmother in the morning. On Monday and Tuesday I work in a shop from nine to five. On Wednesday evening I have an English class at seven o'clock. On Thursday I rest at home. Friday is my favourite day because I meet my friends at a café at six. On Saturday I sleep late and clean the house. In July I take a holiday with my family.",
          q: [
            { q: "When does Hana visit her grandmother?", o: ["Sunday morning", "Monday evening", "Friday night"], a: 0, why: "\"On Sunday I visit my grandmother in the morning.\"" },
            { q: "What time is her English class?", o: ["At six", "At seven", "At nine"], a: 1, why: "\"... an English class at seven o'clock.\"" },
            { q: "Why is Friday her favourite day?", o: ["She works less", "She meets her friends", "She sleeps late"], a: 1, why: "\"Friday is my favourite day because I meet my friends at a café.\"" }
          ]
        },
        write: {
          prompt: "Write 5–6 sentences about your week. Use at, on and in at least four times.",
          tips: ["Name at least three activities", "Use \"at\" for times, \"on\" for days, \"in\" for months", "Finish with what you do at the weekend"],
          sample: "I am a student and my week is full. On Monday I have maths at nine o'clock. On Tuesday and Thursday I play basketball in the evening. On Friday I meet my friends at a café at six. In August I visit my uncle in the mountains. At the weekend I sleep late and read books."
        },
        speak: ["What time do you get up?", "What day is it today?", "When is your birthday?", "What do you do at the weekend?", "Are you free on Friday evening?"],
        ex: [
          { t: "mcq", q: "The class starts ___ eight o'clock.", o: ["at", "on", "in"], a: 0, why: "Clock times take \"at\"." },
          { t: "mcq", q: "My birthday is ___ July.", o: ["at", "on", "in"], a: 2, why: "Months take \"in\"." },
          { t: "fill", q: "I have a test ___ Monday.", o: ["at", "on", "in"], a: 1, why: "Days of the week take \"on\"." },
          { t: "match", pairs: [["7:00", "seven o'clock"], ["7:15", "quarter past seven"], ["7:30", "half past seven"], ["7:45", "quarter to eight"]] },
          { t: "order", words: ["meet", "Let's", "at", "six"], answer: "Let's meet at six" },
          { t: "translate", q: "Translate into English: كم الساعة؟", a: ["what time is it", "what is the time"], why: "كم الساعة = \"What time is it?\"" },
          { t: "correct", wrong: "See you in Monday.", answer: "See you on Monday.", why: "Days of the week take \"on\"." },
          { t: "listenwrite", text: "The meeting is at half past four on Thursday.", answer: "The meeting is at half past four on Thursday.", why: "Listen for \"half past four\" and \"Thursday\"." },
          { t: "vocab", q: "Which day comes after Wednesday?", o: ["Tuesday", "Thursday", "Friday"], a: 1, why: "Wednesday → Thursday → Friday." },
          { t: "write", prompt: "Write two sentences about your daily schedule using 'at' and 'on'.", keywords: ["at", "on"], minWords: 12 }
        ]
      },

      /* ---------------- UNIT 4 ---------------- */
      {
        n: 4,
        title: "Food & Drink",
        theme: "Meals, ordering, likes and dislikes",
        lessons: [
          { t: "Meals of the Day", obj: "Name the meals and talk about when you eat.", pts: ["I have breakfast at seven.", "Lunch is at one o'clock.", "We have dinner at eight in the evening.", "I usually have a snack in the afternoon.", "Do you eat breakfast every day?"] },
          { t: "Food and Drinks Vocabulary", obj: "Name common food and drinks.", pts: ["bread, cheese, eggs, rice, chicken", "water, tea, coffee, juice, milk", "fruit: apple, banana, orange, grapes", "vegetables: tomato, potato, carrot, onion", "I would like a glass of water, please."] },
          { t: "Likes and Dislikes", obj: "Express what you like and do not like.", pts: ["I like pizza very much.", "I love ice cream.", "I don't like onions.", "She hates coffee.", "Do you like spicy food?"] },
          { t: "At the Restaurant", obj: "Order food politely in a restaurant.", pts: ["A table for two, please.", "Can I see the menu, please?", "I'd like the chicken, please.", "Could we have the bill, please?", "Is this dish spicy?"] },
          { t: "Countable & Uncountable", obj: "Use some, any, much and many with food.", pts: ["There is some milk in the fridge.", "There aren't any eggs.", "How much rice do we need?", "How many apples are there?", "We need a lot of water."] }
        ],
        vocab: [
          { w: "breakfast", ipa: "/ˈbrekfəst/", pos: "noun", def: "The first meal of the day.", ar: "فطور", ex: "I have breakfast at seven." },
          { w: "lunch", ipa: "/lʌntʃ/", pos: "noun", def: "The meal you eat in the middle of the day.", ar: "غداء", ex: "We have lunch at one o'clock." },
          { w: "dinner", ipa: "/ˈdɪnə/", pos: "noun", def: "The main meal, usually in the evening.", ar: "عشاء", ex: "Dinner is ready!" },
          { w: "bread", ipa: "/bred/", pos: "noun", def: "A basic food made from flour and baked.", ar: "خبز", ex: "I buy fresh bread every morning." },
          { w: "chicken", ipa: "/ˈtʃɪkɪn/", pos: "noun", def: "Meat from a farm bird, or the bird itself.", ar: "دجاج", ex: "I'd like grilled chicken, please." },
          { w: "vegetable", ipa: "/ˈvedʒtəbl/", pos: "noun", def: "A plant used as food, like a carrot.", ar: "خضار", ex: "Eat more vegetables." },
          { w: "drink", ipa: "/drɪŋk/", pos: "verb / noun", def: "To take liquid into your mouth; a liquid you drink.", ar: "يشرب / شراب", ex: "What would you like to drink?" },
          { w: "hungry", ipa: "/ˈhʌŋɡri/", pos: "adjective", def: "Feeling that you need to eat.", ar: "جائع", ex: "I'm hungry. Let's eat." },
          { w: "thirsty", ipa: "/ˈθɜːsti/", pos: "adjective", def: "Feeling that you need to drink.", ar: "عطشان", ex: "I'm thirsty — is there water?" },
          { w: "delicious", ipa: "/dɪˈlɪʃəs/", pos: "adjective", def: "Tasting very good.", ar: "لذيذ", ex: "This soup is delicious!" }
        ],
        gram: {
          title: "Countable & uncountable nouns: some, any, much, many",
          explain: {
            en: "Countable nouns can be counted (one apple, two apples). Uncountable nouns cannot (water, rice, bread). We use many with countable nouns and much with uncountable nouns. Some is used in positive sentences, any in negatives and questions.",
            ar: "الأسماء المعدودة يمكن عدها، وغير المعدودة لا يمكن. نستخدم many مع المعدودة و much مع غير المعدودة، و some في الإثبات و any في النفي والسؤال.",
            fr: "On emploie « many » avec les noms comptables et « much » avec les noms non comptables. « some » s'emploie à l'affirmatif, « any » au négatif et à l'interrogatif."
          },
          formula: ['<span class="fx-k">some</span> + plural/uncountable → I have <span class="fx-v">some</span> bread.', '<span class="fx-k">any</span> + negative / question → We don\'t have <span class="fx-v">any</span> milk.', '<span class="fx-k">How many</span> + countable → How many <span class="fx-v">eggs</span>?', '<span class="fx-k">How much</span> + uncountable → How much <span class="fx-v">rice</span>?'],
          examples: [
            { en: "There is some cheese in the fridge.", ar: "هناك بعض الجبن في الثلاجة." },
            { en: "We don't have any sugar.", ar: "ليس لدينا أي سكر." },
            { en: "How many tomatoes do you need?", ar: "كم عدد الطماطم التي تحتاجها؟" },
            { en: "How much water should I drink?", ar: "كم من الماء يجب أن أشرب؟" }
          ],
          mistakes: [
            { w: "How many bread do you want?", r: "How much bread do you want?", why: "\"Bread\" is uncountable, so use \"much\"." },
            { w: "I don't have some money.", r: "I don't have any money.", why: "In negative sentences we use \"any\"." },
            { w: "I need some rices.", r: "I need some rice.", why: "\"Rice\" has no plural form." }
          ]
        },
        listen: {
          title: "At the café",
          lines: [
            { who: "Waiter", text: "Good afternoon. What would you like?" },
            { who: "Customer", text: "I'd like a chicken sandwich, please." },
            { who: "Waiter", text: "Would you like something to drink?" },
            { who: "Customer", text: "Yes, an orange juice, please. No sugar." },
            { who: "Waiter", text: "Anything else? We have delicious chocolate cake today." },
            { who: "Customer", text: "No, thank you. That's all." }
          ],
          q: [
            { q: "What food does the customer order?", o: ["A chicken sandwich", "A vegetable soup", "Chocolate cake"], a: 0, why: "\"I'd like a chicken sandwich, please.\"" },
            { q: "What drink does the customer ask for?", o: ["Coffee with milk", "Orange juice, no sugar", "Cold water"], a: 1, why: "\"Yes, an orange juice, please. No sugar.\"" },
            { q: "Does the customer order cake?", o: ["Yes, one slice", "No, thank you", "Yes, two slices"], a: 1, why: "The customer says \"No, thank you. That's all.\"" }
          ]
        },
        read: {
          title: "A healthy day",
          text: "Nadia wants to eat better. In the morning she has eggs, brown bread and a glass of milk. She doesn't drink coffee any more because it makes her nervous. For lunch she eats chicken with rice and a lot of vegetables. In the afternoon she has an apple or a banana. For dinner she has soup and some cheese. She drinks two litres of water every day. She says she feels much stronger now.",
          q: [
            { q: "What does Nadia have for breakfast?", o: ["Eggs, bread and milk", "Coffee and cake", "Only fruit"], a: 0, why: "\"In the morning she has eggs, brown bread and a glass of milk.\"" },
            { q: "Why doesn't she drink coffee?", o: ["It is expensive", "It makes her nervous", "She doesn't like the taste"], a: 1, why: "\"... because it makes her nervous.\"" },
            { q: "How much water does she drink?", o: ["One litre", "Two litres", "Half a litre"], a: 1, why: "\"She drinks two litres of water every day.\"" }
          ]
        },
        write: {
          prompt: "Write 5 sentences about what you eat in a normal day. Include breakfast, lunch, dinner and one thing you don't like.",
          tips: ["Use present simple: I have / I eat / I drink", "Use \"I don't like ...\" for dislikes", "Add one adjective like \"delicious\" or \"healthy\""],
          sample: "For breakfast I have bread with cheese and a cup of tea. At lunch I usually eat rice with chicken and salad. In the evening I have soup with my family. I love fruit, especially grapes. I don't like onions, so my mother never puts them in my food."
        },
        speak: ["What do you usually have for breakfast?", "What is your favourite food?", "Is there any food you hate?", "How much water do you drink every day?", "Order a meal in a restaurant in two sentences."],
        ex: [
          { t: "mcq", q: "There is ___ milk in the fridge.", o: ["some", "any", "many"], a: 0, why: "\"Some\" is used in positive sentences with uncountable nouns." },
          { t: "mcq", q: "How ___ eggs do we need?", o: ["much", "many", "some"], a: 1, why: "\"Eggs\" is countable, so we use \"many\"." },
          { t: "fill", q: "We don't have ___ bread.", o: ["some", "any", "many"], a: 1, why: "Negative sentences take \"any\"." },
          { t: "match", pairs: [["hungry", "needing food"], ["thirsty", "needing a drink"], ["delicious", "tasting very good"], ["menu", "a list of food in a restaurant"]] },
          { t: "order", words: ["like", "I'd", "a", "coffee"], answer: "I'd like a coffee" },
          { t: "translate", q: "Translate into English: أنا جائع", a: ["i am hungry", "i'm hungry"], why: "جائع = \"hungry\"." },
          { t: "correct", wrong: "How many bread do you want?", answer: "How much bread do you want?", why: "\"Bread\" is uncountable, so it takes \"much\"." },
          { t: "vocab", q: "Which one is a vegetable?", o: ["carrot", "banana", "cheese"], a: 0, why: "A carrot is a vegetable; a banana is a fruit and cheese is a dairy product." },
          { t: "listen", text: "I would like a glass of orange juice, please.", q: "What does the speaker want?", o: ["A glass of orange juice", "A cup of tea", "A bottle of water"], a: 0, why: "The speaker asks for orange juice." },
          { t: "write", prompt: "Write one sentence ordering food politely at a restaurant.", keywords: ["i'd like", "please"], minWords: 6 }
        ]
      },

      /* ---------------- UNIT 5 ---------------- */
      {
        n: 5,
        title: "My Daily Routine",
        theme: "Present simple, habits and adverbs of frequency",
        lessons: [
          { t: "A Normal Day", obj: "Describe your daily routine from morning to night.", pts: ["I wake up at six thirty.", "I have a shower and get dressed.", "I leave home at eight.", "I come back at five in the afternoon.", "I go to bed at eleven."] },
          { t: "Present Simple: I / You / We / They", obj: "Make positive and negative sentences with the base verb.", pts: ["I work in an office.", "We study English every day.", "They don't live here.", "You speak very well.", "Do you play any sport?"] },
          { t: "Present Simple: He / She / It", obj: "Add -s or -es correctly for third person.", pts: ["She works in a hospital.", "He studies at night.", "My father watches the news.", "It rains a lot in winter.", "Does she like coffee?"] },
          { t: "Adverbs of Frequency", obj: "Say how often you do things.", pts: ["I always brush my teeth.", "She usually walks to work.", "We sometimes eat out.", "He rarely watches TV.", "I never smoke."] },
          { t: "Free Time in the Evening", obj: "Talk about what you do after work or school.", pts: ["After dinner I read a book.", "We watch a film together.", "I chat with my friends online.", "She goes to the gym three times a week.", "Before bed I check my phone."] }
        ],
        vocab: [
          { w: "wake up", ipa: "/weɪk ʌp/", pos: "phrasal verb", def: "To stop sleeping.", ar: "يستيقظ", ex: "I wake up at six." },
          { w: "get dressed", ipa: "/ɡet drest/", pos: "phrase", def: "To put your clothes on.", ar: "يلبس ملابسه", ex: "He gets dressed quickly." },
          { w: "leave", ipa: "/liːv/", pos: "verb", def: "To go away from a place.", ar: "يغادر", ex: "I leave home at eight." },
          { w: "always", ipa: "/ˈɔːlweɪz/", pos: "adverb", def: "Every time, 100% of the time.", ar: "دائما", ex: "She always arrives early." },
          { w: "usually", ipa: "/ˈjuːʒuəli/", pos: "adverb", def: "Most of the time, about 80%.", ar: "عادة", ex: "I usually walk to work." },
          { w: "sometimes", ipa: "/ˈsʌmtaɪmz/", pos: "adverb", def: "On some occasions, about 50%.", ar: "أحيانا", ex: "We sometimes eat out." },
          { w: "never", ipa: "/ˈnevə/", pos: "adverb", def: "Not at any time, 0%.", ar: "أبدا", ex: "I never drink coffee at night." },
          { w: "routine", ipa: "/ruːˈtiːn/", pos: "noun", def: "The usual order of things you do.", ar: "روتين", ex: "My morning routine is simple." },
          { w: "busy", ipa: "/ˈbɪzi/", pos: "adjective", def: "Having a lot of things to do.", ar: "مشغول", ex: "I am very busy today." },
          { w: "relax", ipa: "/rɪˈlæks/", pos: "verb", def: "To rest and become calm.", ar: "يسترخي", ex: "I relax in the evening." }
        ],
        gram: {
          title: "Present simple — habits and routines",
          explain: {
            en: "We use the present simple for things we do regularly: habits, routines and facts. The verb stays in its base form, except with he, she and it, where we add -s or -es.",
            ar: "نستخدم المضارع البسيط للأشياء التي نفعلها بانتظام: العادات والروتين والحقائق. يبقى الفعل بصيغته الأساسية إلا مع he و she و it فنضيف s.",
            fr: "On utilise le présent simple pour les habitudes et les routines. Le verbe reste à la base, sauf avec he/she/it où l'on ajoute -s."
          },
          formula: ['I / You / We / They + <span class="fx-v">verb</span> → They <span class="fx-k">work</span> here.', 'He / She / It + <span class="fx-v">verb</span> + <span class="fx-k">-s</span> → She <span class="fx-k">works</span> here.', 'Negative: do/does + <span class="fx-k">not</span> + verb → He <span class="fx-k">doesn\'t work</span>.', 'Question: <span class="fx-k">Do / Does</span> + subject + verb? → <span class="fx-k">Does</span> she work here?'],
          examples: [
            { en: "I study English every morning.", ar: "أدرس الإنجليزية كل صباح." },
            { en: "She goes to the gym on Fridays.", ar: "تذهب إلى الصالة الرياضية أيام الجمعة." },
            { en: "They don't eat meat.", ar: "هم لا يأكلون اللحم." },
            { en: "Does he live in London?", ar: "هل يعيش في لندن؟" }
          ],
          mistakes: [
            { w: "He work in a bank.", r: "He works in a bank.", why: "Third person singular needs -s." },
            { w: "She doesn't works here.", r: "She doesn't work here.", why: "After \"doesn't\" the verb returns to the base form." },
            { w: "Do she like tea?", r: "Does she like tea?", why: "Use \"does\" for he / she / it in questions." }
          ]
        },
        listen: {
          title: "A teacher's day",
          lines: [
            { who: "Host", text: "So, Mr Idris, tell us about your day." },
            { who: "Mr Idris", text: "I wake up at half past five and I go running." },
            { who: "Host", text: "That's early! What time do you start work?" },
            { who: "Mr Idris", text: "I arrive at school at seven thirty. My first class is at eight." },
            { who: "Host", text: "And in the evening?" },
            { who: "Mr Idris", text: "I usually correct homework, then I relax with a book." },
            { who: "Host", text: "Do you ever watch television?" },
            { who: "Mr Idris", text: "Almost never. I go to bed at ten." }
          ],
          q: [
            { q: "What does Mr Idris do after waking up?", o: ["He goes running", "He reads a book", "He watches TV"], a: 0, why: "\"I wake up at half past five and I go running.\"" },
            { q: "What time does his first class start?", o: ["At seven thirty", "At eight", "At half past five"], a: 1, why: "\"My first class is at eight.\"" },
            { q: "How often does he watch television?", o: ["Every evening", "Almost never", "Twice a week"], a: 1, why: "\"Almost never. I go to bed at ten.\"" }
          ]
        },
        read: {
          title: "Two different routines",
          text: "Sara and Mona are sisters, but their days are very different. Sara is a nurse. She works at night and she sleeps in the morning. She never eats breakfast because she wakes up at two in the afternoon. Mona is a student. She gets up at six, has breakfast with her family and takes the bus at seven. She studies until four, then she goes to the gym. In the evening they sometimes have dinner together before Sara leaves for work.",
          q: [
            { q: "Why does Sara never eat breakfast?", o: ["She doesn't like food", "She wakes up in the afternoon", "She works in the morning"], a: 1, why: "\"She never eats breakfast because she wakes up at two in the afternoon.\"" },
            { q: "How does Mona go to school?", o: ["By bus", "By car", "On foot"], a: 0, why: "\"... takes the bus at seven.\"" },
            { q: "What do they sometimes do together?", o: ["Go to the gym", "Have dinner", "Study English"], a: 1, why: "\"... they sometimes have dinner together.\"" }
          ]
        },
        write: {
          prompt: "Write 6 sentences about your daily routine. Use at least three adverbs of frequency (always, usually, sometimes, never).",
          tips: ["Order your day from morning to night", "Put the adverb before the main verb: I usually walk", "Use \"at\" for times"],
          sample: "I always wake up at seven o'clock. I usually have a quick shower and then I have breakfast with my family. I sometimes walk to work, but when it rains I take the bus. I work from nine to five and I never skip lunch. In the evening I often study English for thirty minutes. I go to bed at about eleven."
        },
        speak: ["What time do you wake up?", "What do you do in the morning?", "How often do you study English?", "What do you do in the evening?", "Describe your perfect weekend day."],
        ex: [
          { t: "mcq", q: "She ___ to work every day.", o: ["go", "goes", "going"], a: 1, why: "Third person singular adds -es: \"goes\"." },
          { t: "fill", q: "They ___ live here.", o: ["don't", "doesn't", "aren't"], a: 0, why: "\"They\" takes \"don't\"." },
          { t: "mcq", q: "___ he play football?", o: ["Do", "Does", "Is"], a: 1, why: "Questions with he/she/it use \"Does\"." },
          { t: "match", pairs: [["always", "100% of the time"], ["usually", "about 80%"], ["sometimes", "about 50%"], ["never", "0%"]] },
          { t: "order", words: ["up", "wake", "I", "at", "six"], answer: "I wake up at six" },
          { t: "correct", wrong: "He work in a hospital.", answer: "He works in a hospital.", why: "Add -s for he / she / it in the present simple." },
          { t: "translate", q: "Translate into English: أستيقظ في السابعة", a: ["i wake up at seven", "i wake up at 7"], why: "أستيقظ = \"I wake up\"." },
          { t: "listen", text: "She usually goes to the gym after work.", q: "When does she go to the gym?", o: ["Before work", "After work", "At the weekend"], a: 1, why: "The speaker says \"after work\"." },
          { t: "vocab", q: "Which adverb means '0% of the time'?", o: ["sometimes", "never", "always"], a: 1, why: "\"Never\" means not at any time." },
          { t: "write", prompt: "Write two sentences about your evening routine.", keywords: ["i usually", "in the evening"], minWords: 12 }
        ]
      },

      /* ---------------- UNIT 6 ---------------- */
      {
        n: 6,
        title: "Where I Live",
        theme: "Home, rooms, furniture and describing places",
        lessons: [
          { t: "Types of Homes", obj: "Name different places where people live.", pts: ["I live in a flat on the third floor.", "My grandparents live in a house in the country.", "They rent a small studio in the city centre.", "We have a big garden behind the house.", "There is a lift in our building."] },
          { t: "Rooms and Furniture", obj: "Describe the rooms and objects in your home.", pts: ["There is a sofa and a television in the living room.", "The kitchen has a fridge and a cooker.", "My bedroom has a bed, a desk and a wardrobe.", "The bathroom is next to my room.", "There are two chairs at the table."] },
          { t: "There is / There are", obj: "Say what exists in a place.", pts: ["There is a park near my house.", "There are three shops on my street.", "There isn't a bank here.", "Are there any restaurants nearby?", "There are some beautiful trees."] },
          { t: "In the City or the Country", obj: "Compare city and country life with simple language.", pts: ["The city is busy and noisy.", "The country is quiet and green.", "There are more jobs in the city.", "Life is cheaper in a small town.", "I prefer the country because it is calm."] },
          { t: "Asking About Homes", obj: "Ask and answer questions about where people live.", pts: ["Where do you live?", "Do you live in a house or a flat?", "How many rooms are there?", "Is your neighbourhood safe?", "What is your favourite room?"] }
        ],
        vocab: [
          { w: "flat", ipa: "/flæt/", pos: "noun", def: "A set of rooms for living in, on one floor.", ar: "شقة", ex: "I live in a small flat." },
          { w: "kitchen", ipa: "/ˈkɪtʃɪn/", pos: "noun", def: "The room where you cook food.", ar: "مطبخ", ex: "The kitchen is very bright." },
          { w: "bedroom", ipa: "/ˈbedruːm/", pos: "noun", def: "The room where you sleep.", ar: "غرفة نوم", ex: "My bedroom is upstairs." },
          { w: "garden", ipa: "/ˈɡɑːdn/", pos: "noun", def: "An area of land with plants near a house.", ar: "حديقة", ex: "We grow tomatoes in the garden." },
          { w: "neighbour", ipa: "/ˈneɪbə/", pos: "noun", def: "A person who lives near you.", ar: "جار", ex: "Our neighbour is very friendly." },
          { w: "neighbourhood", ipa: "/ˈneɪbəhʊd/", pos: "noun", def: "The area around where you live.", ar: "حي", ex: "It is a quiet neighbourhood." },
          { w: "quiet", ipa: "/ˈkwaɪət/", pos: "adjective", def: "Making little or no noise.", ar: "هادئ", ex: "The street is very quiet at night." },
          { w: "noisy", ipa: "/ˈnɔɪzi/", pos: "adjective", def: "Making a lot of noise.", ar: "صاخب", ex: "The city centre is noisy." },
          { w: "rent", ipa: "/rent/", pos: "verb / noun", def: "To pay money to use a place; the money paid.", ar: "يستأجر / إيجار", ex: "We rent a flat near the station." },
          { w: "furniture", ipa: "/ˈfɜːnɪtʃə/", pos: "noun", def: "Things like tables, chairs and beds.", ar: "أثاث", ex: "The furniture is modern." }
        ],
        gram: {
          title: "There is / There are — saying what exists",
          explain: {
            en: "We use \"there is\" with one thing and \"there are\" with more than one. This structure is the natural way to describe a room, a street or a town.",
            ar: "نستخدم \"there is\" مع المفرد و \"there are\" مع الجمع لوصف ما يوجد في مكان.",
            fr: "On utilise « there is » au singulier et « there are » au pluriel pour décrire ce qui existe."
          },
          formula: ['<span class="fx-k">There is</span> + singular → There is <span class="fx-v">a park</span> near here.', '<span class="fx-k">There are</span> + plural → There are <span class="fx-v">two shops</span>.', 'Negative: There <span class="fx-k">isn\'t / aren\'t</span> any ...', 'Question: <span class="fx-k">Is / Are</span> there ...? → <span class="fx-k">Are</span> there any buses?'],
          examples: [
            { en: "There is a big market in my town.", ar: "هناك سوق كبير في مدينتي." },
            { en: "There are four people in my family.", ar: "هناك أربعة أشخاص في عائلتي." },
            { en: "There isn't a cinema here.", ar: "لا توجد سينما هنا." },
            { en: "Is there a bank near the station?", ar: "هل يوجد بنك قرب المحطة؟" }
          ],
          mistakes: [
            { w: "There is three rooms.", r: "There are three rooms.", why: "Plural nouns take \"there are\"." },
            { w: "It has a park near my house.", r: "There is a park near my house.", why: "Use \"there is\" to say something exists in a place." },
            { w: "There are a sofa in the room.", r: "There is a sofa in the room.", why: "\"A sofa\" is singular." }
          ]
        },
        listen: {
          title: "Looking for a flat",
          lines: [
            { who: "Agent", text: "Good morning. How can I help you?" },
            { who: "Client", text: "I'm looking for a flat near the university." },
            { who: "Agent", text: "I have one on Green Street. There are two bedrooms and a big kitchen." },
            { who: "Client", text: "Is there a balcony?" },
            { who: "Agent", text: "Yes, and there is a small garden too. The rent is four hundred a month." },
            { who: "Client", text: "That sounds good. Is the neighbourhood quiet?" },
            { who: "Agent", text: "Very quiet. There are no bars, only a park and a small shop." }
          ],
          q: [
            { q: "Where does the client want to live?", o: ["Near the university", "In the city centre", "Near the airport"], a: 0, why: "\"I'm looking for a flat near the university.\"" },
            { q: "How many bedrooms are there?", o: ["One", "Two", "Three"], a: 1, why: "\"There are two bedrooms and a big kitchen.\"" },
            { q: "What is the neighbourhood like?", o: ["Noisy and busy", "Very quiet", "Dangerous"], a: 1, why: "\"Very quiet. There are no bars, only a park and a small shop.\"" }
          ]
        },
        read: {
          title: "My small flat",
          text: "I live in a small flat on the second floor of an old building. There are three rooms: a living room, a bedroom and a kitchen. The bathroom is very small but clean. In the living room there is a blue sofa, a table and a lot of books. My favourite place is the balcony. From there I can see the sea and the roofs of the old town. The neighbours are friendly and the street is quiet. I don't have a garden, but I have a lot of plants inside.",
          q: [
            { q: "How many rooms does the flat have?", o: ["Two", "Three", "Four"], a: 1, why: "The writer lists a living room, a bedroom and a kitchen — three rooms." },
            { q: "What can the writer see from the balcony?", o: ["A garden", "The sea and the roofs of the old town", "A park"], a: 1, why: "\"From there I can see the sea and the roofs of the old town.\"" },
            { q: "What does the writer not have?", o: ["A garden", "Plants", "A sofa"], a: 0, why: "\"I don't have a garden, but I have a lot of plants inside.\"" }
          ]
        },
        write: {
          prompt: "Describe your home in 5–6 sentences. Say what type of home it is, how many rooms there are, and what your favourite room is.",
          tips: ["Use \"there is / there are\"", "Name at least three pieces of furniture", "Say why you like your favourite room"],
          sample: "I live in a flat on the fourth floor with my family. There are four rooms: a living room, two bedrooms and a kitchen. In the living room there is a large grey sofa and a television. My favourite room is my bedroom because it is quiet and I can study there. From my window I can see a park with tall trees."
        },
        speak: ["Where do you live?", "Do you live in a house or a flat?", "How many rooms are there?", "What is your favourite room and why?", "Describe your neighbourhood in two sentences."],
        ex: [
          { t: "mcq", q: "There ___ three books on the table.", o: ["is", "are", "be"], a: 1, why: "\"Three books\" is plural, so we use \"are\"." },
          { t: "fill", q: "There ___ a park near my house.", o: ["is", "are", "have"], a: 0, why: "\"A park\" is singular, so we use \"is\"." },
          { t: "mcq", q: "___ there any shops on this street?", o: ["Is", "Are", "Do"], a: 1, why: "\"Shops\" is plural, so we use \"Are there\"." },
          { t: "match", pairs: [["kitchen", "where you cook"], ["bedroom", "where you sleep"], ["garden", "land with plants outside"], ["neighbour", "a person living near you"]] },
          { t: "order", words: ["a", "There", "is", "in", "my", "garden"], answer: "There is a garden in my" },
          { t: "translate", q: "Translate into English: أسكن في شقة", a: ["i live in a flat", "i live in an apartment"], why: "أسكن = \"I live\"." },
          { t: "correct", wrong: "There is three rooms in my house.", answer: "There are three rooms in my house.", why: "Plural nouns take \"there are\"." },
          { t: "vocab", q: "Which room do you cook in?", o: ["bedroom", "kitchen", "garden"], a: 1, why: "You cook in the kitchen." },
          { t: "listen", text: "There is a small garden behind the house.", q: "Where is the garden?", o: ["In front of the house", "Behind the house", "On the roof"], a: 1, why: "The speaker says \"behind the house\"." },
          { t: "write", prompt: "Describe your bedroom in three sentences using 'there is' and 'there are'.", keywords: ["there is", "there are"], minWords: 15 }
        ]
      },

      /* ---------------- UNIT 7 ---------------- */
      {
        n: 7,
        title: "Work & Study",
        theme: "Jobs, school subjects and talking about your studies",
        lessons: [
          { t: "Jobs and Professions", obj: "Name common jobs and say what people do.", pts: ["I am a student. / I am an engineer.", "She is a doctor. She works in a hospital.", "He is a driver. He drives a taxi.", "My mother is a teacher. She teaches maths.", "What do you do for a living?"] },
          { t: "At School and University", obj: "Talk about subjects and your studies.", pts: ["I study English and maths.", "My favourite subject is history.", "I have four classes every day.", "We take exams in June.", "I want to go to university next year."] },
          { t: "Talking About Your Job", obj: "Describe your work in simple terms.", pts: ["I work in an office.", "I start work at nine and finish at five.", "I work with computers.", "I have a lot of meetings.", "My job is interesting but difficult."] },
          { t: "Asking About Work", obj: "Ask other people about their jobs.", pts: ["What do you do?", "Where do you work?", "Do you like your job?", "How many hours do you work?", "Is your job difficult?"] },
          { t: "Future Plans (going to)", obj: "Say what you are going to do next.", pts: ["I am going to study medicine.", "She is going to look for a new job.", "We are going to move to another city.", "I am not going to stop learning English.", "What are you going to do next year?"] }
        ],
        vocab: [
          { w: "job", ipa: "/dʒɒb/", pos: "noun", def: "The work a person does to earn money.", ar: "وظيفة", ex: "I have a new job." },
          { w: "engineer", ipa: "/ˌendʒɪˈnɪə/", pos: "noun", def: "A person who designs machines or structures.", ar: "مهندس", ex: "She is a civil engineer." },
          { w: "nurse", ipa: "/nɜːs/", pos: "noun", def: "A person who cares for sick people.", ar: "ممرض", ex: "My aunt is a nurse." },
          { w: "salary", ipa: "/ˈsæləri/", pos: "noun", def: "Money paid to you every month for work.", ar: "راتب", ex: "The salary is good." },
          { w: "subject", ipa: "/ˈsʌbdʒɪkt/", pos: "noun", def: "A topic you study at school.", ar: "مادة دراسية", ex: "Science is my favourite subject." },
          { w: "exam", ipa: "/ɪɡˈzæm/", pos: "noun", def: "A test of your knowledge.", ar: "امتحان", ex: "I have an exam on Friday." },
          { w: "office", ipa: "/ˈɒfɪs/", pos: "noun", def: "A room or building where people work.", ar: "مكتب", ex: "I work in a small office." },
          { w: "university", ipa: "/ˌjuːnɪˈvɜːsəti/", pos: "noun", def: "A place where you study after school.", ar: "جامعة", ex: "He studies at university." },
          { w: "meeting", ipa: "/ˈmiːtɪŋ/", pos: "noun", def: "A time when people come together to talk about work.", ar: "اجتماع", ex: "I have a meeting at ten." },
          { w: "experience", ipa: "/ɪkˈspɪəriəns/", pos: "noun", def: "Knowledge you get from doing something.", ar: "خبرة", ex: "I need more experience." }
        ],
        gram: {
          title: "Talking about the future with \"going to\"",
          explain: {
            en: "Use \"be going to + verb\" to talk about plans and intentions you have already decided. It is the easiest future form in English.",
            ar: "نستخدم \"be going to\" مع الفعل للتحدث عن الخطط والنوايا التي قررتها مسبقا.",
            fr: "On utilise « be going to + verbe » pour parler de projets déjà décidés."
          },
          formula: ['Subject + <span class="fx-k">am / is / are</span> + <span class="fx-k">going to</span> + <span class="fx-v">verb</span>', 'I <span class="fx-k">am going to</span> <span class="fx-v">study</span> medicine.', 'Negative: She <span class="fx-k">isn\'t going to</span> <span class="fx-v">come</span>.', 'Question: <span class="fx-k">Are</span> you <span class="fx-k">going to</span> <span class="fx-v">work</span> tomorrow?'],
          examples: [
            { en: "I am going to look for a new job.", ar: "سأبحث عن وظيفة جديدة." },
            { en: "We are going to visit my uncle next week.", ar: "سنزور عمي الأسبوع القادم." },
            { en: "She is not going to study tonight.", ar: "هي لن تدرس الليلة." },
            { en: "Are you going to take the exam?", ar: "هل ستقدم الامتحان؟" }
          ],
          mistakes: [
            { w: "I going to study.", r: "I am going to study.", why: "Do not forget the verb \"am / is / are\"." },
            { w: "She is going to studies.", r: "She is going to study.", why: "After \"going to\" use the base verb." },
            { w: "I am go to work.", r: "I am going to work.", why: "The form is \"going to\", not \"go to\"." }
          ]
        },
        listen: {
          title: "A job interview",
          lines: [
            { who: "Manager", text: "Good morning. Please sit down. What do you do at the moment?" },
            { who: "Candidate", text: "I am a sales assistant. I work in a clothes shop." },
            { who: "Manager", text: "How long have you worked there?" },
            { who: "Candidate", text: "For two years. I am going to look for something more interesting." },
            { who: "Manager", text: "Can you work at the weekend?" },
            { who: "Candidate", text: "Yes, I can. I am also going to start an English course in September." },
            { who: "Manager", text: "That is good news. We need English here." }
          ],
          q: [
            { q: "What is the candidate's current job?", o: ["A sales assistant", "A manager", "A teacher"], a: 0, why: "\"I am a sales assistant. I work in a clothes shop.\"" },
            { q: "How long has the candidate worked there?", o: ["Six months", "Two years", "Ten years"], a: 1, why: "\"For two years.\"" },
            { q: "What is the candidate going to start?", o: ["A new shop", "An English course", "A university degree"], a: 1, why: "\"I am also going to start an English course in September.\"" }
          ]
        },
        read: {
          title: "My work and my plan",
          text: "My name is Tarek and I am twenty-eight. I work as a technician in a car factory. I start at seven in the morning and I finish at three. The work is hard, but the salary is good and my colleagues are friendly. I am going to change my life next year. I am going to study engineering at university in the evening. It is going to be difficult with a full-time job, but I am not going to give up. My dream is to become a design engineer.",
          q: [
            { q: "What is Tarek's job?", o: ["A technician in a car factory", "A design engineer", "A university teacher"], a: 0, why: "\"I work as a technician in a car factory.\"" },
            { q: "What is he going to do next year?", o: ["Change his job", "Study engineering", "Move abroad"], a: 1, why: "\"I am going to study engineering at university in the evening.\"" },
            { q: "How does he feel about the difficulty?", o: ["He is going to give up", "He is not going to give up", "He is not sure"], a: 1, why: "\"... but I am not going to give up.\"" }
          ]
        },
        write: {
          prompt: "Write 5–6 sentences about your work or studies, and one plan for the future using \"going to\".",
          tips: ["Say what you do and where", "Say what you like and don't like about it", "Finish with a future plan"],
          sample: "I am a student at a technical school. I study electricity and mathematics. I like my studies because the teachers are helpful, but the exams are difficult. I usually study in the evening after dinner. Next year I am going to look for a job in a small company. I am also going to continue learning English because I need it for my career."
        },
        speak: ["What do you do?", "Where do you work or study?", "Do you like your job or your studies?", "What are you going to do next year?", "What is your dream job?"],
        ex: [
          { t: "mcq", q: "What ___ you do?", o: ["do", "does", "are"], a: 0, why: "Questions with \"you\" use \"do\"." },
          { t: "mcq", q: "I ___ going to study medicine.", o: ["am", "is", "are"], a: 0, why: "With \"I\" we use \"am\"." },
          { t: "fill", q: "She ___ to look for a new job.", o: ["is going", "are going", "am going"], a: 0, why: "With \"she\" we use \"is going to\"." },
          { t: "match", pairs: [["teacher", "works in a school"], ["nurse", "works in a hospital"], ["driver", "drives a vehicle"], ["engineer", "designs machines"]] },
          { t: "order", words: ["work", "I", "in", "an", "office"], answer: "I work in an office" },
          { t: "translate", q: "Translate into English: ما عملك؟", a: ["what do you do", "what is your job"], why: "ما عملك = \"What do you do?\"" },
          { t: "correct", wrong: "I going to study English.", answer: "I am going to study English.", why: "The verb \"am\" is needed before \"going to\"." },
          { t: "vocab", q: "A person who cares for sick people is a ___.", o: ["nurse", "driver", "engineer"], a: 0, why: "A nurse looks after patients." },
          { t: "listen", text: "I start work at nine and finish at five.", q: "When does the speaker finish work?", o: ["At nine", "At five", "At seven"], a: 1, why: "The speaker says \"finish at five\"." },
          { t: "write", prompt: "Write two sentences about your future plans using 'going to'.", keywords: ["going to"], minWords: 12 }
        ]
      },

      /* ---------------- UNIT 8 ---------------- */
      {
        n: 8,
        title: "Clothes & Shopping",
        theme: "Clothes, colours, sizes, prices and shopping conversations",
        lessons: [
          { t: "Clothes Vocabulary", obj: "Name the clothes you wear.", pts: ["I wear a shirt and trousers to work.", "She is wearing a red dress.", "He puts on a jacket and shoes.", "In winter I wear a coat, a scarf and gloves.", "These shoes are too small."] },
          { t: "Colours and Sizes", obj: "Describe colour and size accurately.", pts: ["Do you have this in blue?", "I need a size medium.", "This shirt is too big for me.", "I prefer dark colours.", "The small one is cheaper."] },
          { t: "How Much Is It?", obj: "Ask about prices and pay.", pts: ["How much is this jacket?", "It costs forty euros.", "That is too expensive.", "Do you have anything cheaper?", "Can I pay by card?"] },
          { t: "In the Shop", obj: "Run a simple shopping conversation.", pts: ["Can I help you?", "I'm just looking, thank you.", "Can I try this on?", "Where is the fitting room?", "I'll take it, thank you."] },
          { t: "Shopping for Gifts", obj: "Choose and buy a present for someone.", pts: ["I am looking for a present for my sister.", "She likes jewellery and perfume.", "How about this bag?", "It is a lovely gift.", "I will buy it — can you wrap it, please?"] }
        ],
        vocab: [
          { w: "shirt", ipa: "/ʃɜːt/", pos: "noun", def: "A piece of clothing for the upper body with buttons.", ar: "قميص", ex: "He wears a white shirt." },
          { w: "trousers", ipa: "/ˈtraʊzəz/", pos: "noun", def: "Clothing for the legs, with two parts.", ar: "بنطال", ex: "These trousers are too long." },
          { w: "jacket", ipa: "/ˈdʒækɪt/", pos: "noun", def: "A short coat.", ar: "سترة", ex: "Take your jacket — it's cold." },
          { w: "shoes", ipa: "/ʃuːz/", pos: "noun", def: "Things you wear on your feet.", ar: "حذاء", ex: "My shoes are old." },
          { w: "dress", ipa: "/dres/", pos: "noun", def: "A piece of clothing worn mainly by women, covering the body.", ar: "فستان", ex: "She bought a blue dress." },
          { w: "expensive", ipa: "/ɪkˈspensɪv/", pos: "adjective", def: "Costing a lot of money.", ar: "غالي", ex: "That watch is too expensive." },
          { w: "cheap", ipa: "/tʃiːp/", pos: "adjective", def: "Not costing much money.", ar: "رخيص", ex: "The market is cheaper than the mall." },
          { w: "size", ipa: "/saɪz/", pos: "noun", def: "How big or small something is.", ar: "مقاس", ex: "What size do you wear?" },
          { w: "price", ipa: "/praɪs/", pos: "noun", def: "The amount of money you must pay.", ar: "سعر", ex: "The price is reasonable." },
          { w: "try on", ipa: "/traɪ ɒn/", pos: "phrasal verb", def: "To put clothes on to see if they fit.", ar: "يقيس", ex: "Can I try this on?" }
        ],
        gram: {
          title: "This / that / these / those + too and enough",
          explain: {
            en: "\"This\" and \"these\" are for things near you; \"that\" and \"those\" are for things further away. \"Too\" means more than you want; \"enough\" means as much as you need.",
            ar: "\"This\" و \"these\" للأشياء القريبة، و \"that\" و \"those\" للأشياء البعيدة. و \"too\" تعني أكثر من اللازم، و \"enough\" تعني بالقدر الكافي.",
            fr: "« this/these » désignent ce qui est proche, « that/those » ce qui est éloigné. « too » = trop, « enough » = assez."
          },
          formula: ['<span class="fx-k">this</span> shirt (singular, near) · <span class="fx-k">these</span> shoes (plural, near)', '<span class="fx-k">that</span> jacket (singular, far) · <span class="fx-k">those</span> trousers (plural, far)', '<span class="fx-k">too</span> + adjective → This is <span class="fx-k">too</span> <span class="fx-v">expensive</span>.', 'adjective + <span class="fx-k">enough</span> → This is <span class="fx-v">big</span> <span class="fx-k">enough</span>.'],
          examples: [
            { en: "This jacket is nice, but it is too small.", ar: "هذه السترة جميلة لكنها صغيرة جدا." },
            { en: "Those shoes are cheaper than these.", ar: "تلك الأحذية أرخص من هذه." },
            { en: "The dress is big enough for me.", ar: "الفستان كبير بما يكفي لي." },
            { en: "These trousers are too long.", ar: "هذا البنطال طويل جدا." }
          ],
          mistakes: [
            { w: "This shoes are nice.", r: "These shoes are nice.", why: "\"Shoes\" is plural, so use \"these\"." },
            { w: "It's too much expensive.", r: "It's too expensive.", why: "Do not use \"much\" with \"too\" before a short adjective." },
            { w: "The shirt is enough big.", r: "The shirt is big enough.", why: "\"Enough\" comes after the adjective." }
          ]
        },
        listen: {
          title: "At the clothes shop",
          lines: [
            { who: "Assistant", text: "Hello, can I help you?" },
            { who: "Customer", text: "Yes, I'm looking for a jacket. Something warm." },
            { who: "Assistant", text: "What size are you?" },
            { who: "Customer", text: "Medium. Do you have this one in black?" },
            { who: "Assistant", text: "We have it in black and in dark blue. It's sixty-five pounds." },
            { who: "Customer", text: "Can I try it on?" },
            { who: "Assistant", text: "Of course. The fitting room is over there." },
            { who: "Customer", text: "It fits perfectly. I'll take it." }
          ],
          q: [
            { q: "What is the customer looking for?", o: ["A jacket", "A dress", "Some shoes"], a: 0, why: "\"I'm looking for a jacket.\"" },
            { q: "What size is the customer?", o: ["Small", "Medium", "Large"], a: 1, why: "\"Medium. Do you have this one in black?\"" },
            { q: "How much is the jacket?", o: ["Sixty pounds", "Sixty-five pounds", "Fifteen pounds"], a: 1, why: "\"It's sixty-five pounds.\"" }
          ]
        },
        read: {
          title: "Shopping in the market",
          text: "In my city there is a big market on Sundays. I never buy clothes in the shopping centre because everything is too expensive there. In the market you can find cheap trousers, nice shirts and beautiful leather bags. Last week I bought a grey jacket for only twenty euros. The seller was very friendly and he gave me a small discount. My sister prefers the shopping centre because there are more sizes and she can try things on in a quiet room.",
          q: [
            { q: "When is the market open?", o: ["On Sundays", "On Mondays", "Every day"], a: 0, why: "\"In my city there is a big market on Sundays.\"" },
            { q: "Why doesn't the writer buy clothes in the shopping centre?", o: ["There is no choice", "Everything is too expensive", "It is too far"], a: 1, why: "\"... because everything is too expensive there.\"" },
            { q: "Why does his sister prefer the shopping centre?", o: ["It is cheaper", "There are more sizes and she can try things on", "She likes the music"], a: 1, why: "\"... because there are more sizes and she can try things on in a quiet room.\"" }
          ]
        },
        write: {
          prompt: "Write 5 sentences describing what you are wearing today and one item of clothing you want to buy.",
          tips: ["Use present continuous: I am wearing ...", "Name colours and sizes", "Use \"too\" or \"enough\" at least once"],
          sample: "Today I am wearing a blue shirt, black trousers and brown shoes. I am also wearing a light jacket because it is cold. I like these clothes because they are simple and comfortable. Next month I am going to buy a new winter coat. The one I like is a little too expensive, but I am going to wait for the sales."
        },
        speak: ["What are you wearing today?", "What clothes do you wear at work?", "Do you prefer cheap or expensive clothes? Why?", "Describe your favourite piece of clothing.", "Role-play: ask for a jacket in your size."],
        ex: [
          { t: "mcq", q: "How much ___ this jacket?", o: ["is", "are", "cost"], a: 0, why: "\"Jacket\" is singular, so we use \"is\"." },
          { t: "mcq", q: "___ shoes are too small.", o: ["This", "These", "That"], a: 1, why: "\"Shoes\" is plural and near, so \"These\"." },
          { t: "fill", q: "This shirt is ___ expensive for me.", o: ["too", "enough", "very much"], a: 0, why: "\"Too\" means more than we want." },
          { t: "match", pairs: [["cheap", "not costing much"], ["expensive", "costing a lot"], ["size", "how big something is"], ["try on", "put clothes on to test them"]] },
          { t: "order", words: ["I", "try", "can", "this", "on"], answer: "I can try this on" },
          { t: "translate", q: "Translate into English: بكم هذا القميص؟", a: ["how much is this shirt", "how much is this t-shirt"], why: "بكم = \"How much is\"." },
          { t: "correct", wrong: "This shoes are nice.", answer: "These shoes are nice.", why: "\"Shoes\" is plural, so we use \"these\"." },
          { t: "vocab", q: "You wear these on your feet:", o: ["shoes", "gloves", "scarf"], a: 0, why: "Shoes go on your feet; gloves on your hands." },
          { t: "listen", text: "Do you have this jacket in a medium size?", q: "What does the customer want?", o: ["A smaller jacket", "A medium jacket", "A larger jacket"], a: 1, why: "The customer asks for a medium size." },
          { t: "write", prompt: "Write one sentence asking the price of something politely.", keywords: ["how much"], minWords: 5 }
        ]
      },

      /* ---------------- UNIT 9 ---------------- */
      {
        n: 9,
        title: "Free Time & Hobbies",
        theme: "Sports, hobbies, invitations and making arrangements",
        lessons: [
          { t: "Sports and Exercise", obj: "Talk about the sports you play and watch.", pts: ["I play football every Saturday.", "She goes swimming twice a week.", "He doesn't like running.", "I watch basketball on television.", "Do you do any sport?"] },
          { t: "Hobbies and Interests", obj: "Name hobbies and say how you spend free time.", pts: ["I enjoy reading novels.", "My hobby is photography.", "She likes cooking and baking.", "I am interested in music.", "We love travelling to new places."] },
          { t: "Like / Love / Hate + -ing", obj: "Express preferences with verb + -ing.", pts: ["I love swimming in the sea.", "She enjoys drawing.", "He doesn't mind waiting.", "I hate getting up early.", "Do you like dancing?"] },
          { t: "Making Invitations", obj: "Invite someone and respond.", pts: ["Would you like to come to a party?", "Do you want to play tennis on Sunday?", "That sounds great!", "Sorry, I can't. Maybe another time.", "Let's meet at the sports centre."] },
          { t: "Talking About the Weekend", obj: "Say what you did or usually do at the weekend.", pts: ["At the weekend I usually visit my cousins.", "Last weekend we went to the beach.", "I stayed at home and watched films.", "It was a relaxing weekend.", "What did you do at the weekend?"] }
        ],
        vocab: [
          { w: "hobby", ipa: "/ˈhɒbi/", pos: "noun", def: "Something you enjoy doing in your free time.", ar: "هواية", ex: "My hobby is photography." },
          { w: "swimming", ipa: "/ˈswɪmɪŋ/", pos: "noun", def: "The sport of moving through water.", ar: "سباحة", ex: "Swimming is good exercise." },
          { w: "drawing", ipa: "/ˈdrɔːɪŋ/", pos: "noun", def: "Making pictures with a pencil or pen.", ar: "رسم", ex: "She is very good at drawing." },
          { w: "gym", ipa: "/dʒɪm/", pos: "noun", def: "A place with equipment for exercise.", ar: "صالة رياضية", ex: "I go to the gym twice a week." },
          { w: "invite", ipa: "/ɪnˈvaɪt/", pos: "verb", def: "To ask someone to come to an event.", ar: "يدعو", ex: "They invited us to dinner." },
          { w: "enjoy", ipa: "/ɪnˈdʒɔɪ/", pos: "verb", def: "To get pleasure from something.", ar: "يستمتع", ex: "I enjoy learning languages." },
          { w: "boring", ipa: "/ˈbɔːrɪŋ/", pos: "adjective", def: "Not interesting.", ar: "ممل", ex: "The film was boring." },
          { w: "exciting", ipa: "/ɪkˈsaɪtɪŋ/", pos: "adjective", def: "Making you feel happy and interested.", ar: "مثير", ex: "It was an exciting match." },
          { w: "match", ipa: "/mætʃ/", pos: "noun", def: "A sports competition between two teams.", ar: "مباراة", ex: "The match starts at eight." },
          { w: "free time", ipa: "/friː taɪm/", pos: "noun", def: "Time when you are not working or studying.", ar: "وقت الفراغ", ex: "What do you do in your free time?" }
        ],
        gram: {
          title: "Verbs of preference + -ing",
          explain: {
            en: "After verbs like like, love, enjoy, hate, don't mind and prefer, we use a verb ending in -ing. This is one of the most common patterns in everyday English.",
            ar: "بعد أفعال مثل like و love و enjoy و hate نستخدم الفعل مضافا إليه ing.",
            fr: "Après like, love, enjoy, hate, on utilise le verbe en -ing."
          },
          formula: ['<span class="fx-k">like / love / enjoy / hate</span> + <span class="fx-v">verb-ing</span>', 'I <span class="fx-k">enjoy</span> <span class="fx-v">reading</span> novels.', 'She <span class="fx-k">hates</span> <span class="fx-v">getting</span> up early.', 'Question: <span class="fx-k">Do</span> you <span class="fx-k">like</span> <span class="fx-v">cooking</span>?'],
          examples: [
            { en: "I love swimming in the sea.", ar: "أحب السباحة في البحر." },
            { en: "He enjoys playing the guitar.", ar: "يستمتع بالعزف على الجيتار." },
            { en: "They don't like waiting in queues.", ar: "لا يحبون الانتظار في الصفوف." },
            { en: "Do you like dancing?", ar: "هل تحب الرقص؟" }
          ],
          mistakes: [
            { w: "I enjoy to read.", r: "I enjoy reading.", why: "\"Enjoy\" is always followed by -ing." },
            { w: "She likes swim.", r: "She likes swimming.", why: "After \"like\" we use the -ing form for hobbies." },
            { w: "I hate get up early.", r: "I hate getting up early.", why: "Use the -ing form after \"hate\"." }
          ]
        },
        listen: {
          title: "Weekend plans",
          lines: [
            { who: "Karim", text: "Hi Dina! Do you want to play tennis on Saturday?" },
            { who: "Dina", text: "I'd love to, but I'm busy in the morning." },
            { who: "Karim", text: "How about the afternoon? Around four?" },
            { who: "Dina", text: "That works. Where shall we meet?" },
            { who: "Karim", text: "At the sports centre. It's near the park." },
            { who: "Dina", text: "Perfect. And after that, would you like to get a coffee?" },
            { who: "Karim", text: "Great idea. See you on Saturday!" }
          ],
          q: [
            { q: "What sport do they plan to play?", o: ["Football", "Tennis", "Basketball"], a: 1, why: "\"Do you want to play tennis on Saturday?\"" },
            { q: "Why can't Dina meet in the morning?", o: ["She is busy", "She is travelling", "She doesn't like tennis"], a: 0, why: "\"I'd love to, but I'm busy in the morning.\"" },
            { q: "Where will they meet?", o: ["At the park", "At the sports centre", "At a café"], a: 1, why: "\"At the sports centre. It's near the park.\"" }
          ]
        },
        read: {
          title: "Everyone needs a hobby",
          text: "My brother Samir is crazy about sport. He plays football three times a week and he goes running every morning before work. He also enjoys watching basketball on television. My hobbies are very different. I hate running, and I don't like the gym at all. I love reading and I am interested in photography. At the weekend I take my camera and walk around the old city. I take photos of doors, markets and people. It is relaxing and it costs nothing.",
          q: [
            { q: "How often does Samir play football?", o: ["Every day", "Three times a week", "Once a month"], a: 1, why: "\"He plays football three times a week.\"" },
            { q: "What does the writer think about the gym?", o: ["He loves it", "He doesn't like it at all", "He goes every day"], a: 1, why: "\"I don't like the gym at all.\"" },
            { q: "What does the writer photograph?", o: ["Sports matches", "Doors, markets and people", "His brother"], a: 1, why: "\"I take photos of doors, markets and people.\"" }
          ]
        },
        write: {
          prompt: "Write 6 sentences about your free time: two things you love, one thing you hate, and how often you do them.",
          tips: ["Use love / enjoy / like / don't mind / hate + -ing", "Add frequency words: always, twice a week", "Say why you enjoy your favourite hobby"],
          sample: "In my free time I love listening to music and reading detective novels. I usually read for thirty minutes before I sleep. I also enjoy cooking with my mother at the weekend, because we laugh a lot. I don't mind doing sport, but I hate running in the cold. Twice a week I play table tennis with my cousin. It is not expensive and it is a lot of fun."
        },
        speak: ["What do you do in your free time?", "Do you play any sport?", "What is your favourite hobby and why?", "Invite me to do something this weekend.", "What did you do last weekend?"],
        ex: [
          { t: "mcq", q: "I enjoy ___ novels.", o: ["read", "reading", "to read"], a: 1, why: "\"Enjoy\" is followed by the -ing form." },
          { t: "fill", q: "She likes ___ in the sea.", o: ["swim", "swimming", "swims"], a: 1, why: "After \"like\" we use -ing for hobbies." },
          { t: "mcq", q: "Would you like ___ to a party?", o: ["come", "coming", "to come"], a: 2, why: "\"Would you like\" is followed by \"to + verb\"." },
          { t: "match", pairs: [["boring", "not interesting"], ["exciting", "making you feel interested"], ["hobby", "activity you enjoy in free time"], ["gym", "place to exercise"]] },
          { t: "order", words: ["love", "I", "swimming", "in", "the", "sea"], answer: "I love swimming in the sea" },
          { t: "translate", q: "Translate into English: أحب القراءة", a: ["i love reading", "i like reading", "i enjoy reading"], why: "أحب = \"I love\" + -ing." },
          { t: "correct", wrong: "I enjoy to read books.", answer: "I enjoy reading books.", why: "\"Enjoy\" always takes the -ing form." },
          { t: "vocab", q: "Which word means 'not interesting'?", o: ["exciting", "boring", "relaxing"], a: 1, why: "\"Boring\" means not interesting." },
          { t: "listen", text: "I usually play football with my friends on Saturdays.", q: "What does the speaker do on Saturdays?", o: ["Plays football", "Watches films", "Goes swimming"], a: 0, why: "The speaker says \"play football ... on Saturdays\"." },
          { t: "write", prompt: "Write two sentences about your hobbies using 'I love' and 'I hate'.", keywords: ["i love", "i hate"], minWords: 14 }
        ]
      },

      /* ---------------- UNIT 10 ---------------- */
      {
        n: 10,
        title: "Travel & Directions",
        theme: "Transport, tickets, hotels and asking the way",
        lessons: [
          { t: "Transport and Tickets", obj: "Talk about how you travel and buy tickets.", pts: ["I go to work by bus.", "A single ticket to the centre, please.", "The train leaves at nine fifteen.", "How long does the journey take?", "Is this seat free?"] },
          { t: "Asking for Directions", obj: "Ask where places are and understand the answer.", pts: ["Excuse me, where is the station?", "Go straight on and turn left.", "It's opposite the bank.", "It's about five minutes on foot.", "Is it far from here?"] },
          { t: "At the Hotel", obj: "Check in and ask about hotel services.", pts: ["I have a reservation for two nights.", "Could I see your passport, please?", "What time is breakfast?", "Is there Wi-Fi in the room?", "Could I have the key, please?"] },
          { t: "At the Airport", obj: "Handle simple airport situations.", pts: ["Where is the check-in desk?", "Here is my boarding pass.", "Is the flight delayed?", "Your gate is number twelve.", "Have a good flight!"] },
          { t: "Talking About a Trip", obj: "Describe a trip you took.", pts: ["Last summer I travelled to Turkey.", "We stayed in a small hotel.", "The food was delicious.", "I took a lot of photos.", "It was an amazing trip."] }
        ],
        vocab: [
          { w: "ticket", ipa: "/ˈtɪkɪt/", pos: "noun", def: "A paper or card that lets you travel or enter.", ar: "تذكرة", ex: "Two tickets to London, please." },
          { w: "train", ipa: "/treɪn/", pos: "noun", def: "A line of connected vehicles that runs on rails.", ar: "قطار", ex: "The train is faster than the bus." },
          { w: "airport", ipa: "/ˈeəpɔːt/", pos: "noun", def: "A place where planes take off and land.", ar: "مطار", ex: "The airport is far from the city." },
          { w: "journey", ipa: "/ˈdʒɜːni/", pos: "noun", def: "The act of travelling from one place to another.", ar: "رحلة", ex: "The journey takes two hours." },
          { w: "left", ipa: "/left/", pos: "adverb", def: "Towards the side opposite to right.", ar: "يسار", ex: "Turn left at the corner." },
          { w: "right", ipa: "/raɪt/", pos: "adverb", def: "Towards the side opposite to left.", ar: "يمين", ex: "The bank is on your right." },
          { w: "straight", ipa: "/streɪt/", pos: "adverb", def: "Directly forward, without turning.", ar: "مستقيم", ex: "Go straight on for 200 metres." },
          { w: "opposite", ipa: "/ˈɒpəzɪt/", pos: "preposition", def: "Facing something across from it.", ar: "مقابل", ex: "The café is opposite the park." },
          { w: "book", ipa: "/bʊk/", pos: "verb", def: "To arrange and reserve something in advance.", ar: "يحجز", ex: "I booked a room online." },
          { w: "luggage", ipa: "/ˈlʌɡɪdʒ/", pos: "noun", def: "The bags you take when you travel.", ar: "أمتعة", ex: "Where can I leave my luggage?" }
        ],
        gram: {
          title: "Imperatives — giving directions",
          explain: {
            en: "The imperative is the base form of the verb with no subject. We use it for instructions, directions and advice. Add \"don't\" for the negative.",
            ar: "صيغة الأمر هي الفعل بصيغته الأساسية بدون فاعل، ونستخدمها للتعليمات والإرشادات. وللنفي نضيف don't.",
            fr: "L'impératif utilise la base verbale sans sujet. On l'emploie pour les instructions et les directions."
          },
          formula: ['<span class="fx-v">Go</span> straight on. · <span class="fx-v">Turn</span> left. · <span class="fx-v">Take</span> the second street.', 'Negative: <span class="fx-k">Don\'t</span> <span class="fx-v">cross</span> here.', 'Polite: <span class="fx-k">Could you</span> <span class="fx-v">tell</span> me the way?', 'Sequence: First ..., then ..., finally ...'],
          examples: [
            { en: "Go straight on and turn right at the lights.", ar: "امش مستقيمًا ثم انعطف يمينا عند الإشارة." },
            { en: "Take the first street on the left.", ar: "خذ أول شارع على اليسار." },
            { en: "Don't cross the road here.", ar: "لا تعبر الطريق هنا." },
            { en: "Could you tell me where the station is?", ar: "هل يمكنك أن تخبرني أين المحطة؟" }
          ],
          mistakes: [
            { w: "You go straight.", r: "Go straight.", why: "Directions normally drop the subject and use the imperative." },
            { w: "Turn on left.", r: "Turn left.", why: "We say \"turn left / turn right\" without a preposition." },
            { w: "Don't to cross here.", r: "Don't cross here.", why: "After \"don't\" use the base verb." }
          ]
        },
        listen: {
          title: "Asking the way",
          lines: [
            { who: "Tourist", text: "Excuse me, could you tell me the way to the museum?" },
            { who: "Local", text: "Of course. Go straight on for about two hundred metres." },
            { who: "Tourist", text: "Straight on. And then?" },
            { who: "Local", text: "Then turn left at the traffic lights. The museum is opposite the park." },
            { who: "Tourist", text: "Is it far?" },
            { who: "Local", text: "No, it's only five minutes on foot." },
            { who: "Tourist", text: "Thank you so much!" }
          ],
          q: [
            { q: "Where does the tourist want to go?", o: ["To the museum", "To the station", "To the park"], a: 0, why: "\"... the way to the museum?\"" },
            { q: "Where should the tourist turn left?", o: ["At the bank", "At the traffic lights", "At the market"], a: 1, why: "\"Then turn left at the traffic lights.\"" },
            { q: "How long is the walk?", o: ["Twenty minutes", "Five minutes", "One hour"], a: 1, why: "\"It's only five minutes on foot.\"" }
          ]
        },
        read: {
          title: "My trip to Istanbul",
          text: "Last summer I travelled to Istanbul with my cousin. We flew from Casablanca and the flight took four hours. We booked a small hotel near the Blue Mosque, and the room had a beautiful view of the sea. Every morning we had breakfast on the roof. We visited the old market, took a boat trip and ate amazing food. The people were very kind. On the last day I bought a small carpet for my mother. It was the best trip of my life.",
          q: [
            { q: "How did they travel to Istanbul?", o: ["By train", "By plane", "By boat"], a: 1, why: "\"We flew from Casablanca and the flight took four hours.\"" },
            { q: "Where did they have breakfast?", o: ["In the market", "On the roof", "In a café"], a: 1, why: "\"Every morning we had breakfast on the roof.\"" },
            { q: "What did the writer buy?", o: ["A small carpet", "A boat ticket", "A camera"], a: 0, why: "\"On the last day I bought a small carpet for my mother.\"" }
          ]
        },
        write: {
          prompt: "Write 6 sentences about a trip you took. Say where you went, how you travelled, what you did and how it was.",
          tips: ["Use the past simple: went, took, stayed, visited", "Add adjectives to describe the place", "Finish with your opinion"],
          sample: "Two years ago I travelled to the desert with my family. We went by car and the journey took six hours. We stayed in a small hotel with a big garden. In the evening we walked on the sand and watched the stars. The food was simple but delicious. It was a quiet and beautiful trip, and I want to go again."
        },
        speak: ["How do you usually travel to work or school?", "Describe your last trip in two sentences.", "Ask me for directions to the station.", "What is the best place you have visited?", "How long does your journey to work take?"],
        ex: [
          { t: "mcq", q: "___ straight on and turn left.", o: ["Go", "You go", "Going"], a: 0, why: "Directions use the imperative: \"Go\"." },
          { t: "fill", q: "The bank is ___ the supermarket.", o: ["opposite", "between", "next"], a: 0, why: "\"Opposite\" means facing across from it." },
          { t: "mcq", q: "How long ___ the journey take?", o: ["do", "does", "is"], a: 1, why: "\"The journey\" is third person singular, so we use \"does\"." },
          { t: "match", pairs: [["ticket", "lets you travel"], ["airport", "where planes land"], ["luggage", "the bags you travel with"], ["journey", "travelling from one place to another"]] },
          { t: "order", words: ["the", "Where", "is", "station"], answer: "Where is the station" },
          { t: "translate", q: "Translate into English: أين المطار؟", a: ["where is the airport"], why: "أين = \"Where is\"." },
          { t: "correct", wrong: "Turn on left at the corner.", answer: "Turn left at the corner.", why: "We say \"turn left\", without a preposition." },
          { t: "vocab", q: "You show this before you get on a plane:", o: ["a boarding pass", "a menu", "a receipt"], a: 0, why: "A boarding pass lets you board a flight." },
          { t: "listen", text: "The train leaves at nine fifteen from platform three.", q: "What time does the train leave?", o: ["Nine fifteen", "Nine fifty", "Eight fifteen"], a: 0, why: "The speaker says \"nine fifteen\"." },
          { t: "write", prompt: "Write one sentence describing a trip you took last year.", keywords: ["last year", "went", "visited", "travelled"], minWords: 10 }
        ]
      }
    ]
  };

  window.EH.levels.push(A1);
})();
