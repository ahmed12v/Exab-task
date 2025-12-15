import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DirectionServices {
  setRTL(){
    document.documentElement.dir='rtl';
    document.documentElement.lang='ar';
  }

  setLTR(){
    document.documentElement.dir='ltr';
    document.documentElement.lang='en';
  }

}
