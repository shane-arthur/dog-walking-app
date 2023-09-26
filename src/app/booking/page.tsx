'use client'

import { FC, useState, useEffect } from 'react'
import BookingList from './components/list'
import { addDays, format, isBefore } from 'date-fns'
import useLocalStorage from '../hooks/useLocalStorage'
import { createDefaultTimeSlot } from '../utils'
import { SlotItem, TimeSlot } from '../models'
import { Dog } from '../models'
import { OTHER_DOGS } from '../mock-data'

export const DATE_FORMAT = 'L-d-yyyy'
const currentDate = new Date()

const Booking: FC = () => {
    const [walks, setWalks] = useLocalStorage('walks')
    const [user] = useLocalStorage('user')
    const [date, setDate] = useState<Date>(new Date())
    const key = format(date, DATE_FORMAT)
    const isDisabled = isBefore(date, currentDate)

    useEffect(() => {
        if (!walks[key]) {
            const defaultTimeSlot: TimeSlot = createDefaultTimeSlot()
            const newWalks = { ...walks, [key]: defaultTimeSlot }
            setWalks(newWalks)
        }
    }, [date])

    const onNextDayHandler = (): void => {
        setDate((oldDate) => addDays(oldDate, 1))
    }

    const onPrevDayHandler = (): void => {
        setDate((oldDate) => addDays(oldDate, -1))
    }

    const onBookWalkHandler = (dogId: string, time: number) => {
        const clonedWalks = { ...walks }
        const isOwnDog = user.dogs.map(({ id }: { id: string }) => id).includes(dogId)
        if (isOwnDog) {
            const selectedDog = user.dogs.find((dog: Dog) => dog.id === dogId)
            const slotItem: SlotItem = { dog: selectedDog, isBooked: true, isOwnDog: true }
            clonedWalks[key][time] = slotItem
            setWalks(clonedWalks)
        } else {
            const selectedDog = OTHER_DOGS.find((dog: Dog) => dog.id === dogId)
            const slotItem: SlotItem = { dog: selectedDog, isBooked: true, isOwnDog: false }
            clonedWalks[key][time] = slotItem
            setWalks(clonedWalks)
        }
    }

    const onCancelWalkHandler = (dogId: string, time: number) => {
        const clonedWalks = { ...walks }
        clonedWalks[key][time] = { isBooked: false }
        setWalks(clonedWalks)
    }

    return <main>
        <section>
            <BookingList onCancelWalk={onCancelWalkHandler} onBookWalk={onBookWalkHandler} isDisabled={isDisabled} data={walks[key]} onNextDay={onNextDayHandler} onPrevDay={onPrevDayHandler} date={date} />
        </section>
    </main>

}

export default Booking