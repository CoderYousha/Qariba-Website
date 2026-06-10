import { Box } from "@mui/material";
import Banners from "../../components/Banners/Banners";
import Team from "../../components/Team/Team";
import Clients from "../../components/Clients/Clients";

function MainPage() {
    return (
        <Box>
            {/* Banner */}
            <Banners />

            {/* Team */}
            <Team />

            {/* Clients */}
            <Clients />
        </Box>
    );
}

export default MainPage;