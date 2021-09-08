import classnames from 'classnames';
import { useState, useEffect } from 'react';

import { chartBox, mid, large } from './index.module.css';
import WordCloud from '../Chart/WordCloud';
import StackedBarFull from '../Chart/StackedBarFull';

// size : mid / large
// type : WordCloud / StackedBarFull
const ChartBox = ({ className, size, chartTitle, type }) => {
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
            {(() => {
                switch (type) {
                    case 'WordCloud':
                        return <WordCloud />
                    case 'StackedBarFull':
                        return <StackedBarFull />
                    default:
                        return <></>
                }
            })()}
        </div>
    );
};

export default ChartBox;