import type { ReactNode } from "react";

const LINE_URL = "https://line.me/R/ti/p/@xxxxx";

const heroFeatures = [
  "動画で自分のペースで学べる",
  "学習計画を作成してやることを明確にする",
  "面談とLINEで進捗を確認できる"
];

const worries = [
  "勉強計画を立てても続かない",
  "何から始めればいいか分からない",
  "参考書や動画を買っても使いきれない",
  "塾に通っているが、自宅学習が安定しない",
  "テスト前だけ頑張って、普段の勉強が続かない",
  "保護者が学習状況を把握しづらい"
];

const products = [
  {
    name: "動画パック",
    price: "9,800円",
    label: "まず試したい方向け",
    description: "動画パックは、まず学習内容を理解したい人向けの商品です。録画講義と教材を使って、自分のペースで学習できます。個別の進捗管理は含みませんが、勉強の進め方や復習方法を確認できます。",
    contents: [
      "録画講義",
      "PDF教材",
      "確認問題",
      "学習ガイド",
      "おすすめの進め方",
      "復習チェックリスト",
      "学び方のポイント解説"
    ],
    suitedFor: [
      "まずは手軽に始めたい人",
      "自分のペースで学びたい人",
      "独学で進めたい人",
      "いきなりコーチングを受けるのは不安な人"
    ]
  },
  {
    name: "コーチングライト",
    price: "月額14,800円",
    label: "最低限の伴走",
    description: "ライトプランは、学習計画と進捗確認を中心にしたプランです。自分で勉強を進められる生徒に向いています。",
    contents: [
      "月1回の学習計画作成",
      "月2回の面談",
      "学習進捗チェック",
      "課題の優先順位整理",
      "チャット相談（月数回まで）",
      "おすすめ動画パックの提案"
    ],
    suitedFor: [
      "最低限の伴走がほしい人",
      "独学はできるが、計画管理だけ支援してほしい人",
      "勉強の方向性を定期的に確認したい人"
    ]
  },
  {
    name: "コーチング標準",
    price: "月額24,800円",
    label: "おすすめ",
    featured: true,
    description: "標準プランは、このサービスの中心となるプランです。学習計画だけでなく、週ごとの進捗確認と修正まで行います。",
    contents: [
      "月ごとの学習戦略設計",
      "月4回の面談",
      "週次の進捗確認",
      "課題管理",
      "理解度確認",
      "勉強法の修正",
      "模試、定期テスト結果の振り返り",
      "チャット相談",
      "必要に応じた学習計画の再設計"
    ],
    suitedFor: [
      "一人では勉強が続きにくい人",
      "毎週の確認があった方が頑張れる人",
      "成績向上まで見据えて支援を受けたい人"
    ]
  },
  {
    name: "上位プラン",
    price: "月額39,800円",
    label: "手厚い個別対応",
    description: "上位プランは、より手厚い個別対応を求める方向けのプランです。志望校や受験時期に合わせて、細かく学習内容を調整します。",
    contents: [
      "標準プランの内容",
      "より細かい学習管理",
      "面談時間を長めに確保",
      "課題添削",
      "志望校別の学習戦略",
      "学習記録の細かな確認",
      "保護者共有",
      "受験直前の重点調整"
    ],
    suitedFor: [
      "手厚い個別対応を求める人",
      "難関校、難関大を目指している人",
      "受験まで細かく伴走してほしい人",
      "保護者とも学習状況を共有したい人"
    ]
  }
];

const videoPackFeatures = [
  "重要ポイントを動画で確認できる",
  "PDF教材で手を動かしながら学べる",
  "確認問題で理解度をチェックできる",
  "おすすめの進め方に沿って学習できる",
  "復習チェックリストで抜け漏れを防げる"
];

const coachingSupports = [
  "学習計画の作成",
  "週ごとの進捗確認",
  "課題の優先順位整理",
  "勉強法の見直し",
  "模試や定期テストの振り返り",
  "LINEでの相談対応"
];

const steps = [
  {
    title: "LINEで相談",
    text: "まずは現在の学習状況や悩みを送ってください。"
  },
  {
    title: "初回面談",
    text: "Zoomで目標、使用教材、現在の勉強状況を確認します。動画パックが合うか、コーチングが合うかも整理します。"
  },
  {
    title: "商品・プランを選択",
    text: "学習状況に合わせて、動画パック、ライト、標準、上位プランから選びます。"
  },
  {
    title: "学習開始",
    text: "動画教材や学習計画に沿って、学習を進めます。"
  },
  {
    title: "進捗確認・計画修正",
    text: "コーチングプランでは、面談やLINEで進捗を確認し、必要に応じて計画を修正します。"
  }
];

const planComparison = [
  {
    name: "動画パック",
    price: "9,800円",
    target: "まず試してみたい人",
    contents: "録画講義、PDF教材、確認問題、学習ガイド、復習チェックリスト",
    suitedFor: "自分のペースで学びたい人"
  },
  {
    name: "コーチングライト",
    price: "14,800円／月",
    target: "最低限の伴走がほしい人",
    contents: "月1回の学習計画作成、月2回の面談、進捗チェック、チャット相談",
    suitedFor: "独学はできるが、計画管理がほしい人"
  },
  {
    name: "コーチング標準",
    price: "24,800円／月",
    target: "継続管理まで見てほしい人",
    contents: "月ごとの学習戦略、月4回の面談、週次確認、計画修正、チャット相談",
    suitedFor: "一人では継続しづらい人"
  },
  {
    name: "上位プラン",
    price: "39,800円／月",
    target: "手厚い個別対応を求める人",
    contents: "標準プランの内容、志望校別戦略、課題添削、保護者共有",
    suitedFor: "受験まで細かく伴走してほしい人"
  }
];

const recommendedUsers = [
  "勉強計画を立てても続かない",
  "動画や参考書を買っても使いこなせない",
  "自分に合う勉強の進め方が分からない",
  "塾以外の自宅学習を管理してほしい",
  "毎週の進捗確認があった方が頑張れる",
  "保護者も学習状況を把握したい"
];

const faqs = [
  {
    q: "動画パックだけでも利用できますか？",
    a: "はい。動画パックだけでも利用できます。自分のペースで学びたい方に向いています。"
  },
  {
    q: "コーチングでは授業もありますか？",
    a: "基本は授業中心ではなく、学習計画と進捗管理が中心です。必要に応じて、勉強内容や勉強法の相談も行います。"
  },
  {
    q: "初回面談はプランに含まれますか？",
    a: "初回面談は、現在の学習状況を確認するためのものです。各プランの中身としてではなく、利用開始時の流れとして案内します。"
  },
  {
    q: "LINEだけで利用できますか？",
    a: "連絡はLINEで行います。面談はZoomを想定しています。"
  },
  {
    q: "保護者も内容を確認できますか？",
    a: "希望があれば、学習状況や今後の方針を保護者にも共有できます。"
  },
  {
    q: "途中でプラン変更できますか？",
    a: "学習状況に応じて、プラン変更の相談ができます。"
  }
];

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      className={`inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-center text-base font-bold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600 sm:w-auto ${className}`}
    >
      LINEで無料相談する
    </a>
  );
}

function AnchorButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl border border-primary-200 bg-white px-6 py-4 text-center text-base font-bold text-primary-700 transition hover:bg-primary-50 sm:w-auto"
    >
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="text-sm font-bold text-primary-600">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{description}</p> : null}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-black text-primary-600">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-primary-50/40 to-white text-slate-800">
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="grid items-center gap-8 rounded-[2rem] border border-primary-100 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="inline-flex rounded-full bg-primary-50 px-4 py-2 text-xs font-bold text-primary-700">中高生・保護者向けオンライン学習サポート</p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              勉強の計画倒れを、<br className="sm:hidden" />動画とコーチングで防ぐ。
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
              動画で学び、面談で確認。計画作成から進捗管理まで、続けやすい学習を支えます。
            </p>
            <div className="mt-7 grid gap-3 sm:flex">
              <LineButton />
              <AnchorButton href="#service">サービス内容を見る</AnchorButton>
              <AnchorButton href="#plans">プランを見る</AnchorButton>
            </div>
          </div>

          <div className="rounded-3xl bg-primary-600 p-5 text-white shadow-xl shadow-primary-100 sm:p-6">
            <p className="text-sm font-bold text-primary-100">3つの特徴</p>
            <div className="mt-4 space-y-3">
              {heroFeatures.map((feature, index) => (
                <div key={feature} className="rounded-2xl bg-white/95 p-4 text-slate-900">
                  <p className="text-xs font-bold text-primary-600">POINT {index + 1}</p>
                  <p className="mt-1 font-bold leading-7">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8" id="worries">
        <SectionHeader title="こんな悩みはありませんか？" description="中高生本人にも、見守る保護者にも起こりやすい悩みです。" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {worries.map((worry) => (
            <div key={worry} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-7 shadow-sm">
              {worry}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8" id="service">
        <div className="rounded-[2rem] bg-slate-950 p-6 text-white sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-emerald-300">解決策</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">学習を「やる気」だけに頼らない</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-200 sm:text-base">
              <p>勉強が続かない原因は、やる気だけではありません。</p>
              <p>やることが曖昧だったり、進み具合を確認する仕組みがないことも大きな原因です。</p>
              <p>このサービスでは、動画教材で学習内容を理解し、コーチングで進捗を確認します。うまく進まなかった場合も、原因を整理して、次の計画に修正します。</p>
              <p>「何をやるか」がはっきりすることで、毎日の勉強に取り組みやすくなります。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8" id="lineup">
        <SectionHeader eyebrow="商品ラインナップ" title="目的に合わせて選べる学習サポート" description="動画だけで始めたい方も、学習管理まで任せたい方も選べます。" />
        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className={`flex flex-col rounded-3xl border bg-white p-5 shadow-sm ${product.featured ? "border-primary-500 ring-4 ring-primary-50" : "border-slate-200"}`}>
              <div>
                <p className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${product.featured ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-700"}`}>{product.label}</p>
                <h3 className="mt-4 text-xl font-extrabold text-slate-950">{product.name}</h3>
                <p className="mt-2 text-2xl font-black text-primary-700">{product.price}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
              </div>
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="mb-3 text-sm font-bold text-slate-950">内容</p>
                <CheckList items={product.contents} />
              </div>
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="mb-3 text-sm font-bold text-slate-950">向いている人</p>
                <CheckList items={product.suitedFor} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-primary-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold text-primary-600">動画パック</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">まずは動画パックから始められます</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>いきなりコーチングを受けるのが不安な方は、動画パックから始められます。</p>
              <p>録画講義、PDF教材、確認問題、学習ガイドを使って、自分のペースで学習できます。</p>
            </div>
            <div className="mt-6">
              <CheckList items={videoPackFeatures} />
            </div>
            <p className="mt-6 rounded-2xl bg-primary-50 p-4 text-sm leading-7 text-primary-900">
              動画パックは、知識理解や勉強法の型を学ぶための商品です。個別の学習管理や進捗確認を希望する場合は、コーチングプランを案内します。
            </p>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold text-emerald-600">コーチング</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">コーチングで、勉強を続ける仕組みを作る</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>コーチングでは、学習計画を作るだけでなく、進み具合の確認と計画の修正まで行います。</p>
              <p>計画通りに進まなかった場合も、原因を整理します。勉強時間、教材の難しさ、優先順位を確認し、次の計画に反映します。</p>
            </div>
            <div className="mt-6">
              <CheckList items={coachingSupports} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8" id="flow">
        <SectionHeader eyebrow="利用の流れ" title="利用開始までの流れ" description="初回面談は、申し込み前後に学習状況を整理するためのステップです。" />
        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-primary-600">STEP {index + 1}</p>
              <h3 className="mt-2 text-lg font-extrabold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8" id="plans">
        <SectionHeader eyebrow="料金プラン" title="料金プラン" description="スマホでは横にスクロールして比較できます。商品ごとの違いを簡単に確認できます。" />
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden overflow-x-auto md:block">
            <table className="min-w-[900px] divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-primary-50 text-slate-950">
                <tr>
                  <th className="px-4 py-4 font-bold">商品名</th>
                  <th className="px-4 py-4 font-bold">料金</th>
                  <th className="px-4 py-4 font-bold">対象</th>
                  <th className="px-4 py-4 font-bold">主な内容</th>
                  <th className="px-4 py-4 font-bold">向いている人</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {planComparison.map((plan) => (
                  <tr key={plan.name} className="align-top">
                    <td className="px-4 py-5 font-extrabold text-slate-950">{plan.name}</td>
                    <td className="px-4 py-5 font-bold text-primary-700">{plan.price}</td>
                    <td className="px-4 py-5 text-slate-700">{plan.target}</td>
                    <td className="px-4 py-5 leading-7 text-slate-700">{plan.contents}</td>
                    <td className="px-4 py-5 leading-7 text-slate-700">{plan.suitedFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 p-4 md:hidden">
            {planComparison.map((plan) => (
              <article key={plan.name} className="rounded-2xl border border-slate-200 p-4">
                <h3 className="text-base font-extrabold text-slate-950">{plan.name}</h3>
                <p className="mt-1 text-lg font-black text-primary-700">{plan.price}</p>
                <dl className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <div>
                    <dt className="font-bold text-slate-900">対象</dt>
                    <dd>{plan.target}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-900">主な内容</dt>
                    <dd>{plan.contents}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-900">向いている人</dt>
                    <dd>{plan.suitedFor}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <LineButton />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader title="このような方におすすめです" description="独学、塾併用、保護者の見守りなど、さまざまな状況に合わせて使えます。" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {recommendedUsers.map((user) => (
            <div key={user} className="rounded-2xl bg-primary-50 p-4 text-sm font-bold leading-7 text-primary-950">
              {user}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader title="よくある質問" />
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-slate-950 group-open:text-primary-700">{faq.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-primary-700 p-6 text-white shadow-xl shadow-primary-100 sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-primary-100">LINE登録CTA</p>
            <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">まずは今の学習状況を相談してください</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-primary-50 sm:text-base">
              <p>勉強が続かない原因は、やる気だけではありません。やることが曖昧だったり、進み具合を確認する仕組みがないこともあります。</p>
              <p>動画で学ぶだけでよいのか。コーチングで管理した方がよいのか。現在の学習状況に合わせて、合う形を一緒に整理します。</p>
            </div>
            <div className="mt-7">
              <LineButton className="bg-white text-primary-700 shadow-none hover:bg-primary-50" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
