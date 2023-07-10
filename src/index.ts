import { MONTH } from "./constants";

/**
* Checks if the value provided is none of this - null,undefined,empty string,"undefined",empty array as string
* @param {any} obj - The value to be checked.
* @example
* isSet("null"); returns false
* @example
* isSet("some value"); returns true
* @return {Boolean} - true if the value is set, false otherwise.
*/
export const isSet = (obj: any): boolean => {
    // check if the value is provided is any of the conditions.
    if (obj && obj !== "null" && obj !== undefined && obj !== "" && obj !== "[]" && obj !== "undefined" && typeof obj !== "undefined") {
        return true;
    }
    return false;
};