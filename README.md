# My Portfolio / معرض أعمالي

A modern, responsive, and beautifully designed personal portfolio built with React and Chakra UI. The project features a clean UI with Framer Motion animations and full RTL (Right-To-Left) support for the Arabic language.

مشروع معرض أعمال شخصي (Portfolio) متطور ومبني باستخدام React و Chakra UI. يتميز المشروع بتصميم عصري ومتجاوب بالكامل مع الشاشات المتنوعة، بالإضافة إلى دعم كامل للغتين العربية والإنجليزية (وضع RTL و LTR)، وحركات تفاعلية سلسة باستخدام Framer Motion.

## 🌟 Features | المميزات

- **Bilingual & RTL Support**: Full support for English (LTR) and Arabic (RTL) using `react-i18next`.
  - **دعم اللغتين العربية والإنجليزية**: دعم كامل لاتجاه النصوص (من اليمين لليسار ومن اليسار لليمين) واعتماد تبديل الاتجاه آلياً.
- **Modern UI/UX**: Built with Chakra UI using a custom 2025 design trend theme (Mocha/Brand palettes).
  - **تصميم عصري**: واجهة مستخدم مبنية بـ Chakra UI مع ألوان مخصصة تلبي أحدث توجهات التصميم (ألوان الموكا الدافئة).
- **Smooth Animations**: Interactive scroll animations powered by Framer Motion and React Intersection Observer.
  - **حركات تفاعلية**: تأثيرات حركية سلسة وجذابة للعين عند التمرير باستخدام Framer Motion.
- **Section Navigation**: Smooth scrolling between sections (`react-scroll`).
  - **تنقل سلس**: تمرير سلس بين أقسام الصفحة المختلفة لضمان تجربة مستخدم مريحة.
- **Responsive Design**: Fully adaptable to mobile, tablet, and desktop screens.
  - **متجاوب بالكامل**: يعمل بشكل ممتاز ومناسب على الهواتف، الأجهزة اللوحية، وأجهزة سطح المكتب.

## 🚀 Technologies Used | التقنيات المستخدمة

- **Core Framework**: React 18, Create React App
- **Styling & UI**: Chakra UI, `@emotion/react`, `@emotion/styled`
- **Animations**: Framer Motion
- **Internationalization (i18n)**: `react-i18next`, `i18next`, `i18next-browser-languagedetector`
- **Icons**: React Icons, `@chakra-ui/icons`
- **Scrolling & Observers**: `react-scroll`, `react-intersection-observer`

## 📁 Project Structure | هيكل المشروع

The application is structured logically by components:
تم تقسيم هيكل المشروع بشكل رئيسي إلى المكونات التالية:

- `Header/`: Navigation bar and language switcher (شريط التنقل وزر تغيير اللغة).
- `Hero/`: Main introduction section (القسم الترحيبي الرئيسي).
- `About/`: Personal information and background (قسم "عني").
- `Skills/`: Technical and soft skills display (قسم المهارات التنقية).
- `Projects/`: Showcase of recent works and projects (معرض المشاريع البارزة).
- `Testimonials/`: Client or colleague reviews (آراء وتقييمات العملاء أو الزملاء).
- `Contact/`: Contact form and links (نموذج التواصل السريع).
- `Footer/`: Bottom section with social links (تذييل الصفحة مع روابط السوشيال ميديا).

## 🛠️ Getting Started | البداية والتشغيل

### Prerequisites | المتطلبات المسبقة
- Node.js installed on your machine.
- تأكد من تثبيت بيئة النود (Node.js) على جهازك.

### Installation & Run | التثبيت والتشغيل

1. **Clone the repository** (or download the source code):
   **(نسخ مستودع المشروع):**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate into the project directory**:
   **الدخول إلى مجلد المشروع:**
   ```bash
   cd Portofolio
   ```

3. **Install dependencies**:
   **تثبيت الحزم والمكتبات المعتمدة:**
   ```bash
   npm install
   ```

4. **Start the development server**:
   **تشغيل خادم التطوير للاختبار:**
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
   افتح الرابط في متصفحك وسيعمل الموقع.

## 📜 Available Scripts | الأوامر المتاحة في المشروع

In the project directory, you can run:
داخل مسار المشروع يمكنك تنفيذ الأوامر التالية:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
