import React from 'react';
import Layout from '../components/layout';

type ResumePageProps = {};

const ResumePage: React.FunctionComponent<ResumePageProps> = (props) => {
    if (typeof window !== 'undefined') {
       window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScL0TljzY4imco86gM8jCXA6KDA0_1OUiUSjik-gK8tg6kFig/viewform?usp=sf_link";
  }

  return (
    <Layout>
      <p>If the page does not automatically redirect, you can find
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScL0TljzY4imco86gM8jCXA6KDA0_1OUiUSjik-gK8tg6kFig/viewform?usp=sf_link">
          the contact form here.
        </a>.</p>
    </Layout>
  );
};

export default ResumePage;
