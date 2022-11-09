import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from 'react-redux'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice';
import { useState } from 'react';

export default function ActivityProgression(props) {
    const [countdown, setCountdown] = useState(props.cooldown)
    const [percentages, setPercentages] = useState(100)
    
    const time = useSelector(durationSelector).find(activity => activity.id === props.id)['duration']
    
    if (countdown >= 500) {
        setInterval(() => setCountdown(countdown - 100), 100);
        setInterval(() => setPercentages((time - countdown) / time * 100), 100);
    }
    console.log(countdown)

    return <ProgressBar animated now={percentages} label={`${percentages}%`} />;
    }