import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs"
import { Store, select } from "@ngrx/store"
import * as action from "../contador/contador.action"
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number> | undefined


  constructor(private store: Store<{ count: number}>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(select('count'))
  }

  incrementar() {
    this.store.dispatch(action.inc())
  }
  decrementar() {
    this.store.dispatch(action.dec())
  }
  random() {
    this.store.dispatch(action.random())
  }
  saltar(n: number) {
    this.store.dispatch(action.saltar({num: n}))
  }

}
