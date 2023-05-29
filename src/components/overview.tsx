import { useState, useEffect } from 'react'
import { CgSpinner } from 'react-icons/cg'
const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

const Loader = () => {
	return (
		<div className="h-10">
			<CgSpinner className="animate-spin text-white" />
		</div>
	)
}

const Overview = () => {
	interface dateObj {
		Date: number
		Day: string | undefined
		Month: string | undefined
		Year: number
	}
	const [date, setDate] = useState<dateObj>()
	useEffect(() => {
		const d = new Date()
		const [Year, Month, Day, date] = [
			d.getFullYear(),
			d.getMonth(),
			d.getUTCDay(),
			d.getDate(),
		]
		setDate({ Date: date, Day: days[Day], Month: monthNames[Month], Year })
	}, [])

	return (
		<section className="flex w-full justify-center border-b border-table py-8">
			<div className="flex w-8/12">
				<div className="flex w-1/2 flex-col justify-center">
					<h2 className="text-4xl font-semibold">Angel Zuniga</h2>
					<div className="mt-4 flex flex-col justify-start">
						<h3 className="text-2xl font-semibold">
							{date
								? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								  `${date?.Day}`
								: ''}
						</h3>
						<div>
							{date ? (
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								`${date.Month} ${date.Date}, ${date.Year} `
							) : (
								<Loader />
							)}
						</div>
					</div>
				</div>
				<div className="flex w-1/2 flex-col items-end justify-center">
					<div className="text- text-[#ffffff55]">Spent / Total</div>
					<div className="flex items-center text-2xl">
						<div className="text-2xl text-whitegreen">
							$93.354,87
						</div>
						<div className="mx-2 text-lg">/</div>
						<div className="text-2xl text-whitepurple">
							$150.000
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Overview
