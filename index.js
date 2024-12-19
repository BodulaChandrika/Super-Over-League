const element = (
  //   Write your code here.
  <div className='container d-flex flex-row justify-content-center'>
    <h1 className='heading'>Super Over League</h1>
    <div className='d-flex flex-column justify-content-center'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='image'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
