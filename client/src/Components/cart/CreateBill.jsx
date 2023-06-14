import { Modal } from 'antd'
import React from 'react'

const CreateBill = ({setIsModalOpen},{isModalOpen} ) => {
  return (
    <div>
        <Modal
        title="Fatura Oluştur"
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
        footer={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default CreateBill