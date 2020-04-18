import {Resource} from './resource';

export interface ArchType{
  keyResources : Resource[];
  resorcesForBronze : Resource[];
  resourceForSilver : Resource[];
  resourceForGold : Resource[];
}
