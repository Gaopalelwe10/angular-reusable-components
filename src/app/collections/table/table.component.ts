import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() classNames :string ='';
  @Input() data : any=[];
  @Input() headers: any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
