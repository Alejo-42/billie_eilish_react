import { useEffect, useState } from "react"
import { supaBase } from "../lib/supabase"
import  type { SocialMedia } from "../types";
import './styles/Footer.css'

export const Footer = () => {
    const [socials, setSocials] = useState<SocialMedia[]>([])

    useEffect(() => {
      const fetchSocials = async () => {
        const { data, error } = await supaBase.from('my_social_media').select('*')
        if (error) {
            console.error('Error cargando redes:', error);
        }
        if (data) setSocials(data)
    }
      fetchSocials()
    }, [])
    
  return (
    <>
    <footer>
        <h3 className="title-my-media">My Social Media</h3>
        <ul className="list-my-media">
            {socials.map((social) => (
                <li className="my-media" key={social.id}>
                    <a target="_blank" key={social.id} title={`@${social.name}`} href={social.link} rel="noopener noreferrer">
                        <i className={social.icon_class}></i>
                    </a>
                </li>
            ))}
        </ul>
        <p className="copyright">Copyright reserved © 2026</p>
    </footer>
    </>
  )
}