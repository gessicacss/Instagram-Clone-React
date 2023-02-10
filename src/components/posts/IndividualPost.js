import { useState } from "react";
import RenderPost from "./RenderPost";

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
            <RenderPost likeImg={likeImg} likePost={likePost} savePost={savePost} image={image} name={name} postImage={postImage} icon={icon} liked={liked} likes={likes} desc={desc} like={like} setLike={setLike} save={save} setSave={setSave} showHeart={showHeart}/>
        );
    }