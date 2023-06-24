const mediaQueryCelularHorizontal = () => {
    const mediaQueryCelular = window.matchMedia("(min-width: 667px) and (max-width: 1080px)");
    const anchoValido = (mediaQueryCelular.matches);
    return anchoValido;
}

export default mediaQueryCelularHorizontal;