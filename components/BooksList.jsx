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

    

export default function BooksList() {
  return (
    <div className="">
      <h1 className="text-4xl font-semibold tracking-tight mb-8">Featured Books</h1>
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
