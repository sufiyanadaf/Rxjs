
import { Component } from '@angular/core';
import {filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practice';
  a: any = [];
  b:any=[];
  c:any=[];
  d:any=[];
  number:any;
  result:any;
  oddnumber:any;
  odd:any;
  item:any;
  orderStatus: Observable<string>; 
  
  constructor(){
    this.orderStatus = new Observable(
      (observer)=>{
        setTimeout(() => {
          observer.next('Order is placed')
        }, 8000);
        setTimeout(()=>{
          observer.next('In progress')
        },3000);
        setTimeout(()=>{
          observer.next('Near to u r location')
        },4000);
        setTimeout(()=>{
          observer.next('out for delivery')
        },5000);
        setTimeout(()=>{
          observer.next('Delivered !!')
        },6000);
      }
    )
    }
     
ngOnInit(){
  // for(var i =0; i<this.a.length; i++){
  //   this.result = this.a.filter((i:number)=>i%2!=0)
  // }
  // this.b.push(this.result)
  // console.log(this.a)
  // console.log(this.b)
 this.orderStatus.subscribe((data)=>{
  console.log(data)
  
})

const x= of(1,2,3,4,5,6,7,8,9)
  const squareNumb = map((val:number) => val*val)
  const squared_value= squareNumb(x)
  squared_value.subscribe((data) =>{
    
    this.a.push(data)
  })
  console.log(this.a)

  const y= of(1,2,3,4,5,6,7,8,9)
  const multNumb = map((val:number) => val*2)
  const multipled_value= multNumb(x)
  multipled_value.subscribe((data) =>{
    
    this.b.push(data)
  })
  console.log(this.b)

  const a= of(1,2,3,4,5,6,7,8,9)
  const oddNum = filter((val:number) => val%2 !=0)
  const odd_value= oddNum(a)
  odd_value.subscribe((data) =>{
    this.c.push(data)
  })
  console.log(this.c)

  const b= of(1,2,3,4,5,6,7,8,9)
  const evenNum = filter((val:number) => val%2 ==0)
  const even_value= evenNum(b)
  even_value.subscribe((data) =>{
    this.d.push(data)
  })
  console.log(this.d)

  


}


}

function data(data: any) {
  throw new Error('Function not implemented.');
}
