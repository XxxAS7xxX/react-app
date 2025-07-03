import { Box } from '@mui/material';
import * as React from 'react';
import '../styles/Home.css';
import { listA } from '../data/Animaux';
import { useEffect } from 'react';
import background from '../styles/background-home.jpeg';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';



export default function Home(props){
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
      
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/animal/${id}`);
    };

    const redBase = '#FF0000';
    const redMain = alpha(redBase, 0.5);
    const theme = createTheme({
    palette: {
        red : {
            main: redMain,}}
    });

      let emoji = "👣";
      let emoji2 = "👍";
    const listAnim = listA.map((anim) => 
        <li key={`${anim.id}`}>
            <Box id='box-profil'>
                <h2>{anim.nom}</h2>
                <div id='profil'>
                    <img src={anim.photo} alt="" draggable="false" />
                    <p>{anim.Description}</p>
                </div>            
                <div className="anim-caract">
                    <Tooltip title={anim.alimention_description}>{anim.alimentation === 'insectivore' ? <span className='alimentation'>🦗</span> : <span className='alimentation'>🌿</span>}</Tooltip>
                    <Tooltip title="taille en pieds et en pouces">{anim.taille < 1 ? (<span className='anim-taille'>{emoji2.repeat((anim.taille*12))}</span>) : (<span className='anim-taille'>{emoji.repeat(anim.taille)}{anim.taille % 1 ? emoji2.repeat((anim.taille%1*12)) : null}</span>)}</Tooltip>
                    <Tooltip title="durée de vie en années"><span className='anim-vie'>🍼 {anim.vie} 🪦</span></Tooltip>
                </div>
                <ThemeProvider theme={theme}>
                    <Button variant='contained' color="red" onClick={() => handleClick(anim.id)} id='btn-fiche'>en savoir plus</Button>
                </ThemeProvider>
            </Box>

        </li>)
    return(
        <ul id='ul-anim'>{listAnim}</ul>
        )
}
