/**
 * Created by herczkumihalybalazs on 2016.08.15..
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// import {bootstrap} from "@angular/platform-browser-dynamic";
// import {AppComponent} from "./app.component";
// import {HTTP_PROVIDERS} from "@angular/http";
//
// bootstrap(AppComponent, [
//     HTTP_PROVIDERS
// ])
//     .catch(err => console.error(err));