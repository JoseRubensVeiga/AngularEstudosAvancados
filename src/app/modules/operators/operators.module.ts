import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { AuditComponent } from './components/audit';
import { OperatorsComponent } from './components/operators';
import { BufferCountComponent } from './components/buffer-count';
import { BufferWhenComponent } from './components/buffer-when';
import { ConcatMapComponent } from './components/concat-map';
import { DebounceComponent } from './components/debounce';
import { DelayComponent } from './components/delay';
import { DistinctComponent } from './components/distinct';
import { ElementAtComponent } from './components/element-at';
import { ExhaustAllComponent } from './components/exhaust-all';
import { FinalizeComponent } from './components/finalize';
import { FirstComponent } from './components/first';
import { FilterComponent } from './components/filter';

@NgModule({
  declarations: [
    AuditComponent,
    OperatorsComponent,
    BufferCountComponent,
    BufferWhenComponent,
    ConcatMapComponent,
    DebounceComponent,
    DelayComponent,
    DistinctComponent,
    ElementAtComponent,
    ExhaustAllComponent,
    FinalizeComponent,
    FirstComponent,
    FilterComponent,
  ],
  imports: [CommonModule, OperatorsRoutingModule],
})
export class OperatorsModule {}
