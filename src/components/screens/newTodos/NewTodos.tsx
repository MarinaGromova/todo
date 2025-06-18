import { useState } from 'react'
import { ButtonAdd } from '../../ui/button/buttonAdd/ButtonAdd'
import { ButtonAll } from '../../ui/button/buttonAll/ButtonAll'
import { NewTodo } from '../newTodo/NewTodo'
import { data } from './Constants'
import styles from './NewTodos.module.scss'

/* TODO: 
				 6. Отмеченные таски становятся перечеркнутыми и переносятся в правый столбик.
*/

export type TaskType = {
	id: number
	task: string
	isDone: boolean
}

export interface NewTodoProps {
	tasks: Array<TaskType>
	setTasks: any
}

export const NewTodos = () => {
	const [tasks, setTasks] = useState(data)

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.heading}>todo</h1>
			<ButtonAdd tasks={tasks} setTasks={setTasks} />
			{tasks.length === 0 ? (
				<img className={styles.img} src='/public/main/lauren.jpg' />
			) : (
				<>
					<ul className={styles.wrapper}>
						{tasks.map(t => {
							return (
								<li key={t.id} className={styles.li}>
									<NewTodo t={t} tasks={tasks} setTasks={setTasks} />
								</li>
							)
						})}
					</ul>
					<ButtonAll tasks={tasks} setTasks={setTasks} />
				</>
			)}
		</main>
	)
}
