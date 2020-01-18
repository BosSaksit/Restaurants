using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestaurantsApi.Models;

namespace RestaurantsApi.Controllers {
    [Route ("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase {

        public static List<Food> dataFood = new List<Food> {
            new Food{FoodId = "F0001",FoodName="ข้าวผัด",FoodAmount=1,FoodCost=25,FoodPrice=50,FoodProfit=25,FoodPriceTotal=50,FoodType="อาหาร"},
            new Food{FoodId = "F0002",FoodName="เบียร์ช้าง",FoodAmount=1,FoodCost=25,FoodPrice=50,FoodProfit=50,FoodPriceTotal=50,FoodType="เครื่องดื่ม"},
      

        };

        public static List<User> dataUser = new List<User> {
            new User { UserId = "U0001", UserName = "ทองดี", UserType = "พนักงานเสริฟ", UsernameLog = "test01", UserpassLog = "123" },

        };

        public static List<Order> dataOrder = new List<Order> {
            new Order { BillId = "B0001", OrderId = "O0001", TableNumber = "A1", FoodOrder = dataFood.ToArray (), AmountCustomer = 2, TotalMoneyOrder = 50, MoneyReceived = 100, MoneyCommute = 50, OrderDate = "2019-12-14T16:05:28.607+07:00", OrderReceived = dataUser.ToArray()},
            new Order { BillId = "B0002", OrderId = "O0001", TableNumber = "A1", FoodOrder = dataFood.ToArray (), AmountCustomer = 2, TotalMoneyOrder = 50, MoneyReceived = 100, MoneyCommute = 50, OrderDate = "2019-12-14T16:05:28.607+07:00", OrderReceived = dataUser.ToArray()}


        };

        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetDataOrder () {
            return dataOrder.ToList ();
        }

        [HttpGet("{id}")]
        public ActionResult<Order> GetDataOrderById(string id)
        {
            return dataOrder.FirstOrDefault(it => it.BillId == id.ToString());
        }

        [HttpPost]
        public Order AddDataOrder([FromBody] Order orderData)
        {
            var idBill = Guid.NewGuid().ToString();
            var order = new Order
            {
                BillId = idBill.ToString(),
                OrderId = idBill.ToString(),
                TableNumber = orderData.TableNumber,
                FoodOrder = orderData.FoodOrder,
                AmountCustomer = orderData.AmountCustomer,
                TotalMoneyOrder = orderData.TotalMoneyOrder,
                MoneyReceived = orderData.MoneyReceived,
                MoneyCommute = orderData.MoneyCommute,
                OrderDate = orderData.OrderDate,
                OrderReceived = orderData.OrderReceived
            };
            dataOrder.Add(order);
            return orderData;
        }

        [HttpPut("{id}")]
        public Order EditDataOrder(string id, [FromBody] Order orderData)
        {
            var _id = dataOrder.FirstOrDefault(it => it.BillId == id.ToString());
            var order = new Order
            {
                BillId = id.ToString(),
                OrderId = orderData.OrderId,
                TableNumber = orderData.TableNumber,
                FoodOrder = orderData.FoodOrder,
                AmountCustomer = orderData.AmountCustomer,
                TotalMoneyOrder = orderData.TotalMoneyOrder,
                MoneyReceived = orderData.MoneyReceived,
                MoneyCommute = orderData.MoneyCommute,
                OrderDate = orderData.OrderDate,
                OrderReceived = orderData.OrderReceived

            };
            dataOrder.Remove(_id);
            dataOrder.Add(order);
            return order;
        }

        // [HttpDelete("{id}")]
        // public void DeleteFood(string id)
        // {
        //     var d = dataFood.FirstOrDefault(it => it.FoodId == id.ToString());
        //     dataFood.Remove(d);            
        // }
    }
}