import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Register,
  Login,
  Routines,
  MyRoutines,
  UpdateRoutine,
  CreateRoutine,
  UpdateRoutineActivity,
  Activities,
  CreateActivity,
} from './';
import { Routes, Route } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../utils/localStorage';

const Main = () => {
  const [token, setToken] = useState('');
  const [myRoutineEdit, setMyRoutineEdit] = useState({});
  const [myRoutineActivityEdit, setMyRoutineActivityEdit] = useState({});

  useEffect(() => {
    setToken(getTokenFromLocalStorage());
  }, []);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div id="main">
      <Navbar setToken={setToken} token={token} />
      <Routes>
        <Route
          path="/users/register"
          element={<Register setToken={setToken} />}
        />
        <Route path="/users/login" element={<Login setToken={setToken} />} />
        <Route path="/routines" element={<Routines />} />
        <Route
          path="/my-routines"
          element={
            <MyRoutines
              token={token}
              setMyRoutineEdit={setMyRoutineEdit}
              setMyRoutineActivityEdit={setMyRoutineActivityEdit}
            />
          }
        />
        <Route
          path="/my-routines/new"
          element={<CreateRoutine token={token} />}
        />
        <Route
          path="/my-routines/update"
          element={
            <UpdateRoutine
              token={token}
              myRoutineEdit={myRoutineEdit}
              setMyRoutineEdit={setMyRoutineEdit}
            />
          }
        />
        <Route
          path="/my-routines/update-routine-activity"
          element={
            <UpdateRoutineActivity
              token={token}
              myRoutineActivityEdit={myRoutineActivityEdit}
              setMyRoutineActivityEdit={setMyRoutineActivityEdit}
            />
          }
        />
        <Route path="/activities" element={<Activities token={token}/>}/>
        <Route path="/activities/new" element={<CreateActivity token={token}/>}/>
        <Route path="*" element={null} />
      </Routes>
    </div>
  );
};

export default Main;
