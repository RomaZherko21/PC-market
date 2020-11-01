import React from "react";
const allGoods = {
  discountGoods: [
    {
      id: '0001',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
      price: 2550,
      img: "http://pngimg.com/uploads/cpu/cpu_PNG39.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0002',
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0003',
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
      price: 2234,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0004',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
      price: 288,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0005',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
      img: "http://pngimg.com/uploads/cpu/cpu_PNG39.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0006',
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0007',
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0008',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0009',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/cpu/cpu_PNG39.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0010',
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0011',
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0012',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0013',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "2800 руб.",
      discountPrice: "2550 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/cpu/cpu_PNG39.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0014',
      name: "Ноутбук Apple MacBook (2017 год)",
      prevPrice: "4000 руб.",
      discountPrice: "3700 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17497.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0015',
      name: 'Ноутбук Apple MacBook Air 13" (2017 год)',
      prevPrice: "2500 руб.",
      discountPrice: "2234 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17495.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
    {
      id: '0016',
      name: "Процессор AMD Ryzen 3 3200G",
      prevPrice: "319 руб.",
      discountPrice: "288 руб.",
      price: 3700,
      img: "http://pngimg.com/uploads/computer_pc/computer_pc_PNG17486.png",
      description: () => {
        return (
          <ul>
            {" "}
            <li> Цвет Черный</li>
            <li> Для людей ростом от 160 до 180 см</li>
            <li> Нагрузка до 120 кг</li>
            <li> Класс газлифта 4-й класс</li>
            <li> Вес кресла 23 кг</li>
            <li>Материал каркаса сталь</li>
            <li> Размер сиденья 57 х 52 см</li>
            <li>Тип механизма Топ Ган</li>
          </ul>
        );
      },
    },
  ],
  computers: [
    {
      id: '0020',
      name: "Gamer Perfect",
      mainDescription:
        "i5-9400F | 6GB GTX1660Ti | ОЗУ 16 GB | HDD 1 TB | SSD 128 M2",

      price: 2550,
      img: "https://pcmarket.uz/wp-content/uploads/2020/08/66.png",
      description: {
        CPU:
          "Процессор 6- Ядер Intel® Core™ i5-9400F 2,90 GHz, Turbo Boost 4,10 GHz",
        RAM: "Оперативная память Kingston DDR4 16GB 2666Mhz",
        video: "Видеокарта 6GB GeForce GTX1660Ti Super DDR6 192bit",
        motherboard: "Материнская плата  Asus B 365 M-K",
        category: "Игровые Компьютеры, Компьютеры",
      },
      warranty: "1 год",
    },
    {
      id: '0021',
      name: "Hyper Elite",
      mainDescription:
        "i5 – 10400F ОЗУ 16 GB 6GB GTX1660 Super- HDD 1 TB SSD 128 GB",
      price: 3250,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/10/Playa-Product-Photo-Gallery-1042x589-04.png",
      description: {
        CPU: "Процессор Intel-Core i5 – 10400F, 2.9 GHz, Turbo Boost",
        RAM: "Видеокарта ASUS DUAL-GTX1660 Super-O6G GDDR6",
        video: "Видеокарта 6GB GeForce GTX1660Ti Super DDR6 192bit",
        motherboard: "Материнская плата ASUS PRIME B460M-K M2 Support",
        category: "Игровые Компьютеры, Компьютеры",
      },
      warranty: "1 год",
    },
    {
      id: '0022',
      name: "Gamer Pro +",
      mainDescription:
        "i7-8700 ОЗУ 16 GB Inno 3D – 6GB GeForce GTX1660Ti HDD 1 TB SSD 240 GB",
      price: 4250,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/06/new-pcmarket-bolt.png",
      description: {
        CPU: "Процессор Intel-Core i5 – 10400F, 2.9 GHz, Turbo Boost",
        RAM: "Видеокарта ASUS DUAL-GTX1660 Super-O6G GDDR6",
        video: "Видеокарта 6GB GeForce GTX1660Ti Super DDR6 192bit",
        motherboard: "Материнская плата ASUS PRIME B460M-K M2 Support",
        category: "Игровые Компьютеры, Компьютеры",
      },
      warranty: "1 год",
    },
    {
      id: '0023',
      name: "Office Lite+",
      mainDescription:
        "Intel:registered: Dual Core:tm: i3-2100 ОЗУ 4GB DDR3 SSD 128 GB",
      price: 2250,
      img: "https://pcmarket.uz/wp-content/uploads/2020/07/Office-PC-min.png",
      description: {
        CPU: "Процессор Intel-Core i5 – 10400F, 2.9 GHz, Turbo Boost",
        RAM: "Видеокарта ASUS DUAL-GTX1660 Super-O6G GDDR6",
        video: "Видеокарта 6GB GeForce GTX1660Ti Super DDR6 192bit",
        motherboard: "Материнская плата ASUS PRIME B460M-K M2 Support",
        category: "Компьютеры, Офисные компьютеры",
      },
      warranty: "1 год",
    },
    {
      id: '0024',
      name: "Office Elite",
      mainDescription: "Intel-Core i3 9100 ОЗУ 4GB DDR4 SSD 128 GB",
      price: 2250,
      img: "https://pcmarket.uz/wp-content/uploads/2020/07/Office-PC-min.png",
      description: {
        CPU: "Процессор Intel-Core i5 – 10400F, 2.9 GHz, Turbo Boost",
        RAM: "Видеокарта ASUS DUAL-GTX1660 Super-O6G GDDR6",
        video: "Видеокарта 6GB GeForce GTX1660Ti Super DDR6 192bit",
        motherboard: "Материнская плата ASUS PRIME B460M-K M2 Support",
        category: "Компьютеры, Офисные компьютеры",
      },
      warranty: "1 год",
    },
  ],
  laptops: [
    {
      id: '0031',
      name: "Gamer Perfect",
      mainDescription:
        "i5-9400F | 6GB GTX1660Ti | ОЗУ 16 GB | HDD 1 TB | SSD 128 M2",

      price: 2550,
      img: "https://pcmarket.uz/wp-content/uploads/2020/05/9011.png",
      description: {
        CPU:
          "Процессор 6- Ядер Intel® Core™ i5-9400F 2,90 GHz, Turbo Boost 4,10 GHz",
        RAM: "Оперативная память Kingston DDR4 16GB 2666Mhz",
        video: "Видеокарта 6GB GeForce GTX1660Ti Super DDR6 192bit",
        motherboard: "Материнская плата  Asus B 365 M-K",
        category: "Игровые Компьютеры, Компьютеры",
      },
      warranty: "1 год",
    },
    {
      id: '0032',
      name: "Hyper Elite",
      mainDescription:
        "i5 – 10400F ОЗУ 16 GB 6GB GTX1660 Super- HDD 1 TB SSD 128 GB",
      price: 3250,
      img: "https://pcmarket.uz/wp-content/uploads/2020/05/201.png",
      description: {
        CPU: "Процессор Intel-Core i5 – 10400F, 2.9 GHz, Turbo Boost",
        RAM: "Видеокарта ASUS DUAL-GTX1660 Super-O6G GDDR6",
        video: "Видеокарта 6GB GeForce GTX1660Ti Super DDR6 192bit",
        motherboard: "Материнская плата ASUS PRIME B460M-K M2 Support",
        category: "Игровые Компьютеры, Компьютеры",
      },
      warranty: "1 год",
    },
    {
      id: '0033',
      name: "Gamer Pro +",
      mainDescription:
        "i7-8700 ОЗУ 16 GB Inno 3D – 6GB GeForce GTX1660Ti HDD 1 TB SSD 240 GB",
      price: 4250,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/09/22efef6dcfb07cca0b8b6a0b366bd7ad-kopiya.png",
      description: {
        CPU: "Процессор Intel-Core i5 – 10400F, 2.9 GHz, Turbo Boost",
        RAM: "Видеокарта ASUS DUAL-GTX1660 Super-O6G GDDR6",
        video: "Видеокарта 6GB GeForce GTX1660Ti Super DDR6 192bit",
        motherboard: "Материнская плата ASUS PRIME B460M-K M2 Support",
        category: "Игровые Компьютеры, Компьютеры",
      },
      warranty: "1 год",
    },
    {
      id: '0034',
      name: "Office Lite+",
      mainDescription:
        "Intel:registered: Dual Core:tm: i3-2100 ОЗУ 4GB DDR3 SSD 128 GB",
      price: 2250,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/08/Acer-Aspire-3-A315-55-55K-main.png",
      description: {
        CPU: "Процессор Intel-Core i5 – 10400F, 2.9 GHz, Turbo Boost",
        RAM: "Видеокарта ASUS DUAL-GTX1660 Super-O6G GDDR6",
        video: "Видеокарта 6GB GeForce GTX1660Ti Super DDR6 192bit",
        motherboard: "Материнская плата ASUS PRIME B460M-K M2 Support",
        category: "Компьютеры, Офисные компьютеры",
      },
      warranty: "1 год",
    },
    {
      id: '0035',
      name: "Office Elite",
      mainDescription: "Intel-Core i3 9100 ОЗУ 4GB DDR4 SSD 128 GB",
      price: 2250,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/09/e02b2c1e70e1b36f6fc5c20ba12cf3fa-kopiya.png",
      description: {
        CPU: "Процессор Intel-Core i5 – 10400F, 2.9 GHz, Turbo Boost",
        RAM: "Видеокарта ASUS DUAL-GTX1660 Super-O6G GDDR6",
        video: "Видеокарта 6GB GeForce GTX1660Ti Super DDR6 192bit",
        motherboard: "Материнская плата ASUS PRIME B460M-K M2 Support",
        category: "Компьютеры, Офисные компьютеры",
      },
      warranty: "1 год",
    },
  ],
  printers: [
    {
      id: '0036',
      name: "HP Ink Tank 115 Printer",
      mainDescription: "HP Ink Tank 115 Printer",
      price: 500,
      img: "https://pcmarket.uz/wp-content/uploads/2020/07/c06103650.png",
      description: {
        printColor: "Цветность печати – цветная",
        technology: "Технология печати – Термальная струйная печать",
        format: "Максимальный формат -A4",
        fitures:
          "Двусторонняя печать – С ручной подачей бумаги, Возможности подключения – USB 2.0",
      },
      warranty: "1 год",
    },
    {
      id: '0037',
      name: "HP LASERJET PRO M15A",
      mainDescription: "HP LASERJET PRO M15A",
      price: 450,
      img: "https://pcmarket.uz/wp-content/uploads/2020/07/c06507640.png",
      description: {
        printColor: "Цветность печати – черно-белая",
        technology: "Технология печати – лазерная",
        format: "Максимальный формат -A4",
        fitures: "Двусторонняя печать -нет, Возможности подключения – USB 2.0",
      },
      warranty: "1 год",
    },
    {
      id: '0038',
      name: "Canon i-SENSYS LBP113W",
      mainDescription: "Canon i-SENSYS LBP113W",
      price: 650,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/07/SUhROjD07vFHwfdt7XeoLHHCx8muPRG9xNRR5fdj4R4OYrfMnN5tIUHNOKPg-kopiya-2.png",
      description: {
        printColor: "Цветность печати – черно-белая",
        technology: "Технология печати – лазерная",
        format: "Максимальный формат -A4",
        fitures:
          "Двусторонняя печать -нет, Возможности подключения – Wi-Fi, USB 2.0",
      },
      warranty: "1 год",
    },
  ],
  monitors: [
    {
      id: '0039',
      name: "AOC – 21,5″ E2270SWN LED Monitor",
      mainDescription: "AOC – 21,5″ E2270SWN LED Monitor",
      price: 1200,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/07/scale-dec-294x294-1.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
    {
      id: '0040',
      name: "Philips – 18,5″ 193V5L LED Monitor",
      mainDescription: "Philips – 18,5″ 193V5L LED Monitor",
      price: 1400,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/07/Monitor-philips-20-1.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
    {
      id: '0041',
      name: "Монитор LG 19.5″(LED) 20M38A",
      mainDescription: "Монитор LG 19.5″(LED) 20M38A",
      price: 1910,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/10/ArtelM200024D-kopiya-1.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
  ],
  modules:[
    {
      id: '0042',
      name: "SSD Foxline 120GB M.2 SATA 2280 3D TLC (Foxconn)",
      mainDescription: "SSD Foxline 120GB M.2 SATA 2280 3D TLC (Foxconn)",
      price: 400,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/09/f1afe3f142387d02921e8f9e56627fec-kopiya.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
    {
      id: '0043',
      name: "SSD Foxline 128GB M.2 PCIe Gen3x2 2280 3D TLC NVMe (Foxconn)",
      mainDescription: "SSD Foxline 128GB M.2 PCIe Gen3x2 2280 3D TLC NVMe (Foxconn)",
      price: 300,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/09/f01c57f71a6f161130c3711fca0a1b8f-kopiya.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
    {
      id: '0044',
      name: "Aerocool ECO 400, 400W, BOX",
      mainDescription: "Aerocool ECO 400, 400W, BOX",
      price: 400,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/08/400-info-kopiya.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
    {
      id: '0045',
      name: "Inno 3D – 8GB GeForce RTX2080 Twin X2 OC GDDR6",
      mainDescription: "Inno 3D – 8GB GeForce RTX2080 Twin X2 OC GDDR6",
      price: 1100,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/07/6537943-1580725191-kopiya-1.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
  ],
  periphery:[
    {
      id: '0046',
      name: "Cougar Minos X2",
      mainDescription: "Cougar Minos X2",
      price: 199,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/08/01-23.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
    {
      id: '0047',
      name: "Gamdias GKC6011 (клавиатура + мышь)",
      mainDescription: "Gamdias GKC6011 (клавиатура + мышь)",
      price: 499,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/08/5e15bcafdbd7e-1200x800-kopiya.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
  ],
  accessories:[
    {
      id: '0048',
      name: "Gaming Chair Cougar Fusion Black/Игровое кресло",
      mainDescription: "Gaming Chair Cougar Fusion Black/Игровое кресло",
      price: 1000,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/07/1-1.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
    {
      id: '0049',
      name: "Kingston DataTraveler 106 16GB",
      mainDescription: "Kingston DataTraveler 106 16GB",
      price: 50,
      img:
        "https://pcmarket.uz/wp-content/uploads/2020/10/kingston-datatraveler-106-16gb-1-kopiya.png",
      description: {
        screenSize: "Разрешение экрана – 1920×1080",
        video: "Видеоразъемы – VGA",
        matrix: "Матрица – TN",
        size: "Диагональ экрана – 21.5",
      },
      warranty: "1 год",
    },
  ]
};

export default allGoods;
