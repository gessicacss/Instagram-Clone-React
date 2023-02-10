import Posts from "./posts/Posts";
import Stories from "./stories/Stories";

export default function Content(){
    return(
            <div className="content">
                <Stories />
                <>
                <Posts />
                </>
            </div>
    );
}