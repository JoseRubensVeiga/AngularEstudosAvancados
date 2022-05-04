import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuditComponent } from './components/audit';
import { BufferCountComponent } from './components/buffer-count';
import { BufferWhenComponent } from './components/buffer-when';
import { ConcatMapComponent } from './components/concat-map';
import { DebounceComponent } from './components/debounce';
import { DelayComponent } from './components/delay';
import { DistinctComponent } from './components/distinct';
import { ElementAtComponent } from './components/element-at';
import { ExhaustAllComponent } from './components/exhaust-all';
import { FilterComponent } from './components/filter';
import { FinalizeComponent } from './components/finalize';
import { FindIndexComponent } from './components/find-index';
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
  { path: 'filter', component: FilterComponent },
  { path: 'find-index', component: FindIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsRoutingModule {}
