/* eslint import/prefer-default-export: 0 */

export const useAuthTokenCheck = (user, history) => {
  if (!user.token) {
    history.replace({ pathname: '/auth' });
  }
};
