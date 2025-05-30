// src/hooks/useSession.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export const useSession = () => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerSesion = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    };

    obtenerSesion();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return { usuario, cargando };
};
