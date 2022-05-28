import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { TranslateModule } from "@ngx-translate/core";
import { StreamAutocompleteTextareaModule, StreamChatModule } from "stream-chat-angular";
import { ChannelsModule } from '../channels/channels.module';


@NgModule({
  declarations: [
    ChatPageComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    TranslateModule.forChild(),
    StreamAutocompleteTextareaModule,
    StreamChatModule,
    ChannelsModule,
  ]
})
export class ChatModule { }
