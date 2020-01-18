
namespace RestaurantsApi.Models
{
    public class Order
    {
        public string BillId { get; set; }
        public string OrderId { get; set; }
        public string TableNumber { get; set; }
        public Food[] FoodOrder { get; set; }
        public int AmountCustomer { get; set; }
        public int TotalMoneyOrder { get; set; }
        public int MoneyReceived { get; set; }
        public int MoneyCommute { get; set; }
        public string OrderDate { get; set; }
        public User[] OrderReceived { get; set; }

    }
}