import { Box, Typography } from "@mui/material";

function Team() {
    const members = [
        {
            id: 1,
            name: "أحمد محمد",
            position: "المدير التنفيذي",
            description: "قائد متميز مع أكثر من 15 عامًا من الخبرة في مجال التكنولوجيا وإدارة الأعمال. يركز على الابتكار وتطوير الحلول الرقمية المتقدمة.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc4MTA1MTgzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            id: 2,
            name: "سارة علي",
            position: "مديرة التسويق",
            description: "خبيرة في استراتيجيات التسويق الرقمي وبناء العلامات التجارية. تتمتع بمهارات استثنائية في التواصل وتحليل السوق.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzgxMDgwMjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            id: 3,
            name: "نورا حسن",
            position: "مديرة التطوير",
            description: "مطورة برامج محترفة تجمع بين الخبرة التقنية والإبداع. متخصصة في بناء تطبيقات الويب الحديثة وقيادة الفرق التقنية.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwb2ZmaWNlfGVufDF8fHx8MTc4MDk5NTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            id: 4,
            name: "خالد عبدالله",
            position: "مدير العمليات",
            description: "متخصص في تحسين العمليات التشغيلية وإدارة المشاريع. يتميز بالقدرة على تحقيق الكفاءة وتحسين الأداء المؤسسي.",
            image: "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGNvcnBvcmF0ZXxlbnwxfHx8fDE3ODEwODAyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
    ];

    return (
        <Box className='pt-10 px-3 bg-[#F9F4EA]'>
            <Typography variant="h4" fontWeight={800} className="text-[#6B4C11] text-center">فريق العمل</Typography>
            <Box className='w-20 h-1 rounded-full bg-[#C9A02A] mx-auto mt-5'></Box>
            <Typography variant="h6" className="text-[#8B7355] text-center py-3">تعرف على الخبراء الذين يقودون نجاحنا</Typography>
            <Box className='grid grid-cols-4 justify-items-center gap-x-10 max-sm:grid-cols-1 max-sm:gap-y-10'>
                {
                    members.map((member, index) =>
                        <Box key={index} className='rounded-lg bg-white w-3/4 h-4/5 hover:shadow-[#C9A02A] shadow-md hover:shadow-md hover:-translate-y-2 transition-all duration-300 max-sm:h-[500px]' dir='rtl'>
                            <Box className='h-1/2 relative'>
                                <Box className="w-full h-full absolute opacity-0 hover:opacity-100 duration-300 transition-all" sx={{background: 'linear-gradient(to top, rgba(139,105,20,0.4), transparent)'}}></Box>
                                <img src={member.image} className="h-full w-full rounded-t-lg"/>
                            </Box>
                            <Box className='p-2'>
                                <Typography variant="h5" fontWeight={800}>{member.name}</Typography>
                                <Typography variant="h6" fontWeight={800} className="text-[#C9A02A]">{member.position}</Typography>
                                <Box className='w-10 h-0.5 bg-[#C9A02A] mt-3'></Box>
                                <Typography className="pt-2" variant="body1">{member.description}</Typography>
                            </Box>
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}

export default Team;