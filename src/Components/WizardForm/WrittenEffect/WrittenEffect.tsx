import React, { useState, ChangeEvent } from 'react'

import useInterval from './useInterval'

interface Props {
    string:string;
}

const WrittenEffect:React.FC<Props> = ({string}) => {
    const [count, setCount] = useState<number>(0);
    const [delay, setDelay] = useState<number | null>(40);
    const [isPlaying, setPlaying] = useState<boolean>(true);

    React.useEffect(()=>{
        setCount(0)
        setPlaying(true)
    }, [string])

    useInterval(
        () => {
            setCount(count + 1)
            if(count >= string.length){
                setPlaying(false)
            }
        },
        isPlaying ? delay : null,
    )

    return (
        <>
           {isPlaying ? string.slice(0, count) : string}
        </>
    )
}

export default WrittenEffect;