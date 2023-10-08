export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]
export interface Database {
  public: {
    Tables: {
      video_games_category: {
        Row: {
          id: number
          name: string | null
          top_category: boolean | null
        }
        Insert: {
          id?: number
          name?: string | null
          top_category?: boolean | null
        }
        Update: {
          id?: number
          name?: string | null
          top_category?: boolean | null
        }
        Relationships: []
      }
      video_games_products: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string | null
          platform_id: number | null
          price: number | null
          requested: number | null
          sold: number | null
          stock: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          platform_id?: number | null
          price?: number | null
          requested?: number | null
          sold?: number | null
          stock?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          platform_id?: number | null
          price?: number | null
          requested?: number | null
          sold?: number | null
          stock?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "video_games_products_platform_id_fkey"
            columns: ["platform_id"]
            referencedRelation: "video_games_category"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]
