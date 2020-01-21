namespace RestaurantsApi.Models
{
    public class Food
    {
        public string FoodId { get; set; }
        public string FoodName { get; set; }
        public int FoodAmount { get; set; }
        public int FoodCost { get; set; }
        public int FoodPrice { get; set; }
        public int FoodProfit { get; set; }
        public int FoodPriceTotal { get; set; }
        public string FoodType { get; set; }
         public string FoodStatus { get; set; }

    }
}