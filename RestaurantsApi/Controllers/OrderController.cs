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
    public class OrderController : ControllerBase
    {

        public static List<Food> dataFood = new List<Food>
        {


        };

        public static List<User> dataUser = new List<User>
        {
            // new User { UserId = "U0001", UserName = "ทองดี", UserType = "พนักงานเสริฟ", UsernameLog = "test01", UserpassLog = "123" },

        };

        public static List<Order> dataOrder = new List<Order>
        {
            // new Order { BillId = "B0001", OrderId = "O0001", TableNumber = "A1", FoodOrder = dataFood.ToArray (), AmountCustomer = 2, TotalMoneyOrder = 0, MoneyReceived = 0, MoneyCommute = 0, OrderDate = "05/29/2015", OrderReceived = dataUser.ToArray(), OrderStatus="ยังไม่ชำระเงิน"},
        };

        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetDataOrder()
        {
            return dataOrder.ToList();
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
                OrderDate = DateTime.Now.ToString("MM/dd/yyyy"),
                OrderStatus = orderData.OrderStatus,
                OrderStatusPayment = orderData.OrderStatusPayment,
                OrderStatusFood = orderData.OrderStatusFood,
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
                OrderDate = DateTime.Now.ToString("MM/dd/yyyy"),
                OrderStatus = orderData.OrderStatus,
                OrderStatusPayment = orderData.OrderStatusPayment,
                OrderStatusFood = orderData.OrderStatusFood,
                OrderReceived = orderData.OrderReceived

            };
            dataOrder.Remove(_id);
            dataOrder.Add(order);
            return order;
        }

        [HttpPut("{id}")]
        public Order OrderPayment(string id, [FromBody] Order orderData)
        {
            var getBill = dataOrder.FirstOrDefault(it => it.BillId == id.ToString());
            var getFoodlist = getBill.FoodOrder.ToList();

            var order = new Order
            {
                BillId = id.ToString(),
                OrderId = id.ToString(),
                TableNumber = getBill.TableNumber,
                FoodOrder = getFoodlist.ToList(),
                AmountCustomer = getBill.AmountCustomer,
                TotalMoneyOrder = getBill.TotalMoneyOrder,
                MoneyReceived = orderData.MoneyReceived,
                MoneyCommute = orderData.MoneyCommute,
                OrderDate = DateTime.Now.ToString("MM/dd/yyyy"),
                OrderStatus = "ชำระเงินแล้ว",
                OrderStatusFood = "เสริฟแล้ว",
                OrderStatusPayment = orderData.OrderStatusPayment,
                OrderReceived = orderData.OrderReceived

            };
            dataOrder.Remove(getBill);
            dataOrder.Add(order);
            return order;
        }

        [HttpGet("{idbill}/{idfood}")]
        public Order CookSendOrder(string idbill, string idfood)
        {
            var getBill = dataOrder.FirstOrDefault(it => it.BillId == idbill.ToString());
            var getFoodlist = getBill.FoodOrder.ToList();
            var getFood = getFoodlist.FirstOrDefault(it => it.FoodId == idfood.ToString());

            var food = new Food
            {
                FoodId = getFood.FoodId,
                FoodName = getFood.FoodName,
                FoodAmount = getFood.FoodAmount,
                FoodCost = getFood.FoodCost,
                FoodPrice = getFood.FoodPrice,
                FoodProfit = getFood.FoodProfit,
                FoodPriceTotal = getFood.FoodPriceTotal,
                FoodType = getFood.FoodType,
                FoodStatus = "เสริฟแล้ว"
            };
            getFoodlist.Remove(getFood);
            getFoodlist.Add(food);


            var order = new Order
            {
                BillId = idbill.ToString(),
                OrderId = idbill.ToString(),
                TableNumber = getBill.TableNumber,
                FoodOrder = getFoodlist.ToList(),
                AmountCustomer = getBill.AmountCustomer,
                TotalMoneyOrder = getBill.TotalMoneyOrder,
                MoneyReceived = getBill.MoneyReceived,
                MoneyCommute = getBill.MoneyCommute,
                OrderDate = DateTime.Now.ToString("MM/dd/yyyy"),
                OrderStatus = getBill.OrderStatus,
                OrderStatusPayment = getBill.OrderStatusPayment,
                OrderStatusFood = getBill.OrderStatusFood,
                OrderReceived = getBill.OrderReceived

            };
            dataOrder.Remove(getBill);
            dataOrder.Add(order);
            return order;
        }

        [HttpGet("{idbill}/{idfood}")]
        public Order DrinkSendOrder(string idbill, string idfood)
        {
            var getBill = dataOrder.FirstOrDefault(it => it.BillId == idbill.ToString());
            var getFoodlist = getBill.FoodOrder.ToList();
            var getFood = getFoodlist.FirstOrDefault(it => it.FoodId == idfood.ToString());

            var food = new Food
            {
                FoodId = getFood.FoodId,
                FoodName = getFood.FoodName,
                FoodAmount = getFood.FoodAmount,
                FoodCost = getFood.FoodCost,
                FoodPrice = getFood.FoodPrice,
                FoodProfit = getFood.FoodProfit,
                FoodPriceTotal = getFood.FoodPriceTotal,
                FoodType = getFood.FoodType,
                FoodStatus = "เสริฟแล้ว"
            };
            getFoodlist.Remove(getFood);
            getFoodlist.Add(food);


            var order = new Order
            {
                BillId = idbill.ToString(),
                OrderId = idbill.ToString(),
                TableNumber = getBill.TableNumber,
                FoodOrder = getFoodlist.ToList(),
                AmountCustomer = getBill.AmountCustomer,
                TotalMoneyOrder = getBill.TotalMoneyOrder,
                MoneyReceived = getBill.MoneyReceived,
                MoneyCommute = getBill.MoneyCommute,
                OrderDate = DateTime.Now.ToString("MM/dd/yyyy"),
                OrderStatus = getBill.OrderStatus,
                OrderStatusPayment = getBill.OrderStatusPayment,
                OrderStatusFood = getBill.OrderStatusFood,
                OrderReceived = getBill.OrderReceived

            };
            dataOrder.Remove(getBill);
            dataOrder.Add(order);
            return order;
        }

        [HttpDelete("{id}")]
        public void CancelOrder(string id)
        {
            var d = dataOrder.FirstOrDefault(it => it.BillId == id.ToString());
            dataOrder.Remove(d);

        }

        [HttpDelete("{idbill}/{idfood}")]
        public void CancelMenuList(string idbill, string idfood)
        {
            var getBill = dataOrder.FirstOrDefault(it => it.BillId == idbill);
            //var getindexBill = dataOrder.
            var getFoodlist = getBill.FoodOrder.ToList();
            var getFood = getFoodlist.FirstOrDefault(it => it.FoodId == idfood);
            dataOrder[0].FoodOrder.Remove(getFood);


            // var databill = dataOrder.FirstOrDefault(it => it.BillId == idbill.ToString());
            // var idb = dataOrder.FirstOrDefault(it => it.BillId == idbill.ToString()).FoodOrder.FirstOrDefault(item => item.FoodId == idfood.ToString());

            // var dataf = idb.FoodOrder.ToList();

            // Console.WriteLine("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"); 
            // Console.WriteLine(dataf[0].FoodId);

            // var idf = dataf.FirstOrDefault(it => it.FoodId == idfood.ToString());

            // Console.WriteLine("============================================================================="+idf.FoodId);
            // Console.WriteLine("A : "+dataf.Count);
            // dataOrder.FoodOrder.Remove(idf);
            // dataf.Remove(idf);
            // Console.WriteLine("B : "+dataf.Count);

        }
    }
}
