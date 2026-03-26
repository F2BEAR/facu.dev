export default function Resumee() {
  return (
    <section
      className="mt-8 flex lg:w-5xl w-full flex-col justify-around animate-fadeIn gap-8 lg:flex-row lg:rounded-lg bg-[#10131a] p-8"
      id="experience"
    >
      <div>
        <h3 className="text-2xl font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
          <span className="w-8 h-px bg-cyan"></span> Experience
        </h3>
        <div className="space-y-8 relative ml-4 pl-13">
          <div className="absolute left-[3.5px] top-2 bottom-2 w-px bg-linear-to-b from-cyan via-outline-variant to-transparent"></div>
          <div className="relative">
            <div className="absolute -left-13.5 w-2.5 h-2.5 bg-cyan rounded-full shadow-[0_0_10px_#00fbfb]"></div>
            <span className="text-[10px] font-headline font-bold text-cyan tracking-widest uppercase align-text-top">
              Sept. 2021 / Feb. 2026
            </span>
            <h4 className="text-xl font-bold mt-2">Full-Stack Web Developer</h4>
            <p className="font-medium text-gray-200">Take-off Media</p>
          </div>
          <div className="relative">
            <div className="absolute -left-13.5 top-1 w-2.5 h-2.5 bg-white rounded-full"></div>
            <span className="text-[10px] font-bold text-gray-200 tracking-widest uppercase align-text-top">
              Feb. 2021 / Sept. 2021{" "}
            </span>
            <h4 className="text-xl font-bold mt-2">
              Application Support level 2 and 3
            </h4>
            <p className="text-gray-200 font-medium">
              Tata Consultancy Services
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-13.5 top-1 w-2.5 h-2.5 bg-white/60 rounded-full"></div>
            <span className="text-[10px] font-bold text-gray-200 tracking-widest uppercase align-text-top">
              Jan. 2020 / Feb. 2021{" "}
            </span>
            <h4 className="text-xl font-bold mt-2">
              Quality Assurance Tester (UAT)
            </h4>
            <p className="text-gray-200 font-medium">
              Tata Consultancy Services
            </p>
          </div>
        </div>
      </div>
      <div id="skills">
        <h3 className="text-2xl font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
          <span className="w-8 h-px bg-cyan"></span> Skillset
        </h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-[10px] font-headline font-bold text-on-surface-variant tracking-[0.2em] uppercase mb-4">
              Front-end
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                React.js
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                Next.js
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                Tailwind CSS
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-headline font-bold text-on-surface-variant tracking-[0.2em] uppercase mb-4">
              Back-end
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                Node.js
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                Deno
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                Express
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                PostgreSQL
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                MongoDB
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-headline font-bold text-on-surface-variant tracking-[0.2em] uppercase mb-4">
              Tools &amp; CI/CD
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                Jest
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                Docker
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                GitHub Actions
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                AWS
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                Kubernetes
              </span>
              <span className="px-3 py-1 bg-[#32353c] rounded-full text-xs font-medium border border-outline-variant/10">
                GIT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
