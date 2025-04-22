import { ChangeEvent, useState } from 'react'
import { GoArrowDown, GoArrowUp } from 'react-icons/go'
import { Button, ButtonIcon } from '../ui/button/Button'
import { data } from './Constants'
import styles from './NewTodo.module.scss'

/* TODO: 1. Сделать кнопку DELETE.  ☑
				 2. Доделать кнопку: выбрать всё. ☑
				 3. Менять местами таски.
				 4. Добавлять новые таски через кнопку Add.
				 5. Отмеченные таски становятся перечеркнутыми и переносятся в правый столбик.
				 6. При нажатии на гамбургер вылетает меню.
*/

interface NewTodoProps {
	buttonText: string
}
export const NewTodo = ({ buttonText }: NewTodoProps) => {
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

	const deleteTask = (index: number) => {
		const updateT = tasks.filter((_, i) => i !== index)
		setTasks(updateT)
	}

	const choiceTask = (index: number, isDone: boolean) => {
		let task = tasks.find(t => t.id === index)
		if (task) task.isDone = isDone
		let copy = [...tasks]
		setTasks(copy)
	}

	const changeTaskUp = (index: number) => {
		if (index > 0) {
			const updateTack = [...tasks]
			;[updateTack[index], updateTack[index - 1]] = [
				updateTack[index - 1],
				updateTack[index],
			]
			setTasks(updateTack)
		}
	}
	const changeTaskDown = (index: number) => {
		if (index < tasks.length - 1) {
			const updateTack = [...tasks]
			;[updateTack[index + 1], updateTack[index]] = [
				updateTack[index],
				updateTack[index + 1],
			]
			setTasks(updateTack)
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
					<ul className={styles.wrapper}>
						{tasks.map((t, index) => {
							return (
								<li key={t.id} className={styles.li}>
									<input
										type='checkbox'
										checked={t.isDone}
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											choiceTask(t.id, e.target.checked)
										}
									/>
									<span className={styles.p}>{t.task}</span>
									<div>
										<button
											onClick={() => changeTaskDown(index)}
											className={styles.close}
										>
											<GoArrowDown fontSize={30} />
										</button>
										<button
											onClick={() => changeTaskUp(index)}
											className={styles.close}
										>
											<GoArrowUp fontSize={30} />
										</button>
									</div>
									<button
										className={styles.close}
										onClick={() => deleteTask(index)}
									>
										<img src='layout/close.svg' />
									</button>
								</li>
							)
						})}
					</ul>
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
