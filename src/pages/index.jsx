import React from 'react';
import withRoot from '../withRoot';
import Layout from '../components/layout';
import Main from '../containers/Main';

const MainPage = ({ ...props }) => (
  <Layout>
    <Main {...props} />
  </Layout>
);

export default withRoot(MainPage);
