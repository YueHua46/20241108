import Container from "@/components/Container";


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-16 bg-white p-4 flex justify-between items-center">
        {/* logo */}
        <div>Logo</div>
        {/* navigation */}
        <nav className="flex">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 gap-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-5xl font-serif">Rotate PDF Pages</h1>
          <p className="text-sm text-gray-600 max-w-lg">Interview project</p>
        </div>
        <Container />
      </main>
      <footer className="flex justify-center items-center p-4 h-20 bg-white">
        <p className="flex gap-1">
          <span>©</span>
          <span>2024</span>
          <span>Rotate PDF Pages</span>
        </p>
        <p>All rights reserved</p>
      </footer>
    </div>
  );
}
