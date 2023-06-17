import {ReactNode} from 'react';
import CustomThemeProvider from '../../../common/theme/CustomThemeProvider';
const FrontendLayout = ({children}: {children: ReactNode}) => {
  return <CustomThemeProvider>{children}</CustomThemeProvider>;
};

export default FrontendLayout;
