import {Injectable} from '@angular/core';
import {TestimonialsText} from "../components/shared/data/testimonials-text.data";

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  public testimonials: TestimonialsText[] = [
    {
      name: {
        en: 'Minko Cvetanov',
        bg: "Минко Цветанов"
      },
      image: 'assets/images/testimonials/Screenshot 2025-04-24 at 22.36.14.png',
      info: {
        en: "It is worth it! You won't regret it!",
        bg: "Заслужава си! Няма да съжалявате!"
      },
      role: {
        en: 'Body instructor/Gym trainer',
        bg: "Фитнес инструктор"
      },
      message: {
        en: "After visiting ReformFlow Studio, my focus shifted not only to fitness but also to the Pilates Reformer, which helps with perfect recovery and further improvement of physical form.",
        bg: "След като посетих ReformFlow Studio моят поглед се фокусира не само върху фитнеса, но и пилатес реформъра, който спомага за перфектното възстановяване и доусъвършенстване на физическата форма."
      }
    },
    {
      name: {
        en: 'Martina Karakoleva',
        bg: "Мартина Караколева"
      },
      image: 'assets/images/testimonials/IMG_2189.jpeg',
      info: {
        en: "I can't wait to visit again!",
        bg: "Нямам търпение за следващата ми тренировка!"
      },
      role: {
        en: 'Marketing expert',
        bg: "Маркетингов експерт"
      },
      message: {
        en: "The instructors are exceptional professionals, working with great precision and paying attention to their clients with every single movement. I was very satisfied and can't wait for my next workout.",
        bg: "Инструкторите са изключителни професионалисти, работещи с огромна прецизност и обръщат внимание на своите клиенти при всяко едно движение. Останах много доволна и нямам търпение за следващата ми тренировка. "
      }
    },
    {
      name: {
        en: 'Daniela Mezeklieva',
        bg: "Даниела Мезеклиева"
      },
      image: 'assets/images/testimonials/anonymous.jpeg',
      info: {
        en: 'These trainings improved my life!',
        bg: "Тези тренировки подобриха живота ми!"
      },
      role: {
        en: 'Receptionist',
        bg: "Рецепционист"
      },
      message: {
        en: "ReformFlow showed me exercising can be both intensive and fun. Professional team, driven to provide the best care for your body. I am always looking forward to my sessions.",
        bg: "ReformFlow ми показа как упражненията могат да бъдат и натоварващи, и завабни. Професионален екип, който е посветен да предостави най-добрата гриьа за тялото ви. Винаги очаквам с нетърпение следващите сесии."
      }
    }
  ];

  constructor() {
  }


  public getAllTestimonials(): TestimonialsText[] {
    return this.testimonials;
  }
}
