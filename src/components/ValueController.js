import React, {useState, useEffect} from 'react'
import Publicate from './Publicate'

export default function ValueController() {

    const [posts, setPosts] = useState(0); // posts hook
    const [subscribers, setSubscribers] = useState(0); // subs hook
    const [money, setMoney] = useState(0); // money hook
    const [popularity, setPopularity] = useState(0); // popularity
    const [worldTension, setWorldTension] = useState(1);

    const addPost = () => {
        setPosts(posts + 1)
    }
    
    const addSubscribers = () => {
        setSubscribers(popularity 
            ? (subscribers + (1 * popularity * worldTension)) 
            : (subscribers + 0.2))
    }

    const addMoney = () => {
        setMoney(subscribers >= 1 
            ? money + subscribers*0.002
            : money)
    }

    const updatePopularity = () => {
        setPopularity(subscribers / 50)
    }

    const updateWorldTension = () => {
        setWorldTension(worldTension + popularity/10000)
    }
    /* Gonna add random title for every session, 
    so it will show posts/subs/money/threat */
    useEffect(() => { 
        document.title = `You have ${posts} posts for now!`;
        });


    return (
        <Publicate 
            posts={posts}    
            money={money}
            subscribers={subscribers}
            popularity={popularity}
            worldTension={worldTension}

            addPost={addPost}
            addSubscribers={addSubscribers}
            addMoney={addMoney}
            updatePopularity={updatePopularity}
            updateWorldTension={updateWorldTension}
        />
    )
}
