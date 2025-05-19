export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  price: number;
  duration: string;
  format: string;
  image: string;
  category: 'armed' | 'unarmed' | 'specialized' | 'renewal';
  featured?: boolean;
  certification?: boolean;
  rating: number;
  reviews: number;
  students: number;
  videos: number;
  learningObjectives?: string[];
  requirements?: string[];
  curriculum?: {
    title: string;
    duration: string;
    lessons: {
      title: string;
      type: 'video' | 'quiz' | 'reading';
      duration: string;
    }[];
  }[];
}

export const courses: Course[] = [
  {
    id: 'g-license',
    title: 'G License Security Officer Training',
    description: 'Complete training for Florida Class G Armed Security Officer License. Includes classroom and range instruction.',
    longDescription: 'This comprehensive course prepares you for the Florida Class G Armed Security Officer License, allowing you to work as an armed security officer in the state. The curriculum covers all state requirements including legal aspects, firearm safety, marksmanship, and use of force. You\'ll receive hands-on training at our state-of-the-art firing range under the supervision of certified instructors with law enforcement backgrounds.',
    price: 199.99,
    duration: '28 hours',
    format: 'In-person',
    image: 'https://images.pexels.com/photos/5699377/pexels-photo-5699377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'armed',
    featured: true,
    certification: true,
    rating: 4.8,
    reviews: 127,
    students: 562,
    videos: 4,
    learningObjectives: [
      'Understand legal aspects of armed security work',
      'Master firearm safety procedures and protocols',
      'Develop proficiency in handgun marksmanship',
      'Learn proper use of force continuum',
      'Understand tactical positioning and threat assessment',
      'Complete state-required qualification course',
      'Prepare for the state licensing exam'
    ],
    requirements: [
      'Must be at least 21 years of age',
      'Must already possess a Class D Security License or apply concurrently',
      'No felony convictions',
      'Legally able to possess a firearm',
      'Valid identification'
    ],
    curriculum: [
      {
        title: 'Module 1: Legal Aspects of Armed Security',
        duration: '4 hours',
        lessons: [
          { title: 'Introduction to Armed Security', type: 'video', duration: '45 min' },
          { title: 'Florida Laws Governing Armed Security', type: 'video', duration: '60 min' },
          { title: 'Legal Authority and Limitations', type: 'video', duration: '60 min' },
          { title: 'Legal Assessment', type: 'quiz', duration: '30 min' }
        ]
      },
      {
        title: 'Module 2: Firearm Safety and Handling',
        duration: '6 hours',
        lessons: [
          { title: 'Basic Firearm Safety Rules', type: 'video', duration: '45 min' },
          { title: 'Handgun Mechanics and Operation', type: 'video', duration: '60 min' },
          { title: 'Ammunition Knowledge', type: 'reading', duration: '30 min' },
          { title: 'Practical Handling Exercises', type: 'video', duration: '120 min' },
          { title: 'Firearm Safety Assessment', type: 'quiz', duration: '30 min' }
        ]
      },
      {
        title: 'Module 3: Range Training and Qualification',
        duration: '12 hours',
        lessons: [
          { title: 'Stance and Grip Fundamentals', type: 'video', duration: '60 min' },
          { title: 'Sight Alignment and Trigger Control', type: 'video', duration: '60 min' },
          { title: 'Practice Firing Sessions', type: 'video', duration: '240 min' },
          { title: 'Tactical Reloading Techniques', type: 'video', duration: '60 min' },
          { title: 'Malfunction Clearing', type: 'video', duration: '60 min' },
          { title: 'Qualification Course Practice', type: 'video', duration: '120 min' },
          { title: 'Final Qualification Course', type: 'quiz', duration: '60 min' }
        ]
      },
      {
        title: 'Module 4: Use of Force and Judgmental Training',
        duration: '6 hours',
        lessons: [
          { title: 'Use of Force Continuum', type: 'video', duration: '60 min' },
          { title: 'Threat Assessment', type: 'video', duration: '60 min' },
          { title: 'Decision-Making Scenarios', type: 'video', duration: '120 min' },
          { title: 'Post-Shooting Procedures', type: 'reading', duration: '30 min' },
          { title: 'Final Comprehensive Exam', type: 'quiz', duration: '60 min' }
        ]
      }
    ]
  },
  {
    id: 'd-license',
    title: 'D License Security Officer Training',
    description: '40-hour course for Florida Class D Security Officer License. Learn essential security procedures and regulations.',
    longDescription: 'This 40-hour course fulfills the training requirements for the Florida Class D Security Officer License. The curriculum covers a comprehensive range of topics including legal issues, patrol techniques, report writing, emergency procedures, and interpersonal communication. Upon successful completion, you\'ll be prepared to apply for your Class D License and begin your career in the security industry.',
    price: 149.99,
    duration: '40 hours',
    format: 'Hybrid (Online & In-person)',
    image: 'https://images.pexels.com/photos/8346914/pexels-photo-8346914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'unarmed',
    certification: true,
    rating: 4.6,
    reviews: 215,
    students: 834,
    videos: 12,
    learningObjectives: [
      'Understand the legal scope and limitations of security officers',
      'Learn proper patrol techniques and observation skills',
      'Develop professional report writing abilities',
      'Master emergency response procedures',
      'Understand access control principles',
      'Develop effective communication and conflict resolution skills',
      'Prepare for the state licensing exam'
    ],
    requirements: [
      'Must be at least 18 years of age',
      'No felony convictions',
      'Valid identification',
      'Basic English reading and writing skills'
    ],
    curriculum: [
      {
        title: 'Module 1: Introduction to Security',
        duration: '8 hours',
        lessons: [
          { title: 'History and Role of Private Security', type: 'video', duration: '60 min' },
          { title: 'Legal Authorities and Restrictions', type: 'video', duration: '90 min' },
          { title: 'Professional Ethics', type: 'reading', duration: '45 min' },
          { title: 'Types of Security Services', type: 'video', duration: '60 min' },
          { title: 'Security Officer Safety', type: 'video', duration: '90 min' },
          { title: 'Module Assessment', type: 'quiz', duration: '45 min' }
        ]
      },
      {
        title: 'Module 2: Security Operations',
        duration: '12 hours',
        lessons: [
          { title: 'Patrol Principles and Techniques', type: 'video', duration: '90 min' },
          { title: 'Observation Skills and Reporting', type: 'video', duration: '90 min' },
          { title: 'Access Control Methods', type: 'video', duration: '90 min' },
          { title: 'Traffic Control and Crowd Management', type: 'video', duration: '90 min' },
          { title: 'Report Writing', type: 'video', duration: '120 min' },
          { title: 'Field Notes and Documentation', type: 'reading', duration: '60 min' },
          { title: 'Operations Assessment', type: 'quiz', duration: '60 min' }
        ]
      },
      {
        title: 'Module 3: Emergency Response',
        duration: '10 hours',
        lessons: [
          { title: 'Emergency Planning and Procedures', type: 'video', duration: '90 min' },
          { title: 'Fire Safety and Prevention', type: 'video', duration: '90 min' },
          { title: 'Medical Emergencies', type: 'video', duration: '90 min' },
          { title: 'Natural Disasters', type: 'reading', duration: '60 min' },
          { title: 'Bombs and Terrorist Threats', type: 'video', duration: '90 min' },
          { title: 'Hazardous Materials', type: 'video', duration: '90 min' },
          { title: 'Emergency Response Assessment', type: 'quiz', duration: '60 min' }
        ]
      },
      {
        title: 'Module 4: Communication and Conflict Resolution',
        duration: '10 hours',
        lessons: [
          { title: 'Professional Communication', type: 'video', duration: '90 min' },
          { title: 'Conflict Resolution and De-escalation', type: 'video', duration: '120 min' },
          { title: 'Dealing with Difficult People', type: 'video', duration: '90 min' },
          { title: 'Radio and Electronic Communications', type: 'video', duration: '60 min' },
          { title: 'Courtroom Testimony and Evidence', type: 'reading', duration: '60 min' },
          { title: 'Public Relations', type: 'video', duration: '60 min' },
          { title: 'Final Comprehensive Exam', type: 'quiz', duration: '90 min' }
        ]
      }
    ]
  },
  {
    id: 'georgia-security',
    title: 'Georgia Security Officer Training',
    description: 'Comprehensive training for Georgia security officers. Meets all state requirements for certification.',
    price: 179.99,
    duration: '24 hours',
    format: 'Online & In-person',
    image: 'https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'unarmed',
    certification: true,
    rating: 4.7,
    reviews: 89,
    students: 346,
    videos: 8
  },
  {
    id: 'executive-protection',
    title: 'Executive Protection Specialist Training',
    description: 'Advanced training for security professionals seeking to specialize in executive and VIP protection.',
    price: 499.99,
    duration: '5 days',
    format: 'In-person',
    image: 'https://images.pexels.com/photos/6130973/pexels-photo-6130973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'specialized',
    certification: true,
    rating: 4.9,
    reviews: 42,
    students: 128,
    videos: 6
  },
  {
    id: 'security-supervisor',
    title: 'Security Supervisor Training',
    description: 'Develop the skills needed to effectively lead security teams and manage security operations.',
    price: 249.99,
    duration: '3 days',
    format: 'Online & In-person',
    image: 'https://images.pexels.com/photos/8850898/pexels-photo-8850898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'specialized',
    certification: true,
    rating: 4.5,
    reviews: 65,
    students: 211,
    videos: 10
  },
  {
    id: 'g-license-renewal',
    title: 'G License Renewal Training',
    description: 'Fulfill your G License renewal requirements with this 4-hour refresher and requalification course.',
    price: 99.99,
    duration: '4 hours',
    format: 'In-person',
    image: 'https://images.pexels.com/photos/6150472/pexels-photo-6150472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'renewal',
    certification: true,
    rating: 4.6,
    reviews: 118,
    students: 432,
    videos: 2
  },
  {
    id: 'd-license-renewal',
    title: 'D License Renewal Training',
    description: 'Complete your Florida Class D Security Officer License renewal with this state-approved course.',
    price: 79.99,
    duration: '6 hours',
    format: 'Online',
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'renewal',
    certification: true,
    rating: 4.4,
    reviews: 156,
    students: 574,
    videos: 6
  },
  {
    id: 'cctv-operator',
    title: 'CCTV Monitoring and Surveillance',
    description: 'Learn to effectively operate CCTV systems, monitor surveillance feeds, and document security incidents.',
    price: 149.99,
    duration: '16 hours',
    format: 'Online & In-person',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'specialized',
    certification: true,
    rating: 4.3,
    reviews: 74,
    students: 292,
    videos: 8
  }
];