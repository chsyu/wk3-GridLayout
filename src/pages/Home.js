import { useContext } from "react";
import { Layout } from 'antd';

import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  const { state: { page: { title } } } = useContext(StoreContext);

  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray nav-area">
        <NavBar />
      </Layout>
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title={title} />
        </Header>
        <Content className="layout-content">
          <ProductList />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
