import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterproSharedModule } from 'app/shared/shared.module';
import { JhipsterproCoreModule } from 'app/core/core.module';
import { JhipsterproAppRoutingModule } from './app-routing.module';
import { JhipsterproHomeModule } from './home/home.module';
import { JhipsterproEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterproSharedModule,
    JhipsterproCoreModule,
    JhipsterproHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterproEntityModule,
    JhipsterproAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterproAppModule {}
