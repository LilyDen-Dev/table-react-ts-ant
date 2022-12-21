import React, {useState} from "react";
import {Button, Modal} from "antd";
import {useActions} from "../hooks/useActions";

interface ButtonModalBlockI {
    selectedNames: string[],
    selectedIds: string[]
}

export const ButtonModalBlock = ({selectedNames, selectedIds}: ButtonModalBlockI): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {deleteItems} = useActions()

    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        deleteItems(selectedIds)
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Button onClick={showModal} disabled={!selectedNames.length}>Аннулировать</Button>
            <Modal
                title="Аннулировать товары"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={'Применить'}
                cancelText={'Отклонить'}
            >
                Вы уверены что хотите аннулировать товар(ы): {selectedNames.join(', ')}
            </Modal>
        </>
    )
}