import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { 
  Music, 
  Lightbulb, 
  RotateCw, 
  Gift, 
  Check, 
  X, 
  MessageCircle, 
  Star, 
  Clock,
  ThumbsUp,
  MessageSquare,
  Share2,
  MapPin,
  Truck,
  PackageCheck,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Assets
import octopusHero from "@assets/pulpo_hero_real.jpg";
import octopusGif from "@assets/pulpo_dancing.gif";
import bgChristmas from "@assets/generated_images/elegant_christmas_background_texture_with_red_and_gold_bokeh.png";
import babyPlaying from "@assets/generated_images/happy_baby_playing_with_a_toy_on_the_floor_in_a_christmas_setting.png";
import giftBox from "@assets/generated_images/magical_open_christmas_gift_box_with_light_emerging.png";

const textureBg = "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764019504/sabri-tuzcu-rYnQwRsNpE0-unsplash_ihkdgx.jpg";

const galleryImages = [
  "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017997/6555157a76b113_irfaws.jpg",
  "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017998/6555157a76b1134_jd2rte.jpg",
  "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017997/6555157a76b11354_tfw6fq.jpg",
  "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017996/6555157a76b10_hf0gww.jpg",
  "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764018000/6555157a76b113543322_ueyqg7.jpg",
  "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017996/6555157a76b11_vs7uth.jpg",
  "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017999/6555157a76b1135433_dp6qtp.jpg"
];

// Mock Data for Testimonials
const testimonials = [
  {
    name: "Ana María Flores",
    time: "hace 2 horas",
    comment: "¡Me encantó! Llegó súper rápido a Lima y a mi bebé le fascina. Lo mejor es que se mueve solo y esquiva los muebles. 100% recomendado para Navidad. 🎄",
    likes: 24,
    avatar: "AF"
  },
  {
    name: "Carla Mendoza",
    time: "hace 5 horas",
    comment: "Estaba buscando algo para estimular el gateo de mi hijo de 8 meses y esto fue la solución mágica. Se ríe a carcajadas cuando el pulpo se escapa.",
    likes: 18,
    avatar: "CM"
  },
  {
    name: "Patricia Torres",
    time: "hace 1 día",
    comment: "La calidad es muy buena, se nota que es resistente porque mi hija ya lo tiró un par de veces y sigue perfecto. ¡Gracias por el envío rápido!",
    likes: 45,
    avatar: "PT"
  },
  {
    name: "Lucía Vargas",
    time: "hace 1 día",
    comment: "Lo compré para mi sobrino y fue el éxito de la fiesta. Todos los niños querían jugar con el pulpo. Muy divertido y la música es pegajosa.",
    likes: 32,
    avatar: "LV"
  },
  {
    name: "Fiorella Castillo",
    time: "hace 2 días",
    comment: "Excelente atención por WhatsApp. Tenía dudas sobre el envío a provincia (soy de Arequipa) y me explicaron todo. Llegó en 2 días.",
    likes: 12,
    avatar: "FC"
  },
  {
    name: "Gabriela Rivas",
    time: "hace 3 días",
    comment: "¡Es adorable! 😍 Las luces no son fuertes así que no molestan a los ojos del bebé. Muy bien pensado el diseño.",
    likes: 56,
    avatar: "GR"
  },
  {
    name: "Rocío Quispe",
    time: "hace 3 días",
    comment: "Precio justo para lo que hace. He visto otros juguetes más caros que no hacen ni la mitad. Vale la pena totalmente.",
    likes: 9,
    avatar: "RQ"
  },
  {
    name: "Vanessa López",
    time: "hace 4 días",
    comment: "Mi bebé de 1 año no quería gatear y con esto se animó en una semana. ¡Estoy feliz! Gracias PulpoMusic.",
    likes: 89,
    avatar: "VL"
  },
  {
    name: "Katia Silva",
    time: "hace 5 días",
    comment: "Compré 2, uno para mi hijo y otro para regalo. La presentación de la caja es bonita, lista para regalar.",
    likes: 15,
    avatar: "KS"
  },
  {
    name: "Marisol Chávez",
    time: "hace 1 semana",
    comment: "Funciona perfecto en piso laminado y alfombra delgada. Muy buena compra.",
    likes: 21,
    avatar: "MC"
  }
];

const CountdownTimer = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set deadline to 2 days from now for demo purposes
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 48);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = deadline.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1 font-mono text-sm font-bold text-red-600">
      <span>{String(time.days).padStart(2, '0')}d</span>:
      <span>{String(time.hours).padStart(2, '0')}h</span>:
      <span>{String(time.minutes).padStart(2, '0')}m</span>:
      <span>{String(time.seconds).padStart(2, '0')}s</span>
    </div>
  );
};

const PurchaseModal = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    province: "",
    district: "",
    address: "",
    quantity: "1",
    color: "Verde"
  });

  const prices = {
    "1": { price: 59.99, oldPrice: 99.99, label: "1 Unidad" },
    "2": { price: 89.99, oldPrice: 159.99, label: "2 Unidades" },
    "3": { price: 129.99, oldPrice: 199.99, label: "3 Unidades" }
  };

  const colors = ["Verde", "Rosa", "Amarillo"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPrice = prices[formData.quantity as keyof typeof prices];
    const message = `Hola, quiero pedir el Pulpo Bailarín con la oferta navideña. 🐙🎁%0A%0A*Mi Pedido:*%0A📦 Cantidad: ${selectedPrice.label}%0A🎨 Color: ${formData.color}%0A💰 Precio Total: S/ ${selectedPrice.price}%0A%0A*Mis Datos:*%0A👤 Nombre: ${formData.fullName}%0A📍 Departamento: ${formData.department}%0A🏙️ Provincia: ${formData.province}%0A🏘️ Distrito: ${formData.district}%0A🏠 Dirección/Ref: ${formData.address}`;
    window.open(`https://wa.me/51954597114?text=${message}`, '_blank');
    onOpenChange(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary text-center">¡Casi es tuyo! 🎁</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Personaliza tu pedido y completa tus datos.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          
          {/* Quantity Selection */}
          <div className="grid gap-2">
            <Label>Elige la Oferta</Label>
            <div className="grid gap-2">
              {Object.entries(prices).map(([qty, details]) => (
                <div key={qty} className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.quantity === qty ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/30'}`} onClick={() => setFormData({...formData, quantity: qty})}>
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="quantity" 
                      value={qty} 
                      checked={formData.quantity === qty}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900">{details.label}</span>
                      {qty === "2" && <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full w-fit">¡Más Vendido!</span>}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg text-primary">S/ {details.price}</div>
                    <div className="text-sm text-gray-400 line-through">S/ {details.oldPrice}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="grid gap-2">
            <Label>Elige el Color</Label>
            <div className="flex gap-3">
              {colors.map((color) => (
                <div 
                  key={color}
                  onClick={() => setFormData({...formData, color})}
                  className={`flex-1 p-3 rounded-xl border-2 cursor-pointer text-center transition-all ${formData.color === color ? 'border-primary bg-primary text-white' : 'border-gray-100 hover:border-gray-200'}`}
                >
                  <div className="font-medium text-sm">{color}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-2 mt-2">
            <Label htmlFor="fullName">Nombre Completo</Label>
            <Input id="fullName" name="fullName" required placeholder="Ej. Juan Pérez" value={formData.fullName} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="department">Departamento</Label>
              <Input id="department" name="department" required placeholder="Ej. Lima" value={formData.department} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="province">Provincia</Label>
              <Input id="province" name="province" required placeholder="Ej. Lima" value={formData.province} onChange={handleChange} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="district">Distrito</Label>
            <Input id="district" name="district" required placeholder="Ej. Miraflores" value={formData.district} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Dirección Exacta / Referencia</Label>
            <Textarea id="address" name="address" required placeholder="Av. Larco 123, frente al parque..." value={formData.address} onChange={handleChange} />
          </div>
          <Button type="submit" size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold gap-2 mt-2">
            <MessageCircle className="w-5 h-5" /> Pedir Ahora (S/ {prices[formData.quantity as keyof typeof prices].price})
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <PurchaseModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-border/50 shadow-sm h-16 flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto w-full rounded-b-2xl mt-0 md:mt-2 md:w-[95%]">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-2xl font-serif font-bold text-primary tracking-tight">PulpoMusic</span>
          <div className="hidden sm:flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full border border-red-100">
            <Clock className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Oferta termina en:</span>
            <CountdownTimer />
          </div>
        </div>
        <Button 
          size="sm" 
          onClick={() => setIsModalOpen(true)}
          className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full font-medium shadow-lg shadow-primary/20"
        >
          Comprar Ahora
        </Button>
      </nav>

      {/* Hero Section (Attention) */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FDFBF7]">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
           <img src={bgChristmas} alt="Background" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left order-2 md:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/5 text-primary rounded-full text-xs md:text-sm font-bold uppercase tracking-widest border border-primary/10">
                <Star className="w-4 h-4 fill-primary" />
                <span>Edición Limitada Navidad 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1] text-foreground mb-6 tracking-tight">
                El Regalo <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Perfecto.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
                Diseñado para estimular, entretener y crear sonrisas. El compañero de desarrollo que tu bebé amará desde el primer día.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-10 rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105 font-medium"
                >
                  Comprar Ahora
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => scrollToSection('features')}
                  className="h-14 px-10 rounded-full border-primary/20 text-primary hover:bg-primary/5 font-medium"
                >
                  Ver Detalles
                </Button>
              </div>
              
              <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground">
                 <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                       {[1,2,3,4].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                         </div>
                       ))}
                    </div>
                    <div className="flex flex-col">
                       <span className="font-bold text-foreground">4.9/5</span>
                       <span className="text-xs">de 1,500+ reseñas</span>
                    </div>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center order-1 md:order-2"
            >
              <div className="relative z-10 w-full aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-black">
                <video 
                  src="https://res.cloudinary.com/ddv1tjskb/video/upload/v1764020717/AQNxMt-ySn_J4pFmuewAxvM7DzRoF1X0Ja5oGn4v-ZehAPLbBGpBaSGgOfJhQQ4mEmm4YC3iyLkHF83ZNwg229D4jIL-4m2vvNkkH-acJQ_hulgae.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Glassmorphism Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-xl text-white shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-medium text-white/80 uppercase tracking-wider">Oferta Especial</p>
                      <p className="text-xl font-serif font-bold">S/ 59.99</p>
                    </div>
                    <Button size="sm" onClick={() => setIsModalOpen(true)} className="bg-white text-primary hover:bg-white/90 rounded-full text-xs font-bold px-4">
                      Pedir
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Background blobs */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section - NEW */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Galería Exclusiva</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">Descubre cada detalle de nuestro diseño premium, pensado para la seguridad y diversión de tu bebé.</p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((img, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-0 shadow-none">
                      <CardContent className="flex aspect-square items-center justify-center p-0 rounded-2xl overflow-hidden relative group">
                        <img 
                          src={img} 
                          alt={`Vista ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
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
                icon: <RotateCw className="w-8 h-8 text-white" />,
                title: "Movimiento 360°",
                desc: "Se mueve automáticamente esquivando obstáculos, motivando al bebé a perseguirlo.",
                image: "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017996/6555157a76b10_hf0gww.jpg",
                color: "from-secondary/80 to-secondary"
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-white" />,
                title: "Luces LED Suaves",
                desc: "Estimulación visual segura que capta la atención sin dañar la vista.",
                image: "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017997/6555157a76b113_irfaws.jpg",
                color: "from-primary/80 to-primary"
              },
              {
                icon: <Music className="w-8 h-8 text-white" />,
                title: "Música Dinámica",
                desc: "Melodías alegres que desarrollan el sentido auditivo y el ritmo.",
                image: "https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017998/6555157a76b1134_jd2rte.jpg",
                color: "from-[#4CAF50]/80 to-[#4CAF50]"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all group h-[400px] flex flex-col justify-end"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} via-transparent to-transparent opacity-90`} />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 text-white">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desire Section (Emotional) + GIF */}
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
              
              {/* Before/After Image */}
              <div className="relative z-10">
                <img 
                  src="https://res.cloudinary.com/ddv1tjskb/image/upload/v1764018694/Screenshot_6_kylcor.jpg" 
                  alt="Comparación Antes y Después" 
                  className="rounded-2xl shadow-xl w-full object-cover border-2 border-white"
                />
              </div>
              
              {/* Quote card */}
              <div className="absolute -bottom-8 md:-right-8 left-8 right-8 md:left-auto md:w-80 bg-white p-6 rounded-xl shadow-xl border border-border/50 z-20">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />)}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">"¡Increíble! Mi hijo de 1 año no paraba de llorar por aburrimiento, ahora se pasa horas persiguiendo al pulpo. ¡Ya gatea!"</p>
                <p className="text-xs font-bold text-primary">- María G. (Lima)</p>
              </div>
            </motion.div>

            <div className="pt-10 md:pt-0">
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

      {/* Shipping Section - NEW */}
      <section className="py-20 bg-[#FDFBF7] relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src={textureBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-widest">
                  <Truck className="w-4 h-4" />
                  <span>Envíos a Todo el Perú</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  Llegamos a la puerta de tu casa, <span className="text-primary">estés donde estés.</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nos encargamos de que tu pedido llegue seguro y rápido. Trabajamos con las mejores agencias de envío para garantizar tu entrega.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4 items-start">
                     <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                        <Clock className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">Rapidez Garantizada</h4>
                        <p className="text-muted-foreground">Lima: 24 horas. Provincia: 48-72 horas.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                        <ShieldCheck className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">Compra Segura</h4>
                        <p className="text-muted-foreground">Emitimos boleta y te enviamos foto de tu guía de remisión.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 text-yellow-600">
                        <PackageCheck className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">Embalaje Protegido</h4>
                        <p className="text-muted-foreground">Tu pulpo viaja protegido para llegar en perfectas condiciones.</p>
                     </div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-10 rounded-full shadow-xl shadow-primary/20 w-full md:w-auto"
                >
                  Hacer mi Pedido Ahora
                </Button>
             </div>

             <div className="order-1 md:order-2 relative">
                {/* Image Collage */}
                <div className="relative z-10 grid grid-cols-2 gap-4">
                   <motion.div 
                     whileHover={{ y: -5 }}
                     className="col-span-2 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-1"
                   >
                      <img 
                        src="https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017950/WhatsApp_Image_2025-11-24_at_15.58.04_vjc1x3.jpg" 
                        alt="Envíos a todo el Perú" 
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                         <p className="text-white font-bold text-sm flex items-center gap-2">
                           <Check className="w-4 h-4 text-green-400" /> Envíos Diarios a Provincia
                         </p>
                      </div>
                   </motion.div>
                   
                   <motion.div 
                     whileHover={{ y: -5 }}
                     className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-2 md:translate-y-[-20px]"
                   >
                      <img 
                        src="https://res.cloudinary.com/ddv1tjskb/image/upload/v1764017949/WhatsApp_Image_2025-11-24_at_15.58.04_1_j4iebx.jpg" 
                        alt="Comprobantes de Envío" 
                        className="w-full h-48 object-cover"
                      />
                   </motion.div>

                   <div className="hidden md:flex col-span-1 bg-white rounded-2xl shadow-xl border-4 border-white p-6 flex-col justify-center items-center text-center rotate-2">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                         <MapPin className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-bold text-gray-900">Cobertura Total</h4>
                      <p className="text-xs text-gray-500 mt-1">Llegamos a todos los distritos de Lima y provincias del Perú.</p>
                   </div>
                </div>

                {/* Decorative Background */}
                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl -z-10 transform scale-110" />
             </div>
          </div>
        </div>
      </section>

      {/* Facebook Testimonials Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply">
            <img src={textureBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              Mamás Felices Comparten su Experiencia
            </h2>
            <div className="flex items-center justify-center gap-2 text-primary">
              <ThumbsUp className="w-5 h-5 fill-primary" />
              <span className="font-medium">Más de 1,500 clientes satisfechos</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="bg-[#F0F2F5] px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <span className="font-semibold text-gray-700">Comentarios recientes</span>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                   <span>Ordenar por:</span>
                   <span className="font-bold text-gray-700">Más relevantes ▼</span>
                </div>
             </div>
             <div className="p-6 space-y-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="flex gap-3">
                     <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-md">
                           {t.avatar}
                        </div>
                     </div>
                     <div className="flex-1">
                        <div className="bg-[#F0F2F5] rounded-2xl rounded-tl-none px-4 py-3 inline-block">
                           <h4 className="font-bold text-gray-900 text-sm hover:underline cursor-pointer">{t.name}</h4>
                           <p className="text-gray-800 text-[0.95rem] mt-1 leading-snug">{t.comment}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-1 ml-2 text-xs text-gray-500 font-medium">
                           <button className="hover:underline">Me gusta</button>
                           <button className="hover:underline">Responder</button>
                           <span>{t.time}</span>
                        </div>
                     </div>
                     <div className="hidden sm:flex flex-col items-center justify-center gap-1 text-gray-400">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-xs">{t.likes}</span>
                     </div>
                  </div>
                ))}
             </div>
             <div className="p-4 border-t border-gray-200 bg-gray-50 text-center">
                <Button variant="ghost" className="w-full text-primary font-bold">
                   Ver 142 comentarios más
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Action Section (Offer) */}
      <section id="offer" className="py-24 relative text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://res.cloudinary.com/ddv1tjskb/image/upload/v1764021180/elena-mozhvilo-zpXN5br96DU-unsplash_sff1xe.jpg" 
             alt="Christmas Background" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/60" /> 
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-bold mb-6 animate-pulse">
                  <Clock className="w-4 h-4" /> ¡Oferta Limitada de Navidad!
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                  Regala Alegría esta Navidad
                </h2>
                <p className="text-white/90 text-lg mb-8 font-medium">
                  El paquete incluye: Pulpo Bailarín + 3 Pilas de Regalo.
                </p>
                
                <div className="flex items-baseline gap-4 mb-8 justify-center md:justify-start">
                  <span className="text-5xl font-bold text-secondary">S/ 59.99</span>
                  <span className="text-2xl text-white/50 line-through decoration-2">S/ 99.99</span>
                </div>

                <div className="flex flex-col gap-4">
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto bg-white text-primary hover:bg-white/90 text-xl h-16 rounded-full font-bold shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-3"
                    onClick={() => setIsModalOpen(true)}
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
          onClick={() => setIsModalOpen(true)}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center p-0 animate-bounce-slow"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}
