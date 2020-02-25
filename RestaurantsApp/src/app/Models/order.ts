import { food } from "../Models/food";
import { user } from "../Models/user";

export class order {
    billId: string;
    orderId: string;
    tableNumber: string;
    foodOrder: food[];
    amountCustomer: number;
    moneyReceived: number;
    totalMoneyOrder: number;
    moneyCommute: number;
    discountPersen:number;
    discountBath:number;
    moneyDiscount:number;
    orderDate: string;
    billTime:string;
    orderStatus: string;
    orderStatusTotal:string;
    orderStatusPayment: string;
    orderStatusFood: string;
    orderStatusDrink:string;
    orderReceived: user[];

}