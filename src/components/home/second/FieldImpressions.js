import React from "react";
import "./fieldImpressions.scss";

const FieldImpressions = () => {
  return (
    <div className="FieldImpressions_container">
      <div className="overlay"></div>
      <div className="fieldImpressions">
        <h3>
          اطمینان از صحت مستندات و اطلاعات جمع آوری شده در برداشت های میدانی با
          بکارگیری اپلیکیشن مدیریت کار همراه گراف
        </h3>
        <div className="twoPartBorder">
          <div></div>
          <div></div>
        </div>
        <p>
          آیا می‌خواهید بدانید، اطلاعات ثبت شده توسط چه کسی و در چه محدوده
          جغرافیایی و یا در چه زمانی از شبانه روز جمع‌آوری شده است
        </p>
      </div>
    </div>
  );
};

export default FieldImpressions;
