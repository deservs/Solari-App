// Limpa apenas um cache específico (ex: só o de "Populares")
export const clearSpecificCache = (cacheKey) => {
  localStorage.removeItem(cacheKey);
  console.log(`🧹 Cache ${cacheKey} removido!`);
};

// Limpa todos os caches do seu app que começam com o prefixo 'cache_'
export const clearAllCaches = () => {
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('cache_')) {
      localStorage.removeItem(key);
    }
  });
  console.log("🧹 Todos os caches de filmes foram limpos!");
  // Opcional: recarregar a página para buscar dados novos imediatamente
  window.location.reload();
};

const Settings = () => {
  return (
    <div className="admin-controls">
      <button 
        onClick={clearAllCaches}
        className="btn-clear-cache"
        title="Forçar atualização dos filmes"
      >
        🔄 Atualizar Catálogo
      </button>
    </div>
  );
};

// Dentro do MovieSlider.jsx
const handleRefresh = () => {
  localStorage.removeItem(`cache_${idNav}`); // Remove o cache específico
  window.location.reload(); // Recarrega para buscar do servidor
};

return (
  <div className="category-section">
    <div className="header-row">
      <h2>{title}</h2>
      <button onClick={handleRefresh} className="refresh-small-btn">
        Atualizar esta lista
      </button>
    </div>
    {/* ... resto do Swiper ... */}
  </div>
);