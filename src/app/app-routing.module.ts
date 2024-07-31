import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ProcessflowComponent } from './processflow/processflow.component';
import { OfflineExamComponent } from './offline-exam/offline-exam.component';
import { OnlineExamComponent } from './online-exam/online-exam.component';
import { TypingTestComponent } from './typing-test/typing-test.component';
import { OnscreenComponent } from './onscreen/onscreen.component';
import { VenueComponent } from './venue_management_system/venue.component';
import { CctvComponent } from './cctv/cctv.component';
import { CodingComponent } from './coding_test/coding.component';
import { ThumbComponent } from './biometric_thumb/thumb.component';
import { FacialComponent } from './biometric_facial/facial.component';
import { IrisComponent } from './biometric_iris/iris.component';
import { CertificateComponent } from './certificate/certificate.component';
// import { CareerComponent } from './career/career.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'content', component: ContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'solution', component: SolutionsComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'processflow', component: ProcessflowComponent },
  { path: 'offlineexam', component: OfflineExamComponent },
  { path: 'onlineexam', component: OnlineExamComponent },
  { path: 'typingtest', component: TypingTestComponent },
  { path: 'onscreen', component: OnscreenComponent },
  { path: 'venue', component: VenueComponent },
  { path: 'cctv', component: CctvComponent },
  { path: 'coding', component: CodingComponent },
  { path: 'thumb', component: ThumbComponent },
  { path: 'facial', component: FacialComponent },
  { path: 'processflow', component: ProcessflowComponent },
  { path: 'iris', component: IrisComponent },
  { path: 'certificate', component: CertificateComponent },
  // { path: 'career', component: CareerComponent },
  { path: '**', redirectTo: '/content', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
