import React from 'react';
import 'antd/dist/antd.css';
import classes from './ProgressTree.module.css';
import { Timeline, Icon } from 'antd';

const ProgressTree = (props, ...rest) => {
  return (
    <Timeline mode="alternate" className={classes.treeWrapper}>
      <div><Icon type="global" className={classes.globalIcon}/></div>
      <Timeline.Item>
      </Timeline.Item>
      <Timeline.Item>
      </Timeline.Item>
      <Timeline.Item
        dot={
          <Icon type="star" className={classes.starIcon} />
        }
      >
      </Timeline.Item>
      <Timeline.Item>
      </Timeline.Item>
      <Timeline.Item className={classes.pRight}>

      </Timeline.Item>
      <Timeline.Item color="green" className={classes.pLeft}>

      </Timeline.Item>
      <Timeline.Item
        className={classes.pRight}
        dot={
          <Icon type="clock-circle-o" className={classes.treeIcon} />
        }
      >

      </Timeline.Item>
      <Timeline.Item color="red" className={classes.pLeft}>

      </Timeline.Item>
      <Timeline.Item className={classes.pRight}>

      </Timeline.Item>
      <Timeline.Item
        className={classes.pLeft}
        dot={
          <button className={classes.treeIconBtn}>

          </button>
        }
      >

      </Timeline.Item>
      <Timeline.Item className={classes.position}>

      </Timeline.Item>
      <Timeline.Item>
      </Timeline.Item>
    </Timeline>
  )
};
export default ProgressTree;
