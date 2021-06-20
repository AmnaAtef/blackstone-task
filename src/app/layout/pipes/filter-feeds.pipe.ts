import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFeeds'
})
  
export class FilterFeedsPipe implements PipeTransform {    
  transform(items: any[], feeds: string): any {    
    if(feeds === 'all'){ return items } else    
    return items.filter(item =>{    
      return item.brand === feeds;    
    });    
  }    
    
}  