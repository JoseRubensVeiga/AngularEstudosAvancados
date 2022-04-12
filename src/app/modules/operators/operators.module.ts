import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { AuditComponent } from './components/audit/audit.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { BufferCountComponent } from './components/buffer-count/buffer-count.component';

@NgModule({
  declarations: [
    AuditComponent,
    OperatorsComponent,
    BufferCountComponent
  ],
  imports: [CommonModule, OperatorsRoutingModule],
})
export class OperatorsModule {}
