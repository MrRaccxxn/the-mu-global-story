import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Ethereum: A Global Story
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              A documentary miniseries exploring Ethereum&apos;s transformative 
              impact on technology and society, premiering at Expo 2025 Osaka.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                aria-label="Follow on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                aria-label="Watch on YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.946 2.946 0 0 0-2.074-2.085C19.538 3.625 12 3.625 12 3.625s-7.538 0-9.424.476A2.946 2.946 0 0 0 .502 6.186C.026 8.081.026 12.025.026 12.025s0 3.944.476 5.839a2.946 2.946 0 0 0 2.074 2.085c1.886.476 9.424.476 9.424.476s7.538 0 9.424-.476a2.946 2.946 0 0 0 2.074-2.085c.476-1.895.476-5.839.476-5.839s0-3.944-.476-5.839zM9.545 15.568V8.482l6.278 3.543-6.278 3.543z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#chapters" className="text-gray-300 hover:text-primary transition-colors">
                  Chapters
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Premiere</h4>
            <div className="space-y-2 text-gray-300">
              <p>Expo 2025 Osaka</p>
              <p>April 2025</p>
              <p>Japan</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Ethereum: A Global Story. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 