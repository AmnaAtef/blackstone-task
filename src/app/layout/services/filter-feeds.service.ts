import { Injectable } from '@angular/core'    
@Injectable({
  providedIn: 'root'
})

export class FilterFeedsService {    
    allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0);    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.slice(0).find(Images => Images.id == id)    
    } 
     
    
}    
const Imagesdelatils = [    
    { "id": 1, "brand": "following" ,"url": "../assets/images/feed1.png" , "avatar": "../assets/images/avatar.jpg", "name": "Dean" },    
    { "id": 2, "brand": "popular" ,"url": "../assets/images/feed2.png" , "avatar": "../assets/images/avatar.jpg", "name": "Jesse Pinkman" },    
    { "id": 3, "brand": "newest" ,"url": "../assets/images/feed3.png" , "avatar": "../assets/images/avatar.jpg", "name": "Theodore Bagwell" },    
    { "id": 4, "brand": "popular" ,"url": "../assets/images/feed4.png" , "avatar": "../assets/images/avatar.jpg", "name": "Walter White" }
]   
  


