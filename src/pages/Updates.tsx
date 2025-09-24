import { Calendar, Bell, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Updates = () => {
  const { t, language } = useLanguage();

  // Placeholder data - this would come from a CMS or API
  const updates = [
    {
      id: 1,
      title: language === 'en' ? 'App Launch Announcement' : 'アプリリリースのお知らせ',
      date: '2024-01-15',
      type: 'announcement',
      content: language === 'en' 
        ? 'We are excited to announce the launch of our course registration automation tool. The app is now available for download and ready to help streamline your course registration process.'
        : '履修登録自動化ツールのリリースをお知らせいたします。アプリがダウンロード可能になり、履修登録プロセスの効率化をサポートする準備が整いました。'
    },
    {
      id: 2,
      title: language === 'en' ? 'Upcoming Registration Period' : '次回登録期間について',
      date: '2024-01-10',
      type: 'info',
      content: language === 'en'
        ? 'The next course registration period is scheduled to begin soon. Please ensure you have the latest version of the app and your credentials ready. Registration codes will be distributed two weeks before the start date.'
        : '次回の履修登録期間が間もなく開始される予定です。アプリの最新版をお持ちであることと、認証情報をご準備いただくことをご確認ください。登録コードは開始日の2週間前に配布されます。'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'announcement':
        return 'bg-primary text-primary-foreground';
      case 'info':
        return 'bg-blue-100 text-blue-800';
      case 'warning':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'announcement':
        return <Bell className="h-4 w-4" />;
      case 'info':
        return <Calendar className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('updatesTitle')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('updatesSubtitle')}
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {updates.map((update) => (
            <Card key={update.id} className="card-elevated">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{update.title}</CardTitle>
                    <div className="flex items-center space-x-4">
                      <CardDescription className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(update.date).toLocaleDateString(language === 'en' ? 'en-US' : 'ja-JP')}
                      </CardDescription>
                      <Badge className={getTypeColor(update.type)}>
                        {getTypeIcon(update.type)}
                        <span className="ml-1 capitalize">{update.type}</span>
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {update.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <Card className="card-elevated text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 rounded-lg bg-gradient-to-br from-sage to-sage-light flex items-center justify-center">
              <Bell className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">
              {language === 'en' ? 'Stay Updated' : '最新情報をお受け取りください'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed max-w-2xl mx-auto">
              {t('comingSoon')}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Updates;