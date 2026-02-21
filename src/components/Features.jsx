export default function Features() {
    return (
      <section id="features" className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center w-full mb-6">Features</h2>
        <div className="flex gap-3 justify-center">
            <div className="mb-6 bg-rose-400 p-4 rounded-lg text-white flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">Easy Uploads</h3>
                <img
                    src="../../img/upload.png"
                    alt="easy uploads illustration"
                    className="rounded w-100"
                />
                <p>
                    Quickly upload photos of your pets with our user-friendly interface.
                </p>
            </div>
            <div className="mb-6 bg-indigo-500 p-4 rounded-lg text-white flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
                <img
                    src="../../img/storage.png"
                    alt="secury storage illustraition"
                    className="rounded w-100"
                />
                <p>Your pet photos are stored securely with top-notch encryption.</p>
            </div>
            <div className="mb-6 bg-purple-500 p-4 rounded-lg text-white flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">Community Sharing</h3>
                <img
                    src="../../img/community.png"
                    alt="community sharing illustration"
                    className="rounded w-100"
                />
                <p>Share your pet photos with a community of fellow pet lovers.</p>
            </div>
        </div>
      </section>
    );
}

