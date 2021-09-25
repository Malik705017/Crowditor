import React from 'react';
import { rankList, rankHeader, rankHeaderCell, rankItem, rankItemCell, rank, name, value, headerSeparate, separateWrapper } from './index.module.css';
import classnames from "classnames";


export default function RankList ({title='', columns=[], items=[], type}) {
    switch(type){
        case 'funds':
            return (
                <table className={rankList}>
                    <thead className={rankHeader}>
                        <tr>
                            <th colSpan="3" className={rankHeaderCell}>{title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={rankItem}>
                            {columns.map((column, i) => (
                                <td key={`${title}-column-${i}`} className={classnames(rankItemCell, rank)}>{column}</td>
                            ))}
                        </tr>
                        <tr className={separateWrapper}>
                            <td colSpan="3">
                                <div><hr className={headerSeparate}></hr></div>
                            </td>
                        </tr>
                        {items.map((item, i, arr) => {
                            if(arr.length - 1 === i){
                                return(<React.Fragment key={`${title}-item-${i}`}>
                                <tr  className={rankItem}>
                                    <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                    <td className={classnames(rankItemCell, name)}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></td>
                                    <td className={classnames(rankItemCell, value)}>{item.present_value.toLocaleString()}</td>
                                </tr>
                                </React.Fragment>)
                            }
                            else{
                                return(
                                    <React.Fragment key={`${title}-item-${i}`}>
                                    <tr  className={rankItem}>
                                        <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                        <td className={classnames(rankItemCell, name)}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></td>
                                        <td className={classnames(rankItemCell, value)}>{item.present_value.toLocaleString()}</td>
                                    </tr>
                                    <tr className={separateWrapper}>
                                        <td colSpan="3">
                                            <div><hr></hr></div>
                                        </td>
                                    </tr>
                                    </React.Fragment>
                                )
                            }
                        })}
                    </tbody>
                </table>
            )
        case 'achievement':
            return (
                <table className={rankList}>
                <thead className={rankHeader}>
                    <tr>
                        <th colSpan="3" className={rankHeaderCell}>{title}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={rankItem}>
                        {columns.map((column, i) => (
                            <td key={`${title}-column-${i}`} className={classnames(rankItemCell, rank)}>{column}</td>
                        ))}
                    </tr>
                    <tr className={separateWrapper}>
                        <td colSpan="3">
                            <div><hr className={headerSeparate}></hr></div>
                        </td>
                    </tr>
                    {items.map((item, i, arr) => {
                        if(arr.length - 1 === i){
                            return(<React.Fragment key={`${title}-item-${i}`}>
                            <tr  className={rankItem}>
                                <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                <td className={classnames(rankItemCell, name)}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></td>
                                <td className={classnames(rankItemCell, value)}>{item.percentage.toFixed(2)}</td>
                            </tr>
                            </React.Fragment>)
                        }
                        else{
                            return(
                                <React.Fragment key={`${title}-item-${i}`}>
                                <tr  className={rankItem}>
                                    <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                    <td className={classnames(rankItemCell, name)}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></td>
                                    <td className={classnames(rankItemCell, value)}>{item.percentage.toFixed(2)}</td>
                                </tr>
                                <tr className={separateWrapper}>
                                    <td colSpan="3">
                                        <div><hr></hr></div>
                                    </td>
                                </tr>
                                </React.Fragment>
                            )
                        }
                    })}
                </tbody>
            </table>
            )
        case 'peers':
            return (
                <table className={rankList}>
                    <thead className={rankHeader}>
                        <tr>
                            {columns.map((column, i) => (
                                <th key={`${title}-column-${i}`} className={rankHeaderCell}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, i) => (
                            <tr key={`${title}-item-${i}`} className={rankItem}>
                                <td className={rankItemCell}>{item.rank}</td>
                                <td className={rankItemCell}><a href={item.link}>{item.title}</a></td>
                                <td className={rankItemCell}>{item.domain}</td>
                                <td className={rankItemCell}>{item.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        default:
            return (
                <table className={rankList}>
                    
                </table>
            )
    }
}