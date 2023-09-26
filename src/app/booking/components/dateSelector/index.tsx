import { FC } from 'react'
import { format } from 'date-fns'
import styles from './index.module.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const DATE_FORMAT = 'MMM d, yyyy'

export type DateSelectorProps = {
    date: Date,
    onNextDay: () => void
    onPrevDay: () => void
}

const DateSelector: FC<DateSelectorProps> = ({ date, onNextDay, onPrevDay }) => {

    return <div aria-live="polite" className={styles.dateSelectContainer}><p>{format(date, DATE_FORMAT)}</p>
        <div className={styles.buttonsContainer}>
            <Button onClick={onPrevDay} icon={<LeftOutlined />}>
            </Button>
            <Button onClick={onNextDay} icon={<RightOutlined />}>
            </Button>
        </div>
    </div>
}

export default DateSelector