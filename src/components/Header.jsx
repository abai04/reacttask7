import React, { useContext, useState } from 'react';
import { Switch } from 'antd';
import { headerContext } from '../contexts/HeaderContextProvider';
import Content from './Content';
const lightTheme = {
  backgroundColor: 'white',
  color: 'black'
}
const darkTheme = {
  backgroundColor: 'black',
  color: 'white'
}

const Header = () => {
  const {change} = useContext(headerContext)

  const [theme, setTheme] = useState(lightTheme)
  return(
    <div style={theme}>
      <div style={{display: 'flex'}}>
      <Switch defaultChecked onChange={(e)=>change(e, setTheme, darkTheme, lightTheme)}/>
      <h2 style={{margin: '0 30px'}}>Header</h2>
      </div>
      <Content/>
      </div>
  )
};
export default Header;