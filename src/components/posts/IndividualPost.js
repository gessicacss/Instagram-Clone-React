import { useState } from "react";

export default function IndividualPost(props){
        const [like, setLike] = useState(false);
        const [save, setSave] = useState(false);
        const [showHeart, setShowHeart] = useState(false);
        const halfASecond = 500;

        function savePost() {
            setSave(saved => !saved);
        }
    
        function likePost(){
            setLike(liked => !liked);
        }

        function likeImg(){
            setLike(true);
            setShowHeart(true);
            setTimeout(() => {
              setShowHeart(false);
            }, halfASecond);
        }
    
        return(
        <div data-test="post" class="post">
            <div class="top">
            <div class="account">
                    <img src={props.image} alt={props.name}/>
                    {props.name}
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <ion-icon onClick={likeImg} class={showHeart ? "img-like" : "hide"} name={"heart"}></ion-icon>
            <img data-test="post-image" onDoubleClick={likeImg} src={props.postImage} alt={props.name}/>
            <div class="bottom">
            <div class="interact">
                <div>
                        <ion-icon data-test="like-post" onClick={likePost}  class={like ? "liked" : "not-liked"} name={like ? "heart" : "heart-outline"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                    <ion-icon data-test="save-post" name={save ? "bookmark" : "bookmark-outline"} onClick={savePost}></ion-icon>
            </div>
            <div class="description">
                <img src={props.icon} alt={props.liked}/>
                <p>Curtido por <span><a href="#">{props.liked}</a></span> e <span>outras <span data-test="likes-number">{!like ? props.likes : props.likes + 1} </span>pessoas</span></p>
            </div>
            <div class="desc">
                <p><span><a href='#'>{props.name}</a></span> {props.desc}</p>
            </div>
        </div>
     </div>
        )
    }