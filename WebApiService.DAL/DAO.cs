using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApiService.Entity;

namespace WebApiService.DAL
{
    public static class DAO
    {
        private static DefaultDbContext _DALDbContext;

        static DAO()
        {
            if (_DALDbContext == null)
                _DALDbContext = new DefaultDbContext();
        }

        public static void CreateDatabaseIfNotExists()
        {
            Database.SetInitializer<DefaultDbContext>(null);
            using (var context = new DefaultDbContext())
            {
                if (!context.Database.Exists())
                {
                    // Create the SimpleMembership database without Entity Framework migration schema
                    ((IObjectContextAdapter)context).ObjectContext.CreateDatabase();
                }
            }
        }

        public static IQueryable<Book> GetBooks()
        {
            return _DALDbContext.Book
                .Where(x => x.IsDeleted == false)
                .OrderByDescending(x => x.BookID);
        }

        public static IQueryable<Book> GetBooks(Category category)
        {
            return _DALDbContext.Book
                .Where(x => x.Category == category && x.IsDeleted == false)
                .OrderByDescending(x => x.BookID);
        }

        public static IQueryable<Book> GetBooks(Category category, int userID)
        {
            return _DALDbContext.Book
                .Where(x => x.Category == category && x.UserID == userID && x.IsDeleted == false)
                .OrderByDescending(x => x.BookID);
        }

        public static bool BookExists(int key)
        {
            return _DALDbContext.Book.Any(p => p.BookID == key);
        }
    }
}
