import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = (props) => {
  return (
    <Layout>
    <SEO
        title="About Albert R Carter"
        description="Albert Carter is an environmental financial activist, and a data entineer.
                     He works with Extinction Rebellion's Comic Science working group and is interested
                     in new projects in the financial activism space."

      />
      <About />
    </Layout>
  );
};

export default AboutPage;
