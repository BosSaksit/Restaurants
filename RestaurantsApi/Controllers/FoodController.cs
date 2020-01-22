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
            new Food{FoodId = "F0001",FoodName="ข้าวผัด",FoodAmount=1,FoodCost=25,FoodPrice=50,FoodProfit=25,FoodPriceTotal=50,FoodType="อาหาร",FoodStatus=""},
            new Food{FoodId = "F0002",FoodName="ไก่ทอด",FoodAmount=1,FoodCost=25,FoodPrice=50,FoodProfit=25,FoodPriceTotal=50,FoodType="อาหาร",FoodStatus=""},
            new Food{FoodId = "F0003",FoodName="ลาบหมู",FoodAmount=1,FoodCost=25,FoodPrice=50,FoodProfit=25,FoodPriceTotal=50,FoodType="อาหาร",FoodStatus=""},
            new Food{FoodId = "F0004",FoodName="หมูกรอบ",FoodAmount=1,FoodCost=25,FoodPrice=50,FoodProfit=25,FoodPriceTotal=50,FoodType="อาหาร",FoodStatus=""},
            new Food{FoodId = "F0005",FoodName="โค้ก",FoodAmount=1,FoodCost=25,FoodPrice=50,FoodProfit=25,FoodPriceTotal=50,FoodType="เครื่องดื่ม",FoodStatus=""},
            new Food{FoodId = "F0006",FoodName="ส้มตำ",FoodAmount=1,FoodCost=25,FoodPrice=50,FoodProfit=25,FoodPriceTotal=50,FoodType="อาหาร",FoodStatus=""},
            new Food{FoodId = "F0007",FoodName="เบียร์ช้าง",FoodAmount=1,FoodCost=25,FoodPrice=50,FoodProfit=25,FoodPriceTotal=50,FoodType="เครื่องดื่ม",FoodStatus=""},

        };


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
                FoodCost = foodData.FoodCost,
                FoodPrice = foodData.FoodPrice,
                FoodType = foodData.FoodType
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
                FoodCost = foodData.FoodCost,
                FoodPrice = foodData.FoodPrice,
                FoodType = foodData.FoodType

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

