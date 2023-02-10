import IndividualSug from "./IndividualSug";

export default function Suggestions(){
    const list = [
        {image:"./assets/img/duckling.jpg", name:"whinee", phrase:"Novo no Instagram"},
        {image:"./assets/img/bae.jpg", name:"shotsbybae", phrase:"Segue você"},
        {image:"./assets/img/evwoo.jpg", name:"everyone_woo", phrase:"Seguido por vickeey.m"},
        {image:"./assets/img/shaggy.jpg", name:"shaggy", phrase:"Sugestões para você"}
    ];

    return (
        list.map((u) => <IndividualSug image={u.image} name={u.name} phrase={u.phrase}/>)
    );
}