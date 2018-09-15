import React from 'react';
import withRoot from '../withRoot';
import Layout from '../components/layout';
import About from '../containers/About';

const AboutPage = () => (
  <Layout>
    <About />
  </Layout>
);

export default withRoot(AboutPage);
