import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewChannelComponent } from './new-channel/new-channel.component';

@NgModule({
  declarations: [
    NewChannelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewChannelComponent
  ]
})
export class ChannelsModule { }
