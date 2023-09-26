import { FC, useRef } from 'react'
import { Modal, Form, Input, FormInstance } from 'antd'
import styles from './index.module.css'

const { Item } = Form

export type NewDogsModalProps = {
    isOpen: boolean
    onClose: () => void
    onAddDog: (name: string, breed: string) => void
}

type FieldType = {
    name?: string
    breed?: string
}

const NewDogsModal: FC<NewDogsModalProps> = ({ isOpen, onClose, onAddDog }) => {
    const formRef = useRef<FormInstance>(null)

    const onOkHandler = (): void => {
        formRef.current?.validateFields().then(({ name, breed }) => {
            onAddDog(name, breed)
            formRef.current?.resetFields()
        })
    }

    const onCloseHandler = (): void => {
        formRef.current?.resetFields()
        onClose()
    }

    return <Modal title="Add new dog" open={isOpen} onCancel={onCloseHandler} onOk={onOkHandler} okText="Add">
        <Form
            ref={formRef}
            className={styles.form}
            name="addDogForm"
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 480 }}
            autoComplete="off"
        >
            <Item<FieldType>
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input the dog name!' }]}
            >
                <Input />
            </Item>

            <Item<FieldType>
                label="Breed"
                name="breed"
                rules={[{ required: true, message: 'Please input the dog breed!' }]}
            >
                <Input />
            </Item>
        </Form >
    </Modal>
}

export default NewDogsModal