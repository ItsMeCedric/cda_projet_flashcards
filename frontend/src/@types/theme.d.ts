export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export type Theme = "light" | "dark";
