import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { ICheckbox } from '../interfaces/checkbox.interface';
import { IUser } from '../interfaces/user.interface';

export const DEFAULT_AVATAR: string = '/assets/media/avatars/blank.png';

export const USER_ROLES: ISelect[] = [
  {
    name: 'pageName.inbound',
    value: 'inbound',
  },
  {
    name: 'pageName.outbound',
    value: 'outbound',
  },
  {
    name: 'pageName.transport',
    value: 'transport',
  },
  {
    name: 'pageName.stock',
    value: 'stock',
  },
  {
    name: 'labels.organisation',
    value: 'organisation',
  },
  {
    name: 'userRoles.finance',
    value: 'finance',
  },
  {
    name: 'pageName.analytics',
    value: 'analytics',
  },
];

export const SALUTATIONS: ISelect[] = [
  {
    name: 'Mr.',
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

export const TIME_ZONES: ISelect[] = [
  {
    name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    value: '1'
  }
]

export const USER_ROLES_CHECKBOXES: ICheckbox[] = [
  {
    name: 'userRoles.admin',
    fullName: 'userRoles.administrator',
    value: 'admin',
  },
  {
    name: 'userRoles.user',
    fullName: 'userRoles.generalUser',
    value: 'user',
  },
  {
    name: 'userRoles.editor',
    fullName: 'userRoles.assistantEditor',
    value: 'editor',
  },
  {
    name: 'pageName.inbound',
    fullName: 'userRoles.inboundAssistant',
    value: 'inbound',
  },
];

export const FREIGHT_TYPE_CHECKBOXES: ISelect[] = [
  {
    name: 'order.fcl',
    value: '1',
  },
  {
    name: 'order.lcl',
    value: '2',
  },
  {
    name: 'order.consolidated',
    value: '3',
  },
]

export const USER_MOCK: IUser = {
  firstName: 'John',
  lastName: 'Doe',
  salutation: '3',
  jobTitle: 'John',
  mobilePhone: '+31 (0)6 1234 5678',
  officePhone: '+31 (0)6 1234 5678',
  emailAddress: 'john.doe@neelevat.com',
  roles: [
    'inbound',
    'outbound',
    'transport',
    'stock',
    'organisation',
    'finance',
    'analytics',
  ],
  birthday: new Date(),
  showBirthday: true,
  fullName: 'Lisa M. B.',
  avatar: '/assets/media/avatars/blank.png',
  role: 'Administrador',
  rolesCheckbox: [
    'admin'
  ],
  primaryUserID: '5372332',
  secondaryUserID: '93764958',
  timeZone: '1',
  workLocation: 'Rotterdam',
  createdOn: '12/02/2022 22:43',
  linkedin: '',
};

export const LANGUAGES_USER: ISelect[] = [
  {
    name: 'English',
    value: '1',
  },
  {
    name: 'Dutch',
    value: '2',
  },
  {
    name: 'Chinese',
    value: '3',
  },
];

export const TYPES_USER: ISelect[] = [
  {
    name: 'Contact person 1 - Name',
    value: '1',
  },
  {
    name: 'Contact person 2 - Name',
    value: '2',
  },
  {
    name: 'Contact person 3 - Name',
    value: '3',
  },
];

export const USER_RIGHTS: ISelect[] = [
  {
    name: 'Admin',
    value: '1',
  },
  {
    name: 'User',
    value: '2',
  },
];

export const NAME_ORGANIZATIONS: ISelect[] = [
  {
    name: 'Organization ABC',
    value: '1',
  },
  {
    name: 'Organization DEF',
    value: '2',
  },
  {
    name: 'Organization GHI',
    value: '3',
  },
];

export const AUTHORISATION: ISelect[] = [
  {
    name: 'Admin',
    value: '1',
  },
  {
    name: 'User',
    value: '2',
  },
];

export const ROLE_TEMPLATE: ISelect[] = [
  {
    name: 'Select template',
    value: '1',
  },
  {
    name: 'Template 1',
    value: '2',
  },
  {
    name: 'Template 2',
    value: '3',
  },
];
