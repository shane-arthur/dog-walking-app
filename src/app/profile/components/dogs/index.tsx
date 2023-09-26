import { FC, useState } from 'react'
import styles from './index.module.css'
import { Button, Typography } from 'antd'
import NewDogsModal from './modal'
import useLocalStorage from '@/app/hooks/useLocalStorage'
import DogItem from './item'
import { Dog } from '@/app/models'
import { v4 as uuidv4 } from 'uuid';

const {Text } = Typography

const Dogs: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useLocalStorage('user')
    const dogs = userInfo.dogs

    const onAddNewDogHandler = (name: string, breed: string): void => {
        const clonedDogs = Array.from(userInfo.dogs)
        clonedDogs.push({ name, breed, owner: userInfo.username, id: uuidv4() })
        setUserInfo({ ...userInfo, dogs: clonedDogs })
        setIsModalOpen(false)
    }

    const onRemoveDogHandler = (id: string): void => {
        const clonedDogs: Dog[] = Array.from(userInfo.dogs)
        const index = clonedDogs.findIndex((dog) => dog.id === id)
        if (index !== -1) {
            clonedDogs.splice(index, 1)
        }
        setUserInfo({ ...userInfo, dogs: clonedDogs })
    }

    return <>
        <div className={styles.addDogs}>
            <label> Your Dogs </label>
            <Button onClick={() => setIsModalOpen(true)} type="primary">New Dog</Button>
        </div>
        <NewDogsModal onAddDog={onAddNewDogHandler} onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
        {dogs.map((dog: Dog, index: number) => {
            return <DogItem key={`${dog.name}-${index}`} dog={dog} onRemove={onRemoveDogHandler} />
        })}
        {!dogs.length && <p className={styles.noDogsText}> You haven't added any dogs to the system yet!</p>}
    </>
}

export default Dogs