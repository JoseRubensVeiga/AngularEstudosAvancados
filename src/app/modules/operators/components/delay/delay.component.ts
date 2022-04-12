import { Component, OnInit } from '@angular/core';
import { delay, Subject, takeUntil, tap } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss'],
})
export class DelayComponent extends BaseComponent implements OnInit {
  subject$ = new Subject<void>();

  ngOnInit(): void {
    this.subject$
      .pipe(
        takeUntil(this.destroyed$),
        tap(() => console.log('Emitiu um valor :)')),
        delay(2000)
      )
      .subscribe(() => console.log('Emitiu um valor -> após 2 segundos'));
  }

  emitObservable(): void {
    this.subject$.next();
  }
}
