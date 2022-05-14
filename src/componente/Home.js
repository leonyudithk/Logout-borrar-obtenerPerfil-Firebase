import React from 'react';
import { Carousel, Container } from 'react-bootstrap';


const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1649345660/bigstock-Garden-Flowers-Plants-and-Too-281611147-770x360_dhxfwb.jpg"
                        alt="First slide"
                        height="350px"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1649345660/plantas-4-e1586223358927_owmfbb.jpg"
                        alt="Second slide"
                        height="350px"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1649345661/plantas-clasificacion-e1569789109898_n94bdu.jpg"
                        alt="Third slide"
                        height="350px"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1649345660/_109730247_gettyimages-1094263056-1.jpg_oakdbc.webp"
                        alt="First slide"
                        height="350px"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1649345660/autotrofo-e1589745520443_vd9xe3.jpg"
                        alt="Second slide"
                        height="350px"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1649345660/plantas-3-e1586222650112_fprx9q.jpg"
                        alt="Third slide"
                        height="350px"

                    />

                </Carousel.Item>
            </Carousel>
            <div>
                <Container>
                    <br></br>
                    <h1>Las Plantas</h1>
                    <br></br>
                    <p >
                        La plantas nos proporcionan alimentos, medicinas, madera, combustible y fibras. Además, brindan cobijo a multitud de otros seres vivos, producen el oxígeno que respiramos, mantienen el suelo, regulan la humedad y contribuyen a la estabilidad del clima.

                        Existe una inmensa variedad de plantas, algunas muy simples, otras muy evolucionadas. Forman parte de todos los ecosistemas y se han adaptado a diversos climas y condiciones del suelo. Algunas pueden vivir en sitios muy secos, otras necesitan agua abundante.La mitad de los alimentos que consume la humanidad procede de sólo tres especies de plantas: el trigo, el arroz y el maíz.  Las plantas son una parte básica y elemental de la
                        vida sobre nuestro planeta. Sin ellas, nada podría ser
                        como lo conocemos, ni para el ser humano ni para
                        ninguno de los otros seres vivos. Por tanto, las
                        plantas tienen un gran importancia en la Tierra, pues
                        aportan desde oxígeno y alimento hasta refugio y
                        medicinas, entre muchos más beneficios.
                    </p>
                </Container>


            </div>

        </div>
    );
};

export default Home;