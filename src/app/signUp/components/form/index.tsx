import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import styles from './styles.module.css'

const { Item } = Form
const { Password } = Input


type SignUpFormProps = {
    onSubmit: ({ username, password }: { username: string, password: string }) => void
}

type FieldType = {
    username?: string
    password?: string
}

const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
    return <Form
        className={styles.formContainer}
        name="signUp"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onSubmit}
        autoComplete="off"
    >
        <Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Item>

        <Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Password />
        </Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form >
}

export default SignUpForm