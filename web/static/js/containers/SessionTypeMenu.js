import React from 'react';
import { Row, Col, Panel, Glyphicon } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import Const from '../constants';
import * as SessionWizardActionCreators from '../actions/sessionWizard';


class SessionTypeMenu extends React.Component {
  constructor(props) {
    super(props);

    this._chooseLanguageExchange = this._chooseLanguageExchange.bind(this);
    this._chooseLanguagePractice = this._chooseLanguagePractice.bind(this);
  }

  _chooseLanguageExchange() {
    const { setSessionType, push } = this.props;
    setSessionType(Const.SESSION_EXCHANGE);
    push('/new-session/exchange');
  }

  _chooseLanguagePractice() {
    const { setSessionType, push } = this.props;
    setSessionType(Const.SESSION_PRACTICE);
    push('/new-session/practice');
  }

  render() {
    return (
      <Row>
        <h2>Choose an Audio Chat Session Type</h2>
        <Col xs={6}>
          <PanelButton
            title="Language Exchange"
            description="You will be paired up with someone who is a native speaker in the language you are learning, and wants to learn your native language."
            glyph="transfer"
            onClick={this._chooseLanguageExchange}
            />
        </Col>
        <Col xs={6}>
          <PanelButton
            title="Language Practice"
            description="You will be paired up with someone who is learning the same language as you, and is around the same level."
            glyph="comment"
            onClick={this._chooseLanguagePractice}
            />
        </Col>
      </Row>
    );
  }
}

function PanelButton(props) {
  const { title, description, glyph, onClick } = props;

  return (
    <Panel className="clickable" onClick={onClick}>
      <h3><Glyphicon glyph={glyph} /> {title}</h3>
      <p>{description}</p>
    </Panel>
  );
}

const mapStateToProps = (state) => {
  return {
    sessionType: state.sessionWizard.sessionType,
  };
};

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({...SessionWizardActionCreators, ...routerActions}, dispatch),
)(SessionTypeMenu);
