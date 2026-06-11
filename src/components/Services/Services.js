import { Box, Typography } from "@mui/material";

function Services() {
    const services = [
        {
            id: 1,
            title: "تطوير البرمجيات",
            description: "نقدم حلولا رقمية متكاملة تشمل تطوير مواقع الويب وتطبيقات الموبايل والمتاجر الإلكترونية مع تصميم أنظمة مخصصة تلبي احتياجات الأعمال المختلفة كما نوفر خدمات ربط الأنظمة عبر APIs والصيانة والدعم المستمر لضمان الأداء والأمان وقابلية التوسع",
        },
        {
            id: 2,
            title: "التسويق الرقمي والسوشال ميديا",
            description: "نقدم حلول تسويق رقمي متكاملة تركز على تحقيق النمو وزيادة المبيعات من خلال الحملات الإعلانية الذكية، المحتوى الإبداعي، وتحسين الظهور في محركات البحث. نعتمد على البيانات والتحليل المستمر لبناء علامة تجارية قوية وتعظيم العائد على الاستثمار",
        },
        {
            id: 3,
            title: "التصوير وصناعة المحتوى",
            description: "نقدم خدمات تصوير وإنتاج بصري احترافية تساعد على إبراز علامتك التجارية بأفضل صورة من تصوير المنتجات والشركات إلى إنتاج الفيديوهات والإعلانات الإبداعية نضمن إخراجا فنيا متكاملا مع مونتاج ومعالجة لونية احترافية تترك أثرا مميزا لدى جمهورك",
        }
    ];

    return (
        <Box className='bg-[#FAF6EE]'>
            <Typography variant="h4" fontWeight={800} className="text-[#6B4C11] text-center pt-10">خدماتنا</Typography>
            <Box className='w-20 h-1 rounded-full bg-[#C9A02A] mx-auto mt-5'></Box>
            <Typography variant="h6" className="text-[#8B7355] text-center py-3">نقدم لك أفضل الحلول الرقمية لتنمية أعمالك</Typography>
            <Box className='grid grid-cols-3 gap-x-10 gap-y-5 px-12 max-sm:grid-cols-1'>
                {
                    services.map((service, index) =>
                        <Box key={index} className='bg-white rounded-lg shadow-md p-5 pb-10 hover:shadow-[#C9A02A] hover:-translate-y-3 duration-300 transition-all relative'>
                            <Box className='w-12 h-12 rounded-full font-bold flex justify-center items-center text-lg' sx={{ background: "linear-gradient(135deg, #C9A02A, #E8C97A)" }}>
                                {service.id}
                            </Box>
                            <Box dir='rtl'>
                                <Typography variant="h5">{service.title}</Typography>
                                <Box className='w-10 h-0.5 bg-[#C9A02A] mt-3' dir='rtl'></Box>
                            </Box>
                            <Typography variant="body1" className="text-[#6B5B3E] pt-5" dir='rtl'>{service.description}</Typography>
                            <Typography variant="body1" className="cursor-pointer absolute left-3 bottom-3 text-[#C9A02A]" dir='rtl'>عرض التفاصيل</Typography>
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}

export default Services;