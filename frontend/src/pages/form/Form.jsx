//Form.jsx
import React, { useState } from "react";
import { CustomInput, CustomSection, CustomButton } from "../../components";
import axios from "axios";
const Form = () => {
  const [data, setData] = useState({
    student_id: "",
    first_name: "",
    last_name: "",
    age: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/students/new",
        data
      );
      console.log(response.data);

      setData({
        student_id: "",
        first_name: "",
        last_name: "",
        age: "",
      });
    } catch (err) {
      console.error(`Error submitting form: ${err}`);
    }
  }
  const inputStyle = "mt-2 mb-2 p-2";

  return (
    <CustomSection
      tag="form"
      title="Student Info"
      className="bg-gray-300 p-4 flex items-center justify-center flex-col"
      onSubmit={handleSubmit}
    >
      <CustomInput
        type="number"
        className={inputStyle}
        placeholder="Student ID"
        name="student_id"
        value={data.student_id}
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        className={inputStyle}
        placeholder="First Name"
        name="first_name"
        value={data.first_name}
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        className={inputStyle}
        placeholder="Last Name"
        name="last_name"
        value={data.last_name}
        onChange={handleChange}
      />
      <CustomInput
        type="number"
        className={inputStyle}
        placeholder="Age"
        name="age"
        value={data.age}
        onChange={handleChange}
      />
      <CustomButton
        text="SUBMIT"
        className="bg-blue-400 text-white p-2"
        type="submit"
      />
    </CustomSection>
  );
};

export default Form;
