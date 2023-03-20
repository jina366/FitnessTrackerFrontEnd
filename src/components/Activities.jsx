import React, { useState, useEffect } from "react";
import { getAllActivities } from "../apiAdapters";
import { useNavigate } from "react-router-dom"

const Activities = ({token}) => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  async function getAllActivityPage() {
    try {
      const result = await getAllActivities();
      setActivities(result)
      return(result)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllActivityPage()
  },[])

  return(
    <div>
        <h1>Activities</h1>
        {token ? <button onClick={() => {
            navigate('/activities/new')
        }}>Create New Activity</button> : null}
        <div>
            {activities.map((activity, idx) => {
                return(
                    <div key={`ActivityPage${idx}`}>
                    <h2>{activity.name}</h2>
                    <p>{activity.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
};

export default Activities;
