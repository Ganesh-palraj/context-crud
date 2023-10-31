import React, { useState, useEffect } from "react";
import Context from "./Context";
import { useNavigate } from "react-router-dom";

function Provider(props) {
  const [teachersData, setTeachersData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  const nav = useNavigate();
  const getStudents = async () => {
    try {
      const response = await fetch(
        "https://653e77be9e8bd3be29df5758.mockapi.io/student"
      );
      //  console.log(response)
      const allUsersData = await response.json();
      setUsersData(allUsersData);
      // console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const getTeachers = async () => {
    try {
      const response = await fetch(
        "https://653e77be9e8bd3be29df5758.mockapi.io/teacher"
      );
      //  console.log(response)
      const allTeachersData = await response.json();
      setTeachersData(allTeachersData);
      // console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
    getTeachers();
  }, []);

  const addOrUpdateStudents = ({
    formValues,
    setFormValues,
    id,
    initialFormValues,
  }) => {
    if (id) {
      fetch("https://653e77be9e8bd3be29df5758.mockapi.io/student/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }).then((res) => {
        getStudents();
        setFormValues(initialFormValues);
      });

      nav(-1);
    } else {
      fetch("https://653e77be9e8bd3be29df5758.mockapi.io/student/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }).then((res) => {
        getStudents();
        setFormValues(initialFormValues);
      });

      nav(-1);
    }
  };

  const deletingStudentData = ({ id }) => {
    fetch("https://653e77be9e8bd3be29df5758.mockapi.io/student/" + id, {
      method: "DELETE",
    }).then((res) => {
      getStudents();
      res.json();
    });
  };

  const addOrUpdateTeachers = ({
    teacherFormValues,
    setTeacherFormValues,
    id,
    teacherInitialData,
  }) => {
    if (id) {
      fetch("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teacherFormValues),
      }).then((res) => {
        getTeachers();
        setTeacherFormValues(teacherInitialData);
      });

      nav(-1);
    } else {
      fetch("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teacherFormValues),
      }).then((res) => {
        getTeachers();
        setTeacherFormValues(teacherInitialData);
      });

      nav(-1);
    }
  };

  const deletingTeacherData = ({ id }) => {
    fetch("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/" + id, {
      method: "DELETE",
    }).then((res) => {
      getStudents();
      res.json();
    });
  };
  
  return (
    <Context.Provider
      value={{
        usersData,
        setUsersData,
        teachersData,
        setTeachersData,
        addOrUpdateStudents,
        deletingStudentData,
        addOrUpdateTeachers,
        deletingTeacherData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
