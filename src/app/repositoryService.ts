import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class RepositoryService {

  public result: any;

  constructor(private repo: HttpService) { }

  public getFromRepository() {
    this.repo.getData()
      .subscribe(res => {
        console.log(res)
      },
        (error) => {
          console.log(error)
        })
  }
}
