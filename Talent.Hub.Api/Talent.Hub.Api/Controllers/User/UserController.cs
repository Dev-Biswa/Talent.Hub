using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Talent.Hub.Core.Dto.User;
using Talent.Hub.DataService.DataAccess;
using Talent.Hub.DataService.Interfaces;

namespace Talent.Hub.Api.Controllers.User
{
    public class UserController : ApiController
    {

    private readonly IUser _userService = new UserCommandModel();


    [HttpPost]
    [Route("api/User/CreateUser")]
    public async Task CreateUserAsync([FromBody]UserDto user)
    {
      if (ModelState.IsValid)
      {
        await _userService.CreateUser(user);
      }
    }
  }
}
