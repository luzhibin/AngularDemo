import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key:string,value:any){

    //localStorage.setItem(key,value)：将value存储到key字段
    localStorage.setItem(key,JSON.stringify(value));
  }
  get(key:string){

    // return 'this is a service';
    //JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
    return JSON.parse(localStorage.getItem(key))

  }
  remove(key:string){

    localStorage.removeItem(key);
  }
}

