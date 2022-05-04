import { Component, OnInit } from '@angular/core';
import { filter, from, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    from([1, 2, 3, 4, 5])
      .pipe(takeUntil(this.destroyed$), filter(this.isEven))
      .subscribe({
        next: (v) => console.log(v),
        error: (v) => console.error(v),
        complete: () => console.log('Completed'),
      });
  }

  private isEven(x: number): boolean {
    return x % 2 === 0;
  }
}
