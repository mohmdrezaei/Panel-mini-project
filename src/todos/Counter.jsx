import React, {useMemo, useState} from "react";


const Counter = () => {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(10)

    const incrementOne = () => {

        setCount(count + 1)
    }
    const incrementTwo = () => {
        setCountTwo(countTwo + 10)
    }
    const isEven = useMemo(() => {
        let i = 0
        while (i < 3000) {
            console.log(count)
            i++
        }
        return count % 2 === 0
    }, [count])
    return (
        <div className="text-center my-3">
            <h5 className="text-center my-3">{isEven ? "زوج" : "فرد"}</h5>
            <button className="btn btn-success" onClick={incrementOne}>count one : {count}  </button>
            <br/>
            <br/>
            <button className="btn btn-primary" onClick={incrementTwo}>count two : {countTwo} </button>
        </div>
    )
}
export default Counter