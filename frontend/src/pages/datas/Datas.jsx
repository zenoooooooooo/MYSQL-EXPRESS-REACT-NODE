import React, { useState, useEffect } from "react";
import axios from "axios";
import { CustomSection, CustomButton } from "../../components";
import { Link } from "react-router-dom";

const Datas = () => {
  const tableStyling = "p-2 text-center";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => {
        console.log("Data from API:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/students/${id}`).then(() => {
      // After successful deletion, re-fetch data to update the component
      fetchData();
    });
  };

  const handleAscending = () => {
    axios.get("http://localhost:3000/students/asc")
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.error(err)
    })
  }

  const handleDescening = () => {
    axios.get("http://localhost:3000/students/desc")
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.error(err)
    })
  }

  return (
    <CustomSection
      tag="main"
      className="bg-blue-300 p-4 flex items-center justify-center flex-col"
      title="Datas"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className={tableStyling}>Student ID</th>
            <th className={tableStyling}>First Name</th>
            <th className={tableStyling}>Last Name</th>
            <th className={tableStyling}>Age</th>
            <th className={`${tableStyling} flex justify-end`}>
              <Link to="/add">
                <CustomButton text="ADD" className="bg-green-800 p-3 m-1" />
              </Link>
              <CustomButton
                text="SORT ASCENDING"
                className="bg-green-800 p-3 m-1"
                method={handleAscending}
              />
              <CustomButton
                text="SORT DESCENDING"
                className="bg-green-800 p-3 m-1"
                method={handleDescening}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border border-solid border-blue-500">
              <td className={tableStyling}>{item.student_id}</td>
              <td className={tableStyling}>{item.first_name}</td>
              <td className={tableStyling}>{item.last_name}</td>
              <td className={tableStyling}>{item.age}</td>
              <td className={`${tableStyling} flex flex-row`}>
                <CustomButton
                  method={() => handleDelete(item.student_id)}
                  className="bg-red-500  p-2 m-2 w-1/2"
                  text="DELETE"
                />
                <Link to={`/edit/${item.student_id}`} className="w-1/2 m-2">
                  <CustomButton
                    className="bg-blue-500  p-2  w-full"
                    text="EDIT"
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CustomSection>
  );
};

export default Datas;
