namespace Game.Utils
{
  public class Status
  {
    public bool Success { get; }
    public string Message { get; }

    public Status(bool success, string message)
    {
      Success = success;
      Message = message;
    }
  }
}
