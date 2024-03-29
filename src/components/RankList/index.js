import React from 'react';
import { rankList, rankHeader, rankHeaderCell, rankItem, rankItemCell, rank, name, value, domain, Type, headerSeparate, separateWrapper, separate, marked  } from './index.module.css';
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
                        {items.map((item, i, arr) => (
                            <React.Fragment key={`${title}-item-${i}`}>
                            <tr  className={rankItem}>
                                <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                <td className={classnames(rankItemCell, name)}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></td>
                                <td className={classnames(rankItemCell, value)}>{item.present_value.toLocaleString()}</td>
                            </tr>
                            {arr.length - 1 !== i &&
                                <tr className={separateWrapper}>
                                    <td className={classnames(separate)} colSpan="5">
                                        <hr></hr>
                                    </td>
                                </tr>
                            }
                            </React.Fragment>
                        ))}
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
                    {items.map((item, i, arr) => (
                        <React.Fragment key={`${title}-item-${i}`}>
                        <tr  className={rankItem}>
                            <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                            <td className={classnames(rankItemCell, name)}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></td>
                            <td className={classnames(rankItemCell, value)}>{Math.round(item.percentage * 100).toLocaleString() + "%"}</td>
                        </tr>
                        {arr.length - 1 !== i &&
                            <tr className={separateWrapper}>
                                <td className={classnames(separate)} colSpan="5">
                                    <hr></hr>
                                </td>
                            </tr>
                        }
                        </React.Fragment>
                    ))}
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
                    {items.map((item, i, arr) => (
                        <React.Fragment key={`${title}-item-${i}`}>
                            <tr className={item.success ? classnames(rankItem, marked) : rankItem}>
                                <td className={classnames(rankItemCell, rank)}>{item.rank}</td>
                                <td className={classnames(rankItemCell, name)}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></td>
                                <td className={classnames(rankItemCell, domain)}>{item.domain}</td>
                                <td className={classnames(rankItemCell, Type)}>{item.type}</td>
                                <td className={classnames(rankItemCell, value)}>{item.success ? '成功' : '失敗'}</td>
                            </tr>
                            {arr.length - 1 !== i &&
                                <tr className={separateWrapper}>
                                    <td className={item.success ? classnames(separate, marked) : separate} colSpan="5">
                                        <hr></hr>
                                    </td>
                                </tr>
                            }
                        </React.Fragment>
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