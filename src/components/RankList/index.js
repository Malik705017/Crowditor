import { rankList, rankHeader, rankHeaderColumn, rankItem, rankItemColumn } from './index.module.css';

export default function RankList ({columns=[], items=[]}) {
    return (
        <table className={rankList}>
            <thead className={rankHeader}>
                <th className={rankHeaderColumn}>名次</th>
                {columns.map((column) => (
                    <th className={rankHeaderColumn}>{column}</th>
                ))}
            </thead>
            <tbody>
                {items.map((item, i) => (
                    <tr className={rankItem}>
                        <td className={rankItemColumn}>{i+1}</td>
                        {item.map((column) => (
                            <td className={rankItemColumn}>{column}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}