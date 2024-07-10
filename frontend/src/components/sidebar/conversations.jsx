import React from 'react'
import Conversation from './conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/randomEmoji';

const conversations = () => {
    const { loading, conversations } = useGetConversations();
    return (
        <>
            <div className='flex flex-col overflow-auto'>
                {conversations.map((e, idx) => (
                    <Conversation key={e._id} conversation={e} emoji={getRandomEmoji()} lastIdx={idx === conversations.length - 1} />
                ))}

                {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
            </div>
        </>
    )
}

export default conversations
