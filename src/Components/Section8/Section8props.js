import React from 'react'

function Section8props({title, date, link}) {
  return (
    <div className="p-3 section7props">
      <h6 className="">
        a {date}
      </h6>
      <h1>
          <a href="{link}">{title}</a>
        
      </h1>
    </div>
  )
}

export default Section8props