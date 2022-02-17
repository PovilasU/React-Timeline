import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';
import { randomEvent } from './utils';

const Timeline = () => {
  const [events, setEvents] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();

  const openModal = (time, title, description) => {
    setModal(true);
    setSelectedEvent({ time, title, description });
  };
  const eventItems = events.map((event, idx) => {
    return <TimelineItem openModal={openModal} event={event} key={idx} />;
  });

  useEffect(() => {
    setTimeout(() => {
      if (events.length < 5) {
        let side = 'right';
        if (events.length % 2) {
          side = 'left';
        }
        const newEvent = randomEvent(side);
        let newEvents = [...events];
        newEvents.unshift(newEvent); //Add items to the beginning of an array
        setEvents(() => [...newEvents]);
      } else {
        let side = 'left';
        if (events[4].side === side) {
          side = 'right';
        }
        let newEvent = randomEvent(side);
        let newEvents = [...events];
        newEvents.pop(); //Remove an item from the end of an array
        newEvents.unshift(newEvent); //Remove an item from the beginning of an array
        setEvents([...newEvents]);
      }
    }, 5000);
  });

  return (
    <div>
      {modal && (
        <div className="modal-container">
          <div className="modal">
            {selectedEvent.time} {selectedEvent.title}{' '}
            {selectedEvent.description}
          </div>
        </div>
      )}
      <div className="timeline">{eventItems && eventItems}</div>
    </div>
  );
};

export default Timeline;
