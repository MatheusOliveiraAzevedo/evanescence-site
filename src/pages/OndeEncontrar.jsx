import './Style.css'

function OndeEncontrar () {

    return (

        <div className="ondeEncontrar">
            <h1>Onde Encontrar</h1>
            <h2>Deezer</h2>
            <h2>Spotify</h2>
            <div>
                <iframe 
                    title="deezer-widget"
                    src="https://widget.deezer.com/widget/dark/artist/98/top_tracks"
                    width="600"
                    height="352"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media; clipboard-write">
                    </iframe>

                <iframe 
                    title='spotify-widget'
                    src="https://open.spotify.com/embed/artist/5nGIFgo0shDenQYSE0Sn7c?utm_source=generator&theme=0" 
                    width="600" 
                    height="352" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>

                {/* <iframe 
                    title='apple-music-widget'
                    allow="autoplay *; encrypted-media *;" 
                    frameborder="0" 
                    height="600"
                    width="352"
                    maxWidth='660'
                    overflow="hidden"
                    background="transparent"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                    src="https://embed.music.apple.com/br/artist/evanescence/42102393">
                </iframe> */}
            </div>

            <iframe className='youtube' width="560" height="315" src="https://www.youtube.com/embed/9oHW8WdTOXQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default OndeEncontrar