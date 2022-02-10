import React from 'react';
const TimelineItem = ({ event }) => {
  const { time, title, description } = event;
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        {time && (
          <div className="timeline-time-container">
            <time>{time}</time>
          </div>
        )}
        {title && <h5>{title}</h5>}
        {description && <p>{description}</p>}
        <span className="circle" />
      </div>
    </div>
  );
};

export default TimelineItem;
