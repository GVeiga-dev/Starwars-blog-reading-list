const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            personajes: [],
            detallePersonaje: {},
            vehiculos: [],
            detalleVehiculo: {},
            planetas: [],
            detallePlaneta: {},
            favoritos: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            obtenerInfoPersonaje: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        personajes: data.results,
                    }))
                    .catch(err => console.error(err))
            },
            obtenerDetalleDePersonaje: (id) => {
                fetch("https://swapi.dev/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detallePersonaje: data
                    }))
                    .catch(err => console.error(err))
            },

            obtenerInfoVehiculo: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({
                        vehiculos: data.results,
                    }))
                    .catch(err => console.error(err))
            },
            obtenerDetalleDeVehiculo: (id) => {
                fetch("https://swapi.dev/api/vehicles/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detalleVehiculo: data
                    }))
                    .catch(err => console.error(err))
            },

            obtenerInfoPlanetas: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planetas: data.results,
                    }))
                    .catch(err => console.error(err))
            },
            obtenerDetalleDePlaneta: (id) => {
                fetch("https://swapi.dev/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detallePlaneta: data
                    }))
                    .catch(err => console.error(err))
            },

            agregarFavorito: (favoritos) => {
                // console.log("funciona")
                let store = getStore();
                if (favoritos !== "" && !store.favoritos.includes(favoritos)) //agrega cada item solo una vez a fav.
                    setStore({
                        favoritos: [...store.favoritos, favoritos]
                    })
            },

            borrarFavorito: (favoritos) => {
                //console.log("funciona")
                let store = getStore();
                setStore({
                    favoritos: store.favoritos.filter(fav => fav !== favoritos)
                })
            },

            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;