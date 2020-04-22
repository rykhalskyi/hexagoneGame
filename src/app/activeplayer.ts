import { Resource } from './resource';

export interface ActivePlayerResource {
  resource : Resource;
  quantity : number;
  selected : boolean;
}

export interface ActivePlayer
{
  name : string;
  resources : ActivePlayerResource[];
  selectedResource : number;
}

