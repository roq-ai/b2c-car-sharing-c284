interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Operations Staff', 'Admin', 'Manager'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'View company information',
    'Create new user account',
    'Delete own user account',
  ],
  ownerAbilities: ['Manage users', 'Manage company', 'Edit personal information', 'View company information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4893bcb9-2581-4706-8e97-76f88f22a1a7',
};
