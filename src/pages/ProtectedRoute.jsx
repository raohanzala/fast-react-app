import  { useEffect } from 'react'
import { useAuth } from '../Contexts/FakeAuthContext'
import { useNavigate } from 'react-router-dom'
import PropTypes from "prop-types" 


ProtectedRoute.propTypes ={
  children : PropTypes.element
}

function ProtectedRoute({children}) {

  const {isAuthenticated} = useAuth()
  const navigate = useNavigate()

  useEffect(function(){
    if(!isAuthenticated)return navigate('/')
  },[isAuthenticated, navigate])

  return isAuthenticated ? children : null
}

export default ProtectedRoute