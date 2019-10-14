const getDuration = (value) => {
  let updatedDuration;
  if (value && value != null) {
    if (value > 0) {
      const minutes = Math.floor(value / 60);
      const seconds = Math.floor(value - minutes * 60);

      if (minutes > 60) {
        const hours = Math.floor(minutes / 60);
        const newmins = Math.round(minutes - hours * 60);
        updatedDuration =
          `${hours
          }:${
          newmins < 10 ? `0${newmins}` : newmins
          }:${
          seconds < 10 ? `0${seconds}` : seconds}`;
      } else {
        updatedDuration =
          `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
      }
    } else {
      updatedDuration = "0:00";
    }
  } else {
    updatedDuration = "";
  }
  return updatedDuration;
}

export default getDuration;