import React,{useState} from 'react';
import { useDispatch } from 'react-redux';

import {TextInput, Button} from 'react-materialize';

// import "./styles/app.css"
import {checkUserLogin} from './redux/action/user-actions';


 	const Login = (props) => {
		 console.log("props",props)
		const [email , setMail ] = useState("");
		const [password , setPassword ] = useState("");
		const dispatch = useDispatch()

		const handleInputMail = (e) =>{
			setMail(e.target.value)
			console.log(email)
		}
		const handleInputPass = (e) =>{
			setPassword(e.target.value)
			console.log(password)
		}
		const handleSubmit= (e)=>{
			e.preventDefault();
			console.log(email,password)
			const user ={
				email,
				password
			}
			dispatch(checkUserLogin(user));
			props.history.push('/home');
		}
		
		
		return(
			
			<div style ={styles.loguinContainer}>
				<div style ={styles.loguin}>
				<TextInput
  				email
  				label="Email"
					validate
					onChange={ handleInputMail }
				/>
				<TextInput
  				label="Password"
					password
					onChange={ handleInputPass }
				/>
				<Button
    			node="button"
   	 			style={{
						marginRight: '5px',
						marginLeft: '75px'
    			}}
					waves="light"
					onClick = { handleSubmit }
  			>INGRESAR</Button>
			</div>
		</div>  
			
		)
	};
	
	const styles = {
		loguinContainer:{
			display:"grid",
			gridTemplateColumns: "2fr 1fr 2fr",
			alignContent: "center",
		},
		loguin:{
			gridColumn: "2/3"
		}
	}
	
	export default Login;
