import IndividualPost from "./IndividualPost";

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
    ];

    return (
        users.map((post) => <IndividualPost image={post.icon} name={post.name} liked={post.likedBy} likes={post.likes}
        desc={post.desc} postImage={post.image} icon={post.iconLiked}/>
        )
    );
}