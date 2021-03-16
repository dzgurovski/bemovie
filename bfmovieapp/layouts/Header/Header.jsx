import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from 'next/link';


const Header = () =>{
    return <AppBar position="static">
    <Toolbar>
      <Link href="/"><Button  color="inherit">Любими филми</Button></Link>
    </Toolbar>
  </AppBar>
}
export default Header;