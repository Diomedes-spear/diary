/*
  ここに日記を追加していく。
  新しいエントリは配列の「先頭」に足す(新しい順に表示される)。

  各エントリの形式:
  {
    date: "2026.09.01",     // 表示用の日付。書式は自由
    title: "見出し",         // 見出し。なくてもよい(空文字でOK)
    status: "記録済",        // 省略可。デフォルトは「記録済」
    body: `
本文をここに書く。

段落を分けたいときは、空行を入れる。
`,
    // 省略可。DeepLなどで自分で訳文を作った場合はここに入れる。
    // 用意した言語だけ、自動翻訳(Google)より優先して表示される。
    translations: {
      en: {
        title: "English title",
        body: `English body text here.`
      },
      uk: {
        title: "Українська назва",
        body: `Український текст тут.`
      }
    }
  },

  本文中の改行や空行はそのまま反映される。HTMLタグは不要。
  translations を書かなかった記事は、サイト右上の言語ボタンを押すと
  Google翻訳が自動でその場で翻訳する(精度は保証されない)。
*/

const ENTRIES = [
  {
    date: "2026.09.21",
    title: "菅先生とエントロピー",
    body: `
僕が大学生のとき、履修しているのが僕1人だけという授業があった。

菅先生は財務省で長い間勤めたのち、日本の貧困を無くすというミッションを自身に課して、大学で金融を教えながら財団法人を立ち上げようとしいてる人だった。
彼はいつもサングラスにリュック、半袖のシャツという出たちで現れ、常に快活で優しい爺だった。財務省に長く勤め、海外での勤務経験もあることから語学や海外での生活にも明るく、その笑顔の奥には常に、彼の知識と経験がいかに豊富かを感じた。彼は長い財務省での経験から、日本から貧困を無くすというのを自分に使命として課していた。

その日の菅先生は珍しく暗い顔をして教室に入って来た。
大学に対して何らかの提案と計画を投げかけたところ、無下に却下されたらしい。さらにその際、菅先生の研究である貧困という事について、心無いまで言われたと。
彼が言うには、
「佐藤くんも覚えておくと良い。人間の保守の力というか、現状を維持しようとするパワーというものは凄まじく強いものだ。私が変えよう、新しくしようと提案したのに対して、反対の意思を示す人や粗を指摘するだけの人がたくさん現れた。私は必死に反論したが、今日は疲れてしまった。」と、残念そうに話した。その時、僕自身も部活で副部長を務めながら、規模は違えど菅先生と同じようなものと対峙していたから、彼の直面している困難をなんとなく理解することができた。そして、彼の置かれている立場や戦いに共鳴し、自分の奮起する糧にもした。

数年経って社会に出てから、仕事でも何でも、菅先生の言うところの人間の保守の力というものを感じる機会がより増えた。次第に、これはより大きな自然の摂理なのではないかと思うようになった。我々の住むこの世界、自然というのは、シェリーの詩「オジマンディアス」の如く、時間の進行とともに全てのものが崩壊や形骸化、死といったネガティブな方向へ向かって進むようにできているのだと。

調べると、この考えに近い自然界の法則として「エントロピー増大の法則」というのが提唱されているらしい。エントロピーが低い状態とは、熱、秩序、整理が有ること、エントロピーが高い状態とは、冷めていたり、混沌としていたり、乱雑な状態のことを指す。コーヒーは放っておくと冷めてしまい、連絡を怠れば彼女の気持ちは離れていき、部屋の掃除を定期的にせずに過ごしているといつの間にか散らかった部屋になっていくのは、時間の経過とともにエントロピーが増大している、と一括りに言える。
コーヒーを耐熱マグにいれる、彼女にはマメに連絡をする、風呂上がりにパックをしたりフェイスリフトをしてアンチエイジングに励むのは、「エントロピー増大の法則」に抗って現状を維持しようとする営みと言える。
現場維持というのは、それだけで自然に抗った行為で、エネルギーが必要なのだ。

現状を保守しようとすることが生命の常であるが、それはエントロピー増大という大河の流れに流されまいと踏みとどまる巨石である。創造や改革は大河に逆らって泳ぐ行為であるから、より膨大なエネルギーが必要なのだ。そしてエネルギーと同じくらい必要なのは、人間だけに備わった能力、言語なのである。

菅先生が相手にしていたのは「エントロピー増大の法則」に抗う生命の本質なのだとしたら、彼の活動はなぜ崇高なのか。一つは当然、日本から貧困を無くすという利他の精神による国家レベルの課題解決目的だ。だが、より重要なのは彼がその目的のために大学組織の「保守の力」に絶望し抗ったことだ。それは、地球のあらゆる生命の中で、人間だけに許された、反抗なのだ。大河に飲み込まれ、目的をうやむやにることは、他の動物にもできる。
`,
    translations: {
      en: {
        title: "Mr. Kan and Entropy",
        body: `
When I was a university student, there was one class in which I was the only student enrolled.

Professor Kan had spent many years at the Ministry of Finance before taking on a personal mission to eliminate poverty in Japan — he was teaching finance at the university while also trying to establish a foundation.
He always showed up in sunglasses, with a backpack, wearing a short-sleeved shirt — always cheerful, a kind old man. Having worked at the Ministry of Finance for so long, with experience living abroad, he was fluent in foreign languages and comfortable with life overseas, and behind his smile you could always sense the depth of his knowledge and experience. Drawing on his years at the Ministry of Finance, he had made it his mission to eliminate poverty from Japan.

That day, Professor Kan walked into the classroom with an unusually dark expression.
It seemed he had proposed some plan or idea to the university, and it had been dismissed out of hand. On top of that, he'd apparently been told something rather callous about poverty — the very subject of his research.
As he put it:
"Sato, you should remember this too. The conservative force in human beings — the sheer power of the drive to preserve the status quo — is something terrifyingly strong. When I proposed change, proposed something new, plenty of people showed up just to voice their opposition or pick apart the flaws. I argued back as hard as I could, but today I'm just exhausted." He said this with real regret in his voice. At the time, I was serving as vice-captain of my club, and though the scale was far smaller, I was up against something similar, so I could understand, in my own way, the difficulty he was facing. That resonance with his position and his struggle became fuel for my own resolve as well.

Years later, once I was out in the working world, I found myself sensing that same "conservative force in human beings" Professor Kan had spoken of, more and more often — at work, everywhere. Gradually, I began to think this might be a larger law of nature. That the world we live in, nature itself, is built so that, as in Shelley's poem "Ozymandias," everything moves with the passage of time toward the negative — toward collapse, decay, and death.

When I looked into it, it seems there's a law of nature close to this idea: the "law of increasing entropy." A state of low entropy means heat, order, organization; a state of high entropy means something cold, chaotic, disordered. That coffee left alone goes cold, that a girlfriend's feelings drift away if you neglect to stay in touch, that a room you don't clean regularly ends up cluttered before you know it — all of this can be summed up in one phrase: entropy increases with the passage of time.
Pouring your coffee into an insulated mug, keeping in regular touch with your girlfriend, doing a face mask after a bath or working at anti-aging skincare — these can all be described as efforts to maintain the status quo against the "law of increasing entropy."
Maintaining the status quo is, in itself, an act against nature, and it requires energy.

Trying to preserve the status quo is the ordinary condition of life, but it is like a great boulder standing firm against being swept away by the river of increasing entropy. Creation and reform are acts of swimming against that river's current, and so they require far more energy. And just as necessary as energy is the ability given to humans alone: language.

If what Professor Kan was up against was the very nature of life resisting the "law of increasing entropy," why is his work so noble? One reason, of course, is the altruistic, national-level goal of eliminating poverty from Japan. But more important is that, for the sake of that goal, he despaired of — and still resisted — the "conservative force" of the university as an institution. That is a form of rebellion permitted, among all life on this earth, to humans alone. To be swallowed by the great river and let one's purpose dissolve into nothing — any other animal can do that.
`
      },
      uk: {
        title: "Пан Кан та ентропія",
        body: `
Коли я був студентом університету, існував один курс, на який записався лише я один.

Пан Кан довгий час пропрацював у Міністерстві фінансів, а потім поставив собі за мету викорінити бідність в Японії — він викладав фінанси в університеті й водночас намагався заснувати благодійний фонд.
Він завжди з'являвся в сонцезахисних окулярах, з рюкзаком за спиною та в сорочці з коротким рукавом — завжди життєрадісний і добрий дідусь. Оскільки він довго пропрацював у Міністерстві фінансів і мав досвід роботи за кордоном, він добре знав іноземні мови та життя за кордоном, і за його усмішкою завжди відчувалися глибина його знань і досвіду. Виходячи зі свого багаторічного досвіду в Міністерстві фінансів, він поставив собі за місію викорінити бідність в Японії.

Того дня пан Кан зайшов до аудиторії з незвично похмурим обличчям.
Здається, він запропонував університету якийсь план чи ідею, і її безцеремонно відхилили. Більше того, про бідність — тему, якою він займався, — йому, за його словами, сказали дещо доволі бездушне.
За його словами:
«Сато-куне, тобі теж варто це запам'ятати. Консервативна сила людини — прагнення зберегти статус-кво — це щось справді жахливо потужне. У відповідь на мою пропозицію щось змінити, оновити з'явилося чимало людей, які висловлювали незгоду або лише вказували на недоліки. Я щосили заперечував, але сьогодні просто втомився», — сказав він із жалем у голосі. Тоді я сам, будучи заступником голови клубу, стикався — хай і в набагато меншому масштабі — з чимось схожим, тож якоюсь мірою розумів труднощі, з якими він зіткнувся. Співзвучність його становищу та боротьбі стала для мене й приводом для власного натхнення.

Через кілька років, коли я вже вийшов у доросле життя, нагоди відчути ту саму «консервативну силу людини», про яку говорив пан Кан, почали траплятися дедалі частіше — і на роботі, і будь-де. Поступово я почав думати, що це, можливо, більший закон природи. Наш світ, природа, влаштовані так, що, як у вірші Шеллі «Озімандія», з плином часу все неухильно рухається в негативному напрямку — до руйнування, знецінення форми, смерті.

Коли я почав шукати, виявилося, що існує закон природи, близький до цієї ідеї, — так званий «закон зростання ентропії». Стан низької ентропії — це наявність тепла, порядку, впорядкованості; стан високої ентропії — це охолодження, хаос, безлад. Те, що кава, залишена без уваги, охолоне; що почуття дівчини охолонуть, якщо нехтувати спілкуванням; що кімната непомітно перетворюється на безлад, якщо не прибирати її регулярно, — усе це можна об'єднати одним поняттям: ентропія зростає з плином часу.
А те, що ми наливаємо каву в термокухоль, регулярно пишемо дівчині, робимо маски для обличчя після ванни чи докладаємо зусиль до боротьби зі старінням, — це діяльність, спрямована на те, щоб зберегти статус-кво всупереч «закону зростання ентропії».
Саме підтримання нинішнього стану — це вже само по собі дія всупереч природі, яка потребує енергії.

Прагнення зберегти статус-кво — це звичайний стан живого, але воно подібне до велетенського каменя, що встояв, аби його не знесло течією великої ріки на ім'я «зростання ентропії». Творення чи реформи — це вже плавання проти течії цієї ріки, а тому вони потребують значно більшої енергії. І настільки ж необхідна, як енергія, — здатність, притаманна лише людині: мова.

Якщо пан Кан протистояв самій сутності життя, що опирається «закону зростання ентропії», то чому його діяльність є настільки шляхетною? По-перше, звісно, через альтруїстичну мету розв'язати проблему національного масштабу — викорінення бідності в Японії. Але важливіше інше: заради цієї мети він, зневірившись, усе одно чинив опір «консервативній силі» університетської організації. Це бунт, дозволений серед усього живого на Землі лише людині. Бути поглинутим великою рікою і залишити мету незавершеною — на це здатна будь-яка інша тварина.
`
      }
    }
  },
  {
    date: "2026.08.29",
    title: "黄色い男",
    body: `
飯田橋駅に行く御茶ノ水線の中にいた男を見て、俺は恐ろしいと感じた。
その男は、全身蛍光の黄色で統一したファッションに身を包み、たくさんの看板を持っていた。一番大きな看板は、高さ1.5mほどで、彼はそれを背負っていた。そこには、大きく太く黒いゴシック体のひらがなでこう書かれていた。「じゅんちゃんおじさん　きみをみまもっているよ　くるまもおとなもまちがうことがあるよ　はしらない　とびださない　おこらない」

彼は、電車のドアの前に立っているのに、飯田橋駅で降車するとき、他に降りようとしている客を先に行かせようと誘導を始めた。しかし、彼の体格はがっしりとして、身長は180cmほどあり、さらに背負っている看板が邪魔なせいで乗客たちは降りづらく、俺を含め何人かは彼を迂回して別のドアから降車しなければならなかった。

降車した後、杖をついた老人が階段をゆっくり登るすぐ後ろにぴたりと張り付き、ゆっくりと尾けているのだ。その背中の看板には、やはり「きみをみまもっているよ」とひらがなで書いてある。

その黄色い男はおそらく40歳半ばぐらいだった。自警活動とでも言うのだろうか。子供や老人を危険から守るためのメッセージと、危険を回避するための蛍光色の黄色。この国では蛍光色の黄色はよく交通安全のサインに用いられる。そして、彼は常に人の後ろを歩き、「みまもり」を実践しようとする。

彼はなぜこの自警活動を始めたのか。もしかしたら、大事な人を交通事故で失くしたのかもしれない。もしかしたら、交通関係の仕事を非常に熱心に何年もやってきた人で、非番の日も義務を自らに課しているのかもしれない。もしかしたら、交通事故の件数を社会問題と捉え、その解決に心血を注いでいるのかもしれない。

そうした共感するべき理由や高潔な行動原理があるのかもしれない。カラーリングの統一、シンプルでわかりやすいメッセージセンテンスの作成や状況に応じた独自の行動規範は、それらの中心に確固たる思いがなければ構築することはできないはずだ。

しかし、人々はそんな事は気にしない。結果とした彼の行動は周囲にとって迷惑や恐怖、警戒の対象となっている。電車の中で彼の周りの席は空いていたし、見守られた老人はチラチラと後ろを気にしていた。

何がそのすれ違いを産んだのか。それは、あの黄色い男が、「自分のブランドを相手に受け取ってもらえるか」という観点を持っていなかった事だろう。

彼は見守っているつもりでも、老人からすると黄色い服を着た大男が看板を吊り下げて後ろを歩いているのでは、ただ不審者に後をつけられた、といった意見にしかならない。それが相手が子供にでもなれば、小児性愛者と誤解されてもおかしくない。彼の言葉や行動だけでなく、彼の体格やファッションもそのすれ違いを生む要因になり得るから、慎重に考慮するべきだった。

俺が彼を見て恐ろしいと感じたのは、俺もまた、そうした体格や見た目からくる加害性的な印象、彼ほど強力では無いにしろ自らの行動規範や社会に対する意見を持っているし、コミュニケーションで誤解を与えてしまうことだってたくさんある。

相手のキャッチャーミットを確認せずにボールを投げつける事は、時として不快であり、最悪の場合程度が過ぎれば許されない罪にもなりうる。

黄色い男の無知に恐怖したのは、同じ男で、同じ体格だからというのもあるが、ブランドコミュニケーションについて考える仕事をしている自分だからかもしれない。
`,
    translations: {
      en: {
        title: "The Yellow Man",
        body: `
Seeing a man on the Ochanomizu Line heading to Iidabashi Station, I felt afraid.

The man was dressed head to toe in fluorescent yellow and carried a number of signboards. The largest one, about 1.5 meters tall, he wore strapped to his back. On it, written in thick black gothic-style hiragana, were the words: "Uncle Jun-chan is watching over you. Cars and grown-ups make mistakes too. Don't run. Don't dart out. Don't get angry."

He was standing right in front of the train doors, yet when it came time to get off at Iidabashi, he started trying to usher the other passengers who wanted to get off ahead of him. But his build was heavy-set, he stood about 180cm tall, and the signboard on his back got in the way, making it hard for passengers to exit — several of us, myself included, had to go around him and get off through a different door.

After getting off, he stuck right behind an elderly man with a cane who was slowly climbing the stairs, following him at a slow pace. The sign on his back read, again in hiragana, "I'm watching over you."

The yellow man looked to be somewhere in his mid-forties. Something like a self-appointed neighborhood watch, I suppose. A message meant to protect children and the elderly from danger, paired with fluorescent yellow meant to help avoid danger — in this country, fluorescent yellow is often used as a traffic-safety signal. And so he walks behind people at all times, trying to put his "watching over" into practice.

Why did he start this vigilante-style activity? Maybe he lost someone important to him in a traffic accident. Maybe he spent many years devoted to work in the transportation field and now imposes this duty on himself even on his days off. Maybe he sees the number of traffic accidents as a social problem and has poured his heart into solving it.

There might be a reason there worth sympathizing with, some high-minded principle behind it all. Unifying the color scheme, crafting simple, easy-to-understand message sentences, and developing his own code of conduct tailored to the situation — none of that could have been built without something firm at its core.

But people don't care about any of that. The result is that his behavior has become, to those around him, a source of nuisance, fear, and wariness. The seats around him on the train were empty, and the elderly man being "watched over" kept glancing back nervously.

What produced that disconnect? It's that the yellow man never held the perspective of "will the other person actually receive my brand the way I intend it."

He may think he's watching over people, but from the elderly man's point of view, a large man dressed in yellow with a sign hanging off his back walking behind him amounts to nothing more than being followed by a suspicious stranger. If the other person happened to be a child instead, it wouldn't be strange at all for him to be mistaken for a pedophile. Not just his words and actions, but his build and his clothing too, could become factors producing that same disconnect — and that's something he should have thought through carefully.

The reason I felt afraid seeing him is that I too carry an impression of potential menace that comes from build and appearance, and — though nowhere near as forcefully as he does — I hold my own codes of conduct and opinions about society, and there are plenty of times my communication creates misunderstandings.

Throwing a ball at someone without checking whether their catcher's mitt is even up can be unpleasant at times, and in the worst case, if it goes far enough, it can amount to an unforgivable offense.

What frightened me about the yellow man's ignorance is partly that he's the same sex as me, with a similar build, but maybe it's also because I'm someone whose job is to think about brand communication.
`
      },
      uk: {
        title: "Жовтий чоловік",
        body: `
Побачивши чоловіка у вагоні лінії Очаномідзу, що прямував до станції Ііда́баші, я відчув страх.

Цей чоловік був одягнений з голови до ніг у флуоресцентно-жовте вбрання і ніс при собі багато табличок. Найбільша з них, заввишки близько 1,5 метра, була прив'язана в нього за спиною. На ній товстими чорними літерами у стилі готичної хірагани було написано: «Дядько Джун-тян наглядає за тобою. Машини й дорослі теж помиляються. Не бігай. Не вискакуй раптово. Не сердься».

Він стояв прямо біля дверей вагона, але коли настав час виходити на станції Ііда́баші, почав пропускати вперед інших пасажирів, які теж хотіли вийти. Проте статура в нього була кремезна, зріст — близько 180 см, а табличка за спиною заважала, тому пасажирам було важко вийти — кілька людей, зокрема і я, змушені були обійти його й вийти через інші двері.

Вийшовши з вагона, він щільно пристроївся позаду літнього чоловіка з ціпком, який повільно піднімався сходами, і повільно йшов за ним слідом. На табличці в нього за спиною знову було написано хіраганою: «Я наглядаю за тобою».

Цьому жовтому чоловікові було, напевно, років сорок п'ять. Щось на кшталт добровільної варти, чи як це назвати. Повідомлення, покликане захистити дітей і людей похилого віку від небезпеки, і флуоресцентно-жовтий колір, покликаний допомогти уникнути небезпеки — у цій країні флуоресцентно-жовтий часто використовують як сигнал безпеки руху. І він постійно ходить позаду людей, намагаючись втілювати цей «нагляд» на практиці.

Чому він розпочав цю добровільну діяльність? Можливо, він втратив у ДТП когось важливого для себе. Можливо, він багато років дуже сумлінно працював у сфері, пов'язаній із транспортом, і тепер накладає на себе цей обов'язок навіть у вихідні дні. Можливо, він сприймає кількість дорожньо-транспортних пригод як суспільну проблему і вкладає всю душу в її вирішення.

Можливо, за цим стоїть причина, гідна співчуття, якийсь шляхетний принцип дії. Уніфікація кольорової гами, створення простих і зрозумілих повідомлень, вироблення власного кодексу поведінки залежно від ситуації — все це неможливо було б побудувати без твердого переконання в основі.

Але людям байдуже до всього цього. У результаті його поведінка стала для оточення джерелом незручності, страху й настороженості. Місця навколо нього у вагоні були порожні, а літній чоловік, за яким «наглядали», раз по раз нервово озирався назад.

Що породило цю розбіжність? Мабуть, те, що цей жовтий чоловік жодного разу не поставив собі запитання: «чи прийме інша людина мій „бренд" так, як я цього хочу».

Сам він, можливо, вважає, що наглядає за людьми, але з погляду того літнього чоловіка, велика людина в жовтому одязі з підвішеною на спині табличкою, що йде позаду, — це не що інше, як переслідування підозрілою особою. А якби на місці того літнього чоловіка опинилась дитина, не було б нічого дивного, якби його сприйняли за педофіла. Не лише його слова й дії, а й його статура та одяг могли стати чинниками цієї розбіжності — і про це варто було подумати заздалегідь і уважніше.

Причина, чому, побачивши його, я відчув страх, у тому, що я теж, через свою статуру й зовнішність, можу справляти враження потенційної загрози, і хоча не так сильно, як він, маю власні принципи поведінки та погляди на суспільство, і в мене теж часто трапляється так, що спілкування створює непорозуміння.

Кидати м'яч, не перевіривши, чи готова ловецька рукавичка іншої людини, буває неприємно, а в найгіршому разі, якщо це заходить надто далеко, може стати непрощенним вчинком.

Те, що мене налякало через невігластво жовтого чоловіка, частково пояснюється тим, що ми з ним однієї статі й схожої статури, але, можливо, ще й тим, що я сам працюю над тим, як осмислювати комунікацію бренду.
`
      }
    }
  }
];
