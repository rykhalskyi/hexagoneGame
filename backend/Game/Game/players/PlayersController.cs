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
    public async Task<ActionResult<Message>> GetAllPlayers(string gameId)
    {
      var gameIdGuid = Guid.Parse(gameId);
      var result = await _mediator.Send(new GetAllPlayersQuery()
      { GameId = gameIdGuid });
      return result;
    }

    [HttpGet("active")]
    public async Task<ActionResult<Message>> GetActivePlayer(string gameId)
    {
      var result = await _mediator.Send(new GetActivePlayerQuery() {GameId = Guid.Parse(gameId) });
      return result;
    }
  }
}
