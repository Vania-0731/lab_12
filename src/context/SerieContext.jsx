import { createContext, useState } from "react";

export const SerieContext = createContext();

export function SerieProvider({ children }) {
    const [series, setSeries] = useState([
    {
        cod: 1,
        nom: "Friends",
        cat: "Comedy",
        img: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/52dae4c7-2ab1-4bb9-ab1c-8100fd54e2f9/b29b3d80-ab56-11ef-9fed-0affd17b6387?host=wbd-images.prod-vod.h264.io&partner=beamcom",
        isFavorite: true,
    },
    {
        cod: 2,
        nom: "Law & Order",
        cat: "Drama",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Law_%26_Order.png/1200px-Law_%26_Order.png",
        isFavorite: false,
    },
    {
        cod: 3,
        nom: "The Big Bang Theory",
        cat: "Comedy",
        img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/07/personajes-big-bang-theory-2003689.jpg?tf=3840x",
        isFavorite: false,
    },
    {
        cod: 4,
        nom: "Stranger Things",
        cat: "Horror",
        img: "https://static.digit.in/Stranger-Things-1.png",
        isFavorite: true,
    },
    {
        cod: 5,
        nom: "Dr. House",
        cat: "Drama",
        img: "https://editorialtelevisa.brightspotcdn.com/dims4/default/a505050/2147483647/strip/true/crop/1308x736+0+116/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F1a%2F2a%2Fd1b0dbdd4caba148ce7f5a220e9d%2Fdr-house.jpg",
        isFavorite: false,
    },
    {
        cod: 6,
        nom: "The X-Files",
        cat: "Drama",
        img: "https://m.media-amazon.com/images/S/pv-target-images/ed07e0438d55df031b039493d752a04fe69b74ccaee93fa7dbb62c33f387fe12.jpg",
        isFavorite: false,
    },
    {
        cod: 7,
        nom: "Breaking Bad",
        cat: "Drama",
        img: "https://illuminatilab.com/blog/wp-content/uploads/2013/10/Breaking-Bad.jpg",
        isFavorite: true,
    },
    {
        cod: 8,
        nom: "Brooklyn Nine-Nine",
        cat: "Comedy",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUjszGh751A2Qv0FAIdj7Ew4HW4AR50ktpTLbOeSnZT4ozEMw6ChEgySTFKKOLIzjT35Zj8aSnNLD31CzX21uP9B-E95gqD9-avzZksoK3T4UVafrjXSFnScwWydEvAQydqAwbjAXlMdHN/s1600/brooklyn-nine-nine-poster.jpg",
        isFavorite: false,
    },
    {
        cod: 9,
        nom: "The Walking Dead",
        cat: "Horror",
        img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e29ec367-0fc5-44f6-b4a5-4172f55632fb/compose?aspectRatio=1.78&format=webp&width=1200",
        isFavorite: false,
    },
    {
        cod: 10,
        nom: "The Boys",
        cat: "Action",
        img: "https://4kwallpapers.com/images/wallpapers/the-boys-season-4-2560x1440-17287.jpg",
        isFavorite: true,
    },
    {
        cod: 11,
        nom: "Lucifer",
        cat: "Drama",
        img: "https://images2.alphacoders.com/109/thumb-1920-1091219.jpg",
        isFavorite: false,
    },
    {
        cod: 12,
        nom: "Supernatural",
        cat: "Horror",
        img: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/759711ff-f46f-4c29-9134-84e247e0e7da/2f27a560913e812f47810275ca2f3da020ed847b.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
        isFavorite: false,
    }
]);


    const toggleFavorite = (cod) => {
        setSeries((prevSeries) =>
            prevSeries.map((serie) =>
                serie.cod === cod
                    ? { ...serie, isFavorite: !serie.isFavorite }
                    : serie
            )
        );
    };

    return (
        <SerieContext.Provider value={{ series, setSeries, toggleFavorite }}>
            {children}
        </SerieContext.Provider>
    );
}
