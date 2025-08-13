/* eslint-disable prettier/prettier */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";

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
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default Main;
