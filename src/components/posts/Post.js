import { useState } from "react";

export default function Post(){
    const users = [
        {name: "vickeeymakeup",
        icon: "./assets/img/vickeey.jpg",
        image:"./assets/img/post.jpg",
        desc:"Em breve!",
        likedBy:"everyone_woo",
        likes:50,
        iconLiked:"./assets/img/evwoo.jpg"

    },
        {name: "mery", 
        icon: "./assets/img/natal.jpg",
        image:"./assets/img/cat.jpg",
        desc:"Coisinha mais fofa",
        likedBy:"ericshn",
        likes:20,
        iconLiked:"./assets/img/doggo.jpg"
},
        {name: "beencantstop", 
        icon: "./assets/img/icon.jpg",
        image:"./assets/img/snowman.jpg",
        desc:"december has come ❄️",
        likedBy:"achahakyeon",
        likes:100,
        iconLiked:"./assets/img/snowman.jpg"
    }
    ]

    const post = users.map((post) =>
    <div data-test="post" class="post">
        <PostHeader name={post.name} image={post.icon}/>
        <Img image={post.image}/>
        <Desc liked={post.likedBy} likes={post.likes} icon={post.iconLiked} user={post.name} desc={post.desc}/>
    </div>
    )

    return (
        post
    )
}

function PostHeader(props){
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

function Img(props){
    return (
        <img data-test="post-image" src={props.image}/>
    )
}

function Desc(props){
    const {likes, liked, icon, desc, user} = props;
    const likedPost = useState("liked")
    const notLiked = useState("not-liked")

    return (
        <div class="bottom">
            <div class="interact">
                <div>
                        <ion-icon data-test="like-post" class="" name="heart-outline"onclick={like => (like ? {likedPost} : {notLiked})}></ion-icon>
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