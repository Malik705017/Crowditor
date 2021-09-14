import { rankList, rankHeader, rankHeaderCell, rankItem, rankItemCell } from './index.module.css';

export default function RankList ({columns=[], items=[]}) {
    return (
        <table className={rankList}>
            <thead className={rankHeader}>
                <th className={rankHeaderCell}>名次</th>
                {columns.map((column) => (
                    <th className={rankHeaderCell}>{column}</th>
                ))}
            </thead>
            <tbody>
                {items.map((item, i) => (
                    <tr className={rankItem}>
                        <td className={rankItemCell}>{i+1}</td>
                        {item.map((column) => (
                            <td className={rankItemCell}>{column}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}