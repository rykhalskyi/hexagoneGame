export enum DiceElements
{
   Red = 0,
   Orange = 1,
   Yellow = 2,
   Green = 3,
   Blue = 4,
   Navy = 5,
   Violet = 6,
   Attack = 7,
   Trade = 8,
   Boost = 9,
   Harvest = 10,
   Repair = 11,
   One = 12,
   Two = 13,
   Three = 14,
   Four = 15,
   Five = 16,
   Six = 17,
}

export interface IDice
{
  dice : DiceElements[]
}

export interface DiceThrow
{
   diceOne : DiceElements,
   diceTwo : DiceElements
}
