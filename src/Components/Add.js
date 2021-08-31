import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAction } from "../Redux/Actions";
import { toast } from "react-toastify";
import validator from "validator";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setPhone] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.rootReducer);
  console.log(contacts);
  const handleSubmit = (e) => {
    e.preventDefault();

    let flag = true;
    let flag1= true;
    let Emailflag = true;
    let numberflag = true;
    if (!email && !number && !name) {
       toast.warning("Please fill all the fields 🤔");
    } else {
      if (!email || !number || !name) {
        return toast.warning("All fields are mandatory 🤔");
      }
      const checkmail = contacts.find((contact) => contact.email === email);

      const checknumber = contacts.find((contact) => contact.number === number);
   
      if (checkmail) {
        flag = !flag;
        return toast.error("Your email " + checkmail.email + " is already exist 🤦‍♂️");
        
      } 
      if (checknumber) {
        flag1 = !flag1;
        return toast.error("This number " + checknumber.number + " already exist 🤦‍♂️");
        
      }
        
      let valid = validator.isEmail(email);
      if(valid === false)
      {
        Emailflag = !Emailflag;
        toast.warning("Please enter a valid email 😢")
      }
      const numberlen = number.length;
      if(numberlen !== 10)
      {
       numberflag = !numberflag;
        toast.warning("Please enter valid 10 digit number 😢");
      }

// console.log(contacts[contacts.length + 1].id);
      
      const data = {
        id: contacts.length+1,
        name,
        email,
        number,
      };
      if (name && email && number && flag  && flag1 && Emailflag && numberflag) {
        dispatch(addAction(data));
        toast.success("Contact added successfully 😎");
        history.push("/");
      }
    }
  };
  return (
    <div className="addcomp">
      <div className="hometext">
        <h2>Add Contacts</h2>
      </div>
      <form className = "form">
        <div className="form-grp">
          <input
          className = "input-field"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-grp">
          <input
          className = "input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-grp">
          <input
          className = "input-field"
            type="number"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="btn-1">
          <Link to="/">
            <button className = "button" onClick={handleSubmit}>Add Contact</button>
          </Link>
        </div>
        <div className="btn-2">
                <Link to="/">
                    <button className = "button">Cancel</button>
                </Link>
              </div>
      </form>
    </div>
  );
};

export default Add;
