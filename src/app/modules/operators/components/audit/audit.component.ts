import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { audit, fromEvent, interval, Subject } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditComponent implements OnInit, OnDestroy {
  destroyed = new Subject<void>();

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(audit((ev) => interval(1000)));
    result.subscribe((x) => console.log(x));
  }

  ngOnDestroy(): void {
    this.destroyed.unsubscribe();
  }
}
