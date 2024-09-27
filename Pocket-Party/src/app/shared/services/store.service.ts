import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private stores = [ {
      id: '1',
      name: 'Super Festas',
      type: 'STORE',
      descripition: '',
      image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
      category: [false, false, false, false, false, true, true],
      products: [ 
        { name: 'Aniversário', price: 500, image: 'https://www.tuacasa.com.br/wp-content/uploads/2019/10/festa-de-aniversario-00.jpg',category: [false, false, false, false, false, true, true], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: 'Casamento', price: 1500, image: 'https://imagens-revista.vivadecora.com.br/uploads/2019/02/decora%C3%A7%C3%A3o-de-festa-de-casamento-ao-ar-livre-com-arranjo-de-flores-e-mesas-de-madeira-Foto-Frank-Ribeiro-Eventos.jpg', category: [false, true, true, false, false, true, false], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        { name: 'Formatura', price: 1000, image: 'https://projetonoivinha.com.br/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-02-at-13.30.06.jpeg', category: [false, false, true, true, false, true, false], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: '15 Anos', price: 1000, image: 'https://www.tuacasa.com.br/wp-content/uploads/2018/08/festa-15-anos-decoracao-01.jpg', category: [true, false, false, false, false, true, true], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {name: 'Pocket Party',
          descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
          preco: '10',
          category: [false, false, false, false, false, true, true]}
      ]
    },
    {
      id: '2',
      name: 'Festas CG',
      type: 'STORE',
      descripition: '',
      image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
      category: [false, false, false, false, false, true, true],
      products: [ 
        { name: 'Aniversário', price: 500, image: 'https://www.tuacasa.com.br/wp-content/uploads/2019/10/festa-de-aniversario-00.jpg',category: [false, false, false, false, false, true, true], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: 'Casamento', price: 1500, image: 'https://imagens-revista.vivadecora.com.br/uploads/2019/02/decora%C3%A7%C3%A3o-de-festa-de-casamento-ao-ar-livre-com-arranjo-de-flores-e-mesas-de-madeira-Foto-Frank-Ribeiro-Eventos.jpg', category: [false, true, true, false, false, true, false], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        { name: 'Formatura', price: 1000, image: 'https://projetonoivinha.com.br/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-02-at-13.30.06.jpeg', category: [false, false, true, true, false, true, false], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: '15 Anos', price: 1000, image: 'https://www.tuacasa.com.br/wp-content/uploads/2018/08/festa-15-anos-decoracao-01.jpg', category: [true, false, false, false, false, true, true], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {name: 'Pocket Party',
          descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
          preco: '10',
          category: [false, false, false, false, false, true, true]}
      ]
    },
    {
      id: '3',
      name: 'Mega Festas',
      type: 'STORE',
      descripition: '',
      image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
      category: [false, false, false, false, false, true, true],
      products: [ 
        { name: 'Aniversário', price: 500, image: 'https://www.tuacasa.com.br/wp-content/uploads/2019/10/festa-de-aniversario-00.jpg',category: [false, false, false, false, false, true, true], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: 'Casamento', price: 1500, image: 'https://imagens-revista.vivadecora.com.br/uploads/2019/02/decora%C3%A7%C3%A3o-de-festa-de-casamento-ao-ar-livre-com-arranjo-de-flores-e-mesas-de-madeira-Foto-Frank-Ribeiro-Eventos.jpg', category: [false, true, true, false, false, true, false], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        { name: 'Formatura', price: 1000, image: 'https://projetonoivinha.com.br/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-02-at-13.30.06.jpeg', category: [false, false, true, true, false, true, false], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: '15 Anos', price: 1000, image: 'https://www.tuacasa.com.br/wp-content/uploads/2018/08/festa-15-anos-decoracao-01.jpg', category: [true, false, false, false, false, true, true], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {name: 'Pocket Party',
          descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
          preco: '10',
          category: [false, false, false, false, false, true, true]}
      ]
    },
    {
      id: '4',
      name: 'Super Buffet',
      type: 'SERVICE',
      descripition: '',
      image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
      category: [false, false, false, false, false, true, true],
      products: [ 
        { name: 'Aniversário', price: 500, image: 'https://www.tuacasa.com.br/wp-content/uploads/2019/10/festa-de-aniversario-00.jpg',category: [false, false, false, false, false, true, true], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: 'Casamento', price: 1500, image: 'https://imagens-revista.vivadecora.com.br/uploads/2019/02/decora%C3%A7%C3%A3o-de-festa-de-casamento-ao-ar-livre-com-arranjo-de-flores-e-mesas-de-madeira-Foto-Frank-Ribeiro-Eventos.jpg', category: [false, true, true, false, false, true, false], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        { name: 'Formatura', price: 1000, image: 'https://projetonoivinha.com.br/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-02-at-13.30.06.jpeg', category: [false, false, true, true, false, true, false], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: '15 Anos', price: 1000, image: 'https://www.tuacasa.com.br/wp-content/uploads/2018/08/festa-15-anos-decoracao-01.jpg', category: [true, false, false, false, false, true, true], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {name: 'Pocket Party',
          descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
          preco: '10',
          category: [false, false, false, false, false, true, true]}
      ]
    },
    {
      id: '5',
      name: 'Best Party',
      type: 'STORE',
      descripition: '',
      image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
      category: [false, false, false, false, false, true, true],
      products: [
        { name: 'Aniversário', price: 500, image: 'https://www.tuacasa.com.br/wp-content/uploads/2019/10/festa-de-aniversario-00.jpg',category: [false, false, false, false, false, true, true], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: 'Casamento', price: 1500, image: 'https://imagens-revista.vivadecora.com.br/uploads/2019/02/decora%C3%A7%C3%A3o-de-festa-de-casamento-ao-ar-livre-com-arranjo-de-flores-e-mesas-de-madeira-Foto-Frank-Ribeiro-Eventos.jpg', category: [false, true, true, false, false, true, false], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        { name: 'Formatura', price: 1000, image: 'https://projetonoivinha.com.br/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-02-at-13.30.06.jpeg', category: [false, false, true, true, false, true, false], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { name: '15 Anos', price: 1000, image: 'https://www.tuacasa.com.br/wp-content/uploads/2018/08/festa-15-anos-decoracao-01.jpg', category: [true, false, false, false, false, true, true], descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {name: 'Pocket Party',
          descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
          preco: '10',
          category: [false, false, false, false, false, true, true]}
      ]
    }

  ];

  getStoreById(id: string) {
    return this.stores.find(store => store.id === id);
  }

  getStores(){
    return this.stores;
  }
}
