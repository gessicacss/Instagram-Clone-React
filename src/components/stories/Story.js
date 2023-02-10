export default function Story(props){
    const {image, name} = props;
    return(
        <div className="profile">
        <a href="#home">
            <div className="border">
                <img src={image} alt={name}/>
            </div>
            <p>{name}</p>
        </a>
        </div>
    );
}