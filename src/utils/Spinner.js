import { Subject } from 'rxjs';

class Spinner {
  constructor() {
    this.loading = new Subject();
  }

  show = () => {
    this.loading.next(true);
  };

  hide = () => {
    this.loading.next(false);
  };
}

export default new Spinner();
