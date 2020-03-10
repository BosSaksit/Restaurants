
using System;
using System.Collections.Generic;
namespace RestaurantsApi.Models
{
    public class Order
    {
        public string BillId { get; set; }
        public string OrderId { get; set; }
        public string TableNumber { get; set; }
        public List<Food> FoodOrder { get; set; }
        public int AmountCustomer { get; set; }
        public int MoneyReceived { get; set; }
        public int TotalMoneyOrder { get; set; }
        public int MoneyCommute { get; set; }
        public int DiscountPersen { get; set; }
        public int DiscountBath { get; set; }
        public int MoneyDiscount { get; set; }
        public int MoneyDiscountTotal { get; set; }
        public string OrderDate { get; set; }
        public string BillTime { get; set; }
        public string OrderStatus { get; set; }
        public string OrderStatusTotal { get; set; }
        public string OrderStatusPayment { get; set; }
        public string OrderStatusFood { get; set; }
        public string OrderStatusDrink { get; set; }
        public string OrderFoodType {get;set;}
        public List<User> OrderReceived { get; set; }

    }
}