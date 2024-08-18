import styled from 'styled-components';

export const AboutMeContainer = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 0px 150px 0px;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
    
    @media (max-width: 1024px) {
        padding: 66px 16px;
    }
    
    @media (max-width: 640px) {
        padding: 32px 16px;
    }
`;

export const AboutMeBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Set lower z-index */
    pointer-events: none; /* Prevent background from interfering with clicks */
`;

export const AboutMeInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1100px;
    z-index: 2; /* Ensure content is above background */

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const AboutMeLeftContainer = styled.div`
    width: 100%;
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 1024px) {
        order: 2;
        margin-bottom: 30px;
        align-items: center;
    }

    @media (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        align-items: center;
    }
`;

export const AboutMeRightContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    order: 2;
    gap: 12px;

    @media (max-width: 1024px) {
        order: 1;
        justify-content: center;
        margin-bottom: 80px;
    }

    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
`;

export const Img = styled.img`
    max-width: 400px;
    max-height: 400px;
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
        max-width: 300px;
        max-height: 300px;
    }

    @media (max-width: 640px) {
        max-width: 240px;
        max-height: 240px;
    }
`;

export const Title = styled.div`
    padding-top: 50px;
    padding-bottom: 30px;
    font-weight: 700;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media (max-width: 1024px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

export const Description = styled.div`
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};
    max-width: 600px;

    @media (max-width: 1024px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 1.5;
    }

    a {
        color: cornflowerblue;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: darkblue;
            text-decoration: underline;
        }

        &:visited {
            color: cornflowerblue;
        }
    }
`;

export const LineBreak = styled.br`
    display: block;
    margin: 10px 0;
`;

export const CVButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 60%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
    z-index: 3; /* Ensure button is on top */

    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1F2634;
        filter: brightness(1);
    }    

    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
`;
