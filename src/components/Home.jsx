import { Box } from '@mui/material';
import * as React from 'react';
import '../styles/Home.css';
import '../styles/lezard.jpg';
import lezard from '../styles/lezard.avif';
import toucan from '../styles/toucan.jpg';
import grenouille from '../styles/grenouille.avif';
import { useEffect } from 'react';
import background from '../styles/background-home.jpeg';

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

      let emoji = "👣";
      let emoji2 = "👍";
    const listAnim = listA.map((anim) => 
        <li key={`${anim.id}`}>
            <Box id='box-profil'>
                <h2>{anim.nom}</h2>
                <div id='profil'>
                    <img src={anim.photo} alt="" />
                    <p>{anim.Description}</p>
                    <div className="anim-caract">
                        {anim.alimentation === 'insectivore' ? <span className='alimentation'>🦗</span> : <span className='alimentation'>🌿</span>}
                        {anim.taille < 1 ? <span className='anim-taille'>{emoji2.repeat((anim.taille*12))}</span> : <span className='anim-taille'>{emoji.repeat(anim.taille)}</span>}
                        
                    </div>
                </div>
            </Box>
        </li>)
    return(
        <ul id='ul-anim'>{listAnim}</ul>
        )
}

const listA = [
    { id:1, nom : 'Caméléon', photo: lezard, taille: 2, alimentation: 'insectivore', Description:'Le caméléon est un reptile arboricole (qui vit dans les arbres) et solitaire. Il possède une queue qui s’enroule et une longue langue gluante. C’est aussi un as du camouflage ! Avec son attitude hésitante et nonchalante lors de ses déplacements, il semble manquer d’assurance. En réalité, il s’agit d’un stratagème pour tromper ses proies et ses prédateurs. En bougeant de cette manière, il imite le mouvement saccadé d’une feuille.'},
    { id:2, nom : 'Toucan', photo: toucan, taille: 2, alimentation: 'omnivore', Description:"Le toucan géant est un oiseau joyeux qui vit dans les forêts d'Amérique du Sud. Il a un long bec orange et un beau plumage. Les toucans adorent les baies et les fruits et sont de véritables oiseaux joueurs !"},
    { id:3, nom : 'Phelsuma', photo: grenouille, taille: 0.82, alimentation: 'insectivore', Description:"Les phelsumas sont diurnes avec une pupille ronde et des couleurs très vives. À la manière d'un caméléon, ils peuvent indiquer un état de stress, d'intimidation ou d'agressivité par une variation de l'intensité de leurs couleurs épidermiques."}

];