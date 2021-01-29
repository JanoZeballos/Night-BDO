import React from 'react'
import './Khan.css'

function Khan() {
    return (
        <>
        <div className='container_khan' id='iniciokhan'>
            <h1 className='titulo_khan'>KHAN - Boss de GREMIO</h1>
            <p className='texto_khan'>                
            KHAN es un boss de gremio, que se encuentra en la isla de Okilua, para pelear contra él se necesita
            usar cañones y muchas personas, tenemos una alianza de gremios donde nos ayudamos a hacer este boss
            todos los dias, si estas buscando hacer el barco Tier 3 es una buena oportunidad para sacarlo mas rapido
            (ya que da alguno de los materiales necesarios para hacer el Tier 3) o si tenes mucha suerte te puede dar el corazon.
            </p>
            <h2 className='subtitulo_khan'>¿Porque hay que ir a KHAN? Por esto!</h2>
            <img className='img_drop' src='images/oceano/khan/drop.png' alt='Drop' />
            <img className='arrow' src='images/oceano/khan/arrow.png' alt='Arrow' />
            <h2 className='subtitulo_video'>Video KHAN</h2>
            <video className='video_khan' controls playsinline>
                <source src="videos/video_test.mp4" type="video/mp4" />
            </video>
        </div>
        </>
    )
}

export default Khan