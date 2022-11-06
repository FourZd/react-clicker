import React, { useState } from 'react'
import Activity from './Activity'
import './Activities.css'
import { multiplierSelector } from '../../store/reducers/activities/incomeSlice'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice'
import { useSelector } from 'react-redux'

export default function ActivitiesList() {
    const multiplierList = useSelector(multiplierSelector)
    const durationList = useSelector(durationSelector)

    const [activitiesList, setActivitiesList] = useState([
        {
            name: 'tgChannel', 
            income: multiplierList['tgChannel'], 
            duration: durationList['tgChannel']
        },
        
        {
            name: 'ytChannel', 
            income: multiplierList['ytChannel'], 
            duration: durationList['ytChannel']
        },
        {
            name: 'newsWebsite', 
            income: multiplierList['newsWebsite'], 
            duration: durationList['newsWebsite']
        },
        {
            name: 'radioStation', 
            income: multiplierList['radioStation'], 
            duration: durationList['radioStation']
        },
        {
            name: 'talkShow', 
            income: multiplierList['talkShow'], 
            duration: durationList['talkShow']
        },
        {
            name: 'tvChannel', 
            income: multiplierList['tvChannel'], 
            duration: durationList['tvChannel']
        },
        {
            name: 'politicalParty', 
            income: multiplierList['politicalParty'], 
            duration: durationList['politicalParty']
        },
        {
            name: 'secretSociety', 
            income: multiplierList['secretSociety'], 
            duration: durationList['secretSociety']
        },
        {
            name: 'privateIsland', 
            income: multiplierList['privateIsland'], 
            duration: durationList['privateIsland']
        },
        {
            name: 'bananaRepublic', 
            income: multiplierList['bananaRepublic'], 
            duration: durationList['bananaRepublic']
        },
        {
            name: 'orbitalLoudspeaker', 
            income: multiplierList['orbitalLoudspeaker'], 
            duration: durationList['orbitalLoudspeaker']
        },
        {
            name: 'reptiloidConsilium', 
            income: multiplierList['reptiloidConsilium'], 
            duration: durationList['reptiloidConsilium']
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
