using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Game.Game;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Game.players
{
  public class GetAllPlayersQuery : IRequest<ActionResult<IList<Player>>>
  {
    public Guid GameId { get; set; }
  }

  public class GetAllPlayersQueryHandler : IRequestHandler<GetAllPlayersQuery, ActionResult<IList<Player>>>
  {
    private readonly IGameService _gameService;

    public GetAllPlayersQueryHandler(IGameService gameService)
    {
      _gameService = gameService;
    }

    public async Task<ActionResult<IList<Player>>> Handle(GetAllPlayersQuery request, CancellationToken cancellationToken)
    {
      var game = _gameService.GetGame(request.GameId);

      if (game == null)
      {
        //TODO: Error handling code
      }

      return game.Players;

    }

    
  }
}
