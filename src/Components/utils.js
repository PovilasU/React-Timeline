const danceMoves = [
  'Right foot, lets stomp',
  'Left foot, lets stomp',
  'Turn to the right',
  'Turn to the left',
  'Criss cross',
  'Clap your hands',
];
const titles = [
  'Most immediate',
  'Yet Another',
  'No rush',
  'Important',
  'Reminder',
];

const randomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
export const randomEvent = () => {
  let today = new Date();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  let randomEvent = {
    time: time,
    title: randomItem(titles),
    description: randomItem(danceMoves),
  };
  randomEvent.time = time;
  return randomEvent;
};
