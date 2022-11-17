import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState, useEffect } from 'react';

export default function ActivityProgression(props) {
    const [percentages, setPercentages] = useState(100)
    
    if (props.id === 1) {
        console.log('Progression state', props.cooldown)
        console.log(percentages)
        console.log(props.totalTime)
    }
    useEffect(() => {
        const interval = setInterval(() => setPercentages((props.totalTime - props.cooldown) / props.totalTime * 100), 1000);
    })

    return <ProgressBar animated now={percentages} label={`${percentages}%`} />;
    }