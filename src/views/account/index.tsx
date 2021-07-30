import { Menu, Spin, Skeleton, Result, Button } from 'antd';
import React from 'react'
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

}

class Account extends React.Component<Props, {}> {

	render() {
		return (
			<>
				<Spin />
				<Skeleton />
				<Result
					status="404"
					title="404"
					subTitle="Sorry, the page you visited does not exist."
					extra={<Button type="primary">Back Home</Button>}
				/>,
			</>
		);
	}
}

export default Account;