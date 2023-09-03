import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Star',
  title: "Star Acedemy",
  description:
    "Hello. Star Acedamy has been established in 2003 EC. We started with a bright vision and great ambition to make a visible and tangible change by delivering quality education to those who get enrolled with us and set a high standard to schools around our area in particular and to all over the country at large.",

};

export const openSource = {
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  instagram: 'https://instagram.com/aacademystar?igshid=OGQ5ZDc2ODk2ZA==',
  facebook: 'https://www.facebook.com/profile.php?id=100095653891210&mibextid=LQQJ4d',
};

export const skillsSection: SkillsSectionType = {
  title: 'Start your future with us',
  subTitle: '',
  data: [
    {
      title: 'ስታር አካዳሚ',
      lottieAnimationFile: '/lottie/animation_lm3m057c.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ ስታር አካዳሚ አዲሱን ትውልድ በዕውቀት፣ በክህሎትና በሥነ-ምግባር የመቅረፅ ሀገራዊ ዓላማ ተቀበሎ ይህ ክቡር ዓላማም ይሳካ ዘንድ የበኩሉን ድርሻ ለመወጣት በ2003 ዓ.ም ተመሰረተ፡፡ ከነርሰሪ እስከ 3ኛ ክፍል 87 ተማሪዎችንና 17 መምህራንና ሰራተኞች ይዞ የብርሃን ጮራ የሚፈነጥቅ ችቦ በመለኮስ የመማር ማስተማርን ተግባር ጀመረ፡፡'
        ),
        emoji(
          '⚡ ይህ ት/ቤት በትምህርት ሚኒስቴር የትምህርት ፖሊሲ ተመርቶ ለለውጥና ለአመረቂ ውጤት ለመስራት ቆርጦ ተነሳ፡፡ ሥራ በጀመረ ጥቂት ዓመታት ውስጥ ወደ ጎን እየሰፋ ወደ ላይም እየጨመረ የዕድገት ጎዳናውን ተያያዘው፡፡ ብቃትና አጥጋቢ የሥራ ልምድ ያላቸውን መምህራንና ሠራተኞችን በእጁ አስገባ፡፡ በየዓመቱ የትምህርት መሳሪያዎቻችንና አስፈላጊ ግብዓቶችንም በየፈርጁ አሟልቶ የማስፋፊያ ግንባታዎችንም በየደረጃው ገነባ፡፡ የተማሪዎችም ቁጥር ከዓመት ወደ ዓመት የዕድገት እመርታ አሳየ፡፡ በ6 ዓመታት ውስጥ በአዳማ ከተማ መልካም ዝናና ጥሩ ስም ያተረፈ ት/ቤት ሆነ::'
        ),
        
      ],
      softwareSkills: []
    },
    
    
  ],
};

export const educationInfo: EducationType[] = [
  {
    schoolName: '2003ዓ.ም - 2008ዓ.ም',
    subHeader: '',
    duration: 'ስታር አካዳሚ',
    desc: 'በ2003ዓ.ም ሲጀመር 87 የነበረው የተማሪዎች ቁጥር በ2008ዓ.ም በሚያስደንቅ ሁኔታ ጨምሮ ወደ 671 አደገ፡፡ የመምህራንና ሠራተኞችም ቁጥር ከ17 ወደ 61 አድጓል፡፡ ከነርሰሪ እስከ 3ኛ ክፍል የነበሩት ክፍሎችም ደረጃው አድጎ በአሁኑ ጊዜ 10ኛ ክፍል ደረሰ፡፡ በ3 ግቢዎች የአፀደ ህፃናት፣ የአንደኛ ደረጃና የ2ኛ ደረጃ ተማሪዎች ይማራሉ፡፡ ይህ ሁኔታ ት/ቤቱ የዕድገት ፈር የሆነውን ጎዳና አጥብቆ ይዞ በትክክለኛ ዕቅድና አመራር የትምሀርት ሥራውን ቀን ከሌሊት በትጋት እያከናወነ መሆኑን በግልፅ ያሳያል፡፡',
    // grade: 'Grade A',
    // descBullets: [
      // 'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: '',
    company: 'አቶ ብርሀኑ ደምለው',
    companyLogo: '/Birhanu.jpg',
    date: '',
    desc: 'የት/ቤቱ ርዕሰ መምህርና ባለቤት መልዕከት',
  },
  {
    role: '',
    company: 'ወ/ሮ አንሻ ኢሳ',
    companyLogo: '/Ansha.jpg',
    date: '',
    desc: 'የት/ቤቱ ሥራ አስኪያጅ',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  // {
  //   role: '',
  //   company: 'SEO-SERVICES',
  //   companyLogo: '/img/icons/common/bleedAI.jpg',
  //   date: '',
  //   desc: 'SCORE HIGH RANKING SITES WITH PERFECTLY CURATED CONTENTS AND SEO CUSTOMIZED SITES',
  // },
  // {
  //   role: '',
  //   company: 'UI/UX DESIGN',
  //   companyLogo: '/img/icons/common/wapidu.jpg',
  //   date: '',
  //   desc: 'BEAUTIFULLY DESIGNED AND EFFICIENTLY STRATEGIEZED SYSTEMS AND APPLICATIONS',
  // },
];

export const projects: ProjectType[] = [
  {
    name: '',
    desc: 'Star Academy challenges and inspires students to discover their passion and realize their potential..',
  },
  {
    name: '',
    desc: 'Our teachers are highly professional, caring,  collaborative, focused, and dedicated.',
    // github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
 
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Star Academy - Star Acedamy has been established in 2003 EC. We started with a bright vision and great ambition to make a visible and tangible change by delivering quality education to those who get enrolled with us and set a high standard to schools around our area in particular and to all over the country at large.',
  description:
    'Hello. Star Acedamy has been established in 2003 EC. We started with a bright vision and great ambition to make a visible and tangible change by delivering quality education to those who get enrolled with us and set a high standard to schools around our area in particular and to all over the country at large.',
  author: 'Star Academy',
  url: 'https://star-academy.com/',
  keywords: [
  'software development company Ethiopia', 
  'custom software solutions Ethiopia', 
  'IT services Ethiopia, web development Ethiopia', 
  'mobile app development Ethiopia', 
  'software consulting services Ethiopia', 
  'software outsourcing Ethiopia', 
  'enterprise software solutions Ethiopia', 
  'software project management Ethiopia', 
  'IT solutions company Ethiopia', 
  'software engineering Ethiopia', 
  'software programming Ethiopia', 
  'Ethio software developers', 
  'technology solutions provider Ethiopia',
  ],
};
