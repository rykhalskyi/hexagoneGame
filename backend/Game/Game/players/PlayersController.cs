using System.Collections;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Game.Controllers;
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
    public async Task<ActionResult<IList<Player>>> GetAllPlayers()
    {
      var result = await _mediator.Send(new GetAllPlayersQuery());
      return result;
    }
  }
}
