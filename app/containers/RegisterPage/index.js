/*
 *
 * RegisterPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectRegisterPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class RegisterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="RegisterPage"
          meta={[
            { name: 'description', content: 'Description of RegisterPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectRegisterPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
