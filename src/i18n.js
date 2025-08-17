import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  ar: {
    translation: {
      // Navigation
      nav: {
        home: "الرئيسية",
        about: "نبذة عني",
        projects: "أعمالي",
        skills: "مهاراتي",
        contact: "تواصل معي"
      },
      // Hero Section
      hero: {
        greeting: "مرحباً، أنا",
        name: "عبد اللطيف مصطفى",
        title: "مطور ويب متكامل",
        description: "مطور ويب شغوف متخصص في Node.js و React.js. أقوم ببناء مواقع ويب وخدمات قوية وقابلة للتطوير، مع التركيز على تطوير الواجهات الأمامية والخلفية. لدي خبرة في منصات التجارة الإلكترونية واللوجستيات، وأقدم حلولاً عالية الأداء ومتمحورة حول المستخدم.",
        contactBtn: "تواصل معي",
        projectsBtn: "أعمالي",
        experience: "سنوات خبرة",
        projectsCount: "مشروع",
        scrollDown:"انتقل لأسفل",
        fullStack: "Full Stack"
      },
      // About Section
      about: {
        title: "نبذة عني",
        subtitle: "مطور ويب شغوف بالتكنولوجيا والابتكار",
        mainTitle: "مطور ويب متكامل",
        description: "أنا مطور ويب شغوف متخصص في Node.js و React.js. أقوم ببناء مواقع ويب وخدمات قوية وقابلة للتطوير، مع التركيز على تطوير الواجهات الأمامية والخلفية. لدي خبرة في منصات التجارة الإلكترونية واللوجستيات، وأقدم حلولاً عالية الأداء ومتمحورة حول المستخدم.",
        specializations: "مجالات التخصص",
        frontend: {
          title: "تطوير الواجهات الأمامية",
          description: "React.js, Next.js, HTML5, CSS3"
        },
        backend: {
          title: "تطوير الخلفية",
          description: "Node.js, Express.js, APIs"
        },
        database: {
          title: "قواعد البيانات",
          description: "MongoDB, MySQL, Firebase"
        },
        responsive: {
          title: "التصميم المتجاوب",
          description: "Mobile-First, PWA"
        }
      },
      // Projects Section
      projects: {
        title: "أعمالي",
        subtitle: "مجموعة من أفضل أعمالي",
        featured: "المشاريع المميزة",
        allProjects: "جميع المشاريع",
        viewProject: "عرض المشروع",
        categories: {
          fullstack: "FULL STACK",
          frontend: "FRONTEND"
        }
      },
      // Skills Section
      skills: {
        title: "مهاراتي التقنية",
        subtitle: "التقنيات والأدوات التي أتقنها في تطوير الويب",
        categories: {
          frontend: "تطوير الواجهات الأمامية",
          backend: "تطوير الخلفية",
          uiLibraries: "مكتبات واجهة المستخدم والأدوات",
          devTools: "أدوات التطوير"
        },
        summary: "ملخص المهارات",
        stats: {
          experience: "سنوات الخبرة",
          technologies: "التقنيات المتقنة",
          projects: "المشاريع المكتملة",
          clients: "العملاء الراضون"
        }
      },
      // Contact Section
      contact: {
        title: "تواصل معي",
        subtitle: "هل لديك مشروع في ذهنك؟ دعنا نتحدث ونحوله إلى واقع",
        info: "معلومات التواصل",
        infoDescription: "يمكنك التواصل معي من خلال أي من الطرق التالية. سأكون سعيداً للحديث معك حول مشروعك القادم.",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        location: "الموقع",
        locationValue: "القاهرة، مصر",
        socialMedia: "تابعني على وسائل التواصل",
        form: {
          title: "أرسل رسالة",
          name: "الاسم",
          namePlaceholder: "اسمك الكامل",
          email: "البريد الإلكتروني",
          emailPlaceholder: "your.email@example.com",
          message: "الرسالة",
          messagePlaceholder: "اكتب رسالتك هنا...",
          send: "إرسال الرسالة",
          sending: "جاري الإرسال...",
          success: "تم إرسال الرسالة بنجاح",
          successDescription: "شكراً لك على التواصل معي. سأقوم بالرد عليك في أقرب وقت ممكن."
        }
      },
      // Footer Section
      footer: {
        brand: "عبد اللطيف مصطفى",
        description: "مطور ويب شغوف متخصص في بناء تطبيقات ومواقع ويب حديثة باستخدام أحدث التقنيات.",
        madeWith: "صُنع بـ",
        and: "و",
        inEgypt: "في مصر",
        quickLinks: "روابط سريعة",
        contactInfo: "تواصل معي",
        followMe: "تابعني على ",
        services: "الخدمات",
        servicesList: {
          webDev: "تطوير مواقع الويب",
          appDev: "تطوير تطبيقات الويب",
          uiDesign: "تصميم واجهات المستخدم",
          consulting: "استشارات تقنية",
          maintenance: "صيانة وتطوير"
        },
        copyright: "جميع الحقوق محفوظة.",
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام"
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact"
      },
      // Hero Section
      hero: {
        greeting: "Hello, I'm",
        name: "Abdullatif Mostafa",
        title: "Full Stack Developer",
        description: "A passionate web developer specialized in Node.js and React.js. I build robust and scalable web applications and services, focusing on both frontend and backend development. I have experience in e-commerce and logistics platforms, delivering high-performance, user-centered solutions.",
        contactBtn: "Contact Me",
        projectsBtn: "My Work",
        experience: "Years Experience",
        projectsCount: "Projects",
        fullStack: "Full Stack"
      },
      // About Section
      about: {
        title: "About Me",
        subtitle: "A passionate web developer driven by technology and innovation",
        mainTitle: "Full Stack Developer",
        description: "I'm a passionate web developer specialized in Node.js and React.js. I build robust and scalable web applications and services, focusing on both frontend and backend development. I have experience in e-commerce and logistics platforms, delivering high-performance, user-centered solutions.",
        specializations: "Areas of Expertise",
        frontend: {
          title: "Frontend Development",
          description: "React.js, Next.js, HTML5, CSS3"
        },
        backend: {
          title: "Backend Development",
          description: "Node.js, Express.js, APIs"
        },
        database: {
          title: "Databases",
          description: "MongoDB, MySQL, Firebase"
        },
        responsive: {
          title: "Responsive Design",
          description: "Mobile-First, PWA"
        }
      },
      // Projects Section
      projects: {
        title: "My Work",
        subtitle: "A collection of my best work",
        featured: "Featured Projects",
        allProjects: "All Projects",
        viewProject: "View Project",
        categories: {
          fullstack: "FULL STACK",
          frontend: "FRONTEND"
        }
      },
      // Skills Section
      skills: {
        title: "Technical Skills",
        subtitle: "Technologies and tools I master in web development",
        categories: {
          frontend: "Frontend Development",
          backend: "Backend Development",
          uiLibraries: "UI Libraries & Tools",
          devTools: "Development Tools"
        },
        summary: "Skills Summary",
        stats: {
          experience: "Years Experience",
          technologies: "Technologies Mastered",
          projects: "Projects Completed",
          clients: "Happy Clients"
        }
      },
      // Contact Section
      contact: {
        title: "Contact Me",
        subtitle: "Have a project in mind? Let's talk and bring it to life",
        info: "Contact Information",
        infoDescription: "You can reach me through any of the following methods. I'd be happy to discuss your next project with you.",
        email: "Email",
        phone: "Phone",
        location: "Location",
        locationValue: "Cairo, Egypt",
        socialMedia: "Follow me on social media",
        form: {
          title: "Send Message",
          name: "Name",
          namePlaceholder: "Your full name",
          email: "Email",
          emailPlaceholder: "your.email@example.com",
          message: "Message",
          messagePlaceholder: "Write your message here...",
          send: "Send Message",
          sending: "Sending...",
          success: "Message sent successfully",
          successDescription: "Thank you for contacting me. I'll get back to you as soon as possible."
        }
      },
      // Footer Section
      footer: {
        brand: "Abdullatif Mostafa",
        description: "A passionate web developer specialized in building modern web applications and websites using the latest technologies.",
        madeWith: "Made with",
        and: "and",
        inEgypt: "in Egypt",
        quickLinks: "Quick Links",
        services: "Services",
        servicesList: {
          webDev: "Web Development",
          appDev: "Web Applications",
          uiDesign: "UI/UX Design",
          consulting: "Technical Consulting",
          maintenance: "Maintenance & Support"
        },
        contactInfo: "Contact Me",
        followMe: "Follow me:",
        copyright: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;

