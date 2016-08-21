import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import Const from '../constants';


export default function SessionWizardBreadcrumbs(props) {
  const { sessionType, goToChooseSessionType } = props;

  let chooseSessionTypeText = 'Choose Session Type';
  let exchangeLanguageChoiceCrumb;
  if (sessionType === Const.SESSION_EXCHANGE) {
    exchangeLanguageChoiceCrumb = <Breadcrumb.Item href="/new-session/exchange" active={true}>Choose Language</Breadcrumb.Item>;
    chooseSessionTypeText = 'Language Exchange';
  }
  let practiceLanguageChoiceCrumb;
  if (sessionType === Const.SESSION_PRACTICE) {
    practiceLanguageChoiceCrumb = <Breadcrumb.Item href="/new-session/practice" active={true}>Choose Language</Breadcrumb.Item>;
    chooseSessionTypeText = 'Language Practice';
  }

  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={goToChooseSessionType} active={!sessionType}>{chooseSessionTypeText}</Breadcrumb.Item>
      {exchangeLanguageChoiceCrumb}
      {practiceLanguageChoiceCrumb}
    </Breadcrumb>
  );
}
