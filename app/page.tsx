const LINE_URL = "https://line.me/R/ti/p/@xxxxx";

const worries = [
  "勉強計画を立てても三日坊主になってしまう",
  "定期テストと受験勉強の両立が難しい",
  "塾の宿題以外に何をやればいいかわからない",
  "保護者として子どもの学習状況が見えにくい"
];

const features = [
  {
    title: "毎週の学習プラン設計",
    text: "学校行事や部活の予定も考慮し、無理なく続く学習計画を作成します。"
  },
  {
    title: "LINEで毎日フォロー",
    text: "質問・進捗報告・相談をLINEで完結。すぐに相談できる環境を整えます。"
  },
  {
    title: "保護者向けレポート",
    text: "月1回の学習レポートで、取り組み内容と成果をわかりやすく共有します。"
  }
];

const plans = [
  { name: "ライト", price: "月額14,800円", desc: "週1回面談 + LINE質問サポート" },
  { name: "スタンダード", price: "月額24,800円", desc: "週2回面談 + 学習管理フルサポート", recommended: true },
  { name: "上位", price: "月額39,800円", desc: "毎日進捗管理 + 志望校対策カスタム" }
];

const faqs = [
  {
    q: "今の成績が低くても利用できますか？",
    a: "もちろん可能です。現状を分析し、基礎の立て直しから段階的にサポートします。"
  },
  {
    q: "保護者も相談に参加できますか？",
    a: "はい。初回面談や定期報告時に、保護者の方も一緒にご参加いただけます。"
  },
  {
    q: "部活が忙しくても続けられますか？",
    a: "部活スケジュールを前提にした計画を作るため、継続しやすい設計です。"
  }
];

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      className={`inline-flex w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-4 text-base font-bold text-white shadow-md transition hover:bg-primary-700 sm:w-auto ${className}`}
    >
      LINEで無料相談をはじめる
    </a>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <section className="rounded-2xl bg-primary-50 p-6 sm:p-10">
        <p className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary-700">高校生・保護者向け</p>
        <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">志望校合格までを、<br className="sm:hidden" />LINEで伴走する学習サポート</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">勉強法の相談から日々の進捗管理まで。高校生本人にも、見守る保護者にも安心のオンラインサポートです。</p>
        <div className="mt-6">
          <CtaButton />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">よくある悩み</h2>
        <ul className="mt-5 space-y-3">
          {worries.map((item) => (
            <li key={item} className="rounded-xl border border-slate-200 p-4 text-sm leading-7 sm:text-base">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">サービス内容</h2>
        <p className="mt-4 text-sm leading-7 sm:text-base">学習計画の作成、日々の進捗チェック、質問対応、定期面談までをワンストップで提供します。オンライン完結なので、全国どこからでも受講可能です。</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">特徴</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-primary-700">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold">料金プラン</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`rounded-xl border p-5 ${plan.recommended ? "border-primary-600 bg-white shadow-md" : "border-slate-200 bg-white"}`}>
              {plan.recommended ? <p className="mb-2 inline-block rounded-full bg-primary-100 px-2 py-1 text-xs font-semibold text-primary-700">人気プラン</p> : null}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-2 text-2xl font-extrabold text-primary-700">{plan.price}</p>
              <p className="mt-2 text-sm text-slate-600">{plan.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <CtaButton />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">利用の流れ</h2>
        <ol className="mt-5 space-y-3 text-sm sm:text-base">
          <li className="rounded-xl border border-slate-200 p-4"><strong>1.</strong> LINE登録（30秒）</li>
          <li className="rounded-xl border border-slate-200 p-4"><strong>2.</strong> ヒアリング面談の日程調整</li>
          <li className="rounded-xl border border-slate-200 p-4"><strong>3.</strong> 現状分析と個別学習プラン提案</li>
          <li className="rounded-xl border border-slate-200 p-4"><strong>4.</strong> サポート開始</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">よくある質問</h2>
        <div className="mt-5 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">{faq.q}</summary>
              <p className="mt-2 text-sm leading-7 text-slate-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-primary-600 p-6 text-white sm:p-10">
        <h2 className="text-2xl font-bold">まずはLINEで無料相談</h2>
        <p className="mt-3 text-sm leading-7 text-primary-50 sm:text-base">志望校や現在の学習状況に合わせて、最適な学習サポートをご案内します。保護者の方からのご相談も歓迎です。</p>
        <div className="mt-6">
          <CtaButton className="bg-white text-primary-700 hover:bg-primary-50" />
        </div>
      </section>
    </main>
  );
}
