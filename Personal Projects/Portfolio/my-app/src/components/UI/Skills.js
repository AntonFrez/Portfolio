import React from 'react'
import HTML5 from '../assets/images/icons/html-5.png'
import CSS3 from '../assets/images/icons/css-3.png'
import JS from '../assets/images/icons/js.png'
import REACT from '../assets/images/icons/react.png'
import NODEJS from '../assets/images/icons/nodejs.png'
import SASS from '../assets/images/icons/sass.png'
import BEM from '../assets/images/icons/bem.svg'

const Skills = () => {
    return (
        <React.Fragment>
            {<div className='wave-top-skills'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#264743" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,224C560,213,640,171,720,160C800,149,880,171,960,186.7C1040,203,1120,213,1200,208C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>}

            <div className='skills'>
                <h2>Мои Навыки</h2>
                <h3>Что я использую в работе:</h3>

                <div className='container'>
                <div className="skills__item">
                    <h3 className="title">HTML5</h3>
                    <div className="skills__item-img">
                        <img src={HTML5} alt="html5"></img>
                    </div>
                    <p>Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта.</p>
                </div>

                <div className="skills__item">
                    <h3 className="title">CSS3</h3>
                    <div className="skills__item-img">
                        <img src={CSS3} alt="css3"/>
                    </div>
                    <p>Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!</p>
                </div>

                <div className="skills__item">
                    <h3 className="title">Java Script</h3>
                    <div className="skills__item-img">
                        <img src={JS} alt="java script"/>
                    </div>
                    <p>Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.</p>
                </div>

                <div className="skills__item">
                <h3 className="title">React</h3>
                    <div className="skills__item-img">
                        <img src={REACT} alt="React"/>
                    </div>
                    <p>Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели.</p>
                </div>

                <div className="skills__item">
                    <h3 className="title">Node.js</h3>
                    <div className="skills__item-img">
                        <img src={NODEJS} alt="Node.js"/>
                    </div>
                    
                    <p>Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит.</p>
                </div> 

                <div className="skills__item">
                    <h3 className="title">Sass</h3>
                    <div className="skills__item-img">
                        <img src={SASS} alt="Sass"/>
                    </div>
                    
                    <p>Это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.</p>
                </div> 

                <div className="skills__item">
                    <h3 className="title">БЭМ</h3>
                    <div className="skills__item-img">
                        <img src={BEM} alt="БЭМ"/>
                    </div>
                    <p>Методология позволяет легко и быстро разрабатывать интерфейсы любой сложности и повторно использовать существующий код.</p>
                </div>
                </div>           
            </div>
           <div className='wave-top-projects'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dc7c48" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,224C560,213,640,171,720,160C800,149,880,171,960,186.7C1040,203,1120,213,1200,208C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
            
        </React.Fragment>
    )
}

export default Skills