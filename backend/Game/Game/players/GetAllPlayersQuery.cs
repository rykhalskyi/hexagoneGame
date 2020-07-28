using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Game.Game;
using Game.Utils;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Diagnostics;

namespace Game.players
{
  public class GetAllPlayersQuery : IRequest<ActionResult<Message>>
  {
    public Guid GameId { get; set; }
  }

  public class GetAllPlayersQueryHandler : IRequestHandler<GetAllPlayersQuery, ActionResult<Message>>
  {
    private readonly IGameService _gameService;

    public GetAllPlayersQueryHandler(IGameService gameService)
    {
      _gameService = gameService;
    }

    public async Task<ActionResult<Message>> Handle(GetAllPlayersQuery request, CancellationToken cancellationToken)
    {
      var game = _gameService.GetGame(request.GameId);

      if (game == null)
      {
        return new Message()
        {
          Status = new Status(false, 1, $"Game {request.GameId} was not found")
        };
      }

      var result = new Message()
      {
        Status = new Status(true, "Ok"),
        Payload = game.Players
      };

      return result;

    }

    
  }
}
