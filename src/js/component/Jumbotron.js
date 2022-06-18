import React from 'react'

const Jumbotron = () => {
  return (
    <div className="jumbotron row bg-secondary text-white mt-4 mb-4 pl-3 pb-4">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <hr className="my-4"></hr>
        <p><strong>This is a subtext, but if you want more info, please click "Learn More</strong></p>
        <div className="col m-auto ml-4">
            <a className="btn btn-primary btn-lg " href="#" role="button">Learn more</a>
        </div>
    </div>
  )
}

export default Jumbotron