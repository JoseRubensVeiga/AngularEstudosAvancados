import { Component, OnInit } from '@angular/core';
import { distinct, of, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

interface Task {
  title: string;
  text: string;
}

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss'],
})
export class DistinctComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    of<Task[]>(
      {
        title: 'title 01',
        text: 'lorem ipsumm sic dolor',
      },
      {
        title: 'title 01',
        text: 'lorem ipsumm sic dolor 2',
      }
    )
      .pipe(
        takeUntil(this.destroyed$),

        distinct((t) => t.title) // filtra as tasks que o atributo title é igual

        // distinct(), // neste caso não vai funcionar, pois ele verificará a referência de memoria, porém funcionaria com valores primitivos
      )
      .subscribe(console.log);
  }
}
