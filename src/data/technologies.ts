import techOnePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import techOneLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import techTwoPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import techTwoLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import techThreePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import techThreeLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
interface Technology {
  id: string;
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export const technologies: Technology[] = [
  {
    id: '1',
    name: 'Launch vehicle',
    images: {
      portrait: techOnePortrait,
      landscape: techOneLandscape,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: '2',
    name: 'Spaceport',
    images: {
      portrait: techTwoPortrait,
      landscape: techTwoLandscape,
    },
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    id: '3',
    name: 'Space capsule',
    images: {
      portrait: techThreePortrait,
      landscape: techThreeLandscape,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
