import React, { useEffect } from 'react';

export default function Storylane({ src }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.storylane.io/js/v1/storylane.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const containerStyle = {
        position: 'relative',
        paddingBottom: 'calc(45.26% + 27px)',
        width: '100%',
        height: 0,
        transform: 'scale(1)',
    };

    const iframeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: '1px solid rgba(63,95,172,0.35)',
        boxShadow: '0px 0px 18px rgba(26, 19, 72, 0.15)',
        borderRadius: '10px',
        boxSizing: 'border-box',
    };

    return (
        <div>
            <div className="sl-embed" style={containerStyle}>
                <iframe
                    className="sl-demo"
                    src={src}
                    name="sl-embed"
                    allow="fullscreen"
                    allowFullScreen
                    style={iframeStyle}
                />
            </div>
        </div>
    );
};


