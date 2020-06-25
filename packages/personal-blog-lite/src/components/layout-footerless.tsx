import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import Navbar from './navbar/navbar';
import ResetCss from './reset-css';
import { theme } from '../theme';

type LayoutFootlerlessProps = {
  children: React.ReactNode;
};

const LayoutFootlerless: React.FunctionComponent<LayoutFootlerlessProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Navbar />
        </Sticky>

        {children}


      </>
    </ThemeProvider>
  );
};

export default LayoutFootlerless;
