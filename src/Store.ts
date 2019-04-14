import { Observable, BehaviorSubject } from "rxjs";

export abstract class Store<S> {
  /**
   * Observable from our state
   * @template S - State
   */
  public state$: Observable<S>;

  /**
   * @internal
   */
  private _state$: BehaviorSubject<S>;

  protected constructor(initialValue: S) {
    // set the store value with initialValue
    this._state$ = new BehaviorSubject(initialValue);
    // set our state as Observable
    this.state$ = this._state$.asObservable();
  }

  /**
   * get current state
   */
  get state(): S {
    return this._state$.getValue();
  }

  /**
   * setState - update our state with a new value
   * @param nextState
   */
  public setState(nextState: S): void {
    this._state$.next(nextState);
  }
}
