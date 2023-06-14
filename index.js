const isSet = (obj) => {
  if (obj && obj != "null" && obj != undefined && obj !== "" && obj != "[]" && obj != [] && obj != {} && obj !== "") {
      if (typeof obj != "undefined") {
          return true;
      }
  }
  return false;
};

module.exports = isSet;
