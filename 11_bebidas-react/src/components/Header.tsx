import { useEffect, useState, type ChangeEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

function Header() {

  const [serchFilters, setSearchFilters] = useState({
    ingredient: '',
    category: ''
  })

  const { pathname } = useLocation()
  const isHome = pathname === '/';
  const fetchCategories = useAppStore((state) => state.fetchCategories) 
  const categories = useAppStore((state) => state.categories)
  const searchRecipies = useAppStore((state) => state.searchRecipies)
  const showNotification = useAppStore((state) => state.showNotification)

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])


  

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearchFilters({
      ...serchFilters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Validar
    if(Object.values(serchFilters).includes('')) {
      showNotification({
        text:'Rellene todos los campos',
        error: true
      })
      return
    }
    searchRecipies(serchFilters);
  }

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
      <div className=" mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="Logotipo" />
          </div>

          <nav className=" flex gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>

            <NavLink
              to="/generate"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Generar con IA
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form 
            className=" md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingredientes
              </label>

              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Café, Tequila..."
                onChange={handleChange}
                value={serchFilters.ingredient}
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoria
              </label>

              <select
                id="category"
                name="category"
                value={serchFilters.category}
                onChange={handleChange}
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
              >
                <option value="">-- Seleccione --</option>
                {categories.drinks.map((category) => (
                  <option 
                    key={category.strCategory} 
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input 
                type="submit" 
                value='Buscar recetas'
                className=" cursor-pointer bg-orange-800 hover:bg-orange-700 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
}

export default Header;
