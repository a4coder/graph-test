import React, { useEffect } from "react";
import "./mobileApplication.scss";
import imgMobile from "../../../assets/images/اپلیکیشن-گراف-BPMS.webp";
import AsideTitle from "../../common/AsideTitle";
import SectionProperties from "../../common/SectionProperties";
import AOS from "aos";
import "aos/dist/aos.css";

const MobileApplication = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="MobileApplication_container">
      <div className="details">
        <h2 data-aos-offset="0" data-aos-delay={"1000"} data-aos="fade-left">
          اپلیکیشن موبایل <span>Android,IOS</span>
        </h2>
        <p data-aos-offset="0" data-aos-delay={"1000"} data-aos="fade-left">
          امروزه با گسترش استفاده از ابزارهای ارتباطی هوشمند مانند تلفن همراه و
          تبلت،وجود برنامه هایی که بتوانند در کنار وجود نسخه های دسکتاپ روی این
          ابزارها هم قابلیت اجراء داشته باشند بیش از پیش محسوس است. از این رو
          شرکت گراف با بکارگیری نیروهای متخصص و تکنولوژی روز و با پشت سر گذاشتن
          تست های فنی لازم، توانسته است نرم افزار نظارت ، بازرسی و مدیریت کار
          همراه را به متقاضیان ارائه نماید.
        </p>
        <div
          className="title"
          data-aos-offset="0"
          data-aos-delay={"1000"}
          data-aos="fade-left"
        >
          <AsideTitle title={"راهکارهای اپلیکیشن مدیریت کار همراه"} />
        </div>
        <span>
          با استفاده از این راهکار امکان ایجاد انواع چک لیست ها و زمانبندی آنها
          برای مکانهای خاص برای کاربران فراهم می گردد.
        </span>
        <ul>
          <li>برداشت اطلاعات میدانی</li>
          <li>بازدید و بازرسی</li>
          <li>پرسشنامه و تحقیق و پژوهش</li>
          <li>حضور و غیاب</li>
          <li>مدیریت کار همراه </li>
        </ul>
      </div>
      <div
        className="image"
        data-aos-offset="0"
        data-aos-delay={"1000"}
        data-aos="fade-left"
      >
        <img src={imgMobile} alt="imgMobile" />
      </div>
      <div
        className="properties"
        data-aos-offset="0"
        data-aos-delay={"1000"}
        data-aos="fade-left"
      >
        <SectionProperties title={"ویژگی های کلیدی اپلیکیشن موبایل"} />
      </div>
    </div>
  );
};

export default MobileApplication;
