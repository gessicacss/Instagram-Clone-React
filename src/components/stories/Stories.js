import Story from "./Story";
import storyList from "./StoryList";

export default function Stories(){
    return(
        <div class="stories">
        <div class="arrow">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
        {storyList.map(u => <Story image={u.image} name={u.name} />)}
        </div>
    );
}