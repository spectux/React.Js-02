const CongratsCard = () => {
  return (
    <div className='congrats-card'>
      <img
        className='background-image'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png'
        alt='Congrats'
      />
      <div className='content'>
        <img
          className='profile-image'
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
          alt='Profile'
        />
        <h1 className='heading'>Congratulations</h1>
        <p className='message'>
          Way to go on your achievement! We are proud of you.
        </p>
        <img
          className='watch-image'
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
          alt='Watch'
        />
      </div>
    </div>
  )
}

const element = <CongratsCard />
ReactDOM.render(element, document.getElementById('root'))
