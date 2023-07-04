import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ThankYouComponent } from './components/pages/thank-you/thank-you/thank-you.component';
import { WIPComponent } from './components/elements/wip/wip.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppConfigService } from './services/app-config/app-config.service';
import { DirectAccessGuard } from './guards/direct-access/direct-access.guard';
import { ProjectCardComponent } from './components/elements/project-card/project-card/project-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'thank-you', component: ThankYouComponent, canActivate: [DirectAccessGuard]  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    WIPComponent,
    FooterComponent,
    ThankYouComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: (appConfigService: AppConfigService) => () => appConfigService.loadConfig(),
      deps: [AppConfigService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
