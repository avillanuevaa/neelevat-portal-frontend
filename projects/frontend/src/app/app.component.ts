import { Component, OnDestroy, OnInit } from '@angular/core';
import { RootStoreService } from '@services/root-store.service';
import { RootSelectorsService } from '@services/root-selectors.service';
import { AuthService } from '@services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private translate: TranslateService,
    private authService: AuthService,
    private rootStore: RootStoreService,
    private rootSelectors: RootSelectorsService,
    private http: HttpClient,
  ) {
    this.translate.setDefaultLang('en');
    this.rootStore.getStore();
  }


  public ngOnInit(): void {
    this.authService.initialize();
  }

  public ngOnDestroy(): void {
    this.authService.onDestroy();
  }

}
