/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images (add as many as you want)
import bgImage1 from "assets/images/Lbg2.jpg";
import bgImage2 from "assets/images/Lbg3.jpg";
import bgImage3 from "assets/images/Lbg1.jpg";

function Home() {
    const images = [bgImage1, bgImage2, bgImage3];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <MKBox component="header" position="relative">
            {/* Navbar */}
            <MKBox component="nav" position="absolute" top="0.5rem" width="100%" zIndex="2">
                <Container>
                    <Grid container flexDirection="row" alignItems="center">
                        <MKTypography
                            component={Link}
                            className="title"
                            href="/pages/home"
                            variant="button"
                            color="white"
                            fontWeight="regular"
                            py={0.8125}
                            mr={2}
                        >
                            TurboCareer
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>

            {/* Slideshow Background */}
            <MKBox
                component="header"
                position="relative"
                sx={{
                    minHeight: "100vh", // ensures full screen height
                    overflow: "hidden", // hides anything outside
                }}
            >
                {/* Background layers */}
                {images.map((img, index) => (
                    <MKBox
                        key={index}
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
                                `${linearGradient(
                                    rgba(gradients.dark.main, 0.5),
                                    rgba(gradients.dark.state, 0.5)
                                )}, url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transition: "opacity 2s ease-in-out",
                            opacity: index === currentImage ? 1 : 0,
                            zIndex: -1,
                        }}
                    />
                ))}
                {/* Content */}
                <MKBox
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minHeight="100vh"
                    position="relative"
                    zIndex={1}
                >
                    <Container>
                        <Grid
                            container
                            item
                            xs={12}
                            md={7}
                            lg={6}
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <MKTypography
                                variant="h1"
                                color="white"
                                mb={3}
                                sx={({ breakpoints, typography: { size } }) => ({
                                    [breakpoints.down("md")]: {
                                        fontSize: size["3xl"],
                                    },
                                })}
                            >
                                Welcome to TurboCareer
                            </MKTypography>
                            <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
                                TurboCareer powers your job search with{" "}
                                <span style={{ color: "#ff5722", fontWeight: "bold" }}>speed</span> and{" "}
                                <span style={{ textDecoration: "underline" }}>precision</span>, because your dream career shouldn’t wait.{" "}
                                <span className="animated-text">
                                    Accelerate your future, apply smarter, and land faster.
                                </span>
                            </MKTypography>
                            <Stack direction="row" spacing={1} mt={3}>
                                <MKButton href="/pages/home" color="white">Lets Start</MKButton>
                            </Stack>
                        </Grid>
                    </Container>
                </MKBox>
            </MKBox>
        </MKBox>
    );
}

export default Home;