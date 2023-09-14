import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { RELEASE_NOTES, RELEASE_NOTES_BREADCRUMBS } from './constants/release-notes.constant';
import { IReleaseNote } from "./interfaces/release-note.interface";

@Component({
  selector: 'app-release-notes',
  templateUrl: './release-notes.component.html',
  styleUrls: ['./release-notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReleaseNotesComponent {
  public breadcrumbs: IBreadcrumb[] = RELEASE_NOTES_BREADCRUMBS;
  public releaseNotes: IReleaseNote[] = RELEASE_NOTES;
}
