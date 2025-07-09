import { Food } from '@/types/food';
import FoodCard from '@/components/FoodCard';

async function fetchFoodData(endpoint: string): Promise<Food[]> {
  try {
    const res = await fetch(`http://localhost:3000/${endpoint}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Falha ao buscar dados de ${endpoint}`);
    const data = await res.json();
    return data[`produtos_${endpoint}`] || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function HomePage() {
  const naturais = await fetchFoodData('naturais');
  const transgenicos = await fetchFoodData('transgenicos');
  const alergenos = await fetchFoodData('alergenos');

  return (
    <main className="container mx-auto p-8 font-sans">
      <section id="inicio" className="text-center my-16">
        <h1 className="text-5xl font-extrabold mb-4">Explore a Verdade dos Alimentos</h1>
        <p className="text-lg text-gray-600">
          Informações nutricionais claras sobre alimentos naturais, transgênicos e com alérgenos.
        </p>
      </section>

      <section id="naturais" className="my-12">
        <h2 className="text-3xl font-bold border-l-4 border-green-500 pl-4 mb-8">Alimentos Naturais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {naturais.map((item) => <FoodCard key={item.id} item={item} />)}
        </div>
      </section>

      <section id="transgenicos" className="my-12">
        <h2 className="text-3xl font-bold border-l-4 border-yellow-500 pl-4 mb-8">Alimentos Transgênicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transgenicos.map((item) => <FoodCard key={item.id} item={item} />)}
        </div>
      </section>

      <section id="alergenos" className="my-12">
        <h2 className="text-3xl font-bold border-l-4 border-red-500 pl-4 mb-8">Contém Alérgenos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alergenos.map((item) => <FoodCard key={item.id} item={item} />)}
        </div>
      </section>
    </main>
  );
}
