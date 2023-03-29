import React from 'react'
import BEM from '../assets/images/icons/bem.svg'
import html from '../assets/images/icons/icons8-html-5.svg'
import css3 from '../assets/images/icons/css3-svgrepo-com.svg'
import js from '../assets/images/icons/icons8-javascript.svg'
import react from '../assets/images/icons/icons8-react-native.svg'
import node from '../assets/images/icons/icons8-nodejs.svg'
import sass from '../assets/images/icons/icons8-sass.svg'
import git from '../assets/images/icons/icons8-git.svg'
import Bootstrap from '../assets/images/icons/bootstrap.svg'

const Skills = (props) => {

    const infoSkills =  [
        {name:`HTML5`, img: html},
        {name:`CSS3`, img: css3 },
        {name: `Java Script`, img: js},
        {name: `React`, img: react},
        {name: `Node.js`, img: node},
        {name: `Sass`, img: sass},
        {name: `БЭМ`, img: BEM},
        {name: `Git`, img: git},
        {name: `Bootstrap`, img: Bootstrap},
    ]

    const skillsBlock = infoSkills.map((infoSkill, index) => {
        return (
            <div className='skills__item' key={index}>
                <div className="skills__item-el">
                    <img className="skills__item-img" src={infoSkill.img}></img>
                    <h4 className="skills__item-title">{infoSkill.name}</h4>
                </div>
            </div>
        );
    })

    return (
        <React.Fragment >
            <div className='wave-top-skills'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#264743" d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,224C560,213,640,171,720,160C800,149,880,171,960,186.7C1040,203,1120,213,1200,208C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>

            <div className='skills'>
                <h2>Мои Навыки</h2>
                <h3>Что я использую в работе:</h3>
                <div className='container'>
                    {skillsBlock}
                </div>
            </div>

           <div className='wave-top-projects'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dc7c48" d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,224C560,213,640,171,720,160C800,149,880,171,960,186.7C1040,203,1120,213,1200,208C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
           
        </React.Fragment>
    )
}

export default Skills