import { Component } from '@angular/core';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { CONTAINERS_COLUMNS, CONTAINERS_DATA } from '../../constants/containers.constant';
import { ICurrentContainer } from '../../interfaces/currentContainer.interface';

@Component({
  selector: 'app-containers-current',
  templateUrl: './containers-current.component.html',
  styleUrls: ['./containers-current.component.scss']
})
export class ContainersCurrentComponent {
  public containers: ICurrentContainer[] = CONTAINERS_DATA;
  public columns: IColumn[] = CONTAINERS_COLUMNS;
}
