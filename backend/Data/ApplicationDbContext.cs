using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<TimerType> TimerTypes { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<SessionItem> SessionItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SessionItem>()
                .HasKey(si => new { si.SessionID, si.ItemID, si.TimerTypeID });

            modelBuilder.Entity<SessionItem>()
                .HasOne(si => si.Session)
                .WithMany(s => s.SessionItems)
                .HasForeignKey(si => si.SessionID);

            modelBuilder.Entity<SessionItem>()
                .HasOne(si => si.Item)
                .WithMany(i => i.SessionItems)
                .HasForeignKey(si => si.ItemID);

            modelBuilder.Entity<SessionItem>()
                .HasOne(si => si.TimerType)
                .WithMany(tt => tt.SessionItems)
                .HasForeignKey(si => si.TimerTypeID);
        }
    }
}
