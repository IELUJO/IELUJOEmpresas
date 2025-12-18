import React, { useState, useEffect } from 'react';
import { 
  Diamond, 
  Award, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Globe, 
  CheckCircle,
  Mail,
  Phone,
  Menu,
  X,
  ChevronDown,
  FileDown,
  Clock,
  MapPin,
  Mic,
  Megaphone
} from 'lucide-react';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';

// --- Constants ---
// NOTA: Para cambiar las imágenes, simplemente reemplaza las URL entre comillas a continuación.
// Asegúrate de que sean enlaces directos a la imagen.

// 1. Imagen de la sección "Quiénes Somos"
const ABOUT_IMAGE_URL = "https://www.ielujo.com/wp-content/uploads/2025/12/IMG_20251120_103731-scaled.jpg"; 

// 2. Imagen de fondo de la portada principal (Hero)
const HERO_IMAGE_URL = "https://www.ielujo.com/wp-content/uploads/2025/12/Traveliz1-1.jpg";


// --- Components defined inline for file efficiency, but organized ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para manejar el scroll suave manual
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calculamos la posición con un offset para el header fijo
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Quiénes Somos', href: '#about' },
    { name: 'Propuesta de Valor', href: '#value' },
    { name: 'Soluciones', href: '#solutions' },
    { name: 'Diferenciadores', href: '#differentiators' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 no-print ${isScrolled ? 'bg-luxury-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
           <a href="https://www.ielujo.com" className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity">
             <img 
               src="https://www.ielujo.com/wp-content/uploads/2025/12/0a0233b6-e5e5-4399-80ff-a83af1012adc.png" 
               alt="IELujo Logo" 
               className="h-8 md:h-10 w-auto object-contain" 
             />
             <div className="leading-none">
               <h1 className="font-serif text-lg md:text-xl tracking-widest text-white">IELujo</h1>
               <p className="text-[0.5rem] md:text-[0.6rem] text-gold-500 tracking-[0.2em] uppercase">Instituto Europeo del Lujo</p>
             </div>
           </a>
        </div>

        {/* Desktop Nav - Breakpoint changed to lg (1024px) to prevent overlap on tablets */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-500 transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/525579798650" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="px-6 py-2 text-xs whitespace-nowrap">Agendar Cita</Button>
          </a>
        </div>

        {/* Mobile Toggle - Visible up to lg breakpoint */}
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu - Visible up to lg breakpoint */}
      {isMenuOpen && (
        <div className="lg:hidden bg-luxury-black border-t border-white/10 absolute w-full p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-500 py-2 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/525579798650"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="inline-block mt-4"
          >
            <Button variant="outline" className="w-full text-center">Agendar Cita</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const handleScrollToSolutions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('solutions');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Luxurious Office */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE_URL}
          alt="Oficinas corporativas de lujo" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/40 to-luxury-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <div className="inline-block border border-gold-500/30 px-4 py-2 mb-8 bg-black/30 backdrop-blur-sm animate-[fadeInUp_1s_ease-out]">
          <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold">Sumario Ejecutivo</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight animate-[fadeInUp_1s_ease-out_0.2s_both]">
          Elevando el Estándar del Capital Humano <br />
          <span className="italic text-gold-500">en el Sector del Lujo</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 font-light mb-12 leading-relaxed animate-[fadeInUp_1s_ease-out_0.4s_both]">
          El Instituto Europeo del Lujo (IELujo) es la primera Escuela de Negocios especializada en el sector del lujo en México y América Latina, con cursos diseñados específicamente para empresas.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center animate-[fadeInUp_1s_ease-out_0.6s_both] no-print">
          <a href="#solutions" onClick={handleScrollToSolutions}>
            <Button>Soluciones In-Company</Button>
          </a>
          <a href="https://www.ielujo.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Conozca IELujo</Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 no-print">
        <ChevronDown size={32} />
      </div>
    </header>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-luxury-black relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-gold-500/30 rounded-sm transform translate-x-4 translate-y-4 hidden md:block"></div>
            {/* Updated image to corporate training/presentation context - High Visibility */}
            <img 
              src={ABOUT_IMAGE_URL}
              alt="Formación ejecutiva y presentación corporativa" 
              className="relative rounded-sm shadow-2xl w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <SectionHeading 
              subtitle="1. Quiénes Somos" 
              title="Expertos en Educación del Sector del Lujo" 
              align="left"
            />
            
            <div className="space-y-6 text-gray-300 font-light text-lg">
              <p>
                <strong className="text-white font-normal">El Instituto Europeo del Lujo (IELujo)</strong> es la institución líder y pionera en América Latina dedicada exclusivamente a la formación ejecutiva y consultoría en el sector del lujo. No somos una escuela generalista; somos los expertos en educación del sector del lujo.
              </p>
              <p>
                Nuestra misión es <span className="text-gold-500">profesionalizar la industria del lujo en la región</span>, transformando a los equipos de trabajo en verdaderos embajadores de marca que entiendan la sofisticación, la excelencia y la psicología del cliente de alto poder adquisitivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueProposition = () => {
  const props = [
    {
      icon: <Award className="text-luxury-black" size={32} />,
      title: "Especialización Pura",
      desc: "No adaptamos cursos genéricos. Creamos programas desde el lujo (Retail, Hospitalidad, Automoción, Joyería, Belleza, etc.) personalizados al ADN e identidad de su marca y en su sector específico."
    },
    {
      icon: <Users className="text-luxury-black" size={32} />,
      title: "Formadores expertos reconocidos",
      desc: "Nuestros docentes no son solo académicos; son o han sido directivos en activo de marcas de lujo líderes. Su equipo aprenderá de quienes lideran el mercado hoy."
    },
    {
      icon: <CheckCircle className="text-luxury-black" size={32} />,
      title: "Aval Académico",
      desc: "Aval IELujo con el prestigio del liderazgo en Latam desde hace más de 10 años. Avalado por la Dirección Académica de IELujo, certificada en competencia laboral (SEP-CONOCER). En nuestros diplomados ofrecemos certificaciones en colaboración con la Universidad Anáhuac México."
    }
  ];

  return (
    <section id="value" className="py-24 bg-white text-luxury-black">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="2. Propuesta de Valor" 
          title="Nuestra Propuesta de Valor para su Empresa" 
          light={false}
        />

        <p className="max-w-4xl mx-auto text-center text-gray-600 text-lg mb-16 leading-relaxed">
          En un mercado donde el producto es replicable pero la experiencia no, el factor humano es su ventaja competitiva más crítica. En IELujo ofrecemos soluciones de formación In-Company diseñadas para impactar directamente en sus KPIs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-10 group hover:bg-luxury-black hover:text-white transition-all duration-500 cursor-default border border-gray-100 page-break-avoid flex flex-col">
              <div className="w-16 h-16 bg-gold-200 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors shrink-0">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-gold-500 leading-tight">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "Habilidades Comerciales en el Lujo",
      desc: "Técnicas de venta relacional específicas del lujo para productos y servicios. Personalizadas a su marca, oferta y segmento. Comunicación y acompasamiento del cliente de lujo. Clienteling y CRM.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Luxury Customer Service",
      desc: "El lujo en los servicios, construcción de la experiencia, atención al cliente de lujo. Resolución de problemas y objeciones. Comunicación digital.",
      icon: <Users size={24} />
    },
    {
      title: "Luxury Retail Management",
      desc: "Store Management. KPIs y Rentabilidad. Liderazgo de Equipos. CRM y Clienteling",
      icon: <Briefcase size={24} />
    },
    {
      title: "Luxurización de marcas",
      desc: "Análisis de Identidad de marca. Estrategias de desarrollo de atributos de lujo. Optimización de la experiencia.",
      icon: <Diamond size={24} />
    },
    {
      title: "Conferencias y Talleres sobre el Lujo",
      desc: "El concepto y significado del lujo. Marketing del Lujo. El consumidor del Lujo. El lujo por generación. La sostenibilidad en el lujo.",
      icon: <Mic size={24} />
    },
    {
      title: "La Comunicación y el Marketing del Lujo",
      desc: "Análisis del ADN de identidad de marca. Las antileyes del marketing del lujo. El Luxury Buyer Persona. RRSS y comunicación digital en el Lujo. El plan de marketing en el lujo.",
      icon: <Megaphone size={24} />
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <span className="text-gold-500 font-bold tracking-widest uppercase mb-4 block">3. Soluciones Corporativas</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">In-Company</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Diseñamos "trajes a la medida" para las necesidades específicas de su organización, en modalidades presenciales, online en vivo o híbridas.
              </p>
              <a href="mailto:empresas@ielujo.com?subject=Solicitud%20de%20Brochure%20Corporativo" className="no-print inline-block">
                <Button>Solicitar Brochure</Button>
              </a>
            </div>
          </div>

          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {solutions.map((sol, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 hover:border-gold-500/50 transition-colors duration-300 backdrop-blur-sm page-break-avoid">
                <div className="text-gold-500 mb-4">{sol.icon}</div>
                <h3 className="text-xl font-serif text-white mb-3">{sol.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Differentiators = () => {
  const brands = [
    "Palacio de Hierro", "Caliente Casinos", "Rosewood Mayakoba", "Loewe", 
    "Dior Perfumes", "Kérastase", "La Prairie", "Grupo Richemont", "Grupo Ultra", 
    "Lancôme", "Mercedes-Benz", "Lexus", "Porsche", "Hajj Designless", "Henkel", 
    "Armani Beauty", "LVMH Group", "CT Scanner", "Kiehl's", "Avolta/Dufry", 
    "ABC", "Mido", "Rancho Atalaya", "Traveliz"
  ];

  return (
    <section id="differentiators" className="py-24 bg-white text-luxury-black">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="4. Por qué elegirnos" 
          title="Diferenciadores" 
          light={false} 
        />
        
        <div className="grid md:grid-cols-3 gap-12 text-center mb-20">
            {/* Track Record */}
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 border border-gold-500 rounded-full flex items-center justify-center mb-6 text-gold-600">
                    <CheckCircle size={36} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Track Record Comprobado</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Hemos capacitado exitosamente a equipos de El Palacio de Hierro, L'Oréal, Richemont, Rosewood, y más.
                </p>
            </div>

            {/* Aplicación Inmediata */}
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 border border-gold-500 rounded-full flex items-center justify-center mb-6 text-gold-600">
                    <Clock size={36} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Aplicación Inmediata</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Metodología práctica enfocada en la transferencia de habilidades al puesto de trabajo desde el día 1.
                </p>
            </div>

            {/* Visión Glocal */}
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 border border-gold-500 rounded-full flex items-center justify-center mb-6 text-gold-600">
                    <MapPin size={36} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Visión Glocal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Entendemos los códigos del lujo europeo, pero somos expertos en la cultura y el consumidor latinoamericano.
                </p>
            </div>
        </div>

        <div className="border-t border-gray-100 pt-16">
            <p className="uppercase tracking-[0.3em] text-xs font-bold text-gray-400 mb-12 text-center">
            Empresas Capacitadas Exitosamente
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60">
            {brands.map((brand, idx) => (
                <span key={idx} className="text-xl md:text-2xl font-serif text-gray-800 hover:text-gold-600 transition-colors cursor-default">
                {brand}
                </span>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Abstract Gold shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div id="contact" className="max-w-4xl mx-auto bg-luxury-charcoal border border-white/10 p-12 md:p-16 text-center">
          <SectionHeading subtitle="5. Contacto y Siguiente Paso" title="Impulse su Rentabilidad" />
          
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            El lujo es excelencia, y la excelencia requiere entrenamiento. El lujo se rige por reglas diferentes y a veces opuestas al mercado generalista o premium. No es intuitivo, es disruptivo. Necesita de una formación específica del sector por capacitadores expertos. Permítanos diseñar el programa que llevará a su equipo al siguiente nivel de profesionalización para impulsar su rentabilidad.
          </p>

          <div id="contact-info" className="flex flex-col items-center justify-center mb-12 space-y-2">
             <h4 className="text-2xl font-serif text-gold-500">Amparo de la Concepción</h4>
             <p className="text-sm uppercase tracking-widest text-gray-400">Directora Académica y de Formación Corporativa</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-500 mb-4">
                 <Mail size={20} />
               </div>
               <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email</p>
               <a href="mailto:empresas@ielujo.com" className="text-white hover:text-gold-500 transition-colors">empresas@ielujo.com</a>
            </div>
            
            <div className="flex flex-col items-center">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-500 mb-4">
                 <Phone size={20} />
               </div>
               <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Teléfono</p>
               <a href="tel:+525579798650" className="text-white hover:text-gold-500 transition-colors">+52 55 7979 8650</a>
            </div>

            <div className="flex flex-col items-center">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-500 mb-4">
                 <Globe size={20} />
               </div>
               <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Web</p>
               <a href="https://www.ielujo.com" target="_blank" rel="noreferrer" className="text-white hover:text-gold-500 transition-colors">www.ielujo.com</a>
            </div>
          </div>

          <div className="bg-gold-500/10 p-6 inline-block w-full">
            <p className="text-gold-400 font-serif italic text-lg">
              "El verdadero lujo no es solo lo que se vende, es cómo se hace sentir al cliente."
            </p>
            <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest">— Fórmese con los expertos</p>
          </div>
        </div>
      </div>
      
      <footer className="border-t border-white/5 mt-20 py-8 text-center text-gray-600 text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} Instituto Europeo del Lujo. Todos los derechos reservados.
      </footer>
    </section>
  );
};

const DownloadFab = () => {
  return (
    <button 
      onClick={() => window.print()}
      className="no-print fixed bottom-8 right-8 z-[100] bg-gold-500 text-black px-6 py-4 rounded-full shadow-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 border border-white/20 group hover:bg-white cursor-pointer"
      title="Imprimir o Guardar como PDF"
      aria-label="Imprimir documento"
    >
      <FileDown className="group-hover:text-gold-600 transition-colors" /> 
      <span>Descargar PDF</span>
    </button>
  );
};

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-black selection:bg-gold-500 selection:text-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <ValueProposition />
      <Solutions />
      <Differentiators />
      <Contact />
      <DownloadFab />
    </div>
  );
};

export default App;