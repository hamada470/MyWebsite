'use client'
import Navbar from '@/components/Navbar'
import Nav from '../components/Nav'
import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <main className="min-h-screen bg-white text-gray-800 dir-rtl">
      <Navbar />
      <Nav />
      
      {/* القسم الرئيسي */}
      <section id="home" className="py-12 px-4 text-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          تفصيل مغاسل رخام وطاولات رخام بالرياض
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          نقدم أحدث تصاميم مغاسل الرخام المودرن والكلاسيك، تفصيل طاولات طعام ومجالس، وتركيب جميع أنواع الرخام بأعلى دقة وأفضل الأسعار.
        </p>
        <div className="my-4">
          <a 
            href="tel:+966569962482" 
            className="inline-block bg-yellow-400 text-black font-bold text-xl px-6 py-3 rounded-lg shadow-md"
          >
            0569962482
          </a>
        </div>
      </section>

      {/* قسم خدماتنا */}
      <section id="services" className="py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">خدماتنا في الرخام</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <h3 className="font-bold text-xl mb-2">تفصيل مغاسل رخام</h3>
            <p className="text-sm text-gray-600">تصميم وتفصيل مغاسل رخام طبيعي وصناعي للمجالس والحمامات بأحجام وأشكال متعددة.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <h3 className="font-bold text-xl mb-2">طاولات رخام</h3>
            <p className="text-sm text-gray-600">تفصيل طاولات طعام وطاولات استقبال ومجالس بالرخام الفاخر حسب الطلب.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <h3 className="font-bold text-xl mb-2">تركيب وصيانة</h3>
            <p className="text-sm text-gray-600">تركيب أرضيات وواجهات رخام، جلي وتلميع وتحديث كافة أعمال الرخام بالرياض.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
    هل تبحث عن <strong>ملعم سيراميك بالرياض </strong> بارع ومتخصص في عمله ، اذا انت في المكان الصيحيح، بخبرة اكثر من 10 سنوات في مجال <strong>تركيب السيراميك</strong> و <strong>تركيب الرخام </strong> و <strong>تركيب البورسلين بالرياض</strong> نستطيع ان نضمن جودة في العمل .. دقة في التسليم .. امانة في التعامل وهذه اهم الاشياء التي تنال رضا العميل و تكسب وده؛ حيث ان لدينا نخبة من افضل <strong>معلم سيراميك  في الرياض</strong> ويوجد لدينا <strong>امهر فنيين تركيب رخام وبلاط</strong> كذلك يوجد لدينا <strong>معلم تركيب بورسلين</strong> باعلي جودة واسعار تناسب الجميع.
    نقدم جميع خدمات تركيب البلاط و السيراميك و الخلع بالاعتماد علي احدث الاجهزة والتفنيات التي تزيد من سرعة العمل ، وتجنب حدوث الاخطاء الشائعة او التلفيات الغير متوقعة ، تواصل معنا الان من جميع انحاء الرياض نصلك حيث ما كنت.
  </p> 
    <mark dir='ltr' className='block mt-16 mx-auto text-center text-3xl p-2'> 0533108772 </mark>
</RevalCard>
<RevalCard className="card md:w-[75%] lg:w-[50%] h-full w-full" direction={-50}>
<DivTransitionOnScroll>
<div className='flex-1 bg-image1 w-full h-[100%] min-h-[400px] bg-cover rounded-lg ' >
</div>
</DivTransitionOnScroll>
</RevalCard>
    </section>
    <section id="services" className="w-screen mb-32 md:h-screen  flex flex-col justify-around">
      <h3 className='relative text-center text-5xl font-bold self-center
       mb-8'>الخدمات</h3>
   
    <div className='flex flex-col md:flex-row md:flex-wrap  md:justify-around h-max items-center '>
    {[
      {
      title: 'سيراميك',
        img: '/image2.jfif',
        content: <ul className='flex flex-col justify-around items-stretch
        h-full mt-4 text-right text-xl'>
        <li><h4>تركيب سيراميك باركيه</h4></li>
        <li><h4>تركيب سيراميك ارضيات</h4></li>
        <li><h4>تركيب سيراميك حمامات و مطابخ</h4></li>
        <li><h4>تركيب سيراميك و مكادي</h4></li>
        <li><h4>تركيب سيراميك مسابح</h4></li>
        <li><h4>تركيب سيراميك مداخل و سلالم</h4></li>
        </ul>
      },
      {
      title: 'رخام',
        img: '/image2.jfif',
        content: <ul className='flex flex-col justify-around items-stretch
        h-full mt-4 text-right text-xl'>
        <li><h4>تركيب رخام</h4></li>
        <li><h4>تركيب رخام ارضيات</h4></li>
        <li><h4>تركيب رخام واجهات</h4></li>
        <li><h4>تركيب رخام فلل وقصور</h4></li>
        <li><h4>تركيب رخام سلالم</h4></li>
        <li><h4>تركيب رخام صناعي</h4></li>
        <li><h4>تركيب رخام شركات</h4></li>
        <li><h4>تركيب الرخام بجميع انواعه</h4></li>
        </ul>
      },
      {
      title: 'بورسلين',
        img: '/img2.jpg',
        content: <ul className='flex flex-col justify-around items-stretch
        h-full mt-4 text-right text-xl'>
        <li><h4>تركيب بورسلين بجميع انواعه</h4></li>
        <li><h4>تركيب بورسلين فوق البلاط او السيراميك</h4></li>
        <li><h4>خلع و إزالة البروسلين القديم و استبداله</h4></li>
        </ul>
      },
      {
      title: 'بلاط',
        img: '/img3.jpg',
        content: <ul className='flex flex-col justify-around items-stretch
        h-full mt-4 text-right text-xl'>
        <li><h4>تركيب بلاط بجميع انواعه</h4></li>
        <li><h4>خلع و استبدال البلاط</h4></li>
        <li><h4>تركيب سيراميك فوق البلاط</h4></li>
        <li><h4>تركيب بورسلين فوق البلاط</h4></li>
        <li><h4>تركيب بلاط فوق البورسلين</h4></li>
        </ul>
      },
    ].map((element, i) =><div key={i} className=' w-[300px] mb-8'> 
    <HoverFlipCard image={element.img} content={element.content}
    title={element.title}/>
  </div>)}
    </div>
    </section>
    
    <section>
    {DescriptionWithTitleArr.map(el => <DescriptionWithTitle title={el.title}
    description={el.description}/>)}
    </section>
    </main>
    </IsDrawerOpenProvider>
  );
}


 function ShowDivOpacity({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: .25  }}
      className='w-full self-center flex flex-row justify-center'
    >
      {children}
    </motion.div>
  );
}


function DivShowOnScroll({children}:{ children: ReactNode } )
 {
  const { scrollYProgress } = useScroll()
const scale = useTransform(scrollYProgress, [0, 0], [1, 1]);
  
return (
  <motion.div
    style={{ scale, width: '100%', height: '100%' }}
  >
    <motion.div
      style={{
        scaleY: scrollYProgress, width: '100%', height: '100%' }}>
        {children}
      </motion.div>
    
  </motion.div>
)}

function DivTransitionOnScroll({children}:{children: ReactNode}){
  // const { scrollYProgress, scrollY } = useScroll()

  const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    })
    const opacity = useTransform(
        scrollYProgress,
        [0, .5, 1],
        [0, 2, 101],
    )

  return <motion.div
  
  transition={{
    ease: "linear",
    duration: 2,
    x: { duration: 1 }
  }}
  style={{opacity}}
  className='w-[100%] h-full'
  >{children}</motion.div>
} 

function RevalCard({ children , direction, className }: {children: ReactNode, direction: number, className: string}) {
  return (
    <motion.div
      className= {className}
      initial={{
        opacity: 0,
        // if odd index card,slide from right 50 instead of left -50
        x: direction
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 2 // Animation duration
        }
      }}
      
    >
      {children}
    </motion.div>
  );
}
 const FlipCard = ( ) => {
  const [flip, setFlip] = useState(true);
  const flipCardRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
   flipCardRef && flipCardRef.current &&
   flipCardRef.current.addEventListener('mouseover', () => setFlip(!flip));
  },[flipCardRef])

    return <div className='flex justify-center items-center' >
      <motion.div
    style={{ width: "20rem", height: "10rem", background: 'black'}}
    transition={{ duration: 0.7 }}
    animate={{ rotateY: flip ? 0 : 180 }}
    
  >
    <motion.div
      transition={{ duration: 0.7 }}
      animate={{ rotateY: flip ? 0 : 180 }}
      style={{width: '100%', height:'100%'}}
    >
      <motion.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flip ? 0 : 180 }}
        style={{ display: flip ? "block" : "none", backfaceVisibility: 'hidden' }}
        className=''
        ref={flipCardRef}
      >
        Front Side
      </motion.div>
      <motion.div
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flip ? 180 : 0 }}
        style={{ display: flip ? "none" : "block", backfaceVisibility: 'hidden' }}
        transition={{ duration: 0.7 }}
        
      >
        Back Side
      </motion.div>
      <button onClick={() => setFlip((prevState) => !prevState)}>
        Click me
      </button>
    </motion.div>
  </motion.div>
  </div>
 }
 
 const HoverFlipCard = ({image, content, title}:{image: string, content: ReactNode, title: string}) => {
  return <div
        className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective" >
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full
          duration-1000 z-5"
        >
       <div after-dynamic-value={title} className={`absolute rounded-xl backface-hidden border-2 w-full h-full
       after:content-[attr(after-dynamic-value)] after:w-full after:h-full
       after:bg-black/40
       after:absolute after:inset-0 after:z-10 after:text-white
       after:rounded-xl after:text-4xl after:flex after:items-center after:font-bold after:justify-center hover:cursor-pointer`}>
          <Image  className='rounded-xl w-full h-full' src={image} alt=''
          width={600} height={600} />
          </div>
          <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full
            bg-gray-100 overflow-hidden rounded-xl"
          >
            <div
              className="text-center flex flex-col items-center justify-center
              h-full text-gray-800 px-2 pb-24 rounded-xl"
            >
{content}
            </div>
          </div>
        </div>
      </div>
 }
 
 const DescriptionWithTitle = ({title, description}:{title: string, description: ReactNode}) =>{
  return <div className='p-10 sm:p-20 text-black'>
   <h2 className='bg-amber-300 p-6 mb-10 text-2xl'><strong>{title}</strong></h2>
   {description}
  </div>
 }
 
 const DescriptionWithTitleArr= [
  {
   title:'تركيب سيراميك و رخام',
   description:<p className='text-xl leading-[3rem]'><strong>يعتبر تركيب السيراميك </strong>والرخام عملية دقيقة تتطلب تخطيطًا دقيقًا ودقة واهتمامًا بالتفاصيل. سواء كنت تتطلع إلى تجديد باكسبلاش مطبخك ببلاط السيراميك الأنيق أو إضافة لمسة من الفخامة إلى حمامك بأرضية رخامية أنيقة، فإن فهم الخطوات المتضمنة في عملية التثبيت أمر بالغ الأهمية لتحقيق نتيجة ناجحة. في هذا المقال، سوف نتعمق في تقنيات التحضير والتركيب والاعتبارات الرئيسية لكل من تركيبات بلاط السيراميك والرخام.
قبل الشروع في مشروع <strong> تركيب بلاط السيراميك أو الرخام،</strong> من الضروري تقييم المساحة
التي سيتم تركيب البلاط فيها. يتضمن ذلك قياس المساحة بدقة وفحص السطح للتأكد من
ملاءمته لتركيب البلاط. يعد جمع الأدوات والمواد اللازمة خطوة حاسمة أخرى في عملية
الإعداد. بالنسبة لتركيب بلاط السيراميك، تعد الأدوات مثل المالج والفواصل وقاطع
البلاط ضرورية، بينما قد يتطلب تركيب بلاط الرخام مجموعة مختلفة من الأدوات مثل
المالج المسنن والمنشار الرطب.</p>},
  {
   title: 'فن تركيب السيراميك والرخام والبورسلين',
   description: <p className='text-xl leading-[3rem]'>
   في عالم التصميم الداخلي والبناء، يحتل <strong>تركيب السيراميك و</strong> الرخام والبورسلين
   مكانًا مهمًا.  لا تعمل هذه المواد على تعزيز المظهر الجمالي للمساحة فحسب، بل
   تساهم أيضًا في متانتها ووظيفتها.  وباعتبارنا شركة متخصصة مكرسة لتركيب هذه
   العناصر، فإننا ندرك أهمية الدقة والخبرة والاهتمام بالتفاصيل في كل مشروع نقوم
   به.</p>
  },
  {
   title: 'تركيب السيراميك',
   description:<div><p className='text-xl leading-[3rem]'><strong>يوفر السيراميك </strong> ، بتعدد استخداماته ومجموعة واسعة من الألوان
   والأنماط، إمكانيات لا حصر لها لإنشاء مساحات فريدة وشخصية.  من التصاميم
   العصرية الأنيقة إلى الكلاسيكيات الخالدة، يمكن لبلاط السيراميك تحويل أي غرفة
   إلى عمل فني.  تم تدريب فريقنا من الحرفيين المهرة على التعامل مع تركيب
   السيراميك بأقصى قدر من العناية والدقة، مما يضمن الحصول على لمسة نهائية خالية
   من العيوب في كل مرة.
   </p>
   <h2 className='bg-amber-400 p-6 my-10 text-2xl'><strong>تركيب الرخام</strong></h2>
   <p className='text-xl leading-[3rem]'>يضيف الرخام بمظهره الفاخر وجماله الطبيعي لمسة من الأناقة إلى أي مكان.
   سواء تم استخدامه للأرضيات أو أسطح العمل أو الجدران، فإن الرخام ينضح بالرقي
   والأناقة.  يتمتع خبراؤنا بالمعرفة والخبرة اللازمة للعمل مع هذه المواد
   الدقيقة، مما يضمن تركيب كل قطعة بأعلى مستوى من الحرفية والاهتمام
   بالتفاصيل.</p>
   <h2 className='bg-amber-400 p-6 my-10 text-2xl'><strong>تركيب البروسلين</strong></h2>
   <p className='text-xl leading-[3rem]'>
   يعتبر البورسلين، المعروف بقوته ومتانته، خيارًا شائعًا للمناطق ذات الحركة
   المرورية العالية مثل المطابخ والحمامات.  بفضل متطلبات الصيانة المنخفضة
   ومقاومته للبقع والخدوش، يعتبر البورسلين عمليًا وجميلًا.  يتمتع فريقنا بخبرة
   كبيرة في تعقيدات تركيب البورسلين، مما يضمن نتيجة طويلة الأمد وخالية من
   العيوب.</p>
   </div>
  },
  {
   title: 'مهارات معلم تركيب السيراميك',
   description:<p className='text-xl leading-[3rem]'>
   تعتبر مهارات<strong> فني تركيب السيراميك</strong> أحد الجوانب الأساسية في صناعة البناء والديكور. فهذا المجال يتطلب دراية عميقة بالمواد والأدوات المستخدمة، بالإضافة إلى خبرة ودقة في التفاصيل.

عنصر أساسي في تركيب السيراميك هو اختيار الزخارف والألوان المناسبة للمشروع. يجب أن يكون الفني على دراية بأحدث صيحات التصميم وقادر على تطبيقها بدقة.

لا غرو أن مهارات تركيب السيراميك تشمل أيضًا قدرة على استخدام الأدوات بفعالية وإتقان، مثل قطاعات القطع والملاط. كما يجب على الفنان أن يكون حذرًا لتجنب التشققات والانحرافات في التثبيت.

فضلاً على ذلك، يجب على من يعمل في هذا المجال أن يكوِّن نظرية قائمة على معرفة
دقيقة لخصائص المواد المستخدمة، من حيث قابلية التشغيل والتحمُّل.</p>
  },
  {
   title:'مهارات معلم تركيب الرخام',
   description: <p className='text-xl leading-[3rem]'>تعد مهارات <strong> معلم تركيب الرخام</strong> أساسية لضمان جودة العمل وجمال التشطيب. يجب على المعلم أن يتقن عدة مهارات من بينها قطع الرخام بشكل دقيق وتركيبه بشكل محكم، كما يجب عليه أن يكون لديه خبرة في استخدام الأدوات والمعدات اللازمة.

فضلاً عن ذلك، يجب على المعلم أن يكون حذراً ودقيقاً في عمله حتى لا تحدث أية
تشوهات في سطح الرخام. كذلك، يجب على المعلم أن يكون قادراً على فهم التصاميم
والخطط الفنية لضمان تحقيق الشكل المطلوب.</p>
  },
  {
   title: 'معلم تركيب بلاط ماهر',
   description: <p className='text-xl leading-[3rem]'><strong>مهارات تركيب البلاط </strong>هي مهارة أساسية يجب أن
   يتقنها كل معلم في هذا المجال. فالتركيب الصحيح للبلاط يعتبر جزءاً هاماً من
   عملية بناء المنازل والمباني، وقد يؤثر بشكل كبير على جودة العمل النهائية.<br />

أولاً: يجب على معلم تركيب البلاط أن يكون لديه معرفة واسعة بأدوات العمل المختلفة وأنواع البلاط المختلفة. فإذا كان لديه خبرة كافية في هذا المجال، سيكون قادراً على اختيار أفضل نوع من البلاط والأدوات التي تساعده على إتقان عمله.

ثانياً: يجب أن يكون لدى معلم تركيب البلاط مهارات فنية رائعة. فالتصاميم التي يقوم
بإنشائها ستظهر جودة عمله وابداعه. لذا، من المهم أن يكون قادراً على تحديد
التصاميم المناسبة وتطبيقها بشكل دقيق.</p>
  },
  {
   title:'مهارات معلم تركيب البورسلين',
   description: <p className='text-xl leading-[3rem]'>مهارات معلم تركيب البورسلين هي أساسية لضمان تنفيذ عملية التركيب بدقة واحترافية. يجب على المعلم أن يكون ذو خبرة ومهارة في استخدام الأدوات الصحيحة واتباع إجراءات التثبيت بشكل صحيح.

تشمل مهارات معلم تركيب البورسلين قدرته على فهم تصاميم الأسنان وتقدير احتياجات كل حالة بدقة. يجب على المعلم أن يكون قادرًا على اختيار المواد المناسبة وضبطها بشكل صحيح لضمان جودة التثبيت.

إلى جانب ذلك، يجب أن يكون لدى معلم تركيب البورسلين مهارات تفصيلية دقيقة لضغط
وتشكيل المادة بشكل صحيح. هذا يساعد في ضمان استقامة وثبات التركییز.

   </p>
  }
  ]
