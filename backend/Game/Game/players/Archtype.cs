using System.Collections.Generic;

namespace Game.players
{
  public class ArchType
  {
     public string Name { get; set; }
     public List<Resource> ResourcesSorted { get; set; }
     public List<Resource> ResourcesForBronze { get; set; }
     public List<Resource> ResourcesForSilver { get; set; }
     public List<Resource> ResourcesForGold { get; set; }
     public bool isShadow { get; set; }
  }
}
