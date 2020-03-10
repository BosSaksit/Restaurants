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

        [HttpGet("{data}")]
        public ActionResult<Order> GetDataOrderBydata(string data)
        {
            return dataOrder.FirstOrDefault(it => it.TableNumber == data.ToString());
        }
        [HttpGet("{data}")]
        public ActionResult<IEnumerable<Order>> GetOrderbyTable(string data)
        {
            return dataOrder.ToList().FindAll(it => it.TableNumber == data);
        }



        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetStatusOrder()
        {

            return dataOrder.ToList().FindAll(it => it.OrderStatus == null);

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
                DiscountPersen = orderData.DiscountPersen,
                DiscountBath = orderData.DiscountBath,
                MoneyDiscount = orderData.MoneyDiscount,
                MoneyDiscountTotal = orderData.MoneyDiscountTotal,
                OrderDate = DateTime.Now.ToString(),
                OrderStatus = orderData.OrderStatus,
                OrderStatusFood = orderData.OrderStatusFood,
                OrderStatusDrink = orderData.OrderStatusDrink,
                OrderStatusTotal = orderData.OrderStatusTotal,
                OrderStatusPayment = orderData.OrderStatusPayment,
                OrderReceived = orderData.OrderReceived,
                OrderFoodType = orderData.OrderFoodType

            };
            dataOrder.Add(order);
            return orderData;
        }
        [HttpPut("{idbill}")]
        public Order EditDataOrdernoDrink(string idbill, [FromBody] Order orderData)
        {
            var getBill = dataOrder.FirstOrDefault(it => it.BillId == idbill.ToString());
            var getFoodlist = getBill.FoodOrder.ToList();
            // var getfood = getFoodlist.FirstOrDefault(it => it.FoodId == getFoodlist.ToString());
            // var getFood = getFoodlist.FirstOrDefault(it => it.FoodId == idfood.ToString());

            var order = new Order
            {
                BillId = idbill.ToString(),
                OrderId = idbill.ToString(),
                TableNumber = getBill.TableNumber,
                FoodOrder = orderData.FoodOrder,
                AmountCustomer = getBill.AmountCustomer,
                TotalMoneyOrder = orderData.TotalMoneyOrder,
                MoneyReceived = getBill.MoneyReceived,
                MoneyCommute = getBill.MoneyCommute,
                DiscountPersen = getBill.DiscountPersen,
                DiscountBath = getBill.DiscountBath,
                MoneyDiscount = getBill.MoneyDiscount,
                MoneyDiscountTotal = getBill.MoneyDiscountTotal,
                OrderDate = getBill.OrderDate,
                OrderStatus = getBill.OrderStatus,
                OrderStatusFood = "",
                OrderStatusDrink = getBill.OrderStatusDrink,
                OrderStatusTotal = "",
                OrderStatusPayment = getBill.OrderStatusPayment,
                OrderReceived = getBill.OrderReceived,
                OrderFoodType = orderData.OrderFoodType
            };
            dataOrder.Remove(getBill);
            dataOrder.Add(order);
            return order;
        }

        [HttpPut("{idbill}")]
        public Order EditDataOrdernofood(string idbill, [FromBody] Order orderData)
        {
            var getBill = dataOrder.FirstOrDefault(it => it.BillId == idbill.ToString());
            var getFoodlist = getBill.FoodOrder.ToList();
            // var getfood = getFoodlist.FirstOrDefault(it => it.FoodId == getFoodlist.ToString());
            // var getFood = getFoodlist.FirstOrDefault(it => it.FoodId == idfood.ToString());

            var order = new Order
            {
                BillId = idbill.ToString(),
                OrderId = idbill.ToString(),
                TableNumber = getBill.TableNumber,
                FoodOrder = orderData.FoodOrder,
                AmountCustomer = getBill.AmountCustomer,
                TotalMoneyOrder = orderData.TotalMoneyOrder,
                MoneyReceived = getBill.MoneyReceived,
                MoneyCommute = getBill.MoneyCommute,
                DiscountPersen = getBill.DiscountPersen,
                DiscountBath = getBill.DiscountBath,
                MoneyDiscount = getBill.MoneyDiscount,
                MoneyDiscountTotal = getBill.MoneyDiscountTotal,
                OrderDate = getBill.OrderDate,
                OrderStatus = getBill.OrderStatus,
                OrderStatusFood = getBill.OrderStatusFood,
                OrderStatusDrink = "",
                OrderStatusTotal = "",
                OrderStatusPayment = getBill.OrderStatusPayment,
                OrderReceived = getBill.OrderReceived,
                OrderFoodType = orderData.OrderFoodType
            };
            dataOrder.Remove(getBill);
            dataOrder.Add(order);
            return order;
        }


        [HttpPut("{idbill}")]
        public Order EditDataOrder(string idbill, [FromBody] Order orderData)
        {
            var getBill = dataOrder.FirstOrDefault(it => it.BillId == idbill.ToString());
            var getFoodlist = getBill.FoodOrder.ToList();
            // var getfood = getFoodlist.FirstOrDefault(it => it.FoodId == getFoodlist.ToString());
            // var getFood = getFoodlist.FirstOrDefault(it => it.FoodId == idfood.ToString());

            var order = new Order
            {
                BillId = idbill.ToString(),
                OrderId = idbill.ToString(),
                TableNumber = getBill.TableNumber,
                FoodOrder = orderData.FoodOrder,
                AmountCustomer = getBill.AmountCustomer,
                TotalMoneyOrder = orderData.TotalMoneyOrder,
                MoneyReceived = getBill.MoneyReceived,
                MoneyCommute = getBill.MoneyCommute,
                DiscountPersen = getBill.DiscountPersen,
                DiscountBath = getBill.DiscountBath,
                MoneyDiscount = getBill.MoneyDiscount,
                MoneyDiscountTotal = getBill.MoneyDiscountTotal,
                OrderDate = getBill.OrderDate,
                OrderStatus = getBill.OrderStatus,
                OrderStatusFood = "",
                OrderStatusDrink = "",
                OrderStatusTotal = "",
                OrderStatusPayment = getBill.OrderStatusPayment,
                OrderReceived = getBill.OrderReceived,
                OrderFoodType = orderData.OrderFoodType
            };
            dataOrder.Remove(getBill);
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
                TotalMoneyOrder = orderData.TotalMoneyOrder,
                MoneyReceived = orderData.MoneyReceived,
                MoneyCommute = orderData.MoneyCommute,
                DiscountPersen = orderData.DiscountPersen,
                DiscountBath = orderData.DiscountBath,
                MoneyDiscount = orderData.MoneyDiscount,
                MoneyDiscountTotal = orderData.MoneyDiscountTotal,
                OrderDate = getBill.OrderDate,
                BillTime = DateTime.Now.ToString(),
                OrderStatus = "ชำระเงินแล้ว",
                OrderStatusFood = "เสริฟแล้ว",
                OrderStatusDrink = "เสริฟแล้ว",
                OrderStatusTotal = getBill.OrderStatusTotal,
                OrderStatusPayment = orderData.OrderStatusPayment,
                OrderReceived = orderData.OrderReceived,
                OrderFoodType = orderData.OrderFoodType
            };
            dataOrder.Remove(getBill);
            dataOrder.Add(order);
            return order;
        }

        [HttpGet("{idbill}/{idfood}")]
        public Order CookSendOrder(string idbill, string idfood)
        {
            Order order = new Order();
            var getBill = dataOrder.FirstOrDefault(it => it.BillId == idbill.ToString());
            var getFoodlist = getBill.FoodOrder.ToList();
            var getFood = getFoodlist.FirstOrDefault(it => it.FoodNumber == idfood.ToString());

            var food = new Food
            {
                FoodId = getFood.FoodId,
                FoodName = getFood.FoodName,
                FoodAmount = getFood.FoodAmount,
                FoodCost = getFood.FoodCost,
                FoodCostTotal = getFood.FoodCostTotal,
                FoodProfit = getFood.FoodProfit,
                FoodProfitTotal = getFood.FoodProfitTotal,
                FoodPrice = getFood.FoodPrice,
                FoodPriceTotal = getFood.FoodPriceTotal,
                FoodType = getFood.FoodType,
                FoodStatus = "เสริฟแล้ว",
                FoodNumber = getFood.FoodNumber,
            };
            getFoodlist.Remove(getFood);
            getFoodlist.Add(food);

            var getTypeFood = getFoodlist.FindAll(it => it.FoodType == "อาหาร").ToArray();
            var getMacthData = getFoodlist.FindAll(it => it.FoodStatus == "เสริฟแล้ว" && it.FoodType == "อาหาร").ToArray();

            // Console.WriteLine("ssssssssssssssssssssssssssssssssssssssssss");
            // Console.WriteLine(getTypeFood.Length.ToString());
            // Console.WriteLine(getMacthData.Length.ToString());

            if (getTypeFood.Length == getMacthData.Length)

            {

                order = new Order
                {
                    BillId = idbill.ToString(),
                    OrderId = idbill.ToString(),
                    TableNumber = getBill.TableNumber,
                    FoodOrder = getFoodlist.ToList(),
                    AmountCustomer = getBill.AmountCustomer,
                    TotalMoneyOrder = getBill.TotalMoneyOrder,
                    MoneyReceived = getBill.MoneyReceived,
                    MoneyCommute = getBill.MoneyCommute,
                    DiscountPersen = getBill.DiscountPersen,
                    DiscountBath = getBill.DiscountBath,
                    MoneyDiscount = getBill.MoneyDiscount,
                    MoneyDiscountTotal = getBill.MoneyDiscountTotal,
                    OrderDate = getBill.OrderDate,
                    OrderStatus = getBill.OrderStatus,
                    OrderStatusTotal = "เสริฟแล้ว",
                    OrderStatusFood = "เสริฟแล้ว",
                    OrderStatusDrink = getBill.OrderStatusDrink,
                    OrderStatusPayment = getBill.OrderStatusPayment,
                    OrderReceived = getBill.OrderReceived
                    ,
                    OrderFoodType = getBill.OrderFoodType

                };
                dataOrder.Remove(getBill);
                dataOrder.Add(order);

            }
            else
            {
                order = new Order
                {
                    BillId = idbill.ToString(),
                    OrderId = idbill.ToString(),
                    TableNumber = getBill.TableNumber,
                    FoodOrder = getFoodlist.ToList(),
                    AmountCustomer = getBill.AmountCustomer,
                    TotalMoneyOrder = getBill.TotalMoneyOrder,
                    MoneyReceived = getBill.MoneyReceived,
                    MoneyCommute = getBill.MoneyCommute,
                    DiscountPersen = getBill.DiscountPersen,
                    DiscountBath = getBill.DiscountBath,
                    MoneyDiscount = getBill.MoneyDiscount,
                    MoneyDiscountTotal = getBill.MoneyDiscountTotal,
                    OrderDate = getBill.OrderDate,
                    OrderStatus = getBill.OrderStatus,
                    OrderStatusTotal = getBill.OrderStatusTotal,
                    OrderStatusFood = "",
                    OrderStatusDrink = getBill.OrderStatusDrink,
                    OrderStatusPayment = getBill.OrderStatusPayment,
                    OrderReceived = getBill.OrderReceived,
                    OrderFoodType = getBill.OrderFoodType
                };
                dataOrder.Remove(getBill);
                dataOrder.Add(order);
                return order;
            }

            return order;
        }

        [HttpGet("{idbill}/{idfood}")]
        public Order DrinkSendOrder(string idbill, string idfood)
        {
            Order order = new Order();
            var getBill = dataOrder.FirstOrDefault(it => it.BillId == idbill.ToString());
            var getFoodlist = getBill.FoodOrder.ToList();

            var getFood = getFoodlist.FirstOrDefault(it => it.FoodNumber == idfood.ToString());

            var food = new Food
            {
                FoodId = getFood.FoodId,
                FoodName = getFood.FoodName,
                FoodAmount = getFood.FoodAmount,
                FoodCost = getFood.FoodCost,
                FoodCostTotal = getFood.FoodCostTotal,
                FoodProfit = getFood.FoodProfit,
                FoodProfitTotal = getFood.FoodProfitTotal,
                FoodPrice = getFood.FoodPrice,
                FoodPriceTotal = getFood.FoodPriceTotal,
                FoodType = getFood.FoodType,
                FoodStatus = "เสริฟแล้ว",
                FoodNumber = getFood.FoodNumber,
            };
            getFoodlist.Remove(getFood);
            getFoodlist.Add(food);

            var getTypeDrink = getFoodlist.FindAll(it => it.FoodType == "เครื่องดื่ม").ToArray();
            var getMacthData = getFoodlist.FindAll(it => it.FoodStatus == "เสริฟแล้ว" && it.FoodType == "เครื่องดื่ม").ToArray();

            // Console.WriteLine("ssssssssssssssssssssssssssssssssssssssssss");
            // Console.WriteLine(getTypeDrink.Length.ToString());
            // Console.WriteLine(getMacthData.Length.ToString());

            if (getTypeDrink.Length == getMacthData.Length)

            {

                order = new Order
                {
                    BillId = idbill.ToString(),
                    OrderId = idbill.ToString(),
                    TableNumber = getBill.TableNumber,
                    FoodOrder = getFoodlist.ToList(),
                    AmountCustomer = getBill.AmountCustomer,
                    TotalMoneyOrder = getBill.TotalMoneyOrder,
                    MoneyReceived = getBill.MoneyReceived,
                    MoneyCommute = getBill.MoneyCommute,
                    DiscountPersen = getBill.DiscountPersen,
                    DiscountBath = getBill.DiscountBath,
                    MoneyDiscount = getBill.MoneyDiscount,
                    MoneyDiscountTotal = getBill.MoneyDiscountTotal,
                    OrderDate = getBill.OrderDate,
                    OrderStatus = getBill.OrderStatus,
                    OrderStatusTotal = getBill.OrderStatusTotal,
                    OrderStatusFood = getBill.OrderStatusFood,
                    OrderStatusDrink = "เสริฟแล้ว",
                    OrderStatusPayment = getBill.OrderStatusPayment,
                    OrderReceived = getBill.OrderReceived,
                    OrderFoodType = getBill.OrderFoodType
                };
                dataOrder.Remove(getBill);
                dataOrder.Add(order);

            }
            else
            {
                order = new Order
                {
                    BillId = idbill.ToString(),
                    OrderId = idbill.ToString(),
                    TableNumber = getBill.TableNumber,
                    FoodOrder = getFoodlist.ToList(),
                    AmountCustomer = getBill.AmountCustomer,
                    TotalMoneyOrder = getBill.TotalMoneyOrder,
                    MoneyReceived = getBill.MoneyReceived,
                    MoneyCommute = getBill.MoneyCommute,
                    DiscountPersen = getBill.DiscountPersen,
                    DiscountBath = getBill.DiscountBath,
                    MoneyDiscount = getBill.MoneyDiscount,
                    MoneyDiscountTotal = getBill.MoneyDiscountTotal,
                    OrderDate = getBill.OrderDate,
                    OrderStatus = getBill.OrderStatus,
                    OrderStatusTotal = getBill.OrderStatusTotal,
                    OrderStatusFood = getBill.OrderStatusFood,
                    OrderStatusDrink = getBill.OrderStatusDrink,
                    OrderStatusPayment = getBill.OrderStatusPayment,
                    OrderReceived = getBill.OrderReceived,
                    OrderFoodType = getBill.OrderFoodType
                };
                dataOrder.Remove(getBill);
                dataOrder.Add(order);
                return order;
            }

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
            var getFood = getFoodlist.FirstOrDefault(it => it.FoodNumber == idfood);
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


        [HttpGet]
        public void ClearOff()
        {
            dataOrder.Clear();
        }


//    [HttpGet("{id}")]
//         public ActionResult<Order> GetDataOrderFoodOrderById(string id )
//         {
          
//                   var getBill = dataOrder.FirstOrDefault(it => it.BillId == idbill.ToString());
//                   var getFoodlist = getBill.FoodOrder.ToList();
//                    var food = new Food
//                   {
//                      };

    }
}
