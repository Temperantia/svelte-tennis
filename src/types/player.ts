import { Score } from './score';

export class Player {
  public score: Score = new Score();

  constructor(public name: string) {}

  public scorePoint() {
    this.score.increment();
  }
}
