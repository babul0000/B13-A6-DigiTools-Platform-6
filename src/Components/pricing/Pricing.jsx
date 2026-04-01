const Pricing = () => {
    return (
        <section className="bg-white pt-2 pb-12 px-6 relative ">
            <div className="text-center pb-12">
                <h2 className="text-5xl font-bold">Simple, Transparent Pricing</h2>
                <p className="text-2xl font-semibold">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Starter Card */}
                    <div className="border border-gray-200 rounded-3xl p-10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Starter</h3>
                            <p className="text-gray-600 mb-4">Perfect for getting started</p>
                            
                            <div className="flex items-baseline mb-6">
                                <span className="text-6xl font-bold">$0</span>
                                <span className="text-xl text-gray-400 ml-2">/Month</span>
                            </div>
                            
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Access to 10 free tools</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic templates</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Community support</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1 project per month</li>
                            </ul>
                        </div>
                        
                        <button className="btn bg-primary  text-white px-8 py-4 rounded-full font-bold text-lg mt-12 w-full">
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro Card */}
                    <div className="border border-gray-200 rounded-3xl p-10 flex flex-col justify-between bg-primary text-white  hover:text-black transition duration-300 ">
                        <div>
                            <div className="flex items-center justify-between space-y-2">
                                <h3 className="text-2xl font-bold">Pro</h3>
                                <span className="text-black bg-[#FFC64C] text-xs font-bold px-4 lg:px-6 lg:py-2  rounded-full lg:absolute lg:top-30 lg:left-[45%]">Most Popular</span>
                            </div>
                            <p className="  mb-2">Best for professionals</p>
                            
                            <div className="flex items-baseline mb-4">
                                <span className="text-6xl font-bold">$29</span>
                                <span className="text-xl text-gray-400  ml-2">/Month</span>
                            </div>
                            
                            <ul className="space-y-3 text-lg">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Access to all premium tools</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited templates</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited projects</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Cloud sync</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                            </ul>
                        </div>
                        
                        <button className="btn bg-white text-indigo-500 px-8 py-2 rounded-full font-bold text-lg mt-2 hover:bg-indigo-500 hover:text-white transition w-full">
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Enterprise Card */}
                    <div className="border border-gray-200 rounded-3xl p-10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                            <p className="text-gray-600 mb-4">For teams and businesses</p>
                            
                            <div className="flex items-baseline mb-6">
                                <span className="text-6xl font-bold">$99</span>
                                <span className="text-xl text-gray-400 ml-2">/Month</span>
                            </div>
                            
                            <ul className="space-y-3 text-lg">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Everything in Pro</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Team collaboration</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated support</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> SLA guarantee</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom branding</li>
                            </ul>
                        </div>
                        
                        <button className="btn bg-primary  text-white px-8 py-4 rounded-full font-bold text-lg mt-3 w-full">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;