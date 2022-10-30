import React, {useState, useEffect} from 'react'
import Publicate from './publicateButton/Publicate'
import ShowValues from './statistics/ShowValues';
import ShopAccess from './shop/ShopAccess';

export default function ValueController() {

    /* -------------- Value states -----------------*/
    const [posts, setPosts] = useState(0); // posts hook
    const [subscribers, setSubscribers] = useState(0); // subs hook
    const [money, setMoney] = useState(0); // money hook
    const [popularity, setPopularity] = useState(0); // popularity
    const [worldTension, setWorldTension] = useState(1);
    /* ------------------------------------------------------------------------------------- */

    /* -------------- Formula states -----------------*/
    const [subscribersMultiplierFormula, setSubscribersMultiplierFormula] = useState(1 * popularity * worldTension)
    const [moneyMultiplierFormula, setMoneyMultiplierFormula] = useState(subscribers*0.002)
    const [worldTensionMultiplierFormula, setWorldTensionMultiplierFormula] = useState(popularity/10000)
    /* ------------------------------------------------------------------------------------- */

    

    /* -------------- Handling increment events -----------------*/
    const increaseValue = (value) => {
        switch (value) {

            case 'subscribers':
                setSubscribers(popularity 
                    ? (subscribers + subscribersMultiplierFormula) 
                    : (subscribers + 0.2))
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
                setSubscribersMultiplierFormula(subscribersMultiplierFormula + effect)
                break
            case 'money':
                setMoneyMultiplierFormula(...moneyMultiplierFormula + effect)
                break
            case 'worldTension':
                setWorldTensionMultiplierFormula(worldTensionMultiplierFormula + effect)
                break
            default:
                throw 'Value OR effect is not valid'
        }
    }
    /* ------------------------------------------------------------------------------------- */

    
    /* ---------------------------------Random page title----------------------------------- */
    useEffect(() => {
        const dice = Math.floor(Math.random() * 5);
        let title = null;
        switch (dice) {
            case 0:
                title = `You have ${posts} posts!`
                break
            case 1:
                title = `${subscribers} people following your channel!`
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
        }, []);
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
            <ShopAccess
                handleMultiplier = {handleMultiplier}
                decreaseCurrency = {decreaseValue}
                money = {money}
            />
        </main>
        )
    }
