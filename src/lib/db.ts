/**
 * Schema and data for the site.
 */

import { getImageImport, type Image } from './images';

// main SEO image
export const mainImageAltText =
	'Cindy Tarpey in the early 90s, crouched down on the front lawn of her house in Central Florida, holding her toddler aged son Mike Tarpey (owner of this website). The shadows indicate high noon, and their blocky brown Chrysler minivan is in the background.';

interface YearSummary {
	year: string;
	summary: string;
}

interface EventsDB {
	[key: string]: Record<string, YearEvent>;
}

interface YearEvent {
	slug?: string;
	coverSlug: string;
	name: string;
	images: EventImage[];
}

interface EventImage {
	slug: string;
	altText: string;
}

export interface SrcSet {
	src: string;
	src400: string;
	src800: string;
	src1600: string;
	srcset: string;
	srcsetHero: string;
}

export interface EnhancedImageData extends SrcSet {
	year: string;
	eventSlug: string;
	eventName: string;
	imageSlug: string;
	href: string;
	enhancedSrc?: Image;
	altText: string;
}

export const years: YearSummary[] = [
	{
		year: '2025',
		summary: 'Disney'
	},
	{
		year: '2024',
		summary: 'PAX East, Dreamhack Dallas, Denver'
	},
	{
		year: '2023',
		summary:
			'PAX East, other stuff, just listing words here to test how the page looks really, sup people'
	},
	{
		year: '2021',
		summary: 'Massachusetts, dodging COVID'
	},
	// {
	// 	year: '2020',
	// 	summary: '',
	// },
	// {
	// 	year: '2019',
	// 	summary: '',
	// },
	// {
	// 	year: '2018',
	// 	summary: '',
	// },
	// {
	// 	year: '2017',
	// 	summary: '',
	// },
	// {
	// 	year: '2016',
	// 	summary: '',
	// },
	// {
	// 	year: '2015',
	// 	summary: '',
	// },
	// {
	// 	year: '2014',
	// 	summary: '',
	// },
	// {
	// 	year: '2013',
	// 	summary: '',
	// },
	{
		year: '2012',
		summary: 'Coke 600, world was supposed to end'
	}
];

export const eventsDB: EventsDB = {
	'2012': {
		'coke-600': {
			name: 'Coke 600',
			coverSlug: 'rockstar',
			images: [
				{
					slug: 'pizza',
					altText: ''
				},
				{
					slug: 'rockstar',
					altText: ''
				},
				{
					slug: 'kasey',
					altText: ''
				},
				{
					slug: 'burnt',
					altText: ''
				},
				{
					slug: 'paraglider',
					altText: ''
				},
				{
					slug: 'high-line',
					altText: ''
				},
				{
					slug: 'winner',
					altText: ''
				}
			]
		}
	},
	'2021': {
		'mass-summer': {
			name: 'MA Summer',
			coverSlug: 'cover',
			images: [
				{
					slug: 'elevator',
					altText: ''
				},
				{
					slug: 'carrot-cake',
					altText: ''
				},
				{
					slug: '93',
					altText: ''
				},
				{
					slug: 'lolita',
					altText: ''
				},
				{
					slug: 'seaport',
					altText: ''
				},
				{
					slug: 'eagle',
					altText: ''
				},
				{
					slug: 'greenway',
					altText: ''
				},
				{
					slug: 'arch',
					altText: ''
				},
				{
					slug: 'wharf',
					altText: ''
				},
				{
					slug: 'bunny',
					altText: ''
				},
				{
					slug: 'onramp',
					altText: ''
				},
				{
					slug: 'garden',
					altText: ''
				},
				{
					slug: 'owo',
					altText: ''
				},
				{
					slug: 'skyline',
					altText: ''
				},
				{
					slug: 'lakeside',
					altText: ''
				},
				{
					slug: 'reception',
					altText: ''
				},
				{
					slug: 'double',
					altText: ''
				},
				{
					slug: 'panorama',
					altText: ''
				},
				{
					slug: 'cover',
					altText: ''
				},
				{
					slug: 'mountain',
					altText: ''
				},
				{
					slug: 'chipmunk',
					altText: ''
				},
				{
					slug: 'coffee',
					altText: ''
				},
				{
					slug: 'huevos',
					altText: ''
				}
			]
		}
	},
	'2023': {
		'pax-east': {
			slug: 'pax-east',
			name: 'PAX East',
			coverSlug: 'sparta',
			images: [
				{
					slug: 'cape-cod',
					altText: 'cape-cod'
				},
				{
					slug: 'sparta',
					altText: 'sparta'
				}
			]
		},
		'dc-spring': {
			name: 'DC Spring',
			coverSlug: 'waldorf',
			images: [
				{ slug: 'waldorf', altText: '' },
				{ slug: 'uconn', altText: '' },
				{ slug: 'onsite', altText: '' },
				{ slug: 'queso', altText: '' },
				{ slug: 'oval', altText: '' }
			]
		}
	},
	'2024': {
		'pax-east': {
			slug: 'pax-east',
			coverSlug: 'baby-girl',
			name: 'PAX East',
			images: [
				{
					slug: 'baby-girl',
					altText: 'baby-girl'
				},
				{
					slug: 'cafeteria',
					altText: 'cafeteria'
				}
			]
		},
		'dreamhack-dallas': {
			slug: 'dreamhack-dallas',
			coverSlug: 'gstew',
			name: 'Dreamhack Dallas',
			images: [
				{
					slug: 'baseball',
					altText:
						'From left to right sitting in the stands at Truist Park in Atlanta, GA: Brandon, Mike Tarpey, Bryant.'
				},
				{
					slug: 'ddr',
					altText:
						'Mike Tarpey holding a rainbow-colored Dance Dance Revolution arrow pillow made by Maiden And The Machine.'
				},
				{
					slug: 'banks',
					altText:
						'Pictured on the left is James Banks, the premier player interviewer and stage hype-man in Counter-Strike esports. Pictured on the right is Mike Tarpey, owner of this website (tarpey.dev).'
				},
				{
					slug: 'kaelaris',
					altText:
						"Mike Tarpey takes a selfie with James 'Kaelaris' Carrol, long-time StarCraft II commentator and host."
				},
				{
					slug: 'gstew',
					altText:
						'The winning moment from IEM Dallas 2024. Members of G2 Esports stand behind their trophy on-stage after defeating Vitality 2-1 in the best-of-3 series. Their faces are displayed prominently on the big screen above the stage, while smaller yellow pyrotechnics fire off on each side.'
				}
			]
		},
		'denver': {
			slug: 'denver',
			coverSlug: 'cactus',
			name: 'Denver',
			images: [
				{
					slug: 'i64',
					altText:
						"View from the driver's seat on Interstate 64 westbound near Lexington, Virginia. Trees line each side of the road, and the car in front looks like it's almost touching the low-hanging mountain clouds."
				},
				{
					slug: 'wv',
					altText:
						"View from the driver's seat on Interstate 64 westbound at the Welcome sign for West Virginia. A small camper is underneath the sign. The speed limit sign says 70 miles per hour."
				},
				{
					slug: 'louisville',
					altText:
						"View from the driver's seat on Interstate 64 westbound , with a blurred Louisville skyline in the background. The bottom third of the photo is the dashboard of the Mazda."
				},
				{
					slug: 'arch',
					altText:
						"View of the St. Louis Arch from the driver's seat on Interstate 70 westbound. A US Bank skyscraper is visible underneath the arch."
				},
				{
					slug: 'baseball',
					altText:
						"Busch Stadium, home of the St. Louis Cardinals professional baseball team, viewed from the driver's seat on Interstate 70 westbound."
				},
				{
					slug: 'billboard',
					altText:
						'A highway billboard that reads "IS ANYONE EVEN READING THIS?", viewed from the driver\'s seat on Interstate 70 westbound. It\'s an ad for a local Dairy Queen.'
				},
				{
					slug: 'windfarm',
					altText:
						"View from the driver's seat on Interstate 70 westbound near Beverly, Kansas. The sun has set and wispy clouds line the horizon. The shillouette of a wind farm is visible (about a dozen turbines)."
				},
				{
					slug: 'golden',
					altText:
						'View from the driver\'s seat in downtown Golden, Colorado. The 12th Street stoplight is red. An arching sign reads "Howdy Folks! WELCOME TO GOLDEN, WHERE THE WEST LIVES". Small two-story buildings in earthy tones line each side of the street, with cars parked in front and pedestrians walking by.'
				},
				{
					slug: 'elmo',
					altText:
						'A toy Volkswagen bus in the Colorado Mills mall with a peace sign on the front. Elmo is driving and a polar bear is in the passenger seat.'
				},
				{
					slug: 'geological',
					altText:
						'A huge, layered rock formation near Red Rocks Trail in Golden, Colorado. Cars can be seen traveling the highway in the bottom portion of the image.'
				},
				{
					slug: 'spirits',
					altText:
						'Framed images of family members who are no longer with us, on a white wooden stand with metal drawer handles. The caption in front reads "we know you would be here today, if heaven wasn\'t so far away".'
				},
				{
					slug: 'altar',
					altText:
						"A small garden area, illuminated by string lights running from locations outside the image up to a tree above the wedding altar. There's a wooden barrel underneath the altar, and the ground is a mixture of small pebble paths and a grassy area."
				},
				{
					slug: 'cafe',
					altText:
						"Mike Tarpey dressed in a University of Connecticut hat and a light gray Buc-ee's hoodie, drinking an iced vanilla latte and eating a turkey + egg breakfast sandwich on grilled sourdough, with a cup of vinegar-based hot sauce."
				},
				{
					slug: 'lookout',
					altText:
						'Panoramic view from the parking lot of the Buffalo Bill Museum parking lot, looking toward the Rocky Mountains underneath a partly cloudy blue sky. Trees are interspersed in the foreground, with a winding road down the mountain.'
				},
				{
					slug: 'ashe',
					altText:
						'Sign from the Buffalo Bill Museum that reads "BUFFALO BILL\'S WILD WEST. CONGRESS, ROUGH RIDERS OF THE WORLD. MISS ANNIE OAKLEY, THE PEERLESS LADY WING-SHOT." Annie Oakley is holding a rifle in her right hand, propped up on the prairie, with other Wild West participants taking shots in the background behind her.'
				},
				{
					slug: 'carrygun',
					altText:
						'Photograph in the Buffalo Bill Museum of a man shooting a rifle behind him by leaning back at a 90 degree angle and craning his neck, basically forming an upside-down J shape with his body.'
				},
				{
					slug: 'grave',
					altText:
						"Wide-angle photograph taken from behind Buffalo Bill's grave site. The US flag and Colorado state flags fly on the same pole near the top of the image. A few tourists are observing various spots around the grave."
				},
				{
					slug: 'hike',
					altText:
						'Looking down at our hiking shoes on Lookout Mountain in Colorado. One pair is tan with bright red laces, and the other pair is gray with white accents.'
				},
				{
					slug: 'owl',
					altText:
						'A stuffed Great Horned Owl looking directly into the camera with yellow eyes, located in the Lookout Mountain Nature Preserve.'
				},
				{
					slug: 'fusion',
					altText:
						'Closeup of a square fried wonton appetizer topped with chopped corned beef, sauerkraut, thousand island dressing, and greens.'
				},
				{
					slug: 'salmon',
					altText:
						'Closeup of a pan seared, bourbon teriyaki salmon cooked to medium temperature, topped with greens and sitting on a mountain of colcannon risotto.'
				},
				{
					slug: 'mansion',
					altText:
						'Picture of the doll house located in the Stanley Hotel in Estes Park, Colorado. It was featured in The Shining.'
				},
				{
					slug: 'elk',
					altText: 'Statue of an elk in the garden located behind the Stanley Hotel.'
				},
				{
					slug: 'crabapple',
					altText:
						'Closeup of some bright red crabapples hanging from a tree in the garden located behind the Stanley Hotel.'
				},
				{
					slug: 'stanley',
					altText:
						'View from the hedge maze in front of the Stanley Hotel. A statue of F.O. Stanley is in the foreground with a quote from 1928. The Stanley Hotel is in the background.'
				},
				{
					slug: 'no-fishing',
					altText:
						'A sign that reads "NO FISHING ALLOWED. THE FISH THANK YOU. Stanley Village" mounted on a pole in front of a small pond surrounded by rocks.'
				},
				{
					slug: 'hyrule',
					altText:
						"A replica of a Hylian Shield hanging on a natural wood wall in a local sword shop in Estes Park. It's flanked on either side with Master Sword replicas (one blue, one black)."
				},
				{
					slug: 'lovers',
					altText:
						'A primarily black tapestry hanging on the wall of a small indoor mall in Estes Park, Colorado. It reads "THE LOVERS" and depicts two white skeletons kissing, with arms wrapped around each other, bordered by golden flowers and the moon.'
				},
				{
					slug: 'lake',
					altText:
						'View of Lake Estes looking in the southern directions. The water is flat and hardly rippling, the sky is blue with some stretches of think white clouds, and mountains extend far into the distance.'
				},
				{
					slug: 'vista',
					altText:
						'View looking west from Flatirons Vista in Colorado. There is prairie grass in the foreground, followed by some hills, and then mountains in the background. The sky is a yellowish blue at sunset, and the clouds are pinkish to orange.'
				},
				{
					slug: 'oatmeal',
					altText:
						'A blue cup of oatmeal topped with dried fruits, nuts, and coconut shavings. The consumer is wearing a light blue Killua hoodie from Hunter X Hunter.'
				},
				{
					slug: 'burrito',
					altText:
						'A large grilled breakfast burrito, cut in half on a diagonal and plated one half leaning on the other. It is stuffed with eggs, cheese, potatoes, onions and peppers, with a cup of somewhat spicy salsa on the site. (It was delicious every time.)'
				},
				{
					slug: 'symphyotrichum',
					altText:
						'Macro shot of a cluster of flowers on the Red Rocks Trail in Colorado. About half have wilted for the season, but the other half live on and are still bright.'
				},
				{
					slug: 'trail',
					altText:
						"A wooden sign at the intersection of Dalton Point and Red Rocks Trail in Colorado. The red dirt trail is in the foreground and slopes steeply down. Into the distance, there's a large mountain covered by 50% trees and 50% grass. The sky is completely blue."
				},
				{
					slug: 'cactus',
					altText:
						'Closeup of a small cactus on the Red Rocks Trail in Colorado (specifically Dalton Point). Beau is standing in the background, blurred, looking out over the suburbs.'
				},
				{
					slug: 'snake',
					altText:
						'A small snake scurries across the red dirt of the Red Rocks Trail in Colorado. It is white with dark spots in a beautiful diamond pattern.'
				},
				{
					slug: 'crossing',
					altText:
						'View from the trail at the entrance of Matthews/Winters Park, looking north toward Interstate 70. At least 20 street signs are visible.'
				},
				{
					slug: 'blondie',
					altText:
						"Overhead closeup of the blondie dessert from the Hungry Goat restaurant in Morrison, Colorado. Three puffs of cream are equally spaced on top of the rectangular blondie, with a chocolate cookie layer on top and sliced strawberries on opposite ends of the oval-shaped white plate. It's also drizzled with a chocolate sauce."
				},
				{
					slug: 'downtown',
					altText:
						'View from outside the Meow Wolf exhibit in downtown Denver, looking toward the neon "YOU ARE HERE" sign with Mile High Stadium in the background, where the Denver Broncos play home football games in the NFL. It is twilight and the sky is dark blue with an orange tint. A highway overpass is visible in the top right corner of the image.'
				},
				{
					slug: 'forest',
					altText:
						'A fantastic forest landscape inside the Meow Wolf exhibit in downtown Denver. Everything is bathed in a purple light, with some orange decorative mushrooms and imaginary creatures.'
				},
				{
					slug: 'haywire',
					altText:
						'An alien world exhibit inside the Meow Wolf in downtown Denver. The entrance is somewhat tilted as if the building was falling over.'
				},
				{
					slug: 'office',
					altText:
						'An office exhibit inside the Meow Wolf in downtown Denver. The lighting is dim, and an old Gateway computer resting on a wooden desk displays webpages from the imaginary convergence of worlds that the exhibit is based on. There are huge piles of books on either side of the desk, and letters from various fictional characters line the wall.'
				},
				{
					slug: 'worlds',
					altText:
						'Closeup of the alien world exhibit inside the Meow Wolf in downtown Denver. Each white stone pillar has some see-through panes; inside each pillar is a miniature world created from various everyday objects. from flowers and rocks to sea creatures and painted fingernails.'
				},
				{
					slug: 'eyes',
					altText:
						'A multicolored exhibit inside the Meow Wolf in downtown Denver. A globe covered in human eyeballs is in the center of the ceiling, with inflatable pillars branching out and connecting to the walls. Various natural elements (vines, lightning bolts, water droplets) are painted on the walls.'
				},
				{
					slug: 'memento-mori',
					altText:
						'A primarily black-and-white exhibit inside the Meow Wolf in downtown Denver disguises the entrance to the restrooms. The biggest splash of color in the image is a neon sign that reads "memento mori" in a handwritten font.'
				},
				{
					slug: 'artifact',
					altText:
						"A small, transparent globe inside the Meow Wolf in downtown Denver is lit up on the inside in various colors. In addition to the lights, there are plant clippings and other miscellaneous objects inside like a lighter from a Love's truck stop. The effect is as if they are frozen in amber."
				},
				{
					slug: 'twisted',
					altText:
						'Mike Tarpey traverses a glowing magenta rectangular hallway inside the Meow Wolf in downtown Denver. It twists a full 90 degrees in incremental slices.'
				},
				{
					slug: 'hags',
					altText:
						"A small window exhibit inside the Meow Wolf in downtown Denver. A futuristic humanoid rat is dressed in biker clothing with a neon green mohawk. He's standing on top of a pile of retro junk, including a Nintendo Game Boy, an energy drink can, and a New York City MTA MetroCard, among many other things."
				},
				{
					slug: 'kingdom',
					altText:
						'A feature exhibit of the Meow Wolf in downtown Denver. An entire miniature castle is made of stained glass in a plethora of colors. Lasers pointed upward are creating various wireframe designs on the ceiling.'
				},
				{
					slug: 'streets',
					altText:
						'A feature exhibit of the Meow Wolf in downtown Denver. You find yourself looking at a futuristic city street, complete with fictional shops topped with neon light logos. A fake convenience store painted in teal sits behind a van on the right side, and there are lamp posts and a crosswalk.'
				},
				{
					slug: 'alley',
					altText:
						'A back alley exhibit inside the Meow Wolf in downtown Denver. A staircase is locked behind a chain link fence; the door is padlocked. The stairs are lit in various hues including blue, purple and red.'
				},
				{
					slug: 'leaving',
					altText:
						'Mike Tarpey sits on a bright red chair inside the Origin Red Rocks hotel in Golden, Colorado. He is leaning forward and contemplative before the journey back home to Virginia.'
				},
				{
					slug: 'matcha',
					altText:
						'Closeup of a foamy-looking matcha tea, a cool shade of green inside a black cup with a handle.'
				},
				{
					slug: 'sandwich',
					altText:
						'Closeup of a turkey sandwich with cheese, greens, apple slice, and basil mayo. The sandwich is sliced in half, with one half stacked on the toher. There is a long wooden pick holding each half together between two slices of grilled bread.'
				},
				{
					slug: 'prairie',
					altText:
						"View from the driver's seat on Interstate 76 eastbound near Roggen, Colorado. The road stretches straight all the way into the cloudy horizon, with prairie grass on each side of the road."
				},
				{
					slug: 'bouquet',
					altText:
						'A fabric bird is on display in a local coffee shop in Clive, Iowa. It was crafted from various cutout fabric shapes: it is pink and a bit chubby, with long brown legs and purple antennae. It is also holding a bouquet of blue and yellow fabric flowers.'
				},
				{
					slug: 'chillin',
					altText:
						"View from the driver's seat on State Road 30 eastbound in Cedar Rapids, Iowa. The water tower has the city name in big capital serif letters. There is light traffic on the westbound side of the divided highway."
				},
				{
					slug: 'genji',
					altText:
						"View from the driver's seat in a Wisconsin driveway. Genji, a large fluffy white dog, stares at the photographer from behind the glass screen door of his house."
				},
				{
					slug: 'burgers',
					altText:
						"Mike Tarpey eats burgers and appetizers at Captain Mike's restaurant with his partner Beau and the Spragues from Wisconsin. The wall is decorated with naval trinkets like a wood-carved sailboat and a gold framed photo of Captain Mike, presumably."
				},
				{
					slug: 'library',
					altText:
						'The Spragues check out a mini library box behind a large tree in downtown Kenosha, Wisconsin. It is nighttime and the scene is lit by bright street lamps.'
				},
				{
					slug: 'bonsai',
					altText:
						'A bonsai made from Lego blocks sits on a wooden stand in a coffee shop in northwest Indianapolis. A crochet snail with a pink shell and light tan body is propped up on the side of the bonsai, and various plants are naturally lit in the blurred background.'
				},
				{
					slug: 'travel',
					altText:
						'View from the driver\'s seat on Interstate 74 eastbound near Indianapolis. The blue highway sign reads "CURRENT TRAVEL TIME TO INTERSTATE 70, 7 MILES, 7 MINUTES. INTERSTATE 69, 14 MILES, 33 MINUTES." There is an overpass behind the sign carrying traffic on Arlington Ave.'
				},
				{
					slug: 'yall',
					altText:
						'View from the driver\'s seat on Interstate 75 southbound near Florence, Ohio. A large red and white striped water tower reads "FLORENCE Y\'ALL" under an overcast gray sky.'
				},
				{
					slug: 'refuel',
					altText:
						"Mike Tarpey takes a selfie near the end of the road trip in front of the large Buc-ee's sign that overlooks Interstate 75 in Richmond, Kentucky."
				}
			]
		}
	},
	'2025': {
		'disney': {
			slug: 'disney',
			coverSlug: 'achievement',
			name: 'Disney World',
			images: [
				{ slug: 'no-parking', altText: '' },
				{ slug: 'port-orange', altText: '' },
				{ slug: 'memories', altText: '' },
				{ slug: 'halifax', altText: '' },
				{ slug: 'pinball', altText: '' },
				{ slug: 'ursula', altText: '' },
				{ slug: 'cay', altText: '' },
				{ slug: 'ddr', altText: '' },
				{ slug: 'friends', altText: '' },
				{ slug: 'canada', altText: '' },
				{ slug: 'bambi', altText: '' },
				{ slug: 'flowers', altText: '' },
				{ slug: 'red', altText: '' },
				{ slug: 'gift-shop', altText: '' },
				{ slug: 'tangled', altText: '' },
				{ slug: 'mousse', altText: '' },
				{ slug: 'sunset', altText: '' },
				{ slug: 'lion-king', altText: '' },
				{ slug: 'cake', altText: '' },
				{ slug: 'every-night', altText: '' },
				{ slug: 'sunbathe', altText: '' },
				{ slug: 'mushrooms', altText: '' },
				{ slug: 'edge', altText: '' },
				{ slug: 'skyliner', altText: '' },
				{ slug: 'alt', altText: '' },
				{ slug: 'salute', altText: '' },
				{ slug: 'dragon', altText: '' },
				{ slug: 'beloved', altText: '' },
				{ slug: 'space', altText: '' },
				{ slug: 'donald', altText: '' },
				{ slug: 'sippers', altText: '' },
				{ slug: 'lumpia', altText: '' },
				{ slug: 'tempura', altText: '' },
				{ slug: 'tart', altText: '' },
				{ slug: 'brie', altText: '' },
				{ slug: 'china', altText: '' },
				{ slug: 'dwarfs', altText: '' },
				{ slug: 'arlecchino', altText: '' },
				{ slug: 'spheres', altText: '' },
				{ slug: 'emporium', altText: '' },
				{ slug: 'bayou', altText: '' },
				{ slug: 'hi-ho', altText: '' },
				{ slug: 'lumiere', altText: '' },
				{ slug: 'boys', altText: '' },
				{ slug: 'cantina', altText: '' },
				{ slug: 'falcon', altText: '' },
				{ slug: 'hollywood', altText: '' },
				{ slug: 'vanessa', altText: '' },
				{ slug: 'break', altText: '' },
				{ slug: 'look', altText: '' },
				{ slug: 'busted', altText: '' },
				{ slug: 'hugs', altText: '' },
				{ slug: 'droid', altText: '' },
				{ slug: 'dog', altText: '' },
				{ slug: 'standby', altText: '' },
				{ slug: 'aimgod', altText: '' },
				{ slug: 'diagram', altText: '' },
				{ slug: 'slinky', altText: '' },
				{ slug: 'favor', altText: '' },
				{ slug: 'lockers', altText: '' },
				{ slug: 'space-mountain', altText: '' },
				{ slug: 'magical', altText: '' },
				{ slug: 'foliage', altText: '' },
				{ slug: 'waterfall', altText: '' },
				{ slug: 'linksys', altText: '' },
				{ slug: 'river', altText: '' },
				{ slug: 'signage', altText: '' },
				{ slug: 'hippos', altText: '' },
				{ slug: 'crocodiles', altText: '' },
				{ slug: 'lynx', altText: '' },
				{ slug: 'zebras', altText: '' },
				{ slug: 'giraffe', altText: '' },
				{ slug: 'elephant', altText: '' },
				{ slug: 'cheetahs', altText: '' },
				{ slug: 'lions', altText: '' },
				{ slug: 'goats', altText: '' },
				{ slug: 'crossroads', altText: '' },
				{ slug: 'alone-together', altText: '' },
				{ slug: 'attitude', altText: '' },
				{ slug: 'fear', altText: '' },
				{ slug: 'accusations', altText: '' },
				{ slug: 'pandora', altText: '' },
				{ slug: 'candid', altText: '' },
				{ slug: 'achievement', altText: "A Hidden Mickey located in the queue for the 'It's Tough to be a Bug!' show at Animal Kingdom in Disney World. Fallen leaves outline the shape of the classic Mickey Mouse logo: two circular ears positioned at the top-left and top-right of a larger circular head in the middle." },
				{ slug: 'main-event', altText: '' },
				{ slug: 'small-world', altText: '' },
				{ slug: 'leaving', altText: '' },
				{ slug: 'blessed', altText: '' },
				{ slug: 'coco', altText: '' },
				{ slug: 'frozen', altText: '' },
				{ slug: 'bonsai', altText: '' },
				{ slug: 'guardians', altText: '' },
				{ slug: 'loading', altText: '' },
				{ slug: 'mindblown', altText: '' },
				{ slug: 'millennial', altText: '' },
				{ slug: 'twilight', altText: '' },
				{ slug: 'world', altText: '' },
				{ slug: 'tick-tock', altText: '' },
				{ slug: 'france', altText: '' },
				{ slug: 'hells-kitchen', altText: '' },
				{ slug: 'pop', altText: '' },
				{ slug: 'large', altText: '' },
				{ slug: 'farewell', altText: '' },
				{ slug: 'hometown', altText: '' },
				{ slug: 'relic', altText: '' },
				{ slug: 'a1a', altText: '' },
				{ slug: 'marineland', altText: '' },
				{ slug: 'stretch', altText: '' },
				{ slug: 'kenly', altText: '' },
				{ slug: 'dabi', altText: '' },
				{ slug: 'wake-up', altText: '' },
				{ slug: 'merch', altText: '' },
				{ slug: 'mugs', altText: '' },
			],
		},
	}
};

/**
 * Return a list of event slugs for a given year.
 */
export function getEventSlugsForYear(year: string): string[] {
	return Object.keys(eventsDB[year]);
}

/**
 * Return a list of event slug->name key values for a given year.
 */
export function getEventNamesBySlugForYear(year: string): Record<string, string> {
	let eventSlugNameMap: Record<string, string> = {};
	for (const [slug, event] of Object.entries(eventsDB[year])) {
		eventSlugNameMap[slug] = event.name;
	}
	return eventSlugNameMap;
}

/**
 * Return the SEO cover image for a given event.
 */
export function getEventKeyImage(year: string, eventSlug: string): EnhancedImageData {
	const coverSlug = getEventCoverSlug(year, eventSlug);
	const enhancedImageData = getYearEventImages(year, eventSlug);
	// look for the requested cover, just return the last image in the set
	// if we can't find it for some reason (typo?)
	return enhancedImageData.find((image) => image.imageSlug === coverSlug) ?? enhancedImageData[enhancedImageData.length - 1];
}

/**
 * Return the SEO cover image slug for a given event.
 */
export function getEventCoverSlug(year: string, eventSlug: string): string {
	return eventsDB[year][eventSlug]['coverSlug'];
}

/**
 * Return the key image for every event in a year.
 */
export function getYearKeyImages(year: string): EnhancedImageData[] {
	const eventSlugs = getEventSlugsForYear(year);
	return eventSlugs.map((eventSlug: string) => getEventKeyImage(year, eventSlug));
}

/**
 * Return a single image given the entire image path.
 */
export function getEventImageByName(
	year: string,
	eventSlug: string,
	imageSlug: string
): EnhancedImageData {
	const enhancedImageData = getYearEventImages(year, eventSlug);
	// TODO error handling here
	return enhancedImageData.find((image) => image.href === `/${year}/${eventSlug}/${imageSlug}`)!;
}

/**
 * Return all of the images for a given year + event.
 */
export function getYearEventImages(year: string, eventSlug: string): EnhancedImageData[] {
	const imageData = eventsDB[year][eventSlug]['images'];
	return imageData.map((imageData: EventImage) =>
		transformToEnhancedImageData(year, eventSlug, imageData)
	);
}

/**
 * Take EventImage data and transform it to the EnhancedImageData
 * required by Svelte's enhanced:img tag.
 */
export function transformToEnhancedImageData(
	year: string,
	eventSlug: string,
	image: EventImage
): EnhancedImageData {
	const eventSlugNameMap = getEventNamesBySlugForYear(year);
	const srcSet = getImageBuildPaths(year, eventSlug, image.slug);
	return {
		year: year,
		eventSlug: eventSlug,
		eventName: eventSlugNameMap[eventSlug],
		imageSlug: image.slug,
		href: `/${year}/${eventSlug}/${image.slug}`,
		altText: image.altText,
		...srcSet
	};
}

/**
 * Get a direct link to the build URLs of a certain image.
 * Useful for SEO (we need the built image file which includes
 * an optimization hash that changes every build).
 */
export function getImageBuildPaths(year: string, eventSlug: string, imageSlug: string): SrcSet {
	const src400 = getImageImport(`/src/lib/albums/${year}/${eventSlug}/${imageSlug}-400w.webp`);
	const src800 = getImageImport(`/src/lib/albums/${year}/${eventSlug}/${imageSlug}-800w.webp`);
	const src1600 = getImageImport(`/src/lib/albums/${year}/${eventSlug}/${imageSlug}-1600w.webp`);
	return {
		src: src400,
		src400: src400,
		src800: src800,
		src1600: src1600,
		srcset: `${src400} 1x, ${src800} 2x`,
		srcsetHero: `${src800} 1x, ${src1600} 2x`,
	};
}
