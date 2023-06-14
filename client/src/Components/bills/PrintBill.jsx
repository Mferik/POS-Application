import { Button, Modal } from "antd";
import React from "react";

const PrintBill = ({ setIsModalOpen, isModalOpen }) => {
  return (
    <div>
      <Modal
        title="Fatura Yazdır"
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
        footer={false}
        width={800}
      >
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo my-6">
                <h2 className="text-4xl font-bold text-slate-700">MFE POS</h2>
              </div>
              <div className="bill-details">
                <div className="grid grid-cols-4 gap-12">
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Fatura Detayı:</p>
                    <p>Unwrapped</p>
                    <p>Fake Street 123</p>
                    <p>San Javier</p>
                    <p>CA 1234</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Fatura:</p>
                    <p>The Boring Compony</p>
                    <p>Tesla Street 123</p>
                    <p>Frisco</p>
                    <p>CA 0000</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <div>
                      <p className="font-bold text-slate-700">
                        Fatura Numarası:{" "}
                      </p>
                      <p>00041</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mt-2">
                        Veriliş Tarihi:{" "}
                      </p>
                      <p>2023-06-12</p>
                    </div>
                  </div>
                  <div className="text-md text-slate-500">
                    <div>
                      <p className="font-bold text-slate-700">Şartlar: </p>
                      <p>10 Gün</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mt-2">Vade: </p>
                      <p>2023-09-12</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bill-table-area mt-8">
                <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Görsel
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Başlık
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Fiyat
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Adet
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Toplam
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="py-4 ">
                        <img
                          src="https://productimages.hepsiburada.net/s/124/222-222/110000073784544.jpg/format:webp"
                          alt=""
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4  ">
                        <span className="font-medium">Şalgam</span>
                      </td>
                      <td className="py-4  text-center">
                        <span className="font-medium ">10₺</span>
                      </td>
                      <td className="py-4  text-center">
                        <span className="font-medium ">3</span>
                      </td>
                      <td className="py-4  text-end">
                        <span className="font-medium ">30₺</span>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="py-4 ">
                        <img
                          src="https://productimages.hepsiburada.net/s/124/222-222/110000073784544.jpg/format:webp"
                          alt=""
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4  ">
                        <span className="font-medium">Şalgam</span>
                      </td>
                      <td className="py-4  text-center">
                        <span className="font-medium ">10₺</span>
                      </td>
                      <td className="py-4  text-center">
                        <span className="font-medium ">3</span>
                      </td>
                      <td className="py-4  text-end">
                        <span className="font-medium ">30₺</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="text-right pt-6" colSpan={4} scope="row">
                        <span className="font-normal text-slate-700">
                          Ara Toplam
                        </span>
                      </th>
                      <th className="text-right pt-6" scope="row">
                        <span className="font-normal text-slate-700">61₺</span>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-right pt-4" colSpan={4} scope="row">
                        <span className="font-normal text-slate-700">
                          KDV
                        </span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-red-700">3₺</span>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-right pt-4" colSpan={4} scope="row">
                        <span className="font-normal text-slate-700">
                        Toplam
                        </span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-slate-700">64₺</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
                <div className="border-t pt-9 border-slate-400">
                    <p className="text-sm font-light text-slate-700"> Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                    Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                    sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                    talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                    ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                    Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                    geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                    England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                    Taraflar Kanun hükümleri dışında sözleşme yapamazlar.</p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="flex justify-end mt-4">
            <Button type="primary" size="large">Yazdır</Button>
        </div>
      </Modal>
    </div>
  );
};

export default PrintBill;
