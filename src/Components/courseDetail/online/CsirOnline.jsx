import React from 'react'
import './Online.scss'
import { Helmet } from "react-helmet";

import Tabs from '../../tabs/Tabs';


// const ldJson = {
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   "itemListElement": [{
//     "@type": "ListItem",
//     "position": 1,
//     "name": "Blogs",
//     "item": "https://www.speblog.org"
//   },{
//     "@type": "ListItem",
//     "position": 2,
//     "name": head.title,
//     "item": window.location.href
//   }]
// };


const CsirOnline = () => {

  let tableFields = [
    [
      "CSIR NET (Chemical Science)",
      "6 Months",
      "Regular",
      17700
    ],
    [
      "CSIR NET (Chemical Science)",
      "1 Year",
      "Weekend",
      20000
    ],
    [
      "CSIR NET (Chemical Science)",
      "1 Year",
      "Regular",
      20000
    ]
  ]

  let recorded = [
    [
      "CSIR NET (Chemical Science)",
      "6 Months",
      "Recorded",
      4999
    ],
    [
      "CSIR NET (Chemical Science)",
      "1 Year",
      "Recorded",
      8499
    ],
    [
      "CSIR NET (Chemical Science)",
      "2 Year",
      "Recorded",
      10999
    ]
  ]



  return (

    <div className='online'>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Unlock Success with Our Top CSIR NET Chemical Sciences Online Courses - Enroll Now</title>
        <meta name="description" content="Join ASAP Institute for top-notch CSIR NET Chemical Sciences coaching in Delhi, India. Expert faculty, flexible online options, and competitive fees. Your path to chemistry exam success starts here" />
        <link rel="canonical" href="https://chemtime.co.in/onlinecourses/csir-net" data-react-helmet="true"/>
        <meta name="keywords" content="Online Classes for CSIR NET Chemical Sciences, CSIR NET Chemical Sciences Online Courses, Online Csir Net Coaching, Csir Net Coaching In Delhi, Csir Net Chemical Science Coaching" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Unlock Success with Our Top CSIR NET Chemical Sciences Online Courses - Enroll Now" />
        <meta property="og:description" content="Join ASAP Institute for top-notch CSIR NET Chemical Sciences coaching in Delhi, India. Expert faculty, flexible online options, and competitive fees. Your path to chemistry exam success starts here" />
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
                      "name": "CSIR NET Chemical Sciences Online Course",
                      "item": "https://chemtime.co.in/onlinecourses/csir-net"
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
                "name": "Why should I choose online coaching for CSIR NET Chemical Sciences?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Online coaching offers flexibility and convenience. You can attend live lectures, access recorded sessions, and engage with study materials from the comfort of your home. This approach allows you to plan your preparation according to your schedule and preferences."
                }
              },{
                "@type": "Question",
                "name": "What makes ASAP Institute's CSIR NET Chemical Sciences Online Batches stand out?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our courses are designed by experts, ensuring comprehensive syllabus coverage and effective teaching methods. You'll have access to both live and recorded lectures, providing the best of both worlds. The flexibility in course durations allows you to tailor your preparation to your specific needs."
                }
              },{
                "@type": "Question",
                "name": "Are there mock tests and practice materials included in the CSIR NET Chemical Sciences Online Batches?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer a variety of mock tests, practice questions, and quizzes to help you assess your progress and sharpen your problem-solving skills. These resources are vital for your overall preparation."
                }
              },{
                "@type": "Question",
                "name": "What are the benefits of earning the CSIR NET Chemical Sciences qualification?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Qualifying for the CSIR NET Chemical Sciences examination opens doors to numerous opportunities in research, academics, and the chemical industry. It is an essential step towards your academic and career growth."
                }
              },{
                "@type": "Question",
                "name": "How do the different batch durations work, and which one should I choose?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can choose from 6-months, 1-year, or 2-year durations based on your preparation needs. The live and recorded options provide flexibility for your learning pace and schedule."
                }
              },{
                "@type": "Question",
                "name": "Can I access the recorded lectures at any time, or do they have a specific schedule?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The recorded lectures are available for your convenience. You can access them at any time that suits your schedule, allowing you to study at your own pace."
                }
              },{
                "@type": "Question",
                "name": "How do I interact with faculty and fellow students in the online classes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "During live sessions, you can interact with the faculty and your peers through chat and discussion forums. This engagement helps clarify doubts, share insights, and enhance your learning experience."
                }
              },{
                "@type": "Question",
                "name": "What are the system requirements for attending online classes and accessing recorded lectures?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To attend online classes and access recorded lectures, you need a computer or mobile device with an internet connection. We recommend a stable internet connection and modern web browsers for the best experience."
                }
              },{
                "@type": "Question",
                "name": "Are there any scholarships or discounts available for the CSIR NET Chemical Sciences Online Batches?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We occasionally offer scholarships and discounts. Please check our website or contact our support team for any ongoing offers or promotions."
                }
              },{
                "@type": "Question",
                "name": "How can I track my progress and performance in the CSIR NET Chemical Sciences Online Batches?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide regular assessments, mock tests, and quizzes to help you gauge your progress. You can also track your performance through our online learning platform, which records your scores and provides insights into your strengths and weaknesses."
                }
              },{
                "@type": "Question",
                "name": "What is the success rate of students who have completed the CSIR NET Chemical Sciences Online Batches at ASAP Institute?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We have a track record of success with many students who have successfully qualified for the CSIR NET Chemical Sciences examination. Your success depends on your dedication and commitment to the course, as well as the effort you put into your studies."
                }
              }]
            }
        `}</script>

      </Helmet>

      {/* <img src={courseImage} alt="" /><br></br><br></br><br></br> */}
      <h1>CSIR NET Chemical Sciences Online Batches: Your Gateway to Success</h1>
      <p>Welcome to ASAP Institute's CSIR NET Chemical Sciences Online Batches, designed to pave your way to success in the CSIR NET Chemical Sciences examination. We offer a range of meticulously designed courses to cater to your specific needs. Here are the key features and answers to your frequently asked questions about our CSIR NET Chemical Sciences Online Batches:</p>

      <h2>Course Features:</h2>
      <ul>
        <li> • <strong>Expert Faculty:</strong> At ASAP Institute, we take pride in our highly experienced and dedicated faculty members who are experts in the field. They bring years of teaching expertise and in-depth subject knowledge, ensuring that you receive the best guidance.</li>
        <li> • <strong>Comprehensive Syllabus Coverage:</strong> Our courses delve into every aspect of the CSIR NET Chemical Sciences syllabus, providing an in-depth understanding of core concepts. We believe in laying a strong foundation to tackle even the most challenging questions.</li>
        <li> • <strong>Effective Teaching Methods:</strong> We employ various teaching techniques, including live lectures, problem-solving sessions, and interactive discussions to make learning engaging and effective. Our courses are designed to offer you a real classroom-like experience from the comfort of your home.</li>
        <li> • <strong>Multiple Batch Options:</strong> Choose the course duration that suits your needs. We offer 6-months, 1-year, and 2-year course options to accommodate your preparation plan.</li>
        <li> • <strong>Access to Recorded Lectures:</strong> Don't worry if you miss a live session; all our online classes are recorded for your convenience. You can revisit the lectures at your own pace, ensuring that you grasp all the essential concepts.</li>
        <li> • <strong>Quality Study Materials:</strong> Our study materials are curated to facilitate better comprehension of complex topics. We provide you with essential resources to support your online learning.</li>
        <li> • <strong>Regular Assessments:</strong> We provide regular topic-wise assessments to gauge your progress. These assessments are followed by detailed discussions to help you understand your strengths and weaknesses better.</li>
      </ul>

      {/* <h3>Batch Details:</h3>
      <ol>
        <li> • <strong>CSIR NET (Chemical Science) - 6 Months - Regular - Online Live + Recorded</strong><br />A 6-months intensive course with regular live classes and access to recorded lectures for flexible learning.</li>
        <li> • <strong>CSIR-NET (Chemical Science) - 1 Year - Weekend - Online Live + Recorded</strong><br />A 1-year course designed for weekend learning, featuring live online classes and recorded lectures for convenient studying.</li>
        <li> • <strong>CSIR-NET (Chemical Science) - 6 Months, 1 Year, and 2 Years - Recorded</strong><br />Choose from 6-months, 1-year, or 2-year durations to access recorded lectures that allow you to study at your own pace.</li>
      </ol> */}

      <Tabs />



      {/* <CourseTable mode={"Online Dashboard"} tableFields={tableFields} />
      <CourseTable mode={"Recorded Dashboard"} tableFields={recorded} /> */}
      <p>Note: 18% GST is applicable extra on above fees as per govt. norms.</p> <br></br><br></br>

      <h3>Registration Procedure:</h3>
      <ol>
        <li> • <strong>Online Registration:</strong> Click on the "Enroll Now" link provided on our website to register online.</li>
        <li> • <strong>In-Person Registration:</strong> You may also visit the ASAP Institute office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</li>
        <li> • <strong>Fee Payment:</strong> Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi.</h5></li>
      </ol>

      <p>Join ASAP Institute's CSIR NET Chemical Sciences online course to embark on your journey to success in the field of chemical sciences.</p>

      <h3>For inquiries and assistance, please contact us at:</h3>
      <div className="phone-number">
        <ul>
          <li> • <strong>Phone:</strong> <strong>8595764714, 7011767872, 9026800325</strong></li>
        </ul>
      </div>

      <h2>Frequently Asked Questions (FAQs):</h2>
      <ol>
        <li><strong>Q1: Why should I choose online coaching for CSIR NET Chemical Sciences?</strong><br /><strong>A:</strong> Online coaching offers flexibility and convenience. You can attend live lectures, access recorded sessions, and engage with study materials from the comfort of your home. This approach allows you to plan your preparation according to your schedule and preferences.</li>
        <li><strong>Q2: What makes ASAP Institute's CSIR NET Chemical Sciences Online Batches stand out?</strong><br /><strong>A:</strong> Our courses are designed by experts, ensuring comprehensive syllabus coverage and effective teaching methods. You'll have access to both live and recorded lectures, providing the best of both worlds. The flexibility in course durations allows you to tailor your preparation to your specific needs.</li>
        <li><strong>Q3: Are there mock tests and practice materials included in the CSIR NET Chemical Sciences Online Batches?</strong><br /><strong>A:</strong> Yes, we offer a variety of mock tests, practice questions, and quizzes to help you assess your progress and sharpen your problem-solving skills. These resources are vital for your overall preparation.</li>
        <li><strong>Q4: What are the benefits of earning the CSIR NET Chemical Sciences qualification?</strong><br /><strong>A:</strong> Qualifying for the CSIR NET Chemical Sciences examination opens doors to numerous opportunities in research, academics, and the chemical industry. It is an essential step towards your academic and career growth.</li>
        <li><strong>Q5: How do the different batch durations work, and which one should I choose?</strong><br /><strong>A:</strong> You can choose from 6-months, 1-year, or 2-year durations based on your preparation needs. The live and recorded options provide flexibility for your learning pace and schedule</li>
        <li><strong>Q6: Can I access the recorded lectures at any time, or do they have a specific schedule?</strong><br /><strong>A:</strong> The recorded lectures are available for your convenience. You can access them at any time that suits your schedule, allowing you to study at your own pace.</li>
        <li><strong>Q7: How do I interact with faculty and fellow students in the online classes?</strong><br /><strong>A:</strong> During live sessions, you can interact with the faculty and your peers through chat and discussion forums. This engagement helps clarify doubts, share insights, and enhance your learning experience.</li>
        <li><strong>Q8: What are the system requirements for attending online classes and accessing recorded lectures?</strong><br /><strong>A:</strong> To attend online classes and access recorded lectures, you need a computer or mobile device with an internet connection. We recommend a stable internet connection and modern web browsers for the best experience.</li>
        <li><strong>Q9: Are there any scholarships or discounts available for the CSIR NET Chemical Sciences Online Batches?</strong><br /><strong>A:</strong> We occasionally offer scholarships and discounts. Please check our website or contact our support team for any ongoing offers or promotions.</li>
        <li><strong>Q10: How can I track my progress and performance in the CSIR NET Chemical Sciences Online Batches?</strong><br /><strong>A:</strong> We provide regular assessments, mock tests, and quizzes to help you gauge your progress. You can also track your performance through our online learning platform, which records your scores and provides insights into your strengths and weaknesses.</li>
        <li><strong>Q11: What is the success rate of students who have completed the CSIR NET Chemical Sciences Online Batches at ASAP Institute?</strong><br /><strong>A:</strong> We have a track record of success with many students who have successfully qualified for the CSIR NET Chemical Sciences examination. Your success depends on your dedication and commitment to the course, as well as the effort you put into your studies</li>
      </ol>

      <p>We're here to support you on your journey to success in the CSIR NET Chemical Sciences examination. If you have any more questions or need further assistance, please feel free to reach out to our team.</p>
    </div >
  )
}

export default CsirOnline