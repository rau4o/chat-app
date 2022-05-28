import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChannelService, ChatClientService, StreamI18nService } from "stream-chat-angular";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../auth/auth.service";
import {catchError, map, Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPageComponent implements OnInit {

  chatIsReady$!: Observable<boolean>;

  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private auth: AuthService,
    private streamI18nService: StreamI18nService,
  ) { }

  ngOnInit(): void {
    this.streamI18nService.setTranslation();
    this.chatIsReady$ = this.auth.getStreamToken()
      .pipe(
        switchMap((streamToken) =>
          this.chatService.init(
            environment.stream.key,
            this.auth.getCurrentUser().uid,
            streamToken
          )),
        switchMap(() => this.channelService.init({
          type: 'messaging',
          members: { $in: [this.auth.getCurrentUser().uid] }
        })),
        map(() => true),
        catchError(() => of(false))
      );
  }
}
