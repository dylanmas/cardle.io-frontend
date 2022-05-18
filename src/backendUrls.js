const baseUrl = "http://localhost:3001/api/";
const loginUrl = baseUrl + "login";
const signupUrl = baseUrl + "signup";

const UserUrl = (email) => {
  return baseUrl + `user/${email}`;
};

const timeUrl = baseUrl + "time";

export { baseUrl, loginUrl, signupUrl, UserUrl, timeUrl };
