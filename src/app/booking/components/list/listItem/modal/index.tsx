import { FC } from "react"
import { Modal } from 'antd'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styles from './index.module.css'
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { Dog } from "@/app/models";
import BookDogWalkItemsList from "./list";
import { OTHER_DOGS } from "@/app/mock-data";
import { useState } from "react";


export type BookWalkModalProps = {
    isOpen: boolean
    onClose: () => void
    onAddWalk: (dogId: string, time: number) => void
    time: number
}

const BookWalkModal: FC<BookWalkModalProps> = ({ isOpen, onClose, onAddWalk, time }) => {
    const [userInfo] = useLocalStorage('user')
    const [walks, setWalks] = useLocalStorage('walks')
    const [selectedDogId, setSelectedDogId] = useState('')

    const myDogs: Dog[] = userInfo.dogs

    const handleOk = (): void => {
        onAddWalk(selectedDogId, time)
        setSelectedDogId('')
        onClose()    
    }

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'My Dogs',
            children: <BookDogWalkItemsList selectedDogId={selectedDogId} onChange={setSelectedDogId} items={myDogs} />
        },
        {
            key: '2',
            label: 'Other Dogs',
            children: <BookDogWalkItemsList selectedDogId={selectedDogId} onChange={setSelectedDogId} items={OTHER_DOGS} />
        },
    ];


    return <Modal onOk={handleOk} okButtonProps={{ disabled: !selectedDogId }} style={{ minWidth: '900px' }} open={isOpen} onCancel={onClose} title="Select dog to walk">

        <Tabs
            className={styles.tabs}
            onChange={() => setSelectedDogId('')}
            defaultActiveKey="1"
            items={items}
            indicatorSize={(origin) => origin - 16}
        />

    </Modal>
}

export default BookWalkModal