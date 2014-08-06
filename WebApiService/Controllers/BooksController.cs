using WebApiService.Entity;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.OData;
using WebApiService.Business;

namespace WebApiService.Controllers
{
    public class BooksController : ODataController
    {

        private bool BookExists(int key)
        {
            return Core.BookExists(key);
        }

        [EnableQuery]
        public IQueryable<Book> Get()
        {
            return Core.GetBooks();
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }
    }
}