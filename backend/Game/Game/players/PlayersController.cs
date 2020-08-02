using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Game.Controllers;
using Game.Utils;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Game.players
{
  public class PlayersController : ApiControllerBase
  {
     readonly IMediator _mediator;

     public PlayersController(IMediator mediator)
     {
       _mediator = mediator;
     }

    [HttpGet]
    public async Task<ActionResult<Message>> GetAllPlayers(string gameIdString)
    {
      var gameId = Guid.Parse(gameIdString);
      var result = await _mediator.Send(new GetAllPlayersQuery()
      { GameId = gameId});
      return result;
    }

    [HttpGet("active")]
    public async Task<ActionResult<Message>> GetActivePlayer()
    {
      var result = await _mediator.Send(new GetActivePlayerQuery());
      return result;
    }
  }
}
