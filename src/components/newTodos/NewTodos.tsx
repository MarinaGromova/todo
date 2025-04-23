import { useState } from 'react'
import { NewTodo } from '../newTodo/NewTodo'
import { Button, ButtonIcon } from '../ui/button/Button'
import { data } from './Constants'
import styles from './NewTodos.module.scss'

/* TODO: 1. Сделать кнопку DELETE.  ☑
				 2. Доделать кнопку: выбрать всё. ☑
				 3. Менять местами таски.☑
				 4. Добавлять новые таски через кнопку Add.
				 5. Отмеченные таски становятся перечеркнутыми и переносятся в правый столбик.
				 6. При нажатии на гамбургер вылетает меню.
*/

interface NewTodoProps {
	buttonText: string
}

export const NewTodos = ({ buttonText }: NewTodoProps) => {
	const [tasks, setTasks] = useState(data)
	const [choice, setChoiceAll] = useState(false)

	const choiceAll = () => {
		setChoiceAll(!choice)
		if (!choice) {
			let task = tasks.map(t => {
				t.isDone = true
				return t
			})
			setTasks(task)
		} else {
			let task = tasks.map(t => {
				t.isDone = false
				return t
			})
			setTasks(task)
		}
	}

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
				<div className={styles.wrapper}>
					<NewTodo tasks={tasks} setTasks={setTasks} />
					<div className={styles.il}>
						<img src='layout/circle1.svg' />
						<p>Add</p>
					</div>

					<div className={styles.il}>
						<button className={styles.circle} onClick={choiceAll}>
							{choice ? (
								<img src='layout/circle2.svg' />
							) : (
								<img src='layout/circle1.svg' />
							)}
						</button>
						<p>ALL</p>
					</div>
				</div>
			</div>
		</>
	)
}
