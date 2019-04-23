using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Talent.Hub.Core.Dto.User;

namespace Talent.Hub.DataService.Interfaces
{
  public interface IUser
  {
    Task<UserDto> CreateUser(UserDto user);
  }
}
