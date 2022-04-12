import { Component, ChangeDetectionStrategy } from '@angular/core';
import { audit, Subject, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditComponent extends BaseComponent {
  subject1$ = new Subject<string>();
  clicks = 0;

  subject2$ = new Subject<string>();

  audited$ = this.subject1$.pipe(
    takeUntil(this.destroyed$),
    audit(() => this.subject2$)
  );

  emitObservable1(): void {
    this.subject1$.next(`Observable ${++this.clicks}`);
  }

  emitObservable2(): void {
    this.subject2$.next('Observable 2');
  }
}
