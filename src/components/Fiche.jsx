import { Box } from "@mui/material";
import { listA } from "../data/Animaux";
import { useParams } from "react-router-dom";
import '../styles/Fiche.css';
import { useEffect } from "react";

export default function Fiche(){
    useEffect(() => {
        const html = document.documentElement;
        html.style.background = `#c0f5cd`;}) 
    const { id } = useParams();
    const animal =listA.find(anim => anim.id === parseInt(id));

    if(!animal){
        return <p>Animal non trouvé</p>;
    }
    return(
       <Box id='box-fiche'>
            <h1>{animal.nom}</h1>
            <img src={animal.photo} alt="" draggable="false" />
       </Box> 
    )
}