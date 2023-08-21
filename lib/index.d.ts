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
export declare const getTwodigitFormat: (data: number) => string | number | null;
/**
 * Converts a Unix timestamp to a string representing the date and time in the format: DD-MM-YYYY HH:mm.
 * @param {number} timestamp - The Unix timestamp to be formatted.
 * @example
 * formatTimestamp(1687244413); returns 20-6-2023 07:00
 * @returns {string} - The formated string representation of date and time.
 */
export declare const formatTimestamp: (timestamp: number) => string;
