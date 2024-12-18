export function Footer() {
    return (
        <>
            <div className="h-auto flex flex-col justify-center items-center bg-muted mt-20 py-6 gap-4">
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold">Gabriel Nunes</h3>
                    <p className="text-sm text-muted-foreground">Desenvolvedor Fullstack</p>
                </div>

                <div className="flex gap-4">
                    <a 
                        href="https://github.com/gabrielmslima" 
                        target="_blank" 
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/gabriel-nunes-6bb365297/" 
                        target="_blank" 
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/gabriel-nunes-6bb365297/" 
                        target="_blank" 
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        Gmail
                    </a>
                </div>

                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Gabriel Nunes. Código fonte disponivel no <a href="https://github.com/gabrielmslima/portfolio-web" target="_blank" className="text-primary underline">github</a>.
                </p>
            </div>

            <div className="h-14 bg-muted lg:hidden md:hidden" />
        </>
    )
}