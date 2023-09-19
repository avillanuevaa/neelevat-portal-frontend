// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://lspportal-dev.azurewebsites.net/api/',
  eventSourceUrl: 'https://vm-agent-portal-01-eeahbabmeadkg5e6.z01.azurefd.net',
  graphEndpoint: 'https://graph.microsoft.com/',
  msalConfig: {
    auth: {
      clientId: '17725e8f-7220-4274-abc1-c0734c06c715',
    }
  },
  protectedApiConfig: {
    scopes: ['openid', 'https://neelevatcustomer.onmicrosoft.com/agent-portal-api/read.all'],
    urls: ['https://vm-agent-portal-01-eeahbabmeadkg5e6.z01.azurefd.net', 'https://lspportal-dev.azurewebsites.net']
  },
  b2cPolicies: {
    names: {
      signUpSignIn: "B2C_1_susi_custom",
      resetPassword: "B2C_1_reset_custom",
      editProfile: "b2c_1_edit_profile"
    },
    authorities: {
      signUpSignIn: {
        authority: 'https://neelevatcustomer.b2clogin.com/neelevatcustomer.onmicrosoft.com/B2C_1_susi_custom'
      },
      resetPassword: {
        authority: 'https://neelevatcustomer.b2clogin.com/neelevatcustomer.onmicrosoft.com/B2C_1_reset_custom'
      },
      editProfile: {
        authority: "https://neelevatcustomer.b2clogin.com/neelevatcustomer.onmicrosoft.com/b2c_1_edit_profile"
      }
    },
    authorityDomain: "neelevatcustomer.b2clogin.com"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
