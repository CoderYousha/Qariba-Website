import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const service = {
    title: "خدمات تصميم وتطوير البرمجيات الاحترافية",
    description:
        "في قريبة للحلول البرمجية نطور حلولا تقنية ذكية تساعد الشركات على تحسين الأداء، أتمتة العمليات، وتحقيق النمو. نجمع بين التحليل الدقيق، البرمجة الحديثة، وتجربة المستخدم المتميزة لبناء أنظمة فعالة وقابلة للتوسع",
    features: [
        {
            id: 1,
            name: "جمع المتطلبات وتحليلها",
            icon: "📋",
            detail: {
                title: "جمع المتطلبات وتحليلها",
                description:
                    "في قريبة للحلول البرمجية نبدأ بفهم أهدافك واحتياجاتك بدقة ثم نحول فكرتك إلى خطة واضحة وقابلة للتنفيذ لضمان تطوير ناجح وتقليل المخاطر منذ البداية",
                points: [
                    "تحليل دقيق لفكرتك وأهداف مشروعك",
                    "توثيق احترافي للمتطلبات والوظائف",
                    "تصميم مسارات وتجربة المستخدم داخل النظام",
                    "تقليل الأخطاء والتكاليف قبل بدء التطوير",
                    "إعداد خطة تنفيذ واضحة ومراحل تطوير مدروسة",
                ],
            },
        },
        {
            id: 2,
            name: "تصميم واجهات المستخدم",
            icon: "🎨",
            detail: {
                title: "تصميم واجهات المستخدم",
                description:
                    "نصمم واجهات مستخدم احترافية تجمع بين الجمال وسهولة الاستخدام لتقديم تجربة مميزة تعكس هوية علامتك التجارية وتساعد على تحويل الزوار إلى عملاء",
                points: [
                    "تصميم عصري يعكس هوية مشروعك",
                    "تجربة استخدام سهلة وسلسة",
                    "تصميم متجاوب لجميع الأجهزة",
                    "توازن بين الجمال والأداء الوظيفي",
                    "نماذج أولية لاختبار المشروع قبل التطوير",
                ],
            },
        },
        {
            id: 3,
            name: "الدومين واستضافة المواقع",
            icon: "🌐",
            detail: {
                title: "الدومين واستضافة المواقع",
                description:
                    "نوفر خدمات حجز الدومينات والاستضافة الموثوقة لضمان سرعة موقعك وأمانه واستقراره مع بنية قوية تدعم نمو أعمالك وتواجدك الرقمي المستمر.",
                points: [
                    "المساعدة في اختيار اسم مناسب لنشاطك",
                    "حجز دومينات محلية وعالمية",
                    "ماية وإدارة ملكية الدومين",
                    "ربط الدومين بالموقع والبريد الرسمي",
                ],
            },
        },
        {
            id: 4,
            name: "WordPress",
            icon: "🔵",
            detail: {
                title: "WordPress",
                description:
                    "نطوّر مواقع WordPress احترافية تجمع بين التصميم الجذاب الأداء السريع وسهولة الإدارة لتمنحك منصة قوية ومرنة تدعم نمو أعمالك وتحقيق أهدافك الرقمية",
                points: [
                    "تصميم مخصص يعكس هوية علامتك التجارية",
                    "لوحة تحكم سهلة لإدارة المحتوى",
                    "سرعة وأداء محسّنان لتجربة أفضل",
                    "تهيئة لمحركات البحث (SEO)",
                    "تصميم متجاوب لجميع الأجهزة",
                    "قابلية للتوسع وإضافة ميزات جديدة مستقبلا"
                ],
            },
        },
        {
            id: 5,
            name: "تطوير تطبيقات الموبايل",
            icon: "📱",
            detail: {
                title: "تطوير تطبيقات الموبايل",
                description:
                    "نطور تطبيقات موبايل احترافية تجمع بين الأداء العالي وسهولة الاستخدام لتقديم تجربة مميزة للمستخدمين ودعم أهداف أعمالك بكفاءة على مختلف الأجهزة.",
                points: [
                    "تطوير تطبيقات iOS وAndroid باحترافية عالية",
                    "تصميم تجربة مستخدم جذابة وسهلة الاستخدام",
                    "أداء سريع واستقرار موثوق",
                    "ربط التطبيق بالأنظمة والخدمات الخارجية",
                    "إشعارات ذكية لتعزيز التفاعل",
                    "لوحة تحكم متكاملة لإدارة التطبيق"
                ],
            },
        },
        {
            id: 6,
            name: "تصميم وتطوير متاجر إلكترونية",
            icon: "🛍️",
            detail: {
                title: "تصميم وتطوير متاجر إلكترونية",
                description:
                    "نصمم ونطور متاجر إلكترونية احترافية تجمع بين التصميم الجذاب الأداء السريع وسهولة الإدارة لتوفر تجربة شراء مميزة وتمنحك منصة بيع قوية قابلة للنمو والتوسع.",
                points: [
                    "تصميم متجر احترافي يعكس هوية علامتك التجارية",
                    "تجربة شراء سهلة وسريعة للعملاء",
                    "ربط بوابات الدفع وخدمات الشحن",
                    "لوحة تحكم متكاملة لإدارة المتجر والطلبات",
                    "أداء سريع وتجربة سلسة على جميع الأجهزة",
                ],
            },
        },
        {
            id: 7,
            name: "تطوير مواقع الويب",
            icon: "💻",
            detail: {
                title: "تطوير مواقع الويب",
                description:
                    "نطور مواقع ويب احترافية تجمع بين التصميم العصري الأداء السريع والتقنيات الحديثة لتمنحك حضوراً رقمياً قوياً يدعم نمو أعمالك ويعزز ثقة عملائك",
                points: [
                    "مواقع احترافية تعزز حضور علامتك التجارية",
                    "منصات ويب مخصصة وفق احتياجات مشروعك",
                    "تقنيات حديثة تضمن السرعة والأمان",
                    "تصميم متجاوب يعمل بكفاءة على جميع الأجهزة",
                ],
            },
        },
    ]
};

function ProgrammingService() {
    const navigate = useNavigate();
    const [selectedFeature, setSelectedFeature] = useState(null);

    return (
        <Box className="min-h-screen" style={{ backgroundColor: "#FAF6EE" }} dir='rtl'>
            <Box
                className="py-24 px-6 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a0e00 0%, #2d1a00 60%, #3d2800 100%)" }}
            >
                <Box
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 15% 50%, #C9A02A 0%, transparent 50%), radial-gradient(circle at 85% 50%, #E8C97A 0%, transparent 50%)",
                    }}
                />
                <Box className="max-w-4xl mx-auto relative">
                    <Typography variant="h1" className="text-5xl md:text-6xl !mb-6" style={{ color: "#F5D78E" }}>
                        {service.title}
                    </Typography>
                    <Box className="w-20 h-1 mb-8 rounded-full" style={{ backgroundColor: "#C9A02A" }} />
                    <p className="text-xl leading-relaxed max-w-3xl" style={{ color: "rgba(232,201,122,0.85)" }}>
                        {service.description}
                    </p>
                </Box>
            </Box>

            {/* Features grid */}
            <Box className="py-20 px-6">
                <Box className="max-w-5xl mx-auto">
                    <Box className="text-center mb-14">
                        <Typography variant="h2" className="text-3xl mb-4" style={{ color: "#6B4C11" }}>
                            مميزات الخدمة
                        </Typography>
                        <Box className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: "#C9A02A" }} />
                        <p className="mt-4" style={{ color: "#8B7355" }}>
                            اضغط على أي ميزة لعرض تفاصيلها
                        </p>
                    </Box>

                    <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature) => {
                            const isActive = selectedFeature?.id === feature.id;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setSelectedFeature(isActive ? null : feature)}
                                    className="text-right p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 w-full"
                                    style={{
                                        backgroundColor: isActive ? "#1a0e00" : "#FFFFFF",
                                        border: isActive
                                            ? "1px solid #C9A02A"
                                            : "1px solid rgba(201,160,42,0.2)",
                                        boxShadow: isActive
                                            ? "0 12px 40px rgba(201,160,42,0.3)"
                                            : "0 4px 16px rgba(201,160,42,0.1)",
                                    }}
                                >
                                    <Box
                                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-all duration-300"
                                        style={{
                                            background: isActive
                                                ? "linear-gradient(135deg, #C9A02A, #E8C97A)"
                                                : "rgba(201,160,42,0.1)",
                                        }}
                                    >
                                        {feature.icon}
                                    </Box>
                                    <span
                                        className="text-lg"
                                        style={{ color: isActive ? "#F5D78E" : "#3D2800" }}
                                    >
                                        {feature.name}
                                    </span>
                                </button>
                            );
                        })}
                    </Box>
                </Box>
            </Box>

            {/* Feature detail panel */}
            {selectedFeature && (
                <Box className="px-6 pb-20">
                    <Box className="max-w-5xl mx-auto">
                        <Box
                            className="rounded-3xl p-10 relative"
                            style={{
                                background: "linear-gradient(135deg, #1a0e00 0%, #2d1a00 100%)",
                                border: "1px solid rgba(201,160,42,0.35)",
                                boxShadow: "0 20px 60px rgba(201,160,42,0.2)",
                            }}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedFeature(null)}
                                className="absolute top-6 left-6 w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                                style={{ backgroundColor: "rgba(201,160,42,0.15)", color: "#E8C97A" }}
                            >
                                <CloseOutlinedIcon fontSize='large' />
                            </button>

                            <Box className="flex items-center gap-4 mb-6">
                                <Box
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                                    style={{ background: "linear-gradient(135deg, #C9A02A, #E8C97A)" }}
                                >
                                    {selectedFeature.icon}
                                </Box>
                                <Box>
                                    <h3 className="text-3xl" style={{ color: "#F5D78E" }}>
                                        {selectedFeature.detail.title}
                                    </h3>
                                    <Box className="w-12 h-0.5 mt-2 rounded-full" style={{ backgroundColor: "#C9A02A" }} />
                                </Box>
                            </Box>

                            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(232,201,122,0.85)" }}>
                                {selectedFeature.detail.description}
                            </p>

                            <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {selectedFeature.detail.points.map((point, i) => (
                                    <Box key={i} className="flex items-start gap-3">
                                        <CheckCircleOutlineOutlinedIcon
                                            fontSize='medium'
                                            className="shrink-0 mt-0.5"
                                            style={{ color: "#C9A02A" }}
                                        />
                                        <span style={{ color: "#E8C97A" }}>{point}</span>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default ProgrammingService;