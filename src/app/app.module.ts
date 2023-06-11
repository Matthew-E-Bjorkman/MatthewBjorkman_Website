import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppConfigService } from './services/app-config/app-config.service';
import { EmailGeneratorService } from './services/email-generator/email-generator.service';

import { NavbarComponent } from './ui/navbar/navbar.component';

import { HomeComponent } from './ui/pages/home/home.component';
import { AboutComponent } from './ui/pages/about/about.component';
import { ContactComponent } from './ui/pages/contact/contact.component';

import { WIPComponent } from './ui/elements/wip/wip.component';
import { FooterComponent } from './ui/footer/footer.component';
import { EmailFormComponent } from './ui/elements/email-form/email-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
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
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
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
    EmailGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
