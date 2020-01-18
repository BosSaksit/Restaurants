import { food } from "../Models/food";
import { user } from "../Models/user";

export class order {
    billId: string;
    orderId: string;
    tableNumber: string;
    foodOrder: food [];
    amountCustomer:number;
    totalMoneyOrder:number;
    moneyReceived:number;
    moneyCommute:number;
    orderDate:Date;
    orderReceived:user [];

}