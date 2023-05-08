// import React, { useState } from 'react'
import Base from "../base/base";
// import data from '../Data/data'
// import AddStudents from './AddStudents';
// import UpdateStudents from './UpdateStudents';
import { useHistory } from "react-router-dom";

function Teachers({ teachers,setTeachers }) {
  const history = useHistory();
  // delete functionality
  const deleteTeacher = async (teachId) => {
    const response = await fetch(
      `https://6458a4528badff578ef68b00.mockapi.io/teachers/${teachId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    if (data) {
      const remainingTeachers = teachers.filter(
        (teach, idx) => teach.id !== teachId
      );

      setTeachers(remainingTeachers);
    }
  };

  return (
    <Base
      title={"Teachers Dashboard"}
      description={"The page contains all Teachers data"}
    >
      <div className="card-container  sm:grid-cols-1  grid md:grid-cols-3 gap-12 py-6">
        {teachers.map((teach, idx) => (
          <div
            className="card  rounded-lg bg-gray-200 shadow-xl p-6 duration-300 hover:scale-105"
            key={idx}
          >
            <div className="content flex flex-col uppercase gap-4 mb-12">
              <h3>
                <span className="text-gray-500"> Name :</span>
                {teach.name}
              </h3>
              <p>
                <span className="text-gray-500">EXPERIENCE :</span> {teach.experience}
              </p>
              <p>
                <span className="text-gray-500">GENDER :</span> {teach.gender}
              </p>
              <p>
                <span className="text-gray-500">QUALIFICATION :</span>{" "}
                {teach.qualification}
              </p>
            </div>

            <div className="control flex flex-col items-center gap-4 ">
              <button
                className=" bg-gradient-to-r from-green-900 via-green-400 to-green-900 rounded-md w-3/4 p-2 transition-all duration-300 hover:scale-105 hover:opacity-80 hover:text-white"
                onClick={() => history.push(`/editteach/${teach.id-1}`)}
              >
                EDIT
              </button>

              <button
                className="bg-gradient-to-r from-red-600 via-rose-600 to-blue-600 rounded-md p-2 w-3/4 transition-all duration-300 hover:scale-105 hover:opacity-80 hover:text-white"
                onClick={() => deleteTeacher(teach.id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}

export default Teachers;
