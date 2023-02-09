import Img from "./Img";
import Desc from "./PostDescription";
import PostHeader from "./PostHeader";

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