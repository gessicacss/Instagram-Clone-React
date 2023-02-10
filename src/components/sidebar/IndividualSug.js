export default function IndividualSug(props){
    const {image, name, phrase} = props;
    return (
        <div class="follow">
        <div class="sug-profile">
            <img src={image} alt={name} />
            <div>
                <h2><a href="#">{name}</a></h2>
                <p>{phrase}</p>
            </div>
        </div>
        <p><a href="#">Seguir</a></p>
    </div>
    );
}