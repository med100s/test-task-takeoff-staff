import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from "mobx-react"
import authenticationStore from './stores/authentication';

import App from './App';

const renderApp = () => {
  render(
    <Provider authenticationStore={authenticationStore}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', () => renderApp());
}

renderApp();
