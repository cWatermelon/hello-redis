import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import zh from '@angular/common/locales/zh';

registerLocaleData(zh);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrowserModule, HttpClientModule, BrowserAnimationsModule],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {}
