import { Component, OnInit } from '@angular/core';
import { FAQ } from './faq.model';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faqs: FAQ[] = [
    {
      question: 'What is Brancize?',
      answer:
        'Brancize Technology Pvt. Ltd. is an aspiring and fast-paced end to end assessment services provider, committed to provide Unique, Cost effective, Configurable and Scalable end to end solutions. We are company with Experienced Spearheads having ambitious, rich with ideas & execution capabilities.',
      show: false,
    },
    {
      question: 'What is the capacity CBT venues at Brancize?',
      answer:
        'We have a vast network of CBT venues across India, providing access to 1.5 lakh CBT seats.',
      show: false,
    },
    {
      question: 'Do you provide trained personnel for exam management?',
      answer:
        'Yes, we have over 100 experienced and trained server managers to ensure the smooth operation of exams.',
      show: false,
    },
    {
      question: 'Are your servers reliable?',
      answer:
        'Yes, We use 150+ high-spec branded laptop servers to host our exams, ensuring reliability and performance. We own and manage our servers, ensuring complete control over the exam environment and security protocols.',
      show: false,
    },
    {
      question: 'What measures are in place to verify candidate identities?',
      answer:
        'We use biometric verification systems for desk verification with instant reporting to verify the identity of each candidate during the exam.',
      show: false,
    },
    {
      question: 'What kind of support can we expect during the exam process?',
      answer:
        'Our team of 100+ experienced and trained server managers is available to provide on-site and remote support to ensure the smooth conduct of exams.',
      show: false,
    },
    {
      question: 'How do you ensure security and monitoring during exams?',
      answer:
        'We implement extensive security measures including: \n1. CCTV & Surveillance: Our venues are equipped with surveillance and monitoring systems with live streaming capabilities. \n2. Biometric Verification: Desk verification with instant reporting to ensure candidate authenticity.',
      show: false,
    },
    {
      question: 'What is the process of an exam at Brancize?',
      answer: `The typical process of conducting an exam goes like: \n1. Upload of QP \n2. Download of QP on Primary and Backup Servers \n3. Candidate Checkin with Biometric Capture & Random Seat Allocation \n4. Conduct of exam \n5. Transfer of Data Verification of Transfer`,
      show: false,
    },
    {
      question: 'What is the minimum requirement to give exam on Brancize?',
      answer:
        'The minimum requiremnt is a device connected to internet having browsers like Chrome 8+, Firefox 3.0+, Opera 10+, Internet Explorer 8+.',
      show: false,
    },
    {
      question: 'Are the data secured at Brancize?',
      answer:
        'At Brancize, we perform an incremental backup of all data daily. Our website is hosted on high-security servers operating 24/7 at a secure location. This facility maintains multiple power feeds, fiber links, dedicated generators, and battery backups to ensure maximum data security. All stored passwords are fully encrypted.',
      show: false,
    },
    {
      question: 'How do you ensure the integrity of the exam process?',
      answer:
        'We use a combination of server-based secured browsers, biometric verification, and CCTV surveillance to maintain the integrity and security of the exam process. \nIf you have any more questions, feel free to contact our support team on our e-mail info@brancize.com for further assistance.',
      show: false,
    },
  ];
  constructor() {}
  ngOnInit(): void {}
  toggleAnswer(index: number): void {
    this.faqs[index].show = !this.faqs[index].show;
  }
  getFormattedAnswer(answer: string): string {
    return answer.replace(/\n/g, '<br>');
  }
}
