import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRoutine } from '../apiAdapters';

const CreateRoutine = ({ token }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const navigate = useNavigate();

  async function postNewRoutine() {
    try {
      const result = await createRoutine(token, name, goal, isPublic);
      if (result.id) {
        setName('');
        setGoal('');
        setIsPublic(false);
        navigate('/my-routines');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="center-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postNewRoutine();
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

export default CreateRoutine;
