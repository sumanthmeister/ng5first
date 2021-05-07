import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly goal']);
  goal = this.goals.asObservable();
  constructor() { }

  changeGoal(goal:any){
    this.goals.next(goal);
  }
}
