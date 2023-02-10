export default function UserInfo(props){
    const {newImg, userName, oldUserName, oldImg, setUserName, setNewImg} = props;
    function changeName(){
        const newUser = prompt('Qual seu nome de usuário?');
        setUserName(newUser);
    }

    function changeIcon(){
        const newIcon = prompt('Qual imagem quer colocar?');
        setNewImg(newIcon);
    }

    return (
        <div className="acc-info">
        <img data-test="profile-image" src={newImg ? newImg : oldImg} onClick={changeIcon} alt={oldImg}/>
        <div>
            <h1 data-test="name">{userName ? userName : oldUserName}</h1>
            <ion-icon data-test="edit-name" name="pencil" onClick={() => changeName()}></ion-icon>
        </div>
    </div>
    );
}