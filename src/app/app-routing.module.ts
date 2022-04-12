import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'operators',
    loadChildren: () =>
      import('./modules/operators/operators.module').then(
        (m) => m.OperatorsModule
      ),
  },

  {
    path: '**',
    redirectTo: 'operators',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
