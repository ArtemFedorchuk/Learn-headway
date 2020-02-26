import React, { useState } from 'react';
import classes from './ProgressTreeTest.module.css';
import hookImg from '../../assets/images/hookImg.png';
import reduxImg from '../../assets/images/reduxImg.png';
import {
  CardRight,
  CardLeft
} from '../index';

const ProgressTreeTest = (props) => {

  const lessons = [
    {
      id: 0,
      title: "Введение",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: reduxImg,
      duration: 360,
      timelines: [
        {
          id: 0,
          order: 0,
          videoId: 'vcGrFNXy3zk',
          title: 'Создание и настройка... ',
          start: 5 * 60,
          end: 10 * 60,
        }

      ]
    },
    {
      id: 1,
      title: "Введение",
      description: "lesson 2",
      icon: hookImg,
      duration: 360,
      timelines: [
        {
          id: 0,
          order: 0,
          videoId: 'vcGrFNXy3zk',
          title: 'Создание и настройка... ',
          start: 5 * 60,
          end: 10 * 60,
        }

      ]
    }
  ];

  const [visible, setVisible] = useState(true);

  const handlerVisible = () => {
    setVisible(!visible)
  };

  return (
    <section className={classes.timeline}>
        {lessons.map(lesson  => (
          <article>
            <div key={lesson.id} className={classes.inner}>
               <span className={classes.date}>
                 <button onClick={handlerVisible}>
                   <img src={lesson.icon} alt='hookImg'/>
                 </button>
               </span>
              {visible ?
                  lesson.id % 2 ? (
                    <div className={classes.card}>
                      <CardRight />
                    </div>
                  ) : (
                    <div className={`${classes.cardLeft}`}>
                       <CardLeft />
                    </div>
                  )
               : null}
            </div>
          </article>
        ))}
    </section>
  )
};

export default ProgressTreeTest;