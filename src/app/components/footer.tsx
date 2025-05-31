import Image from 'next/image'
import Gradiant from './gradiant'

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Énergie', href: '/energie' },
    { name: 'Créer mon site', href: '/creer_mon_site' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 8.002.01 6.78.048 2.979.206.206 2.979.048 6.78.01 8.002 0 8.396 0 12.017c0 3.621.01 4.015.048 5.237.158 3.801 2.931 6.574 6.732 6.732 1.222.038 1.616.048 5.237.048 3.621 0 4.015-.01 5.237-.048 3.801-.158 6.574-2.931 6.732-6.732.038-1.222.048-1.616.048-5.237 0-3.621-.01-4.015-.048-5.237C23.826 2.979 21.053.206 17.252.048 16.03.01 15.636 0 12.017 0zm0 2.17c3.557 0 3.97.01 5.168.048 2.912.132 4.513 1.733 4.645 4.645.038 1.198.048 1.611.048 5.168 0 3.557-.01 3.97-.048 5.168-.132 2.912-1.733 4.513-4.645 4.645-1.198.038-1.611.048-5.168.048-3.557 0-3.97-.01-5.168-.048-2.912-.132-4.513-1.733-4.645-4.645C2.179 15.987 2.17 15.574 2.17 12.017c0-3.557.01-3.97.048-5.168.132-2.912 1.733-4.513 4.645-4.645C8.047 2.179 8.46 2.17 12.017 2.17z"
            clipRule="evenodd"
          />
          <path d="M12.017 5.838a6.18 6.18 0 100 12.359 6.18 6.18 0 000-12.359zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-white" aria-labelledby="footer-heading">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <Gradiant />
      </div>
      
      {/* Footer Content */}
      <div className="relative z-10">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900">Navigation</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.main.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900">Services</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Audit énergétique
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Création de sites web
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Solutions digitales
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Consulting
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Support technique
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Nous contacter
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900">Légal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Confidentialité
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Conditions d'utilisation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Mentions légales
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 xl:mt-0">
              <h3 className="text-sm/6 font-semibold text-gray-900">Restez connecté</h3>
              <p className="mt-2 text-sm/6 text-gray-600">
                Recevez les dernières actualités et mises à jour de nos services.
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Adresse email
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  required
                  placeholder="Votre adresse email"
                  autoComplete="email"
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm/6 xl:w-full"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    S'abonner
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div className="flex space-x-6 md:order-2">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
              &copy; 2024 Adaptiserv. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
