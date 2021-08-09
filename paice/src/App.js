import React, { useContext } from 'react';
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import ContentRoute from './ContentTorik/ContentRoute';
import Nav from './Components/header/Nav';
import { NavContext } from './Context/NavContext';
import NavBar from './Components/body/NavBar';


const App = ()=>{
  const { showNav, setShowNav } = useContext(NavContext)
  const { Header, Footer } = Layout;
  console.log(showNav)

  return (
    <Router>
      <head>2
        <meta
          charset="UTF-8"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Website Paice</title>
      </head>
      <Layout>
        <Header className='Header'>
          <Nav/>
        </Header>
        {
          showNav ? 
          <NavBar/>
          :
          <ContentRoute/>
        }
        <Footer className='Footer'>Footer</Footer>
      </Layout>
    </Router>
  );
}

export default App;
