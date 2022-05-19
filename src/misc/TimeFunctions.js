import axios from "axios";
import { timeUrl } from "../backendUrls";

export const convertToMs = (timeInString) => {
  let milliseconds;

  if (timeInString.split(":").length === 2) {
    /* For MM:SS */
    milliseconds =
      Number(timeInString.split(":")[0]) * 60000 +
      Number(timeInString.split(":")[1]) * 1000;
  } else if (timeInString.split(":").length === 3) {
    /* For HH:MM:SS */
    milliseconds =
      Number(timeInString.split(":")[0]) * 3600000 +
      Number(timeInString.split(":")[1]) * 60000 +
      Number(timeInString.split(":")[2]) * 1000;
  } else if (timeInString.split(":").length === 4) {
    /* For DD:HH:MM:SS */
    milliseconds =
      Number(timeInString.split(":")[0]) * 86400000 +
      Number(timeInString.split(":")[1]) * 3600000 +
      Number(timeInString.split(":")[2]) * 60000 +
      Number(timeInString.split(":")[3]) * 1000;
  }

  return milliseconds;
};

export const msToHMS = (ms) => {
  // 1- Convert to seconds:
  let seconds = ms / 1000;
  // 2- Extract hours:
  const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
  seconds = seconds % 3600; // seconds remaining after extracting hours
  // 3- Extract minutes:
  const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
  // 4- Keep only seconds not extracted to minutes:
  seconds = seconds % 60;
  return hours + ":" + minutes + ":" + seconds;
};

export const PostTime = (email, time) => {
  axios
    .post(timeUrl, {
      email: email,
      time: convertToMs(time),
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
