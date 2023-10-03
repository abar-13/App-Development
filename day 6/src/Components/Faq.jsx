import React from 'react';

function Faq() {
  const faqData = [
    {
      question: '1. How do I schedule a meeting?',
      answer: 'To schedule a meeting, log in to your account and click on the "Schedule Meeting" button. Fill in the meeting details such as date, time, and participants, and then confirm the meeting details to create the schedule.'
    },
    {
      question: '2. Can I invite participants to my meeting?',
      answer: 'Yes, you can invite participants while scheduling a meeting. You can either enter their email addresses or share a meeting link with them. Participants will receive notifications and details about the meeting.'
    },
    {
      question: '3. Is there a limit to the number of participants I can invite?',
      answer: 'The number of participants you can invite may vary based on your account plan. Check your account settings or the pricing page for details on participant limits.'
    },
    {
      question: '4. How do I join a scheduled meeting?',
      answer: 'To join a meeting, log in to your account and navigate to the "Join Meeting" section. Enter the meeting code or click on a meeting link provided by the organizer. You will then be connected to the meeting room.'
    },
    {
      question: '5. Can I record meetings for future reference?',
      answer: 'Yes, our app offers a recording feature. During a meeting, you can choose to record it, and the recording will be available for you to access and share later.'
    },
    {
      question: '6. What devices and browsers are supported?',
      answer: 'Our app is compatible with most modern web browsers, including Chrome, Firefox, Safari, and Edge. Additionally, we offer mobile apps for Android and iOS devices for a seamless mobile experience.'
    },
    {
      question: '7. How do I manage my scheduled meetings?',
      answer: 'You can view and manage your scheduled meetings in the "My Meetings" or "Dashboard" section of your account. From there, you can edit, delete, or reschedule meetings as needed.'
    },
    {
      question: '8. Is my data and information secure?',
      answer: 'We take data security seriously. Our app uses encryption to protect your data, and we have security measures in place to prevent unauthorized access. For more details, please refer to our privacy policy.'
    },
    {
      question: '9. How can I get help or support?',
      answer: 'If you need assistance, you can visit our "Help" or "Support" section within the app. You can also reach out to our customer support team via email or chat for further assistance.'
    },
  ];

  return (
    <div className="faq-container">
      <h1>FAQ (Frequently Asked Questions)</h1>
      <ul>
        {faqData.map((item, index) => (
          <li key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;
