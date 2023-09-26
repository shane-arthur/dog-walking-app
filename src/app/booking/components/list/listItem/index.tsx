import { FC, ReactNode, useState } from 'react'
import styles from './index.module.css'
import { Button } from 'antd'
import { SlotItem } from '@/app/models'
import BookWalkModal from './modal'
import Image from 'next/image'

export type BookingListItemProps = {
    time: number
    data: SlotItem
    disabled?: boolean
    onBookWalk: (dogId: string, time: number) => void
    onCancelWalk: (time: string) => void
}

export enum BookingType {
    booked = 'Booked',
    open = 'Open',
    self = 'Self'
}

export const BookingListItem: FC<BookingListItemProps> = ({ time, data, disabled, onBookWalk, onCancelWalk }) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const isAm = time < 12
    const type: string = !data.isBooked ? BookingType.open : data.isOwnDog ? BookingType.self : BookingType.booked

    const getButtonType: () => ReactNode = () => {
        switch (type) {
            case BookingType.self: {
                return <Button onClick={() => onCancelWalk(time)} disabled={disabled} type="text">Cancel</Button>
            }
            case BookingType.booked: {
                return <Button disabled type="text">Booked</Button>
            }
            case BookingType.open: {
                return <Button disabled={disabled} onClick={() => setShowModal(true)} type="primary">Book</Button>
            }
            default: return <></>
        }
    }

    return <><div className={styles.container}><div className={styles.listItemContainer}>
        {time % 12 == 0 ? 12 : time % 12}{isAm ? 'am' : 'pm'}
        {getButtonType()}
    </div>
        {type === BookingType.self && <div className={styles.yourDogContainer}>
            <Image
                src="/dog.png"
                width={32}
                height={32}
                alt="dog icon"
            />
            <p> Your dog {data.dog?.name} is booked for a walk!</p>
        </div>}
    </div>
        <BookWalkModal time={time} onAddWalk={onBookWalk} isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
}