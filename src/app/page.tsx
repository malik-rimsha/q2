import Image from '.image.jpg';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function home (){
  return(
    <>
    <div><Header/></div>
      <div className='homeContainer'>
        <div className='childContainer'>
           <h1>Hey,</h1>
           <br />
            My Name is <span className='blueColor'> Rimsha !</span>
            <br />I am an IT student at the Governor's House, specializing in Generative AI, Metaverse, and Web3.
            With a Bachelor of Arts degree, I have a passion for learning IT technologies. Currently, I am 
            focused on mastering Next.js, having already completed TypeScript and front-end web development basics.
          </div>
          <div>
            <img src="image.jpg"alt='Rimsha' className='imageContainer' />
          </div>
        </div>
      <div><Footer/></div>
    </>
  )
}