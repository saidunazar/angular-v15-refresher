import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { GreetPipe } from './shared/pipes/greet.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildTwoComponent } from './components/parent/child-two/child-two.component';
import { LogService } from './shared/services/log.service';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParentTwoComponent } from './components/parent-two/parent-two.component';
import { TabOneComponent } from './components/parent-two/tab-one/tab-one.component';
import { TabTwoComponent } from './components/parent-two/tab-two/tab-two.component';
import { BackgroundColorWheatDirective } from './shared/directives/background-color-wheat.directive';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    GreetPipe,
    ChildTwoComponent,
    NotFoundComponent,
    ParentTwoComponent,
    TabOneComponent,
    TabTwoComponent,
    BackgroundColorWheatDirective,
    TemplateFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
