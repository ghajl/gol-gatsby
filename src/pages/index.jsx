import React from 'react';
import withRoot from '../withRoot';
import Layout from '../components/layout';
import Main from '../containers/Main';

const MainPage = () => (
  <Layout>
    <Main />
  </Layout>
);

export default withRoot(MainPage);
