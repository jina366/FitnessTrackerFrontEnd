export function saveToLocalStorage(token) {
  localStorage.setItem('token', token);
}

export function getTokenFromLocalStorage() {
  const oldToken = localStorage.getItem('token');

  if (!oldToken) {
    oldToken = '';
  }

  return oldToken;
}
