import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { ORGANISATIONS_BREADCRUMBS, ORGANISATIONS_COLUMNS, ORGANISATIONS_DATA_MOCK } from './constants/organisations.constant';
import { IOrganisationTable } from './interfaces/organisations.interface';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationsComponent {
  public breadcrumbs: IBreadcrumb[] = ORGANISATIONS_BREADCRUMBS;
  public btnColor: EButtonColor = EButtonColor.gray;
  public columns: IColumn[] = ORGANISATIONS_COLUMNS;
  public organisationsDataMock: IOrganisationTable[] = ORGANISATIONS_DATA_MOCK;
}
