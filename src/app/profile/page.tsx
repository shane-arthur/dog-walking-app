'use client'

import { FC, ReactNode } from "react";
import { Card } from 'antd'
import { Button } from 'antd'
import styles from './index.module.css'
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import ProfileDetails from "./components/details";
import useLocalStorage from '../hooks/useLocalStorage'
import { User } from "../models";
import Dogs from "./components/dogs";


const Profile: FC = () => {
    const router = useRouter()
    const [userInfo, setUserInfo] = useLocalStorage('user')

    const Title: ReactNode = <div className={styles.title}>
        <Button onClick={() => router.push('/booking')} icon={<ArrowLeftOutlined />}>
        </Button>
        <h1> Your Profile</h1>
    </div>

    const onSaveDetailsHandler = (name: string, address: string): void => {
        const newUserInfo: User = { ...userInfo, name, address }
        setUserInfo(newUserInfo)
    }

    return <main>
        <section>
            <Card title={Title}>
                <ProfileDetails onSaveDetails={onSaveDetailsHandler} user={userInfo} />
                <Dogs />
            </Card>
        </section>
    </main>
}

export default Profile