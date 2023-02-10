export default function IndividualSug(props){
    const {image, name, phrase} = props;
    return (
        <div className="follow">
        <div className="sug-profile">
            <img src={image} alt={name} />
            <div>
                <h2><a href="#home">{name}</a></h2>
                <p>{phrase}</p>
            </div>
        </div>
        <p><a href="#home">Seguir</a></p>
    </div>
    );
}