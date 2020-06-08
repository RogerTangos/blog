import React from 'react';
import Layout from '../../components/layout';

type PhotosPageProps = {};

const PhotosPage: React.FunctionComponent<PhotosPageProps> = (props) => {
    if (typeof window !== 'undefined') {
       window.location.href = "https://photos.app.goo.gl/uAvk54rHBeyubfCd9";
  }

  return (
    <Layout>
      <p>If the page does not automatically redirect, you can find
        <a href="https://photos.app.goo.gl/uAvk54rHBeyubfCd9">
          photos here.
        </a>.</p>
    </Layout>
  );
};

export default PhotosPage;
