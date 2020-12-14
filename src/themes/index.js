export const colors = {
    red: {
        base: '#F44336',         /// SE USA EN LA CAMPANITA DE NOTIFICACIONES Y EN UN BOTON QUE DICE "FINALIZAR CASO"
        button: '#BF0000'        /// SE USA EN EL BOTÓN DEL PERFIL DE LOS CASOS
    },

    green: {
        base: '#00BF1F',        /// SE USA EN UN BOTON QUE DICE "ACTIVAR CASO"
    },
    blue: {
        base: '#202B80',        /// SE USA PARA CASI TODAS LAS PANTALLAS ESTE AZUL.
        light: '#595E86',       /// SE USA SOLO PARA UN SELECTOR (ENTRE "ABOGADOS" Y "CLIENTES").
        brandeis: '#00618E',    ///ESTE SE USA EN ALGUNOS ICONOS.
        gradient: 'linear-gradient(0deg, #181F5A 0%, rgba(64, 80, 207, 0.19633) 24.18%, rgba(255, 255, 255, 0.117069) 69.41%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #202B80, #202B80)', ///  LA PANTALLA DE HOME TIENE UN DEGRADE
    },

    white: '#FFFFFF', /// SE USA PARA EL FONDO BLANCO.

    grey: {
        base: '#EBE7E7', ///(SE USA EN LOS CAMPOS DE FORMULARIOS).
        light: '#F2F2F2', ///(SE USA EN ALGUNAS TARJETAS).
        dark:'#C0C0C0', ///(SE USA EN LOS ICONOS DEL BOTTOM NAV).
    },
    yellow:{
        base: '#FFC107', /// PARA LA CAMPANITA DE NOTIFICACIONES.
    },

    orange:{
        base: '#E29500', /// SE USA EN CASI TODOS LOS BOTONES.
    },

    black:{
        base: '#515151', /// LO USO PARA EL BOTON DE "accede con tu cuenta de Google".
    }
};

export const typography = {
    fonts: {
        base: '"roboto", sans-serif',
    },
    sizes: {
        minimum: '0.6875rem',
        p: '0.875rem',
        h1: '1.5rem',
        h2: '1.125rem'
    },
    weights: {
        back: 900,
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300,
        extraLight: 200
    },
};

export const breakpoints = {
    maxMobile:  '25rem',
    mobile: '27rem',
};