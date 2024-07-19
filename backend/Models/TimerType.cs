namespace backend.Models
{
    public class TimerType
    {
        public int TimerTypeID { get; set; }
        public required string TypeName { get; set; }

        public ICollection<Session> Sessions { get; set; } = new List<Session>();
        public ICollection<SessionItem> SessionItems { get; set; } = new List<SessionItem>();
    }
}
