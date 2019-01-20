import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userType from './propTypes';
import api from '../../modules/api';

class CreateChatContainer extends React.Component {
  static propTypes = {
    user: userType.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { user, match, history } = this.props;

    if (!user.token) {
      history.replace({ pathname: '/auth' });
    } else {
      api.createChat.byEmail({
        email: match.params.email,
      })
        .then(chat => alert(`Created. Chat id: ${chat._id}`))
        .catch(err => alert(`Error: ${err.message.email}`));
    }
  }

  render() {
    return <div>Creating new chat</div>;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(CreateChatContainer);
