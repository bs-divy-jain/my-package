import { MONTH } from "./constants";

/**
 * Converts a number to a two-digit format by adding a leading zero if necessary.
 * @param {number} data - The number to be formatted.
 * @example 
 * getTwodigitFormat(8); returns 08
 * getTwodigitFormat(9); returns 09
 * @example
 * getTwodigitFormat(10); returns 10
 * @returns {string | number} - The formatted number as a string if less than 10, otherwise the original number.
 */
export const getTwodigitFormat = (data: number): string | number | null=> {
    // Check if the data is greater than 9
    // If true, return the data as it is
    // If false, add a leading zero to the data and return it as a string
    if (data > 99) {
        // Handle the case when the data is three digits
        return null;
    }
    return data > 9 ? data : "0" + data;
};

/**
 * Converts a Unix timestamp to a string representing the date and time in the format: DD-MM-YYYY HH:mm.
 * @param {number} timestamp - The Unix timestamp to be formatted.
 * @example
 * formatTimestamp(1687244413); returns 20-6-2023 07:00
 * @returns {string} - The formated string representation of date and time.
 */
export const formatTimestamp = (timestamp: number): string => {
    // Create Date objects for the current time and the specified timestamp
    let currentTime = new Date();
    let Time = new Date(timestamp * 1000);

    // Extract date components
    let date = getTwodigitFormat(Time.getDate());
    let month = getTwodigitFormat(Time.getMonth() + 1);
    let year = Time.getFullYear();

    // Extract time components
    let hours = getTwodigitFormat(Time.getHours());
    let minutes = getTwodigitFormat(Time.getMinutes());

    // Return the formatted string representation of date and time
    return (
        date +
        '-' +
        month +
        '-' +
        year +
        ' ' +
        hours +
        ':' +
        minutes +
        ' '
    );
};

/**
 * Converts hours to twelve hour format.
 * @param {number} hours - The hours to be formatted.
 * @example 
 * tweleveHourFormat(13); returns 01
 * tweleveHourFormat(9); returns 09
 * @returns {string} - The formatted hour as a string.
 */
export const tweleveHourFormat = (hours: number): string => {
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours.toString().padStart(2, "0");
};

// final test