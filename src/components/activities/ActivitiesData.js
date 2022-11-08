const activityNames = [
    {id: 1, name: 'Telegram channel', price: 5, income: 1}, 
    {id: 2, name: 'Youtube channel', price: 50, income: 10}, 
    {id: 3, name: 'News website', price: 500, income: 100}, 
    {id: 4, name: 'Radiostation', price: 5000, income: 1000},
    {id: 5, name: 'TV talk-show', price: 50000, income: 10000}, 
    {id: 6, name: 'TV channel', price: 500000, income: 100000},
    {id: 7, name: 'Political party', price: 5000000, income: 1000000},
    {id: 8, name: 'Secret society', price: 50000000, income: 10000000},
    {id: 9, name: 'Private island', price: 500000000, income: 100000000},
    {id: 10, name: 'Banana republic', price: 5000000000, income: 1000000000},
    {id: 11, name: 'Orbital loudspeaker', price: 50000000000, income: 10000000000},
    {id: 12, name: 'Reptiloid consilium', price: 500000000000, income: 100000000000},
]

class ActivityGenerator {
    constructor() {
        this.activityList = []
    }
    createActivity(id, name, income, price, durationList, quantityList) {
        const activity = {
            id: id,
            name: name,
            duration: durationList(id),
            quantity: quantityList(id),
            income: income,
            price: price
        }
        return activity
    }

    getActivityList = (multiplierList, durationList, quantityList) => {
        activityNames.map(activity => {
            let newActivity = this.createActivity(
                activity.id,
                activity.name, 
                activity.income * multiplierList(activity.id) * quantityList(activity.id), 
                activity.price, 
                durationList, 
                quantityList
                )
            if (!(this.activityList.find(element => element.id === activity.id))) { // if not
                this.activityList.push(newActivity)
            } else {
                const target = this.activityList.find((obj) => obj.id === activity.id);
                target.duration = durationList(activity.id)
                target.quantity = quantityList(activity.id)
                target.income = activity.income * multiplierList(activity.id) * quantityList(activity.id)
                }
        })
        return this.activityList
    }
}
const activityGenerator = new ActivityGenerator() 

export {activityGenerator}