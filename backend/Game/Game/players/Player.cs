using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Game.players
{
  public class Player
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public ArchType ArchType { get; set; }
    public string Color { get; set; }
    public List<int> Resources { get; set; }
    public int Gold { get; set; }
    public int Silver { get; set; }
    public int Bronze { get; set; }
  }
}
