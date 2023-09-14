import { Component } from '@angular/core';
import {EContainerBar, ELiClass, ESizeBar} from "@entities/progress-bar/enums/progress-bar.enums";
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";
import {JOURNEY_PROGRESS_BAR} from "../../constants/shipment-detail.constant";

@Component({
  selector: 'app-tab-journey',
  templateUrl: './tab-journey.component.html',
  styleUrls: ['./tab-journey.component.scss']
})
export class TabJourneyComponent {
  public barSize: typeof ESizeBar = ESizeBar;

  public containerBar: typeof EContainerBar = EContainerBar;

  public liClassStyle: typeof ELiClass = ELiClass;

  public steps: IStep[] = JOURNEY_PROGRESS_BAR;

}
