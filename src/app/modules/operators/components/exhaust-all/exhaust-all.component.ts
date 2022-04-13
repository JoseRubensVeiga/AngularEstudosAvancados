import { Component, OnInit } from '@angular/core';
import { exhaustAll, interval, map, Subject, take, tap } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-exhaust-all',
  templateUrl: './exhaust-all.component.html',
  styleUrls: ['./exhaust-all.component.scss'],
})
export class ExhaustAllComponent extends BaseComponent implements OnInit {
  subject$ = new Subject<void>();

  ngOnInit(): void {
    const higherOrder = this.subject$.pipe(
      tap(() => console.log('Emitiu o Observable de Alta-Ordem')),
      map(() => interval(3000).pipe(take(1)))
    );
    const result = higherOrder.pipe(exhaustAll());
    result.subscribe((x) => console.log(x));
  }

  emitObservable(): void {
    this.subject$.next();
  }
}
