import React, {useState, useEffect} from 'react'
import Publicate from './publicateButton/Publicate'
import ShowValues from './statistics/ShowValues';
import ShopAssortment from './shop/ShopAssortment';

export default function ValueController() {

    const [dice] = useState(Math.floor(Math.random() * 5));
    /* ---------------------- Value states --------------------------------------------------*/
    const [posts, setPosts] = useState(0); // posts hook
    const [subscribers, setSubscribers] = useState(0); // subs hook
    const [money, setMoney] = useState(0); // money hook
    const [popularity, setPopularity] = useState(1); // popularity
    const [worldTension, setWorldTension] = useState(1);
    /* ------------------------------------------------------------------------------------- */
    const [subscribersBonus, setSubscribersBonus] = useState(1); // subs hook
    const [moneyBonus, setMoneyBonus] = useState(1); // money hook
    const [worldTensionBonus, setWorldTensionBonus] = useState(1); // popularity
    /* ----------------------- Formulas -----------------------------------------------------*/
    let subscribersMultiplierFormula = 1 * popularity * worldTension * subscribersBonus
    let moneyMultiplierFormula = subscribers * 0.002 * moneyBonus
    let worldTensionMultiplierFormula = popularity/10000 * worldTensionBonus
    /* ------------------------------------------------------------------------------------- */

    /* -------------- Handling increment events -----------------*/
    const increaseValue = (value) => {
        switch (value) {

            case 'subscribers':
                setSubscribers(subscribers + subscribersMultiplierFormula) 
                setPopularity(subscribers / 50) // popularity constant formula
                break

            case 'money':
                setMoney(subscribers >= 1 
                    ? money + moneyMultiplierFormula
                    : money)
                break

            case 'worldTension':
                setWorldTension(worldTension + worldTensionMultiplierFormula)
                break

            case 'posts':
                setPosts(posts + 1)
                break

            default:
                throw 'This value is not valid'
        }
    }
    /* ------------------------------------------------------------------------------------- */

    const decreaseValue = (value, amount) => {
        switch (value) {

            case 'money':
                setMoney(money - amount)
                break
            
            default:
                throw 'Something is wrong with decrease'
        }
    }
    /* ------------Adding effects from upgrades / items to value multipliers--------------- */
    const handleMultiplier = (value, effect) => {
        switch (value) {

            case 'subscribers':
                setSubscribersBonus(subscribersBonus * effect)
                break
            case 'money':
                setMoneyBonus(moneyBonus * effect)
                break
            case 'worldTension':
                setWorldTensionBonus(worldTensionBonus * effect)
                break
            default:
                throw 'Value OR effect is not valid'
        }
    }
    /* ------------------------------------------------------------------------------------- */

    
    /* ---------------------------------Random page title----------------------------------- */
    useEffect(() => {
        
        let title = null;
        switch (dice) {
            case 0:
                title = `You have ${posts} posts!`
                break
            case 1:
                title = `${Math.round(subscribers)} people following your channel!`
                break
            case 2:
                title = `${money}$ on your bank account 😎`
                break
            case 3:
                title = `${popularity} points of popularity, you're almost like Elon Musk 🚀`
                break
            case 4:
                title = `World is ${worldTension}% in chaos. Good job! Probably...`
                break
            default:
                console.log(dice)
                throw 'Hey, something is wrong with the document title...'
        }
        document.title = title;
        });
    /* ------------------------------------------------------------------------------------- */

    return (
        <main>
            <ShowValues 
                posts={posts}    
                money={money}
                subscribers={subscribers}
                popularity={popularity}
                worldTension={worldTension}
            />
            <Publicate
                handleValueIncrement = {increaseValue}
            />
            <ShopAssortment
                handleMultiplier = {handleMultiplier}
                decreaseCurrency = {decreaseValue}
                money = {money}
            />
        </main>
        )
    }
