import { Player } from './player';

export class Game {
  public winner: Player;
  public players: Player[] = [new Player('Player 1'), new Player('Player 2')];

  public scorePoint(playerIndex: number) {
    const player: Player = this.players[playerIndex - 1];
    if (player.score.isGame) {
      this.winner = player;
    }
    player.scorePoint();
  }
}
