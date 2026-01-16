import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { supaBase } from "../lib/supabase"
import './styles/Header.css'
export const Header = () => {

const [blohsh, setBlohsh] = useState<string>('')
useEffect(() => {
    const fetchBlohsh = async () => {
        const {data, error} = await supaBase.from('be_info').select('link').eq('name','blohsh').single()
        if (data) {
        setBlohsh(data.link);
        }
        if (error) console.error("Error cargando imagen:", error);
    }
    fetchBlohsh()
}, [])

  return (
    <>
        <header>
            <div className="icon">
                { blohsh && <img src={blohsh} alt="BE" />}
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/albums'}>Albums</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}