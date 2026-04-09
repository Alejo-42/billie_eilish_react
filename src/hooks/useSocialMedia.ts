import { useEffect, useState } from 'react'
import { socialService } from '../services/socialMediaService'
import { getArtistSocialMedia } from '../services/artistService'
import type { SocialMediaLink } from '../types/socials'

export const useSocialMedia = () => {

  const [socialLinks, setSocialLinks] = useState<SocialMediaLink[]>([])
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        const loadArtistData = async () => {
            const data = await socialService()
            setSocialLinks(data)
            setLoading(false)
        }
        loadArtistData()
    }, [])

    return { socialLinks, loading }
}

export const useArtistSocialMedia = () => {

  const [socialArtistLinks, setSocialArtistLinks] = useState<SocialMediaLink[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const loadData = async () => {
            const data = await getArtistSocialMedia()
            setSocialArtistLinks(data)
            setLoading(false)
        }
        loadData()
    }, [])

    return { socialArtistLinks, loading }
}