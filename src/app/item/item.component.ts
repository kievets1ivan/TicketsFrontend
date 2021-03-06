import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repositoryService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
  }


  getAll() {
    this.repoService.getFromRepository()
  }


}
