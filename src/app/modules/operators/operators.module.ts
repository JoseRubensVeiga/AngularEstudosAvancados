import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { AuditComponent } from './components/audit/audit.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { BufferCountComponent } from './components/buffer-count/buffer-count.component';
import { BufferWhenComponent } from './components/buffer-when/buffer-when.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { DebounceComponent } from './components/debounce/debounce.component';
import { DelayComponent } from './components/delay/delay.component';
import { DistinctComponent } from './components/distinct/distinct.component';

@NgModule({
  declarations: [
    AuditComponent,
    OperatorsComponent,
    BufferCountComponent,
    BufferWhenComponent,
    ConcatMapComponent,
    DebounceComponent,
    DelayComponent,
    DistinctComponent
  ],
  imports: [CommonModule, OperatorsRoutingModule],
})
export class OperatorsModule {}
