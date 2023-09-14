import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {IUser} from "@entities/user-form/interfaces/user.interface";
import {ICreateOrganisation} from "../interface/create-organization.interface";

export const CREATE_ORGANIZATION_BREADCRUMBS: IBreadcrumb[] = [
  {
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.start',
    link: '#',
  },
  {
    colon: '#',
  },
  {
    name: 'pageName.createOrganization',
  },
]

export const CREATE_ORGANIZATION_MOCKUP: ICreateOrganisation = {
  organisationName: 'Organization ABC',
  organisationLegalName: 'Organization Ltd.',
  parentOrganisation: '1',
  organizationABC: '1',
  mainContactPerson: '1',
  contactEmail: 'purchase@organisation.com',
  aboutDescription: 'Tell us about your organization...',
  streetAddress: 'Typical A Street',
  buildingNameAddress: '14',
  zipCodeAddress: '12345AB',
  cityAddress: 'New Jersey',
  regionAddress: '',
  countryAddress: 'usa',
  streetBilling: 'Typical A Street',
  buildingNameBilling: '14',
  currency: 'usd',
  zipCodeBilling: '12345AB',
  cityBilling: 'Kansas',
  regionBilling: '',
  countryBilling: 'usa',
  billingInstructions: 'Tell us about your organization...',
};


