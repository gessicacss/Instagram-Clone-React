import UserInfo from "./UserInfo";
import { useState } from "react";

export default function User(){
    const [userName, setUserName] = useState("");
    const [newImg, setNewImg] = useState("");
    const oldUserName = "byeoli";
    const oldImg = "./assets/img/byeol.jpg";

    return (
    <UserInfo oldUserName={oldUserName} userName={userName} setUserName={setUserName} oldImg={oldImg} newImg={newImg} setNewImg={setNewImg}/>
    );
}