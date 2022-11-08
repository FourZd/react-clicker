const activityNames = [
    {name: 'tgChannel', price: 5, income: 1}, 
    {name: 'ytChannel', price: 50, income: 10}, 
    {name: 'newsWebsite', price: 500, income: 100}, 
    {name: 'radioStation', price: 5000, income: 1000},
    {name: 'talkShow', price: 50000, income: 10000}, 
    {name: 'tvChannel', price: 500000, income: 100000},
    {name: 'politicalParty', price: 5000000, income: 1000000},
    {name: 'secretSociety', price: 50000000, income: 10000000},
    {name: 'privateIsland', price: 500000000, income: 100000000},
    {name: 'bananaRepublic', price: 5000000000, income: 1000000000},
    {name: 'orbitalLoudspeaker', price: 50000000000, income: 10000000000},
    {name: 'reptiloidConsilium', price: 500000000000, income: 100000000000},
]

class ActivityGenerator {
    constructor() {
        this.activityList = []
    }
    createActivity(name, income, price, durationList, quantityList) {
        const activity = {
            name: name,
            duration: durationList[name],
            quantity: quantityList[name],
            income: income,
            price: price
        }
        return activity
    }

    getActivityList = (multiplierList, durationList, quantityList) => {
        activityNames.map(activity => {
            let newActivity = this.createActivity(
                activity.name, 
                activity.income * multiplierList[activity.name] * quantityList[activity.name], 
                activity.price, 
                durationList, 
                quantityList
                )
            if (!(this.activityList.find(element => element.name === activity.name))) { // if not
                this.activityList.push(newActivity)
            } else {
                const target = this.activityList.find((obj) => obj.name === activity.name);
                target.duration = durationList[activity.name]
                target.quantity = quantityList[activity.name]
                target.income = activity.income * multiplierList[activity.name] * quantityList[activity.name]
                }
        })
        return this.activityList
    }
}
const activityGenerator = new ActivityGenerator() 

export {activityGenerator}