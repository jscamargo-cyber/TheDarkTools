import { createClient } from '@supabase/supabase-js';
import { Tool } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be defined in .env file");
}

// Nota: Hacemos un mapeo de la base de datos para que coincida con nuestro tipo `Tool`.
// Supabase puede devolver `is_premium` (snake_case) y lo necesitamos como `isPremium` (camelCase).
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'api', // CORRECCIÓN: Cambiado de 'public' a 'api' para coincidir con la configuración de tu proyecto.
  },
});

export interface DatabaseTool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  rating: number;
  tags: string[];
  is_premium: boolean; // Campo como viene de la DB
}

export const mapDatabaseToolToTool = (dbTool: DatabaseTool): Tool => ({
  ...dbTool,
  isPremium: dbTool.is_premium,
});
