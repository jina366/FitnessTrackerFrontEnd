import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyUser, deleteRoutine } from "../apiAdapters";

const MyRoutines = ({ token, setMyRoutineEdit }) => {
  const [routine, setRoutine] = useState([]);
  const navigate = useNavigate();

  async function getRoutines() {
    try {
      let result = null;

      console.log("token", token);
      if (token) {
        result = await getMyUser(token);
        setRoutine(result.allMyRoutines);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async function removeRoutine(post) {
    try {
      const result = await deleteRoutine(token, post.id);
      if (result.id) {
        const routineCopy = [...routine].filter((r, idx) => {
          return r.id !== post.id;
        });
        setRoutine(routineCopy);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRoutines();
  }, [token]);

  return (
    <div id="full-routines-page">
      <div id="my-routine-header">
        <h1>My Routines</h1>
        <button
          onClick={() => {
            navigate("/my-routines/new");
          }}
        >
          Create New Routine
        </button>
      </div>
      <div id="routine-page-container">
        {routine.map((post, idx) => {
          return (
            <div className="my-routine-container" key={`my routine${idx}`}>
              <div id="routine-container">
                <h2>Name: {post.name}</h2>
                <h3>Goal: {post.goal}</h3>
                <h3>Creator: {post.creatorName}</h3>
                {post.activities.map((activity, idx) => {
                  return (
                    <div id="routine-activity-container" key={`activity${idx}`}>
                      <h4>Name: {activity.name}</h4>
                      <h5>{activity.description}</h5>
                      <h5>Duration: {activity.duration}</h5>
                      <h5>Count: {activity.count}</h5>
                    </div>
                  );
                })}
              </div>
              <div className="my-routine-buttons">
                <button
                  onClick={() => {
                    setMyRoutineEdit({
                      name: post.name,
                      goal: post.goal,
                      isPublic: post.isPublic,
                      routineId: post.id,
                    });
                    navigate("/my-routines/update");
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    removeRoutine(post);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyRoutines;
