import { Component, OnInit, OnChanges } from '@angular/core';    
import { FilterFeedsService } from '../../../services/filter-feeds.service'; 
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnChanges {

   /* filter images  */
  images:any[];    
  filterBy?: string = 'all'    
 allImages:any[] = [];    
    
  constructor(private imageService: FilterFeedsService) {    
    this.allImages = this.imageService.getImages();    
  }    
  ngOnChanges() {    
    this.allImages = this.imageService.getImages();    
  }    
 
  /** Update Like */
   count = 0;
  public likeCount() {
   return this.count += 1;
  }

  
}
