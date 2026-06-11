import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

function Questions() {
    const [openId, setOpenId] = useState(null);
    const questions = [
        {
            id: 1,
            question: "لماذا أختار شركة قريبة دون غيرها؟",
            answer: "نؤمن بأن النجاح لا يتحقق بالخدمات وحدها بل بالنتائج الملموسة. لذلك نجمع بين التطوير البرمجي والتسويق الذكي لبناء مشاريع رقمية قوية لا تقتصر على الإطلاق فقط بل تنمو وتتوسع وتحقق أهدافها باستمرار",
        },
        {
            id: 2,
            question: "هل فعلا أحتاج لتحول رقمي الآن؟",
            answer:
                "في عالم رقمي يتطور باستمرار أصبح التواجد القوي على الإنترنت ضرورة لتحقيق النمو والاستمرار في المنافسة نساعدك على الوصول إلى عملائك المستهدفين وتعزيز حضور علامتك التجارية لتكون دائماً في المقدمة قبل منافسيك",
        },
        {
            id: 3,
            question: "ما العائد المتوقع من الاستثمار معنا؟",
            answer:
                "نركز على تحقيق نمو حقيقي وقابل للقياس من خلال استراتيجيات مدروسة تعتمد على البيانات سواء كان الهدف زيادة المبيعات، تعزيز الظهور أو تحسين كفاءة العمليات فإننا نعمل لتحقيق نتائج ملموسة تدعم نجاح أعمالك.",
        },
        {
            id: 4,
            question: "ماذا يحدث بعد تسليم المشروع؟",
            answer:
                "نؤمن بأن نجاح المشروع يبدأ بعد الإطلاق لذلك نوفر دعما مستمرا وتحسينات دورية ومتابعة دقيقة للأداء لضمان استقرار العمل وتحقيق أفضل النتائج واستمرار النمو على المدى الطويل",
        },
        {
            id: 5,
            question: "هل يمكن البدئ بمشروع صغير ثم التوسع؟",
            answer:
                "نطور حلولا مرنة وقابلة للتوسع تبنى وفق احتياجاتك الحالية مع مراعاة متطلبات النمو المستقبلية لتواكب تطور أعمالك وتدعم توسعها بكفاءة واستدامة.",
        },
    ];

    return (
        <Box className='px-6 py-5 bg-[#FAF6EE]'>
            <Box className="max-w-3xl mx-auto">
                <Typography variant="h4" fontWeight={800} className="text-[#6B4C11] text-center pt-10">الأسئلة الشائعة</Typography>
                <Box className='w-20 h-1 rounded-full bg-[#C9A02A] mx-auto mt-5'></Box>
                <Typography variant="h6" className="text-[#8B7355] text-center py-3">إجابات على أكثر الأسئلة التي يطرحها عملاؤنا</Typography>
                <Box className='flex flex-col gap-4'>
                    {
                        questions.map((question, index) => {
                            const isOpen = openId === question.id;
                            return (
                                <Box
                                    key={index}
                                    className='rounded-2xl overflow-hidden transition-all duration-300 bg-[#FFFFFF]'
                                    sx={{
                                        border: isOpen ? "1px solid rgba(201,160,42,0.5)" : "1px solid rgba(201,160,42,0.2)",
                                        boxShadow: isOpen ? "0 8px 32px rgba(201,160,42,0.2)" : "0 2px 12px rgba(201,160,42,0.08)"
                                    }}>
                                    <Box className="w-full flex items-center justify-between gap-4 !px-6 !py-5 text-right" onClick={() => setOpenId(isOpen ? null : question.id)}>
                                        <KeyboardArrowDownIcon fontSize="large" className="shrink-0 transition-transform duration-300 text-[#C9A02A]"
                                            sx={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                        />
                                        <Typography fontWeight={800} variant="h5" className="flex-1 text-right text-[#3D2800]">{question.question}</Typography>
                                    </Box>
                                    <Box className='overflow-hidden transition-all duration-300' sx={{ maxHeight: isOpen ? "300px" : "0px" }}>
                                        <Box className='w-full h-px mb-4 bg-[rgba(201,160,42,0.2)]' />
                                        <Typography variant="body1" className="leading-relaxed text-right text-[#6B5B3E] px-3 py-3">
                                            {question.answer}
                                        </Typography>
                                    </Box>
                                </Box>
                            );
                        })}
                </Box>

            </Box>
        </Box>
    );
}

export default Questions;