import IndividualSug from "./IndividualSug";
import userList from "./UserList";

export default function Suggestions(){
    return (
        userList.map((u) => <IndividualSug key={u.name} image={u.image} name={u.name} phrase={u.phrase}/>)
    );
}