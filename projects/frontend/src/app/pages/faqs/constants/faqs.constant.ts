import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITitleSearch } from '@shared/components/title/interfaces/title-search.interface';
import {IFaq} from "../interfaces/faq.interface";

export const FAQS_BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.faqs',
  },
];

export const FAQS_TITLE_SEARCH: ITitleSearch = {
  placeholder: 'labels.search',
  svg: 'assets/media/icons/duotune/general/search.svg'
};

export const FAQS_DATA: IFaq[] = [
  {
    id: 1,
    title: 'faqs.technicalSupport',
    description: 'faqs.technicalSupportAnswer',
  },
  {
    id: 2,
    title: 'faqs.newOrder',
    description: 'faqs.newOrderAnswer',
  },
  {
    id: 3,
    title: "faqs.myRoles",
    description: 'faqs.myRolesAnswer',
  },
  {
    id: 4,
    title: 'faqs.toATeam',
    description: 'faqs.toATeamAnswer',
  },
  {
    id: 5,
    title: 'faqs.toATeam',
    description: 'faqs.toATeamAnswer',
  },
]
