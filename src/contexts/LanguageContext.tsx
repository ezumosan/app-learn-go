import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    download: 'Download',
    updates: 'Updates',
    contact: 'Contact',
    
    // Home page
    heroTitle: 'Course Registration Automation Tool',
    heroSubtitle: 'Streamline your academic course registration process with our powerful Mac OS application',
    featuresTitle: 'Key Features',
    automationFeature: 'Automated Registration',
    automationDesc: 'Automate your course registration process with your user credentials',
    updatesFeature: 'Regular Updates',
    updatesDesc: 'Receive updates starting two weeks before registration periods',
    secureFeature: 'Secure Access',
    secureDesc: 'Protected access with special authentication requirements',
    
    // Download page
    downloadTitle: 'Download for Mac OS',
    downloadSubtitle: 'Get started with our course registration automation tool',
    systemRequirements: 'System Requirements',
    macosRequired: 'Mac OS 10.14 or later',
    installInstructions: 'Installation Instructions',
    step1: '1. Download the application',
    step2: '2. Open the downloaded file',
    step3: '3. Follow the installation wizard',
    step4: '4. Launch the app to begin setup',
    importantNotes: 'Important Notes',
    passwordNote: 'Access password: sois_curl',
    credentialsNote: 'You will need your user number and password for automation features',
    registrationNote: 'Course registration codes will be provided when available',
    downloadButton: 'Download Now',
    
    // Updates page
    updatesTitle: 'Updates & Announcements',
    updatesSubtitle: 'Stay informed about the latest features and important notices',
    comingSoon: 'Updates will be posted here regularly, especially two weeks before course registration periods.',
    
    // Contact page
    contactTitle: 'Contact & Support',
    contactSubtitle: 'Have questions or need assistance? We\'re here to help.',
    supportInfo: 'For technical support or questions about the application, please describe your issue in detail.',
    responseTime: 'We typically respond within 24 hours during business days.',
  },
  ja: {
    // Navigation
    home: 'ホーム',
    download: 'ダウンロード',
    updates: '更新情報',
    contact: 'お問い合わせ',
    
    // Home page
    heroTitle: '履修登録自動化ツール',
    heroSubtitle: '強力なMac OSアプリケーションで学術履修登録プロセスを効率化',
    featuresTitle: '主な機能',
    automationFeature: '自動登録',
    automationDesc: 'ユーザー認証情報を使用して履修登録プロセスを自動化',
    updatesFeature: '定期更新',
    updatesDesc: '登録期間の2週間前から更新プログラムを受信',
    secureFeature: 'セキュアアクセス',
    secureDesc: '特別な認証要件による保護されたアクセス',
    
    // Download page
    downloadTitle: 'Mac OS版ダウンロード',
    downloadSubtitle: '履修登録自動化ツールを始める',
    systemRequirements: 'システム要件',
    macosRequired: 'Mac OS 10.14以降',
    installInstructions: 'インストール手順',
    step1: '1. アプリケーションをダウンロード',
    step2: '2. ダウンロードしたファイルを開く',
    step3: '3. インストールウィザードに従う',
    step4: '4. アプリを起動してセットアップを開始',
    importantNotes: '重要な注意事項',
    passwordNote: 'アクセスパスワード: sois_curl',
    credentialsNote: '自動化機能にはユーザー番号とパスワードが必要です',
    registrationNote: '履修登録コードは利用可能になり次第提供されます',
    downloadButton: '今すぐダウンロード',
    
    // Updates page
    updatesTitle: '更新情報・お知らせ',
    updatesSubtitle: '最新機能や重要なお知らせをお届けします',
    comingSoon: '更新情報は定期的に投稿されます。特に履修登録期間の2週間前から重要な情報をお知らせします。',
    
    // Contact page
    contactTitle: 'お問い合わせ・サポート',
    contactSubtitle: 'ご質問やサポートが必要でしたらお気軽にお声かけください。',
    supportInfo: '技術サポートやアプリケーションに関するご質問については、問題を詳しくお書きください。',
    responseTime: '営業日であれば通常24時間以内に返信いたします。',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};