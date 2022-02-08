import React from 'react';
const TimelineItem = ({ event: { time, title, description } }) => {
  return (
    <div>
      <p>
        time {time}, title {title}, description {description}
      </p>
    </div>
  );
};

export default TimelineItem;
