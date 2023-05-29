import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiFillCaretUp } from 'react-icons/ai'
import formatter from 'finnaz/utils/formatter'

interface SpentItemsProps {
	when: string[]
	price: string
}
const SpentItems = ({ when, price }: SpentItemsProps) => {
	return (
		<div className="mt-2">
			{when.map((t: string) => {
				return (
					<div key={t} className=" flex flex-row items-center py-1">
						<h2
							className={
								t === 'Last Month'
									? 'text-md w-1/3 font-medium'
									: 'w-1/3 text-lg font-semibold'
							}
						>
							{t}
						</h2>
						<h2 className="w-1/3 text-center">{price}</h2>
						<div className="mr-2 flex w-1/3 justify-end">
							{t === 'Month' ? (
								<AiFillCaretUp className="text-whitegreen" />
							) : (
								<GoPrimitiveDot />
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}

interface InputProps {
	amount: number
}
function Spent({ amount }: InputProps) {
	const times = ['Today', 'Week', 'Month', 'Last Month']
	const price = formatter(amount)
	return (
		<section className="flex w-4/5 flex-col gap-1">
			<h1 className="py-4 text-4xl font-semibold">Spent</h1>
			<div className="bg-table w-full rounded-xl p-5">
				<div className="border-table w-full border-b pb-2">
					<div className="flex flex-row items-center justify-between">
						<p className="font-thin">when</p>
						<p className="font-light">amount</p>
						<p className="font-light">status</p>
					</div>
				</div>
				<SpentItems when={times} price={price} />
			</div>
		</section>
	)
}

export default Spent
