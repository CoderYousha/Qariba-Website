import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

function Banners() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: true
    };

    const banners = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1513757378314-e46255f6ed16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFkdmVydGlzZW1lbnQlMjBiYW5uZXJ8ZW58MXx8fHwxNzgxMDgwMjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "عروض حصرية",
            description: "احصل على خصومات تصل إلى 50% على جميع المنتجات"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1761195696518-6384573549ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZHVjdCUyMHNob3djYXNlfGVufDF8fHx8MTc4MTA4MDI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "أحدث التقنيات",
            description: "اكتشف منتجاتنا التكنولوجية الجديدة"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzYWxlJTIwcHJvbW90aW9ufGVufDF8fHx8MTc4MTA4MDI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "تخفيضات الموسم",
            description: "عروض محدودة لفترة قصيرة - لا تفوت الفرصة"
        }
    ];

    return (
        <Box className="w-full">
            <Slider {...settings}>
                {
                    banners.map((banner, index) =>
                        <Box key={index} className='relative'>
                            <Box className="relative h-[500px]">
                                <Box className='w-full h-full'>
                                    <Box className='bg-gray-700 opacity-30 w-full h-full absolute'></Box>
                                    <img src={banner.image} className="w-full h-full object-cover z-10" />
                                </Box>
                                <Box className='absolute bottom-10 left-10' dir='rtl'>
                                    <Typography variant="h2" className="text-[#F5D78E]">{banner.title}</Typography>
                                    <Typography variant="h5" className="text-[#F5D78E]">{banner.description}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    )
                }
            </Slider>
        </Box>
    );
}

export default Banners;