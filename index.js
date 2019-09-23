const formatDuration = (seconds) => {
  if (seconds === 0) return 'now';

  const dateTime = [60 * 60 * 24 * 365, 60 * 60 * 24, 60 * 60, 60, 1];
  const dateWords = ['year', 'day', 'hour', 'minute', 'second'];
  let ans = '', am, con;

  for (let i = 0; i < dateTime.length; i++) {
    am = Math.floor(seconds / dateTime[i]);
    seconds %= dateTime[i];

    if (am !== 0) {
      con = '';

      if (ans !== '') {
        if (seconds === 0) con = ' and ';
        else con = ', ';
      }

      ans += con + am + ' ' + dateWords[i];
      ans += am > 1 ? 's' : '';
    }
  }

  return ans;
}