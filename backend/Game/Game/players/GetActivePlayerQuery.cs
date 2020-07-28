using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Game.Game;
using Game.players.ActivePlayer;
using Game.Utils;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Game.players
{
  public class GetActivePlayerQuery : IRequest<ActionResult<Message>>
  {
    public Guid GameId { get; set; }
  }

  public class GetActivePlayersQueryHandler : IRequestHandler<GetActivePlayerQuery, ActionResult<Message>>
  {
    private readonly IGameService _gameService;

    public GetActivePlayersQueryHandler(IGameService gameService)
    {
      _gameService = gameService;
    }

    public async Task<ActionResult<Message>> Handle(GetActivePlayerQuery request, CancellationToken cancellationToken)
    {
      var game = _gameService.GetGame(request.GameId);

      if (game == null)
      {
         return new Message()
         {
           Status = new Status(false, 1, $"Game {request.GameId} was not found"),
           Payload = new Player()
         };
      }

      var player = new ActivePlayer.ActivePlayer()
      {
        Player = game.ActivePlayer,
        SelectedResource = 8
      };

      return new Message()
      {
        Status = new Status(true, "OK"),
        Payload = player
      };
    }

   

  }
}
