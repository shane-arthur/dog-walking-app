import { FC } from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import { Dog } from '@/app/models'
import { Button } from 'antd'

export type DogItemProps = {
    dog: Dog
    onRemove: (id: string) => void
}

const DogItem: FC<DogItemProps> = ({ dog, onRemove }) => {

    return <div className={styles.dogItemContainer}>
        <div className={styles.dogInfo}>
            <Image
                src="/dog.png"
                width={48}
                height={48}
                alt="dog icon"
            />
            <label>{dog.name}</label>
        </div>
        <div className={styles.infoContainer}>
            <p>Breed: {dog.breed}</p>
            <Button onClick={() => onRemove(dog.id)} type="primary"> Remove </Button>
        </div>
    </div>
}

export default DogItem