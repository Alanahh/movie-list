import * as movieActions from "../actions/add.movie";

const initialState = {
    movies:[
        {
            id:1,
            title:'Wonder Woman',
            url:'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/movie-covers/2017/08/Movies-Thumb_WonderWomanMovie2017_59a4b5f04e7ea5.00139244.jpg?itok=F31KcV7s',
            plot:'Before she was Wonder Woman, she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, when an American pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat. Fighting alongside man in a war to end all wars, Diana will discover her full powers…and her true destiny.'
        },
        {
            id:2,
            title:'X-Men: Days of Future Past',
            url: 'https://j.b5z.net/i/u/6127364/i/x_men_8.jpg',
            plot:'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.'
        },
        {
            id:3,
            title:'Avengers: Infinity War Premiere',
            url:'https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg',
            plot:'An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. '
        },
        {
            id:4,
            title:'Ant-Man and the Wasp',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdB9eQfIg2fAOH1FymtKD8cL_6wW4fiq8f_ziUHJtHTnJoSFGcg',
            plot:'From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: “Ant-Man and The Wasp.” In the aftermath of “Captain America: Civil War,” Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he’s confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.'
        },
        {
            id:5,
            title:'Black Panther',
            url:'https://images-na.ssl-images-amazon.com/images/I/91Iu1P4N8LL._SX342_.jpg',
            plot:'Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.'
        }
     ],
     currentPage: 1,
     moviesPerPage: 3,
     display: "none"
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case movieActions.SET_MOVIE: {
            const oldMovies = [
                    {
                        id: 'id',
                        title: action.title,
                        url: action.url,
                        plot: action.plot
                    }
                    , ...state.movies
                ]

            return {
                ...state,
                movies: oldMovies
            }
        }
        case movieActions.OPEN_CLOSE: {
            return (action.str==="none") ? {
                ...state,
                display: action.str
            } : {
                ...state,
                display: action.str
            }    
        }
        case movieActions.CHANGE_PAGE: {
             return {
                 ...state,
                 currentPage: action.number
             }
        }
       

        default:
            return state;
    }
}