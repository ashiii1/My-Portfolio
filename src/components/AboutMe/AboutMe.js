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
                            I am a Full-Stack Developer with expertise in frontend technology. My experience includes creating and managing diverse projects, integrating SECURE PAYMENT GATEWAYS, using DevOps tools, and contributing to open-source projects. I have also designed landing pages and documentation for SaaS startups.
                        </Description>
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
