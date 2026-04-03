import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-background/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-500/5" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-teal-400 bg-clip-text text-transparent leading-tight">
            Bhavesh Sharma
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            Video Editor – <span className="text-teal-400">1 Year of Experience</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Turning raw footage into <span className="text-teal-400">captivating stories</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-xl"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-6 text-lg rounded-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}