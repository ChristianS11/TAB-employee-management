import { Injectable } from '@angular/core';
import { HTTPService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http:HTTPService) {}

  getAllData() {
    return new Promise((resolve, reject) => {
      this.http.get('/')
      .subscribe({
        next: (data) => {
          resolve(data)
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }

  deleteData(id:any) {
    return new Promise((resolve, reject) => {
      this.http.delete('/'+id)
      .subscribe({
        next: (data) => {
          resolve(data)
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }
}
