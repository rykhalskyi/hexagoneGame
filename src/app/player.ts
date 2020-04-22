import { ArchType } from './archtype';

export interface Player
{
  name  : string;
  archType : ArchType;
  color : string;
  resources : number[];
  gold : number;
  silver : number;
  bronze : number;
}
