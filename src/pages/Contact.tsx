import { Mail, MessageCircle, Clock, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  const supportTopics = [
    {
      icon: HelpCircle,
      title: language === 'en' ? 'General Questions' : '一般的なご質問',
      description: language === 'en' 
        ? 'Questions about app features, system requirements, or general usage'
        : 'アプリの機能、システム要件、一般的な使用方法に関するご質問'
    },
    {
      icon: MessageCircle,
      title: language === 'en' ? 'Technical Support' : '技術サポート',
      description: language === 'en'
        ? 'Installation issues, bugs, or technical difficulties with the application'
        : 'インストールの問題、バグ、アプリケーションの技術的な困難について'
    },
    {
      icon: Mail,
      title: language === 'en' ? 'Registration Codes' : '登録コード',
      description: language === 'en'
        ? 'Questions about course registration codes and distribution schedules'
        : '履修登録コードと配布スケジュールに関するご質問'
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('contactSubtitle')}
          </p>
        </div>

        {/* Support Information */}
        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              {language === 'en' ? 'Support Information' : 'サポート情報'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {t('supportInfo')}
            </p>
            
            <Alert>
              <Clock className="h-4 w-4" />
              <AlertDescription>
                {t('responseTime')}
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Support Topics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card key={index} className="card-elevated text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-navy flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {topic.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                {language === 'en' ? 'Email Support' : 'メールサポート'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {language === 'en' 
                  ? 'Send us an email with your question or issue description.'
                  : 'ご質問や問題の説明をメールでお送りください。'
                }
              </CardDescription>
              <p className="text-sm font-mono bg-muted px-3 py-2 rounded">
                support@coursereg.app
              </p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                {language === 'en' ? 'Response Time' : '返信時間'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {language === 'en'
                  ? 'We aim to respond to all inquiries promptly during business hours.'
                  : '営業時間中は迅速にお答えするよう努めております。'
                }
              </CardDescription>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{language === 'en' ? 'Typical response:' : '通常の返信:'}</span>
                  <span className="font-medium">{language === 'en' ? '24 hours' : '24時間'}</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'en' ? 'Urgent issues:' : '緊急の問題:'}</span>
                  <span className="font-medium">{language === 'en' ? '4-8 hours' : '4-8時間'}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;