namespace backend.Models
{
    public class Item
    {
        public int ItemID { get; set; }
        public required int UserID { get; set; }
        public required string Description { get; set; }
        public required bool IsCompleted { get; set; }
        public int? Priority { get; set; }
        public string? Tags { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public User User { get; set; } = null!;
        public ICollection<SessionItem> SessionItems { get; set; } = new List<SessionItem>();
    }
}
