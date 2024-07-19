namespace backend.Models
{
    public class SessionItem
    {
        public int SessionID { get; set; }
        public int ItemID { get; set; }
        public int TimerTypeID { get; set; }

        public Session Session { get; set; } = null!;
        public Item Item { get; set; } = null!;
        public TimerType TimerType { get; set; } = null!;
    }
}
