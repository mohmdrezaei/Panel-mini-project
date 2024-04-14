import {useState} from "react";

const Counter = MainComponent => {
    const NewComponent = (props) => {
        const [count , setCount] = useState(0);
        const handleIncreaseCount = () => {
            setCount(count + 1)
        }
        return (
            <MainComponent {... props} count={count} handleIncreaseCount={handleIncreaseCount}/>
        )
    }
    return NewComponent
}
export default Counter;