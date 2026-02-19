export default function Hero() {
    return (
        <div className="bg-linear-to-r from-rose-500 to-purple-500 text-white text-center py-20 px-4  shadow-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to PetSnap</h1>
            <p className="text-lg mb-6">Discover adorable pets waiting for you!</p>
            <button className="bg-white text-purple-500 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100" onClick={() => window.location.href = '#gallery'}>Browse Gallery</button>
        </div>
    );
}
