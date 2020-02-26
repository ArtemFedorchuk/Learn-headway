import React from 'react';

import styles from './styles.module.css'
import { Button } from 'antd';

const CardLeft = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardFlex}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <Button type="primary" ghost>
          Open
        </Button>
        <div className={styles.line}>
        </div>
      </div>
    </div>
  )
};

export default CardLeft;