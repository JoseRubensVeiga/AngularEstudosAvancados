import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { debounce, interval, Subject, takeUntil, tap } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebounceComponent extends BaseComponent implements OnInit {
  subject$ = new Subject<number>();

  counter = 0;

  ngOnInit(): void {
    const result = this.subject$.pipe(
      tap((x) => console.log('--- Clicou no botão: ' + x)),
      debounce(() => interval(3000)),
      tap((x) =>
        console.log(
          '--- Evento do clique no botão: ' + x + ' -> após 3 segundos'
        )
      ),
      takeUntil(this.destroyed$)
    );
    result.subscribe(() => console.log());
  }

  emitObservable(): void {
    this.subject$.next(++this.counter);
  }
}
