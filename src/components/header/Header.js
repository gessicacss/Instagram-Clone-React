import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


export default function Header(){
    return (
    <header>
        <div class="menu">
            <LeftSide />
            <input type="text" placeholder="Pesquisar" name="search"></input>
            <RightSide />
        </div>
    </header>
    );
}