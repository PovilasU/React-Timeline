import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';

const eventsevents = [
  { time: '001', title: 'title 1', description: 'item 1' },
  { time: '002', title: 'title 2', description: 'item 2' },
  { time: '003', title: 'title 3', description: 'item 3' },
  { time: '004', title: 'title 4', description: 'item 4' },
  { time: '005', title: 'title 5', description: 'item 5' },
];

const eventsArr = [1, 2, 3, 4, 5];

const Timeline = () => {
  const [events, setEvents] = useState([]);

  const eventItems = eventsevents.map((event, idx) => {
    return <TimelineItem event={event} key={idx} />;
  });

  const rotateArr = (arr) => {
    arr.push(arr.shift());
    return arr;
  };

  useEffect(() => {
    setTimeout(() => {
      if (eventsArr.length !== 0) {
        let temp = eventsArr.shift();
        setEvents((events) => [...events, temp]);
      } else {
        setEvents((events) => {
          let tempEventsArr = [...events];
          const testArr = rotateArr(tempEventsArr);
          return [...testArr];
        });
      }
    }, 2000);
  }, [events]);

  return (
    <div>
      <p>Timeline component</p>
      <p> events:{events}</p>
    </div>
  );
};

export default Timeline;
