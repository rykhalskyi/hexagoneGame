import { Resource } from './resource';
import { Player } from './player';

export interface ActivePlayerResource {
  resource : Resource;
  quantity : number;
  selected : boolean;
}

export interface ActivePlayer
{
  player : Player;
  selectedResource : number;
}

