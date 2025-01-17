import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) =>
{
    const renderedList = videos.map(vid =>
    {
        return (
            <div className='item'>
                <VideoItem
                    key={vid.id.videoId}
                    onVideoSelect={onVideoSelect}
                    video={vid}
                />
            </div>
        );
    });
    return (
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    );
};

export default VideoList;