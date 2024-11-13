import '../../public/logo.png'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-10">

      <div className="flex flex-col">

        <img src="logo.png" alt="logo" className="w-20 h-30 mb-10 mt-10"/>
        
        <div>
        
          <p className="text-3xl font-bold text-left whitespace-pre-line">Kick-start your next MVP. <br/> 
          Quick, affordable, and hassle-free
          <br/> development</p>
          
          <p className="text-s text-left whitespace-pre-line text-gray-500 pt-5 pb-5"> Turn your idea into the market-ready MVP in less than a month. With all <br/> you need to launch and run it. </p>

        </div>

        <div className="flex flex-row items-left">
          <button className="bg-black text-white font-bold m-1 py-2 px-4 rounded-xl">
            <a href="#pricing"> See Pricing </a>
          </button>

          <button className="bg-gray-300 text-black font-bold m-1 py-2 px-4 rounded-xl flex items-center">
            <a href="https://cal.com/mahesh-kasbe-5lkuz4/30min" target="_blank" className="flex items-center" rel="noopener noreferrer"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              Book a call
            </a>
          </button>

        </div>

        </div>

      <div className="p-5">
          <p className="text-xl font-bold text-left whitespace-pre-line p-2"> Get that idea out of your head. Let us take it on </p>

          <p className="text-s text-left whitespace-pre-line text-gray-500 p-2"> <b> All included. </b> Web application as your core product, landing page to <br/> drive sales, and SEO-ready blog to start getting organic traffic. </p>

          <p className="text-s text-left whitespace-pre-line text-gray-500 p-2"> <b> Complete infrastructure. </b> Get seamless integration with payment <br/> gateways, user authentication systems, and email marketing platforms. </p>

          <p className="text-s text-left whitespace-pre-line text-gray-500 p-2"> <b>  It actually works.</b> We code using latest technologies to ensure blazing- <br/> fast performance, stability, and scalability. </p>

          <p className="text-s text-left whitespace-pre-line text-gray-500 p-2"> <b> Less is more. </b> We guide you to define the core features of your MVP and <br/> keep it simple. Stop planning and start testing your idea with real users. </p>
      </div>

      <div className=" p-5">

          <p className="text-xl font-bold text-left whitespace-pre-line p-2"> From idea to the real product. How we do it </p>
              
          <p className="text-s text-left whitespace-pre-line text-gray-500 p-2"> <b> Specifications. </b> We discuss your idea and craft a detailed document <br/> outlining your future product. It serves as an agreement and guides us <br/> during the process. </p>

          <p className="text-s text-left whitespace-pre-line text-gray-500 p-2"> <b> Development. </b> Watch your MVP come alive in real-time through a private <br/> Discord channel, with regular updates at every milestone. </p>

          <p className="text-s text-left whitespace-pre-line text-gray-500 p-2"> <b> Launch. </b> We deploy the product on your server, onboard you, and show <br/> you the ropes, ensuring a smooth take-off. </p>
          
      </div>

      <div id="pricing" className="p-5">
          <p className="text-xl font-bold text-left whitespace-pre-line p-2"> Fixed price with no hidden costs. </p>
          <p className="text-xl font-bold text-left whitespace-pre-line p-2"> $1,999/MVP. </p>
          <ul className="list-disc list-inside text-s text-left whitespace-pre-line p-2 text-gray-500">
            <li> Web app, landing page, and blog. </li>
            <li> Your design to code. </li>
            <li> No design? We’ll build the UI with a beautiful component library. </li>
            <li className="whitespace-pre-line"> Integrations: payments, API, database, authentication, <b/> & newsletters. </li>
            <li> Setup and deployment. </li>
            <li> Onboarding to teach you how to handle your product. </li>
          </ul>

          <button className="bg-black text-white font-bold m-1 py-2 px-4 rounded-xl">
            <a href="https://tally.so/r/wz0N40" target="_blank"> Get Started </a>
          </button>

          <button className="bg-gray-300 text-black font-bold m-1 py-2 px-4 rounded-xl">
            <a href="https://cal.com/mahesh-kasbe-5lkuz4/30min" target="_blank" className="flex items-center" rel="noopener noreferrer"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              Book a call
            </a>
          </button>
      </div>

      <div className="p-5"> 

        <p className="text-xl font-bold text-left whitespace-pre-line p-2"> About the founder. How Starta was born </p>
          
        <p className="text-s text-left whitespace-pre-line p-2 text-gray-500"> Hello, my name is Mahesh. I work as a 9-5 Software Engineer, <br/> but my itch to build things led me to launch my own product. The first <br/> two were quite successful, generating both income and happy users. <br/> Amazing feeling. </p>

        <p className="text-s text-left whitespace-pre-line p-2 text-gray-500"> Seeing others having great ideas and no chance to bring them to life, <br/> motivated me to start Starta. Our goal is to help you kick-start your <br/> product. You have idea, we have coding skills. </p>

        <p className="text-s text-left whitespace-pre-line p-2 text-gray-500"> The biggest MVP mistakes? Poor implementation or overengineering. <br/> Some products crumble under bugs and missing features, while others <br/> become bloated monsters, costly to launch and maintain. </p>

        <p className="text-s text-left whitespace-pre-line p-2 text-gray-500" > Starta saves you from both. We build lean products with just the right <br/> features for smooth performance and user love. </p>
      </div>

      <div className='flex flex-row text-left text-s p-10 text-gray-600'>
        <div className='mr-40'>
         <p className='m-1'> Starta. All rights reserved © 2024.</p>
        </div>

        <div className='flex flex-row'>
         {/* <a href="" className='m-1 underline'> Tools </a>
          <a href="" className='m-1 underline'> Blog </a>
          <a href="" className='m-1 underline'> Glossary </a> */}
          <a href="" className='m-1 underline'> Newsletter </a>
        </div>

      </div>
     
    </div>
  );
}
