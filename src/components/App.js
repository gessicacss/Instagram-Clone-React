import Content from "./Content";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export default function App() {
    return (
        <>
        <Header />
        <main>
        <Content />
        <Sidebar />
        </main>
        </>
    )
}