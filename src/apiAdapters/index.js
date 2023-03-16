const BASE = "http://fitnesstrac-kr.herokuapp.com/api";

export const registerAccount = async (username, password) => {
  try {
    const response = await fetch(`${BASE}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const loginAccount = async (username, password) => {
  try {
    const response = await fetch(`${BASE}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAllRoutines = async () => {
  try {
    const response = await fetch(`${BASE}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
};
