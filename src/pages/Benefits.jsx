import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const benefitGroups = [
  {
    label: '假勤制度',
    items: ['週休二日', '特休 / 年假', '陪產假', '產假'],
  },
  {
    label: '保險保障',
    items: ['勞保', '健保', '員工團保', '職災保險', '員工體檢'],
  },
  {
    label: '獎金禮品',
    items: ['年終獎金', '年節獎金', '三節獎金 / 禮品', '績效獎金', '加班費'],
  },
  {
    label: '學習發展',
    items: ['員工進修補助', '國內外進修補助', '員工在職教育訓練'],
  },
  {
    label: '團隊活動',
    items: ['部門聚餐', '員工聚餐', '國內旅遊', '國外旅遊'],
  },
  {
    label: '生活支持',
    items: ['結婚禮金 / 補助', '生育津貼 / 補助', '喪葬補助'],
  },
];

const notes = [
  '各項福利與制度依公司規範辦理，細節可於招募或到職流程中說明。',
  '不同職務、任用條件與工作安排，可能適用不同制度內容。',
  '後續如有新增制度或調整項目，將依公司內部流程更新。',
];

export default function Benefits() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="bg-slate-50 min-h-screen pt-16 font-sans text-slate-900">
      <SEO title="公司福利與制度" description="宏相科技 HXT 公司福利、員工照護與工作制度介紹。" />
      
      <div className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">Careers / Benefits & System</div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            公司福利與制度
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            宏相科技重視穩定的工作環境、完整保障與持續成長。
          </p>
        </div>
      </div>

      <main className="pb-32 px-6 max-w-7xl mx-auto relative z-10 space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8">
          <div className="bg-brand-blue rounded-3xl shadow-xl shadow-brand-blue/20 p-8 md:p-10 text-white h-fit">
            <div className="text-white/60 font-bold tracking-widest mb-4 uppercase text-sm">
              Benefits Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-5">福利總覽</h2>
            <p className="text-white/75 leading-relaxed">
              福利制度以員工照護、工作穩定與專業成長為核心，涵蓋休假、保險、獎金、學習補助、團隊活動與生活支持等面向。
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {benefitGroups.map((group) => (
                <div key={group.label}>
                  <div className="text-sm font-black text-brand-blue mb-3">{group.label}</div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-slate-50 border border-slate-100 px-3 py-1.5 text-sm font-bold text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-8">
            <div>
            <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
              Policy Notes
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">制度說明</h2>
            <p className="text-slate-600 leading-relaxed">
              福利與制度依職務條件、任用型態與公司規範辦理，實際內容可於招募或到職流程中進一步確認。
            </p>
            </div>

            <div className="grid gap-3">
              {notes.map((note, index) => (
                <div key={note} className="flex items-start gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                  <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-blue font-black flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-600 leading-relaxed pt-1">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">招募狀態</h3>
              <p className="text-slate-600 leading-relaxed">
                宏相科技目前暫無公開職缺。未來若有招募需求，將於加入 HXT 頁面更新職務內容與應徵方式。
              </p>
            </div>
            <div className="inline-flex text-slate-500 bg-slate-100 px-6 py-3 rounded-full font-bold whitespace-nowrap">
              目前暫無公開職缺
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
