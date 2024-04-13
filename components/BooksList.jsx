import { Book } from "lucide-react"


const FeaturedBooks = [
  {
    title: 'Curious George & The Firefighters',
    readTime: '5 minutes',
    image: '/51ivdcJn6PL.jpg',
    desc: 'There is a fire! Can George help the firefighters and save the day?',
    key: 0
  },
  {
    title: 'Curious George & The Library',
    readTime: '8 minutes',
    image: '/georgeLibrary.webp',
    desc: 'George loves books! Can he help the librarian and save the library?',
    key: 1
  },
]


    

export default function BooksList() {
  return (
    <div className="">
      <h1 className="text-4xl font-semibold tracking-tight mb-8">Featured Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {FeaturedBooks.map((book) => (
          <div key={book.key} className="flex flex-row ustify-center w-full h-full p-8 bg-white dark:bg-neutral-800 border border-neutral-200 rounded-xl shadow-sm">
            <div className="w-full h-full justify-between flex flex-col">
              <h2 className="text-2xl font-semibold my-2 mb-2 tracking-tight">{book.title}</h2>
              <p className="text-lg mt-2">{book.desc}</p>
            </div>
            <img src={book.image} alt={book.title} className="w-1/2 object-cover rounded-md bg-center" />
          </div>
        ))}
        <button className="w-full bg-white border-dashed dark:bg-neutral-800 border border-neutral-200 rounded-xl shadow-sm">
          <div className="text-center flex flex-col">
            <div className="relative h-[64px] w-[48px] mx-auto">
              <Book size={48} fill="#f3f4f6" className="text-neutral-400 absolute dark:text-neutral-500 mx-auto" />
              <Book size={48} fill="#f3f4f6" className="text-neutral-400 absolute ml-4 mt-4 rotate-12 dark:text-neutral-500 mx-auto" />
            </div>
            <h3 className="mt-2 text-sm font-semibold text-neutral-900">Add a new book</h3>
            <p className="mt-1 text-sm text-neutral-500">Add a new book to your library</p>
          </div>
        </button>

      </div>
    </div>
  )
}
