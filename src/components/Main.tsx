import { useEffect, useState } from 'react'
import './styles/Main.css'
import type { SocialMedia } from '../types'
import { supaBase } from '../lib/supabase'

export const Main = () => {

        const [socialsBE, setSocialsBE] = useState<SocialMedia[]>([])
    
        useEffect(() => {
          const fetchSocialsBE = async () => {
            const { data, error } = await supaBase.from('be_info').select('*').not('icon_class','is',null)
            if (error) {
                console.error('Error cargando redes:', error);
            }
            if (data) setSocialsBE(data)
        }
          fetchSocialsBE()
        }, [])
    
  return (
    <>
        <main>
            <div className="intro">
                <p>Hi, I'm Alejandro, I'm from Ecuador and I'm a begginer programmer and this is my practice page inspired in my favorite artist, that page was create with React Ts, I waited that this is of your agree. Enjoy 😊</p>
            </div>
            <div className="info">
            <h1>Billie Eilish</h1>
                <p>Billie Eilish Pirate Baird O'Connell, she was born December 18, 2001, is an American singer-songwriter who broke into the pop scene with a moody, atmospheric sound.</p>
                <p>Billie grew up in Los Angeles in a family of musicians and actors, which fostered her artistic expression. While her initial passion was dance, a severe injury ended that path, forcing her to channel her intense creativity into music alongside her older brother and producer, Finneas O'Connell.</p>
                <p>On a personal level, Billie has used her platform to openly discuss her mental health challenges and her diagnosis of Tourette syndrome, topics that have forged an honest and deep connection with her fanbase.</p>
                <p>Her career took off in 2015 with the viral success of "Ocean Eyes". After signing with Interscope Records, she released the EP Don't Smile at Me (2017) and later the 2019 debut album, When We All Fall Asleep, Where Do We Go?. This album, recorded entirely at home, solidified her status as a global phenomenon and made her the youngest artist ever to sweep the four major Grammy categories.</p>
                <p>Her success continued with her subsequent studio albums. Happier Than Ever (2021) explored a more mature, jazz-infused sound, dealing with themes of fame and toxic relationships. Her third album, Hit Me Hard and Soft (2024), returned to the dynamic roots of her sound, experimenting with intense contrasts in volume and emotion.</p>
            </div>
            <ul className='list-media'>
                {socialsBE.map((social) => (
                    <li className='media' key={social.id}>
                        <a target="_blank" key={social.id} title={`@${social.name}`} href={social.link} rel="noopener noreferrer">
                            <i className={social.icon_class}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    </>
  )
}