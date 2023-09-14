import { Component, Input } from '@angular/core';
import { ITrack } from './interfaces/track.interface';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {
  @Input() public tracks: ITrack[];
}
