import React, { useState } from 'react'
import Activity from './Activity'
import './Activities.css'
import { multiplierSelector } from '../../store/reducers/activities/incomeMultiplierSlice'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice'
import { useSelector } from 'react-redux'

export default function ActivitiesList() {
    const multiplierList = useSelector(multiplierSelector)
    const durationList = useSelector(durationSelector)

    const [activitiesList, setActivitiesList] = useState([
        {
            name: 'tgChannel', 
            income: 1*multiplierList['tgChannel'], 
            duration: 1*durationList['tgChannel']
        },
        
        {
            name: 'ytChannel', 
            income: 10*multiplierList['ytChannel'], 
            duration: 1*durationList['ytChannel']
        },
        {
            name: 'newsWebsite', 
            income: 100*multiplierList['newsWebsite'], 
            duration: 1*durationList['newsWebsite']
        },
        {
            name: 'radioStation', 
            income: 1000*multiplierList['radioStation'], 
            duration: 1*durationList['radioStation']
        },
        {
            name: 'talkShow', 
            income: 10000*multiplierList['talkShow'], 
            duration: 1*durationList['talkShow']
        },
        {
            name: 'tvChannel', 
            income: 100000*multiplierList['tvChannel'], 
            duration: 1*durationList['tvChannel']
        },
        {
            name: 'politicalParty', 
            income: 1000000*multiplierList['politicalParty'], 
            duration: 1*durationList['politicalParty']
        },
        {
            name: 'secretSociety', 
            income: 10000000*multiplierList['secretSociety'], 
            duration: 1*durationList['secretSociety']
        },
        {
            name: 'privateIsland', 
            income: 100000000*multiplierList['privateIsland'], 
            duration: 1*durationList['privateIsland']
        },
        {
            name: 'bananaRepublic', 
            income: 1000000000*multiplierList['bananaRepublic'], 
            duration: 1*durationList['bananaRepublic']
        },
        {
            name: 'orbitalLoudspeaker', 
            income: 10000000000*multiplierList['orbitalLoudspeaker'], 
            duration: 1*durationList['orbitalLoudspeaker']
        },
        {
            name: 'reptiloidConsilium', 
            income: 100000000000*multiplierList['reptiloidConsilium'], 
            duration: 1*durationList['reptiloidConsilium']
        }

    ])



    return (
        <article className='activities'>
        <Activity 
            activitiesList = {activitiesList}
        />
        </article>
    )
}
