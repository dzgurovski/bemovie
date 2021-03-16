import Header from '../layouts/Header/Header';

const Layout = ({children}) => (
    <div>
      <Header />
      {children}
    </div>
 
   );

   export default Layout;