// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, url }) {
  // 網站基礎設定
  const siteName = '宏相科技 HXT';
  // 如果有傳入標題，就顯示「頁面標題 | 宏相科技 HXT」，否則只顯示網站名稱
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  
  // 預設的網站描述
  const defaultDescription = '宏相科技致力於提供穩固、模組化與高效率的企業級測試解決方案，專精於影像、音訊與自動化系統整合。';
  const finalDescription = description || defaultDescription;

  // 預設的 OG 預覽圖 (未來請換成你們公司真實上傳的圖片網址)
  const defaultImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200';

  return (
    <Helmet>
      {/* 標準 HTML Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />

      {/* Open Graph (Facebook, LINE 等社群平台讀取的標籤) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image || defaultImage} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter (X) Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}