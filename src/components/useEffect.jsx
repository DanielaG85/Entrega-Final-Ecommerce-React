import { useEffect } from "react";

useEffect(() => {
    console.log('primera ejecución')
    return () => {
      // Limpieza del efecto             
    };
  }, [dependencias]);