import classnames from 'classnames';
import { useState, useEffect } from 'react';

import { chartBox, mid, large } from './index.module.css';

// size : mid / large
const ChartBox = ({ className, size, chartTitle }) => {
    const [sizeClass, setSizeClass] = useState(mid);
    useEffect(() => {
        switch (size) {
            case 'large': {
                setSizeClass(large);
                break;
            }
            default: {
                setSizeClass(mid);
                break;
            }
        }
    }, [size])

    return (
        <div className={classnames(chartBox, sizeClass, className)}>
            {chartTitle}
        </div>
    );
};

export default ChartBox;