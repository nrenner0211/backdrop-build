import { default as logo } from '../assets/summa-logo.png';

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

      <h1 className="head_text py-2">
        Summarize Articles with 
        <br className="max-md:hidden"/>
        <span className="gradient">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className='py-2 text-slate-700'>
        Summa converts articles links into concise summaries with an open-source article summarizer. Works best on websites with clearly defined blocks of text.
      </h2>
    </header>
  )
}

export default Hero;