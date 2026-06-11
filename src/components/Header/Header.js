import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../../images/logo/logo.jpeg";
import { useState } from "react";

function Header() {
    const [open, setOpen] = useState(false);
    const links = [
        {
            title: "الصفحة الرئيسية",
            path: "/main-page",
        },
        {
            title: "من نحن",
            path: "/about-us",
        },
        {
            title: "نماذج الأعمال",
            path: "/portfolio",
        },
        {
            title: "خدماتنا",
            path: "/services",
        },
    ];

    return (
        <Box>
            <Box sx={{ background: 'linear-gradient(135deg, #1a0e00 0%, #2d1a00 60%, #3d2800 100%)' }} className='w-full py-7 px-5 flex justify-between items-center' dir='rtl'>
                {/* Header for Desktop */}
                <Box className="flex items-center gap-2 max-sm:hidden">
                    {
                        links.map((link, index) =>
                            <NavLink
                                key={index}
                                to={link.path}
                                end={link.path === '/'}
                                className={({ isActive }) => [
                                    'px-5 py-2 rounded-full transition-all duration-300',
                                    isActive ?
                                        'text-black font-semibold shadow'
                                        :
                                        'text-[#E8C97A] hover:text-white'

                                ].join(" ")}
                                style={({ isActive }) =>
                                    isActive ?
                                        { background: "linear-gradient(135deg, #C9A02A, #E8C97A)" }
                                        :
                                        { background: "transparent" }
                                }
                            >
                                {link.title}
                            </NavLink>
                        )
                    }
                </Box>

                {/* Menu Button */}
                <Box className='hidden max-sm:block'>
                    {
                        open ?
                            <CloseIcon onClick={(e) => setOpen(false)} className="text-[#E8C97A] cursor-pointer" />
                            :
                            <MenuIcon onClick={(e) => setOpen(true)} className="text-[#E8C97A] cursor-pointer" />
                    }
                </Box>

                <Box className='flex items-center'>
                    <Typography variant="h5" className="text-[#C9A02A] font-serif max-sm:hidden" letterSpacing={3} fontWeight={600}>QARIBA</Typography>
                    <img src={Logo} className="w-12 h-12 mr-5 rounded-full" style={{ filter: 'drop-shadow(0 0 8px rgba(201,160,42,0.6))' }} />
                </Box>
            </Box>

            {/* Header for Mobile */}
            <Box className='hidden border-t border-[#E8C97A] max-sm:block'>
                {
                    open &&
                    <Box className='px-5 py-3 flex flex-col gap-y-3' sx={{ background: 'linear-gradient(135deg, #1a0e00 0%, #2d1a00 60%, #3d2800 100%)' }} dir='rtl'>
                        {
                            links.map((link, index) =>
                                <NavLink
                                    key={index}
                                    to={link.path}
                                    end={link.path === '/'}
                                    className={({ isActive }) => [
                                        'px-5 py-3 rounded-lg transition-all duration-300',
                                        isActive ?
                                            'text-black font-semibold shadow'
                                            :
                                            'text-[#E8C97A] hover:text-white'

                                    ].join(" ")}
                                    style={({ isActive }) =>
                                        isActive ?
                                            { background: "linear-gradient(135deg, #C9A02A, #E8C97A)" }
                                            :
                                            { background: "#3F2A03" }
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            )
                        }
                    </Box>
                }
            </Box>
        </Box>
    );
}

export default Header;