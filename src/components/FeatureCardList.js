import React from 'react'
import Cards from './Cards';

export default function FeatureCardList({ featureList }) {
    return (
        <section>
            <div className='features'>
                <div className="flex justify-center lg:justify-around items-center flex-wrap gap-2 mx-auto">
                    {featureList.map((props, idx) => (
                        <Cards key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
