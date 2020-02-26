import React, { useState } from 'react';
import 'antd/dist/antd.css';
import classes from './SideBar.module.css';
import { Layout, Menu, Icon, Input } from 'antd';
import { ProgressTreeTest } from '../index';

import sky from '../../assets/images/sky.png';
import stars from '../../assets/images/stars.gif';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = (props, ...rest) => {
  const { Search } = Input;
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

    return (
      <Layout style={{ minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className={classes.searchWrap} >
            <Search
              placeholder="Search.."
              onSearch={value => console.log(value)}
              className={classes.search}
            />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={classes.contentWrapper}>
          <div className={classes.finish}>
            <img src={sky} alt='sky'/>
          </div>
          <div className={classes.finish}>
            <img src={stars} alt='stars'/>
          </div>

          <div  className={classes.contentTree}>
            {/*<ProgressTree className={classes.contentTree} />*/}
            <ProgressTreeTest className={classes.contentTree} />
          </div>
          <div className={classes.greenStart}>
          </div>

        </Layout>
      </Layout>
    );
};

export default SideBar;
