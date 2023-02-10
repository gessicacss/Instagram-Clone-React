import Posts from "./posts/Posts";
import Stories from "./stories/Stories";

export default function Content(){
    return(
            <div class="content">
                <Stories />
                <>
                <Posts />
                </>
            </div>
    );
}