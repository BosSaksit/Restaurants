import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { food } from "../Models/food";
import { user } from "../Models/user";
import { order } from '../Models/order';
import { summary } from '../Models/summary';

@Injectable({
  providedIn: 'root'
})

export class ResApiService {
  public static host: string = "https://localhost:5001/api/";

  public status: any;
  public statusLogin: any;

  constructor(public http: HttpClient) { }

  // food
  public getDataFood() {
    return this.http.get<food>(ResApiService.host + 'Food/GetDataFood');
  }

  public getDataFoodById(Id: string) {
    return this.http.get<food>(ResApiService.host + 'Food/GetDataFoodById/' + Id);
  }

  public addDataFood(data: food) {
    return this.http.post<food>(ResApiService.host + 'Food/AddDataFood/', data);
  }

  public editDataFood(Id: string, data) {
    return this.http.put<food>(ResApiService.host + 'Food/EditDataFood/' + Id, data);
  }

  public deleteDataFood(Id: string) {
    return this.http.delete<food>(ResApiService.host + 'Food/DeleteFood/' + Id);
  }
  // food

  // user
  public getDataUser() {
    return this.http.get<user>(ResApiService.host + 'User/GetDataUser');
  }

  public getDataUserById(Id: string) {
    return this.http.get<user>(ResApiService.host + 'User/GetDataUserById/' + Id);
  }

  public login(user) {
    return this.http.get<user>(ResApiService.host + 'User/login/' + user);
  }

  public addDataUser(data: user) {
    return this.http.post<user>(ResApiService.host + 'User/AddDataUser/', data);
  }

  public editDataUser(Id: string, data) {
    return this.http.put<user>(ResApiService.host + 'User/EditDataUser/' + Id, data);
  }

  public deleteDataUser(Id: string) {
    return this.http.delete<user>(ResApiService.host + 'User/DeleteUser/' + Id);
  }
  // user

  // order
  public getDataOrder() {
    return this.http.get<order>(ResApiService.host + 'Order/GetDataOrder');
  }

  public getDataOrderById(Id: string) {
    return this.http.get<order>(ResApiService.host + 'Order/GetDataOrderById/' + Id);
  }

  public addDataOrderToCashier(data: order) {
    return this.http.post<order>(ResApiService.host + 'Order/AddDataOrder/', data);
  }
  // order


  // casheir
  public orderPayment(Id: string, data) {
    return this.http.put<order>(ResApiService.host + 'Order/OrderPayment/' + Id, data);
  }

  public getStatusOrderPayment() {
    return this.http.get<order>(ResApiService.host + 'Order/GetStatusOrder');
  }
  // casheir

  // Summary
  public addDataSummary(data: summary) {
    return this.http.post<summary>(ResApiService.host + 'Summary/AddDataSummary/', data);
  }

  public getDataSummary() {
    return this.http.get<summary>(ResApiService.host + 'Summary/GetDataSummary');
  }

  public getDataSummaryDay(day: string, month: string) {
    return this.http.get<summary>(ResApiService.host + 'Summary/GetDataSummaryGetDay/' + day + "/" + month);
  }

  public getDataSummaryMonth() {
    return this.http.get<summary>(ResApiService.host + 'Summary/GetDataSummaryGetMonth');
  }
  // Summary

  //owner
  public clearOff() {
    return this.http.get<order>(ResApiService.host + 'Order/ClearOff');
  }
  //owner
}

