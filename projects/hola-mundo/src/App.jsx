import './TwitterFollowCard.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {

    return (
        <section className='App'>
        <TwitterFollowCard
            initialIsFollowing = {false}
            name={"Antonio Villaverde"} 
            username="imtonys" />

        <TwitterFollowCard 
            initialIsFollowing
            name={"midudev"} 
            username={"midudev"} />
        
        </section>
    )
}