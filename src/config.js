export default {
    oidc: {
      clientId: '0oa94zcjuuj6GEWtq5d7',
      issuer: 'https://dev-55861431.okta.com/oauth2/default',
      redirectUri: window.location.origin + '/login/callback',
      scopes: ['openid', 'profile','email'],
      tokenManager: {
        storage: 'localStorage'
      }
    }
  }