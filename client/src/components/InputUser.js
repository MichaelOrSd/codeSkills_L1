import React, { Fragment, useState } from "react";

const InputUser = () => {

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [created_at, setCreatedAt] = useState("");

    const onSubmitForm = async (e) => {

        e.preventDefault();

        try {
            const body = { first_name, last_name, email, created_at };
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }   
        }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern User List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                type="text" 
                className="form-control" 
                placeholder='First name'
                value={first_name} 
                onChange={e => setFirstName(e.target.value)}/>
                <input 
                type="text" 
                className="form-control" 
                placeholder='Last name'
                value={last_name} 
                onChange={e => setLastName(e.target.value)}/>
                <input 
                type="text" 
                className="form-control" 
                placeholder='Email'
                value={email} 
                onChange={e =>  setEmail(e.target.value)}/>
                <input 
                type="text" 
                className="form-control" 
                placeholder='YYYYMMDD'
                value={created_at} 
                onChange={e => setCreatedAt(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
    }

export default InputUser;
