import './Stats.scss'

import { Title } from '../../../components/UI'

type StatsProps = {
	stats: string
	text: string
}

const Stats = ({ stats, text }: StatsProps) => {
	return (
		<div className='stats'>
			<p className='stats__amount'>{stats}</p>
			<Title title={text} />
		</div>
	)
}

export default Stats
