using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Game.Utils;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Game.Game
{
  public class GetNewGameQuery : IRequest<ActionResult<Message>>
  {
  }

  public class GetNewGameQueryHandler : IRequestHandler<GetNewGameQuery, ActionResult<Message>>
  {
    private readonly IGameService _gameService;

    public GetNewGameQueryHandler(IGameService gameService)
    {
      _gameService = gameService;
    }

    public async Task<ActionResult<Message>> Handle(GetNewGameQuery request, CancellationToken cancellationToken)
    {
      var newGame = _gameService.NewGame();
      return new Message() {Status = new Status(true, "OK"), Payload = newGame.Id.ToString()};
    }
  }
}
