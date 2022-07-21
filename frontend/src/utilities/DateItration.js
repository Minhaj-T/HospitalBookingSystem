import moment from 'moment';
require('twix');
export const iterateDate = () => {
  try {
    const start = moment().format('YYYY-M-D');
    const end = moment().add(6, 'days').format('YYYY-M-D');
    var itr = moment.twix(new Date(start), new Date(end)).iterate('days');
    var range = [];
    while (itr.hasNext()) {
      const data = itr.next().format('YYYY-M-D');
      range.push({ data });
    }
    return range;
  } catch (error) {
    console.log(error);
  }
};

export const calculateTime = (start, end) => {
  var startTime = moment(start, 'HH:mm:ss a');
  var endTime = moment(end, 'HH:mm:ss a');
  var duration = moment.duration(endTime.diff(startTime));
  var minutes = parseInt(duration.asMinutes());
  let chargesPerMinute = 16.667;

  const result = Math.round(chargesPerMinute * minutes);
  return result;
};
