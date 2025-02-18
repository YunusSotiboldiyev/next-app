import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
          <Image src="/IMAGE.png" alt="logo" width={300} height={200} />
            
            <p className="text-gray-600 text-sm">
              Sign up for texts to be notified about our best offers on the perfect gifts.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">All products</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>Phones</li>
              <li>Watch</li>
              <li>Tablet</li>
              <li>Laptops</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>About</li>
              <li>Support</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>Style Guide</li>
              <li>Licensing</li>
              <li>Change Log</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between text-gray-600 text-sm border-t pt-4">
          <p>Made By: Azwedo ↗</p>
          <p>Powered by: Webflow ↗</p>
        </div>
      </div>
    </footer>
  );
}
