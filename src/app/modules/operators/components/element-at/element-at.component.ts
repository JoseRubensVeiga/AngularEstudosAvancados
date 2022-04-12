import { Component, OnInit } from '@angular/core';
import { elementAt, of, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

interface Product {
  description: string;
  price: number;
  onSale: boolean;
}

@Component({
  selector: 'app-element-at',
  templateUrl: './element-at.component.html',
  styleUrls: ['./element-at.component.scss'],
})
export class ElementAtComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    of<Product[]>(
      {
        description: 'Produto 01',
        price: 1.99,
        onSale: false,
      },
      {
        description: 'Produto 02',
        price: 2.99,
        onSale: true,
      },
      {
        description: 'Produto 03',
        price: 3.99,
        onSale: true,
      }
    )
      .pipe(
        takeUntil(this.destroyed$),

        elementAt(2) // filtra somente o terceiro elemento emitido, índice 2.
      )
      .subscribe((x) => console.log(x));
  }
}
