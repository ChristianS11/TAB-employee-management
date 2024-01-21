import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string = "admin";
  private password: string = "admin";
  private userData: any = null;

  constructor() { }

  getUserData() {
    return this.userData;
  }

  setUserData(key:any, data:any) {
    this.userData[key] = data;
  }

  login(data: any) {
    return new Promise((resolve, reject) => {
      if(data.username == this.username && data.password == this.password) {
        this.userData = {username: data.username};
        localStorage.setItem('token', data.username);
        resolve(true);
      } else {
        reject("Username & Password incorrect!")
      }
    })
    
  }
}
