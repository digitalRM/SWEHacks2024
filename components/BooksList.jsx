import { Book } from "lucide-react"


const FeaturedBooks = [
  {
    title: 'Curious George & The Firefighters',
    readTime: 'A 5 minute read',
    image: '/51ivdcJn6PL.jpg',
    desc: 'There is a fire! Can George help the firefighters and save the day?',
    key: 0
  },
  {
    title: 'Curious George & The Library',
    readTime: 'A 8 minute read',
    image: '/georgeLibrary.webp',
    desc: 'George loves books! Can he help the librarian and save the library?',
    key: 1
  },
]

const AllBooks = [
  {
    title: 'Curious George & The Firefighters',
    readTime: 'A 5 minute read',
    image: '/51ivdcJn6PL.jpg',
    desc: 'There is a fire! Can George help the firefighters and save the day?',
    key: 0
  },
  {
    title: 'Curious George & The Library',
    readTime: 'A 8 minute read',
    image: '/georgeLibrary.webp',
    desc: 'George loves books! Can he help the librarian and save the library?',
    key: 1
  },
  {
    title: 'Curious George & The Bank',
    readTime: 'A 10 minute read',
    image: '/georgeBank.webp',
    desc: 'George is curious about money! Can he help the bank and save the day?',
    key: 2
  },
  {
    title: 'Curious George & The Hospital',
    readTime: 'A 7 minute read',
    image: '/georgeHospital.webp',
    desc: 'George is curious about doctors! Can he help the hospital and save the day?',
    key: 3
  }
]

const listOfImpediments = [
  {
    name: "Ss",
    key: 0,
    description: "The 's' sound is hard to pronounce."
  },
  {
    name: "Rr",
    key: 1,
    description: "The 'r' sound is hard to pronounce."
  },
  {
    name: "Th",
    key: 2,
    description: "The 'th' sound is hard to pronounce."
  },
  {
    name: "Zz",
    key: 3,
    description: "The 'z' sound is hard to pronounce."
  },
]


    

export default function BooksList({ impediments }) {
  return (
    <div className="">
      {/* <div className="flex flex-row justify-between h-7">
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Featured Books</h1>
        {listOfImpediments.map((impediment) => (
          <div key={impediment.key} className="flex sm:flex-row items-center justify-center w-24 mt-4">
            <button className={`mr-2 mt-1 text-center font-semibold text-5xl focus:ring-neutral-500 focus:border-neutral-500 block w-full h-full shadow-sm border-2 rounded-md md:aspect-square bg-neutral-50 dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500 dark:hover:bg-neutral-600 transition border-neutral-300 border-dashed aspect-square ${impediment[impediment.key] ? "border-orange-500 dark:border-orange-500 bg-orange-500 dark:bg-orange-500 text-black hover:bg-orange-400  hover:dark:bg-orange-400 hover:border-orange-500 hover:dark:border-orange-500 focus:ring-orange-600 focus:border-orange-600" : ""}`}>
              {impediment.name}
            </button>
          </div>
        ))}
      </div> */}
      <h1 className="text-4xl font-semibold tracking-tight mb-2">Featured Books</h1>
      {/* <p className="text-lg text-neutral-600 italic mb-8">Targeting the following sounds: {impediments.map((impediment) => impediment.name).join(", ")}</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {FeaturedBooks.map((book) => (
          <div key={book.key} className="flex flex-row ustify-center w-full h-full p-8 bg-white dark:bg-neutral-800 border border-neutral-200 rounded-xl shadow-sm">
            <div className="w-full h-full justify-between flex flex-col">
              <div>
                <h2 className="text-2xl font-semibold my-2 mb-2 tracking-tight">{book.title}</h2>
                <p className="text-lg text-neutral-600">{book.readTime}</p>
              </div>
              <p className="text-lg mt-2">{book.desc}</p>
            </div>
            <img src={book.image} alt={book.title} className="w-1/2 object-contain rounded-md bg-center" />
          </div>
        ))}
      </div>

    </div>
  )
}
