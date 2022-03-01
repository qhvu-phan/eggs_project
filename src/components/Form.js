import React from "react";
import { useState } from "react";

const Form = () => {
  const [show, setShow] = useState("block");
  const [showTable, setShowTable] = useState("none");
  const [price, setPrice] = useState(0);
  const style = {
    display: show,
  };
  const style1 = {
    display: showTable,
  };
  const setShows = () => {
    setShowTable("block");
    setShow("none");
  };
  const sumPrice = (e) => {
    let sum = e.target.value * 2000;
    setPrice(sum);
  };
  return (
    <>
      <div style={style} className="container">
        <div className="header_style">Thông tin đơn hàng</div>
        <div className="infor_order">
          <div className="infor_date">
            <div className="cpn_1_1">Ngày đặt hàng:</div>
            <div className="cpn_2_1">01/03/2022</div>
          </div>
          <div className="infor_gd">
            <div>Loại GD:</div>
            <div>
              <select className="status_order">
                <option>Mua</option>
                <option>Bán</option>
              </select>
            </div>
          </div>
        </div>
        <div className="infor_order">
          <div className="cpn_1">Tên khách hàng:</div>
          <div className="cpn_2 ">
            <select className="select_style">
              <option>Phan Đình Khôi</option>
              <option>Huy Vũ</option>
              <option>Hữu Trí</option>
            </select>
          </div>
        </div>
        <div className="infor_order">
          <div className="cpn_1">Tên hàng:</div>
          <div className="cpn_2">
            <select className="select_style">
              <option>Hột Vịt Lộn</option>
              <option>Hột Vịt Tươi</option>
              <option>Hột Vịt Giữa</option>
            </select>
          </div>
        </div>
        <div className="infor_order">
          <div className="cpn_1">Số lượng:</div>
          <div className="cpn_2">
            <input
              className="input_style"
              type="texy"
              onChange={sumPrice}
              placeholder="Nhập số lượng"
            />
            <i className="donvi">(Đơn vị: quả)</i>
          </div>
        </div>
        <div className="infor_order">
          <div className="cpn_1">Đơn giá:</div>
          <div className="cpn_2">
            2000 <i>(vnd)</i>
          </div>
        </div>
        <div className="infor_order">
          <div className="cpn_1">Thành tiền:</div>
          <div className="cpn_2">
            {price} <i>(vnd)</i>
          </div>
        </div>
        <div className="infor_order">
          <div className="cpn_1">Người giao dịch:</div>
          <div className="cpn_2">
            <select className="select_style">
              <option>Ng Van A</option>
              <option>Ng Van B</option>
              <option>Ng Van C</option>
            </select>
          </div>
        </div>
        <div className="infor_order">
          <div className="cpn_1">Trạng Thái:</div>
          <div className="cpn_2">
            <select className="select_style">
              <option>Chưa TT</option>
              <option>Đã TT</option>
            </select>
          </div>
        </div>
        <div className="infor_order_1">
          <div className="button_save">
            <button className="save" onClick={setShows}>
              Lưu
            </button>
          </div>
          <div>
            <button className="cancle">Huỷ</button>
          </div>
        </div>
      </div>
      <div style={style1} className="table">
        <div className="header_name_cus">Khách hàng: Huy Vũ</div>
        <table className="table_style" border="1">
          <tr>
            <th colspan="5">THÔNG TIN GIAO DỊCH</th>
          </tr>
          <tr>
            <th>Ngày</th>
            <th>Trạng Thái</th>
            <th>Mua</th>
            <th>Bán</th>
            <th>Chênh lệch</th>
          </tr>
          <tr>
            <td>01/03/2022</td>
            <td>
              <select>
                <option>Chưa TT</option>
                <option>Đã TT</option>
              </select>
            </td>
            <td>12.000.000</td>
            <td>8.000.000</td>
            <td>4.000.000</td>
          </tr>
          <tr>
            <td>25/02/2022</td>
            <td>
              <select>
                <option>Chưa TT</option>
                <option>Đã TT</option>
              </select>
            </td>
            <td>20.000.000</td>
            <td>14.000.000</td>
            <td>6.000.000</td>
          </tr>
          <tr>
            <td>22/02/2022</td>
            <td>
              <select>
                <option>Chưa TT</option>
                <option>Đã TT</option>
              </select>
            </td>
            <td>13.000.000</td>
            <td>9.000.000</td>
            <td>4.000.000</td>
          </tr>
          <tr>
            <td colspan="4">TỔNG NỢ</td>
            <td>14.000.000</td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default Form;
