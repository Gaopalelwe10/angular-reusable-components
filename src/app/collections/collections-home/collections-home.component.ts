import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Elyse', age: 25, job: 'Engineer', employed: false },
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Gaopalelwe', age: 28, job: 'Web Developer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    {key: 'employed', label:'Has a Job'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
