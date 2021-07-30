import { Menu } from 'antd';
import React from 'react'
import { Link } from 'react-router'
import {
	AppstoreOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	BarChartOutlined,
	CloudOutlined,
	TeamOutlined,
	ShopOutlined,
	BgColorsOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

interface Props {
	isCollaped: Boolean;
}

class SideBar extends React.Component<Props, {}> {

	render() {
		return (
			<>
				<div className="index-layout-side__logo">
					{this.props.isCollaped ? 'C' : 'COINER'}
				</div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
					<Menu.Item key="1" icon={<UserOutlined />}>
						<Link to="/account">Account</Link>
					</Menu.Item>
					<Menu.Item key="2" icon={<VideoCameraOutlined />}>
						nav 2
					</Menu.Item>
					<Menu.Item key="3" icon={<UploadOutlined />}>
						nav 3
					</Menu.Item>
					<Menu.Item key="4" icon={<BarChartOutlined />}>
						nav 4
					</Menu.Item>
					<Menu.Item key="5" icon={<CloudOutlined />}>
						nav 5
					</Menu.Item>
					<Menu.Item key="6" icon={<AppstoreOutlined />}>
						nav 6
					</Menu.Item>
					<Menu.Item key="7" icon={<TeamOutlined />}>
						nav 7
					</Menu.Item>
					<Menu.Item key="8" icon={<ShopOutlined />}>
						nav 8
					</Menu.Item>
				</Menu>
			</>
		);
	}
}

export default SideBar;