import Credits from "./Credits"
import Suggestions from "./Suggestions"
import User from "./User"

export default function Sidebar(){
    return (
        <aside class="sidebar">
            <div class="sidebar-content">
                <User />
                <div class="for-you">
                    <p>Sugestões para você</p>
                    <a href="#">Ver tudo</a>
                </div>
                <div class="suggestions">
                    <Suggestions />
                </div>
                <Credits />
            </div>
        </aside>
    )
}