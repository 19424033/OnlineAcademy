export default function authHeader(accessToken) {
  if (accessToken) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    return { 'x-access-token': accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}