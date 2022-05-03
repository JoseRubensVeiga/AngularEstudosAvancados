import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: '<ng-container></ng-container>',
})
export class BaseComponent implements OnDestroy {
  protected destroyed$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
