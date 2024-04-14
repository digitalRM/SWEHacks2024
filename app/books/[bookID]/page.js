'use client'
import { useEffect, useState } from 'react';
import Paragraph from '../../Paragraph';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useCookies } from 'next-client-cookies';

const listOfBooks = [
  {
    title: 'Curious George & The Firefighters',
    titleEncoded: 'curious-george-and-the-firefighters',
    readTime: 'A 5 minute read',
    image: '/51ivdcJn6PL.jpg',
    desc: 'There is a fire! Can George help the firefighters and save the day?',
    key: 0,
    story: [{"paragraph": "Curious George and the Firefighters Margret and H. A. Rey MARGRET & H. A. REY'S Curious George and the Firefighters This is George. He was a good little monkey and always very curious. Today George and his friend the man with the yellow hat joined Mrs. Gray and her class on their field trip to the fire station." , "image": "book1_img/image1.png"},
    {"paragraph": "The fire chief was waiting for them right next to a big red fire truck. 'Welcome!' he said, and he led everyone upstairs to begin the tour. There was a kitchen with a big table, and there were snacks for everyone. The fire chief told them all about being a firefighter. George tried hard to pay attention, but there were so many things for a little monkey to explore. Like that shiny silver pole in the corner... Where did that pole go? George was curious.","image": "book1_img/image2.png"},
    {"paragraph": "Why, it went back downstairs! There was the great big fire truck. There was a map of the city. And there was a whole wall full of coats and hats and big black boots!","image": "book1_img/image3.png" },
    {"paragraph": "George had an idea. First, he stepped into a pair of boots. Next, he picked out a helmet. And, finally, George put on a jacket. He was a firefighter! Suddenly ... BRRRIINNGG! ","image": "book1_img/image4.png" },
    {"paragraph": "The firefighters all rushed in. 'This is not my helmet!' said one. 'My boots are too big!' said another. 'Hurry! Hurry!' called the fire chief. A bright red light on the map of the city told him just where the fire was. There was no time to waste!","image": "book1_img/image5.png" },
    {"paragraph": "One by one, the firefighters jumped into the fire truck. And so did George. The fire truck with all the firefighters sped out of the firehouse. And so did George! The siren screamed and the lights flashed. The truck turned right. Then it turned left. 'WHOO WHOO WHOO' went the whistle, and George held on tight. Whoo Whoo Whoooo","image": "book1_img/image6.png" },
    {"paragraph": "Soon the fire truck and all the firefighters pulled up to a pizza parlor on Main Street. Smoke was coming out of a window in the back, and a crowd was gathering in the street. 'Thank goodness you're here!' cried the cook. The firefighters rushed off the truck and started unwinding their hoses. They knew just what to do. And George was ready to help. He climbed up on the hose reel... One of the firefighters saw George trying to help, and he took George by the arm and led him out of the way. 'A fire is no place for a monkey!' he said to George. 'You stay here where it's safe.' George felt terrible.","image": "book1_img/image7.png" },
    {"paragraph": "George sat on the bench and looked around. Next to him on the ground was a bucket full of balls. George reached in and took one out. It fit in his hand just right, like the apple he'd had for a snack. A little girl was watching George. He tried to give her the ball, but she was too frightened. George took another ball. And another. 'Look,' a boy said. That monkey is juggling! The boy took a ball from the cage and tossed it to George, but it went too high. George climbed up onto the fire truck to get it. Now George had four balls to juggle. He threw the balls higher and higher. He juggled with his hands. He juggled with his feet. He could do all kinds of tricks!","image": "book1_img/image9.png" },
    {"paragraph": "The boy threw another ball to George. George threw a ball back to the boy. The little girl reached down and picked up a ball, too. Soon all the children were throwing and catching, back and forth. ","image": "book1_img/image10.png" },
    {"paragraph": "The fire chief came to tell everyone that the fire was out. Just then, the little girl laughed and said, 'Look, Mommy—a fire monkey!' 'Hey!' called the fire chief. 'What are you doing up there?' 'What a wonderful idea,' the little girl's mother said to the fire chief. 'Bringing this brave little monkey to help children when they're frightened.' 'Oh,' the fire chief said. 'Well, er, thank you.'","image": "book1_img/image11.png" },
    {"paragraph": "Before long the fire truck was back at the firehouse, where a familiar voice called, 'George!' It was the man with the yellow hat. 'This little monkey had quite an adventure,' said one of the firefighters. 'Is everyone all right?' asked Mrs. Gray. 'Yes, it was just a small fire,' said the fire chief. 'And George was a big help.' Now the field trip was coming to an end. But there was one more treat in store...","image": "book1_img/image12.png" },
    {"paragraph": "All the children got to take a ride around the neighborhood on the shiny red fire truck, and they all got their very own fire helmet. Even George! And it was just the right size for a brave little monkey. ","image": "book1_img/image13.png" }]
  },
  {
    title: 'Curious George & The Library',
    titleEncoded: 'curious-george-and-the-library',
    readTime: 'A 8 minute read',
    image: '/georgeLibrary.webp',
    desc: 'George loves books! Can he help the librarian and save the library?',
    key: 1,
    story: [{"paragraph": "This is George. He was a good little monkey and always very curious. Today George and his friend the man with the yellow hat were at the library." , "image": "book3_img/image1.png"},
    {"paragraph": "George had never been to the library before. He had never seen so many books before, either. Everywhere he looked, people were reading. Some people read quietly to themselves. But in the children's room the librarian was reading out loud." , "image": "book3_img/image2.png"},
    {"paragraph": "It was story hour! George loved stories. He sat down with a group of children to listen. The librarian was reading a book about a bunny. George liked bunnies.", "image": "book3_img/image3.png"},
    {"paragraph": "Behind the librarian was a book about a dinosaur. George liked dinosaurs even more. He hoped she would read it next. But next the librarian read a book about a train. George tried to sit quietly and wait for the dinosaur book to be read. But sometimes it is hard for a little monkey to be patient. When the librarian started a story about jungle animals, George could not wait any longer. He had to see the dinosaur book. He tiptoed closer. 'Look, a monkey!' shouted a girl. The librarian put her finger to her lips. 'We must be quiet so everyone can hear,' she said nicely. 'But there's a monkey!' said a boy. The librarian nodded and smiled. 'Mmm-hmm,' she agreed.", "image": "book3_img/image4.png"},
    {"paragraph": "When she finished reading the jungle story, the librarian reached for the dinosaur book. Where did it go? And where was George? ", "image": "book3_img/image5.png"},
    {"paragraph": "George was all ready to take the dinosaur book home and read it with his friend when another book caught his eye... This book was about trucks. George wanted to take it home, too! And here was a book about elephants. George loved elephants. He added it to his pile.", "image": "book3_img/image6.png"},
    {"paragraph": "George found so many good books, he soon had more than he could carry. He leaned against a shelf to rest. Squeak, went the shelf. 'Shhh!' said a man. Squeak, went the shelf again – and it moved! Why, it wasn't really a shelf after all. George had found a special cart for carrying books.", "image": "book3_img/image7.png"},
    {"paragraph": "What luck! Now George could carry all the books he wanted. He rolled the cart between the shelves and stacked up books about boats and kites and baking cakes. He climbed higher to reach books about cranes and planes", "image": "book3_img/image8.png"},
    {"paragraph": "At last George had all the books he could handle. He couldn't wait to head home and start reading. And right in front of him was a ramp leading to the door. George was curious. Could he roll the cart all the way home? Down the ramp George went. The cart rolled faster and faster. 'Stop!' a library volunteer shouted. 'Come back here with my cart!' But George was too excited to listen. The cart was picking up speed, and George was having fun!", "image": "book3_img/image9.png"},
    {"paragraph": "Until – CRASH! – George and the cart ran smack into a shelf of encyclopedias. Books flew up in the air. And so did George! He landed in a big pile right between O and P. ", "image": "book3_img/image10.png"},
    {"paragraph": "'Oh no!' moaned the volunteer when he saw the mess George had made. 'How am I going to put away all of these books?' 'I'd like to borrow this one,' said a boy from story hour. 'And I'll take this one,' said a girl.", "image": "book3_img/image11.png"},
    {"paragraph": "With help from George and the children, the books were sorted in no time. Soon there was just a small pile of George's favorites left.", "image": "book3_img/image12.png"},
    {"paragraph": " 'Would you like to take those books home with you?' the volunteer asked George. Then he took George to a special desk and helped him get his very own library card.", "image": "book3_img/image13.png"},
    {"paragraph": "George was holding his brand-new card when his friend arrived with a stack of books of his own. 'There you are, George!' he said. 'I see you are all ready to check out.' George and his friend gave their books to the librarian. She smiled when she saw George's pile. 'I was wondering where this dinosaur book went,' she said. 'It's one of my favorites, too.' The librarian stamped the books and handed them back to George.", "image": "book3_img/image14.png"},
    {"paragraph": "With his books under one arm, George waved goodbye to the volunteer, the librarian, and the children from story hour. 'Come see us again, George,' the librarian said, waving back. 'Enjoy your books!'", "image": "book3_img/image15.png"},
    {"paragraph": "And he did. The end.", "image": "book3_img/image16.png"}]
  },
  {
    title: 'Curious George Goes Camping',
    titleEncoded: 'curious-george-goes-camping',
    readTime: 'A 8 minute read',
    image: '/camping.png',
    desc: 'George goes camping! Venture along with George and his friends as they explore the great outdoors.',
    key: 2,
    story: [{"paragraph": "This is George. He was a good little monkey, and always very curious. This weekend George and his friend, the man with the yellow hat, had special plans. They were going camping!", "image": "book4_img/image1.png"},
    {"paragraph": "At the campsite the man with the yellow hat unpacked their gear while George looked at all the tents. He saw tents for big families and one just the right size for a puppy. There were even tents on wheels! \"Would you like to help me put up our tent, George?\" the man asked.", "image": "book4_img/image2.png"},]
    // {"paragraph": "George was happy to help. It would not be hard to set up a tent, he thought. But it wasn't easy! \"George, why don't you fill our bucket with water at the pump?\" his friend suggested. \"We'll need it by our campfire later, when we roast marshmallows.\"", "image": "book4_img/image4.png"},
    // {"paragraph": "Mmm, marshmallows. George loved marshmallows. He couldn't wait to try them roasted! \"Now don't wander off and get into trouble,\" the man warned. But George did not hear him. He was already gone.", "image": "book4_img/image4.png"},
    // {"paragraph": "At the pump George worked the handle up and down. Soon his bucket was full. On the way back down the trail, he saw a family packing up. George watched a girl pour her bucket of water on a campfire. The fire sizzled out. George thought that looked like fun!", "image": "book4_img/image6.png"},
    // {"paragraph": "He poured his bucket of water on the next campfire. \"Hey,\" yelled a camper. \"We weren't finished with that yet!\" The camper began to chase George. But George didn't mean to cause trouble. Now he only wanted to hide. He ran into the forest as fast as he could, but the camper's footsteps followed close behind. George ran faster and faster. The footsteps came closer and closer until, suddenly, they were passing George. Why, it was not the camper chasing George now.", "image": "book4_img/image7b.png"} ,
    // {"paragraph": "It was a deer! What fun to run with a deer! Forgetting all about the camper and the marshmallows, George ran after the deer. But a little monkey cannot run as fast as a deer in the woods. Before long George was lost and all alone. He felt tired and stopped to rest. At first he was worried—he was very far from camp. But there were lots of other animals to keep him company. He saw a lizard sunning on a rock and a squirrel chattering in a tree. Then he saw the tail of a black and white kitty peeking out from under a bush. He was curious. Would the kitty like to play? George gently pulled the kitty out...", "image": "book4_img/image11.png"},
    // {"paragraph": "But it was NOT a kitty! It was a skunk—and it was scared. The skunk lifted its tail and sprayed. WHEW! The spray smelled awful. The animals tried to get away. George wanted to get away, too. But he could not—the smell was all over him!", "image": "book4_img/image12.png"},
    // {"paragraph": "How would he ever get rid of this awful smell? he wondered.", "image": "book4_img/image13.png"},
    // {"paragraph": "Too bad he could not take a bath in the woods... Then George had an idea. He could wash the smell off in the creek! George jumped into the cold water. He splashed and scrubbed. But he was still smelly. And now he was wet, too. But what could he do? George thought and thought. If he climbed up a tree to dry off, would the smell blow away?", "image": "book4_img/image14.png"},
    // {"paragraph": "No. Even dry and high up in the tree, George did not smell better. Poor George. He wished he hadn't wandered so far from camp. He wished he were roasting marshmallows with his friend. Suddenly George heard footsteps heading toward him. Someone was coming!", "image": "book4_img/image15.png"},
    // {"paragraph": "It was the forest animals! But they ran right by him. They had seen something scary. And George saw it, too. It was a fire! George had gotten into trouble for putting out one fire, but this fire wasn't in the campground... This was an emergency! Quickly, George climbed down the tree and grabbed his bucket. He scooped it full of water in the creek. Then—being careful not to spill—he climbed back up and swung from branch to branch through the trees.", "image": "book4_img/image16.png"},
    // {"paragraph": "When George got close enough to the fire, he reached down and poured the water on the flames. Out went the fire with a big hiss! Just then George's friend rushed out of the forest with a ranger.", "image": "book4_img/image17.png"},
    // {"paragraph": "\"George,\" he called, \"I was afraid you would be here.\" \"It's a good thing you were here, George,\" the ranger said. \"We saw smoke from the campground, but you put this fire out just in time.\" George was glad to help. And the man with the yellow hat was glad to see that George was safe. But he had a funny look on his face. \"George,\" he asked, \"what is that smell?\"", "image": "book4_img/image18.png"},
    // {"paragraph": "Back at the campsite, George's friend helped him get rid of the awful smell. After a strange bath in tomato juice, George smelled fine.", "image": "book4_img/image19.png"},
    // {"paragraph": "Then the man with the yellow hat invited the ranger to cook dinner with them over their own small campfire. \"Fires can be nice, if you're careful,\" said the ranger.", "image": ""},
    // {"paragraph": "George agreed. Especially for roasting marshmallows.", "image": "book4_img/image20.png"}]
  },
  {
    title: 'Curious George & The Ice Cream Shop',
    readTime: 'A 10 minute read',
    image: '/iceCream.png',
    desc: 'George loves ice cream! Can he help the ice cream shop stay open?',
    key: 3
  },
]

async function callAPI(object, paragraph, setStory, particles) {
  try {
    const res = await fetch('http://localhost:3001/api/rewrite', {
      method: 'POST',
      body: JSON.stringify({"text": JSON.stringify(paragraph), "particles":particles}),
      headers: {
        'Content-Type': 'application/json' 
      }
    });
    console.log(res);
    if (res.ok) {
      const data = await res.json();

      const newJson = {"paragraph": data.rewritten, "image": object.image};
      
      setStory((prev) => [...prev, newJson]);
    } else {
      console.log("Oops! Something is wrong.");
    }
  } catch (error) {
    console.log(error);
  }
}

export default function Page({ params }) {
  const cookies = useCookies();
  const [story, setStory] = useState([]);
  const [lockAPI, setLockAPI] = useState(false);

  useEffect(() => {
    if (lockAPI) {
      return;
    }
    setLockAPI(true);
    console.log(params.bookID);
    listOfBooks.forEach((book) => {
      if (book.titleEncoded === params.bookID) {
        book.story.forEach((array) => {
          callAPI(array,{"text": array.paragraph}, setStory, cookies.get('impediments'));
        });
      }
    });
  }, []); 

  return (
    <div>
      {
        listOfBooks.map((book) => {
          if (book.titleEncoded === params.bookID) {
            return (
              <div className=' max-w-[1440px] mx-auto' key={book.key}>
                <div className='flex flex-row'>
                  <div className='flex flex-col items-left mt-24'>
                    <Link href='/' className='mb-4'>Back To Home </Link>
                    <h1 className='text-4xl font-semibold tracking-tight'>{book.title}</h1>
                    <p className='text-lg font-medium text'>{book.desc}</p>
                    <p className='text-lg italic text-neutral-500'>{book.readTime}</p>
                  </div>
                  <img src={book.image} alt={book.title} className='mx-auto mt-12 mb-12' />
                </div>

                {
                  story.map((JSON) => (
                    <div>
                      <Paragraph text={JSON.paragraph} />
                      <img src={"http://localhost:3000/" + JSON.image} alt={book.title} className='mx-auto mt-12 mb-12 max-w-[400px] ' />
                    </div>
                    
                    
                  ))
                }
              </div>
            );
          }
          return null;
        })
      }
    </div>
  );
}
