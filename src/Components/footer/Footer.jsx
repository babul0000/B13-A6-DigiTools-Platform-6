const Footer = () => {
    return (
        <footer className="bg-[#0B1221] text-gray-400 w-full py-8 px-6 ">
            <div className="container">
                <div className="md:mx-16 text-left grid grid-cols-2 lg:grid-cols-6  gap-4 md:gap-2 mb-6">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-white text-4xl font-bold mb-3">DigiTools</h2>
                        <p className="max-w-xs leading-relaxed text-lg">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-3">Product</h3>
                        <ul className="space-y-2 text-lg">
                            <li><a href="#" className="hover:text-white transition">Features</a></li>
                            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-3">Company</h3>
                        <ul className="space-y-2 text-lg">
                            <li><a href="#" className="hover:text-white transition">About</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition">Press</a></li>
                        </ul>
                    </div>

                    {/* Resources & Social Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-3">Resources</h3>
                        <ul className="space-y-2 text-lg mb-8">
                            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition">Community</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>

                    </div>

                    {/* social links */}

                    <div className="lg:mx-10">
                        <h3 className="text-white text-xl font-semibold mb-5">Social Links</h3>
                        <div className="flex gap-4 justify-start">
                            <a className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t w-11/12 mx-auto border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-md">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                        <a href="#" className="hover:text-white transition">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;