import { Children, cloneElement } from 'react';
import './Container.scss';

const Container = ({ children }) => {
    return (
        <div className="container">
            {Children.map(children, (child) => {
                return cloneElement(child);
            })}
        </div>
    );
};

export default Container;
