import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  delay,
  fromEvent,
  interval,
  Observable,
  of,
  Subject,
  take,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
  subject$ = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    const result = this.subject$.pipe(
      tap(console.log),
      concatMap(() =>
        of('--- Resultado do segundo observable -> após 3 segundos').pipe(
          delay(3000)
        )
      )
    );
    result.subscribe((x) => console.log(x));
  }

  emitObservable(): void {
    this.subject$.next('--- Emitindo valor');
  }
}
