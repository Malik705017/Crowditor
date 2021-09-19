import { rankList, rankHeader, rankHeaderCell, rankItem, rankItemCell } from './index.module.css';

export default function RankList ({title='', columns=[], items=[]}) {
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
                        {item.map((column, j) => (
                            <td key={`${title}-cell-${i}-${j}`} className={rankItemCell}>{column}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}