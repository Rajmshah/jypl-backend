export default {
  uploadUrl: 'http://fileupload.mtcmarudharcup.com/api/upload/',
  readFileUrl: 'http://fileupload.mtcmarudharcup.com/api/upload/readFile?file=',
  // uploadUrl: 'http://localhost:1330/api/upload/',
  // readFileUrl: 'http://localhost:1330/api/upload/readFile?file=',

  setUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
  },
  removeUser() {
    localStorage.removeItem('user');
  },
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  },
};
