import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateRoutine } from '../apiAdapters';

const UpdateRoutine = ({ token, myRoutineEdit, setMyRoutineEdit }) => {
  const [isPublic, setIsPublic] = useState(myRoutineEdit.isPublic);
  const [name, setName] = useState(myRoutineEdit.name);
  const [goal, setGoal] = useState(myRoutineEdit.goal);
  const navigate = useNavigate();
  const routineId = myRoutineEdit.routineId;

  async function updateMyRoutine(isPublic, name, goal) {
    try {
      const result = await updateRoutine(
        token,
        isPublic,
        name,
        goal,
        routineId
      );
      setMyRoutineEdit({});
      navigate('/my-routines');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="center-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateMyRoutine(isPublic, name, goal);
        }}
      >
        <h1>Public:</h1>
        <input
          name="public"
          type="checkbox"
          value={isPublic}
          onChange={(e) => {
            setIsPublic(e.target.value);
          }}
        />
        <h1>Name:</h1>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h1>Goal:</h1>
        <input
          name="goal"
          type="text"
          value={goal}
          onChange={(e) => {
            setGoal(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateRoutine;
