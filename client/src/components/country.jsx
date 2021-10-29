import { Link } from "react-router-dom";

export default function Country({id,name,img,continent}) {
    console.log(id)
    return <div>
        <Link to={`/${id}`}>
        <h3>{name}</h3>
        <img src={img} alt="country img" />
        <h3>Continent: {continent}</h3>
        </Link>
    </div>
}