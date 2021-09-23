import { rankList, rankHeader, rankHeaderCell, rankItem, rankItemCell } from './index.module.css';



export default function RankList ({title='', columns=[], items=[], type}) {
    switch(type){
        case 'funds':
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
                                <td className={rankItemCell}>{item.present_value.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        case 'achievement':
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
                                <td className={rankItemCell}>{item.percentage.toFixed(2)}</td>
                            </tr>
                        ))}
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