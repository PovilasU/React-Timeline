import React, { useCallback, useState } from 'react';
const TimelineItem = ({ event, openModal }) => {
  const { time, title, description, side } = event;

  return (
    <div className={`timeline-item-${side}`}>
      <div className="timeline-item-content">
        {time && (
          <div className="timeline-time-container">
            <time>{time}</time>
          </div>
        )}

        {title && <h5>{title}</h5>}
        {description && <p>{description}</p>}
        <span className="circle" />
        <button
          onClick={() => {
            openModal(time, title, description);
          }}
        >
          modal
        </button>
      </div>
    </div>
  );
};

export default TimelineItem;
