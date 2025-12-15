import { NavItem, ServiceItem, StatItem, ProjectItem, ContactInfo } from './types';
import { Ruler, Hammer, PaintBucket, Briefcase, Armchair } from 'lucide-react';

export const COMPANY_NAME = "سيرفوت";
export const COMPANY_NAME_EN = "SERVOT";
export const LOGO_URL = "https://i.postimg.cc/hPgCvV8y/Servot.webp";

export const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية', path: '#home' },
  { label: 'عن سيرفوت', path: '#about' },
  { label: 'خدماتنا', path: '#services' },
  { label: 'أعمالنا', path: '#projects' },
  { label: 'تواصل معنا', path: '#contact' },
];

export const CONTACT_DETAILS: ContactInfo = {
  phone: '+201277795959',
  whatsapp: '+201277795959',
  email: 'info@servot.co',
  address: 'حدائق اكتوبر - الجيزة',
  mapUrl: 'https://maps.app.goo.gl/v59Scdksfb5t2rYa8',
  instagram: 'https://www.instagram.com/servotdesign',
  tiktok: 'https://www.tiktok.com/@servot.design'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'interior',
    title: 'التصميم الداخلي',
    description: 'صياغة مساحات وظيفية بجماليات مدروسة تعكس هوية المكان وتخدم مستخدميه.',
    details: [
      'تخطيط المساحات الداخلية (Space Planning)',
      'توزيع الإضاءة والمخططات التنفيذية',
      'اختيار المواد والتشطيبات الفاخرة',
      'تصميمات ثلاثية الأبعاد (3D Visualization)'
    ],
    icon: PaintBucket,
    image: 'https://i.pinimg.com/1200x/a4/a0/ed/a4a0ed944258734e6c6c6ddfe30012d4.jpg'
  },
  {
    id: 'exterior',
    title: 'التصميم المعماري والخارجي',
    description: 'حلول معمارية توازن بين الإبداع البصري وقوة البناء، لواجهات متميزة تدوم.',
    details: [
      'تصميم الواجهات الحديثة والكلاسيكية',
      'تنسيق الموقع العام (Landscape)',
      'دراسات الكتل والنسب المعمارية',
      'مخططات معمارية متكاملة'
    ],
    icon: Ruler,
    image: 'https://i.pinimg.com/736x/60/5b/2c/605b2c10836b0f5b8aecf1d55e232269.jpg'
  },
  {
    id: 'fitout',
    title: 'التشطيبات المتكاملة',
    description: 'تنفيذ دقيق لكافة أعمال التشطيبات والديكور وفق أعلى المعايير الهندسية.',
    details: [
      'أعمال التأسيس (كهرباء، سباكة، تكييف)',
      'تركيب الأرضيات والأسقف المعلقة',
      'أعمال الدهانات والتكسيات الجدارية',
      'تسليم مفتاح بجودة قياسية'
    ],
    icon: Hammer,
    image: 'https://i.pinimg.com/736x/e7/ed/61/e7ed61ba7c337e2eea720bc49164a835.jpg'
  },
  {
    id: 'furniture',
    title: 'تصميم الأثاث المخصص',
    description: 'تصنيع وحدات أثاث حصرية تتناغم مع الفراغ وتلبي الاحتياجات الخاصة للمشروع.',
    details: [
      'تصميم وتصنيع المطابخ ووحدات الملابس',
      'أثاث مكتبي وفندقي حسب الطلب',
      'استخدام أجود أنواع الأخشاب والخامات',
      'دمج المعادن والزجاج والأقمشة ببراعة'
    ],
    icon: Armchair,
    image: 'https://i.pinimg.com/736x/27/54/ec/2754ec6324ff09f9185f34b8ade75a36.jpg'
  },
  {
    id: 'management',
    title: 'إدارة وتنفيذ المشاريع',
    description: 'إشراف هندسي صارم لضمان سير العمل وفق الجدول الزمني والميزانية المحددة.',
    details: [
      'إعداد الجداول الزمنية وإدارة الموارد',
      'مراقبة الجودة وضبط التكاليف',
      'التنسيق بين كافة فرق العمل بالموقع',
      'تقارير دورية لتقدم الأعمال'
    ],
    icon: Briefcase,
    image: 'https://i.pinimg.com/736x/b4/9d/4b/b49d4b2eac15400800f39d63e175aff8.jpg'
  }
];

export const STATS: StatItem[] = [
  { value: '2020', label: 'بداية رحلتنا' },
  { value: '+150', label: 'مشروع ناجح' },
  { value: '100%', label: 'رضا العملاء' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    image: 'https://i.postimg.cc/wj0zB6Sn/003.webp'
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/pLqvd2wb/002.webp'
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/HkBmLpqC/001-(2).webp'
  },
];