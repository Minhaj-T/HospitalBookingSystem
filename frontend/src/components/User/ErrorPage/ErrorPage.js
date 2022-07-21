import './errorpage.scss'

import React from 'react'
import { FaStethoscope } from 'react-icons/fa'

function ErrorPage() {
  return (
    <>
<main>
  <h1>4<span><i class="fas fa-ghost"><FaStethoscope/></i></span>4</h1>
  <h2>Error: 404 page not found</h2>
  <p>Sorry, the page you're looking for cannot be accessed</p>
</main>
    </>
  )
}

export default ErrorPage