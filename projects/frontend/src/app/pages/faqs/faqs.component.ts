import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITitleSearch } from '@shared/components/title/interfaces/title-search.interface';
import {FAQS_BREADCRUMBS, FAQS_DATA, FAQS_TITLE_SEARCH} from './constants/faqs.constant';
import {IFaq} from "./interfaces/faq.interface";

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqsComponent {
  public breadcrumbs: IBreadcrumb[] = FAQS_BREADCRUMBS;
  public faqs: IFaq[] = FAQS_DATA;
  public titleSearch: ITitleSearch = FAQS_TITLE_SEARCH;
  variable: string = '1';
}
