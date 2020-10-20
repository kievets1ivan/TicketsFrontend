import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const BASE_URL = environment.BASE_URL

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    // postData(){

    //     // const body = {name: user.name, age: user.age};
    //     return this.http.post(BASE_URL + '/api'); 
    // }

    getData() {
        return this.http.get<any>(BASE_URL)
    }
    getDataId(id) {
        return this.http.get<any>(BASE_URL + `/${id}`)
    }

    postData(data) {
        return this.http.post<any>(BASE_URL, data)
    }

    deleteData(id) {
        return this.http.delete<any>(BASE_URL + `/${id}`)
    }

}