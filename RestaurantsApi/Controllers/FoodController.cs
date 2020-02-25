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
    public class FoodController : ControllerBase
    {

        public static List<Food> dataFood = new List<Food>{
            new Food{FoodId = "F0001",FoodName="ข้าวผัด",FoodAmount=1,FoodCost=25,FoodCostTotal=25,FoodProfit=25,FoodProfitTotal=25,FoodPrice=50,FoodPriceTotal=50,FoodType="อาหาร",FoodStatus=""},
            new Food{FoodId = "F0002",FoodName="ไก่ทอด",FoodAmount=1,FoodCost=25,FoodCostTotal=25,FoodProfit=25,FoodProfitTotal=25,FoodPrice=50,FoodPriceTotal=50,FoodType="อาหาร",FoodStatus=""},
            new Food{FoodId = "F0003",FoodName="ลาบหมู",FoodAmount=1,FoodCost=25,FoodCostTotal=25,FoodProfit=25,FoodProfitTotal=25,FoodPrice=50,FoodPriceTotal=50,FoodType="อาหาร",FoodStatus=""},
            new Food{FoodId = "F0004",FoodName="หมูกรอบ",FoodAmount=1,FoodCost=25,FoodCostTotal=25,FoodProfit=25,FoodProfitTotal=25,FoodPrice=50,FoodPriceTotal=50,FoodType="อาหาร",FoodStatus=""},
            new Food{FoodId = "F0005",FoodName="โค้ก",FoodAmount=1,FoodCost=25,FoodCostTotal=25,FoodProfit=25,FoodProfitTotal=25,FoodPrice=50,FoodPriceTotal=50,FoodType="เครื่องดื่ม",FoodStatus=""},
            new Food{FoodId = "F0006",FoodName="ส้มตำ",FoodAmount=1,FoodCost=25,FoodCostTotal=25,FoodProfit=25,FoodProfitTotal=25,FoodPrice=50,FoodPriceTotal=50,FoodType="อาหาร",FoodStatus=""},
            new Food{FoodId = "F0007",FoodName="เบียร์ช้าง",FoodAmount=1,FoodCost=25,FoodCostTotal=25,FoodProfit=25,FoodProfitTotal=25,FoodPrice=50,FoodPriceTotal=50,FoodType="เครื่องดื่ม",FoodStatus=""},
            new Food{FoodId = "F0008",FoodName="เบียร์สิง",FoodAmount=1,FoodCost=25,FoodCostTotal=25,FoodProfit=25,FoodProfitTotal=25,FoodPrice=50,FoodPriceTotal=50,FoodType="เครื่องดื่ม",FoodStatus=""},
            new Food{FoodId = "F0009",FoodName="เบียร์ลีโฮ",FoodAmount=1,FoodCost=25,FoodCostTotal=25,FoodProfit=25,FoodProfitTotal=25,FoodPrice=50,FoodPriceTotal=50,FoodType="เครื่องดื่ม",FoodStatus=""},
            new Food{FoodId = "F00010",FoodName="เบียร์ลาว",FoodAmount=1,FoodCost=25,FoodCostTotal=25,FoodProfit=25,FoodProfitTotal=25,FoodPrice=50,FoodPriceTotal=50,FoodType="เครื่องดื่ม",FoodStatus=""},


        };

        [HttpGet("{Type}")]
        public ActionResult<IEnumerable<Food>> FilterTypeMenu(string Type)
        {
            for (var i = 0; i < dataFood.ToArray().Length; i++)
            {
                if (Type == "อาหาร")
                {
                    return dataFood.ToList().FindAll(it => it.FoodType == Type);

                }
                else if (Type == "เครื่องดื่ม")
                {
                    return dataFood.ToList().FindAll(it => it.FoodType == Type);

                }

            }
            return dataFood.ToList();


        }

        

        [HttpGet]
        public ActionResult<IEnumerable<Food>> GetDataFood()
        {
            return dataFood.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Food> GetDataFoodById(string id)
        {
            return dataFood.FirstOrDefault(it => it.FoodId == id.ToString());
        }

        [HttpPost]
        public Food AddDataFood([FromBody] Food foodData)
        {
            var food = new Food
            {
                FoodId = foodData.FoodId,
                FoodName = foodData.FoodName,
                FoodAmount = foodData.FoodAmount,
                FoodCost = foodData.FoodCost,
                FoodCostTotal = foodData.FoodCostTotal,
                FoodProfit = foodData.FoodProfit,
                FoodProfitTotal = foodData.FoodProfitTotal,
                FoodPrice = foodData.FoodPrice,
                FoodPriceTotal = foodData.FoodPriceTotal,
                FoodType = foodData.FoodType,
                FoodStatus = "",

            };
            dataFood.Add(food);
            return foodData;
        }

        [HttpPut("{id}")]
        public Food EditDataFood(string id, [FromBody] Food foodData)
        {
            var _id = dataFood.FirstOrDefault(it => it.FoodId == id.ToString());
            var food = new Food
            {
                FoodId = foodData.FoodId,
                FoodName = foodData.FoodName,
                FoodAmount = foodData.FoodAmount,
                FoodCost = foodData.FoodCost,
                FoodCostTotal = foodData.FoodCostTotal,
                FoodProfit = foodData.FoodProfit,
                FoodProfitTotal = foodData.FoodProfitTotal,
                FoodPrice = foodData.FoodPrice,
                FoodPriceTotal = foodData.FoodPriceTotal,
                FoodType = foodData.FoodType,
                FoodStatus = "",


            };
            dataFood.Remove(_id);
            dataFood.Add(food);
            return food;
        }

        [HttpDelete("{id}")]
        public void DeleteFood(string id)
        {
            var d = dataFood.FirstOrDefault(it => it.FoodId == id.ToString());
            dataFood.Remove(d);
        }
    }
}

