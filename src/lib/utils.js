import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function timeFormat(time) {
  const militaryTime = time;

  // Split the time string into hours, minutes, and seconds
  const [hours, minutes, seconds] = militaryTime.split(":");

  // Convert hours to 12-hour format
  let formattedHours = hours % 12;
  formattedHours = formattedHours === 0 ? 12 : formattedHours; // Handle midnight (00:00)

  // Determine whether it's AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Construct the formatted time string
  const formattedTime = `${formattedHours}:${minutes} ${period}`;

  return formattedTime; // Output: 6:30:00 PM
}
