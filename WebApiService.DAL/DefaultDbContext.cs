using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using WebApiService.Entity;

namespace WebApiService.DAL
{
    public class DefaultDbContext : DbContext
    {
        public DefaultDbContext()
            : base("DefaultConnection")
        {

        }

        //public DbSet<UserProfile> UserProfile { get; set; }

        //public DbSet<ExternalUserInformation> ExternalUser { get; set; }

        public DbSet<Book> Book { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            base.OnModelCreating(modelBuilder);
        }
    }
}
