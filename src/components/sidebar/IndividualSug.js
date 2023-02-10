export default function IndividualSug(props){
    return (
        <div class="follow">
        <div class="sug-profile">
            <img src={props.image} alt={props.name} />
            <div>
                <h2><a href="#">{props.name}</a></h2>
                <p>{props.phrase}</p>
            </div>
        </div>
        <p><a href="#">Seguir</a></p>
    </div>
    )
}