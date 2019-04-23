using System;
using System.Collections.Generic;
using System.Text;

namespace Talent.Hub.Core.Dto.User
{
  public class UserDto
  {
    public Guid Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string UserName { get; set; }

    public string Password { get; set; }
  }
}
