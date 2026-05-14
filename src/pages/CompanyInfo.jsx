import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const companyFields = [
  { label: '公司名稱', value: '宏相科技股份有限公司' },
  { label: '英文名稱', value: 'HONG XIANG TECHNOLOGY CO., LTD.' },
  { label: '統一編號', value: '27832148' },
  { label: '公司狀態', value: '核准設立' },
  { label: '設立日期', value: '2005-06-30' },
  { label: '資本額', value: '10,800,000 元' },
  { label: '實收資本額', value: '10,800,000 元' },
  { label: '登記電話', value: '03-6583862' },
  { label: '登記傳真', value: '03-5533163' },
];

const profileHighlights = [
  { label: '成立', value: '2005' },
  { label: '統編', value: '27832148' },
  { label: '型態', value: '股份有限公司' },
];

const directors = [
  { role: '董事長 / 負責人', name: '何易璋' },
  { role: '董事', name: '何怡德' },
  { role: '董事', name: '方幸宜' },
  { role: '監察人', name: '彭甄萍' },
];

const historyItems = [
  {
    date: '2005-06-30',
    title: '公司設立',
    desc: '宏相科技股份有限公司設立。',
  },
  {
    date: '2007-03-20',
    title: '出進口廠商登記',
    desc: '完成出進口廠商原始登記。',
  },
  {
    date: '2010-09-01',
    title: '資本額變更',
    desc: '登記資本總額調整為 6,000,000 元。',
  },
  {
    date: '2016-07-21',
    title: '登記資料更新',
    desc: '登記地址與資本總額等資料完成變更登記。',
  },
];

const services = [
  '音頻測試',
  '麥克風測試',
  '聲學量測',
  '自動化測試系統整合',
];

export default function CompanyInfo() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="bg-slate-50 min-h-screen pt-16 font-sans text-slate-900">
      <SEO title="公司基本資料" description="宏相科技 HXT 公司基本資料、董監事、企業沿革與辦公室位置。" />

      <div className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 items-end">
          <div>
            <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
              HXT / Corporate Profile
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
              企業檔案
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              以公開登記資料與人力銀行資訊整理宏相科技的公司身份、營運定位與聯絡資料，供客戶與合作夥伴快速查閱。
            </p>
          </div>

          <aside className="bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-7 md:p-8">
            <div className="flex items-start justify-between gap-6 mb-8">
              <div>
                <div className="text-sm font-bold text-slate-400 mb-2">公司名稱</div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">宏相科技股份有限公司</h2>
              </div>
              <div className="h-12 w-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-black flex-shrink-0">
                HXT
              </div>
            </div>
            <div className="text-sm font-bold text-slate-400 mb-2">英文名稱</div>
            <p className="text-slate-700 font-bold leading-relaxed mb-8">HONG XIANG TECHNOLOGY CO., LTD.</p>
            <div className="grid grid-cols-3 gap-3">
              {profileHighlights.map((item) => (
                <div key={item.label} className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
                  <div className="text-xs font-bold text-slate-400 mb-1">{item.label}</div>
                  <div className="text-lg font-black text-brand-blue break-words">{item.value}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <main className="pb-32 px-6 max-w-7xl mx-auto relative z-10 space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8">
          <div className="bg-brand-blue text-white rounded-2xl shadow-xl shadow-brand-blue/20 p-8 md:p-10 h-fit">
            <div className="text-white/60 font-bold tracking-widest mb-4 uppercase text-sm">
              Business Focus
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-5">公司定位</h2>
            <p className="text-white/75 leading-relaxed mb-8">
              宏相科技目前聚焦於聲學與音訊測試，提供麥克風測試、聲學量測與相關自動化測試系統整合。
            </p>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <span key={service} className="rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-bold text-white">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="px-6 md:px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div className="text-brand-blue font-bold tracking-widest mb-2 uppercase text-sm">
                  Profile Sheet
                </div>
                <h2 className="text-3xl font-black text-slate-900">公司登記摘要</h2>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-slate-50 border border-slate-100 px-4 py-2 text-sm font-bold text-slate-500">
                公開資料整理
              </span>
            </div>

            <dl className="divide-y divide-slate-100">
              {companyFields.map((field) => (
                <div key={field.label} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8 px-6 md:px-8 py-5">
                  <dt className="text-sm font-bold text-slate-400">{field.label}</dt>
                  <dd className="text-base md:text-lg font-bold text-slate-800 break-words">{field.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <div className="text-brand-blue font-bold tracking-widest mb-3 uppercase text-sm">
              Governance
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">負責人與董監事</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {directors.map((director) => (
              <article key={`${director.role}-${director.name}`} className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6">
                <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-blue font-black mb-6">
                  {director.name.slice(0, 1)}
                </div>
                <div className="text-sm font-bold text-slate-400 mb-2">{director.role}</div>
                <h3 className="text-2xl font-black text-slate-900">{director.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="p-8 md:p-10 border-b border-slate-100">
              <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
                Timeline
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">企業沿革</h2>
              <p className="text-slate-600 leading-relaxed">
                依公開登記資料整理主要節點；後續可再補充公司提供的品牌、產品與據點發展事件。
              </p>
            </div>

            <div className="p-8 md:p-10">
              <div className="relative pl-8">
                <div className="absolute left-2 top-2 bottom-2 w-px bg-slate-200"></div>
                <div className="space-y-8">
                  {historyItems.map((item) => (
                    <div key={`${item.date}-${item.title}`} className="relative">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-brand-blue"></div>
                      <div className="text-sm font-bold text-brand-blue mb-2">{item.date}</div>
                      <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="p-8 md:p-10 border-b border-slate-100">
              <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
                Location
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">辦公室位置</h2>
              <p className="text-slate-600 leading-relaxed">
                正式地址資訊確認後，可再補充交通方式、停車資訊與地圖嵌入。
              </p>
            </div>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="text-sm font-bold text-slate-400 mb-2">登記地址</div>
                <p className="text-lg font-black text-slate-900 leading-relaxed">
                  新竹縣竹北市嘉豐十一路1段100號12樓之7
                </p>
              </div>
              <div className="rounded-2xl bg-slate-100 border border-slate-200 min-h-[260px] flex flex-col items-center justify-center text-center px-6">
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-blue font-black mb-4">
                  HXT
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">地圖待正式嵌入</h3>
                <p className="text-slate-500 max-w-sm leading-relaxed">
                  地址確認後可在此放置 Google Maps、靜態位置圖或交通資訊。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
