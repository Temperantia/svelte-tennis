import { ScoreMessage, SCORE_MESSAGES } from '../enums/score-message';

export class Score {
  private value: number = 0;
  public message: ScoreMessage = ScoreMessage.Zero;
  public isGame: boolean = false;

  public increment() {
    if (++this.value === SCORE_MESSAGES.length - 2) {
      this.isGame = true;
    }
    this.message = SCORE_MESSAGES[this.value];
  }
}
