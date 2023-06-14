import { Button, Card, Form, Input, Modal, Select } from "antd";
import React from "react";

const CreateBill = ({ setIsModalOpen, isModalOpen }) => {
    const onFinish = (values) => {
        console.log("formdan çıkan veriler",values)
    }
  return (
    <div>
      <Modal
        title="Fatura Oluştur"
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Müşteri Adı"
            rules={[
              {
                required: true,
                message: "Lütfen bir müşteri adı girin",
              },
            ]}
            name={"customerName"}
          >
            <Input placeholder="Adınızı Giriniz" />
          </Form.Item>
          <Form.Item
            label="Telefon Numarası"
            rules={[
              {
                required: true,
                message: "Lütfen telefon numarası girin",
              },
            ]}
            name={"phoneNumber"}
          >
            <Input placeholder="Telefon Numarası Giriniz" maxLength={11}/>
          </Form.Item>
          <Form.Item
            label="Ödeme Yöntemi"
            rules={[
              {
                required: true,
                message: "Lütfen bir ödeme yöntemi seçin"
              },
            ]}
            name={"paymentMode"}
          >
            <Select placeholder="Ödeme Yöntemi Seçiniz">
              <Select.Option value="Nakit">Nakit</Select.Option>
              <Select.Option value="Kredi Kart">Kredi Kart</Select.Option>
            </Select>
          </Form.Item>

          <Card>
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-700">+43.92</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>592.92₺</b>
            </div>
            <div className="flex justify-end">
              <Button
                className="mt-4 "
                type="primary"
                onClick={() => setIsModalOpen(true)}
                htmlType="submit"
              >
                Sipariş Oluştur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateBill;
