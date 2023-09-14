export interface ICreateOrganisation {
  organisationName: string;
  organisationLegalName: string;
  parentOrganisation: string;
  organizationABC: string;
  mainContactPerson: string;
  contactEmail: string;
  aboutDescription: string;
  streetAddress: string;
  buildingNameAddress: string;
  zipCodeAddress: string;
  cityAddress: string;
  regionAddress: string;
  countryAddress: string;
  streetBilling: string;
  buildingNameBilling: string;
  currency: string;
  zipCodeBilling: string;
  cityBilling: string;
  regionBilling: string;
  countryBilling: string;
  billingInstructions: string;
}
