import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Container  from './components/pages/Container/Container'
import Nav        from './components/pages/Nav/Nav'
import Home       from './components/pages/Home/Home'
import Contact    from './components/pages/randons/Contact'
import Company    from './components/pages/randons/Company'
import Projects   from './components/pages/Projects/AllProjects/Projects'
import NewProject from './components/pages/Projects/NewProject/NewProject'
import Services   from './components/pages/Projects/services/Services'
import Footer     from './components/pages/Footer/Footer'


function App() {

  return (
   <BrowserRouter>
    <Nav />   
    <Container>
      <Routes>

          <Route exact path="/Costs-React"    element={<Home       />} />
          <Route       path="/Costs-React/projects"       element={<Projects   />} />
          <Route       path="/Costs-React/company"        element={<Company    />} />
          <Route       path="/Costs-React/contact"        element={<Contact    />} /> 
          <Route       path="/Costs-React/newproject"     element={<NewProject />} /> 
          <Route       path="/Costs-React/projects/:id"    element={<Services   />} />   
          
      </Routes>

    </Container>
   <Footer />
   </BrowserRouter>
  )
}

export default App
