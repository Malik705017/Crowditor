import React from 'react';
import { rankList, rankHeader, rankHeaderCell, rankItem, rankItemCell, rank, name, value, domain, Type, headerSeparate, separateWrapper, separate, failure } from './index.module.css';
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
                            <td className={separate} colSpan="3">
                                <hr className={headerSeparate}></hr>
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
                                        <td className={separate} colSpan="3">
                                            <hr></hr>
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
                        <td className={separate} colSpan="3">
                            <hr className={headerSeparate}></hr>
                        </td>
                    </tr>
                    {items.map((item, i, arr) => {
                        if(arr.length - 1 === i){
                            return(<React.Fragment key={`${title}-item-${i}`}>
                            <tr  className={rankItem}>
                                <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                <td className={classnames(rankItemCell, name)}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></td>
                                <td className={classnames(rankItemCell, value)}>{Math.round(item.percentage * 100).toLocaleString() + "%"}</td>
                            </tr>
                            </React.Fragment>)
                        }
                        else{
                            return(
                                <React.Fragment key={`${title}-item-${i}`}>
                                <tr  className={rankItem}>
                                    <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                    <td className={classnames(rankItemCell, name)}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></td>
                                    <td className={classnames(rankItemCell, value)}>{Math.round(item.percentage * 100).toLocaleString() + "%"}</td>
                                </tr>
                                <tr className={separateWrapper}>
                                    <td className={separate} colSpan="3">
                                        <hr></hr>
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
                        <th colSpan="5" className={rankHeaderCell}>{title}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={rankItem}>
                        {columns.map((column, i) => (
                            <td key={`${title}-column-${i}`} className={classnames(rankItemCell, rank)}>{column}</td>
                        ))}
                    </tr>
                    <tr className={separateWrapper}>
                        <td className={separate} colSpan="5">
                            <hr className={headerSeparate}></hr>
                        </td>
                    </tr>
                    {items.map((item, i, arr) => {
                        if(arr.length - 1 === i){
                            if(item.success){
                                return(<React.Fragment key={`${title}-item-${i}`}>
                                <tr  className={rankItem}>
                                    <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                    <td className={classnames(rankItemCell, name)}><a href={item.link}>{item.title}</a></td>
                                    <td className={classnames(rankItemCell, domain)}>{item.domain}</td>
                                    <td className={classnames(rankItemCell, Type)}>{item.type}</td>
                                    <td className={classnames(rankItemCell, value)}>成功</td>
                                </tr>
                                </React.Fragment>)
                            }
                            else{
                                return(<React.Fragment key={`${title}-item-${i}`}>
                                <tr  className={classnames(rankItem, failure)}>
                                    <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                    <td className={classnames(rankItemCell, name)}><a href={item.link}>{item.title}</a></td>
                                    <td className={classnames(rankItemCell, domain)}>{item.domain}</td>
                                    <td className={classnames(rankItemCell, Type)}>{item.type}</td>
                                    <td className={classnames(rankItemCell, value)}>失敗</td>
                                </tr>
                                </React.Fragment>)
                            }
                            
                        }
                        else{
                            if(item.success){
                                return(
                                    <React.Fragment key={`${title}-item-${i}`}>
                                    <tr  className={rankItem}>
                                        <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                        <td className={classnames(rankItemCell, name)}><a href={item.link}>{item.title}</a></td>
                                        <td className={classnames(rankItemCell, domain)}>{item.domain}</td>
                                        <td className={classnames(rankItemCell, Type)}>{item.type}</td>
                                        <td className={classnames(rankItemCell, value)}>成功</td>
                                    </tr>
                                    <tr className={separateWrapper}>
                                        <td className={classnames(separate)} colSpan="5">
                                            <hr></hr>
                                        </td>
                                    </tr>
                                    </React.Fragment>
                                )
                            }
                            else{
                                return(
                                    <React.Fragment key={`${title}-item-${i}`}>
                                    <tr  className={classnames(rankItem, failure)}>
                                        <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                        <td className={classnames(rankItemCell, name)}><a href={item.link}>{item.title}</a></td>
                                        <td className={classnames(rankItemCell, domain)}>{item.domain}</td>
                                        <td className={classnames(rankItemCell, Type)}>{item.type}</td>
                                        <td className={classnames(rankItemCell, value)}>失敗</td>
                                    </tr>
                                    <tr className={separateWrapper}>
                                        <td className={classnames(separate, failure)} colSpan="5">
                                            <hr></hr>
                                        </td>
                                    </tr>
                                    </React.Fragment>
                                )
                            }
                            
                        }
                    })}
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