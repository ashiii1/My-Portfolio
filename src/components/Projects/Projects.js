// import { Container, Wrapper, Title, ToggleButtonGroup, ToggleButton, Divider, CardContainer } from './ProjectsStyledComponent';
// import { useState } from 'react';
// import { projects } from '../../data/index';
// import ProjectCard from "../Cards/ProjectCard";


// const Projects = ({ openModal, setOpenModal }) => {
//     const [toggle, setToggle] = useState('all');

//     return (
//         <Container id="Projects">
//             <Wrapper>
//                 <Title>FEATURED PROJECTS</Title>
//                 {/* <Description>What I have done the projects</Description> */}

//                 <ToggleButtonGroup>
//                     {toggle === 'all' ?
//                         <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
//                         :
//                         <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
//                     }
//                     <Divider />

//                     {toggle === 'bootcamp' ?
//                         <ToggleButton active value="bootcamp" onClick={() => setToggle('bootcamp')}>Bootcamp</ToggleButton>
//                         :
//                         <ToggleButton value="bootcamp" onClick={() => setToggle('bootcamp')}>Bootcamp</ToggleButton>
//                     }
//                     <Divider />

//                     {toggle === 'web development' ?
//                         <ToggleButton active value="web development" onClick={() => setToggle('web development')}>Web Development</ToggleButton>
//                         :
//                         <ToggleButton value="web development" onClick={() => setToggle('web development')}>Web Development</ToggleButton>
//                     }
//                     <Divider />

//                     {toggle === 'data science' ?
//                         <ToggleButton active value="data science" onClick={() => setToggle('data science')}>Data Science</ToggleButton>
//                         :
//                         <ToggleButton value="data science" onClick={() => setToggle('data science')}>Data Science</ToggleButton>
//                     }
//                     <Divider />

//                     {toggle === 'object oriented program' ?
//                         <ToggleButton active value="object oriented program" onClick={() => setToggle('object oriented program')}>Object Oriented Programming</ToggleButton>
//                         :
//                         <ToggleButton value="object oriented program" onClick={() => setToggle('object oriented program')}>Object Oriented Programming</ToggleButton>
//                     }
//                 </ToggleButtonGroup>

//                 <CardContainer>
//                     {toggle === 'all' && projects
//                         .map((project) => (
//                             <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
//                         ))}
//                     {projects
//                         .filter((item) => item.category === toggle)
//                         .map((project) => (
//                             <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
//                         ))}
//                 </CardContainer>

//             </Wrapper>
//         </Container >
//     );
// }

// export default Projects;

import { Container, Wrapper, Title, ToggleButtonGroup, ToggleButton, Divider, CardContainer } from './ProjectsStyledComponent';
import { useState } from 'react';
import { projects } from '../../data/index';
import ProjectCard from "../Cards/ProjectCard";


const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');

    return (
        <Container id="Projects">
            <Wrapper>
                <Title>FEATURED PROJECTS</Title>
                {/* <Description>What I have done the projects</Description> */}

                <ToggleButtonGroup>
                    {toggle === 'all' ?
                        <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                        :
                        <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                    }
                    <Divider />

                    {toggle === 'bootcamp' ?
                        <ToggleButton active value="bootcamp" onClick={() => setToggle('bootcamp')}>SaaS/Startup</ToggleButton>
                        :
                        <ToggleButton value="bootcamp" onClick={() => setToggle('bootcamp')}>SaaS/Startup</ToggleButton>
                    }
                    <Divider />

                    {toggle === 'web development' ?
                        <ToggleButton active value="web development" onClick={() => setToggle('web development')}>Full Stack Apps</ToggleButton>
                        :
                        <ToggleButton value="web development" onClick={() => setToggle('web development')}>Full Stack Apps</ToggleButton>
                    }
                    <Divider />

                    {toggle === 'data science' ?
                        <ToggleButton active value="data science" onClick={() => setToggle('data science')}>ReactJs</ToggleButton>
                        :
                        <ToggleButton value="data science" onClick={() => setToggle('data science')}>ReactJs</ToggleButton>
                    }
                    <Divider />

                    {toggle === 'open source' ?
                        <ToggleButton active value="open source" onClick={() => setToggle('open source')}>Open-Source</ToggleButton>
                        :
                        <ToggleButton value="open source" onClick={() => setToggle('open source')}>Open-Source</ToggleButton>
                    }
                    <Divider />

{toggle === 'Dockerized/AWS deployed' ?
    <ToggleButton active value="Dockerized/AWS deployed" onClick={() => setToggle('Dockerized/AWS deployed')}>Dockerized/AWS deployed</ToggleButton>
    :
    <ToggleButton value="Dockerized/AWS deployed" onClick={() => setToggle('Dockerized/AWS deployed')}>Dockerized/AWS deployed</ToggleButton>
}
                </ToggleButtonGroup>

                <CardContainer>
                    {toggle === 'all' && projects
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                </CardContainer>

            </Wrapper>
        </Container >
    );
}

export default Projects;