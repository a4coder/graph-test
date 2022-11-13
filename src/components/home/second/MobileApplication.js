import React from "react";
import "./mobileApplication.scss";
import imgMobile from "../../../assets/images/اپلیکیشن-گراف-BPMS.webp";
import AsideTitle from "../../common/AsideTitle";
import SectionProperties from "../../common/SectionProperties";

const MobileApplication = () => {
  return (
    <div className="MobileApplication_container">
      <div className="details">
        <h2>
          اپلیکیشن موبایل <span>Android,IOS</span>
        </h2>
        <p>
          امروزه با گسترش استفاده از ابزارهای ارتباطی هوشمند مانند تلفن همراه و
          تبلت،وجود برنامه هایی که بتوانند در کنار وجود نسخه های دسکتاپ روی این
          ابزارها هم قابلیت اجراء داشته باشند بیش از پیش محسوس است. از این رو
          شرکت گراف با بکارگیری نیروهای متخصص و تکنولوژی روز و با پشت سر گذاشتن
          تست های فنی لازم، توانسته است نرم افزار نظارت ، بازرسی و مدیریت کار
          همراه را به متقاضیان ارائه نماید.
        </p>
        <div className="title">
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
      <div className="image">
        <img src={imgMobile} alt="imgMobile" />
      </div>
      <div className="properties">
        <SectionProperties title={"ویژگی های کلیدی اپلیکیشن موبایل"} />
      </div>
    </div>
  );
};

export default MobileApplication;
