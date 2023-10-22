import React, { useRef } from "react";
import {v4 as uuidv4} from 'uuid'
function FormPropsTextFields({data, setData, closed}) {
  const nameRef = useRef();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const phoneRef = useRef();
  const websiteRef = useRef();
  const addUser = (e) => {
    e.preventDefault();
    
    setData([
      ...data,
      {
        id: uuidv4(),
        name: nameRef.current.value,
        fullName: fullNameRef.current.value,
        age: 20,
        company: companyRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        website: websiteRef.current.value,
        hovering: false,
      },
    ]);

    closed();
  };

  return (
    <>
      <form onSubmit={addUser}>
        <div className="form-group m-2">
          <label>Name</label>
          <input
            ref={nameRef}
            type="text"
            className="form-control m-2"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="form-group m-2">
          <label>Surname and Second Name</label>
          <input
            type="text"
            ref={fullNameRef}
            className="form-control m-2"
            placeholder="Enter Surname and Second Name"
            required
          />
        </div>
        <div className="form-group m-2">
          <label>Email address</label>
          <input
            ref={emailRef}
            type="email"
            className="form-control m-2"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group m-2">
          <label>Company</label>
          <input
            ref={companyRef}
            type="text"
            className="form-control m-2"
            placeholder="Enter Company"
            required
          />
        </div>
        <div className="form-group m-2">
          <label>Phone</label>
          <input
            ref={phoneRef}
            type="text"
            className="form-control m-2"
            placeholder="Enter Phone"
            required
          />
        </div>
        <div className="form-group m-2">
          <label>Website</label>
          <input
            ref={websiteRef}
            type="text"
            className="form-control m-2"
            placeholder="Enter Website"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </>
  );
}

export default FormPropsTextFields;
