import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // 基礎防呆與 XSS 防護處理 (跳脫危險字元)
    const sanitize = (str) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeData = {
      name: sanitize(formData.name),
      email: sanitize(formData.email),
      message: sanitize(formData.message)
    };

    try {
      // 預留：EmailJS 或 Formspree API 串接邏輯
      // await fetch('YOUR_API_ENDPOINT', { method: 'POST', body: JSON.stringify(safeData) });
      await Promise.resolve(safeData);
      
      setTimeout(() => setStatus('success'), 1000); // 模擬 API 請求
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">聯絡我們</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">姓名</label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">電子郵件</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">訊息內容</label>
            <textarea
              id="message"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-brand-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-blue/90 focus:ring-4 focus:ring-brand-blue/20 transition-all disabled:opacity-50"
          >
            {status === 'loading' ? '發送中...' : '送出訊息'}
          </button>
        </form>
      </div>
    </section>
  );
}
