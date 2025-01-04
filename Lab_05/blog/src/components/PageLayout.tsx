import { Link, Outlet } from "react-router";
import { Button, Layout, Space, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
const { Footer } = Layout;

const PageLayout = () => {
  return (
      <Layout style={{minHeight: '100vh', minWidth: '100%', alignContent: 'center', textAlign: 'center'}}>
        <Menu style={{padding: '10px', backgroundColor: 'lightblue', display: 'flex', flexDirection: 'row', justifyContent: 'center', minWidth: '100vw', height: '50px', verticalAlign: 'middle'}}>

            <span style={{ marginRight: '30px', marginTop:'15px', fontSize:'16px'}}><Link to="/">Home</Link></span>
            <span style={{marginLeft: '30px', marginTop:'15px', fontSize:'16px'}}><Link to="/blog">Blog</Link></span>
        </Menu>
        <Content style={{minWidth: '100%', height:'100%', display: 'flex', flexDirection: 'column'}}>
          <Outlet />
        </Content>
        <Footer style={{minWidth: '100%', textAlign: 'center'}}>
          Lab 5 - React
        </Footer>
      </Layout>
  );
};

export default PageLayout;