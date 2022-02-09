import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';
import { randomEvent } from './utils';

const Timeline = () => {
  const [events, setEvents] = useState([]);

  const eventItems = events.map((event, idx) => {
    return <TimelineItem event={event} key={idx} />;
  });

  useEffect(() => {
    setTimeout(() => {
      if (events.length < 5) {
        const newEvent = randomEvent();
        let newEvents = [...events];
        newEvents.unshift(newEvent); //Add items to the beginning of an array
        setEvents(() => [...newEvents]);
      } else {
        let newEvent = randomEvent();
        let newEvents = [...events];
        newEvents.pop(); //Remove an item from the end of an array
        newEvents.unshift(newEvent); //Remove an item from the beginning of an array
        setEvents([...newEvents]);
      }
    }, 5000);
  });

  return (
    <div>
      <p>Timeline component</p>
      <div> eventItems:{eventItems && eventItems}</div>
    </div>
  );
};

export default Timeline;
