import IndividualPost from "./IndividualPost";
import postList from "./PostList";

export default function Post(){
    return (
        postList.map((post) => <IndividualPost key={post.name} image={post.icon} name={post.name} liked={post.likedBy} likes={post.likes}
        desc={post.desc} postImage={post.image} icon={post.iconLiked}/>
        )
    );
}