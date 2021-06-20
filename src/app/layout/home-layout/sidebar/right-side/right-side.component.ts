import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {

  suggestionsPeople = [
    {image: '../../../../../assets/images/avatar.jpg' , title: "Sarah Tancredi", subtitle:"@dr.sarah" , status: "Follow"},
    {image: '../../../../../assets/images/avatar2.jpg' , title: "Arthur Shelby", subtitle:"@art.shelby" , status: "Follow"},
    {image: '../../../../../assets/images/avatar3.jpg' , title: "Vin Diesel", subtitle:"@vindiesel" , status: "Follow"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  /** Update Like */
  count = 0;
  public likeCount() {
   return this.count += 1;
  }
  
}
