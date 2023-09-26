'use client'

import styles from './styles.module.css'
import SignUpForm from "./components/form"
import { Card } from 'antd'
import { FC } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useRouter } from 'next/navigation';

const SignUp: FC = () => {
    const [, setUser] = useLocalStorage('user');
    const [, setWalks] = useLocalStorage('walks');
    const router = useRouter()

    const submitHandler = ({username}: {username: string}) : void => {
        setUser({username, name: '', dogs: [], address: ''})
        setWalks({})
        router.push('/booking')
    }

    return <main className={styles.container}>
        <section>
            <Card title="Please Sign Up">
                <SignUpForm onSubmit={submitHandler} />
            </Card>
        </section>
    </main>
}

export default SignUp