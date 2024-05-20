import './App.css';
import firstImage from './assets/firstImage.svg';
import secondImage from './assets/secondImage.svg';
import thirdImage from './assets/thirdImage.svg';
import fourthImage from './assets/fourthImage.svg';

function App() {
  let galleryList = [
    firstImage, secondImage, thirdImage, fourthImage
  ]
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
    <div className="wrapper md:px-[60px]">
      <div className="content md:w-[60%]">
        <h1 className='font-bold md:text-[72px] text-[60px] md:px-0 px-6 mb-[70px]'>Design <br className='md:hidden' /> is the way how you express the feelings</h1>
      </div>
      <div className="gallery flex justify-between md:flex-row flex-col items-center">
        {galleryList.map((image, index) => (
          <div className="card flex flex-col max-w-[330px] mb-8">
            <p className='text-[40px] font-bold text-[#252525] opacity-35'> 0{index} </p>
            <p className='font-bold text-[24px] text-[#252525] opacity-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src={image} alt="Image" />
          </div>
        ))}
      </div>      
    </div>
    <footer className='bg-[#252525] text-white flex justify-around mt-20'>
      Copyright &copy; theactualdev { year }
      <a href="https://www.figma.com/design/4UbuQuyAc6FheovBkMGNKo/50%2B-Landing-page-designs-(Community)?node-id=868%3A162&t=th7jQhjO4V4SrnII-1">Figma</a>
    </footer>
    </>
  )
}

export default App
