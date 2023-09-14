import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { ORGANISATION_MOCK } from '@entities/organisation-form/constants/organisation-form.constant';
import { IOrganisation } from '@entities/organisation-form/interfaces/organisation.interface';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ORGANISATIONS_ADD_BREADCRUMBS } from './constants/organisations-add.constant';

@Component({
  selector: 'app-organisations-add',
  templateUrl: './organisations-add.component.html',
  styleUrls: ['./organisations-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationsAddComponent {
  public breadcrumbs: IBreadcrumb[] = ORGANISATIONS_ADD_BREADCRUMBS;
  public organisation: IOrganisation = ORGANISATION_MOCK;
  public btnColor: EButtonColor = EButtonColor.gray;
}