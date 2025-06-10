import { useState } from "react"
import { useAuth0} from "@auth0/auth0-react";
import "./Contact.css"

const Contact = () => {
    const { loginWithRedirect,logout, user, isAuthenticated } = useAuth0();
    const [users, setUser] = useState({
        Name:"", Email:"", Subject:"", Message:""
    })

    let name, value
    const data = (e) => 
    {
        name = e.target.name;
        value = e.target.value
        setUser({...users,[name]:value});
    }

    const senddata = async(e) =>
    {
        const {Name, Email, Subject, Message} = users
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = await fetch('https://e-commerce-contact-44301-default-rtdb.firebaseio.com/Message.json', options)
        console.log(res);
        if (res) {
            alert('Your Message sent')
        } else {
            alert('An error occured')
        }
    }


  return (
    <>
    <div className='contact_container'>
        <div className='container'>
            <h2># Contact us</h2>
            <div className='form'>
                <form method='POST'>
                    <input type="text" name='Name' value={users.Name} placeholder='Enter Your Name' required autoComplete="off" onChange={data}/>
                    <input type="email" name='Email' value={users.Email} placeholder='Enter Your E-mail' required autoComplete="off" onChange={data}/>
                    <input type="text" name='Subject' value={users.Subject} placeholder='Enter Your Subject' required autoComplete="off" onChange={data}/>
                    <textarea name='Message' value={users.Message} placeholder='Enter Your Message' required autoComplete="off" onChange={data}/>
                    {
                        isAuthenticated ?
                        <button onClick={senddata}>send</button> :
                        <button onClick={() => loginWithRedirect()}>Login</button>

                    }
                </form>

            </div>
        </div>
    </div>
    </>
  )
}

export default Contact