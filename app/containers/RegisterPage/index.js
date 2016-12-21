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
import Form from './Form';
import Input from './Input';
import SubmitInput from './SubmitInput';

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

        <Form>
          <div>
            <label htmlFor="username">
              <FormattedMessage {...messages.username} />
              <Input
                id="username"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <FormattedMessage {...messages.password} />
              <Input
                id="password"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password_again">
              <FormattedMessage {...messages.password_again} />
              <Input
                id="password_again"
                type="text"
              />
            </label>
          </div>
          <div>
            <SubmitInput id="submit" type="submit" value="Sign Up" />
          </div>

        </Form>

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
