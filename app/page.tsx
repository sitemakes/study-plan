const LINE_URL = "https://line.me/R/ti/p/@xxxxx";

const heroFeatures = [
  "動画で自分のペースで復習できる",
  "今やることがはっきりする",
  "面談とLINEで進み具合を見直せる"
];

const worries = [
  "計画を立てても、気づくと続かなくなっている",
  "何から勉強すればいいか分からない",
  "参考書や動画教材を買っても、最後まで使いきれない",
  "塾に通っていても、自宅学習がなかなか安定しない",
  "テスト前だけ頑張って、普段の勉強が続かない",
  "保護者が子どもの学習状況を把握しづらい"
];

const products = [
  {
    name: "動画パック",
    price: "9,800円",
    lead: "まずは自分のペースで始めたい方におすすめです。",
    description:
      "録画講義とPDF教材を使いながら、重要ポイントを確認できます。個別の進捗管理はありませんが、勉強の進め方や復習の仕方を一通り確認できます。",
    items: [
      "録画講義",
      "PDF教材",
      "確認問題",
      "学習ガイド",
      "おすすめの進め方",
      "復習チェックリスト",
      "学び方のポイント解説"
    ],
    fit: [
      "まずは手軽に試したい人",
      "自分のペースで学びたい人",
      "独学で進めたい人",
      "コーチングの前に教材を試してみたい人"
    ]
  },
  {
    name: "コーチングライト",
    price: "月額14,800円",
    lead: "計画づくりと進捗確認を、無理のないペースで行うプランです。",
    description:
      "基本的には自分で勉強を進められるけれど、計画や優先順位を一緒に整理してほしい生徒に向いています。",
    items: [
      "月1回の学習計画作成",
      "月2回の面談",
      "学習進捗の確認",
      "課題の優先順位整理",
      "チャット相談",
      "必要に応じた動画パックの提案"
    ],
    fit: [
      "最低限のサポートがほしい人",
      "自分でも勉強を進められる人",
      "定期的に勉強の方向性を確認したい人"
    ]
  },
  {
    name: "コーチング標準",
    price: "月額24,800円",
    lead: "このサービスの基本となる、継続サポート型のプランです。",
    description:
      "学習計画を作って終わりではなく、週ごとに進み具合を確認します。必要に応じて、計画や勉強方法も一緒に見直します。",
    featured: true,
    items: [
      "月ごとの学習方針の設計",
      "月4回の面談",
      "週ごとの進捗確認",
      "課題管理",
      "理解度の確認",
      "勉強方法の見直し",
      "模試や定期テストの振り返り",
      "チャット相談",
      "必要に応じた学習計画の修正"
    ],
    fit: [
      "一人では勉強が続きにくい人",
      "毎週確認してもらう方が頑張りやすい人",
      "計画から振り返りまで見てほしい人"
    ]
  },
  {
    name: "上位プラン",
    price: "月額39,800円",
    lead: "より細かく見てほしい方のためのプランです。",
    description:
      "志望校や受験時期に合わせて、学習内容や進め方を細かく調整します。保護者への共有も含め、状況を見ながら進めます。",
    items: [
      "標準プランの内容",
      "より細かい学習管理",
      "長めの面談時間",
      "課題の確認や添削",
      "志望校に合わせた学習方針の設計",
      "学習記録の細かな確認",
      "保護者への共有",
      "受験直前期の重点調整"
    ],
    fit: [
      "手厚い個別サポートを受けたい人",
      "難関校や難関大学を目指している人",
      "受験まで細かく伴走してほしい人",
      "保護者にも学習状況を共有したい人"
    ]
  }
];

const videoPackItems = [
  "重要ポイントを動画で確認できる",
  "PDF教材で手を動かしながら学べる",
  "確認問題で理解度をチェックできる",
  "おすすめの進め方に沿って学習できる",
  "復習チェックリストで抜け漏れを確認できる"
];

const coachingItems = [
  "学習計画の作成",
  "週ごとの進捗確認",
  "課題の優先順位整理",
  "勉強方法の見直し",
  "模試や定期テストの振り返り",
  "LINEでの相談対応"
];

const steps = [
  {
    title: "LINEで相談",
    text: "まずは、今の学習状況や困っていることをLINEで送ってください。"
  },
  {
    title: "初回面談",
    text: "Zoomで、目標・使っている教材・普段の勉強状況を確認します。動画パックが合うのか、コーチングプランが合うのかも一緒に整理します。"
  },
  {
    title: "商品・プランを選択",
    text: "状況に合わせて、動画パック、ライト、標準、上位プランから選びます。"
  },
  {
    title: "学習開始",
    text: "動画教材や学習計画に沿って、無理のないペースで学習を進めます。"
  },
  {
    title: "進捗確認・計画修正",
    text: "コーチングプランでは、面談やLINEで進み具合を確認し、必要に応じて計画を見直します。"
  }
];

const comparison = [
  {
    name: "動画パック",
    price: "9,800円",
    target: "まず試してみたい人",
    contents: "録画講義、PDF教材、確認問題、学習ガイド、復習チェックリスト",
    fit: "自分のペースで学びたい人"
  },
  {
    name: "コーチングライト",
    price: "14,800円／月",
    target: "最低限のサポートがほしい人",
    contents: "月1回の学習計画作成、月2回の面談、進捗確認、チャット相談",
    fit: "自分で進めつつ、計画管理を手伝ってほしい人"
  },
  {
    name: "コーチング標準",
    price: "24,800円／月",
    target: "継続的に学習管理をしてほしい人",
    contents: "月ごとの学習方針設計、月4回の面談、週次確認、計画修正、チャット相談",
    fit: "一人では勉強が続きにくい人"
  },
  {
    name: "上位プラン",
    price: "39,800円／月",
    target: "手厚い個別サポートを受けたい人",
    contents: "標準プランの内容、志望校別の学習方針、課題確認、保護者共有",
    fit: "受験まで細かく見てほしい人"
  }
];

const recommended = [
  "計画を立てても勉強が続かない",
  "動画や参考書を買っても使いこなせない",
  "自分に合った勉強の進め方が分からない",
  "塾以外の自宅学習も整えたい",
  "毎週の進捗確認がある方が頑張りやすい",
  "保護者も学習状況を把握したい"
];

const faqs = [
  {
    q: "動画パックだけでも利用できますか？",
    a: "はい。動画パックだけでも利用できます。自分のペースで学びたい方に向いています。"
  },
  {
    q: "コーチングでは授業もありますか？",
    a: "基本は授業ではなく、学習計画と進捗管理が中心です。必要に応じて、勉強内容や勉強方法の相談もできます。"
  },
  {
    q: "初回面談はプランに含まれますか？",
    a: "初回面談は、利用開始前に状況を確認するためのものです。各プランの内容とは分けて案内しています。"
  },
  {
    q: "LINEだけで利用できますか？",
    a: "日々の連絡はLINEで行います。面談はZoomで行う想定です。"
  },
  {
    q: "保護者も内容を確認できますか？",
    a: "希望があれば、学習状況や今後の方針を保護者にも共有できます。"
  },
  {
    q: "途中でプラン変更できますか？",
    a: "はい。学習状況や時期に合わせて、プラン変更の相談もできます。"
  }
];

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-center text-base font-bold text-white shadow-sm transition hover:bg-primary-700 sm:w-auto ${className}`}
    >
      LINEで無料相談する
    </a>
  );
}

function AnchorButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-primary-600 bg-white px-6 py-3 text-center text-base font-bold text-primary-700 transition hover:bg-primary-50 sm:w-auto"
    >
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-bold text-primary-700">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-extrabold tracking-normal text-slate-950 sm:text-3xl">{title}</h2>
      {text ? <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{text}</p> : null}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-slate-800">
      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-sm font-bold text-primary-700">
            中高生向けオンライン学習サポート
          </p>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-normal text-slate-950 sm:text-5xl">
            勉強の計画倒れを、動画とコーチングで防ぐ。
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            動画で学び、面談で進み具合を確認。ひとりでは続きにくい勉強を、計画づくりから見直しまでサポートします。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <LineButton />
            <AnchorButton href="#service">サービス内容を見る</AnchorButton>
            <AnchorButton href="#pricing">プランを見る</AnchorButton>
          </div>
        </div>
        <div className="rounded-2xl border border-primary-50 bg-primary-50 p-5 sm:p-6">
          <p className="text-sm font-bold text-primary-700">続けやすさを支える3つのポイント</p>
          <div className="mt-4 space-y-3">
            {heroFeatures.map((feature) => (
              <div key={feature} className="rounded-xl bg-white p-4 text-sm font-bold text-slate-800 shadow-sm">
                {feature}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            生徒本人にも、学習状況を見守りたい保護者にも分かりやすい形で、日々の勉強を整理します。
          </p>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="こんな悩みはありませんか？" />
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {worries.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeader
          eyebrow="SERVICE"
          title="勉強を「やる気」だけに頼らない"
          text="勉強が続かないのは、やる気がないからとは限りません。やることが曖昧だったり、進み具合を見直す機会がなかったりすると、続けるのが難しくなります。"
        />
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-950">動画で内容を確認</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              録画講義やPDF教材で、重要ポイントを自分のペースで確認できます。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-950">計画と進捗を一緒に整理</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              何を、いつまでに、どう進めるかを整理し、日々の勉強に落とし込みます。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-950">うまく進まない時も見直す</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              予定通りに進まない時も、原因を一緒に整理して、次の計画に反映します。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="LINEUP" title="目的に合わせて選べる学習サポート" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.name}
                className={`rounded-2xl border bg-white p-5 shadow-sm ${
                  product.featured ? "border-primary-600" : "border-slate-200"
                }`}
              >
                {product.featured ? (
                  <p className="mb-3 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                    基本プラン
                  </p>
                ) : null}
                <h3 className="text-xl font-extrabold text-slate-950">{product.name}</h3>
                <p className="mt-2 text-2xl font-extrabold text-primary-700">{product.price}</p>
                <p className="mt-4 text-sm font-bold leading-6 text-slate-800">{product.lead}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{product.description}</p>
                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="text-sm font-bold text-slate-950">内容</p>
                  <div className="mt-3">
                    <CheckList items={product.items} />
                  </div>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="text-sm font-bold text-slate-950">向いている人</p>
                  <div className="mt-3">
                    <CheckList items={product.fit} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="VIDEO PACK"
            title="まずは動画パックから始められます"
            text="いきなりコーチングを受けるのが不安な方は、動画パックから始めることもできます。録画講義・PDF教材・確認問題・学習ガイドを使って、自分のペースで学べます。"
          />
          <div className="rounded-2xl border border-slate-200 p-5 sm:p-6">
            <h3 className="font-bold text-slate-950">動画パックでできること</h3>
            <div className="mt-4">
              <CheckList items={videoPackItems} />
            </div>
            <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              動画パックは、学習内容の理解や勉強の進め方を確認するための商品です。個別の進捗管理や計画の見直しを希望する場合は、コーチングプランをご案内します。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="COACHING"
              title="コーチングで、勉強を続ける流れを作る"
              text="コーチングでは、学習計画を作るだけでなく、進み具合の確認と計画の見直しまで行います。"
            />
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              計画通りに進まなかった時も、ただ反省するだけでは終わりません。勉強時間、教材の難しさ、優先順位を整理し、次の計画に反映します。
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
            <h3 className="font-bold text-slate-950">主なサポート内容</h3>
            <div className="mt-4">
              <CheckList items={coachingItems} />
            </div>
            <div className="mt-6">
              <LineButton />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeader eyebrow="FLOW" title="利用開始までの流れ" />
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm font-extrabold text-primary-700">STEP {index + 1}</p>
              <h3 className="mt-2 font-bold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-primary-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="PRICE" title="料金プラン" text="料金と主な内容を比べられます。スマホでは、見やすいカード形式で表示しています。" />
          <div className="mt-8 space-y-4 lg:hidden">
            {comparison.map((plan) => (
              <article key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-extrabold text-slate-950">{plan.name}</h3>
                <p className="mt-2 text-2xl font-extrabold text-primary-700">{plan.price}</p>
                <dl className="mt-4 space-y-3 text-sm leading-6">
                  <div>
                    <dt className="font-bold text-slate-950">対象</dt>
                    <dd className="mt-1 text-slate-600">{plan.target}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-950">主な内容</dt>
                    <dd className="mt-1 text-slate-600">{plan.contents}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-950">向いている人</dt>
                    <dd className="mt-1 text-slate-600">{plan.fit}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="mt-8 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block">
            <table className="w-full table-fixed text-left text-sm">
              <thead className="bg-slate-50 text-slate-950">
                <tr>
                  <th className="w-1/6 px-4 py-4 font-bold">商品名</th>
                  <th className="w-1/6 px-4 py-4 font-bold">料金</th>
                  <th className="w-1/5 px-4 py-4 font-bold">対象</th>
                  <th className="w-1/3 px-4 py-4 font-bold">主な内容</th>
                  <th className="w-1/5 px-4 py-4 font-bold">向いている人</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.map((plan) => (
                  <tr key={plan.name} className="align-top">
                    <td className="px-4 py-5 font-bold text-slate-950">{plan.name}</td>
                    <td className="px-4 py-5 font-bold text-primary-700">{plan.price}</td>
                    <td className="px-4 py-5 leading-7 text-slate-600">{plan.target}</td>
                    <td className="px-4 py-5 leading-7 text-slate-600">{plan.contents}</td>
                    <td className="px-4 py-5 leading-7 text-slate-600">{plan.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <LineButton />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeader title="このような方におすすめです" />
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 p-4 text-sm font-bold leading-7 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="よくある質問" />
          <div className="mt-7 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer font-bold text-slate-950">{faq.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-2xl bg-primary-600 p-6 text-white sm:p-10 lg:p-12">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">まずは今の学習状況を相談してください</h2>
          <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-primary-50 sm:text-base">
            <p>
              勉強が続かない理由は、やる気だけではありません。やることが曖昧だったり、進み具合を見直す機会がなかったりすることもあります。
            </p>
            <p>動画で学ぶだけでよいのか。コーチングで管理した方がよいのか。</p>
            <p>今の学習状況に合わせて、合う進め方を一緒に整理します。</p>
          </div>
          <div className="mt-7">
            <LineButton className="bg-white text-primary-700 hover:bg-primary-50" />
          </div>
        </div>
      </section>
    </main>
  );
}
