import React from "react";
import "./AboutUS.css";

import clients from "../../assets/About/Frame.png";
import projects from "../../assets/About/Frame (1).png";
import items from "../../assets/About/Frame (2).png";
import hand from "../../assets/About/hand.png";
import Button from "../../components/Buuton/Button";

import Word from "../../assets/About/word.png";
import dash from "../../assets/About/Vector 90.png";

import man from "../../assets/About/image 67.png";
import quote from "../../assets/About/quote.png";

import img1 from "../../assets/About/image 57.png";
import aye from "../../assets/About/Group 1171274763 (1).png";
import img2 from "../../assets/About/image 58.png";
import comment from "../../assets/About/Group 1171274763.png";

import curvedLine from "../../assets/About/Vector 5.png";
import partner1 from "../../assets/About/partner1.png";
import partner2 from "../../assets/About/partner2.png";
import partner3 from "../../assets/About/partner3.png";
import partner4 from "../../assets/About/partner4.png";
import partner5 from "../../assets/About/partner5.png";
import partner6 from "../../assets/About/partner6.png";
import Frame7 from "../../assets/About/Frame7.png";
import Frame8 from "../../assets/About/Frame8.png";
import Frame9 from "../../assets/About/Frame9.png";
import Frame10 from "../../assets/About/Frame10.png";
import Frame11 from "../../assets/About/Frame11.png";
import Frame12 from "../../assets/About/Frame12.png";
import Frame13 from "../../assets/About/Frame13.png";
import Frame14 from "../../assets/About/Frame14.png";
import Frame15 from "../../assets/About/Frame15.png";

function AboutUs() {
  return (
    <div className="about">
      <main className="about-us flex lg:flex-row  flex-col-reverse  itemms-center gap-3 p-8 text-end">
        <div className="left flex-1 flex justify-center items-center">
          <div className="wrapper flex flex-col gap-3 items-end">
            <div className="item flex gap-3 items-center">
              <div>
                <div>
                  <span>+</span>08
                </div>
                <p>سنوات من العطاء</p>
              </div>
              <img width={60} src={clients} alt="" />
            </div>
            <div className="item flex gap-3 items-center">
              <div>
                <div>
                  <span>+</span>3500
                </div>
                <p> مشاريع منفذة </p>
              </div>
              <img width={60} src={projects} alt="" />
            </div>
            <div className="item flex gap-3 items-center">
              <div>
                <div>
                  <span>+</span>22500
                </div>
                <p> مواد برمجية و إعلانية منفذة </p>
              </div>
              <img width={60} src={items} alt="" />
            </div>
          </div>
        </div>
        <div className="right flex-2">
          <div className="flex gap-3 items-center justify-end">
            <img src={hand} alt="" />
            <h2 className="salute"> .حيـــــاك الله</h2>
          </div>
          <p className="desc">
            نحن<span> أفضل شركة برمجيات في السعودية، نأخذك للريادة</span>
          </p>
          <p>
            نحن في مؤسسة ترميز كود لتقنية المعلومات، شركة سعودية متخصصة في تقديم
            حلول البرمجيات المبتكرة التي تلبي احتياجات الأعمال والتكنولوجيا
            المتطورة. نقوم بتطوير الأنظمة البرمجية المخصصة، وتصميم المواقع
            والتطبيقات، بالإضافة إلى استراتيجيات التسويق الرقمي، بهدف تقديم حلول
            تقنية تسهم في تعزيز قدرة الشركات والمؤسسات على التفاعل مع التغيرات .
          </p>
          <Button />
        </div>
      </main>
      <section className="word p-8">
        <img className="quote" src={quote} width={80} alt="" />
        <div className="wrapper px-8 py-16 ">
          <div className="flex flex-col gap-5 items-end">
            <img width={400} src={Word} alt="" />
            <p className="flex items-center gap-2">
              الأمير محمد بن سلمان حفظه الله ورعــاه{" "}
              <img width={10} src={dash} alt="" />
            </p>
            <p className="pp">همّة السعوديين </p>
            <p className="pp">مثل: حبل طويق.. ولن ننكسر</p>
          </div>
          <img className="man" src={man} alt="" />
        </div>
      </section>
      <section className="our-vision p-8">
        <div className="wrapper flex md:flex-row flex-col-reverse item-center gap-5">
          <div className="flex-1 flex items-center">
            <img className="w-full" src={img1} alt="" />
          </div>
          <div className="info p-4 flex flex-col items-end justify-center gap-5 flex-1">
            <img width={60} src={aye} alt="" />
            <h3>رســــالتنا</h3>
            <p>
              تمكين عملائنا من التميز في عالم التكنولوجيا المتسارع، عبر تقديم
              حلول برمجية مبتكرة وموثوقة ترتكز على التحليل العميق والابتكار
              المستمر. نحن نعمل جنبًا إلى جنب مع عملائنا لتحقيق رؤية واضحة
              ومتكاملة للتكنولوجيا الحديثة، مع ضمان توفير خدمة متميزة تواكب
              المتطلبات العالمية والمحلية، وتحقق النتائج التي تدعم أهدافهم
              الاستراتيجية في ظل رؤية المملكة 2030.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="our-vision p-8">
        <div className="wrapper flex md:flex-row-reverse flex-col-reverse item-center gap-5">
          <div className="flex-1 flex items-center">
            <img className="w-full" src={img2} alt="" />
          </div>
          <div className="info p-4 flex flex-col items-end justify-center gap-5 flex-1">
            <img width={60} src={comment} alt="" />
            <h3>رؤيــــتنا</h3>
            <p>
              أن نكون في طليعة الشركات السعودية في مجال تطوير البرمجيات وحلول
              التقنية الحديثة، ونساهم بشكل فعال في تمكين المؤسسات والشركات في
              المملكة من تحقيق أهدافها الرقمية، بما يتماشى مع رؤية المملكة 2030.
              نسعى لتعزيز الابتكار في قطاع التكنولوجيا من خلال حلول ذكية ومرنة
              تدعم التحول الرقمي وتساهم في تحقيق التنمية المستدامة.
            </p>
          </div>
        </div>
      </section>
      <section className="our-partners p-8 my-8">
        <h3>شركــــاء النجــاح</h3>
        <img className="m-auto my-5" src={curvedLine} alt="" />
        <p>
          نفتخر بالثقة الممنوحة لنا من قبل الشركات العالمية الرائدة عبر رحلة
          تاريخنا: شركاء موثوق بهم يقودوننا نحو مستقبل مشرق ومزدهر.
        </p>
        <div className="wrapper flex flex-wrap gap-3 justify-around">
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
          <img src={partner3} alt="" />
          <img src={partner4} alt="" />
          <img src={partner5} alt="" />
          <img src={partner6} alt="" />
          <img src={Frame7} alt="" />
          <img src={Frame8} alt="" />
          <img src={Frame9} alt="" />
          <img src={Frame10} alt="" />
          <img src={Frame11} alt="" />
          <img src={Frame12} alt="" />
          <img src={Frame13} alt="" />
          <img src={Frame14} alt="" />
          <img src={Frame15} alt="" />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
