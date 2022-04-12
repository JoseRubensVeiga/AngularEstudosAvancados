import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { audit, fromEvent, interval, mapTo, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditComponent implements OnDestroy {
  destroyed = new Subject<void>();

  subject1$ = new Subject<string>();

  subject2$ = new Subject<string>();

  audited$ = this.subject1$.pipe(
    audit(() => this.subject2$),
    tap((v) => console.log(v)),
    mapTo('Emitiu :)')
  );

  emitObservable1(): void {
    this.subject1$.next('Observable 1');
  }

  emitObservable2(): void {
    this.subject2$.next('Observable 2');
  }

  ngOnDestroy(): void {
    this.destroyed.unsubscribe();
  }
}
