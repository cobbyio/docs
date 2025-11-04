import React from 'react'
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Cards({ Svg, title, links, link }) {
    const customeCard = title.toLowerCase() === 'account & settings';

    return (
        <div className={clsx("flex flex-wrap flex-col justify-between w-full lg:w-72 rounded-md p-8 lg:min-h-[460px] h-fit", {
            'bg-gray-mid': customeCard,
            'bg-white': !customeCard,
        })}>
            <div className="flexCenter">
                <Svg className="featureSvg" alt={title} />
                <h3 className="px-2 text-center title-lg">{title}</h3>
                <div className="flexCenter lg:flexStart w-full px-4">
                    {links && <ul className="text-secondary pl-0">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.link} className="text-secondary text-pretty">{link.title}</Link>
                            </li>
                        ))}
                    </ul>}
                </div>
            </div>
            {link && (
                <Link to={link} className="btns hover:text-white hover:no-underline w-full text-center">
                    view all
                </Link>
            )}
        </div>
    );
}
