using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;
using Talent.Hub.DataService.Models;

namespace Talent.Hub.DataService
{

    public class ApplicationDbContext : DbContext
    {
      public ApplicationDbContext() : base("name=localConn")
      {

      }

      public DbSet<User> Users { get; set; }
    }

}
