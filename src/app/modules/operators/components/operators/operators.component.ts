import { Component, OnInit } from '@angular/core';
import { routes as operatorsRoutes } from '../../operators-routing.module';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  routes!: string[];
  constructor() {}

  ngOnInit(): void {
    this.setRoutes();
  }

  private setRoutes(): void {
    this.routes = operatorsRoutes
      .filter((r) => r.path)
      .map((r) => r.path as string);
  }
}
