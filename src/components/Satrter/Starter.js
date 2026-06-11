import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 1800;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="text-5xl font-bold" style={{ color: "#C9A02A" }}>
            {count.toLocaleString("ar-EG")}
            {suffix}
        </div>
    );
}

const stats = [
    { target: 25, suffix: "+", label: "خدمة متخصصة" },
    { target: 13000, suffix: "K+", label: "تصميم فيديو منجز", display: "13K+" },
    { target: 220, suffix: "+", label: "شريك نجاح" },
];

function Starter() {
    return (
        <Box className='relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden text-center'
            sx={{ background: 'linear-gradient(145deg, #0d0700 0%, #1a0e00 40%, #2d1a00 80%, #3d2800 100%)' }}>
            <Box
                className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none'
                sx={{ background: "radial-gradient(circle, rgba(201,160,42,0.12) 0%, transparent 70%)", transform: "translate(-50%,-50%)" }}
            />
            <Box
                className='absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none'
                sx={{ background: "radial-gradient(circle, rgba(232,201,122,0.08) 0%, transparent 70%)", transform: "translate(50%,50%)" }}
            />

            <Box className='flex items-center gap-3 mb-8'>
                <Box className='h-px w-12 bg-[#C9A02A]' />
                <Typography variant="body1" className="tracking-[0.3em] text-sm uppercase text-[#C9A02A]">مرحبا بك في قريبة</Typography>
                <Box className='h-px w-12 bg-[#C9A02A]' />
            </Box>

            <Typography
                className="text-6xl md:text-7xl max-sm:!text-5xl !mb-6 leading-tight max-w-4xl text-[#F5D78E]" variant="h1"
                sx={{ textShadow: "0 4px 32px rgba(201,160,42,0.25)" }} fontWeight={800}
            >
                نصنع التميّز
                <br />
                <span className="text-[#FFFFFF]">ونبني النجاح</span>
            </Typography>

            <Typography variant="subtitle1" className="!text-xl md:text-2xl max-w-2xl leading-relaxed !mb-16 text-[rgba(232,201,122,0.85)]">
                نقدم لك حلولا رقمية متكاملة تجمع بين الإبداع والتقنية، لنرتقي بعلامتك التجارية إلى مستويات جديدة من التأثير والانتشار.
            </Typography>

            <Box
                className='grid grid-cols-1 md:grid-cols-3 gap-px w-full max-w-3xl rounded-2xl overflow-hidden'
                sx={{ border: "1px solid rgba(201,160,42,0.25)", backgroundColor: "rgba(201,160,42,0.15)" }}
            >
                {
                    stats.map((stat, index) => (
                        <Box key={index} className='flex flex-col items-center justify-center py-10 px-6 gap-2 bg-[rgba(255,255,255,0.03)]'>
                            {
                                stat.display ? (
                                    <Box className='text-5xl font-bold text-[#C9A02A]'>{stat.display}</Box>
                                )
                                    :
                                    (
                                        <CountUp target={stat.target} suffix={stat.suffix} />
                                    )}
                            <Box className='w-8 h-px my-1 bg-[rgba(201,160,42,0.4)]' />
                            <Box className='text-base text-[#E8C97A]'>{stat.label}</Box>
                        </Box>
                    ))
                }
            </Box>

            <Box className='mt-14'>
                <Button
                    className="!px-10 !py-4 !rounded-full !text-lg !transition-all duration-300 hover:scale-105 !text-[#1a0e00] font-bold"
                    sx={{background: "linear-gradient(135deg, #C9A02A, #E8C97A)", boxShadow: "0 8px 32px rgba(201,160,42,0.4)" }}
                >
                    اكتشف خدماتنا
                </Button>
            </Box>

            <Box className='absolute bottom-5 flex flex-col items-center gap-2 animate-bounce'>
                <Typography variant="body2" className='text-xs tracking-widest text-[rgba(201,160,42,0.6)]'>تمرير</Typography>
                <Typography variant="body2" className="w-px h-8 bg-[rgba(201,160,42,0.4)]"></Typography>
            </Box>
        </Box>
    );
}

export default Starter;