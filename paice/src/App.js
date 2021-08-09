import React from 'react';
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import ContentRoute from './ContentTorik/ContentRoute';


const App = ()=>{
  const { Header, Footer } = Layout;


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
        <Header>Header</Header>
        <ContentRoute/>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  );
}

export default App;
