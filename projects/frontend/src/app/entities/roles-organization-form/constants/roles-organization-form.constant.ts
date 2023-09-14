import {ISelect} from "@shared/components/title/interfaces/select.interface";
import {IOrganisation} from "@entities/organisation-form/interfaces/organisation.interface";
import {IRolesOrganisation} from "@entities/roles-organization-form/interfaces/roles-organization-form.interface";

export const COMPANY_ACTIVITIES: ISelect[] = [
  {
    name: 'company.warehousing',
    value: 'warehousing',
  },
  {
    name: 'company.seaFreight',
    value: 'sea_freight',
  },
  {
    name: 'company.airFreight',
    value: 'air_freight',
  },
  {
    name: 'company.transport',
    value: 'transport',
  },
];

export const COMPANY_ROLES: ISelect[] = [
  {
    name: 'company.shipper',
    value: 'shipper',
  },
  {
    name: 'company.forwardingAgent',
    value: 'forwarding_agent',
  },
  {
    name: 'company.linerAgent',
    value: 'liner_agent',
  },
  {
    name: 'company.airline',
    value: 'airline',
  },
  {
    name: 'company.trucker',
    value: 'trucker',
  },
  {
    name: 'company.tradingCompany',
    value: 'trading_company',
  },
  {
    name: 'company.consignee',
    value: 'consignee',
  },
  {
    name: 'company.bookingAgent',
    value: 'booking_agent',
  },
  {
    name: 'company.carrier',
    value: 'carrier',
  },
  {
    name: 'company.customsBroker',
    value: 'customs_broker',
  },
  {
    name: 'company.manufacturer',
    value: 'manufacturer',
  },
  {
    name: 'company.warehouse',
    value: 'warehouse',
  },
];

export const ORGANISATION_ROLES_MOCK: IRolesOrganisation = {
  parentOrganization: '1',
  organizationABC: '1',
  subsidiary: '1',
};

export const ORGANIZATION_SELECT: ISelect[] = [
  {
    name: 'Organization',
    value: '1',
  },
];

export const PARENT_ORGANIZATION_SELECT: ISelect[] = [
  {
    name: 'Legal subsidiary',
    value: '1',
  },
  {
    name: 'Legal subsidiary 2',
    value: '2',
  },
];

export const SUBSIDIARY_SELECT: ISelect[] = [
  {
    name: 'Organization XYZ',
    value: '1',
  },
];
