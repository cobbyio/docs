import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav aria-label="breadcrumb" className='flex justify-center items-center pt-2'>
            <ol className="breadcrumb">
                <li className="breadcrumb-item flex justify-between items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                        <g fill="#00aaf0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M12,2.09961l-11,9.90039h3v9h7v-6h2v6h7v-9h3zM12,4.79102l6,5.40039v0.80859v8h-3v-6h-6v6h-3v-8.80859z"></path></g></g>
                    </svg>
                    <Link to="/" className="text-secondary hidden md:block">cobby Help Center</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <li key={to} className="breadcrumb-item">
                            <Link to={to} className='text-gray capitalize'>{value}</Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
