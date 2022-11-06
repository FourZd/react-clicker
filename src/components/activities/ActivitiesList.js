import React, { useState } from 'react'
import Activity from './Activity'
import { multiplierSelector } from '../../store/reducers/activities/incomeMultiplierSlice'
import { durationSelector } from '../../store/reducers/activities/activityDurationSlice'
import { useSelector } from 'react-redux'

export default function ActivitiesList() {
    const [shopAssortment, setShopAssortment] = useState([
        {
            name: 'tgChannel', 
            income: 1*multiplierSelector.tgChannel, 
            duration: 1*useSelector(durationSelector)['tgChannel']
        },
        {
            name: 'ytChannel', 
            income: 10*multiplierSelector.ytChannel, 
            duration: 1*useSelector(durationSelector)
        },
        {
            name: 'newsWebsite', 
            income: 100*multiplierSelector.newsWebsite, 
            duration: 1*useSelector(durationSelector)
        },
        {
            name: 'radioStation', 
            income: 1000*multiplierSelector.radioStation, 
            duration: 1*useSelector(durationSelector)
        },
        {
            name: 'talkShow', 
            income: 10000*multiplierSelector.talkShow, 
            duration: 1*useSelector(durationSelector)
        },
        {
            name: 'tvChannel', 
            income: 100000*multiplierSelector.tvChannel, 
            duration: 1*useSelector(durationSelector)
        },
        {
            name: 'politicalParty', 
            income: 1000000*multiplierSelector.politicalParty, 
            duration: 1*useSelector(durationSelector)
        },
        {
            name: 'secretSociety', 
            income: 10000000*multiplierSelector.secretSociety, 
            duration: 1*useSelector(durationSelector)
        },
        {
            name: 'privateIsland', 
            income: 100000000*multiplierSelector.privateIsland, 
            duration: 1*useSelector(durationSelector)
        },
        {
            name: 'bananaRepublic', 
            income: 1000000000*multiplierSelector.bananaRepublic, 
            duration: 1*useSelector(durationSelector)
        },
        {
            name: 'orbitalLoudspeaker', 
            income: 10000000000*multiplierSelector.orbitalLoudspeaker, 
            duration: 1*useSelector(durationSelector)
        },
        {
            name: 'reptiloidConsilium', 
            income: 100000000000*multiplierSelector.reptiloidConsilium, 
            duration: 1*useSelector(durationSelector)
        }

    ])




    return (
        <Activity />
    )
}
