# rxjs-subject-store

A basic state management implemented using RxJS Subjects.

## install

```bash
yarn add @raisiqueira/rxjs-subject-store
```

## Usage

```typescript
import { Store } from '@raisiqueira/rxjs-subject-store';

class TState {
    value1: string = 'Hi!';
}

class TestStore extends Store {
    constructor() {
        super(new TState())
    }
}
```

## Using with Angular 2+

Just add `@Injectable()` to the class.

## License

MIT
