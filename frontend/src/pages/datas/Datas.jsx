import React, { useState, useEffect } from "react";
import axios from "axios";
import { CustomSection, CustomButton } from "../../components";

const Datas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students") // Assuming your server endpoint is /api/users
      .then((res) => {
        console.log("Data from API:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [data]);

  function handleDelete(id) {
    axios.delete(`http://localhost:3000/students/${id}`);
  }

  return (
    <>
      <CustomSection
        tag="main"
        className="bg-blue-300 p-4 flex items-center justify-center flex-col"
        title="Datas"
      >
        <ul>
          {data.map((data, index) => {
            return (
              <li key={index}>
                {data.student_id} - {data.first_name} - {data.last_name} -{" "}
                {data.age} -{" "}
                <CustomButton
                  method={() => handleDelete(data.student_id)}
                  className="bg-red-500 border border-solid border-black p-2"
                  text="DELETE"
                />
              </li>
            );
          })}
        </ul>
      </CustomSection>
    </>
  );
};

export default Datas;
