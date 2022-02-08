import React from 'react';
import TimelineItem from './TimelineItem';

const eventsArr = [
  { time: '001', title: 'title 1', description: 'item 1' },
  { time: '002', title: 'title 2', description: 'item 2' },
  { time: '003', title: 'title 3', description: 'item 3' },
  { time: '004', title: 'title 4', description: 'item 4' },
  { time: '005', title: 'title 5', description: 'item 5' },
];

const Timeline = () => {
  const events = eventsArr.map((event, idx) => {
    return <TimelineItem event={event} key={idx} />;
  });
  return (
    <div>
      <p>Timeline component</p>
      {/* <TimelineItem /> */}
      {events}
    </div>
  );
};

export default Timeline;
