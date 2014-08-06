using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiService.DAL
{
    public class DefaultDbInitializer : DropCreateDatabaseIfModelChanges<DefaultDbContext>
    {
        protected override void Seed(DefaultDbContext context)
        {
            //var subjects = new List<Subject>
            //{
            //    new Subject { Name = "Math", Level = 1 },
            //    new Subject { Name = "Science", Level = 1 }
            //};
            //subjects.ForEach(s => context.Subjects.Add(s));
        }
    }
}
