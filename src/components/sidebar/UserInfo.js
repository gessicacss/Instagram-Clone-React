export default function UserInfo(props){
    function changeName(){
        const newUser = prompt('Qual seu nome de usuário?');
        props.setUserName(newUser);
    }

    function changeIcon(){
        const newIcon = prompt('Qual imagem quer colocar?');
        props.setNewImg(newIcon);
    }

    return (
        <div class="acc-info"> 
        <img data-test="profile-image" src={props.newImg ? props.newImg : props.oldImg} onClick={changeIcon} alt={props.oldImg}/>
        <div>
            <h1 data-test="name">{props.userName ? props.userName : props.oldUserName}</h1>
            <ion-icon data-test="edit-name" name="pencil" onClick={() => changeName()}></ion-icon>
        </div>
    </div>
    )
}