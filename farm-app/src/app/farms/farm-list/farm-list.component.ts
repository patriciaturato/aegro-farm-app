import { Component, OnInit } from '@angular/core';
import { Farm } from '../farm.model';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {
  farms: Farm[] = [new Farm("Fazenda de Teste"), new Farm("Fazenda de Teste 2")]

  constructor() { }

  ngOnInit(): void {
  }

}
