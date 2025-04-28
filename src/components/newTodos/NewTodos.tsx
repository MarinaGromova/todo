import { useState } from 'react'
import { NewTodo } from '../newTodo/NewTodo'
import { Button, ButtonIcon } from '../ui/button/Button'
import { ButtonAdd } from '../ui/button/buttonAdd/ButtonAdd'
import { ButtonAll } from '../ui/button/buttonAll/ButtonAll'
import { data } from './Constants'
import styles from './NewTodos.module.scss'

/* TODO: 1. Сделать кнопку DELETE.  ☑
				 2. Доделать кнопку: выбрать всё. ☑
				 3. Менять местами таски.☑
				 4. Добавлять новые таски через кнопку Add.☑
				 5. Отмеченные таски становятся перечеркнутыми и переносятся в правый столбик.
				 6. При нажатии на гамбургер вылетает меню.
*/

interface NewButtonProps {
	buttonText: string
}

export type TaskType = {
	id: number
	task: string
	isDone: boolean
}

export interface NewTodoProps {
	tasks: Array<TaskType>
	setTasks: any
}

export const NewTodos = ({ buttonText }: NewButtonProps) => {
	const [tasks, setTasks] = useState(data)

	return (
		<>
			<div className={styles.wrapper}>
				<Button
					renderIcon={(props, state) => (
						<ButtonIcon
							{...props}
							text={buttonText}
							outline={state.isButton ? '4px solid white' : ''}
							fontSize={40}
						/>
					)}
				/>
				<ButtonAdd tasks={tasks} setTasks={setTasks} />
				<ul className={styles.wrapper}>
					{tasks.map((t, index: number) => {
						return (
							<li key={t.id} className={styles.li}>
								<NewTodo
									t={t}
									index={index}
									tasks={tasks}
									setTasks={setTasks}
								/>
							</li>
						)
					})}
				</ul>
				<ButtonAll tasks={tasks} setTasks={setTasks} />
			</div>
		</>
	)
}
