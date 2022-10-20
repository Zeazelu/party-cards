import React, {useState} from 'react'


function SignUp() {
    const [user, setUser] = useState(null)
  return (
    <div className='signUp'>
        <label>Załóż konto</label>
        <input 
            placeholder='Imię' 
            onChange={(event) => {setUser({...user, firstName: event.target.value });
        }} />
    </div>
  )
}

export default SignUp