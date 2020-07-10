import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../containers/contact';

type ContactPageProps = {};

const ContactPage: React.FunctionComponent<ContactPageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="Contact Albert"
        description="Contact Albert R Carter about financial environmental activism."
      />

      <Contact />
    </Layout>
  );
};

export default ContactPage;