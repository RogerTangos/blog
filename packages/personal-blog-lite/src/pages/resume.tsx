import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Resume from '../containers/resume';

type ResumePageProps = {};

const ResumePage: React.FunctionComponent<ResumePageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="Albert R Carter Programmer Resume"
        description="Albert Carter is an environmental financial activist, and a data entineer.
                     He works works in machine learning and artificial intelligence using
                     serverless environments, python, clojure, TensorFlow, SkLearn, pandas, and NumPy."

      />

      <Resume />
    </Layout>
  );
};

export default ResumePage;
