import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ROLE_DATA_MOCK_2 } from '../components/role-table/constants/role-table.constant';
import { IRole } from '../components/role-table/interfaces/role-table.interface';

@Component({
  selector: 'app-roles-detail',
  templateUrl: './roles-detail.component.html',
  styleUrls: ['./roles-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesDetailComponent {
  public roleData: IRole[] = ROLE_DATA_MOCK_2;

  constructor(
    private dialogRef: MatDialogRef<RolesDetailComponent>
  ) { }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
