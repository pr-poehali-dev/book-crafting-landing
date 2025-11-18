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
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-accent/20 to-background px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="mb-10 flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/48b86d98-83f0-4d48-8417-12596e5179f0.jpg" 
              alt="BookBox Logo" 
              className="w-48 h-48 object-contain drop-shadow-2xl"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-8 leading-tight">
            Руки помнят бумагу.<br />Создай то, что переживёт экран
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            Мобильный набор с материалами и видео-инструкциями для создания<br />печатной книги своими руками
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30">
              Создать свою книгу
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform border-2 border-secondary hover:bg-secondary hover:text-white">
              Подписаться на уроки
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="animate-scale-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-4xl font-serif font-bold text-primary mb-2">3-5 часов</div>
              <div className="text-sm text-muted-foreground">на создание</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-4xl font-serif font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">ручная работа</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-4xl font-serif font-bold text-primary mb-2">навсегда</div>
              <div className="text-sm text-muted-foreground">с вами</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
            Как это работает
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-20 max-w-2xl mx-auto">
            Всего четыре простых шага от идеи до готовой книги в ваших руках
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/20 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}>
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={step.icon} size={32} className="text-primary" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-3">Шаг {index + 1}</div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
            Что входит в набор
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-20 max-w-2xl mx-auto">
            Всё необходимое для создания вашей уникальной книги
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {kitItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-card hover:bg-secondary/10 hover:border-2 hover:border-secondary/30 transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}>
                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <Icon name={item.icon} size={20} className="text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Галерея готовых книг
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Работы наших учеников — каждая книга уникальна и создана с любовью
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[3/4] animate-fade-in" style={{ animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}>
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-12 md:p-16 shadow-xl border-2 border-primary/20">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Video" size={40} className="text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Подписка на видео-уроки
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Получите доступ ко всем обучающим материалам, эксклюзивным мастер-классам и сообществу единомышленников
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Полный видео-курс</div>
                  <div className="text-sm text-muted-foreground">Все техники переплёта от простых к сложным</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Новые уроки каждый месяц</div>
                  <div className="text-sm text-muted-foreground">Декорирование, реставрация, авторские техники</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Библиотека шаблонов</div>
                  <div className="text-sm text-muted-foreground">Готовые дизайны обложек и форзацев</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Поддержка сообщества</div>
                  <div className="text-sm text-muted-foreground">Общайтесь с другими создателями книг</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <span className="text-5xl font-serif font-bold text-primary">990₽</span>
                <span className="text-xl text-muted-foreground">/месяц</span>
              </div>
              <Button size="lg" className="text-lg px-10 py-6 rounded-full hover:scale-105 transition-transform">
                Начать обучение
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
            Для кого этот проект
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16">
            Создание книги — это больше чем просто ремесло
          </p>
          
          <div className="space-y-6">
            {[
              { icon: 'Pen', title: 'Писателям и поэтам', desc: 'Превратите свою рукопись в настоящую печатную книгу' },
              { icon: 'Gift', title: 'Для особенных подарков', desc: 'Создайте уникальный подарок с душой для близких людей' },
              { icon: 'Heart', title: 'Хранителям воспоминаний', desc: 'Соберите семейные истории и фотографии в книгу памяти' },
              { icon: 'Palette', title: 'Творческим людям', desc: 'Освойте новое ремесло и создавайте арт-буки своими руками' }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}>
                <CardContent className="flex items-start gap-6 p-8">
                  <div className="w-14 h-14 flex-shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon} size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-secondary/10 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <Icon name="Download" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Скачайте бесплатную инструкцию
            </h2>
            <p className="text-xl text-muted-foreground">
              Получите PDF-гид по основам книжного переплёта и узнайте, как подготовиться к созданию своей первой книги
            </p>
          </div>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-lg py-6 rounded-full"
              />
              <Button type="submit" size="lg" className="px-8 py-6 rounded-full whitespace-nowrap hover:scale-105 transition-transform">
                Получить
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-32 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16">
            Всё, что нужно знать перед началом
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-2xl px-6 data-[state=open]:border-primary transition-colors">
                <AccordionTrigger className="text-lg font-serif font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            Готовы создать<br />свою первую книгу?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Начните своё путешествие в мир книжного искусства уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-10 py-7 rounded-full hover:scale-105 transition-transform shadow-lg">
              Заказать набор
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full hover:scale-105 transition-transform">
              Посмотреть примеры
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-foreground/5 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-serif font-bold mb-2">Книга своими руками</h3>
            <p className="text-muted-foreground">Создавайте, храните, вдохновляйте</p>
          </div>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Доставка</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;