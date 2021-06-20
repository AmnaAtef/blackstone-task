import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideComponent } from './home-layout/sidebar/left-side/left-side.component';
import { RightSideComponent } from './home-layout/sidebar/right-side/right-side.component';
import { StoriesComponent } from './home-layout/content/stories/stories.component';
import { FeedComponent } from './home-layout/content/feed/feed.component';
import { ContentComponent } from './home-layout/content/content.component';
import { FilterFeedsPipe } from './pipes/filter-feeds.pipe';



@NgModule({
  declarations: [LeftSideComponent, RightSideComponent, StoriesComponent, FeedComponent, ContentComponent, FilterFeedsPipe],
  exports: [LeftSideComponent, ContentComponent, RightSideComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
