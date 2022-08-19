export const validateEmail = (email = '') => {
  if (!email) return 'Please enter email';
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!re.test(email)) {
    return 'Enter valid email';
  }
};
