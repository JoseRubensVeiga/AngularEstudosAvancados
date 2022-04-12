import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { AuditComponent } from './components/audit/audit.component';

@NgModule({
  declarations: [
    AuditComponent
  ],
  imports: [CommonModule, OperatorsRoutingModule],
})
export class OperatorsModule {}
