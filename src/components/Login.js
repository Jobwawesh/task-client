import React, {useState} from 'react'

function Login({setToken}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function showing(){
        const display = {
            username,
            email,
            password
        } 
        setToken(display)
    }

    let token = {
        "name": username,
        "email": email,
        "password_hash": password
    }
    let loginToken = {
        "email": email,
        "password_hash": password
    }
    
    const handleSubmit = () => {
    
        fetch('https://my-app-backend-portfolio.onrender.com/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })

        function handleLogIn(){

            fetch('https://my-app-backend-portfolio.onrender.com/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginToken)
            })
            .then(res => res.json())
            .then((data)=>{
            console.log(data)

        })
    }

    }
  return (
    <div>
         <div className='login-section'>
                <div className='about-section'>
                    <h1>Welcome to My-TODO App</h1>

                </div>
                <div className='form-box-login'>
                    <div className='form-value'>
                        <form action=''  onSubmit={(e)=> e.preventDefault()}>
                            <h2>Login</h2>
                            <div className='inputbox'>
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type='email' value={email} onChange={(e) => { e.preventDefault(); setEmail(e.target.value)}} required/>
                                <label for=''>Email</label>
                            </div>
                            <div className='inputbox'>
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type='password' value={email} onChange={(e) => { e.preventDefault(); setPassword (e.target.value)}} required/>
                                <label for=''>Password</label>
                            </div>
                            <div className='forget'>
                                <label for=''><input type='checkbox'></input>Remember me?</label>
                                <a  className='forgotlink' href='#'>Forgot password?</a>
                            </div>
                            <button type='submit' onClick={(e)=>{
                                e.preventDefault()
                                showing()
                                ()}
                                } >Login</button>
                            <div className='register' id='register'>
                                <p>Don't have an account? <a href='#'>register</a> </p>
                            </div>
                        </form>
                    </div>
                </div>


            <div className='signup-form'>
                <div className='form-box'>
                    <div className='form-value'>
                        <form action='' onSubmit={(e)=>handleSubmit(e)}>
                            <h2>Sign up</h2>
                            <div className='inputbox'>
                                <ion-icon name="person-outline"></ion-icon>
                                <input type='text' value={username} onChange={(e)=>{
                                    e.preventDefault()
                                    setUsername(e.target.value)
                                }} required/>
                                <label for=''>Name</label>
                            </div>
                            <div className='inputbox'>
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type='text' value={email} onChange={(e)=>{
                                    e.preventDefault()
                                    setEmail(e.target.value)
                                }} required/>
                                <label for=''>Email</label>
                            </div>
                            <div className='inputbox'>
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type='password' value={password} onChange={(e)=>{
                                    e.preventDefault()
                                    setPassword(e.target.value)
                                }} required/>
                                <label for=''>Password</label>
                            </div>
                            <div className='forget'>
                                <label for=''><input type='checkbox'></input>Remember me?</label>
                                {/* <a  className='forgotlink' href='#'>Forgot password?</a> */}
                            </div>
                            <button onClick={(e)=>{
                                e.preventDefault()
                                showing()
                                handleSubmit()
                                }} type='submit'
                            >Free Sign up</button>
                            <div className='register'>
                                <p>Don't have an account? <a href='#'> Log in</a> </p>
                            </div>
                        </form>
                    </div>
                </div>
            
                </div>
            </div>
      
    </div>
  )
}

export default Login
