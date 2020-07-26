using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Game.players;
using Game.Utils;

namespace Game.Game
{
  public class Game
  {
    private int _currentPlayer = 0;

    public Game(Guid id)
    {
      Id = id;
    }
    public Guid Id { get; }
    public Player ActivePlayer => Players[_currentPlayer];
    public List<Player> Players { get; }

    public void AppendPlayer(Player player)
    {
      if (Players.Count < 4)
      {
        Players.Add(player);
      }
    }

    public void AppendRangePlayers(IEnumerable<Player> players)
    {
      Players.AddRange(players);
      if (Players.Count > 4) throw new ArgumentOutOfRangeException("It could be only 4 players");
    }

    public Player NextPlayer()
    {
   
      var result = Players[_currentPlayer];

      _currentPlayer++;

      if (_currentPlayer > Players.Count - 1)
      {
        _currentPlayer = 0;
      }

      return result;
    }

    public Status NextMove()
    {
      return new Status(true, "Next Move");
    }
  }
}
