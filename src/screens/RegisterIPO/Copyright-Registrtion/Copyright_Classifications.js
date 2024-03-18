const artistic = () => {
    return [
        {
            id: 1,
            description: "Visual creations including paintings, drawings, sculptures, photographs, graphic designs and architectural work "
        },
        {
            id: 1,
            description: "Architectural work "
        }
    ]
}

const literary = () => {
    return [
        {
            id: 1,
            description: "Written or textual creations such as novels, poems, short stories, essays, plays, scripts, articles, blogs, "
        },
        {
            id: 2,
            description: "Computer program such as softwares code and database etc"
        }

    ]
}
const cinematographic = () => {
    return [
        {
            id: 1,
            description: "Audiovisual creations, including films, movies, documentaries, television programs"
        },
        {
            id: 2,
            description: "Video games"
        }

    ]
}
const record = () => {
    return [
        {
            id: 1,
            description: "Recordings of sounds, including music albums, spoken-word recordings, podcasts, audiobooks"
        },
        {
            id: 2,
            description: "Recording of videos including music with video or video song"
        }

    ]
}


// export default artistic;
module.exports = { artistic, literary, cinematographic, record }