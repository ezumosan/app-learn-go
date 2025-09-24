import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold gradient-text">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {language === 'en' ? 'Oops! Page not found' : 'お探しのページが見つかりません'}
        </p>
        <a 
          href="/" 
          className="text-primary underline hover:text-primary-hover transition-colors"
        >
          {language === 'en' ? 'Return to Home' : 'ホームに戻る'}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
