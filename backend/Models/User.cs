public class User
{
    public int UserID { get; set; }
    public required string Username { get; set; }
    public required string PasswordHash { get; set; }
    public required string UserType { get; set; }

    private DateTime _createdAt;
    public DateTime CreatedAt
    {
        get => _createdAt;
        set => _createdAt = DateTime.SpecifyKind(value, DateTimeKind.Utc);
    }

    private DateTime _updatedAt;
    public DateTime UpdatedAt
    {
        get => _updatedAt;
        set => _updatedAt = DateTime.SpecifyKind(value, DateTimeKind.Utc);
    }
}
