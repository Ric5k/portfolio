<script>
	//import Footer from "../components/footer.svelte";


    const tagline = "SvelteKit & TypeScript Front-End Specialist";
    const skills = [
        { title: "Front-End Engineering", description: "Deep expertise in Svelte/SvelteKit, building high-performance, accessible, and reactive user interfaces.", tech: ["SvelteKit", "TypeScript", "Tailwind CSS"] },
        { title: "Backend Engineering", description: "From low-fidelity wireframes to polished prototypes using Figma, focusing on user-centered design principles.", tech: ["Rust", "MySQL", "axum"] },
        { title: "Deployment & Infrastructure", description: "Implementing robust CI/CD pipelines (GitHub Actions) and handling deployment via Vercel/Cloudflare Pages.", tech: ["Vercel", "Netlify", "Docker", "CI/CD"] }
    ];

    const projects = [
        { 
            name: "gfo", 
            desc: "gfo is a lightweight, high-performance command-line tool written in Rust that provides deep insights into your Git repositories. It analyzes commit history to identify which files are being changed the most and who the key owners of specific files are.", 
            tech: ["Rust", "CLI", "oss"], 
            link: "https://github.com/Ric5k/gfo" 
        },
        { 
            name: "Headless Commerce Platform", 
            desc: "Developed a scalable, SEO-optimized e-commerce storefront integrated with a headless CMS.", 
            tech: ["Next.js", "GraphQL", "Sanity"], 
            link: "https://github.com/taroyamada/commerce-platform"
        },
    ];
</script>
<div class="min-h-screen text-gray-900">
       <main class="max-w-7xl mx-auto px-16">
        
        <section id="about" class="pt-24 pb-20 mb-20 border-b-2 border-black">
            <h1 class="text-7xl font-bold leading-tight max-w-5xl mb-6">
                I transform <span class="text-gray-400 font-extralight">complex data</span> into
                <span class="text-blue-600">intuitive and fast</span> user experiences.
            </h1>
            <h2 class="text-2xl font-medium text-gray-700 max-w-4xl">
                {tagline}
            </h2>
        </section>

        <section id="skills" class="mb-20">
            <h3 class="text-xl font-bold mb-10 pb-2 border-b-2 border-black uppercase tracking-widest text-gray-700">Expertise</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                {#each skills as skill}
                    <div class="space-y-4">
                        <h4 class="text-2xl font-bold tracking-tight">{skill.title}</h4>
                        <p class="text-gray-600 text-base">{skill.description}</p>
                        
                        <div class="pt-2">
                            {#each skill.tech as tech}
                                <span class="inline-block bg-gray-50 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-sm mr-2 mb-2 border border-gray-200">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <section id="projects" class="mb-20">
            <h3 id="work" class="text-xl font-bold mb-10 pb-2 border-b-2 border-black uppercase tracking-widest text-gray-700">Selected Work</h3>
            
            <div class="space-y-12">
                {#each projects as project}
                    <div class="group py-4 px-6 -mx-6 transition duration-300 hover:bg-yellow-50 rounded-lg border-l-4 border-transparent hover:border-black">
                        <div class="flex justify-between items-start">
                            <div>
                                <h4 class="text-3xl font-semibold mb-2 group-hover:text-black transition">
                                    {project.name}
                                </h4>
                                <p class="text-lg text-gray-600 mb-3 max-w-4xl">{project.desc}</p>
                            </div>
                            <a href={project.link} target="_blank" class="text-lg font-medium text-gray-900 group-hover:text-black ml-8 ">
                                View →
                            </a>
                        </div>
                        
                        <div class="flex items-center space-x-2">
                             {#each project.tech as tech}
                                <span class="text-xs font-mono text-gray-500">
                                    {tech}
                                </span>
                                {#if tech !== project.tech[project.tech.length - 1]}
                                    <span class="text-gray-300">/</span>
                                {/if}
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    </main>
</div>