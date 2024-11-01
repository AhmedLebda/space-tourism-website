import firstUser from '../assets/crew/image-douglas-hurley.png';
import secondUser from '../assets/crew/image-mark-shuttleworth.png';
import thirdUser from '../assets/crew/image-victor-glover.png';
import fourthUser from '../assets/crew/image-anousheh-ansari.png';

interface Crew {
  id: string;
  name: string;
  image: string;
  role: string;
  bio: string;
}

export const crew: Crew[] = [
  {
    id: '1',
    name: 'Douglas Hurley',
    image: firstUser,
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    id: '2',
    name: 'Mark Shuttleworth',
    image: secondUser,
    role: 'Mission Specialist',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    id: '3',
    name: 'Victor Glover',
    image: thirdUser,
    role: 'Pilot',
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  {
    id: '4',
    name: 'Anousheh Ansari',
    image: fourthUser,
    role: 'Flight Engineer',
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
];
