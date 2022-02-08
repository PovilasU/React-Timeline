import React from 'react';
const TimelineItem = ({ event: { time, title, description } }) => {
  return (
    <div>
      <p>time {time}</p>
      <p>title {title}</p>
      <p>description {description}</p>
    </div>
  );
};

export default TimelineItem;
