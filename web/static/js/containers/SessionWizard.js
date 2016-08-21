import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Breadcrumb } from 'react-bootstrap';
import { routerActions } from 'react-router-redux';

import SessionWizardBreadcrumbs from '../components/SessionWizardBreadcrumbs';
import * as SessionWizardActionCreators from '../actions/sessionWizard';


export class SessionWizard extends React.Component {
  constructor(props) {
    super(props);

    this._goToChooseSessionWizard = this._goToChooseSessionWizard.bind(this);
    this._goToExchangeWizard = this._goToExchangeWizard.bind(this);
    this._goToPracticeWizard = this._goToPracticeWizard.bind(this);
  }

  _goToChooseSessionWizard() {
    const { setSessionType, push } = this.props;
    setSessionType(null);
    push('/new-session');
  }

  _goToExchangeWizard() {
    const { push } = this.props;
    push('/new-session/exchange');
  }

  _goToPracticeWizard() {
    const { push } = this.props;
    push('/new-session/practice')
  }

  render() {
    const { setSessionType, sessionType, languageChoice } = this.props;

    return (
      <div>
        <div style={{paddingTop: '15px'}}>
          <SessionWizardBreadcrumbs
            sessionType={sessionType}
            goToChooseSessionType={this._goToChooseSessionWizard} />
        </div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessionType: state.sessionWizard.sessionType,
  };
};

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({...SessionWizardActionCreators, ...routerActions}, dispatch),
)(SessionWizard);
