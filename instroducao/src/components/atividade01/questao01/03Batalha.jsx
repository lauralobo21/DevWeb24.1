const Hero = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt="" width={100} />
        </div>
    )
}


const Enemy = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt="" width={100} />
        </div>
    )
}

const Arena = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <Hero name = "Homem Aranha" img = "imagensAtv01/homemaranha.png" />
            <Enemy name = "Venom" img = "imagensAtv01/venom.png" />
        </div>
    )
}

const World = (props) => {
    return(
        <div>{props.children}</div>
    )
}

export {Hero, Enemy, Arena, World}
