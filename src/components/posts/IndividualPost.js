import { useState } from "react";

export default function IndividualPost(props){
        const {image, name, postImage, icon, liked, likes, desc} = props;
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
                    <img src={image} alt={name}/>
                    {name}
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <ion-icon onClick={likeImg} class={showHeart ? "img-like" : "hide"} name={"heart"}></ion-icon>
            <img data-test="post-image" onDoubleClick={likeImg} src={postImage} alt={name}/>
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
                <img src={icon} alt={liked}/>
                <p>Curtido por
                    <span><a href="#"> {liked} </a></span>
                    e
                    <span> outras
                    <span data-test="likes-number"> {!like ? likes : likes + 1} </span>
                    pessoas</span></p>
            </div>
            <div class="desc">
                <p><span><a href='#'>{name}</a></span> {desc}</p>
            </div>
        </div>
     </div>
        );
    }