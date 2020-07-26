using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Game.players;

namespace Game.Game
{
  interface IGameService
  {
    Game NewGame();
    Game GetGame(Guid id);
    void AppendPlayerTo(Guid gameId, Player player);
  }
}
