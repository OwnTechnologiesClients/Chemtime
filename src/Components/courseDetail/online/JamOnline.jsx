import React from 'react'
import courseImage from '../../../assets/iit-jam-online.jpg'
import ogImage from '../../../assets/ogImage.png'
import OnlineCourseTable from '../../courseTable/OnlineCourseTable'

import { Helmet } from "react-helmet";
import Tabs from '../../tabs/Tabs';
import IITJamTabs from '../../iitJamPrice/tabs/IITJamTabs';

const JamOnline = () => {

  let tableFields = [
    [
      "IIT-JAM",
      "6 Months",
      "Regular",
      12000
    ],
    [
      "IIT-JAM",
      "1 Year",
      "Weekend",
      12000
    ],

    [
      "IIT-JAM",
      "2 Year",
      "Weekend",
      15000
    ],
  ]

  let recorded = [
    [
      "IIT-JAM",
      "6 Months",
      "Recorded",
      2499
    ],
    [
      "IIT-JAM",
      "1 Year",
      "Recorded",
      3999
    ],
    [
      "IIT-JAM",
      "2 Year",
      "Recorded",
      4999
    ]
  ]

  return (
    <div className='online'>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Best Online Courses for IIT JAM in India | ASAP Institute</title>
        <meta name="description" content="Get ready for IIT-JAM with best online courses, structured crash courses, and a dedicated practice section, all on ASAP Institute." />
        <link rel="canonical" href="https://chemtime.co.in/onlinecourses/iit-jam" />
        <meta name="keywords" content="IIT-JAM Chemistry online coaching Delhi, Best online coaching for IIT-JAM Chemistry in Delhi, Top coaching institutes for IIT-JAM Chemistry in Delhi, Online classes for IIT-JAM Chemistry in Delhi, Online preparation for IIT-JAM Chemistry Delhi." />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Best Online Courses for IIT JAM in India | ASAP Institute" />
        <meta property="og:description" content="Get ready for IIT-JAM with best online courses, structured crash courses, and a dedicated practice section, all on ASAP Institute." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://chemtime.co.in/" />
        <meta name="locale" content="en_US" />
        <meta property="og:site_name" content="Chemtime" />
        <meta property="og:image" content="/src/assets/ogImage.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2694" />
        <meta property="og:image:height" content="1402" />

        {/* Breadcrumb json */}
        <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://chemtime.co.in/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "IIT-JAM Chemistry Online Batch",
                        "item": "https://chemtime.co.in/onlinecourses/iit-jam"
                    }
                ]
              
  }
        `}</script>


        {/* FAQ json */}
        <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Which online coaching is best for IIT JAM Chemistry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ASAP is India's TOP online coaching for IIT-JAM Chemistry entrance exam. ASAP is the oldest IIT JAM Chemistry coaching institute in India."
                }
              },{
                "@type": "Question",
                "name": "Is ASAP good for IIT JAM Chemistry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ASAP IIT JAM Online Courses are an excellent choice for students preparing for the IIT JAM Chemistry Exam."
                }
              },{
                "@type": "Question",
                "name": "Can I clear IIT JAM Chemistry in 3 months?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It is possible to clear the IIT JAM Chemistry in 3 months, but it will require a lot of hard work and dedication."
                }
              },{
                "@type": "Question",
                "name": "What is the IIT-JAM Chemistry examination, and why is it significant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The IIT-JAM Chemistry exam stands as a gateway to esteemed educational institutions. Qualifying IIT-JAM Chemistry can open doors to admissions in IITs, IISc, and IISERs, and enhance your prospects as a scientist in renowned organizations such as DRDO and BARC."
                }
              },{
                "@type": "Question",
                "name": "What are the career benefits of excelling in the IIT-JAM Chemistry exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Success in the IIT-JAM Chemistry exam can unlock opportunities to pursue postgraduate programs at prestigious institutions. It can also lead to exciting career options in research, academia, and prestigious government organizations."
                }
              },{
                "@type": "Question",
                "name": "Can I switch between batches during my enrollment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While batch switching is possible, it is subject to availability and approval. We encourage students to discuss their requirements with our team to ensure a smooth transition."
                }
              },{
                "@type": "Question",
                "name": "What is the duration of the IIT-JAM Chemistry Online Batch at ASAP Institute?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The duration of our IIT-JAM Chemistry Online Batch varies depending on your choice of batch. Options include a 6-month regular batch and a 1-year weekend batch with live online classes, along with recorded content choices spanning 6 months, 1 year, and 2 years, catering to a spectrum of learning styles and paces."
                }
              },{
                "@type": "Question",
                "name": "How can I interact with the faculty during the live online classes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Engaging in interactive discussions and seeking clarifications for doubts is highly encouraged during our live online classes. Additionally, our faculty members are readily available during designated hours to address any additional queries you may have."
                }
              }]
            }
        `}</script>
      </Helmet>

      {/* <img src={courseImage} alt="" /><br></br><br></br><br></br> */}

      <h1> IIT JAM Online Coaching, Best Online Coaching for IIT JAM in India with ASAP </h1>
      <p>Welcome to the IIT-JAM Chemistry Online Batch by ASAP Institute, a transformative voyage towards conquering the IIT-JAM Chemistry examination. Our courses are carefully crafted to cater to a diverse audience, be it a dedicated student, a working professional, or an eager learner with aspirations to excel in IIT-JAM Chemistry.</p>

      <h2>IIT-JAM Chemistry Online Coaching</h2>
      <ul>
        <li> • <strong>Syllabus Mastery:</strong> Our IIT-JAM Chemistry Online Batch covers the complete IIT-JAM Chemistry syllabus. We strive to equip you with a robust understanding of every topic, ensuring you're thoroughly prepared to tackle the examination.</li>
        <li> • <strong>Interactive Learning:</strong> Immerse yourself in the world of interactive learning through our live online classes. Engage actively with our experienced faculty and fellow students during these sessions, fostering a collaborative learning environment and deeper comprehension of complex subjects.</li>
        <li> • <strong>Recorded Content:</strong> For your convenience, we've curated a rich repository of recorded lectures for our online batch students. These recordings offer flexibility in your learning journey, enabling you to revisit lectures and study at your own pace.</li>
        <li> • <strong>Practice and Assessments:</strong> Success in the IIT-JAM exam depends on rigorous practice. Our course provides an array of practice materials, encompassing questions, quizzes, and mock tests. These resources are carefully designed to help you sharpen your problem-solving skills and measure your progress effectively.</li>
        <li> • <strong>Flexible Batches:</strong> Tailor your learning experience to your schedule. We offer a 6-month regular batch, a 1-year weekend batch with live online classes, and recorded content options spanning 6 months, 1 year, and 2 years. Each option accommodates your unique learning style and pace.</li>
      </ul>




      <IITJamTabs />

      <p>Note: 18% GST is applicable extra on above fees as per govt. norms.</p> <br></br><br></br>

      <h3>Registration Procedure:</h3>
      <p>To enroll in our IIT JAM CHEMISTRY online course, you can follow these simple steps:</p>
      <ul>
        <li> • <strong>Online Registration:</strong> Click on the "Enroll Now" link provided on our website to register online.</li>
        <li> • <strong>In-Person Registration:</strong> You may also visit the ASAP Institute office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</li>
        <li> • <strong>Fee Payment:</strong> Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi.</h5></li>
      </ul>

      <p>Let your journey to academic success begin with us.</p>

      <h3>For inquiries and assistance, please contact us at:</h3>
      <ul>
        <li> • Phone: <h5>8595764714, 7011767872, 9026800325</h5></li>
      </ul>

      <h3>Frequently Asked Questions (FAQs):</h3>
      <ol>
        <li><strong>Q1: Which online coaching is best for IIT JAM Chemistry?</strong><br /><strong>A:</strong> ASAP is India's TOP online coaching for IIT-JAM Chemistry entrance exam. ASAP is the oldest IIT JAM Chemistry coaching institute in India.</li>
        <li><strong>Q2: Is ASAP good for IIT JAM Chemistry?</strong><br /><strong>A:</strong> ASAP IIT JAM Online Courses are an excellent choice for students preparing for the IIT JAM Chemistry Exam.</li>
        <li><strong>Q3: Can I clear IIT JAM Chemistry in 3 months?</strong><br /><strong>A:</strong> It is possible to clear the IIT JAM Chemistry in 3 months, but it will require a lot of hard work and dedication.</li>
        <li><strong>Q4: What is the IIT-JAM Chemistry examination, and why is it significant?</strong><br /><strong>A:</strong> The IIT-JAM Chemistry exam stands as a gateway to esteemed educational institutions. Qualifying IIT-JAM Chemistry can open doors to admissions in IITs, IISc, and IISERs, and enhance your prospects as a scientist in renowned organizations such as DRDO and BARC.</li>
        <li><strong>Q5: What are the career benefits of excelling in the IIT-JAM Chemistry exam?</strong><br /><strong>A:</strong> Success in the IIT-JAM Chemistry exam can unlock opportunities to pursue postgraduate programs at prestigious institutions. It can also lead to exciting career options in research, academia, and prestigious government organizations.</li>
        <li><strong>Q6: Can I switch between batches during my enrollment?</strong><br /><strong>A:</strong> While batch switching is possible, it is subject to availability and approval. We encourage students to discuss their requirements with our team to ensure a smooth transition.</li>
        <li><strong>Q7: What is the duration of the IIT-JAM Chemistry Online Batch at ASAP Institute?</strong><br /><strong>A:</strong> The duration of our IIT-JAM Chemistry Online Batch varies depending on your choice of batch. Options include a 6-month regular batch and a 1-year weekend batch with live online classes, along with recorded content choices spanning 6 months, 1 year, and 2 years, catering to a spectrum of learning styles and paces.</li>
        <li><strong>Q8: How can I interact with the faculty during the live online classes?</strong><br /><strong>A:</strong> Engaging in interactive discussions and seeking clarifications for doubts is highly encouraged during our live online classes. Additionally, our faculty members are readily available during designated hours to address any additional queries you may have.</li>
        {/* <li><strong>Q9: Are the recorded lectures accessible at any time?</strong><br /><strong>A:</strong> Yes, for students enrolled in the IIT-JAM Chemistry Online Batch with recorded content (available for 6 months, 1 year, and 2 years), the recorded lectures are at your disposal whenever you wish. This flexibility allows you to shape your learning journey according to your personal rhythm.</li>
        <li><strong>Q10: What are the advantages of the weekend batch for working professionals and students?</strong><br /><strong>A:</strong> Our 1-year weekend batch is meticulously designed to accommodate the busy schedules of working professionals and students. It grants you the flexibility to partake in live online classes during weekends, ensuring that your education remains uncompromised despite your bustling life.</li> */}
      </ol>

      <p>We're here to support you on your journey to success in the IIT-JAM Chemistry examination. If you have any more questions or need further assistance, please feel free to reach out to our team.</p>
    </div>
  )
}

export default JamOnline