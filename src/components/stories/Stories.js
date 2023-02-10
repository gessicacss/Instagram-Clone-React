import Story from "./Story";
import storyList from "./StoryList";

export default function Stories(){
    return(
        <div className="stories">
        <div className="arrow">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
        {storyList.map(u => <Story key={u.name} image={u.image} name={u.name} />)}
        </div>
    );
}