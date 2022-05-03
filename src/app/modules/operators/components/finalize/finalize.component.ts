import { Component, OnInit } from '@angular/core';
import { finalize, take, takeUntil, timer } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.scss'],
})
export class FinalizeComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    timer(0, 1000)
      .pipe(
        take(5),
        finalize(() => console.log('finalized')),
        takeUntil(this.destroyed$)
      )
      .subscribe(console.log);
  }
}
