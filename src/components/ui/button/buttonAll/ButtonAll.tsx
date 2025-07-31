// import { SvgChosen } from '../../svg/SvgChosen'
// import { SvgUnMarket } from '../../svg/SvgUnmarked'
import styles from './ButtonAll.module.scss'

interface NewTodoProps {
	choiceAll: Function
}

export const ButtonAll = ({ choiceAll }: NewTodoProps) => {
	return (
		<div className={styles.il}>
			<button
				onClick={() => {
					choiceAll('all')
				}}
			>
				All
			</button>
			<button
				onClick={() => {
					choiceAll('active')
				}}
			>
				Active
			</button>
			<button
				onClick={() => {
					choiceAll('completed')
				}}
			>
				Completed
			</button>
		</div>
	)
}

// export const ButtonAll = ({ tasks, setTasks }: NewTodoProps) => {
// 	const [choice, setChoiceAll] = useState(false)
// 	const [choiceActive, setChoiceActive] = useState(false)

// 	const colorObject = useBackGroundResize()

// 	const choiceAll = () => {
// 		setChoiceAll(!choice)
// 		if (!choice) {
// 			let task = tasks.map((t: any) => {
// 				t.isDone = true
// 				return t
// 			})
// 			setTasks(task)
// 		} else {
// 			let task = tasks.map((t: any) => {
// 				t.isDone = false
// 				return t
// 			})
// 			setTasks(task)
// 		}
// 	}

// 	const selectActive = () => {
// 		setChoiceActive(!choiceActive)
// 		if (!choiceActive) {
// 			const task = tasks.filter((t: any) => t.isDone != true)
// 			let copy = [...task]
// 			setTasks(copy)
// 		} else {
// 			setTasks(tasks)
// 		}
// 	}

// 	return (
// 		<div className={styles.il}>
// 			<button className={styles.circle} onClick={choiceAll}>
// 				{choice ? (
// 					<SvgUnMarket color={colorObject} />
// 				) : (
// 					<SvgChosen color={colorObject} />
// 				)}
// 			</button>
// 			<p>All</p>
// 			<button className={styles.circle} onClick={selectActive}>
// 				{choiceActive ? (
// 					<SvgUnMarket color={colorObject} />
// 				) : (
// 					<SvgChosen color={colorObject} />
// 				)}
// 			</button>
// 			<p>Active</p>
{
	/* <button className={styles.circle} onClick={choiceAll}>
				{choice ? (
					<SvgUnMarket color={colorObject} />
				) : (
					<SvgChosen color={colorObject} />
				)}
			</button>
			<p>Completed</p> */
}
// 		</div>
// 	)
// }
