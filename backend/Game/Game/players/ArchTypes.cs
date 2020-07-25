using System.Collections.Generic;

namespace Game.players
{
  public class ArchTypes
  {
      public static readonly ArchType Prince = new ArchType()
      {
        Name = "Prince",
        ResourcesSorted = new List<Resource>(new []{ Resource.Yellow, Resource.Violet, Resource.Navy, Resource.Red, Resource.Orange, Resource.Green, Resource.Blue }),
        ResourcesForBronze = new List<Resource>(new[]{ Resource.Yellow, Resource.Violet, Resource.Navy }),
        ResourcesForSilver = new List<Resource>(new[] { Resource.Bronze, Resource.Red, Resource.Orange }),
        ResourcesForGold = new List<Resource>(new[] { Resource.Silver, Resource.Red, Resource.Orange, Resource.Green, Resource.Blue }),
        isShadow = false
      };

      public static readonly ArchType Trickster = new ArchType()
      {
        Name = "Trickster",
        ResourcesSorted = new List<Resource>(new[] { Resource.Navy, Resource.Orange, Resource.Red, Resource.Yellow, Resource.Green, Resource.Blue, Resource.Violet }),
        ResourcesForBronze = new List<Resource>(new[] { Resource.Navy, Resource.Orange, Resource.Red }),
        ResourcesForSilver = new List<Resource>(new[] { Resource.Bronze, Resource.Yellow, Resource.Green }),
        ResourcesForGold = new List<Resource>(new[] { Resource.Silver, Resource.Yellow, Resource.Green, Resource.Blue, Resource.Violet }),
        isShadow = false
      };

      public static readonly ArchType Warrior = new ArchType()
      {
        Name = "Warrior",
        ResourcesSorted = new List<Resource>(new[] { Resource.Red, Resource.Violet, Resource.Yellow, Resource.Orange, Resource.Green, Resource.Blue, Resource.Navy }),
        ResourcesForBronze = new List<Resource>(new[] { Resource.Red, Resource.Violet, Resource.Yellow }),
        ResourcesForSilver = new List<Resource>(new[] { Resource.Bronze, Resource.Orange, Resource.Green }),
        ResourcesForGold = new List<Resource>(new[] { Resource.Silver, Resource.Orange, Resource.Green, Resource.Blue, Resource.Navy }),
        isShadow = false
      };

      public static readonly ArchType Lord = new ArchType()
      {
        Name = "Lord",
        ResourcesSorted = new List<Resource>(new[] { Resource.Blue, Resource.Yellow, Resource.Green, Resource.Red, Resource.Orange, Resource.Navy, Resource.Violet }),
        ResourcesForBronze = new List<Resource>(new[] { Resource.Blue, Resource.Yellow, Resource.Green }),
        ResourcesForSilver = new List<Resource>(new[] { Resource.Bronze, Resource.Orange, Resource.Green }),
        ResourcesForGold = new List<Resource>(new[] { Resource.Silver, Resource.Orange, Resource.Green, Resource.Blue, Resource.Navy }),
        isShadow = false
      };
  }
}
