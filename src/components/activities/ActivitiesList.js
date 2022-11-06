import React from 'react'
import { useSelector } from 'react-redux'
import Activity from './Activity'
import './Activities.css'
import {activityIncomeMultiplierSelector} from '../../store/reducers/activities/activityIncomeMultiplierSlice'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice'
import { quantitySelector } from '../../store/reducers/activities/activityQuantitySlice'

export default function ActivitiesList() {

    const multiplierList = useSelector(activityIncomeMultiplierSelector)
    const durationList = useSelector(durationSelector)
    const quantityList = useSelector(quantitySelector)

    const activitiesList = [
        {
            name: 'tgChannel',
            income: 1 * multiplierList['tgChannel'], 
            duration: durationList['tgChannel'],
            quantity: quantityList['tgChannel']
        },
        {
            name: 'ytChannel',
            income: 10 * multiplierList['ytChannel'], 
            duration: durationList['ytChannel'],
            quantity: quantityList['ytChannel']
        },
        {
            name: 'newsWebsite',
            income: 100 * multiplierList['newsWebsite'], 
            duration: durationList['newsWebsite'],
            quantity: quantityList['newsWebsite']
        },
        {
            name: 'radioStation',
            income: 1000 * multiplierList['radioStation'], 
            duration: durationList['radioStation'],
            quantity: quantityList['radioStation']
        },
        {
            name: 'talkShow',
            income: 10000 * multiplierList['talkShow'], 
            duration: durationList['talkShow'],
            quantity: quantityList['talkShow']
        },
        {
            name: 'tvChannel',
            income: 100000 * multiplierList['tvChannel'], 
            duration: durationList['tvChannel'],
            quantity: quantityList['tvChannel']
        },
        {
            name: 'politicalParty',
            income: 1000000 * multiplierList['politicalParty'], 
            duration: durationList['politicalParty'],
            quantity: quantityList['politicalParty']
        },
        {
            name: 'secretSociety',
            income: 10000000 * multiplierList['secretSociety'], 
            duration: durationList['secretSociety'],
            quantity: quantityList['secretSociety']
        },
        {
            name: 'privateIsland',
            income: 100000000 * multiplierList['privateIsland'], 
            duration: durationList['privateIsland'],
            quantity: quantityList['privateIsland']
        },
        {
            name: 'bananaRepublic',
            income: 1000000000 * multiplierList['bananaRepublic'], 
            duration: durationList['bananaRepublic'],
            quantity: quantityList['bananaRepublic']
        },
        {
            name: 'orbitalLoudspeaker',
            income: 10000000000 * multiplierList['orbitalLoudspeaker'], 
            duration: durationList['orbitalLoudspeaker'],
            quantity: quantityList['orbitalLoudspeaker']
        },
        {
            name: 'reptiloidConsilium',
            income: 100000000000 * multiplierList['reptiloidConsilium'], 
            duration: durationList['reptiloidConsilium'],
            quantity: quantityList['reptiloidConsilium']
        }
    ]

    return (
        <article className='activities'>
            <Activity 
                activitiesList = {activitiesList}
            />
        </article>
    )
}
