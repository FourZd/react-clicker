import ProgressBar from 'react-bootstrap/ProgressBar';
import { useDispatch, useSelector } from 'react-redux'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice';
import { useEffect, useState } from 'react';
import { cooldownSelector } from '../../store/reducers/activities/activityCooldownSlice';
import { progressionSelector, updateProgression } from '../../store/reducers/activities/activityProgressionSlice';

export default function ActivityProgression(props) {
    const dispatch = useDispatch()
    const percentages = useSelector(progressionSelector).find(activity => activity.id === props.id)['percentages']
    const inCooldown = useSelector(cooldownSelector).find(activity => activity.id === props.id)['cooldown']
    const cooldownDuration = useSelector(durationSelector).find(activity => activity.id === props.id)['duration']
    let cooldown
    let interval
    const func = () => {
        if (cooldown === 0) {
            clearInterval(interval)
            return
        }
        cooldown -= 100
        const percentages = 100 - (cooldown/cooldownDuration*100)
        dispatch(updateProgression({id: props.id, progression: percentages}))
    }
    useEffect(() => {
        if (inCooldown) {
            cooldown = cooldownDuration
            interval = setInterval(() => {
                func()
                
            }, 100)
        } 
    }, [inCooldown]);

    return(
        <ProgressBar className='activity-progression-bar' animated={inCooldown ? true : false} striped={props.available ? true : false}  now={percentages} label={`${props.income}$`}/>
    )
    }