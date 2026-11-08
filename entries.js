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
    date: "2026.11.08",
    title: "カサンドラとアナキン",
    body: `
「ヘイデン・クリステンセンがダース・ヴェイダーのヘルメットを被った瞬間に、2つのサーガが完結したんだ。イリアスとオデュッセイアのように」

— ジョージ・ルーカス

僕の愛してやまない物語の一つ、スターウォーズは禅や世界各国の神話だけでなく、イリアスとオデュッセイアの影響を多分に受けている。特に、シリーズにおける最大の見所、"なぜ、最強のジェダイはサイボーグの悪役になったのか"という問いに対する回答は、まさにギリシャ神話の悲劇をなぞっている。

アナキンというキャラクターの危うさは出自、暴力的な衝動、精神的な幼稚さ、そして歴史に類を見ない能力の高さを理解できない上司、など、さまざまな面で描かれている。この「仕事における暗黒面転向の理由」はイリアスの第1章『アキレウスの怒り』と重なるところが非常に多い。しかし今回は、「プライベートライフにおける暗黒面転向の理由」について掘り下げる。アナキンが暗黒に堕ちたのは、仕事とプライベート、両輪が同時に崩れたからだ。

エピソードⅢ「シスの復讐」の序盤、アナキンの人生は既に行き詰まっている。映画の序盤、妻のパドメは妊娠がわかる。そしてアナキンは、パドメとお腹の子をどうしようもなく愛している。しかし、ジェダイの掟はそうした執着を最も禁じている。『執着は喪失の恐れを生む。恐れは怒りに、怒りは憎しみに、憎しみは苦しみへ。』それがジェダイの教え、アナキンの仕事における掟なのだ。アナキンは仕事の掟を破り、プライベートの悦びを優先している状態なのだ。ある夜、アナキンは夢でパドメの死を見た。アナキンは、それを恐れてしまった。なぜなら、前回見た予知夢は本当になったからだ。そして、それは彼が最も愛する母を奪った。様子のおかしいアナキンを気遣うパドメは、死んだりしないと約束するが、アナキンは「いや、僕が約束する。」と言う。アナキンはこのとき、掴んだ幸せに執着し、恐れを抱き、恐れた未来の回避のために自らの能力を注ぐと決めたのだ。この時点で、彼の破滅が決まった。そのあとは知っての通り、アナキンは愛するものを死から救う術を追い求め、それがフォースの暗黒面であるという、エデンの園の蛇の如き暗黒卿パルパティーンの誘いに乗ってしまう。そして、その転向に絶望したパドメは、生きる気力をなくし、アナキンの予知夢は現実になる。恐れを避けようととった行動が、恐れた未来を実現させてしまう。これが『シスの復讐』に込められた教訓の一つだ。

よく似た話がギリシャ神話にもある。トロイの王女カサンドラは、アポロンに愛されていた。アポロンは太陽神、医療の神、芸術の神、そして、予言の神でもあった。アポロンと恋仲になり、その寵愛を受けたカサンドラは未来を視る力を得た。当然、彼女はその力を恋占いに使った。カサンドラが見たのは、愛するアポロンが自分にまもなく愛想をつかし、関係が遊び程度に終わるという未来だった。彼女はその未来を回避するための行動に出た。アポロンに、「私との関係は遊びなのか？」と詰め寄ったのだ。こうしたやり取りは、相手を疲れさせる。太陽神も例外ではなかった。カサンドラの予知は現実のものとなり、さらには神の怒りまでも被った。誰もカサンドラの話を信じなくなるという呪いを、アポロンは彼女に与えた。だから、カサンドラがトロイの木馬の正体を見破ったとき、誰もその話を信じなかった。

オイディプスが予言通りに父、ライオスをそれが父と知らずに殺したのも同じだ。

アナキンもカサンドラもライオスも、恐れた未来を回避するための行動で、その未来を現実のものにしてしまったのだ。

僕は、これは現実の世界でも起こることだと思う。「自分にはこの仕事をうまくやれない」そう思って安全な決断ばかりをした結果、面白味も新鮮味もないアウトプットになり、結果的に失敗となる事がある。「自分は結婚などできない」そう思って闇雲に焦って結婚相手を探した結果、良くない相手と結婚する事もある。

では、反対がいいのか？「自分なら絶対にいい仕事にできる。」「自分はいい男(或いは女)だから、絶対に結婚できる」「パドメは絶対に大丈夫」これも、傲慢（Hubris）という、また別の破滅を招く要因だ。日本語で、"根性論""根拠の無い自信"というやつだ。

では、我々は未来とどう対峙するべきなのか？これは僕の持論だが、"幸福を確信し、仔細を決めず、今を大事にすることに集中する"これがコツだと思う。

"Don't center on your anxieties, Obi-Wan. Keep your concentration here and now, where it belongs."
`,
    translations: {
      en: {
        title: "Cassandra and Anakin",
        body: `
"The moment Hayden Christensen put on Darth Vader's helmet, two sagas were completed — like the Iliad and the Odyssey."

— George Lucas

Star Wars, one of the stories I love most, draws heavily not only on Zen and myths from around the world, but also on the Iliad and the Odyssey. In particular, the answer to the series' biggest draw — the question of why the strongest Jedi became a cyborg villain — traces the shape of a Greek tragedy almost exactly.

The precariousness of Anakin as a character is drawn through many angles: his origins, his violent impulses, his emotional immaturity, and a superior who can't comprehend an ability unmatched in history, among others. This "reason for turning to the dark side at work" overlaps heavily with the first chapter of the Iliad, "The Rage of Achilles." This time, though, I want to dig into the "reason for turning to the dark side in private life." Anakin fell to the dark side because both wheels — work and private life — collapsed at the same time.

By the early part of Episode III, Revenge of the Sith, Anakin's life has already reached a dead end. Early in the film, his wife Padmé learns she's pregnant, and Anakin loves her and the child inside her beyond all reason. But the Jedi code forbids that kind of attachment above all else: "Attachment gives rise to the fear of loss. Fear leads to anger, anger leads to hatred, hatred leads to suffering." That is the Jedi teaching — the code that governs Anakin's work. Anakin is already in a state of breaking the code of his work, prioritizing the joy of his private life. One night, Anakin dreams of Padmé's death. He becomes afraid of it, because the last premonition he had came true — and it took from him the mother he loved most. Padmé, worried about how troubled he seems, promises she won't die, but Anakin says, "No — I promise." At that moment, Anakin decides to cling to the happiness he's grasped, to hold onto his fear, and to pour his own abilities into averting the future he fears. His ruin is sealed from this point on. What follows, as everyone knows: Anakin, seeking a way to save the one he loves from death, falls for the invitation of Darth Sidious — a dark lord like the serpent in the Garden of Eden — who tells him that such a power exists in the dark side of the Force. And Padmé, in despair over his turn to the dark side, loses the will to live, and Anakin's premonition comes true. The action he took to avoid what he feared is exactly what brings that feared future into being. This is one of the lessons built into Revenge of the Sith.

A very similar story exists in Greek mythology, too. Cassandra, princess of Troy, was loved by Apollo. Apollo was the god of the sun, of medicine, of the arts, and also of prophecy. Having fallen into a love affair with Apollo and received his favor, Cassandra gained the power to see the future. Naturally, she used that power to read her own love life. What she saw was a future in which Apollo, the one she loved, would soon grow tired of her, and their relationship would end as nothing more than a passing amusement. She took action to avoid that future — she confronted Apollo directly: "Is what we have just a game to you?" That kind of exchange wears a person down, and even a sun god was no exception. Cassandra's prophecy came true, and on top of that, she incurred the god's wrath. Apollo placed a curse on her: no one would ever believe what she said. That's why, when Cassandra saw through the true nature of the Trojan Horse, no one believed her.

The same thing happened with Oedipus, who, exactly as foretold, killed his father Laius without knowing it was his father.

Anakin, Cassandra, and Laius alike — through the very actions they took to avoid the future they feared, they made that future real.

I think this happens in the real world too. Convinced that "I can't do this job well," someone makes nothing but safe decisions, and the result is output with no interest or freshness to it — which ends up a failure after all. Convinced that "I could never get married," someone searches frantically and blindly for a partner, and ends up marrying the wrong person.

So is the opposite better? "I'm definitely going to make this a great piece of work." "I'm a good man (or woman), so of course I'll get married." "Padmé will definitely be fine." This, too, is another factor that invites a different kind of ruin: hubris. In Japanese, it's what people call konjō-ron — "willpower alone" — or baseless confidence.

So how should we face the future, then? This is just my own view, but I think the trick is this: be confident that happiness will come, don't decide the details in advance, and focus on taking this present moment seriously.

"Don't center on your anxieties, Obi-Wan. Keep your concentration here and now, where it belongs."
`
      },
      uk: {
        title: "Кассандра і Енакін",
        body: `
«Тієї миті, коли Хейден Крістенсен надягнув шолом Дарта Вейдера, завершилися дві саги одразу — як "Іліада" і "Одіссея"».

— Джордж Лукас

«Зоряні війни» — одна з історій, яку я люблю найбільше, — багато в чому надихаються не лише дзен-буддизмом і мітологіями різних народів світу, а й «Іліадою» та «Одіссеєю». Зокрема, відповідь на головну загадку серії — чому найсильніший джедай став кіборгом-лиходієм — майже точно повторює форму грецької трагедії.

Небезпечність персонажа Енакіна показана з багатьох боків: його походження, схильність до насильства, емоційна незрілість, а також начальник, який не здатен зрозуміти рівень здібностей, що не має аналогів в історії, й інше. Ця «причина переходу на темну сторону на роботі» дуже багато в чому перетинається з першою піснею «Іліади» — «Гнів Ахілла». Але цього разу я хочу розібратися саме з «причиною переходу на темну сторону в особистому житті». Енакін впав у темряву тому, що водночас зруйнувалися обидва колеса його життя — робота і особисте.

На початку Епізоду III «Відплата ситхів» життя Енакіна вже зайшло у безвихідь. На початку фільму його дружина Падме дізнається, що вагітна, і Енакін безмежно любить і її, і дитину в її лоні. Але кодекс джедаїв понад усе забороняє саме таку прив'язаність: «Прив'язаність породжує страх втрати. Страх веде до гніву, гнів — до ненависті, ненависть — до страждання». Це настанова джедаїв, кодекс, який керує роботою Енакіна. Енакін уже перебуває в стані, коли порушує кодекс своєї роботи, віддаючи перевагу радості особистого життя. Якоїсь ночі Енакінові присниться смерть Падме. Він злякався цього, бо попереднє передчуття, яке в нього було, справдилося — і воно забрало у нього матір, яку він любив найбільше. Падме, занепокоєна його дивним станом, обіцяє, що не помре, але Енакін каже: «Ні, це я обіцяю». Саме в цю мить Енакін вирішує тримається за щастя, яке здобув, впускає страх і вирішує спрямувати всі свої здібності на те, щоб уникнути майбутнього, якого він боїться. Відтоді його падіння стає неминучим. А далі, як усі знають: Енакін, шукаючи спосіб урятувати кохану людину від смерті, піддається на спокусу лорда ситхів Палпатіна — темного володаря, подібного до змія в Едемському саду, — який каже, що така сила існує в темній стороні Сили. А Падме, у відчаї через його перехід на темну сторону, втрачає волю до життя, і передчуття Енакіна справджується. Дія, яку він вчинив, щоб уникнути страху, саме і втілює той майбутній кошмар, якого він боявся. Це один з уроків, закладених у «Відплаті ситхів».

Дуже схожа історія є й у грецькій мітології. Троянську царівну Кассандру кохав Аполлон. Аполлон був богом сонця, медицини, мистецтв, а також пророцтва. Закохавшись в Аполлона й здобувши його прихильність, Кассандра отримала здатність бачити майбутнє. Звісно, вона використала цю силу, щоб дізнатися про долю свого кохання. Побачила вона майбутнє, в якому Аполлон, якого вона любила, скоро охолоне до неї, і їхні стосунки виявляться не більш ніж забавкою. Вона вчинила так, щоб уникнути цього майбутнього, — прямо запитала в Аполлона: «Для тебе це просто гра?» Такі розмови виснажують будь-кого, і навіть бог сонця не був винятком. Пророцтво Кассандри справдилося, а до того ж вона накликала на себе гнів бога. Аполлон наклав на неї прокляття: ніхто ніколи не повірить її словам. Тому, коли Кассандра розпізнала справжню природу троянського коня, їй ніхто не повірив.

Те саме сталося з Едіпом, який, точно за пророцтвом, убив свого батька Лая, не знаючи, що це його батько.

І Енакін, і Кассандра, і Лай — усі вони саме тими діями, якими намагалися уникнути майбутнього, якого боялися, зробили це майбутнє реальністю.

Думаю, таке трапляється і в реальному світі. Хтось, переконаний, що «я не впораюся з цією роботою добре», ухвалює лише безпечні рішення — і в результаті отримує результат без жодної цікавості чи свіжості, який зрештою стає провалом. Хтось, переконаний, що «я ніколи не зможу одружитися», у паніці й навмання шукає партнера — і зрештою одружується не з тією людиною.

То, може, краще протилежне? «Я точно зроблю цю роботу добре». «Я хороший чоловік (чи хороша жінка), тож точно зможу одружитися». «З Падме точно все буде гаразд» — усе це теж є ще одним чинником, що веде до іншого виду руйнування: гординею (hubris). Японською це називають «конджьорон» — щось на зразок «сили самої лише волі» — або безпідставна самовпевненість.

Тож як нам варто ставитися до майбутнього? Це лише моя власна думка, але мені здається, що секрет такий: бути впевненим, що щастя прийде, не вирішувати наперед усіх деталей і зосередитися на тому, щоб цінувати цей момент.

«Не зосереджуйся на своїх тривогах, Обі-Ване. Зосередь свою увагу тут і зараз, де їй і належить бути».
`
      }
    }
  },
  {
    date: "2026.11.08",
    title: "新渡戸稲造について",
    body: `
彼は私の最も尊敬する人物の1人だった。彼は『武士道』の著者であり、国際連盟事務次長として国際的なキャリアを積んだ。彼曰く、「日本人ではなく、国際人であること」が今後の世界を生きていく上で重要だという。しかし今日では、そんな考えはまたしても弱まり、自国優先の政治が支持される機運、不寛容が世界各地で高まっている。これは1800年代後半の帝国主義の時代や、1930年代の自由貿易経済崩壊とよく似ている。そんな時に彼の人生や彼の著作に触れるのは、日本に生を受けた者としては非常に人に薦めたいものである。

彼を語る上で欠かせないのは、やはり『武士道』だろう。米国でこれがベストセラーとなったのは、1900年の刊行時ではなく、1905年に日本の海軍がロシアのバルチック艦隊を破ってからだ。欧米の列強と言われる国々の間で、その一角であるロシアを破った小国に注目の目が注がれていたのだ。なぜ、原始的な民族が急速に近代化を遂げ、近代化の最高到達点の一つである海軍を創り上げ、しまいには世界最強の艦隊を破るに至れたのか？日本人とやらの宗教や社会構造は、中国人や朝鮮人とどう違うのか、どう欧米と共通し、どう異なるのか？

その答えが『武士道』に書かれていた。新渡戸博士曰く、"武士道とは、表徴たる桜花と同じく、日本の土地に固有の花"である。欧米における宗教の役割、人が善と悪を選り分ける秤、社会構造と治安を保たせる経典、先人が経験から得た智慧を子孫に引き継ぐための教えといった意味を日本では武士道が担っている。しかし、比較して異なるのはそれが明文化されていないことだ。各家庭や社会の中で口伝されて引き継がれていくものだが、幕府の法や歴史的教訓、社会構造と密接に結びついていることから、ズレる事がないという、何とも不思議な整理を新渡戸博士はしている。これを古今東西の哲学と政治学に明るい新渡戸博士が体系的に言語化したものに、彼が武士道と名をつけた。具体的には、以下の七つの徳が、武家社会以来、日本人の自己規律の規範となっているという。

義/正しい道を判断する軸

勇/義を実行する勇気

仁/他者への思いやり・慈愛・寛容の心

礼/相手への敬意を表す行動

誠/嘘をつかない、言ったことに責任を持つ

名誉/品位を保ち、不名誉を恥とする心

忠義/主のやるべき務めに共に尽くす行為

新渡戸稲造博士はこれらそれぞれについて、日本の故事や西洋の哲学を引用、比較しながら『武士道』の中で雄弁に語った。それらは、私が大学時代に読んだ時から、確かに私の中で物事の判断基準の一つとなっている。

しかし、近頃はこの武士道の教えに縛られるべきではないという感覚も併せ持つようになった。

一つは、徳の追求は必ずしも正しくはないということ。新渡戸博士の武士道における義、仁、礼の三つはそのまま儒学の五徳から来ている。仁義礼智信のことだ。戦国時代の大名、伊達政宗はこれについて以下の金言を残している。「仁に過ぐれば弱くなる、義に過ぐれば固くなる、礼に過ぐれば諂いとなる、智に過ぐれば嘘をつく、信に過ぐれば損をする」

二つは、ムーブメントの背景である日露戦争における日本の勝利について。現在の私個人の私見としては、これは日本人武士道や克己とやらが掴んだものでは無いと思う。1902年以来日本の同盟国であった大英帝国がヨーロッパからインドまでの全ての港を封鎖したため、バルチック艦隊はバルト海からケープタウンを迂回し、インドを抜けるまで港での補給が不可能だった。そのために、疲弊した状態で日本海軍と決戦した事。それが最大の要因だ。つまり、戦争の英雄は海軍司令官東郷平八郎でもなく、武士道でもなく、戦争の2年前に日英同盟を取り付けた外交官、私のもう1人の尊敬する人物、ねずみ公使こと小村寿太郎である。
`,
    translations: {
      en: {
        title: "On Nitobe Inazo",
        body: `
He was one of the people I admire most. He was the author of Bushido: The Soul of Japan, and built an international career as Under-Secretary-General of the League of Nations. In his view, what matters for living in the world to come is "being not a Japanese, but an internationalist." Today, though, that kind of thinking has once again grown weaker, and a mood favoring my-country-first politics, along with intolerance, is rising in every corner of the world. This closely resembles the age of imperialism in the late 1800s, or the collapse of the free-trade economy in the 1930s. At a time like this, encountering his life and his writing is something I would very much recommend to anyone, as someone born in Japan.

What's indispensable to talking about him is, of course, Bushido. It became a bestseller in the United States not when it was first published in 1900, but after Japan's navy defeated Russia's Baltic Fleet in 1905. Among the countries called the great powers of the West, attention turned toward this small nation that had defeated Russia, one of their own number. Why had this supposedly primitive people modernized so rapidly, built a navy — one of the highest achievements of modernization — and ultimately come to defeat the strongest fleet in the world? How did the religion and social structure of this people called the Japanese differ from the Chinese or Koreans, and in what ways did they resemble or differ from the West?

The answer was written in Bushido. As Dr. Nitobe put it, "Bushido, like its emblem the cherry blossom, is a flower indigenous to the soil of Japan." In Japan, Bushido carries the roles that, in the West, belong to religion, to the scale by which people sort good from evil, to the scripture that holds together social structure and public order, and to the teachings by which the wisdom earlier generations gained through experience is passed down to their descendants. What's different, by comparison, is that it was never written down. It's something handed down by word of mouth within each household and community — and yet, Dr. Nitobe makes the curious observation that, precisely because it's so closely bound up with the shogunate's laws, historical lessons, and social structure, it never drifts out of alignment. It was Dr. Nitobe — well-versed in philosophy and political science across every age and country — who systematically put this into words, and he's the one who gave it the name Bushido. Specifically, he says the following seven virtues have served, ever since the age of the warrior class, as the standard of self-discipline for the Japanese.

Gi (義) — the axis by which one judges the right path

Yu (勇) — the courage to carry out gi

Jin (仁) — benevolence, compassion, and a generous heart toward others

Rei (礼) — conduct that expresses respect for another person

Sei (誠) — not lying, taking responsibility for what you've said

Meiyo (名誉) — honor: keeping one's dignity, and treating disgrace as shameful

Chugi (忠義) — devoting oneself, together with one's lord, to the duty that must be done

Dr. Nitobe Inazo spoke eloquently about each of these in Bushido, drawing on and comparing episodes from Japanese history with Western philosophy. Ever since I read it in my university years, those virtues have genuinely become one of the standards by which I judge things.

Lately, though, I've also come to feel that I shouldn't be bound by these teachings of Bushido.

One reason is that the pursuit of virtue isn't necessarily correct. The three virtues of gi, jin, and rei in Dr. Nitobe's Bushido come directly from the five Confucian virtues — benevolence, righteousness, propriety, wisdom, and sincerity. Date Masamune, a daimyo of the Warring States period, left behind this golden saying about them: "Too much benevolence makes one weak; too much righteousness makes one rigid; too much propriety becomes flattery; too much wisdom leads one to lie; too much trust leads one to loss."

The other reason concerns Japan's victory in the Russo-Japanese War, the backdrop to this whole movement. My own personal view, at present, is that this was not something Japanese Bushido or self-mastery managed to seize. Because the British Empire — Japan's ally since 1902 — blockaded every port from Europe to India, the Baltic Fleet had no way to resupply at any port as it went around the Cape of Good Hope from the Baltic Sea and on through India. Because of that, it fought its decisive battle against the Japanese navy already exhausted. That was the decisive factor. In other words, the hero of that war was neither the naval commander Togo Heihachiro nor Bushido itself, but the diplomat who, two years before the war, secured the Anglo-Japanese Alliance — another person I deeply admire — Komura Jutaro, known as "the Rat Minister."
`
      },
      uk: {
        title: "Про Нітобе Інадзо",
        body: `
Він був однією з людей, яких я поважаю найбільше. Він — автор книги «Бусідо: душа Японії» і зробив міжнародну кар'єру як заступник генерального секретаря Ліги Націй. На його думку, для життя у світі, що настає, важливо «бути не японцем, а інтернаціоналістом». Однак сьогодні така думка знову слабшає, і в усіх куточках світу зростають настрої на користь політики «своя країна — понад усе» та нетерпимість. Це дуже схоже на епоху імперіалізму кінця XIX століття або на крах вільної торгівлі у 1930-х роках. У такий час звернутися до його життя й творчості — це те, що я, як людина, народжена в Японії, дуже рекомендую.

Говорячи про нього, не можна обійти книгу «Бусідо». Бестселером у США вона стала не тоді, коли вийшла друком у 1900 році, а після того, як японський флот розбив російську Балтійську ескадру в 1905 році. Серед країн, які називали себе великими державами Заходу, увагу привернула маленька країна, що здолала одну з них — Росію. Чому цей начебто первісний народ так швидко модернізувався, створив військово-морський флот — одне з найвищих досягнень модернізації — і зрештою здолав найсильнішу ескадру світу? Чим релігія та соціальна структура цих японців відрізнялися від китайців чи корейців, у чому вони були подібні до Заходу, а в чому — відмінні?

Відповідь на це було написано саме в «Бусідо». За словами доктора Нітобе, «Бусідо, як і сакура — його символ, — квітка, притаманна лише японській землі». У Японії Бусідо виконує ту роль, яку на Заході відігравала релігія: це терези, якими люди відділяють добро від зла, це писання, що тримає соціальну структуру й суспільний порядок, це настанови, якими мудрість, здобута досвідом попередніх поколінь, передається нащадкам. Проте порівняно з ними є одна відмінність — Бусідо ніде не записане. Воно передається усно в кожній родині й спільноті, і водночас, як не дивно, доктор Нітобе стверджує, що саме тому, що воно тісно пов'язане із законами сьогунату, історичними уроками та соціальною структурою, воно ніколи не «з'їжджає» зі свого місця. Саме доктор Нітобе — людина, обізнана в філософії та політології всіх часів і народів, — систематично висловив це словами, і саме він дав цьому назву «Бусідо». Конкретно, за його словами, ось ці сім чеснот від часів самурайського суспільства й донині слугують нормою самодисципліни для японців.

Ґі (義) — вісь, за якою судять про правильний шлях

Ю (勇) — мужність втілити ґі в дію

Дзін (仁) — співчуття, милосердя й доброта до інших

Рей (礼) — поведінка, що виражає шанобливість до іншої людини

Сей (誠) — не брехати, відповідати за власні слова

Мейо (名誉) — честь: зберігати гідність і соромитися безчестя

Чуґі (忠義) — віддано служити разом зі своїм паном тому обов'язку, який має бути виконаний

Доктор Нітобе Інадзо красномовно розповів про кожну з цих чеснот у «Бусідо», наводячи приклади з японської історії та порівнюючи їх із західною філософією. Відтоді, як я прочитав цю книгу в студентські роки, ці чесноти й справді стали для мене одним із критеріїв, за якими я оцінюю речі.

Проте останнім часом я водночас відчуваю, що не варто бути зв'язаним цими настановами Бусідо.

По-перше, прагнення до чеснот не завжди є правильним. Три чесноти — ґі, дзін і рей — у «Бусідо» доктора Нітобе прямо походять із п'яти конфуціанських чеснот: гуманності, справедливості, етикету, мудрості та довіри. Дате Масамуне, даймьо епохи Воюючих провінцій, залишив про це такий золотий вислів: «Надмір гуманності робить слабким, надмір справедливості робить негнучким, надмір етикету стає підлабузництвом, надмір мудрості змушує брехати, надмір довіри призводить до збитків».

По-друге, щодо перемоги Японії в Російсько-японській війні — тлі, на якому виник цей рух. Моя особиста думка зараз така, що цю перемогу здобуло не японське Бусідо чи якесь самовладання. Британська імперія, союзник Японії з 1902 року, заблокувала всі порти від Європи до Індії, тож Балтійська ескадра не мала можливості пополнити запаси в жодному порту, обходячи мис Доброї Надії з Балтійського моря аж до Індії. Через це вона вступила в головну битву з японським флотом уже виснаженою. Це і було головним чинником. Іншими словами, героєм тієї війни був не адмірал Того Хейхачіро і не Бусідо, а дипломат, який за два роки до війни забезпечив англо-японський союз — ще одна людина, яку я глибоко поважаю, — Комура Дзютаро, відомий як «міністр-пацюк».
`
      }
    }
  },
  {
    date: "2026.09.22",
    title: "河岸の太陽",
    body: `
新幹線まで時間があるから、場所ぐらいは知っておこう。関西支社に寄ったのはそれだけの理由だった。その時に顔が浮かんだが、彼だった。関西支社に行くなら、彼に会えるか聞いておこうぐらいの事だった。

俺より8つ歳上の直樹さんは、和歌山に住んでいる。初対面のときからとてもフレンドリーで、人との間に壁が無い、陽気な人に見えた。直樹さんは僕の山口県出身の友人、太陽ととても似ている。2人とも生来の明るさと軽さを併せ持っている。初対面の人と15分で友達になれる。馬鹿だな、と思う時もあれば、よく考えていると感嘆させられる時もある。競争させられることが嫌い。何よりも仲間や友達が大事。それ以上に妻が大事。

僕は19歳の頃、太陽と毎日予備校から歩いて帰り、たまに河岸で飲んではいけないビールを飲んで、人生や将来、女について語り合った。山口弁を突き通すがの強さと、ほんわかした性格、それでいてまともに話ができる太陽が、俺は好きだった。横浜の鶴見川。底が見えないほど汚い、かつて泳いでいた鯉の姿も見えなくなってしまった川。その河岸は、どんなに汚くても、俺たちが本当の友達になっていった思い出の場所だった。直樹さんが何の気もなく見せる笑顔は、太陽が河岸でみせた、なんだかもう一度見たくなるそれによく似ていた。

直樹さんとは何度か仕事の事で会話した。そのキャラクターに反してとても野心的なビジョンを持っていた。実現性とビジョンとをいったりきたりして、実のある会話を気持ちよくできる、類稀な相手だ。

しかし最も印象に残っているのは、出張先のホテルの部屋で缶ビールを一緒に飲んだ夜、「僕は妻が本当に好き。いざという時、頼りになる。心が強いから、僕が弱った時にいてくれるのが嬉しい」と話してくれたことだ。

多分、関西支社に寄ろうと思った時に顔が浮かんだのは、そんな直樹さんの人としての魅力ゆえなんだろう。

大阪での仕事を終えて関西支社に着くと、直樹さんは待ってたよと言わんばかりに僕のほうへニコッと笑いかけた。「荷物ここに置き。それで、ちょっと下いこ。コーヒーでも飲も。」

俺たちは外に出て、彼のお気に入りの散歩コースを行った。話は自然と、いま謹慎中の僕らの同僚についての話になった。その話をするのに、俺たちは堂島川の河岸に座った。直樹さんは、謹慎中の同僚とは数年来の戦友で、心から信頼する友人だと話してくれた。俺も一年たたないぐらいの付き合いだが、歳が同じで高校も同じという奇遇さから、その能力の高さを尊敬していた。しかし同時に、あまりあるエネルギーや自信過剰なところに、危うさを感じていた。きっと、直樹さんも同じだったんだろう。僕らはそれを言うとでもなく、互いの想いを感じ合った。僕も直樹さんも、謹慎の理由について詮索したり噂したりする人々にうんざりしているのだ。とはいえ、直樹さんは、信頼する戦友の謹慎とその理由とされている事、真偽はともあれ、それがショックだったらしい。躊躇いながらも、打ち明けてくれた。僕は思わず聞いてしまった。「その感情って奥さんに聞いてもらうんですか？」と。直樹さんの答えはイエスだった。奥さんは、ただそれを聞いてくれるらしい。直樹さんは、その在り方が「頼りになる」と表現した。

俺は思わず、今思っていることを打ち明けた。東京での競争や知略、自分の力を証明しビジネスの世界にインパクトを作るという仕事、この極限のストレスの果てに15年後に何が残るのか。本当に大切な人と出会い、共に過ごす事の尊さを思えば、今必死に創り出している売上や、血眼になって数字をスライドやホワイトボードに書くことへの違和感がますます強くなる。直樹さんのように、「弱った時にいて欲しい人」と暮らせる場所で生きる、という事に近頃強く憧れている、そうあるべきなんじゃないかと思うようになってきたと。

直樹さんはただ聞いて、理解してくれた。

堂島川の汚い、川底の見えない緑を、2人で眺めた。太陽の光が川から反射して、高速道路の陰をキラキラと照らしていた。

そして最後に、直樹さんは彼が興そうとしているビジネスについて、秘匿していたその計画を、密かに打ち明けてくれた。そして、俺が持っている能力がそのビジネスに不可欠だと感じていると。そして、俺のキャラクターがその仲間に引き入れるに値する信頼と魅力があると。

とても嬉しかった。

時間が迫り、座っていた河岸を離れ渡辺橋を渡る間、直樹さんはとても嬉しそうな笑顔で、事業計画を話してくれた。その笑顔が、夏の太陽よりもずっと眩しかった。
`,
    translations: {
      en: {
        title: "The Sun by the River",
        body: `
I had time before my shinkansen, so I figured I'd at least go see what the place looked like. That was the only reason I stopped by the Kansai branch office. A face came to mind right then, and it was his. If I was going to the Kansai branch anyway, I thought I might as well ask whether I could see him.

Naoki-san, eight years older than me, lives in Wakayama. From the moment we first met, he struck me as friendly, easygoing, someone who puts up no walls between himself and other people. Naoki-san closely resembles my friend Taiyo, who's from Yamaguchi Prefecture. Both of them share the same natural brightness and lightness. They can become friends with someone they've just met within fifteen minutes. Sometimes I think, what a fool, and other times I'm struck by how carefully they've actually thought something through. Neither of them likes being made to compete. Nothing matters more to them than their comrades and friends. And more than that, even, their wife matters most.

When I was nineteen, Taiyo and I used to walk home together from cram school every day, and every once in a while we'd sit on the riverbank and drink beer we weren't supposed to be drinking, talking about life, the future, girls. I loved that Taiyo stubbornly stuck to his Yamaguchi dialect, had this warm, easygoing personality, and could still hold a real, serious conversation. The Tsurumi River in Yokohama — so filthy you couldn't see the bottom, a river where even the carp that used to swim there had disappeared from sight. However filthy it was, that riverbank was the place where the memory of us truly becoming friends took shape. The smile Naoki-san shows without a second thought closely resembles the one Taiyo used to show on that riverbank — the kind you somehow want to see again.

Naoki-san and I have talked about work several times. Contrary to what his personality might suggest, he holds a very ambitious vision. He's a rare conversation partner — someone with whom you can move back and forth between feasibility and vision and still have a substantive, genuinely enjoyable conversation.

But what stays with me most is a night on a business trip, drinking canned beer together in a hotel room, when he told me, "I really do love my wife. When it counts, she's someone I can rely on. Her heart is strong, and I'm grateful that she's there for me when I'm the one who's weak."

I suppose the reason his face came to mind when I thought about stopping by the Kansai branch is exactly that quality of his, that charm he has simply as a person.

When I finished my work in Osaka and arrived at the Kansai branch, Naoki-san smiled at me as if to say he'd been waiting. "Put your bags down here. Let's head downstairs for a bit — grab a coffee or something."

We stepped outside and took his favorite walking route. The conversation naturally turned to a colleague of ours who's currently on suspension. To talk about it, we sat down on the bank of the Dojima River. Naoki-san told me that the suspended colleague was a comrade-in-arms of several years, a friend he trusts from the bottom of his heart. I've known him less than a year myself, but given the coincidence of us being the same age and having gone to the same high school, I'd come to admire how capable he was. At the same time, though, I sensed something precarious in his overabundance of energy and his overconfidence. I'm sure Naoki-san felt the same way. Neither of us said so outright, but we could feel it in each other. Both Naoki-san and I are sick of the people who pry into or gossip about the reasons for the suspension. Even so, Naoki-san seemed genuinely shaken by what was said to be behind the suspension of a comrade he trusted — whether or not it was even true. Hesitantly, he opened up to me about it. I found myself asking, without quite meaning to, "Do you let your wife hear about that feeling?" Naoki-san's answer was yes. His wife, apparently, simply listens. Naoki-san described that quality of hers as being someone he could "rely on."

Without quite meaning to, I found myself opening up about what's been on my mind lately. The competition and scheming in Tokyo, the work of proving your own worth and making some impact on the business world — at the far end of this kind of extreme stress, what's actually left after fifteen years? When I think about the preciousness of meeting someone who truly matters and spending your life alongside them, the sense of wrongness about the revenue I'm desperately generating right now, about staring bloodshot-eyed at numbers on slides and whiteboards, only grows stronger. Lately I've come to feel a strong longing to live, the way Naoki-san does, in a place where I can be with "someone I'd want beside me when I'm weak" — and I've started to think that's how it probably should be.

Naoki-san just listened, and understood.

The two of us looked out at the murky green water of the Dojima River, its bottom invisible. Sunlight reflected off the river, glittering against the shadow of the expressway above.

And finally, Naoki-san quietly confided in me about the business he's trying to start — a plan he'd been keeping secret. He told me he felt that the abilities I have were indispensable to that business. And that my character carried enough trust and appeal to be worth bringing into that circle.

It made me genuinely happy.

As time closed in and we left the riverbank where we'd been sitting, crossing Watanabe Bridge, Naoki-san told me about his business plan with a genuinely happy smile on his face. That smile was far more dazzling than the summer sun.
`
      },
      uk: {
        title: "Сонце біля річки",
        body: `
До синкансена лишався час, тож я вирішив хоча б подивитися, що це за місце. Тільки заради цього я й заглянув у філію в Кансай. Саме тоді мені на думку спав один образ — його обличчя. Раз я все одно їхав до філії в Кансай, подумав, чи не запитати, чи зможу з ним побачитися.

Наокі-сан, який на вісім років старший за мене, живе у Вакаямі. З першої ж зустрічі він здався мені дуже дружелюбним, життєрадісним, людиною без жодних бар'єрів у спілкуванні. Наокі-сан дуже схожий на мого друга Тайо з префектури Ямаґуті. Обидва вони мають природну легкість і життєрадісність. За п'ятнадцять хвилин здатні потоваришувати з людиною, яку щойно зустріли. Іноді думаю: ну й дурень, а іноді — навпаки, дивуюся, наскільки серйозно вони насправді все обдумують. Не люблять, коли їх змушують змагатися. Понад усе цінують товаришів і друзів. А ще більше — дружину.

Коли мені було дев'ятнадцять, ми з Тайо щодня йшли пішки з підготовчих курсів додому і час від часу сідали на березі річки, пили пиво, яке нам іще не можна було пити, і говорили про життя, майбутнє, дівчат. Мені подобалося, що Тайо вперто тримався своєї ямаґуцької говірки, мав теплий, невимушений характер і водночас умів говорити по-справжньому серйозно. Річка Цурумі в Йокогамі — така брудна, що не видно було дна, річка, з якої зникли навіть коропи, що колись у ній плавали. Хоч яким брудним був той берег, саме там народжувалася пам'ять про те, як ми ставали справжніми друзями. Усмішка, яку Наокі-сан показує без жодної задньої думки, дуже схожа на ту, яку показував Тайо на тому березі — усмішку, яку чомусь хочеться побачити ще раз.

З Наокі-саном ми кілька разів говорили про роботу. Всупереч його характеру, у нього дуже амбітне бачення. Він рідкісний співрозмовник — з ним можна вільно рухатися між реалістичністю й баченням і при цьому мати змістовну, по-справжньому приємну розмову.

Але найбільше запам'яталася мені ніч у номері готелю під час відрядження, коли ми пили пиво з бляшанок, і він сказав мені: «Я справді дуже люблю свою дружину. У вирішальний момент на неї можна покластися. У неї сильне серце, тож мені приємно, що вона поруч, коли слабким виявляюся я».

Мабуть, саме через цю його людську привабливість мені й спало на думку його обличчя, коли я думав про те, щоб заглянути до філії в Кансай.

Закінчивши роботу в Осаці й прийшовши до філії в Кансай, я побачив, як Наокі-сан усміхнувся мені, ніби кажучи, що чекав. «Постав тут речі. А тоді ходімо вниз ненадовго, вип'ємо кави абощо».

Ми вийшли на вулицю й пройшли його улюбленим маршрутом для прогулянок. Розмова природно перейшла на нашого колегу, який зараз відсторонений від роботи. Щоб про це поговорити, ми сіли на березі річки Доджіма. Наокі-сан розповів мені, що з тим відстороненим колегою вони — бойові товариші вже кілька років, друг, якому він довіряє від щирого серця. Я знайомий з ним трохи менше року, але через дивний збіг — однаковий вік і та сама середня школа — я захоплювався його високими здібностями. Але водночас відчував небезпеку в його надмірній енергії та надмірній самовпевненості. Напевно, Наокі-сан відчував те саме. Ми не сказали цього прямо, але відчули це одне в одному. І я, і Наокі-сан однаково втомилися від людей, які пхають носа чи пліткують про причини відсторонення. І все ж Наокі-сана, здається, по-справжньому шокувало те, що вважалося причиною відсторонення довіреного бойового товариша, — правда це чи ні. Вагаючись, він усе ж розповів мені. Я не втримався й запитав: «А цим почуттям ви ділитеся з дружиною?» Наокі-сан відповів, що так. Виявляється, дружина просто його вислуховує. Наокі-сан назвав саме цю її якість тим, на що «можна покластися».

Я й сам, не зовсім усвідомлюючи це, розповів йому про те, що мене останнім часом турбує. Конкуренція й хитрощі в Токіо, робота, яка полягає в тому, щоб довести власну силу і справити вплив на світ бізнесу, — що ж, зрештою, залишиться через п'ятнадцять років на тлі цього граничного стресу? Коли думаю про те, наскільки цінно зустріти по-справжньому важливу людину й проводити з нею час, відчуття невідповідності через виторг, який я зараз відчайдушно створюю, через цифри, які я до нестями виводжу на слайдах і дошках, стає лише сильнішим. Останнім часом я все сильніше мрію жити так, як Наокі-сан, — у місці, де можна бути поруч із «людиною, яку хочеш мати поруч, коли ти слабкий», і почав думати, що, мабуть, так і має бути.

Наокі-сан просто слухав і розумів.

Ми удвох дивилися на брудну, непрозору зелень річки Доджіма, дно якої не було видно. Сонячне світло відбивалося від річки й виблискувало в тіні швидкісної автостради.

А наостанок Наокі-сан потай розповів мені про бізнес, який намагається створити, — план, який досі тримав у таємниці. І сказав, що вважає мої здібності незамінними для цього бізнесу. І що мій характер має достатньо довіри й привабливості, щоб бути вартим того, аби залучити мене до цього кола.

Мені було дуже приємно.

Час підганяв, і поки ми йшли, залишивши берег, на якому сиділи, і переходили міст Ватанабе, Наокі-сан із по-справжньому щасливою усмішкою розповідав мені про свій бізнес-план. Ця усмішка сяяла яскравіше за літнє сонце.
`
      }
    }
  },
  {
    date: "2026.09.22",
    title: "死に様について",
    body: `
僕の祖父、忠久さんの、ゆっくりお時間をかけた穏やかな死に方は、自分も周りの人も、それを受け入れられるための準備がよくできるようなものだったと思う。

僕が最後に会いに行く3日前には、寝ながら家族の名前を1人ずつ呼んで、ありがとうと繰り返し言っていたらしい。2日前から声が出なくなり、マジックで紙に、妻、僕の祖母の道子さんへ感謝の言葉を書き続けたらしい。

僕が会いに行った時には、もう目が白く濁りはじめて、おそらく見えていないだろうと道子さんに言われた。
僕が部屋に行くと、忠久さんはちゃんと黒い目をして、痩せて窪んだ顔で僕のことを見た。道子さんはそれを見て驚いていた。僕の母、恵子さんはそのときの表情が忘れられないと言う。
僕はしばらく立ち尽くしてしまったが、彼の手は握っていられた。道子さんや恵子さんはその間色々と喋っていたけど、僕が伝えたかった事は一つだけで、今の自分の想像力は小さい時に一緒に過ごした時間がちゃんと活きているからで、そのことで感謝しているという事をしっかり伝えると、忠久さんは最期の力を振り絞るようにして僕の手を握りしめてきた。骨しか無いような手なのに、大人の女性に負けないほど強い力だった。声は出せないけど、こちらを見る顔と握る手の力で、言葉でなくて良い、思いとも言えない何かが確実に伝わってきた。水の残っていない乾いた目に涙が浮かんでいるのも僕にはちゃんと見えた。彼について思い出すとき、銀の日産スカイラインの前で幼い僕を待っている背の高いスラっとした立ち姿や、居間で僕が既に知っている事について長々と教えてくるときの話し方が、最初に頭に浮かぶ印象だったが、この時の手の感覚がそれらを塗り替えたことに、葬式の最中に写真を眺めていて気づいた。
僕とのやり取りで思う事があったのか、もう会えないということを考えていたのか、あるいは単に疲れてしまったのか、そんな表情でぎゅっと目を瞑ってそのまま眠ってしまったので、僕は「またね」と言って帰った。
僕が帰ったあと、朝になる前に彼は亡くなった。

お通夜と葬式では、僕は何人かの人と話したり隣に座ったりしたが、その殆どがいい加減な人か、愚かな人に見えた。そんな中唯一、ユーモアと、さりげなくも確かな知性、お手本の様な気品を併せ持った素敵な女性がいた。和子さんというその親戚のおばさんは僕に、忠久さんの事を「よく、辛辣なことを冗談なのか本気なのか、どちらともとれるように言うことがあった。家にいながら、自分がいない場所の事もよくわかってしまうような人だった。親戚の中で厄介な人がいても忠久さんだけはちゃんと注意して、面倒を見てあげられる人だった。」と教えてくれた。僕にとっては孫と女の子に甘いだけの人に見えていたのに。

葬式を終えてから、家で道子さんたちは、「これが突然事故や何かで死んでしまったのだったら、きっとものすごく大変ね」と言っていた。

自分の行動で近い人に迷惑をかけないように努力すること。人にしてもらった事を忘れずにきちんと感謝すること。自分がした事は心ある誰かが見てくれていること。
僕の祖父は、死に様で見せてくれた。
`,
    translations: {
      en: {
        title: "On the Way He Died",
        body: `
I think the way my grandfather, Tadahisa, died — slowly, taking his time, at peace — was the kind of death that gave both himself and the people around him room to properly prepare to accept it.

Three days before I went to see him for the last time, they say that as he lay there, he called out each family member's name one by one, repeating "thank you" over and over. From two days before, he could no longer speak, and apparently kept writing words of gratitude to his wife — my grandmother, Michiko — on paper with a marker.

By the time I went to see him, his eyes had already begun to cloud over white, and Michiko told me he probably couldn't see anymore.
When I went into the room, Tadahisa's eyes were still properly dark, and with his thin, hollowed face, he looked right at me. Michiko was startled to see it. My mother, Keiko, says she can never forget the expression on his face in that moment.
I stood there frozen for a while, but I was able to hold his hand. Michiko and Keiko kept talking about various things the whole time, but the one thing I wanted to convey was just this: that my imagination now is alive precisely because of the time we spent together when I was small, and that I was grateful for that. When I made sure to tell him this clearly, Tadahisa, as if summoning his very last strength, gripped my hand tightly. His hand was nothing but bone, and yet the strength in it rivaled that of a grown woman. He couldn't speak, but through the face looking at me and the strength of that grip, something came through clearly — not words, not even quite feelings, but something undeniable all the same. I could see it plainly, too: tears welling up in eyes that had no water left in them, eyes gone dry. Whenever I think of him, what comes to mind first is the image of him standing tall and slender in front of his silver Nissan Skyline, waiting for me when I was small, or the way he used to talk on and on in the living room, explaining things I already knew. But it was while looking at photographs during the funeral that I realized the feeling of his hand in that moment had overwritten all of that.
Whether it was something he felt from our exchange, or he was thinking that he'd never see me again, or he had simply grown tired — with that kind of expression, he shut his eyes tightly and fell asleep just like that, so I said, "See you again," and went home.
After I left, before morning came, he passed away.

At the wake and the funeral, I talked with several people, sat next to some, but most of them struck me as careless or foolish people. In the midst of that, there was exactly one wonderful woman who combined humor, a quiet but unmistakable intelligence, and a dignity that felt like a model to follow. That relative, an aunt named Kazuko, told me about Tadahisa: "He'd often say something cutting in a way you couldn't tell was a joke or serious. Even while sitting at home, he seemed to understand what was going on in places he wasn't. Among the relatives, even when there was someone difficult, Tadahisa was the one who properly kept an eye on them and looked after them." To me, he'd only ever looked like a man who doted on his grandson and on girls.

After the funeral was over, back at the house, Michiko and the others were saying, "If he had died suddenly, in an accident or something, it would have been so much harder."

To make an effort so that your own actions don't burden the people close to you. To remember what others have done for you and properly give thanks for it. To know that someone with a good heart is watching what you do.
My grandfather showed me all of this through the way he died.
`
      },
      uk: {
        title: "Про те, як він пішов",
        body: `
Думаю, те, як помирав мій дідусь Тадахіса — повільно, не поспішаючи, спокійно, — було саме такою смертю, яка дала і йому самому, і людям навколо достатньо часу, щоб гідно підготуватися й прийняти це.

За три дні до того, як я поїхав побачити його востаннє, він, лежачи в ліжку, начебто кликав по імені кожного члена родини й раз у раз повторював «дякую». Із позаминулого дня голос у нього зник зовсім, і, кажуть, він продовжував писати маркером на папері слова вдячності дружині — моїй бабусі Мічіко.

Коли я приїхав його провідати, очі в нього вже почали каламутніти й біліти, і Мічіко сказала мені, що він, напевно, уже нічого не бачить.
Коли я зайшов до кімнати, у Тадахіси очі, як і раніше, були по-справжньому темними, і своїм схудлим, запалим обличчям він подивився на мене. Мічіко, побачивши це, була вражена. Моя мати, Кейко, каже, що не може забути вираз його обличчя в ту мить.
Я якийсь час стояв, не в змозі поворухнутися, але руку його тримати міг. Мічіко й Кейко весь цей час про щось говорили, та єдине, що я хотів донести, — це те, що моя нинішня уява живе саме завдяки часу, проведеному з ним у дитинстві, і що я за це вдячний. Коли я чітко це промовив, Тадахіса, ніби зібравши останні сили, міцно стиснув мою руку. Рука була наче з самих кісток, а сила в ній була не слабша, ніж у дорослої жінки. Говорити він не міг, але через погляд, спрямований на мене, і через силу цього стискання до мене дійшло щось цілком певне — не слова, навіть не зовсім почуття, але щось безсумнівне. Я також ясно бачив, як у сухих очах, у яких уже не лишилося вологи, виступили сльози. Коли я згадую про нього, першими зринають образи: як він, високий і стрункий, чекає на мене, маленького, біля свого срібного «Ніссан Скайлайн», або те, як у вітальні він довго-предовго розповідав мені те, що я вже й так знав. Але саме тоді, під час похорону, розглядаючи фотографії, я зрозумів, що відчуття від його руки в ту мить витіснило собою всі ці спогади.
Чи то через щось, що він відчув від нашого спілкування, чи то думаючи про те, що ми більше не побачимось, чи, може, просто втомившись, — з таким виразом обличчя він міцно заплющив очі й так і заснув, тож я сказав «до зустрічі» і поїхав додому.
Після того як я поїхав, ще до ранку він помер.

На поминках і похороні я з кимось розмовляв, поряд із кимось сидів, але майже всі здавалися мені або несерйозними, або нерозумними людьми. І серед них була лише одна чудова жінка, що поєднувала в собі почуття гумору, непоказний, але безсумнівний розум і гідність, гідну наслідування. Та родичка, тітка на ім'я Кадзуко, розповіла мені про Тадахісу: «Він часто говорив щось доволі різке так, що не можна було зрозуміти — жарт це чи серйозно. Навіть сидячи вдома, він якось добре розумів, що відбувається там, де його немає. Навіть коли серед родичів траплялася складна людина, лише Тадахіса міг як слід за нею наглянути і подбати про неї». А мені він завжди здавався людиною, яка просто балувала онука й дівчаток.

Після похорону, вдома, Мічіко та інші казали: «Якби він раптово загинув, наприклад, в аварії чи ще якось, було б, напевно, страшенно важко».

Намагатися своїми вчинками не завдавати клопоту близьким людям. Пам'ятати те, що для тебе зробили інші, і як слід за це дякувати. Знати, що те, що ти робиш, бачить хтось із чуйним серцем.
Мій дідусь показав мені все це через те, як він помер.
`
      }
    }
  },
  {
    date: "2026.09.22",
    title: "藤さんという監督",
    body: `
以前、映像を作る仕事で俳優のオーディションを手伝ったことがある。

オーディションの一次選考というのは、選ぶ側の机に座っていさえすれば、私のような素人目に見ても芝居ができているできていないがわかるものだと思った。

その中で、態度も芝居も案件理解も、これは無いな、という人がいた。藤さんという監督は、その人のいたグループをバラした後で、思い出したようにその娘を呼び止める様に言ったが、彼女は既に帰ってしまっていた。

「あの子は声がハスキーで特徴的だから、声の仕事を頑張る様に言いたかった」と言っていたのを見て、藤さんにはあの娘が態度も芝居も一流になる未来を想像できていて、そこから逆算して、道を照らすことができるんだと思った。

オーディションのあとで、監督に意図を質問したら、「せっかく今日来てくれて出会ったのだから、何か掴んで帰って欲しくて。」と帰ってきた。

藤さんはまだ40歳にも満たないぐらいの青年だが、人に与えるということについてその姿勢の気高さは右に出る者がいないのではなかろうかと思い、見習う事にした。
`,
    translations: {
      en: {
        title: "A Director Named Fuji",
        body: `
Some time ago, through video production work, I helped out with an actor audition.

I came to think that in the first round of an audition, all you have to do is sit at the selectors' table, and even an amateur eye like mine can tell whether someone's acting is working or not.

Among the candidates, there was one whose attitude, acting, and grasp of the project were all clearly lacking. A director named Fuji, after the group she'd been part of had already broken up and left, suddenly seemed to remember her and told someone to call her back — but she had already gone home.

Watching him say, "her voice is distinctive, husky — I wanted to tell her to work hard at voice acting," I felt that Fuji could actually picture a future in which that girl's attitude and acting had become first-rate, and that from that imagined future, working backward, he was able to light her path.

After the audition, I asked him what he'd meant by it, and he answered, "Since she came all this way today and we got to meet her, I wanted her to take something home with her."

Fuji is still a young man, not even forty, but I don't think anyone could surpass the nobility of his posture when it comes to giving to others — and I decided to try to learn from him.
`
      },
      uk: {
        title: "Режисер на ім'я Фудзі",
        body: `
Колись, у рамках роботи над відео, я допомагав проводити прослуховування для акторів.

Я подумав, що на першому етапі прослуховування достатньо просто сидіти за столом тих, хто обирає, — і навіть непрофесійному оку, як моє, стає зрозуміло, вдається гра чи ні.

Серед претендентів була одна дівчина, у якої явно не було ні потрібного ставлення, ні гри, ні розуміння завдання. Режисер на ім'я Фудзі, вже після того як група, до якої вона належала, розійшлася й пішла, ніби раптом щось пригадав і попросив покликати її назад — але вона вже пішла додому.

Дивлячись, як він сказав: «У неї особливий, хрипкуватий голос, тому я хотів порадити їй серйозно зайнятися озвучуванням», — я зрозумів, що Фудзі здатен уявити майбутнє, в якому і ставлення, і гра цієї дівчини стануть першокласними, і, відштовхуючись саме від цього уявного майбутнього, він може освітлювати їй шлях.

Після прослуховування я запитав режисера, що він мав на увазі, і він відповів: «Раз вже вона сьогодні прийшла і ми зустрілися, мені хотілося, щоб вона забрала додому хоч щось».

Фудзі — ще зовсім молода людина, йому навіть немає сорока, але, здається, за шляхетністю ставлення до того, як віддавати щось іншим, йому немає рівних — тож я вирішив брати з нього приклад.
`
      }
    }
  },
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
