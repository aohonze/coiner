import { Menu, Avatar, Dropdown } from 'antd';
import React from 'react'
import {
	AppstoreOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	PieChartOutlined,
	DesktopOutlined,
	ContainerOutlined,
	UserOutlined,
} from '@ant-design/icons';

interface Props {

}

const accountMenu = (
	<Menu>
		<Menu.Item>
			退出登录
		</Menu.Item>
		<Menu.Item>
			账户设置
		</Menu.Item>
	</Menu>
);
class HeaderNav extends React.Component<Props, {}>{
	state = {
		collapsed: false,
	};

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<>
				<div className="index-layout-header__right">
					<Dropdown overlay={accountMenu} placement="bottomCenter" arrow overlayClassName="account-menu">
						<Avatar icon={<UserOutlined />} />
					</Dropdown>
				</div>
			</>
		);
	}
}

export default HeaderNav;