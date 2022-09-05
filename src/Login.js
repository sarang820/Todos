import React from "react";
import "./Login.css";

const Login=(props)=>{
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    }=props;
    return (
       <section className="login">
        <div className="loginContainer">
            <label className="lb">Username</label>
            <input
                className="inp"
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label className="lb">Password</label>
            <input
                className="inp"
                type="password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <p className="errMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount?(
                    <>
                    <button className="btnn" onClick={handleLogin}>Sign in</button>
                    <p>Dont have an account?<span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                    </>
                ):(
                    <>
                    <button className="btnn" onClick={handleSignup}>Sign up</button>
                    <p>Have an account?<span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                )}
            </div>
        </div>
       </section>
    )
}

export default Login;