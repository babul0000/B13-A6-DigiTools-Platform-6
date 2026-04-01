const Pricing = () => {
return (
    <section className="bg-[#F8FBFF] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Simple, Transparent Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex h-full flex-col justify-between rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <div>
                <h3 className="text-2xl font-semibold text-slate-900">Starter</h3>
                <p className="mt-2 text-sm text-slate-500">
                Perfect for getting started
                </p>

                <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-bold text-slate-900">$0</span>
                <span className="text-base text-slate-500">/Month</span>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span> Access to 10 free
                        tools
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span> Basic templates
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span> Community support
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span> 1 project per month
                </li>
                </ul>
            </div>

            <button className="mt-10 w-full rounded-full bg-[#6D2BF6] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#5a24cd]">
                Get Started Free
            </button>
            </div>

            <div className="relative flex h-full flex-col justify-between rounded-[32px] bg-gradient-to-b from-[#7645FF] to-[#4F39F6] p-8 text-white shadow-[0_20px_60px_rgba(79,57,246,0.24)]">
            <div>

                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFC64C] text-black text-md font-bold px-4 py-2 rounded-full whitespace-nowrap z-10">Most Popular</span>
            </div>

            <div className="pt-10">
                <h3 className="text-2xl font-semibold">Pro</h3>
                <p className="mt-2 text-sm text-slate-200">
                Best for professionals
                </p>

                <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-base text-slate-200">/Month</span>
                </div>

            <ul className="mt-8 space-y-3 text-sm text-slate-100">
                <li className="flex items-center gap-3">
                    <span className="text-[#8AE45F]">✓</span> Access to all
                    premium tools
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-[#8AE45F]">✓</span> Unlimited templates
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-[#8AE45F]">✓</span> Priority support
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-[#8AE45F]">✓</span> Unlimited projects
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-[#8AE45F]">✓</span> Cloud sync
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-[#8AE45F]">✓</span> Advanced analytics
                </li>
            </ul>
            </div>

            <button className="mt-10 w-full rounded-full bg-white px-6 py-3 text-base font-semibold text-[#4F39F6] transition hover:bg-slate-100">
                Start Pro Trial
            </button>
            </div>

            <div className="flex h-full flex-col justify-between rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                Enterprise
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                For teams and businesses
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-bold text-slate-900">$99</span>
                <span className="text-base text-slate-500">/Month</span>
              </div>

                <ul className="mt-8 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span> Everything in Pro
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span> Team collaboration
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span> Custom integrations
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span> Dedicated support
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span> SLA guarantee
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span> Custom branding
                </li>
                </ul>
            </div>

            <button className="mt-10 w-full rounded-full bg-[#6D2BF6] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#5a24cd]">
                Contact Sales
            </button>
            </div>
        </div>
        </div>
    </section>
    );
};

export default Pricing;
