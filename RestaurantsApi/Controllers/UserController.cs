using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestaurantsApi.Models;

namespace RestaurantsApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        public static List<User> dataUser = new List<User>{
            new User{UserId = "U0001",UserName="ทองดี",UserType="พนักงานเสริฟ",UsernameLog="test01",UserpassLog="123"},
            new User{UserId = "U0002",UserName="สมพร",UserType="บาร์น้ำ",UsernameLog="test02",UserpassLog="123"},
            new User{UserId = "U0003",UserName="ขาว",UserType="แคชเชียร์",UsernameLog="test03",UserpassLog="123"},
            new User{UserId = "U0004",UserName="แดง",UserType="เชฟ",UsernameLog="test04",UserpassLog="123"},
            new User{UserId = "U0005",UserName="ดำ",UserType="ผู้จัดการร้าน",UsernameLog="test05",UserpassLog="123"}

        };

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetDataUser()
        {
            return dataUser.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetDataUserById(string id)
        {
            return dataUser.FirstOrDefault(it => it.UserId == id.ToString());
        }

    

        [HttpGet("{user}")]
        public ActionResult<User> login(string user)
        {
            return dataUser.FirstOrDefault(it => it.UsernameLog == user.ToString());

        }

        [HttpPost]
        public User AddDataUser([FromBody] User userData)
        {
            var user = new User
            {
                UserId = userData.UserId,
                UserName = userData.UserName,
                UserType = userData.UserType,
                UsernameLog = userData.UsernameLog,
                UserpassLog = userData.UserpassLog
            };
            dataUser.Add(user);
            return userData;
        }

        [HttpPut("{id}")]
        public User EditDataUser(string id, [FromBody] User userData)
        {
            var _id = dataUser.FirstOrDefault(it => it.UserId == id.ToString());
            var user = new User
            {
                UserId = userData.UserId,
                UserName = userData.UserName,
                UserType = userData.UserType,
                UsernameLog = userData.UsernameLog,
                UserpassLog = userData.UserpassLog
            };
            dataUser.Remove(_id);
            dataUser.Add(user);
            return userData;
        }

        [HttpDelete("{id}")]
        public void DeleteUser(string id)
        {
            var d = dataUser.FirstOrDefault(it => it.UserId == id.ToString());
            dataUser.Remove(d);
        }
    }
}

