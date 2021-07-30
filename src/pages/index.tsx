import { Layout, Spin, Skeleton, Result, Button } from 'antd';
import React from 'react';
import { Router, Route } from 'react-router'
import SideBar from '../components/common/sidebar';
import HeaderNav from '../components/common/headernav';
import Account from './account';
import './index.scss';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;


class Index extends React.Component {

	state = {
		sideBarCollapsed: false,
	};

	handleChangesideBarCollapsedState = (sideBarCollapsed: boolean) => {
		this.setState({ sideBarCollapsed });
	};

	render() {
		return (
			<Layout className="index-layout">
				{/* 侧边栏 */}
				<Sider
					className="index-layout-side"
					collapsible
					onCollapse={this.handleChangesideBarCollapsedState}
				>
					<SideBar isCollaped={this.state.sideBarCollapsed} />
				</Sider>
				{/* 右侧区域 */}
				<Layout className="index-layout-right" style={{ marginLeft: this.state.sideBarCollapsed ? '80px' : '200px' }}>
					{/* 顶部导航栏 */}
					<Header className="index-layout-header">
						<HeaderNav />
					</Header>

					{/* 渲染区域 */}
					<Content className="index-layout-container">
						{/* <Spin />
						<Skeleton />
						<Result
							status="404"
							title="404"
							subTitle="Sorry, the page you visited does not exist."
							extra={<Button type="primary">Back Home</Button>}
						/>, */}
						<Router>
							<Route path="/" component={Account}>
								<Route path="account" component={Account} />
								{/* <Route path="inbox" component={Inbox}>
									<Route path="messages/:id" component={Message} />
								</Route> */}
							</Route>
						</Router>
					</Content>

				</Layout>
			</Layout >
		);
	}
}

export default Index;