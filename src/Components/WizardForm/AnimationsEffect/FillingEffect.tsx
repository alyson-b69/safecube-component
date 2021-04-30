import React, { useState } from 'react'
import { TimelineBarFill } from '../WizardTimeline/WizardTimeline.style';
import useInterval from './useInterval'

interface Props{
    isDone: boolean;
}

const FillingEffect: React.FC<Props> = ({isDone}) => {
    const [count, setCount] = useState<number>(0);
    const [delay, setDelay] = useState<number | null>(10);
    const [isPlaying, setPlaying] = useState<boolean>(true);

    React.useEffect(()=>{
        setCount(0)
        setPlaying(isDone)
    }, [isDone])

    useInterval(
        () => {
            setCount(count + 1)
            if(count >= 100){
                setPlaying(false)
            }
        },
        isPlaying ? delay : null,
    )

    return <TimelineBarFill isDone={isDone} width={isDone? count : 0} />

}

export default FillingEffect;

