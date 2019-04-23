using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Talent.Hub.Core.Dto.User;
using Talent.Hub.DataService.Interfaces;
using System.Security.Cryptography;
using Talent.Hub.DataService.Models;

namespace Talent.Hub.DataService.DataAccess
{
  public class UserCommandModel : IUser
  {

    private readonly ApplicationDbContext _context = new ApplicationDbContext();
    public async Task<UserDto> CreateUser(UserDto user)
    {
      var model = new User();
      model.Id = Guid.NewGuid();
      model.FirstName = user.FirstName;
      model.LastName = user.LastName;
      model.UserName = user.UserName;
      model.Password = Encrypt(user.Password);
      _context.Users.Add(model);

      try
      {
        await _context.SaveChangesAsync();
      }
      catch
      {
        throw;
      }
      return user;
    }

    public static string Encrypt(string value)
    {
      using (MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider())
      {
        UTF8Encoding utf8 = new UTF8Encoding();
        byte[] data = md5.ComputeHash(utf8.GetBytes(value));
        return Convert.ToBase64String(data);
      }
    }
  }
}
