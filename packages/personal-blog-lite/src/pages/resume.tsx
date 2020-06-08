import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Resume from '../containers/resume';

type ResumePageProps = {};

const ResumePage: React.FunctionComponent<ResumePageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="Programmer Resume"
        description="StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."
      />

      <Resume />
    </Layout>
  );
};

export default ResumePage;
