import React from "react";
import "./sectionProperties.scss";
import { FaBeer } from "react-icons/fa";

const SectionProperties = ({ title }) => {
  return (
    <div className="SectionProperties_container">
      <h4>{title}</h4>
      <div>
        <div>
          <div>
            <FaBeer />
          </div>
          <p>فیلد تشخیص موقعیت و مسیر حرکت</p>
        </div>
        <div>
          <div>
            <FaBeer />
          </div>
          <p>امکان ایجاد فرم‌های تودرتو</p>
        </div>
        <div>
          <div>
            <FaBeer />
          </div>
          <p>کنترل و جلوگیری از ثبت داده تکراری</p>
        </div>
        <div>
          <div>
            <FaBeer />
          </div>
          <p>انواع فیلدهای اطلاعاتی پیشرفته</p>
        </div>
        <div>
          <div>
            <FaBeer />
          </div>
          <p>ایجاد وب‌سرویس‌های ارتباطی متناظر با فرم</p>
        </div>
        <div>
          <div>
            <FaBeer />
          </div>
          <p>قابلیت ارسال به نرم افزار همراه</p>
        </div>
      </div>
    </div>
  );
};

export default SectionProperties;
