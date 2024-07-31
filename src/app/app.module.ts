import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ServicesComponent } from './services/services.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { ProcessflowComponent } from './processflow/processflow.component';
import { CertificateComponent } from './certificate/certificate.component';
import { OfflineExamComponent } from './offline-exam/offline-exam.component';
import { OnlineExamComponent } from './online-exam/online-exam.component';
import { OnscreenComponent } from './onscreen/onscreen.component';
import { TypingTestComponent } from './typing-test/typing-test.component';

@NgModule({ declarations: [
        AppComponent,
        ContentComponent,
        AboutComponent,
        ContactComponent,
        CareerComponent,
        FooterComponent,
        HeaderComponent,
        SolutionsComponent,
        ServicesComponent,
        PrivacypolicyComponent,
        FaqComponent,
        ProcessflowComponent,
        CertificateComponent,
        OfflineExamComponent,
        OnlineExamComponent,
        OnscreenComponent,
        TypingTestComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
