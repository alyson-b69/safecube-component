import React, { useState, ChangeEvent } from 'react'

import useInterval from './useInterval'

interface Props {
    string:string;
    strong: string;
    end: string;
}

const WrittenEffect:React.FC<Props> = ({string, strong, end}) => {
    const [count, setCount] = useState<number>(0);
    const [countStrong, setCountStrong] = useState<number>(0);
    const [countEnd, setCountEnd] = useState<number>(0);

    const [delay, setDelay] = useState<number | null>(40);
    const [isPlaying, setPlaying] = useState<boolean>(true);

    React.useEffect(()=>{
        setCount(0)
        setCountStrong(0)
        setCountEnd(0)
        setPlaying(true)
    }, [string, string, end])

    useInterval(
        () => {
            if(count < string.length){
                setCount(count + 1)
            } else if(countStrong < strong.length){
                setCountStrong(countStrong + 1)
            } else if(countEnd < end.length){
                setCountEnd(countEnd + 1)
            } else {
                setPlaying(false)
            }
        },
        isPlaying ? delay : null,
    )

    return (
        <>
           {isPlaying
               ? <>{string.slice(0, count)} <strong>{strong.slice(0, countStrong)}</strong> {end.slice(0, countEnd)} </>
               : <>{string} <strong>{strong}</strong> {end}</>
           }
        </>
    )
};

export default WrittenEffect;