import React, {useState} from 'react'
import Axios from 'axios'
import Cookies from 'universal-cookie'

function SignUp({setIsAuth}) {
    const cookies = new Cookies();
    const [user, setUser] = useState(null)
    const signUp = ( ) => {
        Axios.post("http://localhost:3001/signup", user).then(res => {
            const {token, userId, firstName, lastName, username, hashedPassword} = res.data; 
            cookies.set("token", token);
            cookies.set("userId", userId);
            cookies.set("username", username);
            cookies.set("firstName", firstName);
            cookies.set("lastName", lastName);
            cookies.set("hashedPassword", hashedPassword);
            setIsAuth(true);
        })
    }
  return (
    <div className='signUp'>
        <label>Rejestracja</label>
        <input 
            placeholder='Imię' 
            onChange={(event) => {setUser({...user, firstName: event.target.value });
        }} />
        <input 
            placeholder='Nazwisko' 
            onChange={(event) => {setUser({...user, lastName: event.target.value });
        }} />
        <input 
            placeholder='Nazwa użytkownika' 
            onChange={(event) => {setUser({...user, username: event.target.value });
        }} />
        <input 
            placeholder='Hasło' 
            onChange={(event) => {setUser({...user, password: event.target.value });
        }} />
        <button className='submit' onClick={signUp}>Załóż konto</button>

    </div>
  )
}

export default SignUp