using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Game.players;

namespace Game.Game
{
  public class StubGameService : IGameService
  {
    List<Game> _games = new List<Game>();

    public Game NewGame()
    {
      var newGame = new Game(Guid.NewGuid());

      newGame.AppendRangePlayers(GetDefaultStartPlayers());

      _games.Add(newGame);

      return newGame;
    }

    public Game GetGame(Guid id)
    {
      return _games.FirstOrDefault(i => i.Id == id);
    }

    public void AppendPlayerTo(Guid gameId, Player player)
    {
      _games.FirstOrDefault(i => i.Id == gameId)?.AppendPlayer(player);
    }

    List<Player> GetDefaultStartPlayers()
    {
      var result = new List<Player>();

      var player1 = new Player()
      {
        Id = 0,
        Name = "Anna",
        ArchType = ArchTypes.Prince,
        Color = "#ccc",
        Resources = new List<int>(new[] { 1, 2, 3, 4, 5, 6, 7 }),
        Gold = 0,
        Silver = 0,
        Bronze = 0
      };

      var player2 = new Player()
      {
        Id = 0,
        Name = "Jaro",
        ArchType = ArchTypes.Trickster,
        Color = "#ccc",
        Resources = new List<int>(new[] { 1, 2, 3, 4, 5, 6, 7 }),
        Gold = 0,
        Silver = 0,
        Bronze = 0
      };

      var player3 = new Player()
      {
        Id = 0,
        Name = "Ivan",
        ArchType = ArchTypes.Warrior,
        Color = "#ccc",
        Resources = new List<int>(new[] { 1, 2, 3, 4, 5, 6, 7 }),
        Gold = 0,
        Silver = 0,
        Bronze = 0
      };

      var player4 = new Player()
      {
        Id = 0,
        Name = "Maria",
        ArchType = ArchTypes.Lord,
        Color = "#ccc",
        Resources = new List<int>(new[] { 1, 2, 3, 4, 5, 6, 7 }),
        Gold = 0,
        Silver = 0,
        Bronze = 0
      };

      result.Add(player1);
      result.Add(player2);
      result.Add(player3);
      result.Add(player4);

      return result;
    }

  }
}
