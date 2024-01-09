import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{

  constructor() { }

  public no1 : number = 15;
  public no2 : number = 5;

  Add()
  {
    return this.no1+ this.no2;
  }

  Subtract()
  {
    return this.no1- this.no2;
  }
  
}
