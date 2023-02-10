import Credits from "./Credits";
import Suggestions from "./Suggestions";
import User from "./User";

export default function Sidebar(){
    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <User />
                <div className="for-you">
                    <p>Sugestões para você</p>
                    <a href="#home">Ver tudo</a>
                </div>
                <div className="suggestions">
                    <Suggestions />
                </div>
                <Credits />
            </div>
        </aside>
    );
}