import { AboutMeContainer, AboutMeBg, AboutMeLeftContainer, Img, AboutMeRightContainer, AboutMeInnerContainer, Title, Description, LineBreak, CVButton } from './AboutMeStyledComponent';
import { personal_info } from '../../data/index';
import BgAnimation from '../BgAnimation/BgAnimation';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton, Box } from '@mui/material';

const AboutMe = () => {
    return (
        <div id="AboutMe">
            <AboutMeContainer>
                <AboutMeBg>
                    <BgAnimation />
                </AboutMeBg>

                <AboutMeInnerContainer>
                    <AboutMeLeftContainer id="Left">
                        <Title>ABOUT ME</Title>
                        <Description>
                        Experienced Full Stack Developer with exceptional problem-solving skills, proficient in building and deploying complete web applications using Next.js and React js. Skilled in Java, JavaScript, and AWS cloud services, with expertise in Dockerization and a proven record of impactful open-source contributions to various organizations including  GSSOC, Hacktoberfest .                        </Description>
                        <LineBreak />
                        <CVButton href={personal_info.cv} target='_blank' rel='noopener noreferrer'>View CV</CVButton>

                        {/* Social Links */}
                        <Box sx={{ marginTop: 3, display: 'flex', gap: 2 }}>
                            <IconButton href="mailto:aashishaik526@example.com" target="_blank" rel="noopener noreferrer">
                                <EmailIcon fontSize="large" sx={{ color: '#1DA1F2' }} />
                            </IconButton>
                            <IconButton href="https://x.com/_Aashii_1" target="_blank" rel="noopener noreferrer">
                                <TwitterIcon fontSize="large" sx={{ color: '#1DA1F2' }} />
                            </IconButton>
                        </Box>
                    </AboutMeLeftContainer>

                    <AboutMeRightContainer id="Right">
                        <Img src="./img/ashi.jpg" alt="AboutMe" />
                    </AboutMeRightContainer>
                </AboutMeInnerContainer>
            </AboutMeContainer>
        </div>
    );
}

export default AboutMe;
