import React from 'react';

const Login = (props) => {
	const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;
	return(
		<section className = "login">
			<div className= "loginContainer">
				<label>Username</label>
				<input 
				type = "text" 
				autoFocus required value= {email} 
				onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="errorMessage">{emailError}
				</p>
				
				<label>Password</label>
				<input 
				type = "password" 
				autoFocus required value= {password} 
				onChange={(e) => setPassword(e.target.value)}
				/>
				<p className="errorMessage">{passwordError}
				</p>
				<div className= "btnContainer">
					{hasAccount ? (
						<>
						<button onClick={handleLogin}>Sign in</button>
						<p> No account ? <span onClick= {() =>setHasAccount(!hasAccount)}> Sign up </span></p>
						</>
					) : (
						<>
						<button onClick={handleSignup}>Sign up</button>
						<p> Already Signed Up ? <span onClick= {() =>setHasAccount(!hasAccount)}> Sign in </span> </p>
						</>
					)}
				</div>
			</div>
		</section>
		)
}

export default Login;