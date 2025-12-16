import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-31T23:59:59').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOrderClick = () => {
    window.open('https://t.me/ubelovacoach', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="gradient-primary text-white px-6 py-2 text-base">
              🌿 Специальное предложение до конца декабря
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient leading-tight">
              Распаковка личности
              <br />
              и сфер жизни
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Заочная расстановка на 5+ страниц: увидьте корни ваших проблем, 
              силу системы и конкретные векторы решения
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleOrderClick}
                size="lg" 
                className="gradient-primary text-white px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all animate-pulse-glow"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Заказать распаковку
              </Button>
              
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gradient">5 500 ₽</div>
                <div className="text-lg text-muted-foreground line-through">35 000 ₽</div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <Card key={unit} className="gradient-accent text-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">{value}</div>
                  <div className="text-sm uppercase opacity-90">
                    {unit === 'days' ? 'Дней' : unit === 'hours' ? 'Часов' : unit === 'minutes' ? 'Минут' : 'Секунд'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Что это за формат?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Распаковка личности и сфер жизни – это как расстановка, только заочная, на бумаге
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-white to-purple-50">
            <CardContent className="p-8 sm:p-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">5+ страниц понятного разбора</h3>
                  <p className="text-lg text-muted-foreground">
                    Собираю вашу историю, систему и запрос, и возвращаю структурный анализ: 
                    почему вы живёте так, где корень проблемы и что делать
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Конкретные векторы решения</h3>
                  <p className="text-lg text-muted-foreground">
                    Инструкция: куда смотреть, что менять, с чего начать. 
                    Не просто диагностика, а план действий
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Точки силы и уязвимости</h3>
                  <p className="text-lg text-muted-foreground">
                    Увидите всю картину целиком: ваши ресурсы, повторяющиеся сценарии 
                    и скрытые паттерны поведения
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Как проходит работа</h2>
            <p className="text-xl text-muted-foreground">Простой и понятный процесс в 3 этапа</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-2 border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-bl-full"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold mb-4 animate-float">
                  1
                </div>
                <CardTitle className="text-2xl">Диагностическая консультация</CardTitle>
                <CardDescription className="text-base">30–40 минут онлайн</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p>Уточняем ваш запрос и находим настоящий «узел»</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p>Оцифровываю сессию: фиксирую ключевые моменты</p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary to-accent opacity-10 rounded-bl-full"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center text-white text-2xl font-bold mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
                  2
                </div>
                <CardTitle className="text-2xl">Индивидуальные вопросы</CardTitle>
                <CardDescription className="text-base">Домашнее задание</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <p>Подбираю глубокие вопросы под вашу ситуацию</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <p>Вы отвечаете честно и ёмко письменно</p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent to-primary opacity-10 rounded-bl-full"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center text-white text-2xl font-bold mb-4 animate-float" style={{ animationDelay: '1s' }}>
                  3
                </div>
                <CardTitle className="text-2xl">Распаковка на 5+ листов</CardTitle>
                <CardDescription className="text-base">Подробный письменный разбор</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <p>Описание вашей ситуации и системы</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <p>Корни проблем и повторяющихся сценариев</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <p>Конкретная инструкция к действию</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Сравнение стоимости</h2>
            <p className="text-xl text-muted-foreground">Что обычно это стоит по отдельности</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl">
              <CardHeader className="bg-muted/50">
                <CardTitle className="text-2xl">Отдельно</CardTitle>
                <CardDescription>При покупке услуг раздельно</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Диагностическая консультация</span>
                  <span className="font-semibold">5 000 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Оцифровка + вопросы</span>
                  <span className="font-semibold">7 500 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Расстановка-распаковка</span>
                  <span className="font-semibold">25 000 ₽</span>
                </div>
                <div className="flex justify-between items-center pt-4 text-xl font-bold">
                  <span>Итого:</span>
                  <span className="text-muted-foreground line-through">35 000 ₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-4 border-primary relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="gradient-primary text-white px-4 py-2 text-base">
                  Экономия 84%
                </Badge>
              </div>
              <CardHeader className="gradient-primary text-white">
                <CardTitle className="text-2xl">Полный пакет</CardTitle>
                <CardDescription className="text-white/90">Специальное предложение</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Диагностическая консультация</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Оцифровка сессии</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Индивидуальные вопросы</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Распаковка 5+ листов</span>
                  </div>
                </div>
                <div className="pt-6 border-t-2 border-primary/20">
                  <div className="text-5xl font-bold text-gradient mb-2">5 500 ₽</div>
                  <div className="text-lg text-muted-foreground">вместо 35 000 ₽</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят те, кто уже прошёл распаковку</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    А
                  </div>
                  <div>
                    <CardTitle>Анна, 32 года</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Наконец-то увидела полную картину! Юлия помогла разобраться в повторяющихся сценариях 
                  и дала конкретные шаги. Чувствую, что начала двигаться в правильном направлении."
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-pink-50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold">
                    М
                  </div>
                  <div>
                    <CardTitle>Мария, 28 лет</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Распаковка превзошла ожидания! 5 страниц глубокого анализа, которые можно перечитывать. 
                  Особенно ценно, что всё письменно — возвращаюсь к документу снова и снова."
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold">
                    Е
                  </div>
                  <div>
                    <CardTitle>Екатерина, 35 лет</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Невероятная глубина проработки! Юлия увидела то, чего я сама не замечала годами. 
                  Цена за такую работу просто смешная — обычно за это берут в разы больше."
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    Д
                  </div>
                  <div>
                    <CardTitle>Дарья, 29 лет</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Формат распаковки оказался даже лучше обычной консультации — есть время подумать над вопросами, 
                  а результат всегда под рукой. Рекомендую всем, кто хочет разобраться в себе!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Готовы увидеть полную картину?
          </h2>
          <p className="text-xl sm:text-2xl opacity-90 leading-relaxed">
            Если чувствуете, что хотите наконец увидеть всю картину целиком, 
            а не латать отдельные дыры — этот формат для вас
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block">
            <div className="text-lg mb-4 opacity-90">Предложение действует ещё:</div>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-5xl font-bold">{value}</div>
                  <div className="text-sm uppercase opacity-75 mt-2">
                    {unit === 'days' ? 'Дней' : unit === 'hours' ? 'Часов' : unit === 'minutes' ? 'Минут' : 'Секунд'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button 
            onClick={handleOrderClick}
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all"
          >
            <Icon name="MessageCircle" size={24} className="mr-3" />
            Забронировать участие
          </Button>

          <p className="text-sm opacity-75 mt-4">
            📅 Выберем удобные дату и время для диагностической консультации
          </p>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            Юлия Белова • Психолог, коуч, расстановщик • 
            <a href="https://t.me/ubelovacoach" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">
              @ubelovacoach
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;