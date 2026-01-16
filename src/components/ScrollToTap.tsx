import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esto mueve la ventana al inicio de forma instantánea
    window.scrollTo(0, 0);
    
    // Si prefieres que el movimiento sea suave, usa esto:
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}