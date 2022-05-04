import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuditComponent } from './components/audit/audit.component';
import { BufferCountComponent } from './components/buffer-count/buffer-count.component';
import { BufferWhenComponent } from './components/buffer-when/buffer-when.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { DebounceComponent } from './components/debounce/debounce.component';
import { DelayComponent } from './components/delay/delay.component';
import { DistinctComponent } from './components/distinct/distinct.component';
import { ElementAtComponent } from './components/element-at/element-at.component';
import { ExhaustAllComponent } from './components/exhaust-all/exhaust-all.component';
import { FinalizeComponent } from './components/finalize/finalize.component';
import { FirstComponent } from './components/first';
import { OperatorsComponent } from './components/operators';

export const routes: Routes = [
  { path: '', component: OperatorsComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'buffer-counter', component: BufferCountComponent },
  { path: 'buffer-when', component: BufferWhenComponent },
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'debounce', component: DebounceComponent },
  { path: 'delay', component: DelayComponent },
  { path: 'distinct', component: DistinctComponent },
  { path: 'element-at', component: ElementAtComponent },
  { path: 'exhaust-all', component: ExhaustAllComponent },
  { path: 'finalize', component: FinalizeComponent },
  { path: 'first', component: FirstComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsRoutingModule {}
