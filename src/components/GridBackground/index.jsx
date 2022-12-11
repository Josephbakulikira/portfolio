import React, {useState, useEffect} from 'react'
import './style.css'

function GridBackground() {
    const {height, width} = useWindowDimensions();
    const tile_size = 120
    
    const rows = Math.floor(height/tile_size)
    const cols = Math.floor(width/tile_size)


  return (
    <div className='tiles-container'>
        <div style={{'--rows': rows, '--cols': cols}} id="tiles" className='text-white text-center' >
        {
            Array.from(Array(rows*cols)).map((tile, index) => {
                return <div key={index} className='tile'></div>
            })

        }
    </div>
    </div>
  )
}

export function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    }
}
export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)

    }, []);
    return windowDimensions;
}

export default GridBackground