import React from 'react'

const About = () => {
    return (
        <React.Fragment>
            <div className="about-me">
                <h2>Обо мне</h2>

                <div className='about-me__photo'>
                    <div className='photo' alt='photo'/>
                </div>

                <p>В 2020 году решил попробовать себя в IT-сфере. 1 год 9 месяцев работал на позиции веб-тестировщика, после чего перевёлся внутри компании на позицию разработчика и проработал 1 год. Совершенствую свои навыки <span>JavaScript</span>, также изучаю <span>React</span>. Легко вхожу в новый коллектив. В свободное от учёбы и работы время увлекаюсь футболом.</p>

            </div>
        </React.Fragment>
    )
}

export default About