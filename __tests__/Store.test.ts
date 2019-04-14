import { Store } from "../src";

class TState {
  value1: string = "initial value";
}

class StoreTest extends Store<TState> {
  constructor() {
    super(new TState());
  }
}
describe("Store Abstract class", () => {
  let store: StoreTest;

  beforeEach(() => {
    store = new StoreTest();
  });

  it("Should see the initial value", () => {
    const initialState = {
      value1: "initial value"
    };
    expect(store.state).toEqual(initialState);
  });

  it("Should set a new value to value1", () => {
    const newState = {
      value1: "So, this is the new value for value1"
    };
    store.setState(newState);
    expect(store.state).toEqual(newState);
  });

  it("Should be an object with value1 equals Hue", () => {
    const state = store.setState({ value1: "Hue" });
    expect(store.state).toEqual({ value1: "Hue" });
  });
});
