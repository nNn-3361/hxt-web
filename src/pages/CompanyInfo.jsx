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
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
            HXT / Company Information
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            公司基本資料
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            整理公開公司登記與人力銀行資訊，作為正式資料上線前的輕量公司資料頁。
          </p>
        </div>
      </div>

      <main className="pb-32 px-6 max-w-7xl mx-auto relative z-10 space-y-16">
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="text-brand-blue font-bold tracking-widest mb-3 uppercase text-sm">
                Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">基本資料摘要</h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-white border border-slate-100 px-4 py-2 text-sm font-bold text-slate-500">
              股份有限公司
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {companyFields.map((field) => (
              <div key={field.label} className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6">
                <div className="text-sm font-bold text-slate-400 mb-3">{field.label}</div>
                <div className="text-xl md:text-2xl font-black text-slate-900 break-words">{field.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <article className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10">
            <div className="text-brand-blue font-bold tracking-widest mb-3 uppercase text-sm">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">董監事資料</h2>
            <div className="grid gap-4">
              {directors.map((director) => (
                <div key={`${director.role}-${director.name}`} className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <div className="font-bold text-slate-900">{director.role}</div>
                  <div className="text-brand-blue font-black">{director.name}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-brand-blue rounded-3xl shadow-xl shadow-brand-blue/20 p-8 md:p-10 text-white">
            <div className="text-white/60 font-bold tracking-widest mb-3 uppercase text-sm">
              Business
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">主要服務</h2>
            <p className="text-white/75 leading-relaxed mb-8">
              宏相科技成立於 2005 年，目前聚焦於聲學與音訊測試，提供麥克風測試、聲學量測與相關自動化測試系統整合。
            </p>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <span key={service} className="rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-bold text-white">
                  {service}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 h-fit">
            <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
              Timeline
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">企業沿革</h2>
            <p className="text-slate-600 leading-relaxed">
              依公開登記資料整理主要節點；後續可再補充公司提供的品牌、產品與據點發展事件。
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10">
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
        </section>

        <section>
          <div className="mb-8">
            <div className="text-brand-blue font-bold tracking-widest mb-3 uppercase text-sm">
              Location
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">辦公室地理位置</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
              <h3 className="text-2xl font-black text-slate-900 mb-6">登記地址</h3>
              <p className="text-lg font-bold text-slate-700 leading-relaxed mb-6">
                新竹縣竹北市嘉豐十一路1段100號12樓之7
              </p>
              <dl className="space-y-5">
                <div>
                  <dt className="text-sm font-bold text-slate-400 mb-2">英文地址</dt>
                  <dd className="text-slate-600 leading-relaxed">
                    12F.-7, No. 100, Sec. 1, Jiafeng 11th Rd., Zhubei City, Hsinchu County 30273, Taiwan (R.O.C.)
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-bold text-slate-400 mb-2">備註</dt>
                  <dd className="text-slate-600 leading-relaxed">
                    其他人力銀行頁面列有不同聯絡地址；正式辦公室資訊待公司確認後可再更新。
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden min-h-[320px]">
              <div className="h-full min-h-[320px] bg-slate-100 flex flex-col items-center justify-center text-center px-6">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-blue font-black mb-5">
                  HXT
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">地圖待正式嵌入</h3>
                <p className="text-slate-500 max-w-md leading-relaxed">
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
