import React, { useState } from 'react';
import { addActivityToRoutine } from '../apiAdapters';

function AddActivityToRoutine({
  activities,
  routineId,
  setShowActivity,
  showActivity,
}) {
  const [selectedActivity, setSelectedActivity] = useState(1);
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);

  async function onFormSubmit() {
    const result = await addActivityToRoutine(
      routineId,
      selectedActivity,
      count,
      duration
    );

    console.log('add activity result', result);

    if (result.id) {
      setSelectedActivity(1);
      setCount(0);
      setDuration(0);
      setShowActivity({
        ...showActivity,
        [routineId]: false,
      });
    }
  }

  return (
    <div id="routine-activity">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit();
        }}
      >
        <h1>Select Activity</h1>
        <select
          name="add-activity"
          onChange={(evt) => {
            console.log(evt.target.value);
            setSelectedActivity(evt.target.value);
          }}
        >
          {activities.map((activity, idx) => {
            return (
              <option key={`activity${idx}`} value={activity.id}>
                {`${activity.name}`}
              </option>
            );
          })}
        </select>
        <h1>Count:</h1>
        <input
          name="count"
          type="number"
          min="0"
          max="100"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <h1>Duration (in minutes):</h1>
        <input
          name="duration"
          type="number"
          min="0"
          max="100"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddActivityToRoutine;
