import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { AuditComponent } from './components/audit/audit.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { BufferCountComponent } from './components/buffer-count/buffer-count.component';
import { BufferWhenComponent } from './components/buffer-when/buffer-when.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';

@NgModule({
  declarations: [
    AuditComponent,
    OperatorsComponent,
    BufferCountComponent,
    BufferWhenComponent,
    ConcatMapComponent
  ],
  imports: [CommonModule, OperatorsRoutingModule],
})
export class OperatorsModule {}
