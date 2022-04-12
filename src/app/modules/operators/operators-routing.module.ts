import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuditComponent } from './components/audit/audit.component';
import { BufferCountComponent } from './components/buffer-count/buffer-count.component';
import { BufferWhenComponent } from './components/buffer-when/buffer-when.component';
import { OperatorsComponent } from './components/operators/operators.component';

export const routes: Routes = [
  { path: '', component: OperatorsComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'buffer-counter', component: BufferCountComponent },
  { path: 'buffer-when', component: BufferWhenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsRoutingModule {}
