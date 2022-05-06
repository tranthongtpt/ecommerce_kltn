import React from "react";

const Footer = () => {
  return (
    <footer>
            <section class="footer">
            <div class="box-container">
                <div class="box">
                    <h1>QUẦY THUỐC BẢO NGÂN</h1>
                    <p class="font-in-box">Tại đây chúng tôi luôn tận tâm phục vụ và được đào tạo để hoàn thành xuất sắc
                        những sứ mệnh được giao. Đưa những loại thuốc tốt nhất đến tay người tiêu dùng.</p>
                </div>
                <div class="box">
                    <h3>Liên kết hữu ích</h3>
                    <a href="#">
                        <i class="fas fa-arrow-right"></i>Câu hỏi thằng gặp
                    </a>
                    <a href="#">
                        <i class="fas fa-arrow-right"></i>Chính sách giao hàng
                    </a>
                    <a href="#">
                        <i class="fas fa-arrow-right"></i>Thành viên
                    </a>
                    <a href="#">
                        <i class="fas fa-arrow-right"></i>Chính sách bảo mật
                    </a>
                </div>
                <div class="box">
                    <h3>Chứng nhận của chúng tôi</h3>
                    <a href="#">
                        <img class="imageChange" src="assets/img/bo-cong-thuong.svg" alt=""/>
                    </a>
                </div>
                <div class="box">
                    <h3>Thông tin về chúng tôi</h3>
                    <a href="#">
                        <i class="fas fa-phone"></i>(+84) 0395557279
                    </a>
                    <a href="#">
                        <i class="fas fa-envelope"></i>thongn311@gmail.com
                    </a>
                    <a href="#">
                        <i class="fas fa-map-marked-alt"></i>Địa chỉ: Việt Nam
                        <img class="map" src="assets/img/worldmap.png" alt=""/>
                    </a>
                </div>
            </div>
            <div class="credit">
                <p>© 2021 Công ty Cổ Phần Dược Phẩm Bảo Ngân Số ĐKKD xxxxxxxxxx cấp ngày xx/xx/2021 tại Sở Kế hoạch Đầu tư
                    TPHCM
                    Địa chỉ: xxx TP. HCM. Số điện thoại: (+84) 0395557279
                    Email: sale@baongan.com - Người quản lý nội dung: Nhóm chúa hề</p>
            </div>
        </section>
            </footer>
  );
};

export default Footer;
