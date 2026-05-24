const LINE_URL = "https://lin.ee/ZYIFncy";
const LINE_QR_URL = "https://qr-official.line.me/gs/M_144sclay_GW.png?oat_content=qr";

const heroFeatures = [
  "学習計画を毎月作成",
  "週1回の面談で進捗確認",
  "LINE相談と保護者共有に対応"
];

const worries = [
  "勉強計画を立てても続かない",
  "どの教材から進めればよいか分からない",
  "参考書や動画教材を最後まで使い切れない",
  "塾や学校の宿題以外の自宅学習が安定しない",
  "テスト前だけ頑張り、普段の勉強が続かない",
  "保護者が学習状況を把握しづらい"
];

const products = [
  {
    name: "動画パック",
    price: "9,800円",
    lead: "教材だけで始めたい方向けの買い切り商品です。",
    description:
      "録画講義・PDF教材・確認問題で、重要ポイントを自分のペースで確認できます。個別の進捗管理は含まれません。",
    items: [
      "録画講義",
      "PDF教材",
      "確認問題",
      "学習ガイド",
      "おすすめの進め方",
      "復習チェックリスト",
      "学び方のポイント解説"
    ]
  },
  {
    name: "コーチングライト",
    price: "月額14,800円",
    lead: "月2回の面談で、計画と進捗を確認するプランです。",
    description:
      "自分で勉強を進めながら、教材の優先順位や進め方を定期的に確認したい生徒に向いています。",
    items: [
      "月1回の学習計画作成",
      "月2回の面談",
      "学習進捗の確認",
      "課題の優先順位整理",
      "チャット相談",
      "必要に応じた動画パックの提案"
    ]
  },
  {
    name: "コーチング標準",
    price: "月額24,800円",
    lead: "週1回の面談で、学習管理を続ける基本プランです。",
    description:
      "週1回の面談で、学習計画・進捗確認・計画修正まで行う基本プランです。ひとりでは勉強が続きにくい生徒や、保護者が学習状況を把握したい場合におすすめです。",
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
    ]
  },
  {
    name: "上位プラン",
    price: "月額39,800円",
    lead: "受験期まで細かく伴走する手厚いプランです。",
    description:
      "志望校や受験時期に合わせて、学習内容・課題量・進め方を細かく調整します。保護者共有にも対応します。",
    items: [
      "標準プランの内容",
      "より細かい学習管理",
      "長めの面談時間",
      "課題の確認や添削",
      "志望校に合わせた学習方針の設計",
      "学習記録の細かな確認",
      "保護者への共有",
      "受験直前期の重点調整"
    ]
  }
];

const videoPackItems = [
  "録画講義で重要ポイントを確認",
  "PDF教材で手を動かして学習",
  "確認問題で理解度をチェック",
  "学習ガイドに沿って進められる",
  "復習チェックリストで抜け漏れを確認"
];

const coachingItems = [
  "毎月の学習計画作成",
  "週1回の進捗確認",
  "教材の優先順位整理",
  "遅れに合わせた計画修正",
  "LINEでの相談対応",
  "必要に応じた保護者共有"
];

const steps = [
  {
    title: "LINEで相談",
    text: "現在の学習状況、使っている教材、困っていることをLINEで送ってください。"
  },
  {
    title: "初回面談",
    text: "Zoomで目標、教材、普段の勉強時間を確認します。どのプランが合うかも整理します。"
  },
  {
    title: "商品・プランを選択",
    text: "状況に合わせて、動画パック、ライト、標準、上位プランから選びます。"
  },
  {
    title: "学習開始",
    text: "教材と学習計画に沿って、毎日の勉強を進めます。"
  },
  {
    title: "進捗確認・計画修正",
    text: "コーチングでは面談とLINEで進み具合を確認し、遅れや理解度に合わせて計画を直します。"
  }
];

const recommended = [
  "計画を立てても勉強が続かない",
  "教材の優先順位を決めてほしい",
  "塾や学校の教材をうまく使いたい",
  "自宅学習の進み具合を見てほしい",
  "毎週の面談がある方が続けやすい",
  "保護者も学習状況を確認したい"
];

const faqs = [
  {
    q: "動画パックだけでも利用できますか？",
    a: "はい。動画パックだけでも利用できます。録画講義と教材で、自分のペースで進めたい方に向いています。"
  },
  {
    q: "コーチングでは授業もありますか？",
    a: "基本は授業ではなく、学習計画・進捗確認・計画修正が中心です。必要に応じて、教材の使い方も相談できます。"
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
    a: "はい。学習状況や時期に合わせて、プラン変更も相談できます。"
  }
];

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-center text-base font-bold text-white shadow-sm transition hover:bg-primary-700 sm:w-auto ${className}`}
    >
      LINEで無料相談する
    </a>
  );
}

function LineQrCode() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-col items-center rounded-xl bg-white p-3 text-center text-xs font-bold text-slate-700 shadow-sm transition hover:bg-primary-50"
    >
      <img src={LINE_QR_URL} alt="LINE公式アカウントのQRコード" className="h-28 w-28" />
      <span className="mt-2">QRコードから相談</span>
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
          <h1 className="mt-5 whitespace-nowrap text-base font-extrabold leading-tight tracking-normal text-slate-950 sm:text-3xl lg:text-4xl xl:text-5xl">
            自宅学習を、ひとり任せにしない。
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            学習計画・進捗確認・計画修正まで、LINEと面談で継続的にサポートします。
          </p>
          <div className="mt-6 inline-flex items-end gap-2 rounded-2xl border border-primary-100 bg-primary-50 px-5 py-4">
            <span className="text-sm font-bold text-primary-700">月額</span>
            <span className="text-3xl font-extrabold tracking-normal text-primary-700">14,800円〜</span>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <LineButton />
            <AnchorButton href="#service">サービス内容を見る</AnchorButton>
          </div>
        </div>
        <div className="rounded-2xl border border-primary-50 bg-primary-50 p-5 sm:p-6">
          <p className="text-sm font-bold text-primary-700">相談前に分かる主なサポート</p>
          <div className="mt-4 space-y-3">
            {heroFeatures.map((feature) => (
              <div key={feature} className="rounded-xl bg-white p-4 text-sm font-bold text-slate-800 shadow-sm">
                {feature}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            勉強の進み具合を生徒と保護者の両方が把握しやすいように、計画と課題を整理します。
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
          title="計画作成から進捗確認までまとめてサポート"
          text="月ごとに学習計画を作り、週ごとに進み具合を確認します。塾や学校の教材も含めて優先順位を整理し、予定通りに進まない時は計画を修正します。"
        />
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-950">毎月、学習計画を作成</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              目標、テスト日程、使用教材を確認し、今月やる範囲を決めます。教材が多い場合は、優先順位も整理します。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-950">毎週、進捗を確認</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              面談で、終わった内容、残っている課題、理解が不安な単元を確認します。遅れている場合は、翌週の量や順番を調整します。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-950">LINE相談と保護者共有</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              LINEで教材の進め方や優先順位を相談できます。必要に応じて、学習状況や今後の方針を保護者にも共有します。
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
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="inline-flex rounded-full bg-primary-600 px-3 py-1 text-xs font-bold text-white">
                      一番おすすめ
                    </span>
                    <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                      迷ったらこのプラン
                    </span>
                  </div>
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
            text="コーチングの前に教材を試したい方は、動画パックから始められます。録画講義・PDF教材・確認問題で、自分のペースで学べます。"
          />
          <div className="rounded-2xl border border-slate-200 p-5 sm:p-6">
            <h3 className="font-bold text-slate-950">動画パックでできること</h3>
            <div className="mt-4">
              <CheckList items={videoPackItems} />
            </div>
            <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              動画パックは、学習内容を確認するための商品です。進捗管理や計画修正まで希望する場合は、LINEでコーチングプランをご相談ください。
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
              text="コーチングでは、毎月の学習計画と週1回の進捗確認を行います。学校や塾の教材、参考書、動画教材の中から優先順位を決め、今やることを具体的にします。"
            />
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              計画通りに進まない時は、勉強時間、教材の難しさ、優先順位を確認します。そのうえで、翌週に進める量や順番を調整します。
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
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">まずはLINEで学習状況を相談してください</h2>
          <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-primary-50 sm:text-base">
            <p>
              今使っている教材、テスト日程、普段の勉強時間を送ってください。
            </p>
            <p>動画パックで始めるか、コーチングで管理するかを一緒に整理します。</p>
            <p>保護者からの相談も受け付けています。</p>
          </div>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-end">
            <LineButton className="bg-white text-primary-700 hover:bg-primary-50" />
            <LineQrCode />
          </div>
        </div>
      </section>
    </main>
  );
}
