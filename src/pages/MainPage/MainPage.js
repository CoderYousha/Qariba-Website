import { Box } from "@mui/material";
import Banners from "../../components/Banners/Banners";
import Team from "../../components/Team/Team";
import Clients from "../../components/Clients/Clients";
import Services from "../../components/Services/Services";
import Questions from "../../components/Questions/Questions";
import Models from "../../components/Models/Models";
import Contact from "../../components/Contact/Contact";
import Starter from "../../components/Satrter/Starter";

function MainPage() {
    return (
        <Box>
            {/* Starter */}
            <Starter />

            {/* Banner */}
            <Banners />

            {/* Services */}
            <Services />

            {/* Team */}
            <Team />

            {/* Models */}
            <Models />

            {/* Clients */}
            <Clients />

            {/* Questions */}
            <Questions />

            {/* Contact */}
            <Contact />

        </Box>
    );
}

export default MainPage;