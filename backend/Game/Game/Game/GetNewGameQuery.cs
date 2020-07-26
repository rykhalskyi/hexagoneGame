using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Game.Game
{
  public class GetNewGameQuery : IRequest<ActionResult<string>>
  {
  }

  public class GetNewGameQueryHandler : IRequestHandler<GetNewGameQuery, ActionResult<string>>
  {
    public async Task<ActionResult<string>> Handle(GetNewGameQuery request, CancellationToken cancellationToken)
    {
      var guid = Guid.NewGuid();
      return guid.ToString();
    }
  }
}
