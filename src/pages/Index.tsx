import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');

  const steps = [
    {
      icon: 'Upload',
      title: 'Загрузите текст',
      description: 'Отправьте нам свою рукопись или любой текст, который хотите превратить в книгу'
    },
    {
      icon: 'Package',
      title: 'Получите набор',
      description: 'Мы подготовим все материалы: бумагу, обложку, нити и инструменты для переплёта'
    },
    {
      icon: 'Video',
      title: 'Смотрите уроки',
      description: 'Следуйте за видео-инструкциями, где мы показываем каждый шаг создания книги'
    },
    {
      icon: 'Heart',
      title: 'Создайте книгу',
      description: 'Своими руками соберите настоящую печатную книгу, которая останется с вами навсегда'
    }
  ];

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/71baf19e-3514-495e-a58f-070b3cacf95a/files/d17c3096-d00d-4d75-a8da-95a8b99c7914.jpg',
      alt: 'Ручная книга с кожаной обложкой'
    },
    {
      url: 'https://cdn.poehali.dev/projects/71baf19e-3514-495e-a58f-070b3cacf95a/files/081b01a2-c5b2-4f78-a1d1-1f3040120a74.jpg',
      alt: 'Коллекция книг ручной работы'
    },
    {
      url: 'https://cdn.poehali.dev/projects/71baf19e-3514-495e-a58f-070b3cacf95a/files/9b9567de-513c-410b-a24c-8a0bc1db424d.jpg',
      alt: 'Процесс создания книги'
    }
  ];

  const kitItems = [
    { icon: 'FileText', text: 'Ваш текст, напечатанный на крафтовой бумаге' },
    { icon: 'Book', text: 'Обложка из натуральной ткани или кожи' },
    { icon: 'Scissors', text: 'Специальная игла и вощёная нить для переплёта' },
    { icon: 'Ruler', text: 'Все необходимые инструменты и шаблоны' },
    { icon: 'Video', text: 'Доступ к полному видео-курсу по созданию книги' },
    { icon: 'Sparkles', text: 'Декоративные элементы для персонализации' }
  ];

  const faqs = [
    {
      question: 'Нужен ли опыт в переплётном деле?',
      answer: 'Совершенно не нужен! Наши видео-уроки подробно показывают каждый шаг, начиная с самых основ. Процесс спроектирован так, чтобы справиться мог любой человек.'
    },
    {
      question: 'Сколько времени занимает создание книги?',
      answer: 'В среднем от 3 до 5 часов чистой работы. Вы можете делать это в своём темпе, разбивая процесс на несколько дней.'
    },
    {
      question: 'Какой формат книги получится?',
      answer: 'Стандартный формат А5 (148×210 мм), оптимальный для чтения. Мы также можем подготовить набор под формат А6 или А4 по запросу.'
    },
    {
      question: 'Можно ли заказать несколько копий?',
      answer: 'Да! При заказе от 3 наборов действует скидка 15%. Каждый набор — это возможность создать уникальную книгу.'
    },
    {
      question: 'Что входит в подписку на видео-уроки?',
      answer: 'Подписка даёт доступ ко всем обучающим видео, дополнительным мастер-классам по декорированию обложек, библиотеке шаблонов и закрытому сообществу единомышленников.'
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Спасибо! Скоро вышлем инструкцию на ваш email');
    setEmail('');
  };

  return (
    <div className="min-h-screen paper-texture">
      <section className="relative min-h-screen flex items-center justify-center vintage-texture px-6 py-20 overflow-hidden border-b-4 border-primary/20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-[200px] text-primary">❦</div>
          <div className="absolute bottom-20 right-20 text-[200px] text-secondary rotate-180">❦</div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 border-4 border-primary/30 rounded-full"></div>
              <div className="absolute -inset-2 border-2 border-primary/20 rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/files/48b86d98-83f0-4d48-8417-12596e5179f0.jpg" 
                alt="BookBox Logo" 
                className="w-56 h-56 object-contain drop-shadow-2xl relative z-10 bg-background/80 rounded-full p-4"
              />
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="text-2xl text-primary">❦</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-6 leading-tight tracking-tight">
              Руки помнят бумагу
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-secondary"></div>
              <span className="text-xl text-secondary italic">Создай то, что переживёт экран</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-secondary"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-3xl mx-auto leading-relaxed">
            Мобильный набор с материалами и видео-инструкциями<br />для создания печатной книги своими руками
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button size="lg" className="text-lg px-10 py-7 rounded-none border-2 border-primary hover:scale-105 transition-all shadow-lg">
              Создать свою книгу
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-none border-2 border-secondary hover:bg-secondary hover:text-white transition-all">
              Подписаться на уроки
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto text-center">
            <div className="animate-scale-in border-t-2 border-primary/40 pt-6" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-5xl font-serif font-bold text-primary mb-2">3–5</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">часов на создание</div>
            </div>
            <div className="animate-scale-in border-t-2 border-primary/40 pt-6" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-5xl font-serif font-bold text-primary mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">ручная работа</div>
            </div>
            <div className="animate-scale-in border-t-2 border-primary/40 pt-6" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-5xl font-serif font-bold text-primary mb-2">∞</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">останется навсегда</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-card vintage-texture border-b-4 border-primary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl text-primary mb-6 block">✦</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 ornament relative inline-block">
              Как это работает
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto mt-8 italic">
              Всего четыре простых шага от идеи до готовой книги в ваших руках
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-4 border-primary/20 hover:border-primary transition-all hover:shadow-2xl group animate-fade-in rounded-none bg-background" style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}>
                <CardContent className="pt-10 pb-10 text-center relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-serif font-bold border-4 border-background">
                    {index + 1}
                  </div>
                  <div className="w-20 h-20 mx-auto mb-6 border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors mt-4">
                    <Icon name={step.icon} size={36} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">{step.title}</h3>
                  <div className="w-16 h-px bg-primary/30 mx-auto mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background paper-texture border-b-4 border-primary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl text-secondary mb-6 block">✦</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Что входит в набор
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto mt-8 italic">
              Всё необходимое для создания вашей уникальной книги
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {kitItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-none bg-card border-2 border-primary/20 hover:border-secondary/50 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}>
                <div className="w-12 h-12 flex-shrink-0 border-2 border-primary/30 flex items-center justify-center">
                  <Icon name={item.icon} size={22} className="text-primary" />
                </div>
                <p className="text-foreground leading-relaxed pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-accent/30 to-background vintage-texture border-b-4 border-primary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-6xl text-primary mb-6 block">❦</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Галерея готовых книг
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto mt-8 italic">
              Работы наших учеников — каждая книга уникальна и создана с любовью
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden aspect-[3/4] animate-fade-in border-8 border-background shadow-2xl" style={{ animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}>
                <div className="absolute inset-0 border-4 border-primary/30 z-10"></div>
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 sepia-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-card paper-texture border-b-4 border-primary/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border-4 border-primary/30 p-12 md:p-16 shadow-2xl">
            <div className="text-center mb-12">
              <span className="text-6xl text-secondary mb-6 block">✦</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Подписка на видео-уроки
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
                Доступ к обучающим материалам, мастер-классам и сообществу единомышленников
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'Полный видео-курс', desc: 'Все техники переплёта от простых к сложным' },
                { title: 'Новые уроки каждый месяц', desc: 'Декорирование, реставрация, авторские техники' },
                { title: 'Библиотека шаблонов', desc: 'Готовые дизайны обложек и форзацев' },
                { title: 'Поддержка сообщества', desc: 'Общайтесь с другими создателями книг' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border-l-4 border-primary/40">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <div className="font-serif font-bold text-lg mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center border-t-2 border-primary/20 pt-10">
              <div className="mb-6">
                <span className="text-6xl font-serif font-bold text-primary">250₽</span>
                <span className="text-xl text-muted-foreground ml-2">в месяц</span>
              </div>
              <Button size="lg" className="text-lg px-12 py-7 rounded-none border-2 border-primary hover:scale-105 transition-all shadow-lg">
                Начать обучение
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background vintage-texture border-b-4 border-primary/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl text-primary mb-6 block">❦</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Для кого этот проект
            </h2>
            <p className="text-muted-foreground text-xl mt-8 italic">
              Создание книги — это больше чем просто ремесло
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              { icon: 'Pen', title: 'Писателям и поэтам', desc: 'Превратите свою рукопись в настоящую печатную книгу' },
              { icon: 'Gift', title: 'Для особенных подарков', desc: 'Создайте уникальный подарок с душой для близких людей' },
              { icon: 'Heart', title: 'Хранителям воспоминаний', desc: 'Соберите семейные истории и фотографии в книгу памяти' },
              { icon: 'Palette', title: 'Творческим людям', desc: 'Освойте новое ремесло и создавайте арт-буки своими руками' }
            ].map((item, index) => (
              <Card key={index} className="border-4 border-primary/20 hover:border-secondary/50 transition-all hover:shadow-xl rounded-none animate-fade-in bg-card" style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}>
                <CardContent className="flex items-start gap-6 p-8">
                  <div className="w-16 h-16 flex-shrink-0 border-2 border-primary/40 flex items-center justify-center">
                    <Icon name={item.icon} size={30} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
                    <div className="w-16 h-px bg-primary/30 mb-3"></div>
                    <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-secondary/10 to-background paper-texture border-b-4 border-primary/20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <span className="text-6xl text-secondary mb-6 block">✦</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Скачайте бесплатную инструкцию
            </h2>
            <p className="text-xl text-muted-foreground italic">
              PDF-гид по основам книжного переплёта
            </p>
          </div>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col gap-4">
              <Input 
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-lg py-6 rounded-none border-2 border-primary/30 focus:border-primary"
              />
              <Button type="submit" size="lg" className="px-8 py-6 rounded-none border-2 border-primary hover:scale-105 transition-transform">
                Получить инструкцию
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-32 px-6 bg-card vintage-texture border-b-4 border-primary/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-6xl text-primary mb-6 block">❦</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Частые вопросы
            </h2>
            <p className="text-muted-foreground text-xl mt-8 italic">
              Всё, что нужно знать перед началом
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-4 border-primary/20 px-6 data-[state=open]:border-secondary/40 transition-colors rounded-none bg-background">
                <AccordionTrigger className="text-lg font-serif font-bold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 border-t-2 border-primary/10 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-background to-accent/30 paper-texture border-b-4 border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-7xl text-primary mb-8 block">✦</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Готовы создать<br />свою первую книгу?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto italic">
            Начните своё путешествие в мир книжного искусства уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-12 py-8 rounded-none border-2 border-primary hover:scale-105 transition-transform shadow-2xl">
              Заказать набор
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-12 py-8 rounded-none border-2 border-secondary hover:bg-secondary hover:text-white transition-all">
              Посмотреть примеры
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-foreground/5 border-t-4 border-primary/30 vintage-texture">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-serif font-bold mb-2">BookBox</h3>
            <p className="text-muted-foreground italic">Создавайте, храните, вдохновляйте</p>
          </div>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground border-t-2 border-primary/20 pt-6">
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            <span>❦</span>
            <a href="#" className="hover:text-primary transition-colors">Доставка</a>
            <span>❦</span>
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;