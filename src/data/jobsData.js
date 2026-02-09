export const jobsData = [
  {
    id: 1,
    title: 'Frontend Developer (HTML/CSS/React)',
    company: 'iSquare Technologies',
    location: 'Ahmedabad, Gujarat',
    salary: '₹2,50,000 - ₹6,00,000 a year',
    type: 'Full-time',
    posted: '2 days ago',
    easyApply: true,
    description: 'We are looking for a skilled Frontend Developer who can create pixel-perfect responsive websites.',
    requirements: [
      '2+ years of experience in React',
      'Strong knowledge of HTML5, CSS3',
      'Experience with responsive design',
      'Good understanding of JavaScript ES6+'
    ],
    benefits: [
      'Health Insurance',
      'Flexible working hours',
      'Work from home options',
      'Performance bonus'
    ]
  },
  {
    id: 2,
    title: 'Front End Developer',
    company: 'Ray Secure Innovation Pvt. Ltd.',
    location: 'Prahlad Nagar, Ahmedabad',
    salary: '₹2,00,000 - ₹4,00,000 a year',
    type: 'Full-time',
    posted: '1 week ago',
    easyApply: true,
    description: 'Join our team to build innovative web applications.',
    requirements: [
      '1-3 years experience',
      'React.js knowledge',
      'Good communication skills'
    ],
    benefits: [
      'Paid sick time',
      'Provident Fund',
      'Flexible schedule'
    ]
  },
  {
    id: 3,
    title: 'HTML Developer',
    company: 'Sprybit Softlabs',
    location: 'Ahmedabad, Gujarat',
    salary: '₹25,000 - ₹35,000 a month',
    type: 'Full-time',
    posted: '3 days ago',
    easyApply: true,
    description: 'Looking for HTML developer to convert designs into responsive web pages.',
    requirements: [
      'HTML5, CSS3 expertise',
      'Bootstrap knowledge',
      'Attention to detail'
    ],
    benefits: [
      'Learning opportunities',
      'Friendly work environment'
    ]
  },
  {
    id: 4,
    title: 'React Developer',
    company: 'Kiran Infotech',
    location: 'Ahmedabad, Gujarat',
    salary: '₹10,00,000 - ₹12,50,000 a year',
    type: 'Full-time',
    posted: '1 day ago',
    easyApply: true,
    description: 'Senior React developer needed for US-based projects.',
    requirements: [
      '4+ years React experience',
      'Redux, Context API knowledge',
      'US shift availability'
    ],
    benefits: [
      'High salary',
      'International exposure',
      'Night shift allowance'
    ]
  },
  {
    id: 5,
    title: 'Senior Frontend Engineer',
    company: 'Tech Solutions India',
    location: 'Ahmedabad, Gujarat',
    salary: '₹8,00,000 - ₹15,00,000 a year',
    type: 'Full-time',
    posted: '5 days ago',
    easyApply: false,
    description: 'Lead frontend development for enterprise applications.',
    requirements: [
      '5+ years experience',
      'Team leadership skills',
      'Architecture design experience'
    ],
    benefits: [
      'Leadership role',
      'Stock options',
      'Premium health insurance'
    ]
  },
];

export const filtersData = [
  { label: 'Pay', active: false },
  { label: 'Within 25 km', active: true },
  { label: 'Job type', active: false },
  { label: 'Remote', active: false },
  { label: "Jobs you haven't seen", active: true, removable: true },
];