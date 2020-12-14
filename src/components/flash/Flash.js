import React from 'react'
import { LetterLine, TommyImage } from '../../media/images/svgs';
import './Flash.scss';

const Flash = () => {
  const [length, setLength] = React.useState();


  React.useEffect(() => {
    const path = document.querySelector('.lineSvg path')
    const length = path.getTotalLength();
    setLength(803);
    console.log("LENGTH", length);
  }, [])

  return (
    <div className="flash">
      <TommyImage />
      <LetterLine dashLength={length}/>
    </div>
  )
}

export default Flash
