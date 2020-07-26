using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Game.Controllers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Game.Game
{
  public class GameController : ApiControllerBase
  {
    private readonly IMediator _mediator;

    public GameController(IMediator mediator)
    {
      _mediator = mediator;
    }

    [HttpGet]
    public async Task<ActionResult<string>> GetNewGame()
    {
      return await _mediator.Send(new GetNewGameQuery());
    }
  }
}
