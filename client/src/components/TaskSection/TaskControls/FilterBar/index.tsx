import { useState } from "react"
import style from "./style.module.css"
import { ArrowDownIcon } from "../../../../icons/ArrowDownIcon"
import { useTaskContext } from "../../../context/fetchTasksContext"

export const FilterBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { updateTasks } = useTaskContext()

    const handleOpen = () => setIsOpen(prev => !prev)

    const handleUpdateOrder = (orderBy: string) => {
        updateTasks(orderBy)

        setIsOpen(false)
    }

    return (
        <div className={style.c_filterBar}>
            <button onClick={handleOpen}>
                Ordernar por
                <ArrowDownIcon />
            </button>

            {isOpen &&
                <ul className={style.filterBar__list}>
                    <li onClick={() => handleUpdateOrder("")}>Sem filtro</li>
                    <li onClick={() => handleUpdateOrder("status=DONE")}>Status: concluídas</li>
                    <li onClick={() => handleUpdateOrder("status=IN_PROGRESS")}>Status: em desenvolvimento</li>
                    <li onClick={() => handleUpdateOrder("status=TODO")}>Status: pendentes</li>
                    <li onClick={() => handleUpdateOrder("orderBy=priorityHigh")}>Prioridade: decrescente</li>
                    <li onClick={() => handleUpdateOrder("orderBy=priorityLow")}>Prioridade: crescente</li>
                    <li onClick={() => handleUpdateOrder("orderBy=dueDateAsc")}>Data: perto de finalizar</li>
                    <li onClick={() => handleUpdateOrder("orderBy=dueDateDesc")}>Data: longe de finalizar</li>
                </ul>
            }
        </div >
    )
}
