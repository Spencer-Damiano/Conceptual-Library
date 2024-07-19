using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? 
                       throw new InvalidOperationException("Connection string 'DefaultConnection' is not set.");

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<ApplicationDbContext>();
    context.Database.Migrate(); // Apply migrations

    // Initialize test data
    if (!context.Users.Any())
    {
        var testUser = new User
        {
            Username = "testuser",
            PasswordHash = "testpass",
            UserType = "test",
            CreatedAt = DateTime.Now,
            UpdatedAt = DateTime.Now
        };
        context.Users.Add(testUser);
        context.SaveChanges();

        var testTimerType = new TimerType
        {
            TypeName = "Pomodoro"
        };
        context.TimerTypes.Add(testTimerType);
        context.SaveChanges();

        var testSession = new Session
        {
            UserID = testUser.UserID,
            TimerTypeID = testTimerType.TimerTypeID,
            StartTime = DateTime.Now,
            EndTime = DateTime.Now.AddMinutes(25),
            WorkDuration = 25,
            BreakDuration = 5
        };
        context.Sessions.Add(testSession);
        context.SaveChanges();

        var testItem = new Item
        {
            UserID = testUser.UserID,
            Description = "Test task",
            IsCompleted = false,
            Priority = 1,
            Tags = "test",
            CreatedAt = DateTime.Now,
            UpdatedAt = DateTime.Now
        };
        context.Items.Add(testItem);
        context.SaveChanges();

        var testSessionItem = new SessionItem
        {
            SessionID = testSession.SessionID,
            ItemID = testItem.ItemID,
            TimerTypeID = testTimerType.TimerTypeID
        };
        context.SessionItems.Add(testSessionItem);
        context.SaveChanges();
    }
}

app.Run();
