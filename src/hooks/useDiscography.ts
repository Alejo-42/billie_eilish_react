import { useEffect, useState } from 'react'
import type { Album } from '../types/album'
import { getAlbums } from '../services/albumsService'

export const useDiscography = () => {
    const [albumsData, setAlbumsData] = useState<Album[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            const data = await getAlbums();
            setAlbumsData(data);
            setLoading(false);
        }
        loadData();
    }, [])

    return { albumsData, loading }
}