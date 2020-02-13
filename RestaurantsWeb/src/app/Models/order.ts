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
    orderDate: string;
    orderStatus: string;
    orderStatusFood: string;
    orderStatusPayment: string;
    orderReceived: user[];

}