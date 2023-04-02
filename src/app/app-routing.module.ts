import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildTwoComponent } from './components/parent/child-two/child-two.component';
import { ChildComponent } from './components/parent/child/child.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParentTwoComponent } from './components/parent-two/parent-two.component';
import { ParentComponent } from './components/parent/parent.component';
import { TabOneComponent } from './components/parent-two/tab-one/tab-one.component';
import { TabTwoComponent } from './components/parent-two/tab-two/tab-two.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent,
      },
      {
        path: 'child-two',
        component: ChildTwoComponent,
      },
    ],
  },
  {
    path: 'parent-two',
    component: ParentTwoComponent,
    canActivateChild: [AuthGuardGuard],
    children: [
      {
        path: 'tab-one/:id',
        component: TabOneComponent,
      },
      {
        path: 'tab-two',
        component: TabTwoComponent,
      },
    ],
  },
  {
    path: 'form',
    component: TemplateFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'lazymodule',
    loadChildren: () =>
      import('./lazymodule/lazymodule.module').then((m) => m.LazymoduleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
