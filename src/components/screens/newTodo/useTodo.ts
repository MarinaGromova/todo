export const useTodo = () => {
	const deleteTask = (id: any, tasks: any, changeId: any) => {
		changeId(tasks.filter((t: any) => id !== t.id))
	}

	const choiceTask = (t: any, isDone: boolean, tasks: any, setTasks: any) => {
		let task = tasks.find((tas: any) => tas.id === t.id)
		if (task) task.isDone = isDone
		let copy = [...tasks]
		setTasks(copy)
	}

	const changeTask = (
		e: any,
		setInput: any,
		t: any,
		setTasks: any,
		inputRef: any
	) => {
		setInput(true)
		if (inputRef.current === null) {
			return
		} else {
			inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
		}
		t.task = e.target.value
		setTasks((list: any) =>
			list.map((item: any) => (item.id === t.id ? { ...item } : item))
		)
	}
	return { deleteTask, choiceTask, changeTask }
}
