import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { bufferCount, fromEvent, map, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BufferCountComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    const clicks = fromEvent(document, 'click').pipe(map(() => this.getNow()));
    const buffered = clicks.pipe(bufferCount(2));

    buffered.pipe(takeUntil(this.destroyed$)).subscribe((x) => console.log(x));
  }

  private getNow(): string {
    const now = new Date();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const miliSeconds = now.getMilliseconds().toString().padStart(2, '0');
    return `${minutes}m:${seconds}s:${miliSeconds}ms`;
  }
}
