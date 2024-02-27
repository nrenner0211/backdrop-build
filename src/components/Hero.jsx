import { default as logo } from '../assets/summa-logo.png';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className='w-28 object-contain'/>
        <button
        type='button'
        onClick={() => window.open('https://github.com/nrenner0211/ai-summarizr')}
        className='black_btn'>
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with 
        <br className="max-md:hidden"/>
        <span className="orange_gradient">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className="desc">
        Summa converts articles links into concise summaries with an open-source article summarizer. Works best on websites with clearly defined blocks of text.
      </h2>
    </header>
  )
}

export default Hero;