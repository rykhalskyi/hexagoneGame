using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Game.players.ActivePlayer;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Game.players
{
  public class GetActivePlayerQuery : IRequest<ActionResult<ActivePlayer.ActivePlayer>>
  {
  }

  public class GetActivePlayersQueryHandler : IRequestHandler<GetActivePlayerQuery, ActionResult<ActivePlayer.ActivePlayer>>
  {
    private readonly IActivePlayerService _activePlayerService;

    public GetActivePlayersQueryHandler(IActivePlayerService activePlayerService)
    {
      _activePlayerService = activePlayerService;
    }

    public async Task<ActionResult<ActivePlayer.ActivePlayer>> Handle(GetActivePlayerQuery request, CancellationToken cancellationToken)
    {
      var result = new ActivePlayer.ActivePlayer()
      {
        Player = ActivePlayerStub(_activePlayerService.ActivePlayer),
        SelectedResource = 8
      };

      return result;
    }

    private Player ActivePlayerStub(int index)
    {
      var player1 = new Player()
      {
        Id = 0,
        Name = "Anna",
        ArchType = ArchTypes.Prince,
        Color = "#ccc",
        Resources = new List<int>(new[] {1, 2, 3, 4, 5, 6, 7}),
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
        Resources = new List<int>(new[] {1, 2, 3, 4, 5, 6, 7}),
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
        Resources = new List<int>(new[] {1, 2, 3, 4, 5, 6, 7}),
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
        Resources = new List<int>(new[] {1, 2, 3, 4, 5, 6, 7}),
        Gold = 0,
        Silver = 0,
        Bronze = 0
      };

      var players = new[] {player1, player2, player3, player4};
      return players[index];
    }

  }
}
