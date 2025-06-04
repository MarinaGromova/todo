import { useState } from 'react'
import { ButtonAdd } from '../../ui/button/buttonAdd/ButtonAdd'
import { ButtonAll } from '../../ui/button/buttonAll/ButtonAll'
import { NewTodo } from '../newTodo/NewTodo'
import { data } from './Constants'
import styles from './NewTodos.module.scss'

/* TODO: 1. Сделать кнопку DELETE.  ☑
				 2. Доделать кнопку: выбрать всё. ☑
				 3. Менять местами таски.☑
				 4. Добавлять новые таски через кнопку Add.☑
				 5. Отмеченные таски становятся перечеркнутыми и переносятся в правый столбик.
				 6. При нажатии на гамбургер вылетает меню.
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
		</main>
	)
}
