import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferWhen, filter, fromEvent, map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html',
  styleUrls: ['./buffer-when.component.scss'],
})
export class BufferWhenComponent implements OnInit, OnDestroy {
  keyUps$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    filter((k) => k.key === ' ')
  );

  destroyed$ = new Subject<void>();

  clicksAmount$ = fromEvent(document, 'click').pipe(
    bufferWhen(() => this.keyUps$),
    takeUntil(this.destroyed$),
    map((value) => value.length)
  );

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
