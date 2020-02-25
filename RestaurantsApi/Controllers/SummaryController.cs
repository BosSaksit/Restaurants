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
    public class SummaryController : ControllerBase
    {

        public static List<Summary> dataSummary = new List<Summary>
        {


        };

        [HttpGet]
        public ActionResult<IEnumerable<Summary>> GetDataSummary()
        {
            return dataSummary.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Summary> GetDataSummaryById(string id)
        {
            return dataSummary.FirstOrDefault(it => it.BillId == id.ToString());

        }

        [HttpGet("{day}/{month}")]
        public ActionResult<IEnumerable<Summary>> GetDataSummaryGetDay(string day, string month)
        {

            return dataSummary.ToList().FindAll(it => (DateTime.Parse(it.OrderDate).Day.ToString() == day) && (DateTime.Parse(it.OrderDate).Month.ToString() == month));

        }


        // [HttpGet("{month}")]
        // public ActionResult<IEnumerable<Summary>> GetDataSummaryGetMonth(string month)
        // {

        //     return dataSummary.ToList().FindAll(it => DateTime.Parse(it.OrderDate).Month.ToString() == month);

        // }


        [HttpPost]
        public Summary AddDataSummary([FromBody] Summary summaryData)
        {
            // var summaryId = Guid.NewGuid().ToString();

            var summary = new Summary
            {
                BillId = summaryData.BillId,
                OrderId = summaryData.OrderId,
                TableNumber = summaryData.TableNumber,
                FoodOrder = summaryData.FoodOrder,
                AmountCustomer = summaryData.AmountCustomer,
                TotalMoneyOrder = summaryData.TotalMoneyOrder,
                MoneyReceived = summaryData.MoneyReceived,
                MoneyCommute = summaryData.MoneyCommute,
                DiscountPersen = summaryData.DiscountPersen,
                DiscountBath = summaryData.DiscountBath,
                MoneyDiscount = summaryData.MoneyDiscount,
                MoneyDiscountTotal = summaryData.MoneyDiscountTotal,
                OrderDate = DateTime.Now.ToString(),
                BillTime = summaryData.BillTime,
                OrderStatus = summaryData.OrderStatus,
                OrderStatusFood = summaryData.OrderStatusFood,
                OrderStatusDrink = summaryData.OrderStatusDrink,
                OrderStatusTotal = summaryData.OrderStatusTotal,
                OrderStatusPayment = summaryData.OrderStatusPayment,
                OrderReceived = summaryData.OrderReceived

            };
            dataSummary.Add(summary);
            return summaryData;
        }

    }
}
