import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { concatMap, delay, of, Subject, takeUntil, tap } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcatMapComponent extends BaseComponent implements OnInit {
  subject$ = new Subject<string>();

  ngOnInit(): void {
    const result = this.subject$.pipe(
      takeUntil(this.destroyed$),
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
