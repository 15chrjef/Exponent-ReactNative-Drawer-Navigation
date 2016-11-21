import Exponent, { Asset } from 'exponent';
import Router from './navigation/Router';
import App from './components/App';
import React from 'react';
import { NavigationProvider } from '@exponent/ex-navigation';

class AppContainer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <NavigationProvider router={Router}>
        <App {...this.props}/>
      </NavigationProvider>
    );
  }
}

Exponent.registerRootComponent(AppContainer);
