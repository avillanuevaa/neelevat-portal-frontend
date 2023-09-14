export interface IOrganisationOption {
  id: string;
  logo: string;
  name?: string;
  class?: string;
};

export interface IOrganisations {
  oostvogels: IOrganisationOption;
  neelevat: IOrganisationOption;
  mammoet: IOrganisationOption;
  nvd_asia: IOrganisationOption;
};
