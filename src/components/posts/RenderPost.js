export default function RenderPost(props){
    const {image, name, postImage, icon, liked, likes, desc, like, save, showHeart, likeImg, likePost, savePost} = props;
    return(
        <div data-test="post" className="post">
            <div className="top">
            <div className="account">
                    <img src={image} alt={name}/>
                    {name}
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <ion-icon onClick={likeImg} id={showHeart ? "img-like" : "hide"} name={"heart"}></ion-icon>
            <img data-test="post-image" onDoubleClick={likeImg} src={postImage} alt={name}/>
            <div className="bottom">
            <div className="interact">
                <div>
                        <ion-icon data-test="like-post" onClick={likePost}  id={like ? "liked" : "not-liked"} name={like ? "heart" : "heart-outline"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                    <ion-icon data-test="save-post" name={save ? "bookmark" : "bookmark-outline"} onClick={savePost}></ion-icon>
            </div>
            <div className="description">
                <img src={icon} alt={liked}/>
                <p>Curtido por
                    <span> {liked} </span>
                    e
                    <span> outras
                    <span data-test="likes-number"> {!like ? likes : likes + 1} </span>
                    pessoas</span></p>
            </div>
            <div className="desc">
                <p><span>{name}</span> {desc}</p>
            </div>
        </div>
     </div>
        );
}