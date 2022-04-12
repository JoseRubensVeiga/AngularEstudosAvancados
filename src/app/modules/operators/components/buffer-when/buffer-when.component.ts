import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bufferWhen, filter, fromEvent, map, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html',
  styleUrls: ['./buffer-when.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BufferWhenComponent extends BaseComponent {
  keyUps$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    filter((k) => k.key === ' ')
  );

  clicksAmount$ = fromEvent(document, 'click').pipe(
    bufferWhen(() => this.keyUps$),
    takeUntil(this.destroyed$),
    map((value) => value.length)
  );
}
