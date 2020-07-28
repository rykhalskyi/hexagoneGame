using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Game.Utils
{
  public class Message
  {
    public Status Status { get; set; }
    public object Payload { get; set; }
  }
}
