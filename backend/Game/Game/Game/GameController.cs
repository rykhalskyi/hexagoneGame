using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Game.Controllers;
using Game.Utils;
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
    public async Task<ActionResult<Message>> GetNewGame()
    {
      return await _mediator.Send(new GetNewGameQuery());
    }

    [HttpGet("move")]
    public async Task<ActionResult<Status>> NextMove()
    {
      return await _mediator.Send(new GetNextMoveQuery()); //Add parameter
    }
  }
}
