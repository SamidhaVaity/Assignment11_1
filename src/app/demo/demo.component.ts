import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[ArithmeticService]
})
export class DemoComponent 
{
  public sum: any;
  public diff: any;

  constructor(private obj :ArithmeticService)
  {
    this.sum = this.obj.Add();
    this.diff = this.obj.Subtract();
  }
}
