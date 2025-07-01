import * as React from 'react';
import '../styles/Form.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useEffect } from 'react';
import background from '../styles/background-form.jpg';

export default function Form() {
    useEffect(() => {
    const html = document.documentElement;
    html.style.background = `url(${background})`; 
    html.style.backgroundSize = 'cover';
    html.style.backgroundRepeat = 'no-repeat';
    html.style.backgroundPosition = 'center';
    html.style.minHeight = '100vh';

    return () => {
      // Nettoyer quand on quitte la page
      html.style.backgroundImage = '';
      html.style.backgroundSize = '';
      html.style.backgroundRepeat = '';
      html.style.backgroundPosition = '';
      html.style.minHeight = '';
    };
  }, []);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = () => {
        console.log("Email :", email);
        console.log("Mot de passe :", password);
        console.log("Rôle :", role);
    };

    return(
        <Box id="formulaire">
            <TextField id="standard-basic" label="Email" variant="standard" type='email' onChange={(e) => setEmail(e.target.value)} />
            <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Rôle
                </InputLabel>
                <NativeSelect defaultValue='' onChange={(e) => setRole(e.target.value)} inputProps={{ name: 'role', id: 'uncontrolled-native'}}>
                    <option value='' disabled selected></option>
                    <option value={'utilisateur'} onChange={(e) => setRole(e.target.value)}>utilisateur</option>
                    <option value={'administrateur'} onChange={(e) => setRole(e.target.value)}>administrateur</option>
                </NativeSelect>
            </FormControl>
            <Button variant="contained" type='submit' onClick={handleSubmit} >Send</Button>
        </Box>
    )
}
