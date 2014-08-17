using System.Linq;
using System.Web.Http;
using WebApiService.Business;
using WebApiService.Entity;

namespace WebApiService.Controllers
{
    public class BookController : ApiController
    {
        // GET api/book
        [Authorize]
        public IQueryable<Book> Get()
        {
            return Core.GetBooks();
        }

        // GET api/book/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/book
        public void Post([FromBody]string value)
        {
        }

        // PUT api/book/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/book/5
        public void Delete(int id)
        {
        }
    }
}
