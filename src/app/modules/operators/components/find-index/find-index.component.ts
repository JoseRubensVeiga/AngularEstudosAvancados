import { Component, OnInit } from '@angular/core';
import { findIndex, from, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.scss'],
})
export class FindIndexComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    from([1, 2, 3, 4])
      .pipe(
        findIndex((v) => v === 3),
        takeUntil(this.destroyed$)
      )
      .subscribe({
        next: console.log,
        complete: () => console.log('completed!'),
      });
  }
}
