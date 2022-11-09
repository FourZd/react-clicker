import ProgressBar from 'react-bootstrap/ProgressBar';
import { cooldownSelector } from '../../store/reducers/activities/activityCooldownSlice';
import { useSelector } from 'react-redux'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice';
import { useState } from 'react';

export default function ActivityProgression(props) {
    const [countdown, setCountdown] = useState(props.cooldown)
    const [percentages, setPercentages] = useState(100)
    
    const isCooldown = useSelector(cooldownSelector).find(activity => activity.id === props.id)['cooldown']
    const time = useSelector(durationSelector).find(activity => activity.id === props.id)['duration']

    if (isCooldown) {
        setInterval(() => setCountdown(props.cooldown), 1000);
    }
    if (countdown > 0) {
        setInterval(() => setCountdown(countdown - 1000), 1000);
        setInterval(() => setPercentages((time - countdown) / time * 100), 1000);
    }
    
    
    console.log(
        countdown, percentages, isCooldown, time
    )
    return <ProgressBar animated now={percentages} label={`${percentages}%`} />;
    }