import React, { useEffect, useState } from 'react'

const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [])
  


  return (
    <div className='outerContainer text-black min-h-screen p-10 bg-purple-100'>
      <h1 className='text-3xl font-bold mt-150'>Scroll Tracker</h1>
        <p className='text-xl mt-5'>You have scrolled <span className='text-red-500'>{scrollY}px</span></p>

        {/* Just adding dummy content to enable scrolling */}
      <div className='h-[200vh]'></div>
    </div>
  )
}

export default ScrollTracker