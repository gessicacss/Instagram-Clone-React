export default function Desc(props){
    const {likes, liked, icon, desc, user} = props;

    return (
        <div class="bottom">
            <div class="interact">
                <div>
                        <ion-icon data-test="like-post" class="" name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                    <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
            </div>
            <div class="description">
                <img src={icon} />
                <p>Curtido por <span><a href="#">{liked}</a></span> e <span>outras <span data-test="likes-number">{likes} </span>pessoas</span></p>
            </div>
            <div class="desc">
                <p><span><a href='#'>{user}</a></span> {desc}</p>
            </div>
         </div>
    )
}