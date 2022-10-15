import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-i18n-ngx-translate';

  supportLanguages = ['en', 'fr', 'tr'];
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('fr');

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang || 'en');
  }

  selectLang(lang: string) {
    this.translateService.use(lang);
  }
}
