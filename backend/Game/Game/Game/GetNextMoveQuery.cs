using Game.Utils;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Game.Game
{
  public class GetNextMoveQuery : IRequest<ActionResult<Status>>
  {
    public Guid GameId { get; set; }
  }

  public class GetNextMoveQueryHandler : IRequestHandler<GetNextMoveQuery, ActionResult<Status>>
    {

    public async Task<ActionResult<Status>> Handle(GetNextMoveQuery request, CancellationToken cancellationToken)
    {
      throw new NotImplementedException();
    }
  }
}

