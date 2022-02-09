import React from 'react';
const TimelineItem = ({ event }) => {
  const { time, title, description } = event;
  return (
    <div>
      {time && <span> time:{time}</span>},{title && <span> title:{title}</span>}
      ,{description && <span> description:{description}</span>}
    </div>
  );
};

export default TimelineItem;
