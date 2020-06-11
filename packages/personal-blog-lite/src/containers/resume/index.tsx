import * as React from 'react';
import './resume.css';

interface AboutProps {}

const Resume: React.FunctionComponent<AboutProps> = () => {
  return (
    <div id="content">
            <iframe width="100%" height="100%" border="none" src="https://resume.albertrcarter.com" />
    </div>
  );
};

export default Resume;
