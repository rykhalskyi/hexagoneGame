using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Game.Game;
using Game.players.ActivePlayer;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Game.players
{
  public class GetActivePlayerQuery : IRequest<ActionResult<ActivePlayer.ActivePlayer>>
  {
    public Guid GameId { get; set; }
  }

  public class GetActivePlayersQueryHandler : IRequestHandler<GetActivePlayerQuery, ActionResult<ActivePlayer.ActivePlayer>>
  {
    private readonly IGameService _gameService;

    public GetActivePlayersQueryHandler(IGameService gameService)
    {
      _gameService = gameService;
    }

    public async Task<ActionResult<ActivePlayer.ActivePlayer>> Handle(GetActivePlayerQuery request, CancellationToken cancellationToken)
    {
      var game = _gameService.GetGame(request.GameId);

      if (game == null)
      {
          //TODO: Make error handling
      }

      var result = new ActivePlayer.ActivePlayer()
      {
        Player = game.ActivePlayer,
        SelectedResource = 8
      };

      return result;
    }

   

  }
}
