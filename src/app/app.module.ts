import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlanningPage } from '../pages/planning/planning';
import { ActusPage } from '../pages/actus/actus';
import { ConvoituragePage } from '../pages/convoiturage/convoiturage';
import { ConvoiturageAddPage } from '../pages/convoiturage-add/convoiturage-add';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RestoPage } from '../pages/resto/resto';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlanningPage,
    ActusPage,
    ConvoituragePage,
    ConvoiturageAddPage,
    LoginPage,
    RegisterPage,
    RestoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlanningPage,
    ActusPage,
    ConvoituragePage,
    ConvoiturageAddPage,
    LoginPage,
    RegisterPage,
    RestoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
