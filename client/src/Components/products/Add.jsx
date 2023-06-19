import { Button, Form, Input, Modal, Select, message } from "antd";
import React from "react";

const Add = ({
  isAddModalOpen,
  setIsAddModalOpen,
  categories,
  setProducts,
  products,
}) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün başarıyla eklendi.");
      form.resetFields();
      setProducts([
        ...products,
        {
          ...values,
          _id: Math.random(),
          price: Number(values.price),
        },
      ]);
      setIsAddModalOpen(false)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      title="Yeni Ürün Ekle"
      open={isAddModalOpen}
      onCancel={() => setIsAddModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          name="title"
          label="Ürün Adı"
          rules={[{ required: true, message: "Ürün adı zorunludur" }]}
        >
          <Input placeholder="Bir ürün adı giriniz" />
        </Form.Item>
        <Form.Item
          name="img"
          label="Ürün Görseli"
          rules={[{ required: true, message: "Ürün görseli zorunludur" }]}
        >
          <Input placeholder="Bir ürün görseli giriniz" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Ürün Fiyatı"
          rules={[{ required: true, message: "Ürün fiyatı zorunludur" }]}
        >
          <Input placeholder="Bir ürün fiyatı giriniz" />
        </Form.Item>
        <Form.Item
          name="category"
          label="Kategori Seç"
          rules={[{ required: true, message: "Kategori alanı zorunludur" }]}
        >
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.title ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.title ?? "")
                .toLowerCase()
                .localeCompare((optionB?.title ?? "").toLowerCase())
            }
            options={categories}
          />
        </Form.Item>
        <Form.Item className="flex justify-end mb-0">
          <Button type="primary" htmlType="submit">
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Add;
