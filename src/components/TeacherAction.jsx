import React, { useEffect, useState , useContext } from "react";
import { Input, Button } from "reactstrap";
import Context from "../Context";
import { useLocation, useNavigate, useParams } from "react-router-dom";


const TeacherAction = () => {

    const contextData = useContext(Context);
    console.log(contextData.usersData)

  const teacherInitialData = {
    avatar: "",
    name: "",
    teachingsubject: "",
    schoolname: "",
  };

  const [formValues, setFormValues] = useState(teacherInitialData);

  const nav = useNavigate();

  const { id , isView } = useParams();

  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (id) {
      fetch("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/" + id)
        .then((data) => data.json())

        .then((res) => setFormValues(res));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = () => {
    contextData.addOrUpdateTeachers({ formValues , setFormValues , id , teacherInitialData })
    // if (id) {
    //   fetch("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/" + id, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formValues),
    //   }).then((res) => {
    //   getTeachers();
    //   setFormValues(teacherInitialData)});
      
    //   nav(-1);
      
    // } else {
    //   fetch("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formValues),
    //   }).then((res) => {
    //     getTeachers();
    //     setFormValues(teacherInitialData);
    //   });
      
    //   nav(-1);
      
    // }
  };

  return (
    <>
      <form>
        <label htmlFor="image">Avatar</label>
        <Input
          type="text"
          name="avatar"
          value={formValues.avatar}
          onChange={handleChange}
          disabled={state.isView === "true" ? true : false}
        />

        <label htmlFor="text">Name</label>
        <Input
          type="text"
          name="name"
          value={formValues.name}
          disabled={state.isView === "true" ? true : false}
          onChange={handleChange}
        />

        <label htmlFor="teachingsubject">Subject</label>
        <Input
          type="text"
          name="teachingsubject"
          value={formValues.teachingsubject}
          onChange={handleChange}
          disabled={state.isView === "true" ? true : false}
        />

        <label htmlFor="schoolname">School name</label>
        <Input
          type="text"
          name="schoolname"
          value={formValues.schoolname}
          onChange={handleChange}
          disabled={state.isView === "true" ? true : false}
        />

        <Button
          color="success"
          className="actionButton"
          onClick={handleSubmit}
          disabled={state.isView === "true" ? true : false}
        >
          submit{" "}
        </Button>

        <Button color="danger" className="actionButton" onClick={() => nav(-1)}>
          cancel
        </Button>
      </form>
    </>
  );
};

export default TeacherAction;