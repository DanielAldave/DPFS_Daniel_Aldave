import { useState, useEffect } from "react";
import './counter.css'

export const Counter = () => {
  const [models, setModels] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setModels(data));
    fetch("http://localhost:3000/api/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className='container-counter'>
      {models && models.count !== undefined ? (
        <>
          <div>
            <h4 className="list-title">Contador</h4>
            <ul className="list-count">
              <li>Productos: {models.count}</li>
              <li>Categorias: {categories.count}</li>
            </ul>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
    );
}