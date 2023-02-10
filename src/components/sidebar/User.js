import { useState } from "react"

export default function User(){

    const [userName, setUserName] = useState("");
    const [newImg, setNewImg] = useState("");
    const oldUserName = "byeoli"
    const oldImg = "./assets/img/byeol.jpg"

    function changeName(){
        const newUser = prompt('Qual seu nome de usuário?');
        setUserName(newUser);
    }

    function changeIcon(){
        const newIcon = prompt('Qual imagem quer colocar?');
        setNewImg(newIcon);
    }

    return (
        <div class="acc-info"> 
        <img data-test="profile-image" src={newImg ? newImg : oldImg} onClick={changeIcon} alt={oldImg}/>
        <div>
            <h1 data-test="name">{!userName ? oldUserName : userName}</h1>
            <ion-icon data-test="edit-name" name="pencil" onClick={() => changeName()}></ion-icon>
        </div>
    </div>
    )
}