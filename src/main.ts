import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'hammerjs'
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
  ]
}).catch((err) => console.error(err));
