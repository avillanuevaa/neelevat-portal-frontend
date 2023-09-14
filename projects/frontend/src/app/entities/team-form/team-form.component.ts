import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { SELECT_FILTER_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { ITeam } from './interfaces/team.interface';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamFormComponent implements OnInit {
  @Output() public onSave: EventEmitter<ITeam> = new EventEmitter<ITeam>();
  @Output() public onCancel: EventEmitter<void> = new EventEmitter<void>();
  @Input() public description: string;
  @Input() public team: ITeam;

  public teamGroup: FormGroup;
  public btnColor: typeof EButtonColor = EButtonColor;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;

  constructor(
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.initGroup();
  }

  public save(): void {
    this.onSave.emit(this.teamGroup.getRawValue());
  }

  public cancel(): void {
    this.onCancel.emit();
  }

  private initGroup(): void {
    this.teamGroup = this.fb.group({
      teamName: [''],
      teamLeader: [''],
      organisation: [''],
    });

    if (this.team) {
      this.teamGroup.patchValue(this.team);
    }
  }
}
