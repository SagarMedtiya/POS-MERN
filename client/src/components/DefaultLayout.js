import {UserOutlined,LogoutOutlined,HomeOutlined,CopyOutlined,UnorderedListOutlined} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React from "react";
import {useSelector} from 'react-redux'
import "../styles/DefaultLayout.css";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const DefaultLayout = (props) => {
    
	const {token: { colorBgContainer }} = theme.useToken();
        return (
		<Layout>
			<Sider breakpoint="lg" collapsedWidth="0" onBreakpoint={(broken) => {console.log(broken);}}
                onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}>
				
                <div className="logo" >
                    <h1 className="text-center text-light font-weight-bold">POS</h1>
                </div>
			    <Menu theme="dark" mode="inline" defaultSelectedKeys={window.location.pathname}>
                    <Menu.Item key ="/" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key ="/bills" icon={<CopyOutlined />}>
                        <Link to="/bills">Bills</Link>
                    </Menu.Item>
                    <Menu.Item key ="/items" icon={<UnorderedListOutlined />}>
                        <Link to="/items">Items</Link>
                    </Menu.Item>
                    <Menu.Item key ="/customers" icon={<UserOutlined/>}>
                        <Link to="/customers">Customers</Link>
                    </Menu.Item>
                    <Menu.Item key ="/logout" icon={<LogoutOutlined />}>
                        Logout
                    </Menu.Item>
                </Menu>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 10,
						background: colorBgContainer,
					}}
				/>
				<Content style={{
						padding:10,
						background: colorBgContainer,
					}}>
                    {props.children}
                </Content>
			</Layout>
		</Layout>
	);
};
export default DefaultLayout;
