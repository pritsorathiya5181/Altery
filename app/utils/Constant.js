// export const BASE_URL = 'http://192.168.2.19:5000/api/';
// export const BASE_URL =
//   'https://63gawwalt7.execute-api.us-east-1.amazonaws.com/prod/';
export const BASE_URL =
  'https://7fblhqlwkb.execute-api.us-east-1.amazonaws.com/production/';

// export const LOGIN_BASE_URL = 'http://192.168.2.19:5055/';
export const LOGIN_BASE_URL =
  'http://awseb-awseb-13pci1zx5dltc-948238089.us-east-1.elb.amazonaws.com/';

export const Citizen = [
  {
    key: 'inland citizen',
    text: 'Inland Citizen',
  },
  {
    key: 'oversea canadian',
    text: 'Oversea Canadian',
  },
  {
    key: 'foreigner',
    text: 'Foreigner',
  },
];

export const Gender = [
  {
    key: 'Male',
    text: 'Male',
  },
  {
    key: 'Female',
    text: 'Female',
  },
  {
    key: 'Other',
    text: 'Other',
  },
];

export const Severity = [
  {
    key: 'one',
    text: 'One',
  },
  {
    key: 'two',
    text: 'Two',
  },
  {
    key: 'three',
    text: 'Three',
  },
];

export const CATEGORY_LIST = [
  {
    key: 'agriculture',
    text: 'Agriculture',
    image: require('../../assets/sprout.png'),
  },
  {
    key: 'health',
    text: 'Health',
    image: require('../../assets/healthcare.png'),
  },
  {
    key: 'education',
    text: 'Education',
    image: require('../../assets/education.png'),
  },
  {
    key: 'environment & natural resources',
    text: 'Environment & Natural Resources',
    image: require('../../assets/planet-earth.png'),
  },
  {
    key: 'electricity',
    text: 'Electricity',
    image: require('../../assets/healthcare.png'),
  },
  {
    key: 'construction',
    text: 'Construction',
    image: require('../../assets/helmet.png'),
  },
  {
    key: 'public service',
    text: 'Public Service',
    image: require('../../assets/bus-stop.png'),
  },
  {
    key: 'cyber crime',
    text: 'Cyber Crime',
    image: require('../../assets/profile.png'),
  },
];

export const COMPLAINT_LISTING = [
  {
    complaintId: 'C01123213',
    subject: 'Regarding noice',
    category: 'Cyber crime',
    level: 'three',
    complaintDetails:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    complaintLocation: 'Halifax, NS, B3L 4P7',
    photos: [
      {
        photoId: 0,
        isPhoto: false,
      },
      {
        photoId: 1,
        isPhoto: true,
        photoUrl:
          'https://www2.gov.bc.ca/assets/gov/careers/all-employees/pay-and-benefits/propass/bc_transit_image.jpg',
      },
    ],
  },
  {
    complaintId: 'C01123214',
    subject: 'Regarding noice',
    category: 'Cyber crime',
    level: 'three',
    complaintDetails:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    complaintLocation: 'Halifax, NS, B3L 4P7',
    photos: [
      {
        photoId: 0,
        isPhoto: false,
      },
    ],
  },
  {
    complaintId: 'C01123215',
    subject: 'Regarding noice',
    category: 'Cyber crime',
    level: 'three',
    complaintDetails:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    complaintLocation: 'Halifax, NS, B3L 4P7',
    photos: [
      {
        photoId: 0,
        isPhoto: false,
      },
    ],
  },
  {
    complaintId: 'C01123216',
    subject: 'Regarding noice',
    category: 'Cyber crime',
    level: 'three',
    complaintDetails:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    complaintLocation: 'Halifax, NS, B3L 4P7',
    photos: [
      {
        photoId: 0,
        isPhoto: false,
      },
    ],
  },
  {
    complaintId: 'C01123217',
    subject: 'Regarding noice',
    category: 'Cyber crime',
    level: 'three',
    complaintDetails:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    complaintLocation: 'Halifax, NS, B3L 4P7',
    photos: [
      {
        photoId: 0,
        isPhoto: false,
      },
    ],
  },
  {
    complaintId: 'C01123218',
    subject: 'Regarding noice',
    category: 'Cyber crime',
    level: 'three',
    complaintDetails:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    complaintLocation: 'Halifax, NS, B3L 4P7',
    photos: [
      {
        photoId: 0,
        isPhoto: false,
      },
    ],
  },
];
