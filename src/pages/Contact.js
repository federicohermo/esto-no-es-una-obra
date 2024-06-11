import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "../styles/Contact.css";
import EmailForm from '../components/EmailForm';

export default function Contact(props){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        console.log(formData)
        console.log(alert)
        alert && send(formData)
        
    }, [alert])

    const send = async(arg) =>{
        const set =  arg
        await axios.put(process.env.REACT_APP_API_URL+"mail", 
        {headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }, data: set}).then(res=> {
            // toast.success("success")
            // setSelectedDataset("")
            // setRefresh(!refresh)
            console.log(res)
        }).catch(err => {
            // toast.error("Network error.")
            console.log(err)
        })
        setAlert(false)
    }

    return(
        <div style={{ alignContent: "center", margin: "15vh 0 5vh 0"}}>
            <EmailForm formData={formData} setFormData={setFormData} setAlert={setAlert}/>
        </div>
    )
}