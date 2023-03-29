import React from "react"

const Project = () => {
    return (
        <React.Fragment>
        <div className="projects">
            <div className="projects__heading">
                <h2>Мои Проекты</h2>
                <p>В свободное время реализую различные интересные для себя проекты, которые помогают оттачивать навыки владения Java Script и React. Представляю некторые из них:</p>
        </div>

        <div className="container">
            <a href="https://antonfrez.github.io/PokeCard/">
                <div className="projects__box projects__box-pokeApi">
                    <div className="overlay">
                        <div className="projects__title">
                                <p>Poke Api</p>
                        </div>

                        <div className="projects__info">
                            <p>Карточка - рандоамйзер с характеристиками покемонов</p>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="https://antonfrez.github.io/Adding-to-cart/">
                <div className="projects__box projects__box-2">
                    <div className="overlay">
                        <div className="projects__title">
                            <p>Sushi Store</p>
                        </div>

                        <div className="projects__info">
                            <p>Добавление элементов в корзину</p>
                        </div>
                    </div>
                </div>
            </a>

            <a href="#">
                <div className="projects__box projects__box-3">
                    <div className="overlay">
                        <div className="projects__title">
                                <p>Soon</p>
                        </div>

                        <div className="projects__info">
                            <p>Скоро тут будет новый проект!</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>

       
    </div>
        <div className="wave-bottom-projects">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dc7c48" d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,224C560,213,640,171,720,160C800,149,880,171,960,186.7C1040,203,1120,213,1200,208C1280,203,1360,181,1400,170.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </div>
        
</React.Fragment>
    )
}

export default Project