import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Breadcrumb } from 'react-bootstrap';
import { routerActions } from 'react-router-redux';

import Const from '../constants';
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

    let exchangeLanguageChoiceCrumb;
    if (sessionType === Const.SESSION_EXCHANGE) {
      exchangeLanguageChoiceCrumb = <Breadcrumb.Item href="/new-session/exchange" active={true}>Choose Language</Breadcrumb.Item>;
    }
    let practiceLanguageChoiceCrumb;
    if (sessionType === Const.SESSION_PRACTICE) {
      practiceLanguageChoiceCrumb = <Breadcrumb.Item href="/new-session/practice" active={true}>Choose Language</Breadcrumb.Item>;
    }

    return (
      <div>
        <div style={{paddingTop: '15px'}}>
          <Breadcrumb>
            <Breadcrumb.Item onClick={this._goToChooseSessionWizard} active={!sessionType}>Choose Session Type</Breadcrumb.Item>
            {exchangeLanguageChoiceCrumb}
            {practiceLanguageChoiceCrumb}
          </Breadcrumb>
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
