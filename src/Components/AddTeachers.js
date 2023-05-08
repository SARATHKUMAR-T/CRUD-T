import React, { useState } from "react";
import Base from "../base/base";
import { useHistory } from "react-router-dom";

function AddTeachers({ teachers, setTeachers }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");

  const createTeacher = async () => {
    const newTeacher = {
      name: name,
      experience: experience,
      qualification: qualification,
      gender: gender,
    };

    const response = await fetch(
      "https://6458a4528badff578ef68b00.mockapi.io/teachers",
      {
        method: "POST",
        body: JSON.stringify(newTeacher),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setTeachers([...teachers, data]);
    history.push("/teachers");
  };

  return (
    <Base
      title={"Add New Teacher"}
      description={"We can able to add new students data here"}
    >
      <div className="edit p-4 flex items-center justify-center pr-8  ">
        <div className="bg-gray-200 flex items-end flex-col rounded-lg shadow-xl p-8 px-16 gap-8 w-94">
          <div className="flex gap-2">
            <label for="name" className="pt-2">
              Name:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Name"
              type="text"
              id="name"
              value={name}
              required
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label for="experience" className="pt-2">
              Experience:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Experience"
              type="text"
              id="experience"
              required
              value={experience}
              onChange={e => setExperience(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label for="gender" className="pt-2">
              Gender:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Gender"
              type="text"
              id="gender"
              required
              value={gender}
              onChange={e => setGender(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label for="qualification" className="pt-2">
              Qualification:
            </label>
            <input
              className="rounded-md  p-2 outline-none focus:ring-inset duration-300 transition-all focus:ring-[#ff922b] focus:ring-4"
              placeholder="Enter Qualifiaction"
              type="text"
              id="qualification"
              required
              value={qualification}
              onChange={e => setQualification(e.target.value)}
            />
          </div>

          <button
            className="mx-auto mt-4 p-2 rounded-md shadow-xl w-1/2 bg-green-600 duration-300 transition-all mb-2 hover:scale-105 hover:text-white"
            onClick={createTeacher}
            type="submit"
          >
            Create Teacher
          </button>
        </div>
      </div>
    </Base>
  );
}

export default AddTeachers;
