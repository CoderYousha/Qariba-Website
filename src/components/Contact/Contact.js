import { Box, Button, Typography } from "@mui/material";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Contact() {
    return (
        <Box className='px-6 py-5 bg-[#1a0e00]' dir='rtl'>
            <Box className='max-w-2xl mx-auto'>
                <Box className='text-center'>
                    <Typography variant="h4" fontWeight={800} className="text-[#F5D78E] pt-10">تواصل معنا</Typography>
                    <Box className='w-20 h-1 rounded-full bg-[#C9A02A] mx-auto mt-5'></Box>
                    <Typography variant="h6" className="text-[#E8C97A] py-3">نسعد بتواصلك معنا في أي وقت، وسنرد عليك في أقرب وقت ممكن</Typography>
                </Box>
                <Box
                    className="flex flex-col gap-5 bg-[rgba(255,255,255,0.04)] border-solid border-[1px] border-[rgba(201,160,42,0.2)] rounded-[24px] p-[40px]"
                >
                    <Box>
                        <Typography variant="body1" fontWeight={800} className="text-[#E8C97A]">الاسم</Typography>
                        <input type="text" placeholder="أدخل اسمك الكامل" className="w-full text-lg indent-5 rounded-lg mt-3 py-3" />
                    </Box>
                    <Box>
                        <Typography variant="body1" fontWeight={800} className="text-[#E8C97A]">البريد الإلكتروني</Typography>
                        <input type="text" placeholder="example@email.com" className="w-full text-lg indent-5 rounded-lg mt-3 py-3" />
                    </Box>
                    <Box>
                        <Typography variant="body1" fontWeight={800} className="text-[#E8C97A]">الرسالة</Typography>
                        <textarea rows={5} placeholder="اكتب رسالتك هنا..." className="w-full text-lg indent-5 rounded-lg mt-3 py-3 resize-none" />
                    </Box>
                    <Button variant="contained"
                        className="flex items-center justify-center gap-3 py-4 rounded-xl hover:scale-105 hover:shadow-2xl mt-2 !text-[#1a0e00] !font-bold !text-[1.1rem] !transition-all duration-300"
                        sx={{ background: "linear-gradient(135deg, #C9A02A, #E8C97A)", boxShadow: "0 6px 24px rgba(201,160,42,0.35)" }}
                    >
                        <SendOutlinedIcon fontSize="large" />
                        إرسال الرسالة
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;