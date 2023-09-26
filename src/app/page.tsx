'use client'
import styles from './index.module.css'

import { useEffect } from 'react'
import { Space, Spin } from 'antd'
import useLocalStorage from './hooks/useLocalStorage'
import { useRouter } from 'next/navigation'

export default function Page() {
    const [username] = useLocalStorage('user')
    const router = useRouter()

    useEffect(() => {
        if (!!username) {
            router.push('booking')
        } else {
            router.push('signUp')
        }
    }, [])

    return <Space className={styles.container} size="large">
        <Spin size="large" />
    </Space>

}