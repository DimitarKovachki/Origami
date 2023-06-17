import { useState, useEffect } from "react";

const useCounter = () => {

    const [counter, setCounter] = useState(10);


    useEffect(() => {
        document.title = `Counter is ${counter}`;
    })

    const addMoreCounter = () => {
        setCounter(counter + 1)
    }

    return [counter, addMoreCounter];
}

export default useCounter;