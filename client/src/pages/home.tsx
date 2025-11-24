import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { 
  Music, 
  Lightbulb, 
  RotateCw, 
  Baby, 
  Gift, 
  Check, 
  X, 
  MessageCircle, 
  Star, 
  Clock 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Assets
import octopusHero from "@assets/generated_images/product_shot_of_a_cute_musical_dancing_octopus_toy_on_white_background.png";
import bgChristmas from "@assets/generated_images/elegant_christmas_background_texture_with_red_and_gold_bokeh.png";
import babyPlaying from "@assets/generated_images/happy_baby_playing_with_a_toy_on_the_floor_in_a_christmas_setting.png";
import giftBox from "@assets/generated_images/magical_open_christmas_gift_box_with_light_emerging.png";

export default function Home() {
  const [, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50 shadow-sm h-16 flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto w-full rounded-b-2xl mt-0 md:mt-2 md:w-[95%]">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-primary tracking-tight">PulpoMusic</span>
        </div>
        <Button 
          size="sm" 
          onClick={() => scrollToSection('offer')}
          className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full font-medium shadow-lg shadow-primary/20"
        >
          Comprar Ahora
        </Button>
      </nav>

      {/* Hero Section (Attention) */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           <img src={bgChristmas} alt="Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <div className="inline-block px-4 py-1.5 mb-6 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider border border-primary/20">
                🎁 El Regalo Viral de Esta Navidad
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-foreground mb-6">
                El Juguete que Hará <span className="text-primary italic">Reír</span> y <span className="text-primary italic">Moverse</span> a tu Bebé
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                Luces, música y movimiento automático para estimular el gateo y la coordinación de forma segura y divertida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('offer')}
                  className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-full shadow-xl shadow-primary/30 transition-all hover:scale-105"
                >
                  Quiero mi Pulpo Bailarín
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => scrollToSection('features')}
                  className="h-14 px-8 rounded-full border-primary/20 text-primary hover:bg-primary/5"
                >
                  Ver cómo funciona
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              {/* Decorative blobs */}
              <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full scale-75 animate-pulse" />
              
              <div className="relative z-10 w-full max-w-md aspect-square bg-white/40 backdrop-blur-sm rounded-[3rem] border border-white/60 shadow-2xl flex items-center justify-center p-8">
                <img 
                  src={octopusHero} 
                  alt="Pulpo Bailarín Musical" 
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-border rotate-12 animate-bounce duration-[3000ms]">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl">⭐</span>
                    <span className="font-bold text-xs uppercase tracking-wide mt-1 text-primary">Top Ventas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
              ¿Tu bebé se aburre rápido?
            </h2>
            <p className="text-xl text-muted-foreground italic">
              “Muchos papás buscan cómo estimular el gateo de forma segura y divertida, pero los juguetes tradicionales no logran captar su atención...”
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <RotateCw className="w-8 h-8 text-secondary-foreground" />,
                title: "Movimiento 360°",
                desc: "Se mueve automáticamente esquivando obstáculos, motivando al bebé a perseguirlo.",
                color: "bg-secondary"
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-primary-foreground" />,
                title: "Luces LED Suaves",
                desc: "Estimulación visual segura que capta la atención sin dañar la vista.",
                color: "bg-primary"
              },
              {
                icon: <Music className="w-8 h-8 text-white" />,
                title: "Música Dinámica",
                desc: "Melodías alegres que desarrollan el sentido auditivo y el ritmo.",
                color: "bg-[#4CAF50]" // Christmas Green
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-border bg-background shadow-lg hover:shadow-xl transition-all group"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desire Section (Emotional) */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-[2rem] rotate-3 scale-105" />
              <img 
                src={babyPlaying} 
                alt="Bebé feliz jugando" 
                className="relative rounded-[2rem] shadow-2xl w-full aspect-[4/3] object-cover border-4 border-white"
              />
              
              {/* Quote card */}
              <div className="absolute -bottom-8 md:-right-8 left-8 right-8 md:left-auto md:w-80 bg-white p-6 rounded-xl shadow-xl border border-border/50">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />)}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">"¡Increíble! Mi hijo de 1 año no paraba de llorar por aburrimiento, ahora se pasa horas persiguiendo al pulpo. ¡Ya gatea!"</p>
                <p className="text-xs font-bold text-primary">- María G. (Lima)</p>
              </div>
            </motion.div>

            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Más que un juguete, una herramienta de desarrollo
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-destructive">
                    <X className="w-5 h-5" /> ANTES (Juguetes comunes)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">🌑 Aburrimiento rápido</li>
                    <li className="flex items-center gap-2">🌑 Poco movimiento físico</li>
                    <li className="flex items-center gap-2">🌑 Llanto por falta de estímulo</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-secondary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
                    SOLUCIÓN
                  </div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-600">
                    <Check className="w-5 h-5" /> DESPUÉS (Pulpo Bailarín)
                  </h3>
                  <ul className="space-y-2 text-foreground font-medium">
                    <li className="flex items-center gap-2">✨ Risas y diversión constante</li>
                    <li className="flex items-center gap-2">✨ Estimulación del gateo y músculos</li>
                    <li className="flex items-center gap-2">✨ Curiosidad y exploración autónoma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section (Offer) */}
      <section id="offer" className="py-24 relative bg-primary text-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
           <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-[3rem] border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-bold mb-6 animate-pulse">
                  <Clock className="w-4 h-4" /> ¡Oferta Limitada de Navidad!
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                  Regala Alegría esta Navidad
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  El paquete incluye: Pulpo Bailarín + Pilas de Regalo + Envoltorio Navideño.
                </p>
                
                <div className="flex items-baseline gap-4 mb-8 justify-center md:justify-start">
                  <span className="text-5xl font-bold text-secondary">S/ 89.00</span>
                  <span className="text-2xl text-white/50 line-through decoration-2">S/ 140.00</span>
                </div>

                <div className="flex flex-col gap-4">
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto bg-white text-primary hover:bg-white/90 text-xl h-16 rounded-full font-bold shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-3"
                    onClick={() => window.open('https://wa.me/51999999999?text=Hola,%20quiero%20el%20Pulpo%20Bailarín%20con%20la%20oferta%20navideña', '_blank')}
                  >
                    <Gift className="w-6 h-6" /> Comprar Ahora
                  </Button>
                  <p className="text-sm text-white/70 flex items-center justify-center md:justify-start gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Quedan solo 12 unidades con descuento
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2 relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <img 
                    src={giftBox} 
                    alt="Caja de regalo mágica" 
                    className="w-full drop-shadow-2xl transform scale-110"
                  />
                </motion.div>
                
                {/* Trust Badges */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center gap-4">
                  <div className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap flex items-center gap-2">
                    🚀 Envío Rápido
                  </div>
                  <div className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap flex items-center gap-2">
                    🔒 Compra Segura
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">PulpoMusic</h3>
          
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Envíos</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Garantía</a>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" className="rounded-full">
              <MessageCircle className="w-5 h-5" />
            </Button>
            {/* Mock social icons */}
            <Button variant="outline" size="icon" className="rounded-full">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 PulpoMusic. Todos los derechos reservados. <br/>
            Diseñado con ❤️ para bebés felices.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Sticky Footer) */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => window.open('https://wa.me/51999999999', '_blank')}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center p-0 animate-bounce-slow"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}
