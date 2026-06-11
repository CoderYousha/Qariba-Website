import { Box, Typography } from "@mui/material";

function Models() {
    const models = [
        {
            id: 1,
            name: "محمد الأحمد",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
        },
        {
            id: 2,
            name: "ليلى السعيد",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
        },
        {
            id: 3,
            name: "عمر الزهراني",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
        },
        {
            id: 4,
            name: "رنا الحربي",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
        },
        {
            id: 5,
            name: "فيصل المطيري",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
        },
    ];

    return (
        <Box className='px-6 py-5 bg-[#F0E8D5]'>
            <Typography variant="h4" fontWeight={800} className="text-[#6B4C11] text-center pt-10">المقدمين</Typography>
            <Box className='w-20 h-1 rounded-full bg-[#C9A02A] mx-auto mt-5'></Box>
            <Typography variant="h6" className="text-[#8B7355] text-center py-3">تعرف على وجوه تقدم لك محتوى</Typography>
            <Box className='grid grid-cols-5 justify-items-center max-sm:grid-cols-2'>
                {
                    models.map((model, index) => 
                        <Box key={index} className='flex flex-col items-center gap-y-2'>
                            <img src={model.image} className="w-36 h-2w-36 rounded-full shadow-md shadow-yellow-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400 duration-300 transition-all"/>
                            <Typography variant="h6">{model.name}</Typography>
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}

export default Models;