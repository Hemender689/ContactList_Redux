import React ,{useEffect,useState}from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { Link ,useParams,useHistory  } from 'react-router-dom'
import { toast } from 'react-toastify';
import {addUpdate} from '../Redux/Actions';
import validator from 'validator';

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setPhone] = useState("");
const {id} = useParams();
const history = useHistory();
const dispatch = useDispatch();
const contacts =  useSelector(state=>state.rootReducer);

const cid = contacts.find(contact => contact.id === parseInt(id));
 



useEffect(()=>{

  if(cid){
    setName(cid.name);
    setEmail(cid.email);
    setPhone(cid.number);
  }

},[cid]);

const handleSubmit = (e) => {
  e.preventDefault();
  

  let flag = true;
  let flag1= true;
  let Emailflag = true;
  let numberflag=true;
  if (!email && !number && !name) {
    toast.warning("Please fill in all fields 🤔" );
  } else {
    if (!email || !number || !name) {
      toast.warning("Every field are mandatory 🤔");
    }
    const checkmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );

    const checknumber =  contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.number === number);
       
    if (checkmail) {
      flag = !flag;
    toast.error("Your email " + checkmail.email + " is already exist ❌");
     
    } 
    if (checknumber) {
      flag1 = !flag1;
      toast.error("This number " + checknumber.number + " already exist ❌");
      
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
  const data = {
    id : parseInt(id),
    name,
    email,
    number,
  };
  if (name && email && number && flag  && flag1 && Emailflag && numberflag) {
     dispatch(addUpdate(data));
     toast.success("Contact Updated Successfully ✔")
     history.push("/");

  }
}
};

    return (
 
         <div className = 'addcomp'>
           {cid ? (
              <div>
              <div className="hometext">
                <h2>Edit Contacts {id}</h2>
              </div>
              <form onSubmit = {handleSubmit} className="form">
                <div className="form-grp">
                  <input 
                  className = "input-field"
                        type="text" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)}} />
                  
                </div>
                <div className="form-grp">
                  <input 
                  className = "input-field"
                         type="text" 
                         placeholder="Email"
                         value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)}}  
                         />
                </div>
                <div className="form-grp">
                  <input 
                  className = "input-field"
                       type="number" 
                       placeholder="Phone Number" 
                  
                        value={number}
                        onChange={(e) => {
                       setPhone(e.target.value)}} 
                    
                  />
                </div>
                <div className="btn-1">
                   
                    <input 
                       type="submit"  className = "button" value="Update"></input>
                       
                </div>
                <div className="btn-2">
                <Link to="/">
                    <button className = "button">Cancel</button>
                </Link>
              </div>
              </form>
              </div>
           ) : (<h1>This id {id} dont exist</h1>)}
          
        </div>
    )
                        }
export default Edit
