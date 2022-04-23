import "../../../styles/main.scss";
export const SectionSports = () => {
    return (
        <>
            <section className="section">
                <h3 className="section-title">
                    Encuentra el escenario ideal para tu pr&oacute;ximo juego
                </h3>
                <div className="sports-copy-container">
                    <div
                        className="copy-container"
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 51.04%, #000000 100%), url(${"https://images.unsplash.com/photo-1622669253059-e345500cf0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`,
                        }}
                    >
                        <h4 className="copy">
                            Escenarios deportivos en Monter&iacute;a
                        </h4>
                    </div>
                    <div
                        className="copy-container"
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 51.04%, #000000 100%), url(${"https://images.unsplash.com/photo-1508087625439-de3978963553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"})`,
                        }}
                    >
                        <h4 className="copy">
                            Escenarios deportivos en San Pelayo
                        </h4>
                    </div>
                    <div
                        className="copy-container"
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 51.04%, #000000 100%), url(${"https://images.unsplash.com/photo-1496033604106-04799291ee86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`,
                        }}
                    >
                        <h4 className="copy">
                            Escenarios deportivos en Ceret&eacute;
                        </h4>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </>
    );
};

export const SectionLocal = () => {
    return (
        <>
            <section className="section">
                <div
                    className="local-copy-container"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 40%), url(${"https://images.unsplash.com/photo-1571826867433-29518cc0b091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`,
                    }}
                >
                    <div className="content-copy-container">
                        <h3 className="copy">
                            Juega de local y gestiona tu escenario de forma
                            inteligente
                        </h3>
                        <span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deserunt, quae. Recusandae a eos saepe, maxime
                            quo, molestias consequatur, voluptatibus alias
                            maiores aut rem dolores dignissimos harum laborum.
                            Officia, alias labore?
                        </span>
                        <button className="solid-button">
                            M&aacute;s informaci&oacute;n
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
