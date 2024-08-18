import { FooterContainer, FooterWrapper, Logo, NavItems, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright } from './FooterStyledComponent';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Twitter  from '@mui/icons-material/Twitter';
import { personal_info } from '../../data/index';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo href="/">SK Ashi</Logo>
                <NavItems>
                    <NavLink href="#Main">Home</NavLink>
                    <NavLink href="#AboutMe">About</NavLink>

                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                    <NavLink href="#Projects">Open-Source</NavLink>

                    <NavLink href="#Education">Education</NavLink>
                    <NavLink href="#ContactMe">Contact</NavLink>
                </NavItems>
                <SocialMediaIcons>
                    <SocialMediaIcon
                        href={personal_info.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitHubIcon />
                    </SocialMediaIcon>

                    <SocialMediaIcon
                        href={personal_info.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInIcon />
                    </SocialMediaIcon>

                  

                    <SocialMediaIcon
                        href={personal_info.twitter}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Twitter />
                    </SocialMediaIcon>

                </SocialMediaIcons>
                <Copyright>
                    &copy; 2024 SK Ashi
                    All rights reserved.
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;