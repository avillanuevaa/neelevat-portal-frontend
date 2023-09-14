import { ISelect } from '@shared/components/title/interfaces/select.interface'
import { IOrganisation } from '../interfaces/organisation.interface';
import {Validators} from "@angular/forms";

export const ORGANISATION_MOCK: IOrganisation = {
  organisationName: 'Organization ABC',
  organisationLegalEntity: 'Organization Ltd.',
  mainContactPerson: '1',
  contactEmail: 'purchase@organisation.com',
  organisationAddress: '12 Triple AA street, London',
  role: 'Administrador',
  roles: [
    'warehousing',
    'sea_freight',
    'air_freight',
    'transport',
  ],
  street: 'Typical A Street',
  buildingName: '14',
  zipCode: '12345AB',
  city: 'New Jersey',
  avatar: '/assets/media/avatars/organisation.png',
  country: 'usa',
};

export const MAIN_CONTACT_PERSON_SELECTOR: ISelect[] = [
  {
    name: 'John Doe',
    value: '1',
  },
  {
    name: 'Mrs.',
    value: '2',
  },
  {
    name: 'Miss',
    value: '3',
  },
];

export const ORGANISATION_ROLES: ISelect[] = [
  {
    name: 'organisations.warehousing',
    value: 'warehousing',
  },
  {
    name: 'organisations.seaFreight',
    value: 'sea_freight',
  },
  {
    name: 'organisations.airFreight',
    value: 'air_freight',
  },
  {
    name: 'organisations.transport',
    value: 'transport',
  },
];

export const COUNTRIES: ISelect[] = [
  { value: 'usa', name: 'United States' },
  { value: 'canada', name: 'Canada' },
  { value: 'uk', name: 'United Kingdom' },
  { value: 'nd', name: 'Netherlands'}
];

export const CURRENCY: ISelect[] = [
  { value: 'usd', name: 'USD'},
  { value: 'eur', name:'EUR'}
]

