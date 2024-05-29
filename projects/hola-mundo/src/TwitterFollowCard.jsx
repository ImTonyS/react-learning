import './TwitterFollowCard.css'
import { useState } from 'react';

export function TwitterFollowCard({name, username, initialIsFollowing}) {
    const [isFollowing, setIsfollowing] = useState(initialIsFollowing);


    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is--following' :
        'tw-followCard-button';

    const handleClick = () => {
        setIsfollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'> 
                <img 
                className="tw-followCard-avatar"
                src={`https://unavatar.io/github/${username}`}
                alt="El avatar de tony" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{`@${username}`}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-unfollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}