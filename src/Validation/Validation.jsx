export const isRequired = (value, checkErr, key) => {
    if (!value) {
      checkErr[key] = true;
    }
    return checkErr;
  };