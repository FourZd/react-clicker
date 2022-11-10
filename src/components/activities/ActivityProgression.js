import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from 'react-redux'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice';
import { useState } from 'react';

export default function ActivityProgression(props) {
    const [percentages, setPercentages] = useState(100)
    
    const time = useSelector(durationSelector).find(activity => activity.id === props.id)['duration']
    if (props.id === 1) {
        console.log('ЖОПА', props.cooldown)
    }
 

    setInterval(() => setPercentages((time - props.cooldown) / time * 100), 1000);

    return <ProgressBar animated now={percentages} label={`${percentages}%`} />;
    }