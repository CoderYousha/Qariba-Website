import { Box, Typography } from "@mui/material";

function Clients() {
    const clients = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=300&h=150&fit=crop&q=80",
            name: "عميل 1"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=150&fit=crop&q=80",
            name: "عميل 2"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=150&fit=crop&q=80",
            name: "عميل 3"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=150&fit=crop&q=80",
            name: "عميل 4"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=150&fit=crop&q=80",
            name: "عميل 5"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&h=150&fit=crop&q=80",
            name: "عميل 6"
        },
    ];

    return (
        <Box className='py-10 bg-[#F0E8D5]'>
            <Typography variant="h4" fontWeight={800} className="text-[#6B4C11] text-center">عملاء نعتز بهم</Typography>
            <Box className='w-20 h-1 rounded-full bg-[#C9A02A] mx-auto mt-5'></Box>

            <Box className='grid grid-cols-6 gap-x-10 px-12 max-sm:grid-cols-2'>
                {
                    clients.map((client, index) => 
                        <img key={index} src={client.image} className="rounded-lg mt-10 hover:scale-110 transition-all duration-300"/>
                    )
                }
            </Box>
        </Box>
    );
}

export default Clients;