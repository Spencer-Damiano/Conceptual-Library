namespace backend.Models
{
    public class Session
    {
        public int SessionID { get; set; }
        public required int UserID { get; set; }
        public required int TimerTypeID { get; set; }
        public required DateTime StartTime { get; set; }
        public required DateTime EndTime { get; set; }
        public int? WorkDuration { get; set; }
        public int? BreakDuration { get; set; }

        public User User { get; set; } = null!;
        public TimerType TimerType { get; set; } = null!;
        public ICollection<SessionItem> SessionItems { get; set; } = new List<SessionItem>();
    }
}
