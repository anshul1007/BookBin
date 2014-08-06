using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiService.Entity
{
    public enum UserExist
    {
        No = 0,
        Yes = 1,
        Error = 2
    }

    public enum Role
    {
        Admin = 1,
        Student = 2,
        Guest = 3
    }

    public enum Category
    {
        Sell = 1,
        Buy = 2
    }
}