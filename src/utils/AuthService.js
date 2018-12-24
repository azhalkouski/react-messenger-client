//* I think it should be deprecated
//* just use Bearer token

/* eslint class-methods-use-this: 0 */
import Auth0Lock from 'auth0-lock';
import history from './history';

class AuthService {
  constructor(clientId, domain) {
    // Audience and scope, specifying that you need an access_token that can be used
    // to invoke the /userinfo endpoint
    // https://manage.auth0.com/#/applications/soo5b7E1wN7eIW3yJSSo5yywh9tQCHA0/quickstart
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:8080/',
        responseType: 'token',
        scope: 'openid',
      },
    });

    this.lock.on('authenticated', this.$doAuthentication.bind(this));
    this.login = this.login.bind(this);
  }

  $doAuthentication(authResult) {
    this.setToken(authResult.idToken);
    history.replace('/');
  }

  login() {
    this.lock.show();
  }

  loggedIn() {
    return !!this.getToken() && this.getToken() !== '';
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}

export default new AuthService('soo5b7E1wN7eIW3yJSSo5yywh9tQCHA0', 'azhalkouski.eu.auth0.com');
