import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import './Header.css';

export function Header() {
  return (
    <div className='header'>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <h1>Wordle</h1>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  )
}
