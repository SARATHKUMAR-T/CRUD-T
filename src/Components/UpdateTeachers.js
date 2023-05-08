import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Base from "../base/base";
import { useHistory } from "react-router-dom";

function UpdateTeachers({ teachers, setTeachers }) {
  const { id } = useParams();
  const editTeacher = teachers[id];
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const history = useHistory();

  useEffect(() => {
    setName(editTeacher.name);
    setExperience(editTeacher.experience);
    setGender(editTeacher.gender);
    setQualification(editTeacher.qualification);
  }, [editTeacher]);

  async function UpdateTeacher() {
    const updatedObject = {
      name: name,
      experience:experience,
      gender: gender,
      qualification: qualification,
    };
    const response = await fetch(
      `https://6458a4528badff578ef68b00.mockapi.io/${editTeacher.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (data) {
      teachers[id] = updatedObject;
      setTeachers([...teachers]);
      history.push("/teachers");
    }
  }

  return (
    <Base title={"Edit a Teacher"} description={"Edit Teachers data here"}>
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
              placeholder="Enter qualification"
              type="text"
              id="qualification"
              value={qualification}
              onChange={e => setQualification(e.target.value)}
            />
          </div>

          <button
            className="mx-auto mt-4 p-2 rounded-md shadow-xl w-1/2 bg-green-600 duration-300 transition-all mb-2 hover:scale-105 hover:text-white"
            onClick={UpdateTeacher}
          >
            Update Teacher
          </button>
        </div>
      </div>
    </Base>
  );
}

export default UpdateTeachers;
