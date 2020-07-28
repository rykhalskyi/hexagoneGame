namespace Game.Utils
{
  public class Status
  {
    public bool Success { get; }
    public string Message { get; }

    public int Code { get; }

    public Status(bool success, string message) : this (success, -1, message)
    {
      Success = success;
      Message = message;
    }

    public Status(bool success, int code, string message)
    {
      Success = success;
      Message = message;
      Code = code;
    }
  }
}
