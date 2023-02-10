export default function Story(props){
    const {image, name} = props;
    return(
        <div class="profile">
        <a href="#">
            <div class="border">
                <img src={image} alt={name}/>
            </div>
            <p>{name}</p>
        </a>
        </div>
    );
}