import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import AppHeader from "./FrondEnd/Components/Header/Header";
import AppFooter from "./FrondEnd/Components/Footer/Footer";
// import AppHome from './views/home';

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
    
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
