import { Component, OnInit } from '@angular/core';
import { first, Subject, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    const randomNumber = Math.floor(Math.random() * 10);
    const subject = new Subject<string>();

    subject.pipe(takeUntil(this.destroyed$), first()).subscribe(console.log);

    console.log('the random number is: ', randomNumber);

    // if random number os even, emits a value from the subject
    if (randomNumber % 2 === 0) {
      subject.next('value');
    }

    // completes the subject.
    subject.complete();
  }
}
