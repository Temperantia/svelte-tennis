import { Writable, writable } from 'svelte/store';
import { Game } from '../types/game';

const { subscribe, set, update }: Writable<Game> = writable(new Game());

const scorePoint: Function = (player: number) =>
  update(
    (currentGame: Game): Game => {
      currentGame.scorePoint(player);
      return currentGame;
    }
  );

const reset: Function = () => {
  set(new Game());
};

export default { subscribe, scorePoint, reset };
