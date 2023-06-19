import {ReactNode} from 'react';
import CustomThemeProvider from '../../../common/theme/CustomThemeProvider';
import FrontendHeader from '../../../modules/FrontendHeader';
import Head from 'next/head';
const FrontendLayout = ({children}: {children: ReactNode}) => {
  return (
    <CustomThemeProvider>
      <FrontendHeader />
      <main>{children}</main>
    </CustomThemeProvider>
  );
};

export default FrontendLayout;
