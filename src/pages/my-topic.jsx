import React from "react";
import iconBook from "../images/icons/book.svg";
import iconGlass from "../images/icons/glass.svg";
import iconConnect from "../images/icons/cloud-connection.svg";
import iconGroup from "../images/icons/Group.svg";
import iconVideo from "../images/icons/video-vertical.svg";
import Topic from "../components/topic";
import MyCourse from "../components/my-course";
import CourseOnline from "../components/course-online";
import News from "../components/news";
import Questions from "../components/question";

function MyTopic() {
  const data = [
    {
      topic: [
        {
          title: "เลือกเรียนตามหัวข้อที่สนใจ",
          icon: `${iconVideo}`,
          details: [
            {
              id: 1,
              title: "Data",
              subTitle:
                "เรียนรู้และฝึกฝนกระบวนการคิดสร้างมูลค่าให้ธุรกิจด้วยข้อมูล,",
              icon: `${iconBook}`,
            },
            {
              id: 2,
              title: "Science ",
              subTitle:
                "เรียนรู้และฝึกฝนกระบวนการคิดด้วยกระบวนการทางวิทยาศาสตร์",
              icon: `${iconGlass}`,
            },
            {
              id: 3,
              title: "Tech",
              subTitle:
                "พร้อมเป็นที่ต้องการของตลาดแรงงานด้วยทักษะการเขียนโปรแกรม",
              icon: `${iconConnect}`,
            },
            {
              id: 4,
              title: "Business",
              subTitle:
                "พลิกโฉมธุรกิจในยุคดิจิทัลด้วยการเข้าถึงลูกค้าในช่องทาง และเวลาที่เหมาะ",
              icon: `${iconGroup}`,
            },
          ],
        },
      ],
      courses: [
        {
          title: "คอร์สของฉัน",
          icon: `${iconVideo}`,
          details: [
            {
              id: 1,
              title: "Generative AI and ChatGPT: Design Thinking Edition",
              img: "https://s3-alpha-sig.figma.com/img/c19f/3085/f3f1559625875fa62548b173aba41617?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VVxlZdYA1wno738PwWmzFokQx1FfwW5WhIPKtburEfIZIJUFL-YyLXhECckDQUlszWZLVgMa~8HhGAs0XqDX5hBTVltRxc8XTOMblAYwD5Tpe22j85fF~c46Iul-Bn52gmBuVYvJDvjG3Z7vPlSDRVDd0gby6D5M-FMSWcA8TM9pDeM1FyyLqJsNse-5R9XSD7VRaFlUX3z0TOO4XvwQfvNqIFZNkvG1FLDvWfxu-qvthmAmUf-VrirXwvkzJXfSacreGoocx5j31335K9fSEbZUznjQoN1lzJDmq1KXq0-Loct62eg9werXKvMVh5b8Uxf20GnFpLlJLewNQR9Gkg__",
              subTitle: "Generative AI and ChatGPT: Design Thinking Edition",
              percent_text: "เรียนไปแล้ว",
              percent: 0,
            },
            {
              id: 2,
              title: "Generative ChatGPT: UX Design Edition",
              img: "https://s3-alpha-sig.figma.com/img/fe04/73d7/1bc18d293d8ab500701d3c573529e348?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiZRX45Lyw~80YrEZy-TbJehrAu5NxMS8WkFpRWVVUQh2~Gw0I2ZsBN6Rfk9g9SofWXmKVimN-Bc7NZ0EI5esMv~e2H2JoOTzY~UEF6x2B6yKRHgp5k8aIbvZNlT09UyGhBvCckDIIg49vT6F27~flLbydJa70tdSSbDdhqrmsjfX4zNdvKtr6IlZKVA~1SDOTI8VNks-jxmV1z0eHOjrXamm~l4IGyWlJhyXrOh6o9TnOb2MRgTIzBcnldRDbxDGcztl6hTJtfOxLFMBc0iA7oU6JSW-cfj~Ct4BQ9q7td383hocbG6-4yndoBxgl13WCJJrtUe-22e7ieoisbJdw__",
              subTitle: "Generative ChatGPT: UX Design Edition",
              percent_text: "เรียนไปแล้ว",
              percent: 10,
            },
            {
              id: 3,
              title: "เทคนิคการจัดทำบัญชี จัดการภาษี ด้วยเทคโนโลยีดิจิทัล",
              img: "https://s3-alpha-sig.figma.com/img/c01e/c8a9/b6a1a568db1b14533ab8a6110845ed11?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lpvNogvhdbqB3OKDu5wj6b8mGUH8v9hMX8ftRO38tzlsq1213~alFllJ4U4fYAeGXFNfyELrajn1KQWVgfbDNmW-Qa1tkktvhHvzrh9cl6yLRiLSfXoUbq4vcAtvi4lr9TjJAXcwq~onfJSAIYaMBD8gYtzYe46kuoDyeKv311MTIkw~nzas3TsVW8dOCDIXs-mNwAcqH5Fb0-m6AteSbY~V~MbzkHt-0dEFBZhcD3Ut62RDclWDuHFIMw8KeZ1uZeaoEIWS~74hkwcSPgyhqOqKFQLP3hWV-px~j9P2-4Iv7MmYBvDOCrdJz7ncsgZq7udhnIAskl7V4mxA8~BvWw__",
              subTitle: "เทคนิคการจัดทำบัญชี จัดการภาษี ด้วยเทคโนโลยีดิจิทัล",
              percent_text: "เรียนไปแล้ว",
              percent: 40,
            },
            {
              id: 4,
              title: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
              img: "https://s3-alpha-sig.figma.com/img/32c5/2ea0/aec8584f3984917f0078b0655595a2ec?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gsGCC0UacgfYQ91KmwORVLcEv2qZDklN-n5pUeGnhbf1wot4StRAN4bIoAVwFVWeE7LmiCnnmVDbr~XkRHD-GT-VQ9S~qTr67CxsW8bAngxvBMBFr9i224g2KochRdy1iZVtXUwJ~HFAdulNhAw0ZuQIAGOgDXyPtr5-dT3TmBhclJDc-ty6qjLBvHF-vnPR52x90oGle~Yk4YI3fWFu4qYyn1Ol86WawUjjxNicWI1UtosYVY0IHpBqITvUcRBano~HKm8Ersnwx4QdCaymyEGl4lBuS53AsbhQZUNoaU-Q-916nSCGAY0RksBhljciVCjz64jipBG1D1E~nSa~Lg__",
              subTitle: "องค์ประกอบของผู้ประกอบการ SME ที่ประสบความสำเร็จ",
              percent_text: "เรียนไปแล้ว",
              percent: 80,
            },
          ],
        },
      ],
      courseOnline: [
        {
          title: "คอร์สออนไลน์",
          icon: `${iconVideo}`,
          details: [
            {
              id: 1,
              type: "Business",
              title: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัย พื้นฐาน",
              img: "https://s3-alpha-sig.figma.com/img/32dd/5a54/e3d9b7c7303101f83c12be68b429d07c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSLnx4p0kV0AHV15lVv4FiGFfwoZP8a1zGQYSNEtpnVHEH6VJ2hgBYyHFHsKbyN1FUiLRmlj8eq25CGwNnw6IlZfkW6ThBhUVXMMJgHH~CVLVcWJlJei9woF5SStgNO5LFSdm-x78UocN4~oyrKpV6YmjP2TTpRPjIpv28QvKCn0ibiaq3WXdqavRHffUe4cbnZBUSzyr-SGiueHx56o13Y3YzHm5Tv0HCPXNZWtK51mW1556We5wOl6JOME4Y8eEyHETxVVAlZ-AQLcCdqIvye1qKO7qGjx-Hj~Mug~pG9mxMt44A5n4ultj2TYho-qgIaUIzREljUtYuMXEhwk7Q__",
              subTitle: "รู้และเข้าใจปัจจัยที่ส่งผล กระทบต่อราคาหุ้น",
              imgPerson:
                "https://s3-alpha-sig.figma.com/img/f0e8/d4e6/c2710665ea2f0a7e297bdab92edca7ea?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OC-GAwZX~w7kGxj6xk3E7eYsQXqjb8I7ABU7Bt1YUxeF0KMuq8YG16pp7oMcG1mGHiUM-tRFYW0XPjWu8zxqkQggQax4I~I3K52~QHJvJa1Nt4z8CJF9JBFV9Af3kw8tvzNnjYMmPaVoRCDliPMiEksFo3a4YDpO0ZYcHaxw3xERYJJ0YrtMUVsB7KhJDOc0Hb7pa4fSDmyTjplbXJdpQsvqHjTq8bIpK9o7CUZbVBlux4H7LCTxMHNcWuZIBS7tYTiEnhOnYMvCS5Uf8dzOWJ6APkjNdlVD1QSbRFxH4~MuaBuFDxJYDnXtdNzEDahncw3V3vaFDSedNbZRgMcQig__",
              name: "ณัฐกานต์ สิทธิชัยอนันต์",
              position: "CEO Y.I.M Corporation",
            },
            {
              id: 2,
              type: "Data",
              title: "Progressive Web Application",
              img: "https://s3-alpha-sig.figma.com/img/e4dc/ada0/c1d12186fb37807ac38dc98b73008442?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k4QHfG2-pU2cy0fYqubx4vOOUNlCU2c7cM9ntQVHB-DXRqjyiLdncDQoK36uqYOu-aUfJLJXythulWAWVxNIvVCgGDksdrMS9IHjrVXHzB4wbgVTATs-LIUJezJwLC5K2sVYmuc5WQHkstEus0C9JCqt~kUI1O~LNU09ecjdq6GD~MYR2CUzvf4mnvbSXtOuqYwsdmcncNyvRX~CQ1dBRwxV48kxmkB9hUL55JdaE2KaR9C14TRU7XSH25M18qrm7P1nghqfSSxnqKfNjjWdSX34boqrZjQ9ukoU1MoI9eGMax4bfyqO9zF2uOg4zs3JLwH3Q7YNJmEzCTEOo50yAg__",
              subTitle:
                "การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web Application (PWA)",
              imgPerson:
                "https://s3-alpha-sig.figma.com/img/c94b/af5e/af21d8c8975213b5ebe52f6fb439bece?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpZBIX40821gVoya-i2B6ctVRx9phFSVp~1s20DIpjuVqlB9-DorL7ltPNo2Av89D1cfERq8xQsi~oI4V44jWwZbQKp5eFKVXdXd3A2TZis76lmwZf2VWhTQ4uCmT9R~5~NyQVG66h62USRLPaNC-7aMNRhRUQcfzqC-o8xQfmkq7sa0C1J5i5R0bKwdzaO0Y3uY1TE7skKAYftPboZkXVbBeLTT1LX8EidkfZy1tDgm5LJ4Tag4K5M-32gw1NavjhS4A7YmosV4rh~v-4mCU0a9R46WEWw92uF30V2i~~YCafTC60OsFvBbxcjrZ-JKz7NmbdzG6DkeMgw1~Ql5zQ__",
              name: "ปัญจมพงศ์ เสริมสวัสดิ์ศรี",
              position: "Google Developers",
            },
            {
              id: 3,
              type: "Science",
              title: "React Hooks in Action",
              img: "https://s3-alpha-sig.figma.com/img/036e/bc9b/844cfffcb1c0846646a14329911e6889?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObQYfNSC~Qf05vmVwYYsOPjdOQdDOTm7Lp0k0abgdQMSEDjmrhL2Sn~ZC~KcdsGsGWahLRNmCiwzfFbpJGoAdm5FG~48zjS45BZ6RWLgPoFMob5HnRCnStgh6oS3fHb~pWnm4ixhSb~wSKPFNLRecVr9~3p8HIni9l6RgynWYAgNyy2l2sXLrytedXVDo3ZFCpKH~apISJ3BIJdt3cKi7u3vWhvOUxgruqAyUzPPfcTdbvI5ucMWle-sDX2CDkJWvlX4ZYKPJOOv1zKAngaqqF31iZypGFxZ1yjG4QpbZlBIA37guaflyTWoMcGs7BNncC0HBrtzqtedaXPZle8h6A__",
              subTitle: "เรียนรู้การเขียน React Hooks แบบ Best Practice",
              imgPerson:
                "https://s3-alpha-sig.figma.com/img/b5b6/3071/f55ba084e032ec8f4519678d9904be42?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DeT-iarQXti8yGou6qMhT3pUuXOA6~RMZI8eI5d5o8vZN8bSqtfH6-Qm~CzUYQ7Z7T55kgLhCZN90H33kFnku17hLBLxOYuAeDkfE1J97YA6gHbhV6wCnNbjKdrdFbyQqBIMMXwYDdWWdcYURsiH0FBD2yziQdI7tOu-RbdpWiMxmwSUD~euMD-O~lmVbg50AnwYocDrXMqV5p4gIXbmmt1hImuu~1yw65MbrkcOlLfZ0zGA~OQhMGEX9bOxJbQyPmI5i4dj5rnp1jysmqb7r-M3sfR8bd9-qGxRHXFw4M7v2S6BfWcBET0qXW8eO8Ss98Av2zi6knYfBwMCHW-dhA__",
              name: "วรัทธน์ วงศ์มณีกิจ",
              position: "Co-Founder",
            },
            {
              id: 4,
              type: "Tech",
              title: "Generative AI and ChatGPT: Design Thinking Edition",
              img: "https://s3-alpha-sig.figma.com/img/6a37/466c/3e859b84586c57f776c1fa78de37a61f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qfjW4RgTtJ9-vfTTtFxiDgSsfV8GNWmplEnxOVQe36KDjtsQ6uSSaO1waB0e2yxQA5xnq4DwIeY-JGnP-GHk1jFltSjtLB5tsPNIXfD7RLTohgvk5ZrciDVIvjrGagZXIEK0qo3bUonX3MhZSDAcGWxqJKr1xsSoLC5iDtgWpovC3LJDUP5ftSAxxzLGGGi73z9lsOPkfq6CDXT0j~6mM4VEDNIT3evwd8V6mRqEZ33X7in0WNcolcr-kaJpGdDkNFYR2n4E67HjI9MBTb5d~jlhC5kyfnT52o1gNbZWAKq3ZOeqP-6vy93bc18-Qm6bRrwWJX3ZFgb84NbbB6Kx~g__",
              subTitle: "ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI",
              imgPerson:
                "https://s3-alpha-sig.figma.com/img/ab73/0f69/565714f55e9c5abf2e54bb443f9ba539?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCOC44mIcAVZt-sOa7lz5HtmGwESKKavDSS2Rb6Mq4i2Bf5pXyG0Zc1SvsYP9cYFX9yaIBO49ZFpUgL54tPCUhq1YGXRV10a7Miot~qmcUUfofLAZ578EXRLG4bzhsDuzS-mn~ofIrGbLzgTxgMyCMJIIv68GGbPxdg5D-SoK5vmiJLtBjQNx6NjZA~7mWbbZakRjPtpt2kL74LUCQyI6CvXxZk~6jpVW7M9zPnOSY2-uXQdjaGKNgbKRxvsQFBWXuevpBFk6ZiWK2MpLKKHuQxd-6RoSaGiOz16c1jeOe6WdBm5qKMfISwT~FRsLEay730bO4qWg5u5-5PJ2aJRPQ__",
              name: "ทัศน์พล รัชตะสัมฤทธิ์",
              position: "Software Engineer",
            },
          ],
        },
      ],
      news: [
        {
          title: "บทความและข่าวสารล่าสุด",
          icon: `${iconVideo}`,
          details_1: [
            {
              id: 1,
              type: "Business",
              img: "https://s3-alpha-sig.figma.com/img/71a5/6b0e/4d767f7ac0f88ed1593c1ea0821c190c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JdgcM7PfdY9lXiYU9mCy31FYwGJVnTs7wlEILq0EvP0fFbOtHbwJQJI1jyZylT0qjUXiYluJ4ahU38zK~Fyc2uJiK7BuKzRMa2kXPOlmxbhc9vgXNQtDTrtR49OUZehmhPYwTaCkXR5PCjT~iYllGQbaeU2nOlIUkcxXUeHtF9OvOGuQ-HlS1OsljbsqYpHxWn7nK5~CaKwWlVm6LTWZEUF2WpBZLPxxcDujM4VKLyExlxfBqvXvK9MCLfJFZ4kKiOtU9abAjV~3ikB0lR-M5FxOH9NWNMbtSlw0gQuG7fYUf96W~T9sVelx-k3BmSFtOYqy2rWTwIlOF643sXZbIQ__",
              title: "profit / loss of stocks in the portfolio",
              subTitle: "กำไร/ขาดทุนของหุ้นในพอร์ต ต้องดูอย่างไร?",
              details:
                "เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ การติดตามดูข้อมูลของหุ้น ในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือ ขาดทุนมากน้อยเท่าใด?",
              date: "29 กรกฎาคม 2023",
              viewer: "เข้าชม 240 ครั้ง",
            },

            {
              id: 2,
              type: "Data",
              img: "https://s3-alpha-sig.figma.com/img/fde3/6b93/67ebcc0a53da058c45fa2f6056e3ad62?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eTxjmt9is0IUYMvT-8xxcmkCrZ0tt~N9p9VeAblq-WHz3QQpXhVSqkuqnAu97Ck7g4~zMhbRi9KD3QQojPzqjHmjDbE7VzxPi6gpbNjguO3fv9CBnFCCa-rcu3fO0HH9-APXoqtRtm623OWVTM6lrD-Znyp0OEljvP472~ZRO~9D29PbnTN0VkraODXwC5dbRjniJSondQ2Vd~C7jw3C065n9gZfZyToCrYSq6UEwF~PenhX~s~lyTF5RGP28W~nyNBWYnWPnqUGthQyPQ9e4Uk~DHvQvT9RUp~oR1LoiDHY-nRsV684HIoVsRQPjg79gFTEcW7ppQWJQU2fO5ePwg__",
              title: "What is a Data Engineer",
              subTitle: "Data Engineer คืออะไร?",
              details:
                "Data Engineer คือคนที่ทำงาน กับหลากหลายเครื่องมือเพื่อ รวบรวมข้อมูลจัดการข้อมูลและ เปลี่ยนข้อมูลดิบ ให้พร้อมใช้งาน สำหรับทั้ง Data Scientist และ Data Analyst",
              date: "29 กรกฎาคม 2023",
              viewer: "เข้าชม 240 ครั้ง",
            },
          ],
          details_2: [
            {
              id: 1,
              type: "Science",
              img: "https://s3-alpha-sig.figma.com/img/49b5/5686/b30a5e498a147040df168720d051b1ee?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iZ51PI31YfS3jPb98q0eUne9I0lm-2cCluCYZReC9iNtkltuELFy34T2tvwaEv-VIfIbl6qASMmJ5CrRHWaKi9QnggRqKDsriZrWa6lDs8ulF1qSElQzDKq8eNWGoTEK73RdLq4eRBb1H~yeVw8-PP9F1ZT7qylZXFfyf5jmhqWpJD6InViYDs-QN5I30cm0lZye3RYbWEorByZmgHO0Lq9F1uwGyYgy2UQJnSJjGLii~BC2NjaWEPKerhC2GZw99YybRx~sxHD4LFDtZtWB4yUj~exWmtSImt7B5Ktf0brvSlyclyE3syo6Y1h5HK7eDTHuN6tMjn0Bv-5-Lj7OrQ__",
              title: "สารแทนน้ำตาลไม่อันตราย",
              subTitle: "สารแทนน้ำตาลไม่อันตราย",
              details:
                "สาเหตุที่องค์การอนามัยโลกให้คำแนะนำดังกล่าวมาจากผลการวิจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล",
            },
            {
              id: 2,
              type: "Tech",
              img: "https://s3-alpha-sig.figma.com/img/3dfe/2021/d8c295bbeec43e0b3e60220d1cd605ca?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=blcS74O4itzCo06rbwp4C9rKlHijMK~HEezyi4b96MzalcYxQ9SQMa1MzCpHjc3CZyO~M2be445iG9pfNYdcgFFFlPWxaJ5xCvD2JAC9lQYvzA1vacxsNUUDPdTAh1NWQzo2TXeFcv7oJgvHNAKoRZDbUbuFt9OxWIRFsvgmPZP8jOy9uGcKTgCnJ4uXjNbVyT~G-ure4Ed-3gZxsKmPRwwGO~URX8KZ4e4XfJ~77qkDOilESqjpIdsx~13PAtTpyNVQ53tce-6n5RKBqbKaPsqzpr-Ucl0uPvi~4NB462gnoCx~RIRadZg4mfkSksKsyvmyqkcCliCCAJuOQzhSbQ__",
              title: "Data Pipelines with Airflow",
              subTitle: "Data Pipelines with Airflow",
              details:
                "เรียนรู้การสร้าง End-to-End Data Pipelines โดยใช้ Apache Airflow ตั้งแต่อ่านข้อมูล ทำความสะอาด ปรับให้อยู่ในรูปแบบที่เหมาะสม",
            },

            {
              id: 3,
              type: "Science",
              img: "https://s3-alpha-sig.figma.com/img/5f2a/827c/52f7b5d195282978ca3a4f03f5b8625a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fV9hsYECEYpqWPfte4pCcuPU7PNyr7b1q6dAF66xBU4cka5q5v0XTJMvxrQDg7mZj-VpO9x4rNcwJfKHSCcEByBU15QccGgXDriiuMIm-TqhtnhP~0KQfLmB4Sh9i3bXetH~9UYFWVZySnbcGqlS39Vl2NhoMcQbkDul0D0vAegwfr~OH~YDOyfZ8LP5JY~4lMS0RO8g4T6o2FB9EYXvjza~B5zDhV4DSJZQkrNy4BnMdrdcGOSPmcAsD2zm-ZeCxsvg9VuSmHpjFWQ7seVEDPctq~Yd0wvcwuqXPybPh64GyjtSfig2k6tT69zDQNA26Fw16oFbxX6Fi4aquoiMlw__",
              title: "ร่างกายสามารถ ย้อนวัย “อายุชีวภาพ”",
              subTitle: "ร่างกายสามารถ ย้อนวัย “อายุชีวภาพ”",
              details:
                "ความอ่อนเยาว์หรือแก่ชราของเซลล์และอวัยวะมนุษย์นั้น วัดกันด้วย “อายุชีวภาพ” (biological age) ซึ่งอาจจะแตกต่างจากอายุจริง",
            },
          ],
        },
      ],
      question: [
        {
          title: "ตั้งกระทู้คำถาม",
          icon: `${iconVideo}`,
        },
      ],
    },
  ];

  return (
    <div className="pt-5">
      {data.map((item, index) => (
        <div key={index}>
          {/* Topic */}
          {item.topic.map((d, i) => (
            <Topic d={d} i={i} />
          ))}

          {/* courses */}
          {item.courses.map((d, i) => (
            <MyCourse d={d} i={i} />
          ))}

          {/* courseOnline */}
          {item.courseOnline.map((d, i) => (
            <div className="d-flex gap-2">
              <CourseOnline d={d} i={i} />
            </div>
          ))}

          {/* news */}
          {item.news.map((d, i) => (
            <div className="d-flex gap-2">
              <News d={d} i={i} />
            </div>
          ))}

          {/* question */}
          {item.question.map((d, i) => (
            <div className="d-flex gap-2">
              <Questions d={d} i={i} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MyTopic;
