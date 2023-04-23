import Image from "next/image"
import articlesWave from "public/articles-wave.svg"

function Footer() {
  return (
    <div className="bg-footerBgColor">
      <footer className="pb-8 text-center">
        <span className="text-center font-serif text-sm font-bold text-amber-600">
          © 2023-present Lucas Faria. All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Footer
