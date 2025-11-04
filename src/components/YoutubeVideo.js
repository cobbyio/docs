import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function YoutubeVideo({ id, title }) {
    return (
        <div>
            <LiteYouTubeEmbed id={id} title={title} poster="maxresdefault" wrapperClass="yt-lite" params='controls=1' />
        </div>
    )
}
