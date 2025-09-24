import { Download as DownloadIcon, Apple, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useLanguage } from '@/contexts/LanguageContext';

const Download = () => {
  const { t } = useLanguage();

  const handleDownload = () => {
    // This would trigger the actual download
    console.log('Download started');
  };

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('downloadTitle')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('downloadSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Download Card */}
          <Card className="card-elevated">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-navy flex items-center justify-center">
                <Apple className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">{t('downloadTitle')}</CardTitle>
              <CardDescription>Version 1.0.0</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Button 
                onClick={handleDownload} 
                size="lg" 
                className="btn-primary w-full"
              >
                <DownloadIcon className="mr-2 h-5 w-5" />
                {t('downloadButton')}
              </Button>
              <p className="text-sm text-muted-foreground">
                Mac OS 10.14+, 25 MB
              </p>
            </CardContent>
          </Card>

          {/* System Requirements */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                {t('systemRequirements')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Apple className="h-5 w-5 text-muted-foreground" />
                <span>{t('macosRequired')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 rounded bg-muted flex items-center justify-center">
                  <span className="text-xs">💾</span>
                </div>
                <span>50 MB free space</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 rounded bg-muted flex items-center justify-center">
                  <span className="text-xs">🌐</span>
                </div>
                <span>Internet connection required</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Installation Instructions */}
        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle>{t('installInstructions')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium mt-0.5">
                  1
                </div>
                <p>{t('step1')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium mt-0.5">
                  2
                </div>
                <p>{t('step2')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium mt-0.5">
                  3
                </div>
                <p>{t('step3')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium mt-0.5">
                  4
                </div>
                <p>{t('step4')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-600">
              <AlertCircle className="mr-2 h-5 w-5" />
              {t('importantNotes')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="font-medium">
                {t('passwordNote')}
              </AlertDescription>
            </Alert>
            
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {t('credentialsNote')}
              </AlertDescription>
            </Alert>
            
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {t('registrationNote')}
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Download;