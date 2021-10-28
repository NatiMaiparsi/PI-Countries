export default function Country({name,img,continent}) {
    return <div>
        <h3>{name}</h3>
        <img src={img} alt="country img" />
        <h3>Continent: {continent}</h3>
    </div>
}