import { default as logo } from '../assets/summa-logo.png';
import { cn } from "../utils/cn";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className='w-28 object-contain'/>
        <button
        type='button'
        onClick={() => window.open('https://github.com/nrenner0211/backdrop-build')}
        className='black_btn'>
          GitHub
        </button>
      </nav>

      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Summarize Articles with 
        <br className="max-md:hidden"/>
        <span className="orange_gradient">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Summa converts articles links into concise summaries with an open-source article summarizer. Works best on websites with clearly defined blocks of text.
      </h2>
    </header>
  )
}

export default Hero;