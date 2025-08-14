/* eslint-disable prettier/prettier */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-home.jpg";

function Main() {
    return (
        <>
            <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",
                    route: "https://www.creative-tim.com/product/material-kit-react",
                    label: "free download",
                    color: "info",
                }}
                sticky
            />
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
                        <MKTypography
                            variant="h1"
                            color="white"
                            mt={-6}
                            mb={1}
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            Turbo Career{" "}
                        </MKTypography>
                        <MKTypography
                            variant="body1"
                            color="white"
                            textAlign="center"
                            px={{ xs: 6, lg: 12 }}
                            mt={1}
                        >
                            TurboCareer automates your job applications by{" "}
                            <span className="highlight">intelligently submitting tailored resumes</span>{" "}
                            across multiple platforms, saving you time and effort. It accelerates your job search so you can focus on{" "}
                            <span className="highlight">landing the perfect career faster</span>.
                        </MKTypography>
                    </Grid>

                </Container>
            </MKBox>
            <MKBox
                minHeight="75vh"
                width="100%"
                bgColor="dark"
                variant = "gradient"
                borderRadius="lg"
                sx={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    placeItems: "center",
                    justifyContent: "center",
                }}
            >
                <Card className="Pcard">
                {/* Title */}
                <Typography variant="h6" fontWeight="bold">
                    Premium
                </Typography>
                <Typography variant="body2" color="gray">
                    Free access for 200 members
                </Typography>

                {/* Price */}
                <Box mt={2} mb={2}>
                    <Typography variant="h4" fontWeight="bold">
                    $499 <Typography component="span" variant="body1">/ year</Typography>
                    </Typography>
                </Box>

                {/* Button */}
                <Button
                    variant="contained"
                    sx={{
                    backgroundColor: "#000",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#222" },
                    width: "100%",
                    }}
                >
                    BUY NOW
                </Button>

                {/* Features */}
                <Box mt={3}>
                    {[
                    "Complete documentation",
                    "Working materials in Sketch",
                    "20GB cloud storage",
                    "100 team members",
                    ].map((text, index) => (
                    <Box key={index} display="flex" alignItems="center" mt={1}>
                        <CheckIcon sx={{ color: "#00ff99", fontSize: 20, mr: 1 }} />
                        <Typography variant="body2">{text}</Typography>
                    </Box>
                    ))}
                </Box>
                </Card>
                <Card className="Pcard" onClick={() => window.location.href = "/pages/landing-pages/about-us"}>
                {/* Title */}
                <Typography variant="h6" fontWeight="bold">
                    Premium
                </Typography>
                <Typography variant="body2" color="gray">
                    Free access for 200 members
                </Typography>

                {/* Price */}
                <Box mt={2} mb={2}>
                    <Typography variant="h4" fontWeight="bold">
                    $499 <Typography component="span" variant="body1">/ year</Typography>
                    </Typography>
                </Box>

                {/* Button */}
                <Button
                    variant="contained"
                    sx={{
                    backgroundColor: "#000",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#222" },
                    width: "100%",
                    }}
                >
                    BUY NOW
                </Button>

                {/* Features */}
                <Box mt={3}>
                    {[
                    "Complete documentation",
                    "Working materials in Sketch",
                    "20GB cloud storage",
                    "100 team members",
                    ].map((text, index) => (
                    <Box key={index} display="flex" alignItems="center" mt={1}>
                        <CheckIcon sx={{ color: "#00ff99", fontSize: 20, mr: 1 }} />
                        <Typography variant="body2">{text}</Typography>
                    </Box>
                    ))}
                </Box>
                </Card>

<Card className="Pcard" onClick={() => window.location.href = "/pages/landing-pages/about-us"}>
                {/* Title */}
                <Typography variant="h6" fontWeight="bold">
                    Premium
                </Typography>
                <Typography variant="body2" color="gray">
                    Free access for 200 members
                </Typography>

                {/* Price */}
                <Box mt={2} mb={2}>
                    <Typography variant="h4" fontWeight="bold">
                    $499 <Typography component="span" variant="body1">/ year</Typography>
                    </Typography>
                </Box>

                {/* Button */}
                <Button
                    variant="contained"
                    sx={{
                    backgroundColor: "#000",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#222" },
                    width: "100%",
                    }}
                >
                    BUY NOW
                </Button>

                {/* Features */}
                <Box mt={3}>
                    {[
                    "Complete documentation",
                    "Working materials in Sketch",
                    "20GB cloud storage",
                    "100 team members",
                    ].map((text, index) => (
                    <Box key={index} display="flex" alignItems="center" mt={1}>
                        <CheckIcon sx={{ color: "#00ff99", fontSize: 20, mr: 1 }} />
                        <Typography variant="body2">{text}</Typography>
                    </Box>
                    ))}
                </Box>
                </Card>
            </MKBox>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default Main;
