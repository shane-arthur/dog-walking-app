'use client'

import { FC, ReactNode } from 'react'
import { Card } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import DateSelector from '../dateSelector'
import styles from './styles.module.css'
import { BookingListItem } from './listItem'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import { SlotItem, TimeSlot } from '@/app/models'
export type BookingListProps = {
    date: Date
    data?: TimeSlot
    onNextDay: () => void
    onPrevDay: () => void
    isDisabled?: boolean
    onBookWalk: (dogId: string, time: number) => void
    onCancelWalk: (dogId: string, time: number) => void
}

const BookingList: FC<BookingListProps> = ({ date, onNextDay, onPrevDay, data, isDisabled, onBookWalk, onCancelWalk }) => {
    const router = useRouter()

    const Title: ReactNode = <div className={styles.title}>
        <h1> Book a Walk </h1>
        <div className={styles.rightTitleContent}>
            <Button onClick={() => router.push('/profile')} type="text"> Profile </Button>
            <UserOutlined />
        </div>
    </div>

    return <Card loading={!data} title={Title}>
        <DateSelector onNextDay={onNextDay} onPrevDay={onPrevDay} date={date} />
        <div className={styles.bookingList}>
            {data && Object.keys(data).map((key: string) => {
                const time = Number(key)
                const timeSlot: SlotItem = data[time]
                return <BookingListItem onCancelWalk={(dogId: string) => onCancelWalk(dogId, time)} onBookWalk={onBookWalk} disabled={isDisabled} key={time} time={time} data={timeSlot} />
            })}
        </div>
    </Card>
}

export default BookingList