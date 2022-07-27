import perfil from './image/perfil.jpg';
const About = () => {
    return (
        <div className="about">
            <h1>Projeto-filmes-teste-2</h1>
            <p>
                Meu Portfólio.
            </p>
            <p>
                <a href="
                https://www.github.com/joseliodm/
                " target="_blank">
                     Github
                </a>
                <a href="
                https://linkedin.com/in/josélio-dias-mendonça-b7a165189
                " target="_blank">
                     Linkedin
                </a>
                <a href="
                https://joseliodm.github.io/E-curriculo/
                " target="_blank">
                     Curriculo Online
                </a>
            </p>
            <div className="logo">
                <img src={perfil} alt="perfil" />
                <p>
                    Programador em Php, Javascript, ReactJS, , Typescript, Electron, NodeJS, Sql-server, MySQL.
                </p>
            </div>
        </div>
    );
}
 
export default About;