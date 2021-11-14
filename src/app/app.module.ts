import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Project specific files
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Project components
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { CarouselWithTranslateComponent } from './components/carousel-with-translate/carousel-with-translate.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthRedirectComponent } from './components/auth-redirect/auth-redirect.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    OpenCloseComponent,
    CarouselWithTranslateComponent,
    LayoutComponent,
    HomeComponent,
    AuthRedirectComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
