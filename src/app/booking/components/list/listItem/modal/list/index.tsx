import { FC, useState } from 'react'
import { Dog } from '@/app/models'
import styles from './index.module.css'
import { Radio } from 'antd';
import Image from 'next/image';

export type BookDogWalkItemsListProps = {
    items: Dog[]
    onChange: (dogId: string) => void
    selectedDogId: string
}

const BookDogWalkItemsList: FC<BookDogWalkItemsListProps> = ({ items, selectedDogId, onChange }) => {

    return <><ul className={styles.listContainer}>
        {items.map((item: Dog) => {
            return <li key={`${item.id}`}>
                <Image
                    src="/dog.png"
                    width={48}
                    height={48}
                    alt="dog icon"
                />
                <div>
                    <label>Name:</label>
                    {item.name}
                </div>

                <div>
                    <label>Breed:</label>
                    {item.breed}
                </div>
                <Radio onChange={() => onChange(item.id)} checked={selectedDogId === item.id} value={item.id}></Radio>
            </li>
        })}
    </ul>
        {!items.length && <p> No dogs added yet!</p>}
    </>
}

export default BookDogWalkItemsList