import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  
  checkTypeMath = true;
  numberInput : number = 0;
  optionSelect : string = 'isPrime';
 
 
 
  calculateCheck(){

    if(this.numberInput < 1){
      this.numberInput = 1;
    }
    
    if(this.optionSelect == 'isPrime'){
      this.checkIsPrime(this.numberInput);
    }else if(this.optionSelect == 'isFibonacci'){
      this.checkIsFibonacci(this.numberInput);
    }
     
  }

  checkIsPrime(number:number){
    this.checkTypeMath = true;
    if(number == 1){
      this.checkTypeMath = false;
    }else if(number > 1){
        for (let i = 2; i < number; i++) {
          if(number % i == 0){
            this.checkTypeMath = false;
            break;
          }
        }
    }
    else {
      this.checkTypeMath = false;
   }

  }

  checkIsFibonacci(number:number){
    this.checkTypeMath = false;
    let j = number;
    if (number < 0) {
         j = 0;
    }else if(number <= 3){
         j = Number(number) + Number(1);
    }
   
     let first_number = 0;
     let sec_number = 1;
     let next_number;
    
     for (let i = 0; i <= j; i++) {
       console.log(first_number,number)
       if(number == first_number){
        this.checkTypeMath = true;
        break;
       }
       next_number = first_number + sec_number;
       first_number = sec_number;
       sec_number = next_number;
      
     }
  }

}

