using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Game.players
{
  public class GetAllPlayersQuery : IRequest<ActionResult<IList<Player>>>
  {
    public Guid UserId { get; set; }
  }

  public class GetAllPlayersQueryHandler : IRequestHandler<GetAllPlayersQuery, ActionResult<IList<Player>>>
  {
    public async Task<ActionResult<IList<Player>>> Handle(GetAllPlayersQuery request, CancellationToken cancellationToken)
    {
      var list = GetPlayersStub();

      return list;
    }

    private List<Player> GetPlayersStub()
    {
      var result = new List<Player>();

       var player1 = new Player()
       {
         Id = 0,
         Name = "Jaro",
         ArchType = ArchTypes.Prince,
         Color = "#ccc",
         Resources = new List<int>(new []{1,2,3,4,5,6,7}),
         Gold = 0,
         Silver = 0,
         Bronze = 0
       };

       var player2 = new Player()
       {
         Id = 0,
         Name = "Jaro",
         ArchType = ArchTypes.Trickster,
         Color = "#ccc",
         Resources = new List<int>(new[] { 1, 2, 3, 4, 5, 6, 7 }),
         Gold = 0,
         Silver = 0,
         Bronze = 0
       };

       var player3 = new Player()
       {
         Id = 0,
         Name = "Jaro",
         ArchType = ArchTypes.Warrior,
         Color = "#ccc",
         Resources = new List<int>(new[] { 1, 2, 3, 4, 5, 6, 7 }),
         Gold = 0,
         Silver = 0,
         Bronze = 0
       };

       var player4= new Player()
       {
         Id = 0,
         Name = "Jaro",
         ArchType = ArchTypes.Lord,
         Color = "#ccc",
         Resources = new List<int>(new[] { 1, 2, 3, 4, 5, 6, 7 }),
         Gold = 0,
         Silver = 0,
         Bronze = 0
       };

      result.Add(player1);
      result.Add(player2);
      result.Add(player3);
      result.Add(player4);

      return result;
    }
  }
}
