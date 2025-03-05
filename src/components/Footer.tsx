export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Next.js Blog. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  