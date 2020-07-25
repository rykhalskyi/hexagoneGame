namespace Game.players.ActivePlayer
{
  public class ActivePlayerService : IActivePlayerService
  {
    private int _activePlayer = 0;

    public int ActivePlayer
    {
      get
      {
        var result = _activePlayer;
        _activePlayer++;

        if (_activePlayer > 3)
        {
          _activePlayer = 0;
        }

        return result;
      }
    }
  }
}
