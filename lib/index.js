"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimestamp = exports.getTwodigitFormat = void 0;
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
const getTwodigitFormat = (data) => {
    // Check if the data is greater than 9
    // If true, return the data as it is
    // If false, add a leading zero to the data and return it as a string
    if (data > 99) {
        // Handle the case when the data is three digits
        return null;
    }
    return data > 9 ? data : "0" + data;
};
exports.getTwodigitFormat = getTwodigitFormat;
/**
 * Converts a Unix timestamp to a string representing the date and time in the format: DD-MM-YYYY HH:mm.
 * @param {number} timestamp - The Unix timestamp to be formatted.
 * @example
 * formatTimestamp(1687244413); returns 20-6-2023 07:00
 * @returns {string} - The formated string representation of date and time.
 */
const formatTimestamp = (timestamp) => {
    // Create Date objects for the current time and the specified timestamp
    let currentTime = new Date();
    let Time = new Date(timestamp * 1000);
    // Extract date components
    let date = (0, exports.getTwodigitFormat)(Time.getDate());
    let month = (0, exports.getTwodigitFormat)(Time.getMonth() + 1);
    let year = Time.getFullYear();
    // Extract time components
    let hours = (0, exports.getTwodigitFormat)(Time.getHours());
    let minutes = (0, exports.getTwodigitFormat)(Time.getMinutes());
    // Return the formatted string representation of date and time
    return (date +
        '-' +
        month +
        '-' +
        year +
        ' ' +
        hours +
        ':' +
        minutes +
        ' ');
};
exports.formatTimestamp = formatTimestamp;
