import { FC, useState } from "react"
import styles from './index.module.css'
import { Button, Form, Input } from "antd"
import { User } from "@/app/models"

const { Item } = Form

type FieldType = {
    name?: string
    address?: string
}

export type ProfileDetailsProps = {
    user: User
    onSaveDetails: (name: string, address: string) => void
}

const ProfileDetails: FC<ProfileDetailsProps> = ({ user, onSaveDetails }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)

    return <div className={styles.container}>
        <div className={styles.topContentContainer}>
            <label> Personal Details</label>
            <Button onClick={() => setIsEdit(oldEdit => !oldEdit)} style={{ visibility: isEdit ? 'hidden' : 'visible' }}> Edit </Button>
        </div>
        <Form
            className={styles.form}
            name="signUp"
            disabled={!isEdit}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 480 }}
            initialValues={user}
            onFinish={({ name, address }) => {
                onSaveDetails(name, address)
                setIsEdit(false)
            }}
            autoComplete="off"
        >
            <Item<FieldType>
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Item>

            <Item<FieldType>
                label="address"
                name="address"
                rules={[{ required: true, message: 'Please input your address!' }]}
            >
                <Input />
            </Item>

            {isEdit && <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>}
        </Form >
    </div>
}

export default ProfileDetails