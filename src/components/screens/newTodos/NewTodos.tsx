import { useState } from 'react'
import { ButtonAdd } from '../../ui/button/buttonAdd/ButtonAdd'
import { ButtonAll } from '../../ui/button/buttonAll/ButtonAll'
import { NewTodo } from '../newTodo/NewTodo'
import { data } from './Constants'
import styles from './NewTodos.module.scss'
import { useFilter } from './useFilter'

export const NewTodos = () => {
	const [tasks, setTasks] = useState(data)
	const { filter, handleClick } = useFilter()

	let tasksForTodo = tasks.filter(t => {
		if (filter === 'active') return t.isDone
		if (filter === 'completed') return !t.isDone
		return true
	})

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.heading}>todo</h1>
			<ButtonAdd tasks={tasks} setTasks={setTasks} />
			{tasks.length === 0 ? (
				<img className={styles.img} src='/main/lauren.jpg' />
			) : (
				<>
					<ul className={styles.wrapper}>
						{tasksForTodo.map(t => {
							return (
								<li key={t.id} className={styles.li}>
									<NewTodo t={t} tasks={tasks} setTasks={setTasks} />
								</li>
							)
						})}
					</ul>
					<ButtonAll handleClick={handleClick} filter={filter} />
				</>
			)}
		</main>
	)
}
