import {ReactNode} from 'react';
import CustomThemeProvider from '../../../../common/theme/CustomThemeProvider';
import AdminHeader from '../../../../modules/AdminHeader';

const AdminLayout = ({children}: {children: ReactNode}) => {
  return (
    <CustomThemeProvider>
      <AdminHeader />
      {children}
    </CustomThemeProvider>
  );
};

export default AdminLayout;
