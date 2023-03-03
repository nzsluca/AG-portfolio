 //  ../src/assets/creative/aranykapu/arany1.jpg
import * as arany_k_P1 from '../src/assets/creative/aranykapu/arany1.jpg'
import * as arany_k_P2 from '../src/assets/creative/aranykapu/arany2.jpg'
import * as arany_k_P3 from '../src/assets/creative/aranykapu/arany3.jpg'
import * as kerdezz_a_P2 from '../src/assets/creative/kerdezz_anyamrol/ak1.jpg'
import * as kerdezz_a_P3 from '../src/assets/creative/kerdezz_anyamrol/ak2.jpg'
import * as kerdezz_a_P4 from '../src/assets/creative/kerdezz_anyamrol/ak3.jpg'
import * as kerdezz_a_P5 from '../src/assets/creative/kerdezz_anyamrol/arany.jpg'
import * as kerdezz_a_P6 from '../src/assets/creative/kerdezz_anyamrol/arany1.jpg'
import * as kerdezz_a_P9 from '../src/assets/creative/kerdezz_anyamrol/gajewszkyanna_szabadonvalasztott_2021_10.jpg'
import * as kerdezz_a_P7 from '../src/assets/creative/kerdezz_anyamrol/gajewszkyanna_szabadonvalasztott_2021_7.jpg'
import * as kerdezz_a_P8 from '../src/assets/creative/kerdezz_anyamrol/gajewszkyanna_szabadonvalasztott_2021_8.jpg'
import * as kerdezz_a_P1 from '../src/assets/creative/kerdezz_anyamrol/gajewszkyanna_szabadonvalasztott_2021_9.jpg'
//  import * as arany_k_P4 from 'src/assets/creative/aranykapu/MA1_gajewszkyanna_individual_8.jpg'



export  const everySeries: SeriesType[] = [
   {Title: 'Home Elsewhere', ID: 1,  year: '2018', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae! Amet, aperiam. Aliquam omnis tempore aperiam sit assumenda delectus ea quidem dolores architecto, iste distinctio animi autem numquam obcaecati optio, dolor quaerat aliquid explicabo pariatur, similique quia magni veniam rerum.',
   image:[kerdezz_a_P1.default,kerdezz_a_P2.default,kerdezz_a_P3.default,kerdezz_a_P4.default,kerdezz_a_P5.default,kerdezz_a_P6.default,kerdezz_a_P7.default,kerdezz_a_P8.default,kerdezz_a_P9.default]},
   {Title: 'Kérdezz Anyámról', ID: 2, year: '2018', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae! Amet, aperiam. Aliquam omnis tempore aperiam sit assumenda delectus ea quidem dolores architecto, iste distinctio animi autem numquam obcaecati optio, dolor quaerat aliquid explicabo pariatur, similique quia magni veniam rerum.', 
   image:[]},
   {Title: 'The ritual of slaughter', ID: 3,  year: '2021', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae! Amet, aperiam. Aliquam omnis tempore aperiam sit assumenda delectus ea quidem dolores architecto, iste distinctio animi autem numquam obcaecati optio, dolor quaerat aliquid explicabo pariatur, similique quia magni veniam rerum.',image:[]},
   {Title: 'Nyitva van az Aranykapu', ID: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae! Amet, aperiam. Aliquam omnis tempore aperiam sit assumenda delectus ea quidem dolores architecto, iste distinctio animi autem numquam obcaecati optio, dolor quaerat aliquid explicabo pariatur, similique quia magni veniam rerum.', year: '2022', 
   image:[arany_k_P1.default,arany_k_P2.default,arany_k_P3.default]},
]


 export type SeriesType={
   Title: string,
   ID: number,
   description: string,
   image: any[]
   year: string,
 }

 export function Titles(form: string) {
     const creative_titles = [
    '    Home elsewhere',
    'In the search for Venus',
    'Ask about my mother',
    'The ritual of slaughter',
    'Nyitva van az Aranykapu',
                'All',

     ]
     const applied_titles = [
        'Vodafone',
        'Theather',
        'Music Band',
     ]
   

     // TODO Megcsinal az angol + hun verziot

     const images = [
      //   {ID:2, img: [kerdezz_a_P1.default,]}
     ]

     return ([applied_titles, creative_titles])
    
}