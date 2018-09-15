/* eslint-disable */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider } from 'react-jss';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import getPageContext from './src/getPageContext';
import createStore from './src/store';

const store = createStore();

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
  ]);
};

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const muiPageContext = getPageContext();
  const bodyHTML = renderToString(
    <JssProvider
      registry={muiPageContext.sheetsRegistry}
      generateClassName={muiPageContext.generateClassName}
    >
      {React.cloneElement(bodyComponent, {
        muiPageContext,
      })}
    </JssProvider>,
  );
  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: muiPageContext.sheetsRegistry.toString() }}
    />,
  ]);
};

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
};
