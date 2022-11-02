import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  
  items=[
    {title: 'What is your name?', content:'My name is Gaopalelwe.'},
    {title: 'What is your surname?', content:'My surname is Mpetshane.'},
    {title: 'Why is the sky blue?', content:'The sky is blue because it is.'},
    {title: 'What color is that cat?', content:'The cat is orange color.'},

  ]  
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
