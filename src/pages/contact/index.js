// app/contact/page.tsx
export default function ContactPage() {
    return (
      <main className="px-6 py-12 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" />
          <textarea placeholder="Message" rows={5} className="w-full p-3 border rounded-xl" />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
  
        <div className="mt-10 text-gray-700">
          <p><strong>Email:</strong> info@laddershop.com</p>
          <p><strong>Phone:</strong> +234 801 XXX XXXX</p>
          <p><strong>Location:</strong> Lagos, Nigeria</p>
        </div>
      </main>
    );
  }
  