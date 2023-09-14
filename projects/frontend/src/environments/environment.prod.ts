export const environment = {
  production: true,
  apiUrl: 'https://lspportal-dev.azurewebsites.net/api/',
  graphEndpoint: 'https://graph.microsoft.com/',
  msalConfig: {
    auth: {
      clientId: '17725e8f-7220-4274-abc1-c0734c06c715',
    }
  },
  apiConfig: {
    scopes: ['openid', 'https://neelevatcustomer.onmicrosoft.com/agent-portal-api/read.all'],
    uri: 'http://vm-agent-portal-01.westeurope.cloudapp.azure.com'
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
