import { Link } from "react-router-dom";
import './country.modules.css'
export default function Country({id,name,img,continent}) {
    return (
        <div className='card'>
        <h3 >{name}</h3>
        <img className='flag' src={img} alt="country img" />
        <h4>Continent: {continent}</h4>
        <Link className='link' to={`/${id}`}>
        <button className='button-info'>More info</button>
        </Link>
        </div>
    )
}