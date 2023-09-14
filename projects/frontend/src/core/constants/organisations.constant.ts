import { IOrganisationOption, IOrganisations } from '@interfaces/organisations.interface';

const oostvogels: IOrganisationOption = {
  id: 'oostvogels',
  name: 'Oostvogels',
  logo: 'assets/logos/oostvogels-logo.png',
  class: 'oostvogels',
};

const neelevat: IOrganisationOption = {
  id: 'neelevat',
  name: 'Neele-Vat',
  logo: 'assets/logos/logo-neelevat-menu.png',
  class: 'neelevat',
};

const mammoet: IOrganisationOption = {
  id: 'mammoet',
  name: 'Mammoet',
  logo: 'assets/logos/logo-mammoet-menu.png',
  class: 'mammoet',
};

const nvd_asia: IOrganisationOption = {
  id: 'nvd_asia',
  name: 'NVD_Asia',
  logo: 'assets/logos/nvd_asia.png',
  class: 'nvd_asia',
};

export const ORGANISATIONS: IOrganisations = {
  oostvogels,
  neelevat,
  mammoet,
  nvd_asia,
};
