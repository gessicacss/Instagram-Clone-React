export default function PostHeader(props){
    const {image, name} = props;
    return (
        <div class="top">
            <div class="account">
                <img src={image} alt={name}/>
                {name}
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
    )
}