function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-4 py-8">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
        <div className="bg-gradient-to-br from-pink-600 via-rose-500 to-fuchsia-700 p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-100">
            RentFashion
          </p>

          <div className="mt-20 max-w-sm">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Style for every occasion.
            </h1>
            <p className="mt-5 text-base leading-7 text-pink-50">
              Discover beautiful outfits, rent them with ease, and refresh your
              wardrobe without buying more.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white/15 p-4">
              <p className="text-2xl font-bold">500+</p>
              <p className="mt-1 text-xs text-pink-100">Outfits</p>
            </div>
            <div className="rounded-2xl bg-white/15 p-4">
              <p className="text-2xl font-bold">24h</p>
              <p className="mt-1 text-xs text-pink-100">Delivery</p>
            </div>
            <div className="rounded-2xl bg-white/15 p-4">
              <p className="text-2xl font-bold">4.8</p>
              <p className="mt-1 text-xs text-pink-100">Rating</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-sm">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Login to continue your fashion rental journey.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm font-semibold text-pink-600 hover:text-pink-700"
                  >
                    Forgot Password?
                  </a>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-pink-600"
              >
                Login
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              New to RentFashion?{' '}
              <a
                href="#"
                className="font-semibold text-pink-600 hover:text-pink-700"
              >
                Create Account
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App