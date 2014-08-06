using System.Linq;
using WebApiService.DAL;
using WebApiService.Entity;

namespace WebApiService.Business
{
    public class Core
    {
        public static void CreateDatabaseIfNotExists()
        {
            DAO.CreateDatabaseIfNotExists();
        }

        public static IQueryable<Book> GetBooks()
        {
            return DAO.GetBooks();
        }

        //public static Book GetBook(int bookID)
        //{
        //    return DAO.GetBook(bookID);
        //}

        //public static bool BookExists(int key)
        //{
        //    return DAO.BookExists(key);
        //}
    }
}