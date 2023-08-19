"use client";

interface ITodoItemProps {
    id: string
    title: string
    complete: boolean
    handleChecked: (id: string, complete: boolean) => void
    handleDelete: (id: string) => void
}

const TodoItem = ({id, title, complete, handleChecked, handleDelete}: ITodoItemProps) => {
  return (
    <li className="flex gap-1 items-center">
        <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => handleChecked(id, e.target.checked)}/>
        <label htmlFor={id} className="peer-checked:line-through">{title}</label>
        <span className="text-red-500 translate-y-[1.5px] cursor-pointer" onClick={() => handleDelete(id)}>X</span>
    </li>
  )
}

export default TodoItem