import Story from "./Story";

export default function Stories(){
    const imgs = [
        {image:"./assets/img/vck.png", name:"vickeey.m"},
        {image:"./assets/img/vickeey.jpg", name: "vickeeymakeup"},
        {image:"./assets/img/natal.jpg", name: "mery"},
        {image:"./assets/img/marra.jpg", name:"marramaromba"},
        {image:"./assets/img/tcc.jpg", name:"tcc_c_ccc"},
        {image:"./assets/img/doggo.jpg", name:"ericshn"},
        {image:"./assets/img/ksw.jpg", name:"sun.shine"},
        {image:"./assets/img/icon.jpg", name:"beencantstop"},
        {image:"./assets/img/husky.jpg", name:"moomoo"},
        {image:"./assets/img/byeol.jpg", name:"byeolie"},
        {image:"./assets/img/snowman.jpg", name:"achahakyeon"}
    ];

    return(
        <div class="stories">
        <div class="arrow">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
        {imgs.map(u => <Story image={u.image} name={u.name} />)}
        </div>
    );
}