import { useState } from 'react'

export const useFilter = () => {
	type FilterValueType = 'all' | 'active' | 'completed'
	const [filter, setFilter] = useState<FilterValueType>('all')

	const handleClick = (filter: FilterValueType) => {
		setFilter(filter)
	}
	return { handleClick, filter }
}
