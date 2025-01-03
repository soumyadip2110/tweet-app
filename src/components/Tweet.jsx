import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function Tweet() {
    const [tweet, setTweet] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        appwriteService.getTweet(slug)
            .then((tweet) => {
                setTweet(tweet);
            })
            .catch((err) => console.log(err));
    }, []);

    return tweet ? (
        <div className='bg-blue-700'>
            <div>
                <h3>{tweet.content}</h3>
            </div>
            <div>
                <p>{tweet.timestamp}</p>
            </div>
        </div>
    ) : <h1>Tweet unavalibale</h1>
}

export default Tweet