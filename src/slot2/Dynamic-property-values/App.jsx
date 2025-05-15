const enable = false;
const text = "My button";
const size = 50;
const placeholder ="Please input a value...";

const App = () =>{
    return(
        <section>
            <button enable={!enable}>{text}</button>
            <input placeholder={placeholder} size={50}></input>
        </section>
    );
}
export default App;