import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { USERS_ADD_BREADCRUMBS } from './constants/users-add.constant';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersAddComponent {
  public breadcrumbs: IBreadcrumb[] = USERS_ADD_BREADCRUMBS;
  public btnColor: EButtonColor = EButtonColor.gray;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private translateService: TranslateService,
  ) { }

  public addUser(): void {
    this.toastr.success(
      this.translateService.instant('users.userAddedSuccessfully'), 
      this.translateService.instant('statuses.success'),
    );
    this.router.navigate(['management/users']);
  }

}
