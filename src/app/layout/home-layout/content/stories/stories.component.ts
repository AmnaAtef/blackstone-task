import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  users = [
    {image: "../../../../../assets/images/avatar.jpg", name: "You"},
    {image: "../../../../../assets/images/avatar2.jpg", name: "Supardi"},
    {image: "../../../../../assets/images/avatar3.jpg", name: "Dean"},
    {image: "../../../../../assets/images/avatar.jpg", name: "Theodore"},
    {image: "../../../../../assets/images/avatar3.jpg", name: "Walter"},
    {image: "../../../../../assets/images/avatar.jpg", name: "Enole"},
    
  ]
   
  constructor() { }

  ngOnInit(): void {
  }

}
